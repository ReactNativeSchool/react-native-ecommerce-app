import Stripe from 'stripe';
import { PrismaClient } from '@prisma/client';

import { decodeJWT } from '../../util/auth';

const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET);

const getUser = async req => {
  try {
    const decoded = await decodeJWT(req?.headers?.authorization);

    const user = await prisma.user.findFirst({
      where: {
        id: decoded.id,
      },
    });

    return user;
  } catch {
    return null;
  }
};

const createStripeUser = async ({ id, email }) => {
  const customer = await stripe.customers.create({ email });

  return prisma.user.update({
    where: {
      id,
    },
    data: {
      stripe_customer_id: customer.id,
    },
  });
};

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  let user = await getUser(req, res);
  if (!user) {
    return res
      .status(401)
      .json({ message: 'You must be signed in to do that.' });
  }

  // Ensure that we've registered them with stripe
  if (!user.stripe_customer_id) {
    user = await createStripeUser(user);
  }

  const cart = req.body.cart || {};

  // get products
  const productIds = Object.keys(cart);
  const products = await prisma.product.findMany({
    where: {
      id: {
        in: productIds,
      },
    },
    select: {
      id: true,
      price: true,
    },
  });

  // calculate total
  let total = 0;
  products.forEach(product => {
    total += product.price * cart[product.id].quantity;
  });

  // Create an ephemeral key for the Customer; this allows the app to display saved payment methods and save new ones
  const ephemeralKey = await stripe.ephemeralKeys.create(
    { customer: user.stripe_customer_id },
    { apiVersion: '2020-08-27' },
  );

  // Create payment intent
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
    customer: user.stripe_customer_id,
  });

  return res.status(200).json({
    publishableKey: process.env.STRIPE_PUBLIC,
    paymentIntent: paymentIntent.client_secret,
    customer: user.stripe_customer_id,
    ephemeralKey: ephemeralKey.secret,
    cart,
  });
};

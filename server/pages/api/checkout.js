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

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const user = await getUser(req, res);
  if (!user) {
    return res
      .status(401)
      .json({ message: 'You must be signed in to do that.' });
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

  // Create payment intent
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  return res.status(200).json({
    publishableKey: process.env.STRIPE_PUBLIC,
    paymentIntent: paymentIntent.client_secret,
    cart,
  });
};

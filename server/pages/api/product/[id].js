import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const id = req?.query?.id;
  if (!id) {
    return res.status(400).json({ message: 'Missing product id.' });
  }

  const selectFields = {
    id: true,
    name: true,
    image: true,
    price: true,
    description: true,
  };

  const data = await prisma.product.findUnique({
    where: {
      id,
    },
    select: selectFields, // only return certain fields
  });

  if (!data) {
    return res.status(400).json({ message: 'Invalid product id.' });
  }

  return res.status(200).json({ data });
};

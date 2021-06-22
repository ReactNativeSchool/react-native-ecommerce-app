import prisma from '../../../util/prisma';

export default async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const selectFields = {
    id: true,
    name: true,
    image: true,
    price: true,
  };

  const bestSellers = await prisma.product.findMany({
    where: {
      soldCount: {
        gt: 0, // only get items that have been sold
      },
    },
    orderBy: {
      soldCount: 'desc', // sort the results
    },
    take: 3, // limit results to 3
    select: selectFields, // only return certain fields
  });

  const newItems = await prisma.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    take: 3,
    select: selectFields,
  });

  const data = [
    {
      title: 'Best Sellers',
      items: bestSellers,
    },
    {
      title: 'New Items',
      items: newItems,
    },
  ];

  return res.status(200).json({ data });
};

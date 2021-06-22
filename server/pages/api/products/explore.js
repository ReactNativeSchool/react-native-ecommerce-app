import prisma from '../../../util/prisma';

export default async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const categories = await prisma.category.findMany({
    // Only get categories that have at least one product in them
    where: {
      products: { some: {} },
    },
    orderBy: {
      name: 'asc',
    },
    select: {
      id: true,
      name: true,
      // we also want to grab the child products
      products: {
        select: {
          id: true,
          name: true,
          image: true,
          price: true,
        },
      },
    },
  });

  return res.status(200).json({ categories });
};

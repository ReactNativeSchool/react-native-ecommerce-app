const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const deserts = [
  {
    name: 'Chocolate Cake',
    price: 4999,
    description:
      'Chocolate cake or chocolate gâteau (from French: gâteau au chocolat) is a cake flavored with melted chocolate, cocoa powder, or both.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Chocolate_fudge_cake.jpg/440px-Chocolate_fudge_cake.jpg',
  },
  {
    name: 'Coffee Cake',
    price: 3999,
    description: `Coffee cake is any cake intended to be eaten with coffee,[1] however British coffee cake is typically a sponge cake flavored with coffee,[2] typically baked in a circular shape with two layers separated by coffee butter icing,[3] which also covers the top of the cake. Walnuts are a common addition, to make coffee and walnut cake.[4] In the United States, coffee cake generally refers to a sweet cake intended to be eaten with coffee or tea (like tea cake).[5][6] The American variety is presented in a single layer, flavoured with either fruit or cinnamon, and leavened with either baking soda (or baking powder), which results in a more cake-like texture, or yeast, which results in a more bread-like texture. They may be loaf-shaped, for easy slicing or baked in a Bundt or tube pan.`,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Vegan_Cranberry_Coffee_Cake_%284162820643%29.jpg/440px-Vegan_Cranberry_Coffee_Cake_%284162820643%29.jpg',
  },
  {
    name: 'Chocolate Chip Cookies (12)',
    price: 1999,
    description: `A chocolate chip cookie is a drop cookie that features chocolate chips or chocolate morsels as its distinguishing ingredient. Chocolate chip cookies originated in the United States around 1938, when Ruth Graves Wakefield chopped up a Nestlé semi-sweet chocolate bar and added the chopped chocolate to a cookie recipe.

    Generally, the recipe starts with a dough composed of flour, butter, both brown and white sugar, semi-sweet chocolate chips, eggs, and vanilla. Variations on the recipe may add other types of chocolate, as well as additional ingredients such as nuts or oatmeal. There are also vegan versions with the necessary ingredient substitutions, such as vegan chocolate chips, vegan margarine, and egg substitutes. A chocolate chocolate chip cookie uses a dough flavored with chocolate or cocoa powder, before chocolate chips are mixed in. These variations of the recipe are also referred to as ‘double’ or ‘triple’ chocolate chip cookies, depending on the combination of dough and chocolate types.`,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/440px-2ChocolateChipCookies.jpg',
    soldCount: 2,
  },
];

const seed = async () => {
  const inserts = deserts.map(desert =>
    prisma.product.create({
      data: desert,
    }),
  );

  await Promise.all(inserts);
};

seed()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

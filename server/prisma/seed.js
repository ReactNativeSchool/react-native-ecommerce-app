const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const categories = [
  {
    name: 'Cakes',
    products: {
      create: [
        {
          name: 'Chocolate Cake',
          price: 4999,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Chocolate_fudge_cake.jpg/440px-Chocolate_fudge_cake.jpg',
          description:
            'Chocolate cake or chocolate gâteau (from French: gâteau au chocolat) is a cake flavored with melted chocolate, cocoa powder, or both.',
        },
        {
          name: 'Coffee Cake',
          price: 3999,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Vegan_Cranberry_Coffee_Cake_%284162820643%29.jpg/440px-Vegan_Cranberry_Coffee_Cake_%284162820643%29.jpg',
          description:
            'Coffee cake is any cake intended to be eaten with coffee,[1] however British coffee cake is typically a sponge cake flavored with coffee,[2] typically baked in a circular shape with two layers separated by coffee butter icing,[3] which also covers the top of the cake. Walnuts are a common addition, to make coffee and walnut cake.[4] In the United States, coffee cake generally refers to a sweet cake intended to be eaten with coffee or tea (like tea cake).[5][6] The American variety is presented in a single layer, flavoured with either fruit or cinnamon, and leavened with either baking soda (or baking powder), which results in a more cake-like texture, or yeast, which results in a more bread-like texture. They may be loaf-shaped, for easy slicing or baked in a Bundt or tube pan.',
        },
        {
          name: 'Swiss Roll',
          price: 1280,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Sri_Lankan_Swiss_roll.jpg/1280px-Sri_Lankan_Swiss_roll.jpg',
          description:
            'A Swiss roll, jelly roll, roll cake, cream roll, roulade or Swiss log is a type of rolled sponge cake filled with whipped cream, jam, or icing. It appears to have been invented in the nineteenth century, along with Battenberg cake, doughnuts, and Victoria sponge.[2] In the U.S., commercial versions of the cake are widely known under brand names like Ho Hos, Yodels, and Swiss Cake Rolls.',
        },
        {
          name: 'Sponge Cake',
          price: 4450,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Cake_competition_%2814287027130%29.jpg/1280px-Cake_competition_%2814287027130%29.jpg',
          description:
            'Sponge cake is a light cake made with egg whites, flour and sugar,[1] sometimes leavened with baking powder.[2] Sponge cakes, leavened with beaten eggs, originated during the Renaissance, possibly in Spain.[3] The sponge cake is thought to be one of the first of the non-yeasted cakes, and the earliest attested sponge cake recipe in English is found in a book by the English poet Gervase Markham, The English Huswife, Containing the Inward and Outward Virtues Which Ought to Be in a Complete Woman (1615).[4]',
        },
        {
          name: 'Layer Cake',
          price: 1799,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/3/3f/Dobos_cake_%28Gerbeaud_Confectionery_Budapest_Hungary%29.jpg',
          description:
            'A layer cake (US English) or sandwich cake (UK English)[1] is a cake consisting of multiple stacked sheets of cake, held together by frosting or another type of filling, such as jam or other preserves. Popular flavor combinations include the German chocolate cake, red velvet cake, Black Forest cake, and carrot cake with cream cheese icing. Many wedding cakes are decorated layer cakes.',
        },
      ],
    },
  },
  {
    name: 'Cookies',
    products: {
      create: [
        {
          name: 'Chocolate Chip Cookies',
          price: 1999,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/440px-2ChocolateChipCookies.jpg',
          description:
            'A chocolate chip cookie is a drop cookie that features chocolate chips or chocolate morsels as its distinguishing ingredient. Chocolate chip cookies originated in the United States around 1938, when Ruth Graves Wakefield chopped up a Nestlé semi-sweet chocolate bar and added the chopped chocolate to a cookie recipe. Generally, the recipe starts with a dough composed of flour, butter, both brown and white sugar, semi-sweet chocolate chips, eggs, and vanilla. Variations on the recipe may add other types of chocolate, as well as additional ingredients such as nuts or oatmeal. There are also vegan versions with the necessary ingredient substitutions, such as vegan chocolate chips, vegan margarine, and egg substitutes. A chocolate chocolate chip cookie uses a dough flavored with chocolate or cocoa powder, before chocolate chips are mixed in. These variations of the recipe are also referred to as ‘double’ or ‘triple’ chocolate chip cookies, depending on the combination of dough and chocolate types.',
        },
        {
          name: 'Macaron Cookies',
          price: 2500,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/VanillaMacaron.jpg/1280px-VanillaMacaron.jpg',
          description:
            'A macaron [1][2] French: [ma.ka.ʁɔ̃]) or French macaroon (/ˌmækəˈruːn/ mak-ə-ROON[3][4]) is a sweet meringue-based confection made with egg white, icing sugar, granulated sugar, almond meal, and food colouring. Since the 19th century, a typical Parisian-style macaron is presented with a ganache, buttercream or jam filling sandwiched between two such cookies, akin to a sandwich cookie. The confection is characterized by a smooth squared top, a ruffled circumference—referred to as the "crown" or "foot" (or "pied")—and a flat base.',
        },
        {
          name: 'Ginger Snap Cookies',
          price: 1599,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Arnott%27s_Ginger_Nut_04.jpg/1280px-Arnott%27s_Ginger_Nut_04.jpg',
          description:
            'A gingersnap,[1] ginger snap, ginger nut,[2] or ginger biscuit is a globally popular biscuit flavoured with ginger. Ginger snaps are flavoured with powdered ginger and a variety of other spices, most commonly cinnamon, molasses[3] and clove.[4] There are many recipes.[5] The brittle ginger nut style is a commercial version of the traditional fairings once made for market fairs now represented only by the Cornish fairing.',
        },
        {
          name: 'Oatmeal Raisin Cookies',
          price: 1325,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Oatmeal_Cookies_with_orange_zest%2C_golden_raisins%2C_and_chocolate_chips.jpg/1280px-Oatmeal_Cookies_with_orange_zest%2C_golden_raisins%2C_and_chocolate_chips.jpg',
          description:
            'An oatmeal raisin cookie is a type of drop cookie made from an oatmeal-based dough with raisins. Its ingredients also typically include flour, sugar, eggs, salt, and spices.[1] When the cookies were becoming prominent in the United States in the early 1900s, they came to be known as a health food[3] because of the fiber and vitamins from the oatmeal and raisins. Nonetheless, the nutritional value of an oatmeal raisin cookie is essentially the same as a chocolate chip cookie in sugar, fat, calorie and fiber content.[4][5]',
        },
        {
          name: 'Peanut Butter Biscuits',
          price: 1450,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Peanut_butter_cookies%2C_September_2009.jpg/1280px-Peanut_butter_cookies%2C_September_2009.jpg',
          description:
            'A peanut butter cookie is a type of cookie that is distinguished for having peanut butter as a principal ingredient. The cookie originated in the United States, its development dating back to the 1910s.[1] If crunchy peanut butter is used, the resulting cookie may contain peanut fragments.',
        },
      ],
    },
  },
  {
    name: 'Frozen',
    products: {
      create: [
        {
          name: 'Ice Cream',
          price: 550,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/1024px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg',
          description:
            'Ice cream (derived from earlier cream ice)[1] is a sweetened frozen food typically eaten as a snack or dessert. It may be made from dairy milk or cream and is flavoured with a sweetener, either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruit such as strawberries or peaches. It can also be made by whisking a flavored cream base and liquid nitrogen together. Colorings are sometimes added, in addition to stabilizers.',
        },
        {
          name: 'Sorbet',
          price: 799,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/RaspberrySherbet.jpg/1024px-RaspberrySherbet.jpg',
          description:
            'Sorbet, also called "Italian ice" or "water ice"[1] is a frozen dessert made from sugar-sweetened water with flavoring – typically fruit juice, fruit purée, wine, liqueur or honey. Generally sorbets do not contain dairy ingredients, while sherbets do.',
        },
        {
          name: 'Fried Ice Cream',
          price: 1055,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/3/38/FriedIceCream.jpg',
          description:
            'Fried ice cream is a dessert made of a scoop of ice cream that is frozen hard, breaded or coated in a batter, and quickly deep-fried, creating a warm, crispy shell around the still-cold ice cream.',
        },
        {
          name: 'Semifreddo',
          price: 999,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/c/c3/Semifreddo_dessert.jpg',
          description:
            "Semifreddo (pronounced [ˌsemiˈfreddo], Italian: half cold) is a class of frozen desserts. The main ingredients are egg yolks, sugar, and cream. It has the texture of frozen mousse. Such a dessert's Spanish counterpart is called semifrío.[1][2] It was created around the 19th century. However, it did not gain popularity until the early 20th century.[3]",
        },
      ],
    },
  },
  {
    name: 'Pies',
    products: {
      create: [
        {
          name: 'Cream Pie',
          price: 4500,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Coconut_cream_pie.jpg/1280px-Coconut_cream_pie.jpg',
          description:
            'A cream pie is a type of pie filled with a rich custard or pudding that is made from milk, cream, sugar, wheat flour, and eggs.[1] It comes in many forms, including vanilla, lemon, lime, peanut butter, banana, coconut, and chocolate.[1] One feature of most cream pies is a whipped cream topping. The custard filling is related to crème patissière, a key component of French cakes and tarts. It is a one-crust pie, where the crust covers the bottoms and sides but not the top.',
        },
        {
          name: 'Apple Pie',
          price: 3899,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Apple_pie.jpg/1280px-Apple_pie.jpg',
          description:
            'An apple pie is a pie in which the principal filling ingredient is apple, originated in England. It is often served with whipped cream, ice cream ("apple pie à la mode"), or cheddar cheese.[3] It is generally double-crusted, with pastry both above and below the filling; the upper crust may be solid or latticed (woven of crosswise strips). The bottom crust may be baked separately ("blind") to prevent it from getting soggy.',
        },
        {
          name: 'Pecan Pie',
          price: 1599,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/b/be/Pecan_pie%2C_November_2010.jpg',
          description:
            'Pecan pie is a pie of pecan nuts mixed with a filling of eggs, butter, and sugar (typically corn syrup).[1] Variations may include white or brown sugar, cane syrup, sugar syrup, molasses, maple syrup, or honey.[1] It is popularly served at holiday meals in the United States and is considered a specialty of Southern U.S. origin.[2][3] Most pecan pie recipes include salt and vanilla as flavorings. Chocolate and bourbon whiskey are other popular additions to the recipe.[4]',
        },
        {
          name: 'Lemon Pie',
          price: 1855,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Theres_always_room_for_pie_%287859650026%29.jpg/1280px-Theres_always_room_for_pie_%287859650026%29.jpg',
          description:
            'Lemon meringue pie is a type of dessert pie, consisting of a shortened pastry base filled with lemon curd and topped with meringue.',
        },
        {
          name: 'Sweet Potato Pie',
          price: 2299,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/SweetPotatoPie.jpg/1280px-SweetPotatoPie.jpg',
          description:
            'Sweet potato pie (also:"sweet potato casserole") is a traditional dessert, originating in the Southern United States. It is often served during the American holiday season, especially at Thanksgiving and Christmas in place of pumpkin pie, which is more traditional in other regions of the United States. It is made in an open pie shell without a top crust. The filling consists of mashed sweet potatoes, evaporated milk, sugar, spices such as nutmeg, and eggs.',
        },
      ],
    },
  },
  {
    name: 'Puddings',
    products: {
      create: [
        {
          name: 'Mousse',
          price: 2099,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Chocolate_coffee_mousse.jpg/1024px-Chocolate_coffee_mousse.jpg',
          description:
            'A mousse (/ˈmuːs/; French: [mus]; "foam") is a soft prepared food that incorporates air bubbles to give it a light and airy texture. It can range from light and fluffy to creamy and thick, depending on preparation techniques. A mousse may be sweet or savory.[1] Sweet mousses are typically made with whipped egg whites, whipped cream,[2] or both, and flavored with one or more of chocolate, coffee, caramel,[3] puréed fruits, or various herbs and spices, such as mint or vanilla.[4]',
        },
        {
          name: 'Gelatin',
          price: 4700,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Rainbow-Jello-Cut-2004-Jul-30.jpg/1280px-Rainbow-Jello-Cut-2004-Jul-30.jpg',
          description:
            'Gelatin desserts are desserts made with a sweetened and flavored processed collagen product (gelatin). This kind of dessert was first recorded as jelly by Hannah Glasse in her 18th century book The Art of Cookery, appearing in a layer of trifle. Jelly is also featured in the best selling cookbooks of English food writers Eliza Acton and Isabella Beeton in the 19th century. They can be made by combining plain gelatin with other ingredients or by using a premixed blend of gelatin with additives.',
        },
        {
          name: 'Rice Pudding',
          price: 3550,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/1/19/Risalamande.jpg',
          description:
            'Rice pudding is a dish made from rice mixed with water or milk and other ingredients such as cinnamon, vanilla and raisins. Variants are used for either desserts or dinners. When used as a dessert, it is commonly combined with a sweetener such as sugar. Such desserts are found on many continents, especially Asia where rice is a staple. Some variants are thickened only with the rice starch; others include eggs, making them a kind of custard.[1]',
        },
        {
          name: 'Blancmange',
          price: 899,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Blanc-manger_on_glass_platter.jpg/1280px-Blanc-manger_on_glass_platter.jpg',
          description:
            'Blancmange (/bləˈmɒ̃ʒ/, from French: blanc-manger is a sweet dessert commonly made with milk or cream and sugar thickened with rice flour, gelatin, corn starch or Irish moss[1] (a source of carrageenan), and often flavoured with almonds. It is usually set in a mould and served cold. Although traditionally white (hence the name, in English literally "white eating"), blancmanges are frequently given alternative colours.',
        },
        {
          name: 'Sticky Toffee Pudding',
          price: 1595,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/7/7e/StickyToffeePudding_%28cropped%29.jpg',
          description:
            'Sticky toffee pudding, also known as STP[1] or as sticky date pudding in Australia and New Zealand, is a British/English dessert consisting of a very moist sponge cake, made with finely chopped dates, covered in a toffee sauce and often served with a vanilla custard or vanilla ice-cream.[2] It is considered a British classic by various culinary experts,[3][4] alongside bread and butter pudding, jam roly-poly and spotted dick puddings.',
        },
      ],
    },
  },
];

const seed = async () => {
  const inserts = categories.map(category =>
    prisma.category.create({
      data: category,
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

const faker = require("faker");

const maxStars = 5;

const otherAdditionalImagesRange = {
  max: 5,
  min: 2,
};

const range = otherAdditionalImagesRange.max - otherAdditionalImagesRange.min;

const createFakeProduct = (numOfCategories) => (id) => ({
  id,
  name: faker.commerce.productName(),
  description: faker.lorem.sentences(),
  price: faker.commerce.price(),
  rated: faker.datatype.number() % (maxStars + 1),
  is_in_stock: faker.datatype.boolean,
  categoryId: (faker.datatype.number() % numOfCategories) + 1,
  mainImage: faker.image.food(),
});

module.exports = createFakeProduct;

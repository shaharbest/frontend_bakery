const faker = require("faker");

const createFakeProductImage = (productId, imageSerialNum) => ({
  productId,
  imageSerialNum,
  imagePath: faker.image.food(),
});

module.exports = createFakeProductImage;

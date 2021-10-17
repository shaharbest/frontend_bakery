const createFakeProductImage = require("../single/productImages");

function getFakeProductImagesArray(products, imagesPerProduct) {
  const productImagesArray = [];

  products.forEach((curProduct) => {
    for (let i = 0; i < imagesPerProduct; i++) {
      productImagesArray.push(createFakeProductImage(curProduct.id, i + 1));
    }
  });

  return productImagesArray;
}

module.exports = getFakeProductImagesArray;

const productsPerUser = 2;

function getFakeUsersFavourites(users, products) {
  const productsCount = products.length;
  const fakeUsersFavourites = [];
  let productsIndexesChosen;
  let productsIdsChosen;
  let chosenProductIndex;
  users.forEach((curUser) => {
    productsIndexesChosen = [];
    productsIdsChosen = [];
    for (let i = 0; i < productsPerUser; i++) {
      do {
        chosenProductIndex = getRandomInt(productsCount);
      } while (productsIndexesChosen.includes(chosenProductIndex));
      productsIndexesChosen.push(chosenProductIndex);
    }
    productsIdsChosen = productsIndexesChosen.map(
      (curIndex) => products[curIndex].id
    );
    fakeUsersFavourites.push(
      ...productsIdsChosen.map((curProductId) => ({
        userId: curUser.id,
        productId: curProductId,
      }))
    );
  });

  return fakeUsersFavourites;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = getFakeUsersFavourites;

const faker = require("faker");
const createFakeOrder = require("../single/order");

const orderCount = 5;

function getFakeOrders(users) {
  const fakeOrders = [];
  let userId;

  for (let i = 0; i < orderCount; i++) {
    userId = users[getRandomInt(users.length)].id
    fakeOrders.push(createFakeOrder(i + 1, userId));
  }

  return fakeOrders;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

module.exports = getFakeOrders;

const faker = require("faker");

const createFakeOrder = (orderId, userId) => ({
  orderId,
  userId,
  isForDelivery: true,
  address: faker.address.streetAddress(),
  dateCreated: faker.date.past(),
  discount: 10,
  vatRate: 17,
  totalPrice: 200,
});

module.exports = createFakeOrder;

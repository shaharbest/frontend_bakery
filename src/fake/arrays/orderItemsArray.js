const faker = require("faker");

const productsPerOrder = 2;

function getFakeOrderItems(orders, products) {
  const orderItems = [];

  orders.forEach((curOrder) => {
    for (let i = 0; i < productsPerOrder; i++) {
      orderItems.push({
        orderId: curOrder.orderId,
        productId: i + 1,
        quantity: 3,
        productUnitPrice: 10,
        productName: products[i + 1].name,
      });
    }
  });
  return orderItems;
}

module.exports = getFakeOrderItems;

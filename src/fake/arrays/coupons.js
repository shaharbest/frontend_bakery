// const faker = require("faker");
// const couponTypes = require("../couponTypes");

function getFakeCouponsArray() {
  const coupons = [
    { id: 1, couponType: 1, couponCode: "AAAAAAAAAA", wasUsed: false },
    { id: 2, couponType: 1, couponCode: "BBBBBBBBBB", wasUsed: false },
    { id: 3, couponType: 1, couponCode: "CCCCCCCCCC", wasUsed: true },
    { id: 1, couponType: 2, couponCode: "DDDDDDDDDD", wasUsed: false },
    { id: 2, couponType: 2, couponCode: "EEEEEEEEEE", wasUsed: false },
    { id: 3, couponType: 2, couponCode: "FFFFFFFFFF", wasUsed: false },
    { id: 1, couponType: 3, couponCode: "GGGGGGGGGG", wasUsed: true },
    { id: 2, couponType: 3, couponCode: "HHHHHHHHHH", wasUsed: false },
    { id: 3, couponType: 3, couponCode: "IIIIIIIIII", wasUsed: false },
  ];

  return coupons
}

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max) + 1;
// }

module.exports = getFakeCouponsArray;

import db from "./data/db";

function getProductPics(id) {
  return db.pics_pathes.find((element) => element.product_id === id);
}

function getProduct(id) {
  return db.products.find((product) => product.id === id);
}

function getCurrencySymbol() {
  return db.config.price_currency;
}

function getMaamPercent() {
  return 17;
}

function getCouponDiscountPercent() {
  return 20;
}

function getAllCouponNumbers() {
  return db.coupon_numbers;
}

function getIsCouponOnKey() {
  return db.config.isCouponActiveKey;
}

function getAllProducts() {
  return db.products;
}

function getCartKey() {
  return db.cartKey;
}

function getDomainMap() {
  return db.domainMap;
}

function getAllCategories() {
  return db.config.categories;
}

function getSelectAllOption() {
  return db.config.select_all_option;
}

function getSortCategoryOptions() {
  return db.config.sortCategoryOptions;
}

function getGroups() {
  return db.groups;
}

function getStarsMax() {
  return db.config.stars.max;
}

function getNoPicPath() {
  return db.config.noPicPath;
}

function getBlogStories() {
  return db.stories;
}

function getUserById(id) {
  return db.users.find((curUser) => curUser.id === id);
}

export {
  getIsCouponOnKey,
  getAllCouponNumbers,
  getProductPics,
  getProduct,
  getCurrencySymbol,
  getMaamPercent,
  getCouponDiscountPercent,
  getAllProducts,
  getCartKey,
  getDomainMap,
  getAllCategories,
  getSelectAllOption,
  getSortCategoryOptions,
  getGroups,
  getStarsMax,
  getNoPicPath,
  getBlogStories,
  getUserById,
};

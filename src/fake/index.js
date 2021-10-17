const userCreator = require("./single/user");
const productCreator = require("./single/product");
const blogPostCreator = require("./single/blogPost");
const getFakeUsersFavourites = require("./arrays/userFavouritesArrayCreator");
const getFakeCouponsArray = require("./arrays/coupons");
const getFakeCommentsArray = require("./arrays/commentsArray");
const getFakeProductImagesArray = require("./arrays/productsImages");
const getFakeOrderItems = require("./arrays/orderItemsArray");
const getFakeOrders = require("./arrays/ordersArray");

const cartItems = require("./arrays/cartItems");
const couponTypes = require("./arrays/couponTypes");
const categories = require("./arrays/categories");
const cities = require("./arrays/cities");
const { data } = require("autoprefixer");

const productCount = 3;
const commentsPerPost = 2;
const imagesPerProduct = 2;

const entities = {
  users: {
    count: 3,
    creator: userCreator(cities),
  },
  blogPosts: {
    count: 3,
    creator: blogPostCreator,
  },
};

const getFakeData = () => {
  const data = {};

  for (const curEntity in entities) {
    data[curEntity] = getFakeEntitiesArray(
      entities[curEntity].creator,
      entities[curEntity].count
    );
  }

  data.categories = categories;
  data.products = getFakeEntitiesArray(
    productCreator(categories.length),
    productCount
  );
  data.productImages = getFakeProductImagesArray(
    data.products,
    imagesPerProduct
  );
  data.comments = getFakeCommentsArray(
    data.blogPosts,
    data.users,
    commentsPerPost
  );
  data.userFavourites = getFakeUsersFavourites(data.users, data.products);
  data.couponTypes = couponTypes;
  data.coupons = getFakeCouponsArray();
  data.orders = getFakeOrders(data.users);
  data.orderItems = getFakeOrderItems(data.orders, data.products);
  data.cartItems = cartItems;

  return data;
};

function getFakeEntitiesArray(fakeCreator, entitiesCount) {
  const fakeEntitiesArray = [];

  for (let i = 1; i <= entitiesCount; i++) {
    fakeEntitiesArray.push(fakeCreator(i));
  }

  return fakeEntitiesArray;
}

module.exports = getFakeData;

const faker = require("faker");

const createFakeComment = (users) => (blogPostId, serialNumber) => {
  const usersCount = users.length;

  return {
    blogPostId,
    serialNumber,
    content: faker.lorem.words(),
    userId: users[getRandomInt(usersCount - 1)].id,
  };
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

module.exports = createFakeComment;

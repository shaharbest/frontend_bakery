const faker = require("faker");

function createFakeBlogPost(id) {
  return {
    id,
    title: faker.lorem.words(),
    content: faker.lorem.paragraphs(),
    image: faker.image.abstract(),
    datePosted: faker.date.past()
  };
}

module.exports = createFakeBlogPost;

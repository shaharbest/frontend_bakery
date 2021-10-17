const faker = require("faker");

const createFakeUser = (cities) => (id) => {
  const numCities = cities.length
  return {
    id,
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    streetName: faker.address.streetName(),
    streetNumber: getRandomInt(30),
    cityId: cities[getRandomInt(numCities) - 1].id,
    avatarImagePath: faker.image.avatar(),
    dateSignedUp: faker.date.past()
  };
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

module.exports = createFakeUser;

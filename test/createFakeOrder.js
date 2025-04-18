import { faker } from "@faker-js/faker"
// const _ = require('lodash');

const names = ["Double Trouble", "Supreme", "Peperoni Delux", "Cheese Me"]
const statusOptions = ["processing", "completed", "delivered", "archived"]

const fakeOrder = () => {
  return {
    orderNumber: faker.number.int({ min: 500, max: 99999 }),
    Date: faker.date.between({ from: '2025-04-01', to: Date.now() }),
    orderDetails: {
      pizzaName: faker.helpers.arrayElement(names),
      pizzaPrice: faker.commerce.price({ min: 10, max: 100, dec: 2 }),
      quantity: faker.number.int({ min: 1, max: 5 }),
    },
    address: {
      street: "1234 West Main Street",
      city: "Goodyear",
      state: "Arizona",
      zip: faker.number.int({ min: 10000, max: 99999 }),
    },
    phone: faker.phone.number({ style: 'national' }),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    orderTotal: faker.commerce.price({ min: 20, max: 100, dec: 2 }),
    status: faker.helpers.arrayElement(statusOptions),
    isArchived: false,
    // isArchived: faker.helpers.arrayElement([true, false], {
    //   min: 1,
    //   max: 1,
    // }),
  }
}

export const createFakeOrder = (length) => {
  const testOrders = []

  Array.from({ length: length }).forEach(() => {
    testOrders.push(fakeOrder())
  })
  return testOrders
}

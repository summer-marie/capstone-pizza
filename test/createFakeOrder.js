import { faker } from "@faker-js/faker"


const names = ["Double Trouble", "Supreme", "Peperoni Deluxe", "Cheese Me", "Build Your Own"]
const statusOptions = ["processing", "completed", "delivered", "archived"]



const fakeOrder = () => {
  return {
    orderNumber: faker.number.int({ min: 10000, max: 99999 }),
    Date: faker.date.between({ from: '2025-04-01', to: Date.now() }),
    orderDetails: {
      pizzaName: faker.helpers.arrayElement(names),
      pizzaPrice: faker.commerce.price({ min: 10, max: 20, dec: 2 }),
      quantity: faker.number.int({ min: 1, max: 5 }),
    },
    address: {
      street: faker.location.streetAddress(true),
      city: "Goodyear",
      state: "Arizona",
      zip: faker.number.int({ min: 10000, max: 99999 }),
    },
    phone: faker.phone.number({ style: 'national' }),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    orderTotal: faker.commerce.price({ min: 20, max: 100, dec: 2 }),
    // status: faker.helpers.arrayElement(statusOptions),
    // status: "processing",
    // status: "completed",
    status: "delivered",
    // status: "archived",

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

import { faker } from "@faker-js/faker";

const names = [
  "Double Trouble",
  "Supreme",
  "Peperoni Deluxe",
  "Cheese Me",
  "Build Your Own",
];

const ZIP_CODES = ["95338", "85395"];
const START_ORDER_NUMBER = 10001;

// Helper function to generate a single pizza
const createPizza = () => {
  return {
    pizzaName: faker.helpers.arrayElement(names),
    pizzaPrice: faker.commerce.price({ min: 15, max: 20, dec: 2 }),
    quantity: faker.number.int({ min: 1, max: 5 }),
  };
};

const fakeOrder = () => {
  // Generate 1-4 pizzas
  const numberOfPizzas = faker.number.int({ min: 1, max: 4 });
  const pizzas = Array.from({ length: numberOfPizzas }, createPizza);

  // Calculate total from all pizzas
  const orderTotal = pizzas
    .reduce(
      (total, pizza) => total + parseFloat(pizza.pizzaPrice) * pizza.quantity,
      0
    )
    .toFixed(2);

  return {
    orderNumber: faker.number.int({ min: 10000, max: 99999 }),
    Date: faker.date.between({ from: "2025-04-01", to: Date.now() }),
    orderDetails: pizzas,
    address: {
      street: faker.location.streetAddress(true),
      city: "Goodyear",
      state: "Arizona",
      zip: faker.helpers.arrayElement(ZIP_CODES),
    },
    phone: faker.phone.number({ style: "national" }),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    orderTotal,

    status: "processing",
    // status: "completed",
    // status: "delivered",
    // status: "cancelled",
    isArchived: false,
  };
};

export const createFakeOrder = (length) => {
  const testOrders = [];
  // Start from current time
  let currentDate = new Date();
  let currentOrderNumber = START_ORDER_NUMBER;

  Array.from({ length: length }).forEach(() => {
    // Create the order with the current date
    const order = {
      ...fakeOrder(),
      orderNumber: currentOrderNumber++,
      Date: new Date(currentDate),
    };

    // Subtract 10 minutes for next order
    currentDate.setMinutes(currentDate.getMinutes() - 10);
    testOrders.push(order);
  });
  return testOrders;
};

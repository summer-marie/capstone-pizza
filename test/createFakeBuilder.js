import { faker } from "@faker-js/faker"

const names = [
  "Double Trouble",
  "Supreme",
  "Pepperoni Deluxe",
  "Cheese Me",
  "Build Your Own",
]
const meatNames = ["Pepperoni", "Chicken", "Sausage", "Canadian Ham", "Bacon"]
const vegNames = ["Olives", "Bell Peppers", "Mushrooms", "Pineapple", "Spinach"]
const amounts = [1, 2, 3]

const base = [
  {
    name: "Italian Blend Cheese",
    description: "Italian Blend Cheese",
    itemType: "Base",
    price: "2.00",
  },
  {
    name: "Brick Oven Crust",
    description: "Brick Oven Crust",
    itemType: "Base",
    price: "2.00",
  },
]

const fakeBuilder = () => {
  function generateVeggieTopping() {
    const itemType = "Veggie Topping"
    return {
      name: faker.helpers.arrayElement(vegNames),
      description: "",
      price: faker.commerce.price({ min: 2, max: 3, dec: 2 }),
      itemType,
      amount: faker.helpers.arrayElement(amounts),
    }
  }

  function generateMeatTopping() {
    const itemType = "Meat Topping"
    return {
      // Generates a random meat name like "chicken" or "beef"
      name: faker.helpers.arrayElement(meatNames),
      // Generates a product description for the topping
      description: "",
      price: faker.commerce.price({ min: 2, max: 3, dec: 2 }),
      itemType,
      // Generates a random number between 1 and 3 for the quantity of toppings
      amount: faker.helpers.arrayElement(amounts),
    }
  }

  return {
    pizzaName: faker.helpers.arrayElement(names),
    pizzaPrice: faker.commerce.price({ min: 10, max: 20, dec: 2 }),
    // Crust && Cheese
    base,
    sauce: {
      name: faker.helpers.arrayElement(
        ["Signature Red Sauce", "Signature White Sauce"],
        { min: 1, max: 1 }
      ),
      description: "",
      itemType: "Sauce",
      price: faker.commerce.price({ min: 2, max: 3 }),
    },
    meatTopping: faker.helpers.multiple(() => generateMeatTopping(), {
      count: {
        min: 1,
        max: 4,
      },
    }),
    veggieTopping: faker.helpers.multiple(() => generateVeggieTopping(), {
      count: {
        min: 1,
        max: 4,
      },
    }),
    image: ["../assets/basePizza.jpg"],
  }
}

export const createFakeBuilder = (length) => {
  const testBuilder = []

  Array.from({ length: length }).forEach(() => {
    testBuilder.push(fakeBuilder())
  })
  return testBuilder
}

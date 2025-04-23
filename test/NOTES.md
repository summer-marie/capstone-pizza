
```
      import { faker } from "@faker-js/faker"

        const names = [
          "Double Trouble",
          "Supreme",
          "Peperoni Delux",
          "Cheese Me",
          "Build Your Own",
        ]

        const base = [
          {
            name: "Italian Blend Cheese",
            description: "Italian Blen Cheese",
            itemType: "base",
            price: "2.00",
          },
          {
            name: "Brick Oven Crust",
            description: "Brick Oven Crust",
            itemType: "base",
            price: "2.00",
          },
        ]

const veggieTopping = [
  {
    name: faker.helpers.arrayElement([
      "Mushrooms",
      "Bell Peppers",
      "Onion",
      "Pineapple",
    ]),
    description: "",
    itemType: "Veggie Topping",
    price: faker.commerce.price({ min: 2, max: 3 }),
  },
  {
    name: faker.helpers.arrayElement([
      "Mushrooms",
      "Bell Peppers",
      "Onion",
      "Pineapple",
    ]),
    description: "",
    itemType: "Veggie Topping",
    price: faker.commerce.price({ min: 2, max: 3 }),
  },
]

const meatTopping = [
  {
    name: faker.helpers.arrayElement([
      "Pepperoni",
      "Sausage",
      "Chicken",
      "Bacon",
    ]),
    description: "",
    itemType: "Meat Topping",
    price: faker.commerce.price({ min: 2, max: 3 }),
  },
  {
    name: faker.helpers.arrayElement([
      "Pepperoni",
      "Sausage",
      "Chicken",
      "Bacon",
    ]),
    description: "",
    itemType: "Meat Topping",
    price: faker.commerce.price({ min: 2, max: 3 }),
  },
]

const fakeBuilder = () => {
  return {
    pizzaName: faker.helpers.arrayElement(names),
    pizzaPrice: faker.commerce.price({ min: 10, max: 20, dec: 2 }),
    // Crust && Cheese
    base,
    sauce: {
      name: faker.helpers.arrayElement(
        ["Signature Red Sauce", "creamy White Sauce"],
        { min: 1, max: 1 }
      ),
      description: "",
      itemType: "sauce",
      price: faker.commerce.price({ min: 2, max: 3 }),
    },
    meatTopping,
    veggieTopping,
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
```
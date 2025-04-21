import mongoose from "mongoose"
import ingredientsModel from "./ingredientsModel";

const Schema = mongoose.Schema

// Sauce schema
const sauceSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  imageUrl: String,
  price: Number
});

// MeatToppings schema
const meatToppingSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  imageUrl: String,
  price: Number
});

// VeggieToppings schema
const veggieToppingSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  imageUrl: String,
  price: Number
});

// Base schema (Crust and Cheese)
const baseSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  imageUrl: String,
  price: Number
});

// Create the Ingredient model using the combined schema
const Ingredient = ingredientsModel.model('Ingredient', new Schema({
  // Array of ingredient objects
  sauce: [sauceSchema], 
  meatToppings: [meatToppingSchema], 
  veggieToppings: [veggieToppingSchema], 
  // Single object for the crust and cheese
  base: { type: baseSchema, required: true }, 
}));

// Export the Ingredient model
module.exports = Ingredient;
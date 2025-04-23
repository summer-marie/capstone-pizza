import mongoose from "mongoose"

const Schema = mongoose.Schema

const builderSchema = new Schema({
  pizzaName: {
    type: String,
    // required: true,
  },
  pizzaPrice: {
    type: Number,
    default: 0,
  },
  // Crust && Cheese
  base: [
    {
      name: String,
      description: String,
      itemType: String,
      price: Number,
      // required: true,
    },
  ],
  sauce: {
    name: String,
    description: String,
    price: Number,
    // required: true,
  },
  meatTopping: [
    // Fixed ingredients for each pizza
    {
      name: String,
      description: String,
      price: Number,
      // required: true,
    },
  ],
  veggieTopping: [
    {
      name: String,
      description: String,
      price: Number,
      // required: true,
    },
  ],

  //  image: { data: Buffer, contentType: String }, // for binary images
  image: [],
})

export default builderSchema

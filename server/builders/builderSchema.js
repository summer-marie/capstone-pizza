import mongoose from "mongoose"

const Schema = mongoose.Schema

const builderSchema = new Schema({
  pizzaName: {
    type: String,
    required: true,
  },
  // Crust && Cheese
  base: { name: String, description: String, required: true },
  sauce: { name: String, description: String, required: true },
  toppings: [
    // Fixed ingredients for each pizza
    {
      name: String,
      description: String,
      required: true,
    },
  ],
  price: { type: Number, required: true },
  //  image: { data: Buffer, contentType: String }, // for binary images
  image: [],
})

export default builderSchema

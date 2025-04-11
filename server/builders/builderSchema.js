import mongoose from "mongoose"

const Schema = mongoose.Schema

const builderSchema = new Schema({
  pizzaName: {
    type: String,
    default: "",
    required: true,
  },
  // Crust I guess..... lol
  base: { type: String, default: "", required: true },
  sauce: { type: String, default: "", required: true },
  toppings: [
    // Fixed ingredients for each pizza
    {
      type: String,
      default: "",
      required: true,
    },
    // Optional extras if needed
    {
      type: String,
      default: "",
      required: false,
    },
  ],
  price: { type: Number, default: 0, required: true },
})

export default builderSchema

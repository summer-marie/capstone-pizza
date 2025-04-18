import mongoose from "mongoose"

// TODO: Combine customer info into its own obj called customer:
// top level is good for small ammounts of data, but if it grows may need to nest the info

const Schema = mongoose.Schema

const orderSchema = new Schema({
  orderNumber: {
    type: String,
    defaultFormat: "integer",
  },
  Date: {
    type: String,
    defaultFormat: "YYYY-MM-DD",
  },
  orderDetails: {
    type: String,
    defaultFormat: "object",
    pizzaName: {
      type: String,
      defaultFormat: "object",
    },
    pizzaPrice: {
      type: DecimalNumber,
      format: "$XX.XX",
    },
    quantity: {
      type: Number,
    },
  },
  address: {
    street: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "",
    },
    state: {
      type: String,
      default: "",
    },
    zip: {
      type: String,
      default: "",
    },
  },
  phone: {
    type: Number,
    minimum: 10,
    maximum: 20,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  orderTotal: {
    type: DecimalNumber,
    defaultFormat: "$XX.XX",
  },
  status: {
    type: String,
    enum: {
      processing: "processing",
      completed: "completed",
      delivered: "delivered",
      archived: "archived",
    },
  },
  isArchived: {
    type: Boolean,
    default: false,
  },
})

export default orderSchema

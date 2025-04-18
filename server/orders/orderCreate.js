import orderModel from "../../schemas/orderModel.js"

const orderCreate = async (req, res) => {
  const {
    orderNumber,
    Date,
    orderDetails,
    address,
    phone,
    firstName,
    lastName,
    orderTotal,
  } = req.body
  // Validation
  if (
    !orderNumber ||
    orderNumber == "" ||
    !orderDetails ||
    orderDetails == "" ||
    !Date == "" ||
    !address ||
    !firstName ||
    firstName == "" ||
    !orderTotal ||
    orderTotal.length === 0
  ) {
    res.status(500).json({ message: "ERR: Invalid order information" })
  } else {
    const newOrder = await orderModel.create({
      orderNumber,
      Date,
      orderDetails,
      address,
      phone,
      firstName,
      lastName,
      orderTotal,
    })
    console.log("newOrder", newOrder)

    res.status(200).json({ success: true, message: "Order created!!" })
  }
}

export default orderCreate

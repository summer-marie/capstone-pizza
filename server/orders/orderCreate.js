import orderModel from "./orderModel.js"
import generateOrderNumber from "./generateOrderNumber.js"

const orderCreate = async (req, res) => {
  const orderId = generateOrderNumber();
  const {
    orderNumber,
    date,
    orderDetails,
    address,
    phone,
    firstName,
    lastName,
    orderTotal,
    status,
    isArchived,
  } = req.body
  // Validation
  if (
    !orderNumber ||
    orderNumber == "" ||
    !orderDetails ||
    orderDetails == "" ||
    !address ||
    address == "" ||
    !firstName ||
    firstName == "" ||
    !orderTotal ||
    orderTotal.length === 0
  ) {
    res.status(500).json({ message: "ERR: Invalid order information" })

  } else {
    const newOrder = await orderModel.create({
      orderNumber: orderId,
      date,
      orderDetails,
      address,
      phone,
      firstName,
      lastName,
      orderTotal,
      status,
      isArchived,
    })
    console.log("newOrder", newOrder)

    res.status(200).json({ success: true, message: "Order created!!" })
  }
}

export default orderCreate

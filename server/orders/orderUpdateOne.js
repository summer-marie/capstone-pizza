import orderModel from "./orderModel.js"

const orderUpdateOne = async (req, res) => {
  const { id } = req.params
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

  console.log("SERVER: i am id", id, "SERVER: i am orderForm", orderNumber)

  const order = await orderModel.findOneAndUpdate(
    { _id: id },
    {
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
    }
  )
  console.log("SERVER: order", order)

  res.status(200).json({
    success: true,
    message: "SERVER update order successful",
    order: order,
  })
}

export default orderUpdateOne

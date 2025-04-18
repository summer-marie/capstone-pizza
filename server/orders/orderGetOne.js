import orderModel from "./orderModel.js"

const orderGetOne = async (req, res) => {
  const { id } = req.params
  let order = []

  order = await orderModel.find({ _id: id })
  console.log("server: order get one", order)

  if (order.length === 0) {
    return res.status(404).send("Order not found")
  }

  res.status(200).json({ success: true, order: order })
}

export default orderGetOne

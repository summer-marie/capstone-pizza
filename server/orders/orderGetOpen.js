import orderModel from "./orderModel.js"

const orderGetOpen = async (req, res) => {
  const getOrders = await orderModel.aggregate([
    { $match: { status: { $ne: "archived" } } },
    { $sort: { date: -1 } }
  ])

  // console.log("getOrders", getOrders) 

  res.status(200).json({ success: true, orders: getOrders })
}

export default orderGetOpen

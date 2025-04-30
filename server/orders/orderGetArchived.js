import orderModel from "./orderModel.js"

const orderGetArchived = async (req, res) => {
  const getOrders = await orderModel.aggregate([
    { $match: { status: "archived" } },
    { $sort: { date: -1 } }
  ])

  console.log("getOrders", getOrders)

  res.status(200).json({ success: true, orders: getOrders })
}

export default orderGetArchived

// Old
// const getOrders = await orderModel.find({
//   'isArchived': { $boolean: true },
// });

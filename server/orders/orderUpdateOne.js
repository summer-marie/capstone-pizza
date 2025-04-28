import orderModel from "./orderModel.js"

const orderUpdateOne = async (req, res) => {
  const { id } = req.params
  const { status } = req.body

  console.log("SERVER: i am id", id, "SERVER: i am orderForm", orderNumber)
  try {
    const order = await orderModel.findOneAndUpdate(
      { _id: id },
      {
        $set: { status },
      },
      { new: true }
    )

    console.log("SERVER: order", order)
    res.status(200).json(order)
  } catch (error) {
    console.error("SERVER: Error updating order", error)
    res
      .status(500)
      .json({ error: "An error occurred while updating the order" })
  }
}

export default orderUpdateOne


import orderModel from "./orderModel.js";

const ordersArchive = async (req, res) => {
  const { id } = req.params;
  console.log("order id:", id);
  const { isArchived } = req.body;
  try {
    const orderArchive = await orderModel.findOneAndUpdate(
      { _id: id },
      { $set: { isArchived: true } },
      { new: true }
    );
    console.log("orderArchive", orderArchive);
    res.status(200).json({ success: true, order: orderArchive });
  } catch (err) {
    res.status(200).json({ message: "There was an error." });
  }
};
export default ordersArchive;

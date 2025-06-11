import orderModel from "./orderModel.js";

const orderGetOpen = async (req, res) => {
  const getOrders = await orderModel.aggregate([
    {
      $match: {
        isArchived: { $ne: true },
        // Exclude archived orders
        status: { $ne: "archived" },
      },
    },
    { $sort: { date: -1 } },
  ]);

  res.status(200).json({ success: true, orders: getOrders });
};

export default orderGetOpen;

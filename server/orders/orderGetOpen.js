import orderModel from "./orderModel.js";

const orderGetOpen = async (req, res) => {
  const getOrders = await orderModel.aggregate([
    {
      $match: {
        isArchived: { $ne: true },
        status: { $ne: "archived" },
      },
    },
    {
      $addFields: {
        // Create a field for sorting status in your specified order
        statusOrder: {
          $switch: {
            branches: [
              { case: { $eq: ["$status", "processing"] }, then: 1 },
              { case: { $eq: ["$status", "completed"] }, then: 2 },
              { case: { $eq: ["$status", "delivered"] }, then: 3 },
              { case: { $eq: ["$status", "cancelled"] }, then: 4 },
            ],
            default: 5,
          },
        },
      },
    },
    {
      $sort: {
        statusOrder: 1, // Sort by status order first
        date: -1, // Then by date within each status
      },
    },
    {
      $project: {
        statusOrder: 0, // Remove the helper field from results
      },
    },
  ]);

  res.status(200).json({ success: true, orders: getOrders });
};

export default orderGetOpen;

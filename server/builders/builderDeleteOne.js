// import builderModel from "./builderModel.js";

// const builderDeleteOne = async (req, res) => {
//   try {
//     const { id } = req.params;
//     // Fetch and delete the builder by ID
//     const deletedBuilder = await builderModel.findByIdAndDelete(id);
//     // Check if the pizza was found and deleted
//     if (!deletedBuilder) {
//       return res.status(404).json({ message: "Pizza not found" });
//     }
//     res
//       .status(200)
//       .json({
//         success: true,
//         message: "Builder deleted",
//         data: deletedBuilder,
//       });
//   } catch (err) {
//     console.error("Error deleting builder:", err); // Log the error for debugging
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// };

// export default builderDeleteOne;

// server/builders/builderDeleteOne.js
import builderModel from "./builderModel.js";

const builderDeleteOne = async (req, res) => {
    console.log("DELETE endpoint hit with id:", req.params.id);
  const { id } = req.params;
  try {
    const deletedBuilder = await builderModel.findByIdAndDelete(id);
    if (!deletedBuilder) {
      return res.status(404).json({ message: "Builder not found" });
    }
    res.status(200).json({ success: true, id });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export default builderDeleteOne;

import builderModel from "./builderModel.js";

const builderDeleteOne = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await builderModel.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Pizza not found" });
    }
    res.status(200).json({ success: true, message: "Pizza deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export default builderDeleteOne;

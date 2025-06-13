import builderModel from "./builderModel.js";

const pizzaUpdateOne = async (req, res) => {
  try {
    const { id } = req.params;
    const { pizzaName, pizzaPrice, sauce, meatTopping, veggieTopping, image } = req.body;

    const updateFields = { pizzaName, pizzaPrice, sauce, meatTopping, veggieTopping, image };

    const updatedPizza = await builderModel.findOneAndUpdate(
      { _id: id },
      { $set: updateFields },
      { new: true }
    );

    if (!updatedPizza) {
      return res.status(404).json({ success: false, message: "Pizza not found" });
    }

    console.log("Pizza updated YAYYY!!", updatedPizza);
    res.status(200).json({ success: true, pizza: updatedPizza });
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ success: false, message: "Server error", error: err.message });
  }
};

export default pizzaUpdateOne;

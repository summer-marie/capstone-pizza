import builderModel from "./builderModel.js";
import multer from "multer";

// Configure multer for file uploads
const upload = multer({ dest: "uploads/" });

// Export your middleware for use in your route
export const pizzaUpdateOneUpload = upload.single("image");

const pizzaUpdateOne = async (req, res) => {
  try {
    const { id } = req.params;

    // Parse fields from FormData (they come as strings)
    const pizzaName = req.body.pizzaName;
    const pizzaPrice = req.body.pizzaPrice;
    const sauce = JSON.parse(req.body.sauce);
    const meatTopping = JSON.parse(req.body.meatTopping);
    const veggieTopping = JSON.parse(req.body.veggieTopping);
    const base = JSON.parse(req.body.base);

    // Handle image
    const image = req.file ? req.file.filename : undefined;

    const updateFields = {
      pizzaName,
      pizzaPrice,
      sauce,
      meatTopping,
      veggieTopping,
      base,
    };

    if (image) {
      updateFields.image = image;
    }

    const updatedPizza = await builderModel.findOneAndUpdate(
      { _id: id },
      { $set: updateFields },
      { new: true }
    );

    if (!updatedPizza) {
      return res
        .status(404)
        .json({ success: false, message: "Pizza not found" });
    }

    console.log("Pizza updated YAYYY!!", updatedPizza);
    res.status(200).json({ success: true, builder: updatedPizza });
  } catch (err) {
    console.error("Update error:", err);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: err.message });
  }
};

export default pizzaUpdateOne;

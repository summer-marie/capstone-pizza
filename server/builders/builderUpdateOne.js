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
    const sauce = req.body.sauce ? JSON.parse(req.body.sauce) : undefined;
    const meatTopping = req.body.meatTopping
      ? JSON.parse(req.body.meatTopping)
      : undefined;
    const veggieTopping = req.body.veggieTopping
      ? JSON.parse(req.body.veggieTopping)
      : undefined;
    const base = req.body.base ? JSON.parse(req.body.base) : undefined;

    // Handle image file if uploaded
    let image;
    if (req.file) {
      image = req.file.filename; // Or req.file.path, or save to DB as needed
    } else if (req.body.image) {
      image = req.body.image; // fallback if image is sent as a string (optional)
    }

    const updateFields = {
      pizzaName,
      pizzaPrice,
      sauce,
      meatTopping,
      veggieTopping,
      base,
    };
    if (image) updateFields.image = image;

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
    res.status(200).json({ success: true, pizza: updatedPizza });
  } catch (err) {
    console.error("Update error:", err);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: err.message });
  }
};

export default pizzaUpdateOne;

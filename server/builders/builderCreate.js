import builderModel from "./builderModel.js";

// TODO: Add price to validation???

const builderCreate = async (req, res) => {
  const { pizzaName, pizzaPrice, base, sauce, meatTopping, veggieTopping } =
    req.body;

  // Validation
  if (!pizzaName || pizzaName == "") {
    res.status(500).json({ message: "ERR 500 MESG: Validation issue" });
  } else {
    const newPizza = await builderModel.create({
      pizzaName,
      pizzaPrice,
      base: typeof base === "string" ? JSON.parse(base) : base,
      sauce: typeof sauce === "string" ? JSON.parse(sauce) : sauce,
      meatTopping:
        typeof meatTopping === "string" ? JSON.parse(meatTopping) : meatTopping,
      veggieTopping:
        typeof veggieTopping === "string"
          ? JSON.parse(veggieTopping)
          : veggieTopping,
      image: req.file
        ? {
            filename: req.file.filename,
            originalname: req.file.originalname,
            mimetype: req.file.mimetype,
            path: req.file.path,
            size: req.file.size,
          }
        : null,
    });
    console.log("newPizza", newPizza);

    res.status(200).json({
      success: true,
      message: "Congrats, it worked!!",
    });
  }
};

export default builderCreate;

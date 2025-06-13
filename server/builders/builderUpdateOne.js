import builderModel from "./builderModel.js";

const pizzaUpdateOne = async (req, res) => {
  const { id } = req.params;

  const { pizzaName, pizzaPrice, sauce, meatTopping, veggieTopping, image } =
    req.body;

  const updateFields = {
    pizzaName,
    pizzaPrice,
    sauce,
    meatTopping,
    veggieTopping,
    image,
  };

  const updatedPizza = await builderModel.findOneAndUpdate(
    { _id: id },
    {
      $set: updateFields,
    },
    { new: true }
  );

  console.log("Pizza updated YAYYY!!", updatedPizza);
  res.status(200).json({ success: true, pizza: updatedPizza });
};

export default pizzaUpdateOne;

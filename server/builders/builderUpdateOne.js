// TODO: needed to update pizza from admin menu

import builderModel from "./builderModel.js"

const pizzaUpdateOne = async (req, res) => {
  const { id } = req.params

  const {
    pizzaName,
    pizzaPrice,
    base,
    sauce,
    meatTopping,
    veggieTopping,
    image,
  } = req.body

  const updatedPizza = await builderModel.findOneAndUpdate(
    { _id: id },
    {
      pizzaName,
      pizzaPrice,
      base,
      sauce,
      meatTopping,
      veggieTopping,
      image,
    }
  )
  console.log("Pizza updated YAYYY!!", updatedPizza)
  res.status(200).json({ success: true, pizza: updatedPizza })
}

export default pizzaUpdateOne

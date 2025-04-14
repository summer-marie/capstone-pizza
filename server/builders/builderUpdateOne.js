// TODO: needed to update pizza from admin menu

import builderModel from "./builderModel"

const pizzaUpdateOne = async (req, res) => {
  const { id } = req.params

  const { pizzaName, base, sauce, toppings, price, image } = req.body

  const pizza = await builderModel.findOneAndUpdate(
    { _id: id },
    {
      pizzaName,
      base,
      sauce,
      toppings,
      price,
      image,
    }
  )
  console.log("Pizza updated YAYYY!!", pizza)
  res.status(200).json({ success: true, pizza: pizza })
}

export default pizzaUpdateOne

import builderModel from "./builderModel.js"

// TODO: Add price to validation???

const builderCreate = async (req, res) => {
  const {
    pizzaName,
    pizzaPrice,
    base,
    sauce,
    meatTopping,
    veggieTopping,
    image,
  } = req.body

  // Validation
  if (!pizzaName || pizzaName == "") {
    res.status(500).json({ message: "ERR 500 MESG: Validation issue" })
  } else {
    const newPizza = await builderModel.create({
      pizzaName,
      pizzaPrice,
      base,
      sauce,
      meatTopping,
      veggieTopping,
      image,
    })
    console.log("newPizza", newPizza)

    res.status(200).json({
      success: true,
      message: "Congrats, it worked!!",
    })
  }
}

export default builderCreate

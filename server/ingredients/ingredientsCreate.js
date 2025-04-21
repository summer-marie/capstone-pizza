
import ingredientsModel from "./ingredientsModel.js"

// TODO: Add price to validation???

const ingredientsCreate = async (req, res) => {
  const { pizzaName } = req.body

  // Validation
  if (!pizzaName || pizzaName == "") {
    res
      .status(500)
      .json({ "ERR 500 MESG": "The server has spoken and you suck" })
  } else {
    const newIngredient = await ingredientsModel.create({ pizzaName })
    console.log("newIngredient", newIngredient)

    res
      .status(200)
      .json({
        success: true,
        message: "SERVER ingredient created.",
      })
  }
}

export default ingredientsCreate

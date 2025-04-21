import ingredientsModel from "./ingredientsModel.js"

// TODO: Add price to validation???

const ingredientsCreate = async (req, res) => {
  const ingredientData = req.body

  // Validate the incoming data using Mongoose's built-in schema validator
  const ingredient = await ingredientsModel.create(ingredientData)

  console.log("newIngredient", ingredient)

  res.status(201).json({
    success: true,
    message: "SERVER ingredient created.",
    data: ingredient,
  })
}

export default ingredientsCreate

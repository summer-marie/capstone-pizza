import ingredientsModel from "./ingredientsModel.js"

// TODO: Add price to validation???

const ingredientsCreate = async (req, res) => {
  const { name, description, itemType, price } = req.body

  console.log(name, description, itemType, price)

  // Validate the incoming data using Mongoose's built-in schema validator
  const ingredient = await ingredientsModel.create({
    name,
    description,
    itemType,
    price,
  })

  console.log("newIngredient", ingredient)

  res.status(201).json({
    success: true,
    message: "SERVER ingredient created.",
    ingredient: ingredient,
  })
}

export default ingredientsCreate

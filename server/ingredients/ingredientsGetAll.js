import ingredientsModel from "./ingredientsModel.js"

const ingredientsGetAll = async (req, res) => {
  const getIngredients = await ingredientsModel.find()

  console.log("getIngredients", getIngredients)

  res.status(200).json({ success: true, ingredients: getIngredients })
}

export default ingredientsGetAll

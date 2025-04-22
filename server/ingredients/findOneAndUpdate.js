import ingredientsModel from "./ingredientsModel.js"

const findOneAndUpdate = async (req, res) => {
  try {
    const { id } = req.params
    const { name, description, itemType, price } = req.body

    const updateIngredient = await ingredientsModel
      .findOneAndUpdate(
        { _id: id },
        { name, description, itemType, price },
        { new: true }
      )
      .then(() => {
        res.status(200).json({ success: true, ingredient: updateIngredient })
      })
      .catch((error) => {
        console.error(error)
        res
          .status(500)
          .json({ error: "An error occurred while updating the ingredient." })
      })
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ error: "An error occurred in the findOneAndUpdate function." })
  }
}
export default findOneAndUpdate

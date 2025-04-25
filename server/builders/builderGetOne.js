import builderModel from "./builderModel.js"

const builderGetOne = async (req, res) => {
  const { id } = req.params
  let pizza = []

  pizza = await builderModel.find({ _id: id })
  console.log("server: pizza get one", pizza)

  if (pizza.length === 0) {
    return res.status(404).send("Pizza not found")
  }

  res.status(200).json({ success: true, pizza: pizza })
}

export default builderGetOne

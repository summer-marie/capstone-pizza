import builderModel from ".builderModel.js"

const builderGetMany = async (req, res) => {
  const getBuiltPizzas = await builderModel.find()
  console.log("getBuiltPizzas", getBuiltPizzas)

  res.status(200).json({ success: true, "pizza builders": getBuiltPizzas })
}

export default builderGetMany

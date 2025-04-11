import builderModel from "./builderModel.js"

// TODO: Add price to validation???

const builderCreate = async (req, res) => {
  const { pizzaName } = req.body
  console.log(orderType)
  // Validation
  if (!pizzaName || pizzaName == "") {
    res
      .status(500)
      .json({ "ERR 500 MESG": "The server has spoken and you suck" })
  } else {
    const newbuilder = await builderModel.create({ pizzaName })
    console.log("newbuilder", newbuilder)

    res
      .status(200)
      .json({
        success: true,
        message: "Congrats, it worked!! You're not a loser.",
      })
  }
}

export default builderCreate

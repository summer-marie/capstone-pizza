import express from "express"
import builderCreate from "./builderCreate.js"
import builderGetMany from "./builderGetMany.js"
import pizzaUpdateOne from "./builderUpdateOne.js"

// TODO: builderDelete, builderUpdate

const builderIndex = express.Router()

builderIndex.post("/", builderCreate)
builderIndex.get("/", builderGetMany)

// Update one
builderIndex.get("/:id", pizzaUpdateOne)

// Get One
builderIndex.get("/pizza-detail/:id", pizzaUpdateOne)

export default builderIndex

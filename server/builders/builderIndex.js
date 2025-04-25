import express from "express"
import builderCreate from "./builderCreate.js"
import builderGetMany from "./builderGetMany.js"
import pizzaUpdateOne from "./builderUpdateOne.js"
import builderGetOne from "./builderGetOne.js"

// TODO: builderDelete, builderUpdate

const builderIndex = express.Router()

// Create
builderIndex.post("/", builderCreate)

// Get all
builderIndex.get("/", builderGetMany)

// Update one
builderIndex.put("/:id", pizzaUpdateOne)

// Get One
builderIndex.get("/pizza-detail/:id", builderGetOne)

export default builderIndex

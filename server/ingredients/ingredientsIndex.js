import express from "express"
import ingredientsCreate from "./ingredientsCreate.js"
import ingredientsGetAll from "./ingredientsGetAll.js"
import findOneAndUpdate from "./findOneAndUpdate.js"

const ingredientsIndex = express.Router()

// Create/Add
ingredientsIndex.post("/", ingredientsCreate)

// getAll
ingredientsIndex.get("/", ingredientsGetAll)

// find/Update One
ingredientsIndex.put("/ingredients/:id", findOneAndUpdate)

export default ingredientsIndex

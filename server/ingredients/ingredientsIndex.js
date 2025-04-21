import express from "express"
import ingredientsCreate from "./ingredientsCreate"



const ingredientsIndex = express.Router()

ingredientsIndex.post("/", ingredientsCreate)





export default ingredientsIndex

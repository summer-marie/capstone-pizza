import express from "express";
import orderCreate from "./orderCreate.js"
import orderGetMany from "./orderGetMany.js";
import orderGetAll from "./orderGetAll.js";
import orderGetOne from "./orderGetOne.js"
import orderUpdateOne from "./orderUpdateOne.js";



const orderIndex = express.Router()

orderIndex.post("/", orderCreate)
// TESTING CONNECTION
// orderIndex.get("/", (req, res) => {
//     res.send("Hello order!");
//   });

// Get orders by validated email
orderIndex.get("/:email", orderGetMany)

// Get all, no validation
// TODO: add validation so only the owner can see all orders
orderIndex.get("/", orderGetAll)

// Get one order by id
orderIndex.put("/order-detail/:id", orderUpdateOne)
orderIndex.get("/order-detail/:id", orderGetOne)




export default orderIndex
import express from "express"
import orderCreate from "./orderCreate.js"
import orderGetAll from "./orderGetAll.js"
import orderArchiveOne from "./orderArchiveOne.js"
import orderGetOne from "./orderGetOne.js"
import orderGetArchived from "./orderGetArchived.js"
import orderGetOpen from "./orderGetOpen.js"
// import orderGetMany from "./orderGetMany.js"
// import orderUpdateOne from "./orderUpdateOne.js"

const orderIndex = express.Router()

// Create API
orderIndex.post("/", orderCreate)
// TESTING CONNECTION
// orderIndex.get("/", (req, res) => {
//     res.send("Hello order!");
//   });

// Get all, no validation
orderIndex.get("/", orderGetAll)

// Archive order
orderIndex.put("/archive/:id", orderArchiveOne)

// Get all archived orders
orderIndex.get("/archived", orderGetArchived)

// Get all open orders
orderIndex.get("/open", orderGetOpen)

// Get orders by validated email
// orderIndex.get("/:email", orderGetMany)

// Get one order by id
// orderIndex.put("/order-detail/:id", orderUpdateOne)
orderIndex.get("/order-detail/:id", orderGetOne)

export default orderIndex

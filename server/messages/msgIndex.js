import express from "express";
import messageCreate from "./msgCreate.js";
import messageGetAll from "./msgGetAll.js";
import messageUpdateRead from "./msgUpdateRead.js";

const msgIndex = express.Router();

// Create/Add
msgIndex.post("/", messageCreate);

// getAll, no validation
msgIndex.get("/", messageGetAll);

// find/Update One
msgIndex.put("/:id", messageUpdateRead);

export default msgIndex;

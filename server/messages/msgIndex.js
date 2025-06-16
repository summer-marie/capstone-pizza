import express from "express";
import messageCreate from "./msgCreate.js";
import messageGetAll from "./msgGetAll.js";
import messageUpdateRead from "./msgUpdateRead.js";

const msgIndex = express.Router();

// Create API
msgIndex.post("/", messageCreate);

// Get all, no validation
msgIndex.get("/all", messageGetAll);

// Update read status
msgIndex.put("/update-read/:id", messageUpdateRead);

export default msgIndex;

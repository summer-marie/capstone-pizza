import express from "express";
import messageCreate from "./msgCreate.js";
import messageGetAll from "./msgGetAll.js";
import messageUpdateRead from "./msgUpdateRead.js";

const msgIndex = express.Router();

msgIndex.post("/create", messageCreate);
msgIndex.get("/all", messageGetAll);
msgIndex.put("/update-read/:id", messageUpdateRead);

export default msgIndex;

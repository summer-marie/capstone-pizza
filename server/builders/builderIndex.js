import express from "express";
import builderCreate from "./builderCreate.js";
import builderGetMany from "./builderGetMany.js";
import pizzaUpdateOne from "./builderUpdateOne.js";
import builderGetOne from "./builderGetOne.js";
import builderDeleteOne from "./builderDeleteOne.js";
import multer from "multer";

// builderIndex.js
const builderIndex = express.Router();

// Multer setup for file uploads
const upload = multer({ dest: "uploads/" });

// Create
builderIndex.post("/", upload.single("image"), builderCreate);

// Get all
builderIndex.get("/", builderGetMany);

// Update one
builderIndex.put("/:id", upload.single("image"), pizzaUpdateOne);

// Get One
builderIndex.get("/pizza-detail/:id", builderGetOne);

// Delete One
builderIndex.delete("/:id", builderDeleteOne);

export default builderIndex;

import express from "express";
import builderCreate from "./builderCreate.js";
import builderGetMany from "./builderGetMany.js";
import pizzaUpdateOne from "./builderUpdateOne.js";
import builderGetOne from "./builderGetOne.js";
import builderDeleteOne from "./builderDeleteOne.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure multer with disk storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../uploads/"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

// builderIndex.js
const builderIndex = express.Router();

// Multer setup for file uploads
// const upload = multer({ dest: "uploads/" });

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

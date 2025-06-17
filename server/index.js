// Environment and Core Node Modules
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
// Express and Middleware
import express from "express";
import cors from "cors";
import session from "express-session";
import cookieParser from "cookie-parser";
import multer from "multer";
import fs from "fs";
// Database
import mongoose from "mongoose";
// Authentication
import passport from "passport";
import "./strategies/jwtStrategy.js";
import "./strategies/localStrategy.js";
// Routes
import authRouter from "./auth/authIndex.js";
import userRouter from "./user/userIndex.js";
import orderIndex from "./orders/orderIndex.js";
import ingredientsIndex from "./ingredients/ingredientsIndex.js";
import builderIndex from "./builders/builderIndex.js";
import msgIndex from "./messages/msgIndex.js";

console.log(process.env.MONGODB_URL);

const port = process.env.PORT || 8010;

const cookieSecret = process.env.COOKIE_SECRET;
const sessionSecret = process.env.SESSION_SECRET || "bubbles";

// Get the current file and directory names
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create uploads directory in server folder
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads/"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

// File filter to only allow images
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Not an image! Please upload an image."), false);
  }
};

// Ensure uploads directory exists
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

const app = express();
app.use(express.json());

// const upload = multer({ dest: "uploads/" });

app.use(cookieParser(cookieSecret));

// Express CORS
// Get whitelisted domains from env
const whitelist = process.env.WHITELISTED_DOMAINS
  ? process.env.WHITELISTED_DOMAINS.split(",")
  : [];
// Set CORS options
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
// Use CORS
app.use(cors(corsOptions));

// Make the "uploads" folder publicly accessible
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Add Passport
app.use(passport.initialize());
app.use(
  session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
  })
);

// register routes
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/orders", orderIndex);
app.use("/ingredients", ingredientsIndex);
app.use("/builders", builderIndex);
app.use("/messages", msgIndex);

app.use("/uploads", express.static(uploadsDir));

// Test route for file upload
app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file); // This will log the uploaded file info
  res.json({ message: "Upload received successfully!", file: req.file });
});

// 404
app.all("/", (req, res) => {
  res.status(404).json({
    success: false,
    data: "404",
  });
});

// MongoDB Setup
try {
  const mongoURL = process.env.MONGODB_URL || "";
  // Connect to MongoDB
  await mongoose.connect(mongoURL);
  console.log(`Capstone connected to database ${mongoURL}`);

  app.listen(port, () => {
    console.log(`Capstone app listening on port ${port}`);
  });
} catch (err) {
  console.log(err);
}

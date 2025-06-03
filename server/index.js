import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import session from "express-session";
import cookieParser from "cookie-parser";
import passport from "passport";
import "./strategies/jwtStrategy.js";
import "./strategies/localStrategy.js";
import authRouter from "./auth/authIndex.js";
import userRouter from "./user/userIndex.js";
import orderIndex from "./orders/orderIndex.js";
import ingredientsIndex from "./ingredients/ingredientsIndex.js";
import builderIndex from "./builders/builderIndex.js";

console.log(process.env.MONGODB_URL);

const cookieSecret = process.env.COOKIE_SECRET;
const sessionSecret = process.env.SESSION_SECRET || "bubbles";

const app = express();
app.use(express.json());

app.use(cookieParser(cookieSecret));
// app.use(express.urlencoded({ extended: true }));

app.use(cors());
const port = process.env.PORT || 8010;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Sessions, default
app.use(session({}));

// Add Passport
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);
app.use("/users", userRouter);

app.use("/orders", orderIndex);
app.use("/ingredients", ingredientsIndex);
app.use("/builders", builderIndex);

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

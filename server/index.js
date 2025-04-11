import "dotenv/config";
import express from "express";
import cors from 'cors'
import mongoose from "mongoose";
// import userIndex from "./routes/users/userIndex.js";
import orderIndex from "./orders/orderIndex.js";
import builderIndex from "./builders/builderIndex.js";
// console.log(process.env.MONGODB_URL);

const app = express();
app.use(express.json())
app.use(cors())
const port = 8010;


app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.use("/users", userIndex)
app.use("/orders", orderIndex)
app.use("/builders", builderIndex)

// 404
app.all('*', (req, res) =>{
  res.status(404).json({
      success: false,
      data: '404'
  })
})


// MongoDB Setup
try { 
  const mongoURL = process.env.MONGODB_URL || "";
  // Connect to MongoDB
  await mongoose.connect(mongoURL)
  console.log(`Project Tracker connected to database ${mongoURL}`)

  app.listen(port, () => {
    console.log(`Project Tracker app listening on port ${port}`);
  });
} 
catch (err) {
  console.log(err)
}
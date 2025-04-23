import "dotenv/config"
import axios from "axios"
import { createFakeBuilder } from "./createFakeBuilder.js"

const testBuilders = createFakeBuilder(4)

testBuilders.forEach(async (builder) => {
  const addTestBuilder = await axios.post(
    `${process.env.SERVER_URL}/builders`,
    builder
  )
  console.log("addTestBuilder", addTestBuilder)
})

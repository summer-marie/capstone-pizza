import mongoose from "mongoose";
import messageSchema from "./msgSchema.js";

export default mongoose.model("Message", messageSchema);
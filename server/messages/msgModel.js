import mongoose from "mongoose";
import messageSchema from "./messageSchema.js";

export default mongoose.model("Message", messageSchema);
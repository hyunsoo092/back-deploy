import { Schema, model } from "mongoose";
import { getCurrentTime } from "../utils/utils.js";

const userSchemas = new Schema({
  email: { type: String, require: true },
  name: { type: String, require: true },
  address: { type: String },
  createAt: { type: String, default: getCurrentTime },
  updateAt: { type: String, default: getCurrentTime },
});

export default model("User", userSchemas, "users");

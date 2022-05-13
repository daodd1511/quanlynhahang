import mongoose from "mongoose";
const { Schema } = mongoose;
const roleSchema = new Schema({
  name: String,
});
const Role = mongoose.model("role", roleSchema);
export default Role;

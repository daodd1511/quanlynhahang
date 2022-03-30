import mongoose from "mongoose";
const { Schema } = mongoose;
const menuSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
const Menu = mongoose.model("menu", menuSchema);
export default Menu;

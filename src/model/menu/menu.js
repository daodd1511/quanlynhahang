import mongoose from "mongoose";
const { Schema } = mongoose;
const dishSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
  image: {
    type: String,
  },
  category: [{ type: mongoose.Schema.Types.ObjectId, ref: "category" }],
});
const Dish = mongoose.model("dish", dishSchema);
export default Dish;

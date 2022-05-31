import mongoose from "mongoose";
const { Schema } = mongoose;
const orderSchema = new Schema({
  staff_id: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  order_date: { type: Date },
  payment_status: { type: Boolean, default: false },
  total: { type: Number, default: null },
  table_id: { type: mongoose.Schema.Types.ObjectId, ref: "table" },
  dish: [
    {
      id: { type: mongoose.Schema.Types.ObjectId, ref: "dish" },
      quantity: { type: Number, default: 0 },
    },
  ],
});
const Order = mongoose.model("order", orderSchema);
export default Order;

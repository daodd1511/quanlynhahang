import mongoose from "mongoose";
const { Schema } = mongoose;
const tableSchema = new Schema({
  name: String,
  available: {
    type: Boolean,
    default: true,
  },
});
const Table = mongoose.model("table", tableSchema);
export default Table;

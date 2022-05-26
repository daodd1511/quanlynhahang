import mongoose from "mongoose";
const { Schema } = mongoose;
const scoreboardSchema = new Schema({
  name: String,
  point: Number,
});
const Scoreboard = mongoose.model("scoreboard", scoreboardSchema);
export default Scoreboard;

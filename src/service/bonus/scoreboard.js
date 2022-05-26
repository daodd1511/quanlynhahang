import Scoreboard from "../../model/scoreboard.js";
const ScoreboardService = {};
ScoreboardService.getScoreboard = async () => {
  return await Scoreboard.find();
};
ScoreboardService.add = async (data) => {
  const user = new Scoreboard({
    name: data.name,
    point: data.point,
  });
  await user.save();
};
export default ScoreboardService;

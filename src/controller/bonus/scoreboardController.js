import ScoreboardService from "../../service/bonus/scoreboard.js";
const ScoreboardController = {};
ScoreboardController.getScoreboard = async (req, res) => {
  try {
    await ScoreboardService.getScoreboard().then((user) => {
      let topUser = [];
      user.sort((a, b) => b.point - a.point);
      for (let i = 0; i < 15; i++) {
        topUser.push(user[i]);
      }

      res.send(user);
    });
  } catch (err) {
    res.send(err);
  }
};
ScoreboardController.add = async (req, res) => {
  try {
    await ScoreboardService.add(req.body);
    await ScoreboardService.getScoreboard().then((user) => {
      res.send(user);
    });
  } catch (err) {
    res.send(err);
  }
};
export default ScoreboardController;

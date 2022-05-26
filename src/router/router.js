import express from "express";
import userRouter from "./user.routes.js";
import authRouter from "./auth.routes.js";
import dishRouter from "./dish.routes.js";
import categoryRouter from "./category.routes.js";
import tableRouter from "./table.routes.js";
import ScoreboardController from "../controller/bonus/scoreboardController.js";
import QuestionService from "../service/bonus/question.js";
const router = express.Router();
router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/menu", dishRouter);
router.use("/menu/category", categoryRouter);
router.use("/table", tableRouter);
router.get("/bonus/scoreboard", async (req, res) => {
  await ScoreboardController.getScoreboard(req, res);
});
router.post("/bonus/scoreboard/add", async (req, res) => {
  await ScoreboardController.add(req, res);
});
router.get("/bonus/questions", (req, res) => {
  const questions = QuestionService.Random();
  res.send(questions);
});
export default router;

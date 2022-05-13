import auth from "../middleware/auth.js";
import UserController from "../controller/userController.js";
import express from "express";
const userRouter = express.Router();
userRouter.get("/all", UserController.allAccess);
userRouter.get("/user", auth.verifyToken, UserController.userBoard);
userRouter.get(
  "/admin",
  [auth.verifyToken, auth.isAdmin],
  UserController.adminBoard
);
export default userRouter;

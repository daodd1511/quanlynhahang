import auth from "../middleware/auth.js";
import UserController from "../controller/userController.js";
import express from "express";
const userRouter = express.Router();
userRouter.get("/", auth.verifyToken, auth.isAdmin, (req, res) => {
  UserController.allUser(req, res);
});
userRouter.get(
  "/admin",
  [auth.verifyToken, auth.isAdmin],
  UserController.adminBoard
);
userRouter.get("/:id", auth.verifyToken, (req, res) => {
  UserController.getUserById(req, res);
});
userRouter.put("/update/:id", auth.verifyToken, (req, res) => {
  UserController.updateUser(req, res);
});
userRouter.delete(
  "/delete/:id",
  [auth.verifyToken, auth.isAdmin],
  (req, res) => {
    UserController.deleteUser(req, res);
  }
);
export default userRouter;

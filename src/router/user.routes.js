import auth from "../middleware/auth.js";
import UserController from "../controller/userController.js";
import express from "express";
const userRouter = express.Router();
userRouter.get("/all", UserController.allAccess);
userRouter.get(
  "/user",
  [auth.verifyToken, auth.isAdmin],
  UserController.userBoard
);
userRouter.get(
  "/admin",
  [auth.verifyToken, auth.isAdmin],
  UserController.adminBoard
);
userRouter.put("/user/update/:id", (req, res) => {
  UserController.updateUser(req, res);
});
userRouter.delete(
  "/user/delete/:id",
  [auth.verifyToken, auth.isAdmin],
  (req, res) => {
    UserController.deleteUser(req, res);
  }
);
export default userRouter;

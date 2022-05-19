import express from "express";
import AuthController from "../controller/authController.js";
import verifyRegister from "../middleware/verifyRegister.js";
const authRouter = express.Router();
authRouter.post(
  "/register",
  [
    verifyRegister.checkDuplicateUsernameOrEmail,
    verifyRegister.checkRoleExisted,
  ],
  (req, res) => {
    AuthController.Register(req, res);
  }
);
authRouter.post("/login", (req, res) => {
  AuthController.Login(req, res);
});
authRouter.post("/reset-pass", (req, res) => {
  AuthController.ForgotPassword(req, res);
});
authRouter.get("/reset-pass/:token", (req, res) => {
  AuthController.ResetPassword(req, res);
});
export default authRouter;

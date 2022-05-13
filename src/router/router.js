import express from "express";
import userRouter from "./user.routes.js";
import authRouter from "./auth.routes.js";
const router = express.Router();
router.use("/auth", authRouter);
router.use("/test", userRouter);

export default router;

import express from "express";
import userRouter from "./user.routes.js";
import authRouter from "./auth.routes.js";
import dishRouter from "./dish.routes.js";
import categoryRouter from "./category.routes.js";
import tableRouter from "./table.routes.js";

const router = express.Router();
router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/menu", dishRouter);
router.use("/menu/category", categoryRouter);
router.use("/table", tableRouter);
export default router;

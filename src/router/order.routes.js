import express from "express";
import auth from "../middleware/auth.js";
import OrderController from "../controller/orderController.js";
const orderRouter = express.Router();
orderRouter.get("/", [auth.verifyToken], (req, res) => {
  OrderController.getAll(req, res);
});
orderRouter.post("/add", [auth.verifyToken], (req, res) => {
  OrderController.add(req, res);
});
orderRouter.put("/update/:id", [auth.verifyToken], (req, res) => {
  OrderController.update(req, res);
});
orderRouter.delete("/delete/:id", [auth.verifyToken], (req, res) => {
  OrderController.delete(req, res);
});

export default orderRouter;

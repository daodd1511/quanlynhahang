import express from "express";
import auth from "../middleware/auth.js";
import CategoryController from "../controller/menu/categoryController.js";
import verifyMenu from "../middleware/verifyMenu.js";
const categoryRouter = express.Router();
categoryRouter.get("/", [auth.verifyToken], (req, res) => {
  CategoryController.getAll(req, res);
});
categoryRouter.post(
  "/add",
  [auth.verifyToken, auth.isAdmin, verifyMenu.checkDuplicateCategory],
  (req, res) => {
    CategoryController.add(req, res);
  }
);
categoryRouter.put(
  "/update/:id",
  [auth.verifyToken, auth.isAdmin],
  (req, res) => {
    CategoryController.update(req, res);
  }
);
categoryRouter.delete(
  "/delete/:id",
  [auth.verifyToken, auth.isAdmin],
  (req, res) => {
    CategoryController.delete(req, res);
  }
);
categoryRouter.get("/:id", auth.verifyToken, (req, res) => {
  CategoryController.getDishByCategory(req, res);
});
export default categoryRouter;

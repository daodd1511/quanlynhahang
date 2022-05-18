import express from "express";
import auth from "../middleware/auth.js";
import DishController from "../controller/menu/dishController.js";
import verifyMenu from "../middleware/verifyMenu.js";
const dishRouter = express.Router();
dishRouter.get("/", [auth.verifyToken], (req, res) => {
  DishController.getAll(req, res);
});
dishRouter.post(
  "/add",
  [auth.verifyToken, auth.isAdmin, verifyMenu.checkDuplicateDish],
  (req, res) => {
    DishController.add(req, res);
  }
);
dishRouter.put("/update/:id", [auth.verifyToken, auth.isAdmin], (req, res) => {
  DishController.update(req, res);
});
dishRouter.delete(
  "/delete/:id",
  [auth.verifyToken, auth.isAdmin],
  (req, res) => {
    DishController.delete(req, res);
  }
);

export default dishRouter;

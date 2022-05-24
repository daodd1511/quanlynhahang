import express from "express";
import auth from "../middleware/auth.js";
import TableController from "../controller/tableController.js";
import verifyTable from "../middleware/verifyTable.js";
const categoryRouter = express.Router();
categoryRouter.get("/", [auth.verifyToken], (req, res) => {
  TableController.getAll(req, res);
});
categoryRouter.post(
  "/add",
  [auth.verifyToken, auth.isAdmin, verifyTable.checkDuplicateTable],
  (req, res) => {
    TableController.add(req, res);
  }
);
categoryRouter.put(
  "/update/:id",
  [auth.verifyToken, auth.isAdmin],
  (req, res) => {
    TableController.update(req, res);
  }
);
categoryRouter.delete(
  "/delete/:id",
  [auth.verifyToken, auth.isAdmin],
  (req, res) => {
    TableController.delete(req, res);
  }
);
export default categoryRouter;

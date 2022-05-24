import TableService from "../service/tableService.js";
const TableController = {};
TableController.getAll = async (req, res) => {
  try {
    let table = await TableService.getAll();
    res.status(200).send(table);
  } catch (err) {
    res.send(err);
  }
};
TableController.add = async (req, res) => {
  try {
    await TableService.add(req.body);
    await TableController.getAll(req, res);
  } catch (err) {
    res.send(err);
  }
};
TableController.update = async (req, res) => {
  try {
    let updatedTable = await TableService.update(req.params.id, req.body);
    res.status(200).send(updatedTable);
  } catch (err) {
    res.send(err);
  }
};
TableController.delete = async (req, res) => {
  try {
    await TableService.delete(req.params.id);
    await TableController.getAll(req, res);
  } catch (err) {
    res.send(err);
  }
};
export default TableController;

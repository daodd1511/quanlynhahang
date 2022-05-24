import Table from "../model/table.js";
const checkDuplicateTable = (req, res, next) => {
  Table.findOne({ name: req.body.name }, (err, table) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    if (table) {
      res.status(400).send({ message: `${table.name} is already exists` });
      return;
    }
    next();
  });
};
const verifyTable = { checkDuplicateTable };
export default verifyTable;

import Table from "../model/table.js";
const TableService = {};
TableService.getAll = async () => {
  console.log(Table.find());
  return await Table.find();
};
TableService.add = async (data) => {
  const table = new Table({ name: data.name });
  await table.save();
};
TableService.update = async (id, data) => {
  await Table.findByIdAndUpdate(id, data);
  return await Table.findById(id);
};
TableService.delete = async (id) => {
  await Table.findByIdAndRemove(id);
};
export default TableService;

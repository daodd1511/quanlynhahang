import CategoryService from "../../service/menu/categoryService.js";
const CategoryController = {};
CategoryController.getAll = async (req, res) => {
  try {
    let category = await CategoryService.getAll();
    res.status(200).send(category);
  } catch (err) {
    res.send(err);
  }
};
CategoryController.add = async (req, res) => {
  try {
    await CategoryService.add(req.body);
    await CategoryController.getAll(req, res);
  } catch (err) {
    res.send(err);
  }
};
CategoryController.update = async (req, res) => {
  try {
    let updatedCategory = await CategoryService.update(req.params.id, req.body);
    res.status(200).send(updatedCategory);
  } catch (err) {
    res.send(err);
  }
};
CategoryController.delete = async (req, res) => {
  try {
    await CategoryService.delete(req.params.id);
    await CategoryController.getAll(req, res);
  } catch (err) {
    res.send(err);
  }
};
CategoryController.getDishByCategory = async (req, res) => {
  try {
    await CategoryService.getDishByCategory(req.params.id).then((dishes) => {
      res.status(200).send(dishes);
    });
  } catch (err) {
    res.send(err);
  }
};
export default CategoryController;

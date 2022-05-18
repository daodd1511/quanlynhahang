import DishService from "../../service/menu/dishService.js";
const DishController = {};
DishController.getAll = async (req, res) => {
  try {
    let dishes = await DishService.getAll();
    res.status(200).send(dishes);
  } catch (err) {
    res.send(err);
  }
};
DishController.add = async (req, res) => {
  try {
    await DishService.add(req, res);
  } catch (err) {
    res.send(err);
  }
};
DishController.update = async (req, res) => {
  try {
    await DishService.update(req.params.id, req.body).then((updatedDish) => {
      res.status(200).send(updatedDish);
    });
  } catch (err) {
    res.send({ message: err.message });
  }
};
DishController.delete = async (req, res) => {
  try {
    await DishService.delete(req.params.id);
    await DishController.getAll(req, res);
  } catch (err) {
    res.send(err);
  }
};

export default DishController;

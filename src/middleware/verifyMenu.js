import Category from "../model/menu/category.js";
import Menu from "../model/menu/menu.js";
const checkDuplicateCategory = (req, res, next) => {
  Category.findOne({ name: req.body.name }, (err, category) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    if (category) {
      res.status(400).send({ message: `${category.name} is already exists` });
      return;
    }
    next();
  });
};
const checkDuplicateDish = (req, res, next) => {
  Menu.findOne({ name: req.body.name }, (err, dish) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    if (dish) {
      res.status(400).send({ message: `${dish.name} is already exists` });
      return;
    }
    next();
  });
};
const verifyMenu = { checkDuplicateCategory, checkDuplicateDish };
export default verifyMenu;

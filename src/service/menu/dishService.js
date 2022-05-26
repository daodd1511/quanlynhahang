import Dish from "../../model/menu/menu.js";
import Category from "../../model/menu/category.js";
const DishService = {};
DishService.getAll = async () => {
  return await Dish.find().populate("category");
};
DishService.add = async (req, res) => {
  try {
    const dish = new Dish({
      name: req.body.name,
      price: req.body.price,
      status: req.body.status,
      image: req.body.image,
    });
    await dish.save(async (err, dish) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (req.body.category) {
        Category.find(
          {
            name: { $in: req.body.category },
          },
          async (err, categories) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
            dish.category = categories.map((cat) => cat._id);
            await dish.save((err, result) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
              res.send(result);
            });
          }
        );
        return;
      }
    });
  } catch (err) {
    res.send(err);
  }
};
DishService.update = async (id, data) => {
  if (data.category) {
    await Category.find({
      name: { $in: data.category },
    })
      .then(async (category) => {
        data.category = category.map((cat) => cat._id);
        console.log(data);
        await Dish.findByIdAndUpdate(id, data);
      })
      .catch((err) => {
        res.send(err);
      });
  } else {
    await Dish.findByIdAndUpdate(id, data);
  }
  return await Dish.findOne({ _id: id }).populate("category");
};
DishService.delete = async (id) => {
  return await Dish.findByIdAndRemove(id);
};

export default DishService;

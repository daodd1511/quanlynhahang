import Category from "../../model/menu/category.js";
import Dish from "../../model/menu/menu.js";

const CategoryService = {};
CategoryService.getAll = async () => {
  return await Category.find();
};
CategoryService.add = async (data) => {
  const category = new Category(data);
  await category.save();
};
CategoryService.update = async (id, data) => {
  await Category.findByIdAndUpdate(id, data);
  return await Category.findById(id);
};
CategoryService.delete = async (id) => {
  await Category.findByIdAndRemove(id);
};
// Chưa tối ưu được thuật toán, chạy nhiều vòng for
CategoryService.getDishByCategory = async (id) => {
  let dishes = [];
  await Category.findOne({ _id: id }).then(async (cate) => {
    await Dish.find()
      .populate("category")
      .then((result) => {
        for (let i = 0; i < result.length; i++) {
          for (let j = 0; j < result[i].category.length; j++) {
            if (result[i].category[j].name === cate.name) {
              dishes.push(result[i]);
            }
          }
        }
      });
  });
  return dishes;
};
export default CategoryService;

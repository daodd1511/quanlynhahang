import Order from "../model/order.js";
const OrderService = {};
OrderService.getAll = async () => {
  return Order.find()
    .populate("staff_id")
    .populate("table_id")
    .populate("dish");
};
OrderService.add = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    return await OrderService.getAll();
  } catch (err) {
    res.send(err);
  }
};
OrderService.update = async (id, data) => {
  await Order.findByIdAndUpdate(id, data);
  return await Order.findOne({ _id: id })
    .populate("staff_id")
    .populate("table_id")
    .populate("dish");
};
OrderService.delete = async (id) => {
  return await Order.findByIdAndRemove(id);
};

export default OrderService;

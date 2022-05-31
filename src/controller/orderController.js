import OrderService from "../service/orderService.js";

const OrderController = {};
OrderController.getAll = async (req, res) => {
  try {
    let orders = await OrderService.getAll();
    res.status(200).send(orders);
  } catch (err) {
    res.send(err);
  }
};
OrderController.add = async (req, res) => {
  try {
    await OrderService.add(req, res).then((orders) => res.send(orders));
  } catch (err) {
    res.send(err);
  }
};
OrderController.update = async (req, res) => {
  try {
    await OrderService.update(req.params.id, req.body).then((updatedOrder) => {
      res.status(200).send(updatedOrder);
    });
  } catch (err) {
    res.send({ message: err.message });
  }
};
OrderController.delete = async (req, res) => {
  try {
    await OrderService.delete(req.params.id);
    await OrderController.getAll(req, res);
  } catch (err) {
    res.send(err);
  }
};

export default OrderController;

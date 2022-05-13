import User from "../model/user.js";
import UserService from "../service/userServices.js";
const allUser = async (req, res) => {
  await User.find()
    .populate("role")
    .then((users) => {
      res.status(200).send(users);
    });
};
const adminBoard = (req, res) => {
  res.status(200).send("Admin Content");
};
const updateUser = async (req, res) => {
  await UserService.update(req.params.id, req.body).then((updatedUser) => {
    res.status(200).send(updatedUser);
  });
};
const deleteUser = async (req, res) => {
  await UserService.delete(req.params.id).then((newUsers) => {
    res.status(200).send(newUsers);
  });
};
let UserController = {
  allUser,
  adminBoard,
  updateUser,
  deleteUser,
};
export default UserController;

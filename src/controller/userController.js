import User from "../model/user.js";
import UserService from "../service/userServices.js";
const allAccess = (req, res) => {
  res.status(200).send("Public Content");
};
const userBoard = async (req, res) => {
  await User.find().then((users) => {
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
  allAccess,
  userBoard,
  adminBoard,
  updateUser,
  deleteUser,
};
export default UserController;

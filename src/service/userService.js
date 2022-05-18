import User from "../model/user.js";
const UserService = {};
UserService.update = async (id, updateData) => {
  await User.findByIdAndUpdate(id, updateData);
  return await User.find({ _id: id }).populate("role");
};
UserService.delete = async (id) => {
  await User.findByIdAndRemove(id);
  return await User.find().populate("role");
};
export default UserService;
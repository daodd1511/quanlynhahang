import User from "../model/user.js";
import bcrypt from "bcryptjs";
const UserService = {};
UserService.update = async (id, updateData) => {
  if (updateData.password) {
    updateData.password = await bcrypt.hash(updateData.password, 10);
    await User.findByIdAndUpdate(id, updateData);
  } else {
    await User.findByIdAndUpdate(id, updateData);
  }
  return await User.find({ _id: id }).populate("role");
};
UserService.delete = async (id) => {
  await User.findByIdAndRemove(id);
  return await User.find().populate("role");
};
export default UserService;

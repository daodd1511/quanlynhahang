import User from "../model/user.js";
import ROLES from "../config/roles.config.js";
const checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({ username: req.body.username }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err.message });
      return;
    }
    if (user) {
      res.status(400).send("Username is already in use");
      return;
    }
    // Email
    User.findOne({ email: req.body.email }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err.message });
        return;
      }
      if (user) {
        res.status(400).send("Email is already in use");
        return;
      }
      next();
    });
  });
};
const checkRoleExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res
          .status(400)
          .send({ message: `Role ${req.body.roles[i]} does not existed` });
        return;
      }
    }
  }
  next();
};
const verifyRegister = {
  checkDuplicateUsernameOrEmail,
  checkRoleExisted,
};
export default verifyRegister;

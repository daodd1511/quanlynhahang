import User from "../model/user.js";
import Role from "../model/role.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const AuthService = {};
AuthService.Register = async (req, res) => {
  try {
    let encryptedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      name: req.body.name,
      username: req.body.username,
      phone: req.body.phone,
      email: req.body.email,
      password: encryptedPassword,
      gender: req.body.gender,
      birthday: req.body.birthday,
    });
    user.save(async (err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (req.body.role) {
        await Role.findOne({ name: req.body.role }, (err, role) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          user.role = role._id;
          user
            .save()
            .then((result) => res.send(result))
            .catch((err) => res.send({ message: err.message }));
        });
      } else if (!req.body.role) {
        try {
          await Role.findOne({ name: "user" }).then((role) => {
            user.role = role._id;
            user.save().then((result) => {
              res.send(result);
              return;
            });
            return;
          });
        } catch (err) {
          res.send(err);
        }
      }
    });
    // Create user in our database
  } catch (err) {
    res.send({ message: err.message });
  }
};
AuthService.Login = async (req, res) => {
  try {
    // Get user input
    User.findOne({ username: req.body.username })
      .populate("role")
      .exec((err, user) => {
        if (err) {
          res.status(500).send({ message: err.message });
          return;
        }
        if (!user) {
          return res.status(404).send({ message: "User not found" });
        }
        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );
        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!",
          });
        }
        var token = jwt.sign({ id: user._id }, process.env.TOKEN_KEY, {
          expiresIn: "30d",
        });
        res.status(200).send({
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
          accessToken: token,
        });
      });
  } catch (err) {
    console.log(err);
  }
};
export default AuthService;

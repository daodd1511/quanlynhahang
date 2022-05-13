import jwt from "jsonwebtoken";
import User from "../model/user.js";
import Role from "../model/role.js";
const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: "Unauthorized" });
      }
      req.userId = decoded.id;
      return next();
    });
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
};
const isAdmin = async (req, res, next) => {
  await User.findById(req.userId).then((user) => {
    Role.findOne({ _id: user.role._id }, (err, role) => {
      if (err) {
        res.status(500).send({ message: err.message });
        return;
      }
      if (role.name === "admin") {
        return next();
      }
      res.status(403).send({ message: "Require admin role" });
      return;
    });
  });
};
const auth = {
  verifyToken,
  isAdmin,
};
export default auth;

import AuthService from "../service/authService.js";
const AuthController = {};
AuthController.Register = async (req, res) => {
  try {
    AuthService.Register(req, res);
  } catch (err) {
    res.sendError(err);
  }
};
AuthController.Login = async (req, res) => {
  try {
    AuthService.Login(req, res);
  } catch (err) {
    res.sendError(err);
  }
};
export default AuthController;

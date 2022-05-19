import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import connectDatabase from "./src/config/db.config.js";
import auth from "./src/middleware/auth.js";
import router from "./src/router/router.js";
dotenv.config();
connectDatabase();
const app = express();
app.use(helmet()).use(morgan("dev")).use(cors()).use(express.json());

app.use("/api", router);
app.get("/", auth.verifyToken, (req, res) => {
  res.send("Hello to quan ly nha hang");
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is listening on PORT: ${port}`);
});

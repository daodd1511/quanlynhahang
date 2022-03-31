import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDatabase from "./src/config/db.config.js";
import Menu from "./src/model/menu.js";
dotenv.config();
connectDatabase();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/add", (req, res) => {
  const menuItem = new Menu({
    name: "Bun dau mam tom",
    price: 100000,
  });
  menuItem.save().then((result) => res.send(result));
});

app.get("/menu", (req, res) => {
  Menu.find().then((result) => res.send(result));
});
app.get("/", (req, res) => {
  res.send("Hello to quan ly nha hang");
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is listening on PORT: ${port}`);
});

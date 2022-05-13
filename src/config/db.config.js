import mongoose from "mongoose";
import Role from "../model/role.js";
const connectDatabase = () => {
  console.log(`Connecting to ${process.env.MongoURI}`);
  mongoose
    .connect(process.env.MongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to the database");
      initial();
    })
    .catch((err) => {
      console.log(`Could not connect to the database. Exiting now...\n${err}`);
      process.exit();
    });
};
const initial = () => {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      // Add user role
      new Role({ name: "user" }).save((err) => {
        if (err) {
          console.log("error: ", err);
        }
        console.log("Add 'user' to roles collection");
      });
      // Add admin role
      new Role({ name: "admin" }).save((err) => {
        if (err) {
          console.log("error: ", err);
        }
        console.log("Add 'admin' to roles collection");
      });
    }
  });
};
export default connectDatabase;

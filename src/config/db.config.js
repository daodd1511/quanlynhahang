import mongoose from "mongoose";
const connectDatabase = () => {
  console.log(`Connecting to ${process.env.MongoURI}`);
  mongoose
    .connect(process.env.MongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to the database");
    })
    .catch((err) => {
      console.log(`Could not connect to the database. Exiting now...\n${err}`);
      process.exit();
    });
};
export default connectDatabase;

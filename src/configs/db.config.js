import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDatabase = () => {
  const mongoDbUrl = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}${process.env.MONGO_URL}`;

  console.log(`Connecting to ${mongoDbUrl}`);
  mongoose.Promise = global.Promise;
  // connecting to database
  mongoose
    .connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to the database");
    })
    .catch((err) => {
      console.log("Could not connect to the database. Exiting now...", err);
      process.exit();
    });
};

export default connectDatabase;

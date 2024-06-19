import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();

export default async function connect() {
  try {
    await mongoose.connect(process.env.CONN_STRING);
  } catch (err) {
    console.log(err.message);
    throw new Error("unable to connect to mongoDB: ");
  }

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("Connected to MongoDB");
  });
}

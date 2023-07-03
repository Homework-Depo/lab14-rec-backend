import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/mydatabase");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to the database.");
});

export default db;

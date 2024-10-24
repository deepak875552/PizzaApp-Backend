const mongoose = require("mongoose");
const serverConfig = require("./serverConfig");

/*
This function helps us to create connection with mongoDB database
*/

async function connectDB() {
  try {
    await mongoose.connect(serverConfig.DB_URL);
    console.log("Successfully connected to the mongoDB server. Thankyou");
  } catch (err) {
    console.log("Unable to connect the mongoDB server.");
    console.log(err);
  }
}
module.exports = connectDB;

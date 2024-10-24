const express = require("express");
// const bodyParser = require("body-parser");

const ServerConfig = require("./config/serverConfig");
const connectDB = require("./config/dbConfig");
const User = require("./schema/userSchema");

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.listen(ServerConfig.PORT, async () => {
  await connectDB();
  console.log(`Server started at ${ServerConfig.PORT}...!!`);

  // const newUser = await User.create({
  //   email: "abcdefgh@gmail.com",
  //   password: "123456",
  //   firstName: "Deepak",
  //   lastName: "Chauhan",
  //   mobileNumber: "1234567899",
  // });
  // console.log("Create new user");
  // console.log(newUser);
});

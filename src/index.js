const express = require("express");
// const bodyParser = require("body-parser");

const ServerConfig = require("./config/serverConfig");
const connectDB = require("./config/dbConfig");
const User = require("./schema/userSchema");
const userRouter = require("./routes/userRoute");
const cartRouter = require("./routes/cartRoute");

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter); //connects the user router to the server
app.use("/carts", cartRouter);

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

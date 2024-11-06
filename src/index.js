const express = require("express");
// const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const ServerConfig = require("./config/serverConfig");
const connectDB = require("./config/dbConfig");
const User = require("./schema/userSchema");
const userRouter = require("./routes/userRoute");
const cartRouter = require("./routes/cartRoute");
const authRouter = require("./routes/authRoute");
const { isLoggedIn } = require("./validation/authValidator");
const uploader = require("./middlewares/multerMiddleware");
const cloudinary = require("./config/cloudinaryConfig");

const fs = require("fs/promises");
const productRouter = require("./routes/productRoute");
const path = "./uploads";
fs.access(path).catch(async () => {
  await fs.mkdir(path);
});

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

//All my routes....
app.use("/users", userRouter);
app.use("/carts", cartRouter);
app.use("/auth", authRouter);
app.use("/products", productRouter);
app.get("/ping", isLoggedIn, (req, res) => {
  console.log(req.body);
  console.log(req.cookies);
  return res.json({ message: "pong" });
});

app.post("/photo", uploader.single("incomingfile"), async (req, res) => {
  console.log(req.file);
  const result = await cloudinary.uploader.upload(req.file.path);
  console.log("Result from cloudinary", result);
  await fs.unlink(req.file.path);
  return res.json({ message: "OK" });
});

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

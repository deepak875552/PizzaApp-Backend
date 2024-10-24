const express = require("express");
// const bodyParser = require("body-parser");

const ServerConfig = require("./config/serverConfig");
const connectDB = require("./config/dbConfig");

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.listen(ServerConfig.PORT, async () => {
  await connectDB();
  console.log(`Server started at ${ServerConfig.PORT}...!!`);
});

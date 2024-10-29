const express = require("express");
const { createUser } = require("../controllers/userController");

//initialize express router, routers are used for segrating our routes in different modules.
const userRouter = express.Router();

userRouter.post("/", createUser); //this is a route registration

module.exports = userRouter; //exporting the route here

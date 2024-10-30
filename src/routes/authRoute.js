const express = require("express");
const { login } = require("../controllers/authController");

//initialize express router, routers are used for segrating our routes in different modules.
const authRouter = express.Router();

authRouter.post("/login", login); //this is a route registration

module.exports = authRouter; //exporting the route here

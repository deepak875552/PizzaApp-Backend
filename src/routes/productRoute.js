const express = require("express");
const multer = require("multer");
const { addProduct } = require("../controllers/productController");
const uploader = require("../middlewares/multerMiddleware");

const productRouter = express.Router();

productRouter.post("/", uploader.single("productImage"), addProduct);

module.exports = productRouter;

const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: [true, "Product name is required"],
      minLength: [5, "Product name must be atleast 5 characters"],
      trim: true,
    },
    description: {
      type: String,
      maxlength: [200, "Description can not exceed 200 characters"],
    },
    productImage: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
    },
    category: {
      type: String,
      enum: ["veg", "non-veg", "drinks", "sides"],
      default: "veg",
    },
    inStock: {
      type: Boolean,
      required: [true, "In stock status is required"],
      default: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;

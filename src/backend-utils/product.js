import mongoose from "mongoose";

const productModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  }

},
{ versionKey: false }
);


export const Product = mongoose.models.products ||  mongoose.model("products", productModel);
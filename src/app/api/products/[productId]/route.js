import { Product } from "../../../../backend-utils/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

const PATCH = async (request, content) => {
  await mongoose.connect(process.env.mongoURL);
  const data = await request.json();
  const { productId } = content.params;
  console.log(productId);
  const product = await Product.findByIdAndUpdate({ _id: productId }, data, {
    new: true,
  });
  return NextResponse.json(product,{status:200});
};

export { PATCH };

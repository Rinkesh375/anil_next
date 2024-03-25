import mongoose from "mongoose";

import { NextResponse } from "next/server";
import { Product } from "../../../backend-utils/product";
export async function GET(){
     await mongoose.connect(process.env.mongoURL);
     const products = await Product.find();
     return NextResponse.json(products);
}


export async function POST(request){
    await mongoose.connect(process.env.mongoURL);
    const payload = await request.json();
    const product = new Product(payload);
    const result = await product.save();

    try {
       return  NextResponse.json(result)
    } catch (error) {
       return  NextResponse.json(error);
    }
}
import { NextResponse } from "next/server";

export  async function GET(request,{params:student}){
  
    return  NextResponse.json({result:student})
}
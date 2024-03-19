import { NextResponse } from "next/server";

export function GET(){

    return NextResponse.json({id:1,name:"Rinkesh",city:"Bengalore"},{status:200})
}
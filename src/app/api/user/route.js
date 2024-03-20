import { NextResponse } from "next/server";
import { users } from "../../../utils/constant";


export function GET(){

    return NextResponse.json(users,{status:200})
}
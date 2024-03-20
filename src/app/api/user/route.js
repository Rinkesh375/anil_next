import { NextResponse } from "next/server";
import { users } from "../../../utils/constant";


export function GET(){

    return NextResponse.json(users,{status:200})
}


export async function POST(request){
    const payload = await request.json();
 
    if(!payload.name) return NextResponse.json({result:"Write the user name",success:false},{status:400})
    return NextResponse.json({result:"New User Created Successfully",success:true},{status:200});
}
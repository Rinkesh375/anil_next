import { NextResponse } from "next/server";
import { users } from "../../../../utils/constant";

export function GET(_,content){
const singleUser = users.filter((item)=>item.id === +content.params.id);
return NextResponse.json(singleUser.length?{result:singleUser[0],success:true,stauts:200}:{result:"No Data Found"})
}


export  async function PUT(request,content){
    const {name} = await request.json()
    const {id} = content.params
     console.log(name)
    return NextResponse.json({result:"PUT Request Made Successfully",success:true,stauts:200})
}
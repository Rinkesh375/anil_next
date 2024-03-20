import { NextResponse } from "next/server";
import { users } from "../../../../utils/constant";

export function GET(_,content){
const singleUser = users.filter((item)=>item.id === +content.params.id);
return NextResponse.json(singleUser.length?{result:singleUser,success:true,stauts:200}:{result:"No Data Found"})
}
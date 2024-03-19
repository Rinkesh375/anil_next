import { getUser } from '@/utils/static';
import React from 'react'

const page = async ({params}) => {
    const {userId} = params;
    const users = await getUser();
    const {id,name,email,username} = users[userId-1]
  return (
    <div>
    <h1> ID : {id}</h1>
    <h1> Name : {name}</h1>
    <h1> email : {email}</h1>
    <h1> username : {username}</h1>
    
    
    </div>
  )
}


export async function generateStaticParams(){
    const users = await getUser();
    return users.map((user)=>({userId:user.id.toString()}))
}

export default page
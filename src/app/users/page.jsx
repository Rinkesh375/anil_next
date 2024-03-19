import React from 'react'
import Link from 'next/link';
import { getUser } from '@/utils/static';




const page = async  () => {
   const users = await getUser();
   
  return (
     <>
     
     {users.map((user)=><Link key={user.id} href={`/users/${user.id}`}><h1 style={{margin:"1rem",background:"red"}}>{user.name}</h1></Link>)}
     </>
  )
}

export default page
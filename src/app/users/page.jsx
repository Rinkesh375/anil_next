import React from 'react'
import axios from 'axios'
import Link from 'next/link';

export  const getData =  async ()=>{
     const res = await axios.get(`http://localhost:3000/api/user`);
    return res.data


}
const page = async() => {
    const users = await getData();
  return (
    <>
   {users.map((user)=><div className='flex ' key={user.id}>
   
    <Link href={`users/${user.id}`}>
        <h1 className='text-base text-[rgb(0,0,255)]'>Name : {user.name}</h1>


   </Link>
   <Link href={`users/${user.id}/update`}><h1 className='text-base text-[rgb(0,255,136)]'>Update</h1></Link>
   </div>)}
    
    
    </>
  )
}

export default page
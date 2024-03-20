import React from 'react'
import axios from 'axios';
export  const getData =  async (id)=>{
    const res = await axios.get(`http://localhost:3000/api/user/${id}`);
     return res.data.result


}
const page =  async({params:{userId}}) => {
  const {id,name} = await getData(userId)
  return (
    <div>
  <h1>ID : {id}</h1>
  <h1>Name : {name}</h1>

    </div>
  )
}

export default page
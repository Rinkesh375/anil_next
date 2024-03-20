"use client"
import React from 'react'
import axios from 'axios'

const page = () => {
    const handleFormSubmit = async (event) => {
           event.preventDefault();
           const formData = new FormData(event.target);
           const data = {name:formData.get("userName")}
           const res = await axios.post(`http://localhost:3000/api/user`,data);
           console.log(res.data)
           event.target.reset();
        
    }
  return (
   <form onSubmit={handleFormSubmit}>
    <input type="text" name="userName" placeholder='Enter your name' />
      <button type='submit'>Submit</button>
   </form>
  )
}

export default page

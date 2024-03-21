"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { getData } from "../page";

async function addNewData(id,data){
      const res = await axios.put(`http://localhost:3000/api/user/${id}`,data)
      return res.data.result
}


const page = ({ params: { userId } }) => {
  const [name, setName] = useState("");
  const handleForm = (event) => {
    event.preventDefault();
    addNewData(userId,{name})
    .then((res)=>console.log(res))
  };

  useEffect(() => {
    getData(userId).then((res) => setName(res.name));
  }, []);

  return (
    <form onSubmit={handleForm}>
      <input
        type="text"
        name="userName"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-red-500"
      />
      <button type="submit" className="bg-slate-200 p-1 rounded-sm">
        Submit
      </button>
    </form>
  );
};

export default page;

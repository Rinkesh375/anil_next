"use client"
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main >
         <Child/>
         <button onClick={()=>alert("Alert")}>Click</button>
    </main>
  );
}

function Child(){
  return <div>Child</div>
}
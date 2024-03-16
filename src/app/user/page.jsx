"use client"
import Script from "next/script";



export default function Page() {
  return (<>
  <Script src="/location.js" onLoad={()=>console.log("Next.js Script Component Has Been Loaded Successfully")} />
  <h1>This is Dynamic Routing for User Page</h1>
  
  </>);
}
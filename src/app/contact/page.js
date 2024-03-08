"use client"

import { useRouter } from "next/navigation"
export default function contact (){
    const router = useRouter();
    const handleNavigation = (url)=>{
          router.push(url);
    }

    return (
       <>
       <button onClick={()=>handleNavigation("/")}>Go To Home Page</button>
       <button onClick={()=>handleNavigation("/about")}>Go To About Page</button>
       </>

    )
}
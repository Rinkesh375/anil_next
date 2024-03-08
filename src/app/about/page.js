"use client"
import  {useRouter}  from "next/navigation"
export default function about (){
    const router = useRouter();
    const handleNavigation = (url)=>{
         router.push(url);
    }
    return (
       <>
       <button onClick={()=>handleNavigation("/")}>Go To Home Page</button>
       <button onClick={()=>handleNavigation("/contact")}>Go To Contact Page</button>
       
       </>

    )
}
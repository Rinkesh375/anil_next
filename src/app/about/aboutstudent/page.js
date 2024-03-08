
"use client"
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function about_student(){
      const navigate = useRouter();
      const handleNavigation = (url)=>{
            navigate.push(url);    
      }
       return (

      <div>
        <h1>About Student</h1>
           <div>
            <div style={{display:"flex",justifyContent:"space-between"}}>
             <Link href={"/"}>Home</Link>
             <Link href={"/about"}>About</Link>
         
             <Link href={"/about/aboutstudent"}>About Student</Link>
            
            
          </div> 
          <div style={{display:"flex",flexDirection:"column"}}>
              <button onClick={()=>handleNavigation("/")}>Home</button>
              <button onClick={()=>handleNavigation("/about")}>About</button>
       
              <button onClick={()=>handleNavigation("/about/aboutstudent")}>About Student</button>
             
          </div>
      </div>
      </div>
       )


}



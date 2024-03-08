"use client";
import { usePathname } from "next/navigation"
export default function LayoutAbout ({children}){
const currentPath = usePathname();
return (
    <>
    {/* This is called condtion layout rendering */}
     {currentPath !== "/about" &&  <h1>This Layout Will Be Available In All The About Component No Matter How Depth Your Component Are In About Folder</h1>}
    
     <div>
        
     {children}
        
        </div> 
    </>
)

};
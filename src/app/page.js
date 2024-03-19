import Image from "next/image";

export default function Home() {
  // console.log(process.env.NODE_ENV)
  return (
   <>
   {
    process.env.NODE_ENV === "development" ?<h1>Development Mode</h1>:<h1>Production Mode</h1>
    
   }
   
   </>
  );
}

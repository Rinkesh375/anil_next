/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:async()=>{
        return [
            {
                source:"/user",
                destination:"/login",
                permanent:false
            },
            {
                source:"/admin",
                destination:"/login",
                permanent:false
            },
            {
               source:"/user/:userId" ,
               destination:"/login",
               permanent:false
            }
        ]
    }
};

export default nextConfig;

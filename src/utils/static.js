import axios from "axios";

async function getUser (){

    let req = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    return req.data
 }



 export {getUser}
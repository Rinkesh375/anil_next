"use client";
export default function Lecture({params:{lecture}}){
 console.log(lecture);
    return (
    <div>
        <h1>Day : {lecture[0]}</h1>
        <h1>Coding Course : {lecture[1]}</h1>
        <h1>DSA : {lecture[2]}</h1>
    </div>
 )
}

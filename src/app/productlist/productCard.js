"use client"

/* This is client component  */

export default function ProductCard({price}){
      return(<button className="border-2 border-[green] bg-[black] py-1 px-2"  onClick={()=>alert(`Price is ${price}`)}>Check Price</button>)
}
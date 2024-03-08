"use client"
import  Link from "next/link"
 const ProductList = ()=>{
  const product = [
    {id:1,name:"Nokia"},
    {id:2,name:"Microsoft"},
    {id:3,name:"Iphone"},
    {id:4,name:"Lenovo"},
    {id:5,name:"Realme"}
  ]
 
  return(
    <div style={{display:"flex",flexDirection:"column",gap:"2rem"}} >
        {
            product.map(({id,name})=><Link href={`/productlist/${id}`}><h1>Product Name : {name}</h1></Link>)
        }

    </div>
  )

}

export default ProductList;
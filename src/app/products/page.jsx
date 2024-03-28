import React from 'react'
import axios from 'axios';
import Link from 'next/link';

const getProducts = async ()=>{
    const res = await axios.get(`http://localhost:3000/api/products`);
    return res;
}

const page = async () => {
    const data = await getProducts();
    const products = data.data
    

  return (
    <table border="1">
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Update Product</th>
            </tr>
            
        </thead>
        <tbody>
          {products.map(product =><tr key={product._id}>
                
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td><Link href={`products/${product._id}`}>Update</Link></td>
          </tr>)} 
        </tbody>
    </table>
  )
}

export default page
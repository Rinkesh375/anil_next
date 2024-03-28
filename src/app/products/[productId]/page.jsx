"use client"
import axios from "axios";
import {useState,useEffect} from "react"
async function getProduct(id) {
  return await axios.get(`http://localhost:3000/api/products/${id}`);
}

async function handleUpdateProduct(id,data){
   return axios.patch(`http://localhost:3000/api/products/${id}`,data)
}
const initialProduct = {
    name: "",
    price: "",
    category:""
  };



export default   function page({params:{productId}}) {
    const [product,setProduct] = useState(initialProduct);
    const {name,price,category} = product;
    
    useEffect(() => {
      getProduct(productId)
       .then((res) => {
          setProduct(res.data);
        })
       .catch((err) => {
          console.log(err);
        });
    }, []);
    
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const price = +formData.get("price");
    const category = formData.get("category");

    handleUpdateProduct(productId,{ name, price, category })
      .then((res) => {
        if (res.status == 200) {
            setProduct(initialProduct)
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <form
      className="flex flex-col gap-5  justify-center items-center"
      onSubmit={handleFormSubmit}
    >
      <input
        type="text"
        className="border-2 border-solid border-[red] py-2 px-1"
        placeholder="Enter The Product Name"
        required
        name="name"
        defaultValue={name}
       
      />
      <input
        type="text"
        className="border-2 border-solid border-[red] py-2 px-1"
        placeholder="Enter The Product Price"
        required
        name="price"
        defaultValue={price}
      />
      <input
        type="text"
        className="border-2 border-solid border-[red] py-2 px-1"
        placeholder="Enter The Product Category"
        required
        name="category"
        defaultValue={category}
      />
      <button type="submit" className="bg-[#f1e4e4] py-1 px-3 rounded-md">
        Update
      </button>
    </form>
  );
}
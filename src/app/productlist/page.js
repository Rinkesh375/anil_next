import axios from "axios"
async function getData() {
  return await axios.get(`https://dummyjson.com/products`);

}

async function ProductList() {
  let data = await getData();


  return (
    <div>
      <h1 >Product List</h1>
      {data.data.products.map(({ id, title }) => <div className="flex flex-col gap-10">
        <div className="bg-[red] w-[20%] text-white mt-4 p-4 text-center cursor-pointer rounded-md">
          <h1>ID : {id}</h1>
          <h1>Name : {title}</h1>
        </div>

      </div>)}
    </div>
  )

}

export default ProductList;
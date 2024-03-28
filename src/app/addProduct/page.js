"use client";
import axios from "axios";
async function handleAddProduct(data) {
  return await axios.post(`http://localhost:3000/api/products`, data);
}

export default function page() {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const price = formData.get("price");
    const category = formData.get("category");

    handleAddProduct({ name, price, category })
      .then((res) => {
        if (res.status === 201) event.target.reset();
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
      />
      <input
        type="text"
        className="border-2 border-solid border-[red] py-2 px-1"
        placeholder="Enter The Product Price"
        required
        name="price"
      />
      <input
        type="text"
        className="border-2 border-solid border-[red] py-2 px-1"
        placeholder="Enter The Product Category"
        required
        name="category"
      />
      <button type="submit" className="bg-[#f1e4e4] py-1 px-3 rounded-md">
        Add
      </button>
    </form>
  );
}

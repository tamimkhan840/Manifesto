
import  { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const ProductIndex = () => {
  const [products, setProducts] = useState([]);

  // Fetch data from API
  useEffect(() => {
    fetch("http://localhost:1000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleEdit = (id) => {
    console.log(`Edit product with ID: ${id}`);
    // Implement edit logic
  };

  const handleDelete = (id) => {


    console.log(`Deleted product with ID: ${id}`);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:1000/product/${id}`,
          {
            method: "DELETE"
          }
        )
        setProducts(products.filter((product) => product._id !== id));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  };

  return (
    <div className="p-55">

      <div className="flex items-center justify-between ">
        <h1 className="text-2xl font-bold mb-4">All Product</h1>
         <input type="text"  className="mt-1 hidden md:block w-2/4 p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500"/>
        <button className="text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"><NavLink to={'/dashboard/product/create'}>Add Product</NavLink></button>
      </div>
      <hr className="my-3"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {products?.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductIndex;

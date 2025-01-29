import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://at-shirt-server.vercel.app/product");
        const data = await response.json();
        setProducts(data); // Set the fetched data
        setLoading(false); // Stop the loader
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="py-12 px-6 text-center">
        <h2 className="text-2xl font-bold">Loading products...</h2>
      </div>
    );
  }

  return (
    <div className="py-12 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">In Evidenza</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link to={`/productDetails/${product._id}`}
            key={product._id}
            className="border rounded-lg shadow-sm overflow-hidden relative"
          >
            <img
              src={product.photo}
              alt={product.name}
              className="w-full h-80 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg text-gray-800">
                  {product.name}
                </h3>
                <Link
                  to={`/productDetails/${product._id}`}
                  className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded"
                >
                  {"Oversize"}
                </Link>
              </div>
              <p className="text-base text-gray-800 mb-4">{product.details}</p>
              <div className="flex justify-between items-center bg-red-500 hover:bg-red-600 text-black hover:text-white rounded-lg p-2 border shadow">
                <button  className="px-4 py-2 text-sm rounded-md">ADD TO CART</button>
                <span className="font-semibold">{product.price} €</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;

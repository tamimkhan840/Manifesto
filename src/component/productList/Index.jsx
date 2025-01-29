import  { useState } from "react";
import ProductGrid from "../productCard/ProductGrid";



const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`bg-white shadow-lg lg:shadow-none absolute top-16 lg:static z-10 p-8 lg:p-0 w-64 lg:w-72 lg:block transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      {/* Close Button */}
      <button
        onClick={toggleSidebar}
        className="absolute top-1 right-1 lg:hidden   px-2 py-1 rounded-full "
      >
        ✕
      </button>

      <div className="border shadow-lg p-3 sticky top-0 rounded-lg">
        <h3 className="font-semibold text-lg mb-6 text-center">All Collection</h3>
        <ul className="space-y-4 text-center">
          <li className="text-red-500">Abligurition (45)</li>
          <li>Amore (21)</li>
          <li>Aliurophilia (32)</li>
          <li>Anaxiphilia (129)</li>
          <button className="text-red-500 font-semibold hover:underline mt-2">
            Show All
          </button>
        </ul>

        <h3 className="font-semibold text-lg mt-8 text-center">Categories</h3>
        <ul className="space-y-4 text-center">
          <li className="text-red-500">Dictionary (45)</li>
          <li>Dot (21)</li>
          <li>Double (32)</li>
        </ul>

        <h3 className="font-semibold text-lg mt-8 text-center">Language</h3>
        <div className="flex justify-center space-x-4 mt-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded">Italic</button>
          <button className="border border-gray-300 px-4 py-2 rounded">English</button>
        </div>
      </div>
    </div>
  );
};


const ProductList = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);



  return (
    <div className="lg:flex">
      {/* Sidebar */}
      <div className="lg:hidden lg:relative">
        <button
          onClick={toggleSidebar}
          className="bg-red-500 text-white px-4 py-2 rounded mb-4"
        >
          Toggle Collection
        </button>
      </div>
      <div className="my-12">

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}  />
      </div>

      {/* Product List */}
      <div className="flex-1 px-2 lg:px-0">
        <h2 className="text-3xl font-bold text-center  my-6">Prodotti</h2>
        <div className="flex justify-between items-center mb-2">
          <p>Showing 1-12 of 20 results</p>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded"
          >
            <option value="asc">Default Sorting</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <div className="m-0 p-0">
          <ProductGrid />
        </div>

      </div>
    </div>
  );
};

export default ProductList;

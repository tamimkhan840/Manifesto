import  { useState } from "react";
import image1 from "../../assets/path-to-image20.png";

const products = [
  {
    id: 1,
    title: "Zapoj",
    description: "Binge drinking; two or more days of continuous drunkenness.",
    price: "60,00 €",
    image: image1,
    tag: "Regular",
  },
  {
    id: 2,
    title: "Eresiarca",
    description: "One who habitually speaks blasphemy or great gibberish.",
    price: "60,00 €",
    image: image1,
    tag: "Oversize",
  },
  {
    id: 3,
    title: "Listzomaniac",
    description: "A person who gets into a feverish frenzy during concerts.",
    price: "60,00 €",
    image: image1,
    tag: "Oversize",
  },
  {
    id: 3,
    title: "Listzomaniac",
    description: "A person who gets into a feverish frenzy during concerts.",
    price: "60,00 €",
    image: image1,
    tag: "Oversize",
  },
  {
    id: 3,
    title: "Listzomaniac",
    description: "A person who gets into a feverish frenzy during concerts.",
    price: "60,00 €",
    image: image1,
    tag: "Oversize",
  },
  {
    id: 3,
    title: "Listzomaniac",
    description: "A person who gets into a feverish frenzy during concerts.",
    price: "60,00 €",
    image: image1,
    tag: "Oversize",
  },
  {
    id: 3,
    title: "Listzomaniac",
    description: "A person who gets into a feverish frenzy during concerts.",
    price: "60,00 €",
    image: image1,
    tag: "Oversize",
  },
  {
    id: 3,
    title: "Listzomaniac",
    description: "A person who gets into a feverish frenzy during concerts.",
    price: "60,00 €",
    image: image1,
    tag: "Oversize",
  },
  {
    id: 3,
    title: "Listzomaniac",
    description: "A person who gets into a feverish frenzy during concerts.",
    price: "60,00 €",
    image: image1,
    tag: "Oversize",
  },
  {
    id: 3,
    title: "Listzomaniac",
    description: "A person who gets into a feverish frenzy during concerts.",
    price: "60,00 €",
    image: image1,
    tag: "Oversize",
  },
  // Add more products as needed
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`bg-white shadow-lg lg:shadow-none absolute top-16 lg:static z-10 p-8 lg:p-8 w-64 lg:w-72 lg:block transition-transform transform ${
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

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.title.localeCompare(b.title);
    }
    return b.title.localeCompare(a.title);
  });

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
      <div className="flex-1 px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-center  my-6">Prodotti</h2>
        <div className="flex justify-between items-center mb-2">
          <p>Showing 1-12 of {products.length} results</p>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded"
          >
            <option value="asc">Default Sorting</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow rounded-lg p-3 lg:p-4"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                  {product.tag}
                </span>
              </div>
              <div className="mt-3">
                <h3 className="font-semibold text-base">{product.title}</h3>
                <p className="text-gray-500 text-sm mt-1">
                  {product.description}
                </p>
                <div className="flex justify-between items-center hover:bg-red-600 text-black hover:text-white rounded-lg p-2 border shadow">
                  <button className="px-4 py-2 text-sm rounded-md">
                    ADD TO CART
                  </button>
                  <span className="font-bold">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

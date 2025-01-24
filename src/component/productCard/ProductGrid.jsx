 import { Link } from "react-router-dom";
import image1 from "../../assets/path-to-image20.png";


 const ProductGrid = () => {
    const products = [
      {
        id: 1,
        name: "Zapoj",
        description: "Binge drinking; two or more days of continuous drunkenness.",
        price: "60,00 €",
        size: "Regular",
        image: image1,
      },
      {
        id: 2,
        name: "Quaintrelle",
        description: "A stylish woman who lives in the name of passion and pursues life's pleasures.",
        price: "60,00 €",
        size: "Oversize",
        image: image1,
      },
      {
        id: 3,
        name: "Eresiarca",
        description: "One who habitually speaks blasphemy or great gibberish.",
        price: "60,00 €",
        size: "Oversize",
        image: image1,
      },
      {
        id: 4,
        name: "Listomaniac",
        description: "A person who gets into a feverish frenzy during concerts.",
        price: "60,00 €",
        size: "Oversize",
        image: image1,
      },
      {
        id: 5,
        name: "Barfly",
        description: "A person who spends much of their time drinking, habitually found in bars.",
        price: "60,00 €",
        size: "Oversize",
        image: image1,
      },
      {
        id: 6,
        name: "Shibumi",
        description: "Casual perfection, a natural and effortless elegance.",
        price: "60,00 €",
        size: "Oversize",
        image: image1,
      },
      {
        id: 7,
        name: "Matutolypea",
        description: "To be in a terrible mood when waking up in the morning.",
        price: "60,00 €",
        size: "Oversize",
        image: image1,
      },
      {
        id: 8,
        name: "Anaxiphilia",
        description: "Propensity to fall in love with the wrong person; unrequited loving.",
        price: "60,00 €",
        size: "Oversize",
        image: image1,
      },
    ];

    return (
      <div className="py-12 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">In Evidenza</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg shadow-sm overflow-hidden relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-top"
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
                  <Link to={"/productDetails"} className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full uppercase">
                    {product.size}
                  </Link>
                </div>
                <p className="text-base text-gray-800 mb-4">{product.description}</p>
                <div className="flex justify-between items-center hover:bg-red-600 text-black hover:text-white rounded-lg p-2 border shadow">
                  <button className=" px-4 py-2 text-sm rounded-md ">
                    ADD TO CART
                  </button>
                  <span className="font-semibold ">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };


  export default ProductGrid;
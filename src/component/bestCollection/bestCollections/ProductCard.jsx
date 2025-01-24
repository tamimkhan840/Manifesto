const ProductCard = ({ title,description,price, image,tag}) => {
    return (
      <div className="bg-white shadow rounded-lg p-3 lg:p-4"
              >
        <div className="relative">
            <img
            src={image}
            alt={title}
            className="w-full h-72 object-cover rounded-lg"
            />
            <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
            {tag}
            </span>
        </div>
        <div className="mt-3">
            <h3 className="font-semibold text-base">{title}</h3>
            <p className="text-gray-500 text-sm mt-1">
            {description}
            </p>
            <div className="flex justify-between items-center hover:bg-red-600 text-black hover:text-white rounded-lg p-2 border shadow">
            <button className="px-4 py-2 text-sm rounded-md">
                ADD TO CART
            </button>
            <span className="font-bold">{price}</span>
            </div>
        </div>
        </div>
    );
  };
export default ProductCard

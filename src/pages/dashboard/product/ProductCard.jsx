/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ProductCard = ({ product, onEdit, onDelete }) => {

  return (
    <div className="max-w-xs bg-white shadow-md rounded-lg p-3 flex justify-between">
      <div>
        <img
          src={product.photo}
          alt={product.name}
          className="w-full h-32 object-cover rounded"
        />
      </div>
      <div>
        <h2 className="font-bold text-lg mt-3">{product.name}</h2>
        <p className="text-gray-600 text-sm">{product.description}</p>
        <p className="text-red-500 font-bold mt-2">{product.price} €</p>
        <div className="flex justify-between mt-2">
          <button
            className="text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
            onClick={() => onEdit(product._id)}
          ><Link to={`/dashboard/product/updateproduct/${product._id}`}>Edit</Link>

          </button>
          <button
            className="text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            onClick={() => onDelete(product._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

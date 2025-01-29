/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <tr>
      <td className="border border-gray-300 px-4 py-2">
        <img
          src={product.photo}
          alt={product.name}
          className="w-24 h-24 object-cover rounded"
        />
      </td>
      <td className="border border-gray-300 px-4 py-2 font-bold">
        {product.name}
      </td>
      <td className="border border-gray-300 px-4 py-2 text-sm">
        {product.description}
      </td>
      <td className="border border-gray-300 px-4 py-2 text-red-500 font-bold">
        {product.price} €
      </td>
      <td className="border border-gray-300 px-4 py-2">
        <div className="flex space-x-2">
          <Link to={`/dashboard/product/updateproduct/${product._id}`}>
            <button className="text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600">
              Edit
            </button>
          </Link>
          <button
            className="text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            onClick={() => onDelete(product._id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductCard;


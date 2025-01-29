import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';

const UpDateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch(`https://at-shirt-server.vercel.app/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        reset(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching product:', err);
        Swal.fire({
          title: 'Error!',
          text: 'Could not fetch product data!',
          icon: 'error',
        });
        setLoading(false);
      });
  }, [id, reset]);

  const onSubmit = (data) => {
    fetch(`https://at-shirt-server.vercel.app/product/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((updated) => {
        if (updated.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Product updated successfully!',
            icon: 'success',
          });
          navigate('/dashboard/product');
        } else {
          Swal.fire({
            title: 'No Changes!',
            text: 'No changes were made to the product!',
            icon: 'info',
          });
        }
      })
      .catch((err) => {
        console.error('Error updating product:', err);
        Swal.fire({
          title: 'Error!',
          text: 'Could not update the product!',
          icon: 'error',
        });
      });
  };

  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 shadow-md rounded-lg w-full max-w-2xl"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Update Product</h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Update the product details below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500"
            />
            {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Chef</label>
            <input
              type="text"
              {...register('chef', { required: 'Chef name is required' })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500"
            />
            {errors.chef && <span className="text-sm text-red-500">{errors.chef.message}</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Supplier</label>
            <input
              type="text"
              {...register('supplier', { required: 'Supplier is required' })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500"
            />
            {errors.supplier && <span className="text-sm text-red-500">{errors.supplier.message}</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Taste</label>
            <input
              type="text"
              {...register('taste', { required: 'Taste is required' })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500"
            />
            {errors.taste && <span className="text-sm text-red-500">{errors.taste.message}</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              {...register('category', { required: 'Category is required' })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500"
            />
            {errors.category && <span className="text-sm text-red-500">{errors.category.message}</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Details</label>
            <input
              type="text"
              {...register('details', { required: 'Details are required' })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500"
            />
            {errors.details && <span className="text-sm text-red-500">{errors.details.message}</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Photo</label>
            <input
              type="url"
              {...register('photo', { required: 'Photo URL is required' })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500"
            />
            {errors.photo && <span className="text-sm text-red-500">{errors.photo.message}</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              {...register('price', { required: 'Price is required', min: 0 })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500"
            />
            {errors.price && <span className="text-sm text-red-500">{errors.price.message}</span>}
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md focus:ring focus:ring-yellow-300 focus:ring-opacity-50"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpDateProduct;


import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const CreateProduct = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    reset();

    fetch("http://localhost:1000/product", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((datas) => {
        if (datas.insertedId) {
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
            });
            navigate('/dashboard/product');
        }
    })
    .catch((err) => {
        console.error("Error:", err);
        Swal.fire({
            title: "Error!",
            text: "Something went wrong!",
            icon: "error"
        });

    });

  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 shadow-md rounded-lg w-full max-w-2xl"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Add New Coffee</h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
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
          Add Coffee
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contex/Index";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data.email, data.gender, data.name, data.profilePicture);

    const defaultRole = "user";
    createUser(data.email, data.password)
      .then((result) => {
        const userData = {
          name: data.name,
          email: data.email,
          gender: data.gender,
          profilePicture: data.profilePicture,
          role: defaultRole, // Add default role
        };

        fetch(`https://at-shirt-server.vercel.app/user`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((response) => {
            console.log("User data saved successfully:", response);
          });
          navigate("/")
        console.log("User created successfully:", result);
      })
      .catch((err) => {
        console.log("Error creating user:", err.message);
      });
    reset();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Register</h2>

        {/* Name */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name", { required: "Name is required" })}
            className={`mt-2 block w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className={`mt-2 block w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className={`mt-2 block w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Gender */}
        <div className="mb-6">
          <span className="block text-sm font-medium text-gray-700">Gender</span>
          <div className="flex items-center mt-2 space-x-6">
            <label className="flex items-center text-gray-700">
              <input
                type="radio"
                value="male"
                {...register("gender", { required: "Gender is required" })}
                className="mr-2"
              />
              Male
            </label>
            <label className="flex items-center text-gray-700">
              <input
                type="radio"
                value="female"
                {...register("gender", { required: "Gender is required" })}
                className="mr-2"
              />
              Female
            </label>
          </div>
          {errors.gender && (
            <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
          )}
        </div>

        {/* Profile Picture */}
        <div className="mb-6">
          <label
            htmlFor="profilePicture"
            className="block text-sm font-medium text-gray-700"
          >
            Profile Picture
          </label>
          <input
            id="profilePicture"
            type="file"
            {...register("profilePicture", { required: "Profile picture is required" })}
            className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:border-gray-300 file:text-sm file:font-semibold file:bg-gray-50 file:text-green-700 hover:file:bg-green-100"
          />
          {errors.profilePicture && (
            <p className="text-red-500 text-sm mt-1">{errors.profilePicture.message}</p>
          )}
        </div>

        {/* Terms and Conditions */}
        <div className="mb-6 flex items-center">
          <input
            type="checkbox"
            {...register("terms", { required: "You must accept the terms and conditions" })}
            className="mr-2"
          />
          <label className="text-sm text-gray-700">I accept the terms and conditions</label>
          {errors.terms && (
            <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;

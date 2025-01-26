import admin from "../../../assets/admin.png";

const UserProfile = ({ user }) => {
  // Sample user data if no props are passed
  const defaultUser = {
    name: "John Doe",
    email: "johndoe@example.com",
    gender: "Male",
    role: "User",
    profilePicture: "https://via.placeholder.com/150", // Default placeholder image
  };

  const userData = user || defaultUser;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-sm md:max-w-lg">
        {/* Profile Picture */}
        <div className="flex justify-center bg-blue-500 p-4">
          <img
            src={admin}
            alt="Profile"
            className="rounded-full h-32 w-32 object-cover border-4 border-white shadow-md"
          />
        </div>

        {/* User Details */}
        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">{userData.name}</h2>
          <p className="text-gray-500">{userData.email}</p>
          <p className="text-gray-500 capitalize">{userData.gender}</p>
          <span
            className={`inline-block px-4 py-2 mt-4 text-sm font-semibold rounded-full ${
              userData.role === "admin"
                ? "bg-red-500 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            {userData.role}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-around p-4 border-t bg-gray-50">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Edit Profile
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

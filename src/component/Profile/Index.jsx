import { useContext } from "react";
import { AuthContext } from "../../contex/Index";
import Avatar from 'react-avatar';

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
    console.log(user);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <p className="text-xl font-semibold text-gray-600">
          Please log in to view your profile.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 p-6">
          {/* <img
            src={user?.photoURL || }
            alt={user?.displayName || "User"}
            className="w-24 h-24 rounded-full border-4 border-white shadow-md"
          /> */}
          <Avatar name={user?.displayName} className="w-24 h-24 rounded-full border-1 shadow-md"/>
        </div>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            {user?.displayName || "No Name Provided"}
          </h1>
          <p className="text-center text-gray-500">{user?.email}</p>
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Role:</span>{" "}
              {user?.role || "User"}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Account Created:</span>{" "}
              {user?.creationTime

                ? new Date(user.createdAt.seconds * 1000).toLocaleDateString()
                : "Unknown"}
            </p>
          </div>
          <button
            onClick={logout}
            className="mt-6 w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

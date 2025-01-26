import  { useState, useEffect } from "react";

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the server
    fetch("http://localhost:1000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Failed to fetch users:", err));
  }, []);

  return (
    <div className="p-6 lg:p-10 font-sans bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">User Management</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-md">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Role</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{user.name}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                <td className="px-6 py-4 text-sm text-gray-600 capitalize">{user.role}</td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex space-x-2">
                    <button className="px-3 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition">
                      Edit
                    </button>
                    <button className="px-3 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Show message if no users are available */}
      {users.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No users found.</p>
      )}
    </div>
  );
};

export default UserTable;

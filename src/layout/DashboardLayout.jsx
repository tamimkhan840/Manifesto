import { Link, NavLink, Outlet } from "react-router";
import { useState } from "react";
import admin from "../assets/admin.png";

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar for Large Screens */}
      <aside className="hidden md:block bg-[#2E3A59] text-white h-full w-64">
        <NavLink to="admin" className="p-6 text-xl font-semibold border-b border-gray-700 flex items-center justify-between">
          <img
            src={admin}
            alt="Logo"
            className="h-10 w-10 rounded-full"
          />
        </NavLink>
        <nav className="flex-1 mt-4 overflow-y-auto">
          <ul>
            <li className="p-3 hover:bg-[#475569] cursor-pointer transition-colors">
              <NavLink className="block" to="/dashboard">
                Dashboard
              </NavLink>
            </li>
            <li className="p-3 hover:bg-[#475569] cursor-pointer transition-colors">
              <NavLink className="block" to="product">
                Products
              </NavLink>
            </li>
            <li className="p-3 hover:bg-[#475569] cursor-pointer transition-colors">
              <NavLink className="block" to="UserTable">
                Users
              </NavLink>
            </li>
            <li className="p-3 hover:bg-[#475569] cursor-pointer transition-colors">
              <NavLink className="block" to="/">
                Home
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Sidebar for Small Screens (Modal) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden">
          <div className="bg-[#2E3A59] text-white h-full w-64 flex flex-col">
            <div className="p-6 text-xl font-semibold border-b border-gray-700 flex items-center justify-between">
              <img
                src="https://via.placeholder.com/40"
                alt="Logo"
                className="h-10 w-10 rounded-full"
              />
              {/* Close Button */}
              <button
                onClick={toggleSidebar}
                className="border h-10 w-10 flex justify-center items-center rounded-lg hover:bg-gray-100"
              >
                <svg
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 6h12M6 12h12m-6 6h6"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex-1 mt-4 overflow-y-auto">
              <ul>
                <li className="p-3 hover:bg-[#475569] cursor-pointer transition-colors">
                  <NavLink className="block" to="/dashboard" onClick={toggleSidebar}>
                    Dashboard
                  </NavLink>
                </li>
                <li className="p-3 hover:bg-[#475569] cursor-pointer transition-colors">
                  <NavLink className="block" to="/dashboard/index-product" onClick={toggleSidebar}>
                    Products
                  </NavLink>
                </li>
                <li className="p-3 hover:bg-[#475569] cursor-pointer transition-colors">
                  <NavLink className="block" to="/" onClick={toggleSidebar}>
                    Home
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between bg-white px-4 py-4 shadow-md sticky top-0 z-10">
          {/* Sidebar toggle button */}
          <button
            onClick={toggleSidebar}
            className="border h-10 w-10 flex justify-center items-center rounded-lg hover:bg-gray-100 md:hidden"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 6h8m-8 4h12M6 14h8m-8 4h12"
              />
            </svg>
          </button>
          <h1 className="text-lg font-semibold text-gray-800">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 bg-red-500 rounded-full flex justify-center items-center hover:bg-red-600 transition">
              <svg
                className="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
                />
              </svg>
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

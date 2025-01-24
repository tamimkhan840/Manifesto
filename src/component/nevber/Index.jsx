import  { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#FAF4E1] border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-10">
      <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-black md:hidden bg-[#FAF4E1]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        {/* Logo */}
        <div className="text-black font-pacifico text-4xl font-bold flex">
          <Link to="/">wortees</Link><p className="text-lg">®</p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to={"/bestCollection"} href="#" className="text-gray-700 hover:text-black">
            Manifesto
          </Link>
          <Link to={"/productList"} className="text-gray-700 hover:text-black">
            Collezione
          </Link>
          <Link to={"/contact"} className="text-gray-700 hover:text-black">
            Contatti
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          {/* Language Selector */}

          <select

            className="bg-[#FAF4E1]  rounded"
          >
            <option >IT</option>
            <option >g</option>
          </select>


          {/* Wishlist Icon */}
          <button className="text-gray-700 hover:text-black">
          <MdOutlineFavoriteBorder size={25}/>
          </button>

          {/* Cart Icon */}
          <Link to={"/cartPage"} className="flex items-center space-x-1 text-gray-700 hover:text-black">
          <FaCartPlus />
            <span>Cart (0)</span>
          </Link>

          {/* Mobile Menu Toggle */}

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center bg-[#FAF4E1] px-4 py-2 space-y-2 ">
          <a href="#" className="text-gray-700 hover:text-black text-center">
            Manifesto
          </a>
          <a href="#" className="text-gray-700 hover:text-black text-center">
            Collezione
          </a>
          <a href="#" className="text-gray-700 hover:text-black text-center">
            Contatti
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

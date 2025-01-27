import { useState, useContext } from "react";
import { FaCartPlus, FaRegUserCircle, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contex/Index";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, cartItems } = useContext(AuthContext);
  const [selectedLang, setSelectedLang] = useState("IT");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang);
    setLangDropdownOpen(false);
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
          <Link to="/">wortees</Link>
          <p className="text-lg">®</p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link
            to={"/bestCollection"}
            className="text-gray-700 hover:text-black"
          >
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
          <div className="relative hidden md:block">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center bg-[#FAF4E1] text-gray-700 rounded-md py-2 pl-4 pr-8 border border-gray-300"
            >
              <img
                src={
                  selectedLang === "IT"
                    ? "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg"
                    : "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                }
                alt="Flag"
                className="w-5 h-5 mr-2"
              />
              {selectedLang}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown */}
            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-[#FAF4E1] border border-gray-300 rounded shadow-md z-10">
                <button
                  onClick={() => handleLanguageChange("IT")}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 w-full"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg"
                    alt="Italy Flag"
                    className="w-5 h-5 mr-2"
                  />
                  IT
                </button>
                <button
                  onClick={() => handleLanguageChange("EN")}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 w-full"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                    alt="England Flag"
                    className="w-5 h-5 mr-2"
                  />
                  EN
                </button>
              </div>
            )}
          </div>

          {/* Wishlist/User Icon */}
          {user ? (
            <Link
              to={"/profile"}
              className="text-gray-700 hover:text-black flex items-center space-x-2"
            >
              <FaRegUserCircle size={25} />
              <span>{user.name}</span>
            </Link>
          ) : (
            <Link
              to={"/login"}
              className="text-gray-700 hover:text-black flex items-center space-x-2"
            >
              <FaSignInAlt size={25} />
            </Link>
          )}

          {/* Cart Icon */}
          <Link
            to={"/cartPage"}
            className="flex items-center space-x-1 text-gray-700 hover:text-black relative"
          >
            <FaCartPlus size={25} />
            <p className=" bg-red-600 text-white text-center text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center absolute top-0 left-3">
              {cartItems.length}
            </p>
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center bg-[#FAF4E1] px-4 py-2 space-y-2">
          <Link
            to={"/bestCollection"}
            className="text-gray-700 hover:text-black text-center"
          >
            Manifesto
          </Link>
          <Link
            to={"/productList"}
            className="text-gray-700 hover:text-black text-center"
          >
            Collezione
          </Link>
          <Link
            to={"/contact"}
            className="text-gray-700 hover:text-black text-center"
          >
            Contatti
          </Link>
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center bg-[#FAF4E1] text-gray-700 rounded-md py-2 pl-4 pr-8 border border-gray-300"
            >
              <img
                src={
                  selectedLang === "IT"
                    ? "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg"
                    : "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                }
                alt="Flag"
                className="w-5 h-5 mr-2"
              />
              {selectedLang}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown */}
            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-md z-10">
                <button
                  onClick={() => handleLanguageChange("IT")}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 w-full"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg"
                    alt="Italy Flag"
                    className="w-5 h-5 mr-2"
                  />
                  IT
                </button>
                <button
                  onClick={() => handleLanguageChange("EN")}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 w-full"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                    alt="England Flag"
                    className="w-5 h-5 mr-2"
                  />
                  EN
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

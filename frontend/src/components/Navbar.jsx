import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full z-50 px-6 md:px-20 py-4 flex items-center justify-between font-sans bg-white/80 backdrop-blur-md shadow-sm fixed top-0">
      <h1 className="text-3xl font-semibold text-black tracking-wide cursor-pointer">
        <Link to="/">BEAUTY</Link>
      </h1>

      <div className="hidden md:flex items-center space-x-6 flex-1 ml-8">
        <ul className="flex space-x-6 text-black font-medium">
          <li>
            <Link to="/Categories" className="hover:text-yellow-600 transition">
              Categories
            </Link>
          </li>
          <li>
            <Link to='/Brands' className="hover:text-yellow-600 transition">
              Brand
            </Link>
          </li>
          <li>
            <Link to="/Products" className="hover:text-yellow-600 transition">
              Products
            </Link>
          </li>
          
        </ul>

        <div className="ml-6 flex-1">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
        </div>

        <div className="flex items-center space-x-4 ml-6 text-black">
          <Link to="/ShoppingBag" className="material-symbols-outlined cursor-pointer text-2xl hover:text-yellow-600 transition">
            shopping_bag
          </Link>
          <Link to="/Wishlist" className="material-symbols-outlined cursor-pointer text-2xl hover:text-yellow-600 transition">
            favorite
          </Link>
          <button className="px-4 py-2 border border-yellow-600 text-yellow-600 rounded-full hover:bg-yellow-600 hover:text-white transition">
            Login
          </button>
        </div>
      </div>

      <div className="md:hidden flex items-center space-x-4">
        <span className="material-symbols-outlined text-3xl cursor-pointer">search</span>
        <span className="material-symbols-outlined text-3xl cursor-pointer">shopping_bag</span> 
        <span className="material-symbols-outlined text-3xl cursor-pointer">favorite</span>
        <button className="px-3 py-1 border border-yellow-600 text-yellow-600 rounded-full hover:bg-yellow-600 hover:text-white transition text-sm">Login</button>

        <button className="text-black focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>

        {isOpen && (
          <div className="absolute top-16 right-6 bg-white/90 backdrop-blur-md shadow-lg rounded-lg flex flex-col items-center space-y-4 py-4 px-8 text-black text-base font-medium transition-all duration-300 z-50">
            <a href="#categories" className="hover:text-yellow-600 transition block w-full text-center">
              Categories
            </a>
            <a href="#brand" className="hover:text-yellow-600 transition block w-full text-center">
              Brand
            </a>
            <a href="#luxe" className="hover:text-yellow-600 transition block w-full text-center">
              Luxe
            </a>
            <a href="#fashion" className="hover:text-yellow-600 transition block w-full text-center">
              Fashion
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

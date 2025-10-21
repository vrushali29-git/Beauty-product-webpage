import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white px-8 md:px-20 py-12">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-bold mb-4">BEAUTY</h1>
          <p className="text-sm md:text-base text-gray-300">
            Enhancing your beauty with premium cosmetics and skincare products.
          </p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-yellow-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-yellow-500 transition">
                Products
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
          <p className="text-sm md:text-base text-gray-300 mb-4">
            Subscribe to get latest updates and offers.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-full border-none outline-none text-black"
            />
            <button className="px-4 py-2 bg-yellow-500 rounded-r-full font-medium hover:bg-yellow-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 my-8"></div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} BEAUTY. All rights reserved.
        </p>
        <div className="flex gap-4 text-lg">
          <a href="#" className="hover:text-yellow-500 transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-yellow-500 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-yellow-500 transition">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

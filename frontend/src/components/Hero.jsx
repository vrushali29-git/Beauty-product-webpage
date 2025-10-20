import React from "react";
import {Link} from 'react-router-dom';
import heroImg from "../assets/landing/hero.png";
import product1 from "../assets/landing/product1.jpeg";
import product2 from "../assets/landing/product2.jpg";
import product3 from "../assets/landing/product3.jpg";
import product4 from "../assets/landing/product4.jpeg";
import product5 from "../assets/landing/product5.jpeg";
import product6 from "../assets/landing/product6.jpeg";

import skincare1 from "../assets/landing/skincare1.jpg";
import skincare2 from "../assets/landing/skincare2.jpg";
import skincare3 from "../assets/landing/skincare3.jpg";
import skincare4 from "../assets/landing/skincare4.jpeg";

import brand1 from "../assets/landing/brand1.jpg";
import brand2 from "../assets/landing/brand2.webp";
import brand3 from "../assets/landing/brand3.avif";

const Hero = () => {
  const skincareProducts = [
    { id: 1, name: "Hydrating Cleanser", img: skincare1 },
    { id: 2, name: "Vitamin C Serum", img: skincare2 },
    { id: 3, name: "Moisturizer", img: skincare3 },
    { id: 4, name: "Sunscreen SPF50", img: skincare4 },
  ];

  const deals = [
    { id: 1, discount: "₹99 OFF", description: "On select lipsticks" },
    { id: 2, discount: "₹299 OFF", description: "On skincare sets" },
    { id: 3, discount: "₹499 OFF", description: "On combo packs" },
  ];

  const brands = [
    { id: 1, name: "L'Oreal Paris", img: brand1 },
    { id: 2, name: "COSRX", img: brand2 },
    { id: 3, name: "MAC", img: brand3 },
  ];
  return (
    <>
      <section
        className="flex items-center justify-start px-8 md:px-20 transition-all duration-500 min-h-[60vh] md:min-h-[80vh] relative overflow-hidden"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover", // Make sure image covers the section
          backgroundRepeat: "no-repeat", // Avoid repeated patterns
          backgroundPosition: "right center", // Crop from the left as screen shrinks
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-pink-60/70 md:bg-transparent"></div>

        {/* Text Content */}
        <div className="relative z-10 text-left max-w-lg md:max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-3 drop-shadow-md font-sans">
            Cosmetics that
          </h1>
          <h3 className="text-2xl md:text-3xl text-black mb-4 drop-shadow-md font-sans">
            Everyone Loves!
          </h3>
          <p className="text-base md:text-xl text-pink-900 mb-8 leading-relaxed">
            crafted to bring out your natural glow, inspire confidence, and make
            every day a celebration of your beauty.
          </p>
        </div>
      </section>

      <section className="px-8 md:px-20 py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-extrabold text-pink-900 mb-12 text-center opacity-80 font-sans">
          Our Products
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center">
          {/* Product 1 */}
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden shadow-lg">
              <img
                src={product1}
                alt="Product 1"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-center text-black font-medium">Lipstick</p>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden shadow-lg">
              <img
                src={product2}
                alt="Product 2"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-center text-black font-medium">
              Foundation
            </p>
          </div>

          {/* Product 3 */}
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden shadow-lg">
              <img
                src={product3}
                alt="Product 3"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-center text-black font-medium">Blush</p>
          </div>

          {/* Product 4 */}
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden shadow-lg">
              <img
                src={product4}
                alt="Product 4"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-center text-black font-medium">Mascara</p>
          </div>

          {/* Product 5 */}
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden shadow-lg">
              <img
                src={product5}
                alt="Product 5"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-center text-black font-medium">Eyeshadow</p>
          </div>

          {/* Product 6 */}
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden shadow-lg">
              <img
                src={product6}
                alt="Product 6"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-center text-black font-medium">Perfume</p>
          </div>
        </div>
      </section>
      <section className="px-8 md:px-20 py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-extrabold text-pink-900 mb-12 text-center opacity-900 font-sans">
          Skincare Essentials
        </h2>

        {/* Grid: 2 columns on desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {skincareProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center group transition-transform duration-300 hover:scale-105 w-full max-w-md"
            >
              {/* Rectangular Image */}
              <div className="w-full h-60 rounded-lg overflow-hidden shadow-lg relative">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {/* Shop Now button on hover */}
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-yellow-500 text-white text-sm px-4 py-2 rounded-full transition">
                  Shop Now
                </button>
              </div>
              <p className="mt-4 text-center text-black font-medium text-lg">
                {product.name}
              </p>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-yellow-500 text-white font-medium rounded-full hover:bg-yellow-600 transition">
            Explore More
          </button>
        </div>
      </section>

      <section className="px-8 md:px-20 py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-extrabold text-pink-900 opacity-900 font-sans mb-12 text-center">
          Best Deals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-pink-50 rounded-lg shadow-lg p-8 flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-105"
            >
              <p className="text-4xl md:text-5xl font-extrabold text-pink-700 opacity-900 font-sans mb-4">
                {deal.discount}
              </p>
              <p className="text-lg md:text-xl text-black font-medium">
                {deal.description}
              </p>
              <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-medium rounded-full hover:bg-yellow-600 transition">
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 md:px-20 py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-extrabold text-pink-900 opacity-900 font-sans mb-12 text-center">
          Our Brands
        </h2>

        <div className="flex flex-col gap-8">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="w-full rounded-lg overflow-hidden shadow-lg relative group hover:scale-105 transition-transform duration-300"
            >
              <img
                src={brand.img}
                alt={brand.name}
                className="w-full h-60 md:h-72 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <p className="text-white text-2xl font-bold">{brand.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;

import React from "react";
import featured1 from "../assets/brands/featured1.jpg";
import featured2 from "../assets/brands/featured2.jpg";
import featured3 from "../assets/brands/featured3.jpg";

import kayBeauty from "../assets/brands/kayBeauty.avif";
import mac from "../assets/brands/mac.jpg";
import dotKey from "../assets/brands/dotKey.webp";
import maybelline from "../assets/brands/maybelline.jpg";
import lakme from "../assets/brands/lakme.avif";

import alertbg from "../assets/brands/alertbg.jpg";

import product1 from "../assets/brands/product1.jpg";
import product2 from "../assets/brands/product2.jpg";
import product3 from "../assets/brands/product3.webp";
import product4 from "../assets/brands/product4.webp";

const Brands = () => {
  const brandImages = [kayBeauty, mac, dotKey, maybelline, lakme];
  const products = [product1, product2, product3, product4];
  const featured = [featured1, featured2, featured3];

  return (
    <section className="py-20 bg-pink-50 font-sans w-full">
      <h2 className="text-3xl font-bold text-center mb-5 mt-5 text-yellow-700">
        Brands Featured by Us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 px-4 sm:px-10">
        {featured.map((img, index) => (
          <div
            key={index}
            className="w-full h-100 bg-white rounded-lg shadow-md overflow-hidden flex items-center justify-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={img}
              alt={`Featured ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-12 sm:px-10">
        {brandImages.map((img, index) => (
          <div
            key={index}
            className="w-full h-24 aspect-square bg-white rounded-lg shadow-md overflow-hidden flex items-center justify-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={img}
              alt={`Brand ${index + 1}`}
              className="w-3/4 h-1/2 object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mb-12 h-30 flex justify-center px-4 sm:px-10">
        <div
          className="w-full  aspect-video rounded-lg shadow-md overflow-hidden flex items-center justify-center relative hover:scale-105 transition-transform duration-300"
          style={{
            backgroundImage: `url(${alertbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
        
          <div className="absolute inset-0 rounded-lg"></div>
          <div className="relative text-center text-black px-4">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Exclusive Launch Alert!
            </h3>
            <p className="text-sm sm:text-lg">
              You saw it here first.{" "}
              <span className="font-bold text-pink-700">SHOP NOW!</span>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 px-4 sm:px-10">
        {products.map((img, index) => (
          <div
            key={index}
            className="w-full h-70 aspect-square bg-white rounded-lg shadow-md overflow-hidden flex items-center justify-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={img}
              alt={`Product ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;

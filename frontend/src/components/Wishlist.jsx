import React from "react";
import { Link } from "react-router-dom";

// import emptyWishlist from "../assets/empty-wishlist.png"; // Add your wishlist sticker image

const Wishlist = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-pink-50 font-sans px-4">
      <div className="text-center">
        {/* Empty wishlist sticker */}
        {/* <img
          src={emptyWishlist}
          alt="Empty Wishlist"
          className="w-48 h-48 mx-auto mb-6 object-contain"
        /> */}

        <h2 className="text-3xl font-bold mb-4">Your Wishlist is Empty</h2>
        <p className="text-gray-600 mb-6">
          Looks like you haven't added any products to your wishlist yet.
        </p>
        <button
          className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors duration-300"
        >
          <Link to="/Products">Shop Now</Link>
        </button>
      </div>
    </section>
  );
};

export default Wishlist;

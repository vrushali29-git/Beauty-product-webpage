import React from "react";
import { AiFillStar } from "react-icons/ai";
import product1 from '../assets/new/p1.webp';
import product2 from '../assets/new/p2.webp';
import product3 from '../assets/new/p3.jpg';
import product4 from '../assets/new/p4.webp';
import product5 from '../assets/new/p5.webp';
import product6 from '../assets/new/p6.jpeg';
import product7 from '../assets/new/p7.jpeg';
import product8 from '../assets/new/p8.webp';
import product9 from '../assets/new/p9.webp';
import product10 from '../assets/new/p10.webp';
import product11 from '../assets/new/p11.webp';
import product12 from '../assets/new/p12.jpeg';
import product13 from '../assets/new/p13.jpg';
import product14 from '../assets/new/p14.jpeg';
import product15 from '../assets/new/p15.jpeg';
import product16 from '../assets/new/p16.jpeg';
import product17 from '../assets/new/p17.jpeg';
import product18 from '../assets/new/p18.jpeg';
import product19 from '../assets/new/p19.webp';
import product20 from '../assets/new/p20.webp';


const products = [
  { id: 1, name: "Skin Repair Milk Night Cream", price: 228, originalPrice: 325, discount: "30% off", rating: 4.2, reviews: 358,img:product1 }  ,
  { id: 2, name: "Skin Repair Milk Facewash 100 ml", price: 227, originalPrice: 299, discount: "24% off", rating: 4.4, reviews: 526 ,img:product2 },
  { id: 3, name: "Red Onion Tinted Sunscreen SPF 50", price: 230, originalPrice: 425, discount: "46% off", rating: 4.1, reviews: 532 ,img:product3 },
  { id: 4, name: "Saffron Natural Glow Sheet Mask", price: 78, originalPrice: 99, discount: "21% off", rating: 4.3, reviews: 1547, img:product4},
  { id: 5, name: "Vitamin C Brightening Serum", price: 499, originalPrice: 699, discount: "29% off", rating: 4.5, reviews: 870 ,img:product5},
  { id: 6, name: "Aloe Vera Moisturizer Gel", price: 350, originalPrice: 500, discount: "30% off", rating: 4.0, reviews: 432,img:product6 },
  { id: 7, name: "Charcoal Face Wash 150 ml", price: 199, originalPrice: 299, discount: "33% off", rating: 4.2, reviews: 645, img:product7 },
  { id: 8, name: "Hydrating Lip Balm", price: 149, originalPrice: 199, discount: "25% off", rating: 4.6, reviews: 210 ,img:product8 },
  { id: 9, name: "Rose Water Toner 200 ml", price: 199, originalPrice: 250, discount: "20% off", rating: 4.3, reviews: 390 ,img:product9 },
  { id: 10, name: "Anti-Aging Night Cream", price: 599, originalPrice: 799, discount: "25% off", rating: 4.4, reviews: 320 ,img:product10 },
  { id: 11, name: "SPF 30 Daily Sunscreen", price: 349, originalPrice: 499, discount: "30% off", rating: 4.2, reviews: 450 ,img:product11 },
  { id: 12, name: "Vitamin E Face Oil", price: 499, originalPrice: 650, discount: "23% off", rating: 4.5, reviews: 275 ,img:product12 },
  { id: 13, name: "Activated Charcoal Mask", price: 299, originalPrice: 399, discount: "25% off", rating: 4.1, reviews: 510 ,img:product13 },
  { id: 14, name: "Pomegranate Exfoliating Scrub", price: 249, originalPrice: 349, discount: "29% off", rating: 4.3, reviews: 415 ,img:product14 },
  { id: 15, name: "Green Tea Eye Cream", price: 399, originalPrice: 549, discount: "27% off", rating: 4.4, reviews: 198 ,img:product15 },
  { id: 16, name: "Niacinamide Serum 30 ml", price: 449, originalPrice: 599, discount: "25% off", rating: 4.6, reviews: 620 ,img:product16 },
  { id: 17, name: "Herbal Shampoo 200 ml", price: 179, originalPrice: 250, discount: "28% off", rating: 4.2, reviews: 510 ,img:product17 },
  { id: 18, name: "Conditioner for Dry Hair 200 ml", price: 199, originalPrice: 299, discount: "33% off", rating: 4.3, reviews: 430 ,img:product18 },
  { id: 19, name: "Lip Gloss Set of 3", price: 349, originalPrice: 499, discount: "30% off", rating: 4.5, reviews: 390 ,img:product19 },
  { id: 20, name: "Matte Finish Compact Powder", price: 299, originalPrice: 399, discount: "25% off", rating: 4.1, reviews: 275 ,img:product20 },
];


const Products = () => {
  return (
    <section className="bg-pink-50 font-sans py-10 px-4 sm:px-10 mt-15">
      {/* Filter Section */}
      <div className="grid grid-cols-2 sm:grid-cols-7 gap-2 mb-8 text-sm font-medium text-gray-700">
        <div className="flex items-center justify-between border-b border-gray-300 pb-2 cursor-pointer">
          Categories <span>▼</span>
        </div>
        <div className="flex items-center justify-between border-b border-gray-300 pb-2 cursor-pointer">
          Brands <span>▼</span>
        </div>
        <div className="flex items-center justify-between border-b border-gray-300 pb-2 cursor-pointer">
          Price Range <span>▼</span>
        </div>
        <div className="flex items-center justify-between border-b border-gray-300 pb-2 cursor-pointer">
          Benefits <span>▼</span>
        </div>
        <div className="flex items-center justify-between border-b border-gray-300 pb-2 cursor-pointer">
          Finish <span>▼</span>
        </div>
        <div className="flex items-center justify-between border-b border-gray-300 pb-2 cursor-pointer">
          More filter options <span>11 more options</span> ▼
        </div>
        <div className="flex items-center justify-between border-b border-gray-300 pb-2 cursor-pointer">
          Sort By <span>Relevance ▼</span>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
            src={product.img}
              alt={product.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-medium mb-2 line-clamp-2">{product.name}</h3>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg font-bold">₹{product.price}</span>
                <span className="text-gray-400 line-through text-sm">
                  ₹{product.originalPrice}
                </span>
                <span className="text-green-600 text-sm font-semibold">
                  {product.discount}
                </span>
              </div>
              <div className="flex items-center gap-1 text-sm text-white bg-green-500 w-max px-2 py-1 rounded">
                <AiFillStar className="text-yellow-400" />
                {product.rating} ({product.reviews})
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

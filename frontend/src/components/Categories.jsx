import React from "react";
import heroImg from "../assets/categories/hero.jpg";

const Categories = () => {

  const sections = [
    {
      title: "Haircare",
      items: [
        { name: "Shampoo", img: "/src/assets/categories/shampoo.webp" },
        { name: "Conditioner", img: "/src/assets/categories/conditioner.avif" },
        { name: "Hair Oil", img: "/src/assets/categories/oil.webp" },
        { name: "Hair Mask", img: "/src/assets/categories/hairmask.jpg" },
      ],
    },
    {
      title: "Skincare",
      items: [
        { name: "Moisturizer", img: "/src/assets/categories/moisturizer.avif" },
        { name: "Serum", img: "/src/assets/categories/serum.webp" },
        { name: "Cleanser", img: "/src/assets/categories/cleanser.jpg" },
        { name: "Face Mask", img: "/src/assets/categories/facemask.webp" },
      ],
    },
    {
      title: "Makeup",
      items: [
        { name: "Lipstick",img:"/src/assets/categories/lipstick.webp" },
        { name: "Foundation", img:"/src/assets/categories/foundation.webp" },
        { name: "Blush",img:"/src/assets/categories/blush.webp"},
        { name: "Eyeshadow",img:"/src/assets/categories/eywshadow.webp" },
      ],
    },
    {
      title: "Fragrances",
      items: [
        { name: "Perfume",img:"/src/assets/categories/perfume.webp" },
        { name: "Body Mist",img:"/src/assets/categories/bodymist.webp" },
        { name: "Deodorant",img:"/src/assets/categories/deodorant.jpeg" },
        { name: "Luxury Scent",img:"/src/assets/categories/luxury.jpg" },
      ],
    },
  ];
  return (
    <>
    <section className="pt-24 bg-yellow-50 font-sans">
      <div className="w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Beauty Categories"
          className="w-full h-[400px] md:h-[500px] object-cover object-center transition-all duration-500"
        />
      </div>
    </section>
    <section className="px-8 md:px-20 py-16 bg-yellow-50 font-sans">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-12">
          Shop by Category
        </h2>

        {sections.map((section, index) => (
          <div key={index} className="mb-20">
            <h3 className="text-2xl font-semibold text-gray-700 mb-6 border-l-4 border-pink-500 pl-3">
              {section.title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 aspect-square cursor-pointer"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-white bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-50 transition">
                    <p className="text-pink-700 text-xl font-medium">
                      {item.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-10">
          <button className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition">
            Explore More
          </button>
        </div>
      </section>
    </>
  );
};

export default Categories;

import React from "react";
import { Link } from 'react-router-dom';
import mutedtoneflowers from "../assets/mutedtoneflowers.jpg";
import colorfulflowers from "../assets/colorfulflowers.jpg";
import whiteroses from "../assets/whiteroses.jpg";


const LatestProducts = () => {
  return (

      <section className="container mb-10 py-8 ml-20">
        <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
          Our Latest PRODUCTS </h1>
          <h3>CATEGORY:  FLOWERS</h3>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={mutedtoneflowers}
                alt="/"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-slate-600">
              <p>Flower Type 1</p>
              <p className="line-clamp-1">Muted Tone Flowers</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
                Description 
              </h1>
              <p className="line-clamp-2">
                FREE DELIVERY available for bulk orders!
              </p>
            </div>
          </div>
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={colorfulflowers}
                alt="/"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-slate-600">
              <p>Flower Type 2</p>
              <p className="line-clamp-1">Colorful Flowers</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
                Description
              </h1>
              <p className="line-clamp-2">
                FREE Delivery available for bulk orders!
              </p>
            </div>
          </div>
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={whiteroses}
                alt="/"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-slate-600">
              <p>Flower Type 3</p>
              <p className="line-clamp-1">White Roses</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">
                Description
              </h1>
              <p className="line-clamp-2">
                FREE DELIVERY available for bulk orders!
              </p>
            </div>
          </div>
        </div>
        <div>
          <div align="center">
          <button><Link to='/'>Return HOME Page</Link></button>
          </div>
        </div>
      </section>

  );
};

export default LatestProducts;
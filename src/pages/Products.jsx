import React, { useState } from 'react';
import { data } from '../data/data.js';

const Products = () => {
  //   console.log(data);
  const [products, setProducts] = useState(data);

  //   Filter Type flowers/urns/caskets etc
  const filterType = (category) => {
    setProducts(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setProducts(
       data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Rated Products
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Filter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setProducts(data)}
              className='m-1 border-orange-600 text-green-300 hover:bg-orange-600 hover:text-white'
            >
              ALL
            </button>
            <button
              onClick={() => filterType('flowers')}
              className='m-1 border-orange-600 text-green-200 hover:bg-orange-600 hover:text-white'
            >
              FLOWERS
            </button>
            <button
              onClick={() => filterType('caskets')}
              className='m-1 border-orange-600 text-green-200 hover:bg-orange-600 hover:text-white'
            >
              CASKETS
            </button>
            <button
              onClick={() => filterType('urns')}
              className='m-1 border-orange-600 text-green-200 hover:bg-orange-600 hover:text-white'
            >
              URNS
            </button>
            <button
              onClick={() => filterType('av services')}
              className='m-1 border-orange-600 text-green-200 hover:bg-orange-600 hover:text-white'
            >
              AV SERVICES
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              onClick={() => filterPrice('$')}
              className='m-1 border-orange-600 text-green-200 hover:bg-orange-600 hover:text-white'
            >
              $
            </button>
            <button
              onClick={() => filterPrice('$$')}
              className='m-1 border-orange-600 text-green-200 hover:bg-orange-600 hover:text-white'
            >
              $$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className='m-1 border-orange-600 text-green-200 hover:bg-orange-600 hover:text-white'
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className='m-1 border-orange-600 text-green-200 hover:bg-orange-600 hover:text-white'
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display products */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {products.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import cloudsvid from '../assets/cloudsvid.mp4';


const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <video
        className='w-full h-full object-cover'
        src={cloudsvid}
        autoPlay
        loop
        muted
      />
      <div className='absolute w-full h-full top-0 left-0 bg-white-300/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-blue-500 p-4'>
        <h1>FUNERAL PLANNING MADE EASY</h1>
        <h3 className='py-4'>All Things Funeral. Service Providers NZ-wide.</h3>
        <form
          className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1
          rounded-md text-black bg-gray-100/90'
        >
          <div>
            <input
              className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none
                  '
              type='text'
              placeholder='Search Location'
            />
          </div>
          <div>
            <button>
              <AiOutlineSearch size={20} className='icon' style={{color: '#ffffff'}}  />
            </button>
          </div>
        </form>
      </div>
    </div>


 )
};

export default Hero;
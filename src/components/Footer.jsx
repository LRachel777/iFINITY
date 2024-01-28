import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
          <h1>iFINITY.</h1>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaInstagram className='icon' />
          </div>
        </div>
        <div className='flex justify-between'>
          <ul className='lg:flex'>
            <li>About</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Promos</li>
            <li>Advertising</li>
          </ul>
          <ul className='text-right lg:flex'>
            <li>Home</li>
            <li>Funerals</li>
            <li>Products</li>
            <li>Caterers</li>
            <li>Booking</li>
            <li>Contact Us/ Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
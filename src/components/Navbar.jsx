import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick =()=> setNav(!nav)

  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-blue-700'>
      <div>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>iFINITY.</h1>
      </div>
      <ul className='hidden md:flex justify-between items-center'>
        <Link to='/Funerals' className='font-bold ml-6'>Funerals</Link>
        <Link to='/Caterers' className='font-bold ml-6'> Caterers </Link>
        <Link to='/Products' className='font-bold ml-6'> Products </Link> 
        <Link to='/LatestProducts' className='font-bold ml-6'>Latest Products</Link>
        <Link to='/Grants' className='font-bold ml-6'> Grants </Link>
        <Link to='/Testimonials' className='font-bold ml-6'> Testimonials </Link>
      </ul>
      <div className='hidden md:flex pr-4'>    
            <button><Link to='/Signin'>SIGN IN</Link> </button> 
            <button> <Link to='/Signup'>SIGN UP</Link> </button>   
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
        {!nav ? FontAwesomeIcon <faBars : <icon className='w-5'/>}
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1>iFINITY.</h1>
          <li> 
          <Link to='/Home' className='border-b'>HOME</Link>  
          </li>
          <li>
          <Link to='/Funerals' className='border-b'>FUNERAL HOMES</Link>
          </li>
          <li>
          <Link to='/Caterers' className='border-b'>CATERERS</Link>
          </li>
          <li>
          <Link to='/Products' className='border-b'>PRODUCTS</Link>  
          </li>
          <li>
          <Link to='/LatestProducts' className='border-b'>LATEST PRODUCTS</Link>  
          </li>
          <li>
          <Link to='/Grants' className='border-b'>GRANTS</Link>
          </li>
          <li>
          <Link to='/Testimonials' className='border-b'>TESTIMONIALS</Link>
          </li>
          <div className='flex flex-col'>
            <button className='my-6'>SIGN IN</button>
            <button className='my-6'>SIGN UP</button>
            <button>Account</button>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

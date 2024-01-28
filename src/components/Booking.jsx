import React from 'react';
import { Link } from 'react-router-dom';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { FaRegCircleUser } from "react-icons/fa6";

const Booking = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h2>BUDGET-FRIENDLY FUNERAL PACKAGES AVAILABLE!</h2>
          <p className='py-4'>
            Experience the very pinnacle of funeral services with all-inclusive
            packages including experienced funeral directors, caterers, only the 
            best quality products wherever you are in New Zealand. If you are 
            planning a funeral, we have budget-friendly choices that do not skimp
            on all-things-funeral that you need. iFINITY is passionate about serving
            you at one of the most difficult times for families and we have partnered
            with funeral service providers, including insurance, memorial plans,
            and even transport services for all your funeral needs. Our partners
            offer you packages at discounted prices when you book and shop with us.
            Kia kaha koutou!
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <RiCustomerService2Fill size={50} /> 
            </button>
            <div>
                <button><Link to='/Admin'> ADMIN / SUPPORT </Link></button>
                <p className='py-1'>FUNERAL PACKAGES FOR EVERY BUDGET</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <FaRegCircleUser size={50} />
            </button>
            <div>
               <button className='border-none hover:bg-blue-500 ml-4 py-2 hover:text-white-500'> <Link to='/Account'>CLIENT ACCOUNT</Link></button>
                <p className='py-1 center'>REGISTER to Access Account!</p>
            </div>  
          </div>
        </div>
      </div>

      <div>
          <div className='border text-center'>
              <p className='pt-2 font-bold text-red-500'>GET 10% OFF FOR BOOKING HERE!</p>
              <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
          </div>
          <form className='w-full'>
              <div className='flex flex-col my-2'>
                  <label>FUNERAL Providers by Region</label>
                  <select className='border rounded-md p-2'>
                      <option>Just Funerals AKL</option>
                      <option>Marshall Funerals AKL </option>
                      <option>Tipene Funerals AKL </option>
                      <option>Lychgate Funerals WGTN </option>
                      <option>The Wilson Funerals WGTN </option>
                      <option>Harbour City Funerals WGTN</option>
                  </select>
              </div>
              <div className='flex flex-col my-4'>
                  <label>Start-Date</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
              <div className='flex flex-col my-2'>
                  <label>Finish-Date</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
                <button className='w-full my-4'>Rates & Availabilities</button>
          </form>
      </div>
    </div>
  );
};

export default Booking;
import React from 'react'

import caterer1 from '../assets/caterer1.png';
import caterer2 from '../assets/caterer2.png';
import caterer3 from '../assets/caterer3.png';
import caterer4 from '../assets/caterer4.png';
import caterer5 from '../assets/caterer5.png';
import caterer6 from '../assets/caterer6.png';

const Caterers = () => {
  return (
    <div className='max-w-[1240px] mx-auto my-10 py-16 px-4 text-center text-blue-700'>
         <h1>Bereavement CATERERS</h1>

         <h3>AUCKLAND REGION</h3>
         <div className=" w-full flex flex-row p-6">
                <div id="caterers" className="w-1/3 mt-4 p-7">
                    <img src={caterer1} className="w-full" alt="/" />
                  <div className="p-4 flex flex-col text-center justify-center">
                    <span className="font-bold">GATTING'S EVENTS & CATERING</span>
                    <button><a href="https://gattings.co.nz/">WEBSITE</a></button>
                    <span className="font-bold">Contact: (09) 521 7220</span>
                  </div>
                </div>
        
                <div id="caterers" className="w-1/3 mt-4 p-7">
                    <img src={caterer2} className="w-full" alt="/" />
                  <div className="p-4 flex flex-col text-center justify-center">
                    <span className="font-bold">COOK & BUTLER CATERING</span>
                    <button><a href="https://cookandbutler.co.nz/">WEBSITE</a></button>
                    <span className="font-bold">Contact: (021) 459 056</span>
                  </div>
                </div>
 
                <div id="caterers" className="w-1/3 mt-4 p-7">
                    <img src={caterer3} className="w-full" alt="/" />
                  <div className="p-4 flex flex-col text-center justify-center">
                    <span className="font-bold">DIL'S FUNERAL CATERING</span>
                    <button><a href="https://www.dils.co.nz/">WEBSITE</a></button>
                    <span className="font-bold">Contact: (09) 415 8720</span>
                  </div>
                </div>
            </div> 
              
           
            <h3>WELLINGTON REGION</h3>
            <div className=" w-full flex flex-row p-6">
                            <div id="caterers" className="w-1/3 mt-4 p-7">
                                <img src={caterer4} className="w-full" alt="/" />
                                <div className="p-4 flex flex-col text-center justify-center">
                                    <span className="font-bold">SIMPLY FOOD</span>
                                    <button><a href="https://www.simplyfood.co.nz/">WEBSITE</a></button>
                                    <span className="font-bold">Contact: (04) 472 7333</span>
                                </div>
                            </div>
 
                            <div id="caterers" className="w-1/3 mt-4 p-7">
                                <img src={caterer5} className="w-full" alt="/" />
                                <div className="p-4 flex flex-col text-center justify-center">
                                    <span className="font-bold">GOOD CHEMISTRY CATERING</span>
                                    <button><a href="https://www.goodchemistrycatering.co.nz/">WEBSITE</a></button>
                                    <span className="font-bold">Contact: (04) 463 5702</span>
                                </div>
                            </div>
 
                            <div id="caterers" className="w-1/3 mt-4 p-7">
                                <img src={caterer6} className="w-full" alt="/" />
                                <div className="p-4 flex flex-col text-center justify-center">
                                    <span className="font-bold">IN-HOUSE CATERING</span>
                                    <button><a href="https://www.inhousecatering.co.nz/">WEBSITE</a></button>
                                    <span className="font-bold">Contact: (04) 477 0486</span>
                                </div>
                            </div>
                        </div>
                </div> 
                    

  )
} 

export default Caterers;
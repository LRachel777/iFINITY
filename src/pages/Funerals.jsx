import React from 'react'

import funeral1 from '../assets/funeral1.png';
import funeral2 from '../assets/funeral2.png';
import funeral3 from '../assets/funeral3.png';
import funeral4 from '../assets/funeral4.png';
import funeral5 from '../assets/funeral5.png';
import funeral6 from '../assets/funeral6.png';

const Funerals = () => {
  return (
    <div className='max-w-[1240px] mx-auto my-10 py-16 px-4 text-center text-blue-700'>
         <h1>Funeral Homes</h1>

         <h3>AUCKLAND REGION</h3>
         <div className=" w-full flex flex-row p-6">
                <div id="funeral homes" className="w-1/3 mt-4 p-7">
                    <img src={funeral1} className="w-full" alt="/" />
                  <div className="p-4 flex flex-col text-center justify-center">
                    <span className="font-bold">JUST FUNERALS</span>
                    <button><a href="https://justfunerals.co.nz/">WEBSITE</a></button>
                    <span className="font-bold">Contact:0800 804 663</span>
                  </div>
                </div>
        
                <div id="products" className="w-1/3 mt-4 p-7">
                    <img src={funeral2} className="w-full" alt="/" />
                  <div className="p-4 flex flex-col text-center justify-center">
                    <span className="font-bold">MARSHALL FUNERALS</span>
                   <button><a href="https://marshallfunerals.co.nz/">WEBSITE</a></button>
                    <span className="font-bold">Contact: (09) 266 9912</span>
                  </div>
                </div>
 
                <div id="products" className="w-1/3 mt-4 p-7">
                    <img src={funeral3} className="w-full" alt="/" />
                  <div className="p-4 flex flex-col text-center justify-center">
                    <span className="font-bold">TIPENE FUNERALS</span>
                    <button> <a href="https://www.tipenefunerals.co.nz/">WEBSITE</a></button>
                    <span className="font-bold">Contact: 0800 266 662</span>
                  </div>
                </div>
            </div>   
              
           
            <h3>WELLINGTON REGION</h3>
            <div className=" w-full flex flex-row p-6">
                            <div id="funeral homes" className="w-1/3 mt-4 p-7">
                                <img src={funeral4} className="w-full" alt="funerals" />
                                <div className="p-4 flex flex-col text-center justify-center">
                                    <span className="font-bold">LYCHGATE FUNERALS</span>
                                    <button><a href="https://lychgate.co.nz/">WEBSITE</a></button>
                                    <span className="font-bold">Contact: (04) 385 0745</span>
                                </div>
                            </div>
 
                            <div id="products" className="w-1/3 mt-4 p-7">
                                <img src={funeral5} className="w-full" alt="funerals" />
                                <div className="p-4 flex flex-col text-center justify-center">
                                    <span className="font-bold">THE WILSON FUNERAL HOMES</span>
                                    <button><a href="https://wilsonfunerals.co.nz/">WEBSITE</a></button>
                                    <span className="font-bold">Contact: (04) 389 6069</span>
                                </div>
                            </div>
 
                            <div id="products" className="w-1/3 mt-4 p-7">
                                <img src={funeral6} className="w-full" alt="funerals" />
                                <div className="p-4 flex flex-col text-center justify-center">
                                    <span className="font-bold">HARBOUR CITY FUNERAL HOMES</span>
                                    <button><a href="https://www.harbourcityfunerals.co.nz/">WEBSITE</a></button>
                                    <span className="font-bold">Contact: (04) 387 8301</span>
                                </div>
                            </div>
                        </div>
                </div> 
                    

  )
} 

export default Funerals;
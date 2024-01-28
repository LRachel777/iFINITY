import React from 'react';
import { Link } from 'react-router-dom';

import grants1 from  '../assets/grants1.jpg';
import govtgrant2 from '../assets/govtgrant2.jpg';
import submitbutton from  '../assets/submitbutton.jpg';

const Grants = () => {
  return (
    <div>
        <div align="center">
           <h1>GRANTS</h1>
           <h2>Bereavement GRANTS</h2>
          <p>Government Support</p>
        </div>

        <div className=" w-full flex flex-row p-6">
              <div id="grants" className="w-1/4 mt-4 p-4 ml-20">
                  <img src={grants1} className="w-full" alt="/" />
                <div className="p-4 flex flex-col text-center justify-center">
                  <span>Funeral EXPENSES</span>
                  <button><a href="https://www.workandincome.govt.nz/about-work-and-income/contact-us/">Contact Details</a></button>
                  <span>See Checklist</span>
                 </div>
              </div>
                       
              <div id="grants" className="w-1/3 mt-4 p-4 ml-20">
                  <img src={govtgrant2} className="w-full" alt="/" />
                <div className="p-4 flex flex-col text-center justify-center">
                  <span>Travel EXPENSES</span>
                  <button><a href="https://www.workandincome.govt.nz/products/index.html">Benefits and Forms</a></button>
                  <span>See Checklist</span>
                 </div>
              </div>
            
              <div id="grants" className="w-1/4 mt-4 p-4 ml-20">
                  <img src={submitbutton} className="w-full" alt="/" />
                <div className="p-4 flex flex-col text-center justify-center">
                <button hover><Link to='/FormSubmit'> SUBMIT FORM/ DOCX </Link></button>
                  <span>Upload Docx Here</span>
                 </div>
              </div>
            </div>

            <div align="center">
            <button><Link to='/'>Return HOME Page</Link></button>
            </div>
        </div>  
      
  );  
}

export default Grants;
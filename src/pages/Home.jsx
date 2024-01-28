import React from 'react'
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Booking from '../components/Booking';
import Footer from '../components/Footer';

export default function Home () {
    return (
        <div> 
           <Navbar />,
           <Hero />,
           <Booking />,
           <Footer />,
        </div>
        
)
}
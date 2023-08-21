import React from 'react';
import Navbar from '../components/classes/Navbar';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Discord from '../components/Discord'
import { RefProvider } from '../context/RefContext';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <div>
      <Navbar />

      <Hero />

      <RefProvider>
        <Info />
      </RefProvider>

      <Discord />

      <Footer />
    </div>
  )
}

export default Landing

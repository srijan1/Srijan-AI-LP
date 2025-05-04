
import React from 'react';
import { motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="hero-pattern">
        <Navbar />
        <Hero />
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <Contact />
        <Footer />
      </motion.div>
      
      <Toaster />
    </div>
  );
};

export default App;

import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants } from './animation';
import { Link } from 'react-scroll';
import bgImg from '../assets/Building-Construction.webp';

const Hero = () => {
  return (
    <section 
      name="home" 
      className="pt-20 min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden bg-black"
    >
      <img 
        src={bgImg} 
        alt="Construction Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
      />

      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-6 py-10 z-10 relative text-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="flex flex-col items-center justify-center h-full w-full"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-2xl">
            Building Sri Lanka's <br /> <span className="text-primary">Future</span>
          </h2>
          <p className="text-gray-200 py-4 max-w-3xl text-lg md:text-xl drop-shadow-lg leading-relaxed">
            JAL ENTERPRISES is a leading Sri Lankan construction company dedicated to delivering high-quality infrastructure and engineering solutions that contribute to the nation's sustainable development.
          </p>
          <div className="mt-10">
            <Link to="about" smooth duration={500} className="inline-block text-dark bg-primary px-10 py-4 rounded-md hover:bg-yellow-500 hover:-translate-y-1 transition-transform duration-300 shadow-xl font-bold uppercase cursor-pointer tracking-widest text-sm">
              Discover More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

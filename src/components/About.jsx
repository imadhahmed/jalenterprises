import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import homeImg from '../assets/homeimg.webp';

const About = () => {
  return (
    <section name="about" className="w-full bg-light py-24">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-start gap-16">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="w-full md:w-5/12 relative mt-4"
        >
          <div className="absolute -inset-4 bg-primary rounded-lg opacity-20 -z-10 blur-xl"></div>
          <img src={homeImg} alt="About Construction" className="w-full h-auto rounded-xl shadow-2xl" />
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="w-full md:w-7/12 flex flex-col justify-center"
        >
          <p className="text-primary font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
             About JAL Enterprises
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-6 leading-tight">Delivering high-quality infrastructure and engineering solutions</h2>
          <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">
            We specialize in the planning, construction, and successful delivery of projects across the building, transportation, and water sectors. We provide comprehensive construction services for government institutions, private sector clients, and infrastructure development projects, ensuring every project is completed with the highest standards of quality, safety, and efficiency.
          </p>
          <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed">
            Driven by integrity, technical excellence, and innovation, our experienced team is committed to delivering durable and cost-effective solutions while meeting project timelines and exceeding client expectations. Every project we undertake reflects our dedication to excellence, environmental responsibility, and long-term value for the communities we serve.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary mb-6 hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-bold text-dark mb-2">Our Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">To be one of Sri Lanka's most trusted and respected construction companies, recognized for delivering innovative, sustainable, and high-quality infrastructure solutions.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-bold text-dark mb-2">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">To build lasting infrastructure through quality workmanship, engineering excellence, safety, and strong client partnerships while contributing to the sustainable growth and development of Sri Lanka.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default About;

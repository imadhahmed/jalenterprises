import React from 'react';
import { motion } from 'framer-motion';
import { zoomInVariants } from './animation';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';
import project5 from '../assets/project5.jpg';
import project6 from '../assets/project6.jpg';
import project7 from '../assets/project7.jpg';
import project8 from '../assets/project8.jpg';

const Portfolio = () => {
  const projects = [project1, project2, project3, project4, project5, project6, project7, project8];

  return (
    <section name="portfolio" className="w-full bg-dark text-white py-24">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-bold uppercase tracking-widest mb-2">Our Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">Recent Projects</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={zoomInVariants}
              className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
            >
              <img src={proj} alt={`Project ${index + 1}`} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
              <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                <h3 className="text-2xl font-bold text-dark mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Project {index + 1}</h3>
                <p className="text-dark font-medium border-b-2 border-dark pb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">View Details</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;

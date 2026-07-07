import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants } from './animation';
import { allservices } from '../export';

const Services = () => {
  return (
    <section name="services" className="w-full bg-white py-24">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-bold uppercase tracking-widest mb-2">What We Provide</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark">Our Core Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allservices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={slideUpVariants}
                className="bg-light p-10 rounded-2xl hover:-translate-y-3 transition-transform duration-300 shadow-sm hover:shadow-xl border-t-4 border-transparent hover:border-primary group"
              >
                <div className="w-20 h-20 bg-primary group-hover:bg-dark transition-colors duration-300 rounded-2xl flex items-center justify-center mb-6 shadow-md rotate-3 group-hover:rotate-0">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{service.about}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Services;

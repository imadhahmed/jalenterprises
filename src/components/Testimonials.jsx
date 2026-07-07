import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants } from './animation';
import { clients } from '../export';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <section name="testimonials" className="w-full bg-white py-24">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-bold uppercase tracking-widest mb-2">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={slideUpVariants}
              className="bg-light p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 relative"
            >
              <FaQuoteLeft className="text-primary opacity-20 absolute top-6 left-6" size={60} />
              <p className="text-gray-600 italic mb-8 relative z-10 pt-8 leading-relaxed">"{client.about}"</p>
              <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                <img src={client.image} alt={client.name} className="w-16 h-16 rounded-full object-cover border-2 border-primary shadow-md" />
                <div>
                  <h4 className="text-xl font-bold text-dark">{client.name}</h4>
                  <p className="text-primary font-bold text-sm uppercase tracking-wider">{client.post}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;

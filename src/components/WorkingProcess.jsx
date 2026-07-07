import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants } from './animation';
import { planning } from '../export';

const WorkingProcess = () => {
  return (
    <section className="w-full bg-light py-24 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-bold uppercase tracking-widest mb-2">Our Process</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark">How We Work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {planning.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={slideUpVariants}
                className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl border-t-4 border-primary hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-light rounded-full flex items-center justify-center mb-6 text-primary shadow-inner border border-primary border-opacity-20 relative">
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-dark text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <Icon size={40} />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4 capitalize">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.about}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default WorkingProcess;

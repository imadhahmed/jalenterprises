import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section name="contact" className="w-full bg-light py-24">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="w-full lg:w-5/12"
        >
          <p className="text-primary font-bold uppercase tracking-widest mb-2">Contact Us</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-6 leading-tight">Get In Touch With Us</h2>
          <p className="text-gray-600 mb-10 text-lg">
            Ready to start your next infrastructure project? Contact JAL Enterprises today for a consultation and estimate.
          </p>
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-white rounded-full flex justify-center items-center text-primary shadow-md">
                <FaMapMarkerAlt size={24} />
              </div>
              <div>
                <h4 className="font-bold text-dark text-xl">Our Location</h4>
                <p className="text-gray-600">576, A.K.M. Road, Eravur-03</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-white rounded-full flex justify-center items-center text-primary shadow-md">
                <FaPhoneAlt size={24} />
              </div>
              <div>
                <h4 className="font-bold text-dark text-xl">Phone Number</h4>
                <p className="text-gray-600">+94 76 944 6632</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-white rounded-full flex justify-center items-center text-primary shadow-md">
                <FaEnvelope size={24} />
              </div>
              <div>
                <h4 className="font-bold text-dark text-xl">Email Address</h4>
                <p className="text-gray-600">info.jalent@gmail.com</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="w-full lg:w-7/12 bg-white p-10 rounded-2xl shadow-xl border-t-8 border-primary"
        >
          <h3 className="text-3xl font-bold text-dark mb-8">Send Us A Message</h3>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <input type="text" placeholder="Your Name" className="w-full bg-light border border-gray-200 rounded-md py-4 px-6 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
              <input type="email" placeholder="Your Email" className="w-full bg-light border border-gray-200 rounded-md py-4 px-6 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
            </div>
            <input type="text" placeholder="Subject" className="w-full bg-light border border-gray-200 rounded-md py-4 px-6 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
            <textarea placeholder="Your Message" rows="5" className="w-full bg-light border border-gray-200 rounded-md py-4 px-6 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"></textarea>
            <button className="bg-primary text-dark font-extrabold text-lg py-4 rounded-md hover:bg-dark hover:text-primary transition-colors shadow-md mt-2">
              Submit Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
export default Contact;

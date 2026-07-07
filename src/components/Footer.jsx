import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="w-full bg-dark text-white pt-20 pb-8 border-t-8 border-primary">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <img src={logo} alt="JAL Enterprises Logo" className="h-16 md:h-20 w-auto cursor-pointer" />
            <h1 className="text-2xl md:text-3xl font-extrabold text-primary tracking-wider">JAL <span className="text-white">ENTERPRISES</span></h1>
          </div>
          <p className="text-gray-400 leading-relaxed mb-6">
            Building Sri Lanka's Future Through Excellence in Buildings, Highways, Bridges, Water Infrastructure, and Engineering.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/share/1DBmHVnB7i/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-dark cursor-pointer transition-colors shadow-md">
              <FaFacebookF size={18} />
            </a>
            <a href="https://www.linkedin.com/company/jalenterpriseslk/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-dark cursor-pointer transition-colors shadow-md">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white">Quick Links</h3>
          <ul className="flex flex-col gap-4 text-gray-400 font-medium">
            <li className="hover:text-primary hover:translate-x-2 transition-all cursor-pointer">Home</li>
            <li className="hover:text-primary hover:translate-x-2 transition-all cursor-pointer">About Us</li>
            <li className="hover:text-primary hover:translate-x-2 transition-all cursor-pointer">Our Services</li>
            <li className="hover:text-primary hover:translate-x-2 transition-all cursor-pointer">Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 border-t border-gray-800 pt-8 px-6 font-medium">
        <p>&copy; {new Date().getFullYear()} JAL Enterprises. All rights reserved. Built with ❤️</p>
      </div>
    </footer>
  );
};
export default Footer;

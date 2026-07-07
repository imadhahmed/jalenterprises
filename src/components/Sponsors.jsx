import React from 'react';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';

const Sponsors = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
  return (
    <section className="w-full bg-white py-10 border-b border-gray-100 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`Sponsor ${index + 1}`} className="w-20 md:w-28 object-contain hover:scale-110 duration-200" />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Sponsors;

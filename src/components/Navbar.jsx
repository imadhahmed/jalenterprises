import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'services' },
    { id: 4, link: 'contact' },
  ];

  return (
    <nav className="flex justify-between items-center w-full h-20 px-6 text-white bg-dark fixed z-50 shadow-md">
      <div>
        <Link to="home" smooth duration={500} className="cursor-pointer flex items-center gap-3">
          <img src={logo} alt="JAL Enterprises Logo" className="h-12 md:h-16 w-auto" />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-primary tracking-wider">JAL <span className="text-white">ENTERPRISES</span></h1>
        </Link>
      </div>
      
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li key={id} className="px-5 cursor-pointer capitalize font-semibold text-gray-300 hover:text-primary duration-200">
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
      
      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-50 text-gray-300 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-dark text-gray-300 z-40">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-primary duration-200">
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

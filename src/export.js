import { FaBuilding, FaRoad, FaWater, FaTractor, FaHardHat, FaIndustry } from 'react-icons/fa';
import { GiBridge } from 'react-icons/gi';
import { MdEngineering, MdWaterDrop } from 'react-icons/md';
import { BsDroplet } from 'react-icons/bs';

import client1 from "./assets/client1.png";
import client2 from "./assets/client2.png";
import client3 from "./assets/client3.png";

import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding, FaSitemap } from "react-icons/fa";

export const allservices = [
  { icon: FaBuilding, title: "Building Construction", about: "High-quality building construction services." },
  { icon: FaRoad, title: "Highway & Road Construction", about: "Durable and sustainable road infrastructure." },
  { icon: GiBridge, title: "Bridge Construction", about: "Expert bridge engineering and construction." },
  { icon: BsDroplet, title: "Irrigation & Drainage Canal Construction", about: "Efficient water management solutions." },
  { icon: MdWaterDrop, title: "Water Supply Systems", about: "Reliable water supply infrastructure." },
  { icon: FaWater, title: "Sewerage Infrastructure", about: "Comprehensive sewerage and wastewater systems." },
  { icon: FaTractor, title: "Earthworks & Site Development", about: "Professional site preparation and earthworks." },
  { icon: FaIndustry, title: "Concrete & Structural Works", about: "Strong and durable concrete structures." },
  { icon: MdEngineering, title: "Civil Engineering & Infrastructure Development", about: "End-to-end civil engineering solutions." },
  { icon: FaHardHat, title: "Project Management & General Contracting", about: "Expert project management and execution." }
];

export const planning = [
  { icon: IoDocumentTextSharp, title: "planning", about: "Detailed planning and feasibility studies to ensure project success." },
  { icon: MdOutlineDesignServices, title: "design", about: "Innovative engineering and architectural design tailored to client needs." },
  { icon: FaRegBuilding, title: "execution", about: "Flawless execution with a focus on safety, quality, and efficiency." },
  { icon: FaSitemap, title: "delivery", about: "On-time delivery and comprehensive project handover." },
];

export const clients = [
  { image: client1, name: "Kamal Perera", about: "JAL Enterprises delivered our project on time and exceeded all our expectations.", post: "Constructor" },
  { image: client2, name: "Nuwan Silva", about: "Their attention to detail and commitment to quality is unmatched in Sri Lanka.", post: "Architect" },
  { image: client3, name: "Samantha Fernando", about: "A truly professional team that handles complex infrastructure with ease.", post: "Director" },
];

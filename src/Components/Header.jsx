import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, Monitor, Smartphone, Globe, BarChart, PenTool, ShieldCheck, Cctv } from 'lucide-react';

import logo from "../assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle Mobile Menu
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Dropdown Data Structures
  const servicesList = [
    { name: 'Graphics Design', icon: <PenTool size={18} />, link: '/services/graphics' },
    { name: 'Mobile Applications', icon: <Smartphone size={18} />, link: '/services/mobile-apps' },
    { name: 'Web Design & Development', icon: <Monitor size={18} />, link: '/services/web-dev' },
    { name: 'Support & Maintenance', icon: <ShieldCheck size={18} />, link: '/services/support' },
    { name: 'Camera & Security System', icon: <Cctv size={18} />, link: '/services/security' },
  ];

  const companyList = [
    { name: 'About Us', link: '/about' },
  ];

  return (
    <header className="w-full bg-slate-50 shadow-md sticky top-0 z-50 font-sans">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        
        {/* --- Logo Section --- */}
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} className='h-15' alt="" />
          <span className="text-xl md:text-2xl font-bold text-teal-700 tracking-tight">
            ZICHVERSE <span className="text-slate-600 text-base font-medium block md:inline md:text-lg">PRIVATE LIMITED</span>
          </span>
        </Link>

        {/* --- Desktop Navigation --- */}
        <nav className="hidden md:flex items-center gap-4">
                      <NavLink 
            to="/" 
            className={({ isActive }) => 
              `px-5 py-2 font-medium rounded-tr-2xl rounded-bl-2xl transition-all duration-300 ${isActive ? 'bg-gradient-to-r from-cyan-500 to-teal-600 text-white' : 'text-slate-700 hover:text-teal-600'}`
            }
          >
            Home
          </NavLink>
          
          {/* Company Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-5 py-2 text-slate-700 font-medium hover:text-teal-600 transition-colors group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-teal-600 group-hover:text-white rounded-tr-2xl rounded-bl-2xl transition-all duration-300">
              COMPANY <ChevronDown size={16} />
            </button>
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 w-48 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden">
                {companyList.map((item, index) => (
                  <Link 
                    key={index} 
                    to={item.link} 
                    className="block px-4 py-3 text-slate-600 hover:bg-slate-50 hover:text-teal-600 transition-colors border-b border-slate-50 last:border-none"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          

          {/* Services Dropdown (Active Style Simulation) */}
          <div className="relative group">
            {/* By default styling is plain, hover creates the 'Pill' shape from image */}
            <button className="flex items-center gap-1 px-5 py-2 font-medium text-slate-700 hover:text-teal-600 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-teal-600 group-hover:text-white rounded-tr-2xl rounded-bl-2xl transition-all duration-300">
              SERVICES <ChevronDown size={16} />
            </button>
            
            {/* Mega Menu / Dropdown */}
            <div className="absolute top-full -left-10 w-72 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-white rounded-lg shadow-xl border border-slate-100 py-2">
                {servicesList.map((service, index) => (
                  <Link 
                    key={index} 
                    to={service.link} 
                    className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-teal-50 hover:text-teal-700 transition-colors border-b border-slate-50 last:border-none"
                  >
                    <span className="text-teal-500">{service.icon}</span>
                    <span className="text-sm font-medium">{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>


          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `px-5 py-2 font-medium rounded-tr-2xl rounded-bl-2xl transition-all duration-300 ${isActive ? 'bg-gradient-to-r from-cyan-500 to-teal-600 text-white' : 'text-slate-700 hover:text-teal-600'}`
            }
          >
            CONTACT
          </NavLink>

        </nav>

        {/* --- Mobile Menu Button --- */}
        <button className="md:hidden text-slate-700" onClick={toggleMenu}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- Mobile Dropdown Menu --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-lg">
          <div className="flex flex-col p-4 space-y-2">
            
            <div className="font-bold text-teal-600 px-4 py-2">COMPANY</div>
            {companyList.map((item, idx) => (
               <Link key={idx} to={item.link} className="block pl-8 py-2 text-slate-600 hover:text-teal-600" onClick={toggleMenu}>
                 {item.name}
               </Link>
            ))}

            <div className="border-t border-slate-100 my-2"></div>
            
            <div className="font-bold text-teal-600 px-4 py-2">SERVICES</div>
            {servicesList.map((item, idx) => (
               <Link key={idx} to={item.link} className="flex items-center gap-2 pl-8 py-2 text-slate-600 hover:text-teal-600" onClick={toggleMenu}>
                 <span className="scale-75">{item.icon}</span> {item.name}
               </Link>
            ))}

            <div className="border-t border-slate-100 my-2"></div>

            <Link to="/pricing" className="block px-4 py-3 font-medium text-slate-700 hover:bg-slate-50" onClick={toggleMenu}>PRICING</Link>
            <Link to="/contact" className="block px-4 py-3 font-medium text-slate-700 hover:bg-slate-50" onClick={toggleMenu}>CONTACT</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
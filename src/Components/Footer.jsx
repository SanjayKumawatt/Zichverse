import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Mail, Phone, Globe, Facebook, Twitter, Instagram, Linkedin 
} from 'lucide-react';

import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const servicesList = [
    { name: 'Graphics Design', link: '/services/graphics' },
    { name: 'Mobile Applications', link: '/services/mobile-apps' },
    { name: 'Web Design & Development', link: '/services/web-dev' },
    { name: 'Support & Maintenance', link: '/services/support' },
    { name: 'Camera & Security System', link: '/services/security' },
  ];

  const companyList = [
    { name: 'About Us', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 font-sans pt-24 pb-10 relative overflow-hidden">

      {/* Top Cyan Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>

      <div className="container mx-auto px-4 md:px-8">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Logo + About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} className='h-15' alt="" />
              <span className="text-xl font-bold text-white tracking-tight">
                ZICHVERSE
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              We provide premium Web Development, Mobile Apps, Graphics Design & IT Solutions that help your business grow exponentially.
            </p>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {companyList.map((item, i) => (
                <li key={i}>
                  <Link to={item.link}
                    className="text-slate-400 hover:text-cyan-400 hover:pl-2 transition-all duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {servicesList.map((service, i) => (
                <li key={i}>
                  <Link 
                    to={service.link}
                    className="text-slate-400 hover:text-cyan-400 hover:pl-2 transition-all duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-cyan-500 mt-1" size={20} />
                <span className="text-sm text-slate-400">
                  C/o Dulahl Ch. Das, Bhatta Purnia U, Purnea, Bihar, India, 854301.
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="text-cyan-500" size={20} />
                <a href="mailto:support@zichverse.in" className="text-sm text-slate-400 hover:text-white transition-colors">
                  support@zichverse.in
                </a>
              </li>

            </ul>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {currentYear} <span className="text-cyan-500 font-bold">ZICHVERSE PRIVATE LIMITED</span>. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

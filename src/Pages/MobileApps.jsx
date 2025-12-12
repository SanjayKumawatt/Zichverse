import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, Layers, Globe, Database, Palette, Wrench, 
  ArrowRight, ShoppingCart, GraduationCap, Truck, Users, 
  Utensils, Plane, Stethoscope, Newspaper 
} from 'lucide-react';
import img1 from "../assets/services/mob1.png";
import img2 from "../assets/services/mob2.avif";

const MobileApps = () => {

  // Data for the 6 Service Cards
  const services = [
    {
      title: "App Prototyping & Strategy",
      desc: "Our UI/UX design team will help you build an engaging product easily and quickly. We provide all UX and UI design services encompassing the entire app development.",
      icon: <Layers size={32} />,
      link: "/contact"
    },
    {
      title: "Native Apps Development",
      desc: "Scale new routines of innovation with decades of experience in custom mobile design & development services using proven methodologies.",
      icon: <Smartphone size={32} />,
      link: "/contact"
    },
    {
      title: "Hybrid Apps Development",
      desc: "Develop and integrate APIs, a vast range of tools applications to specific industry verticals. We ensure seamless cross-platform functionality.",
      icon: <Globe size={32} />,
      link: "/contact"
    },
    {
      title: "Full Stack Mobile App Dev",
      desc: "Hire a dedicated web developer for the entire application development lifecycle from start to finish to meet rapidly changing business requirements.",
      icon: <Database size={32} />,
      link: "/contact"
    },
    {
      title: "Mobile App UX Design",
      desc: "Progressive web app development & design services to build high performance & secure applications that run seamlessly across all platforms.",
      icon: <Palette size={32} />,
      link: "/contact"
    },
    {
      title: "Maintenance & Support",
      desc: "Services that go beyond the launch stage enhance the design based on requirements or platform migration to keep your app running smoothly.",
      icon: <Wrench size={32} />,
      link: "/contact"
    }
  ];

  // Data for Industries List
  const industries = [
    { name: "E-COMMERCE", icon: <ShoppingCart size={18} /> },
    { name: "EDUCATIONAL", icon: <GraduationCap size={18} /> },
    { name: "DELIVERY", icon: <Truck size={18} /> },
    { name: "SOCIAL", icon: <Users size={18} /> },
    { name: "FOOD & RESTAURANT", icon: <Utensils size={18} /> },
    { name: "TRAVEL", icon: <Plane size={18} /> },
    { name: "MEDICAL", icon: <Stethoscope size={18} /> },
    { name: "NEWS", icon: <Newspaper size={18} /> },
  ];

  return (
    <div className="font-sans text-slate-800">
      
      {/* ==================== 1. PAGE HEADER ==================== */}
      <div className="relative bg-gradient-to-r from-teal-600 to-cyan-500 py-20 text-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 L100 0 L100 100 Z" fill="white" />
           </svg>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center md:text-left">
          <p className="text-cyan-100 text-sm font-semibold tracking-wider uppercase mb-2">
            Home &gt; Services &gt; Mobile Applications
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">Mobile Applications</h1>
        </div>
      </div>


      {/* ==================== 2. PLATFORM TABS & INTRO ==================== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-slate-900 tracking-wide">
              APPLICATION DEVELOPMENT SERVICES
            </h2>
            <div className="flex justify-center mt-2">
              <svg width="80" height="10" viewBox="0 0 100 15" fill="none">
                 <path d="M2 7.5C10 7.5 10 2 18 2C26 2 26 7.5 34 7.5C42 7.5 42 2 50 2C58 2 58 7.5 66 7.5C74 7.5 74 2 82 2C90 2 90 7.5 98 7.5" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* Platform Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['iOS', 'Android', 'Hybrid', 'React Native'].map((platform, idx) => (
              <button key={idx} className="px-6 py-2 border-2 border-cyan-500 text-cyan-600 font-bold hover:bg-cyan-500 hover:text-white transition-all rounded-md uppercase text-sm">
                {platform}
              </button>
            ))}
          </div>

          {/* Intro Content (Cloud Graphic + Text) */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Left: Illustration (Using placeholder for the complex cloud diagram) */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img 
                src={img1}
                alt="Mobile Ecosystem" 
                className="w-full max-w-md rounded-lg"
              />
            </div>

            {/* Right: Text */}
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">App Prototyping & Strategy</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our UI/UX design team will help you build an engaging product easily and quickly. 
                <span className="font-bold text-teal-600"> ZICHVERSE</span> provides all UX and UI design services encompassing the entire app development lifecycle.
              </p>
              <Link to="/contact">
                <button className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-full shadow-lg transition-all">
                  Get in touch
                </button>
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* ==================== 3. SERVICES GRID ==================== */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
            
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-slate-900 tracking-wide">
              OUR APP DEVELOPMENT SERVICES INCLUDE
            </h2>
            <div className="flex justify-center mt-2">
              <svg width="80" height="10" viewBox="0 0 100 15" fill="none">
                 <path d="M2 7.5C10 7.5 10 2 18 2C26 2 26 7.5 34 7.5C42 7.5 42 2 50 2C58 2 58 7.5 66 7.5C74 7.5 74 2 82 2C90 2 90 7.5 98 7.5" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {services.map((item, index) => (
              <div key={index} className="flex flex-col items-start p-2 group">
                <div className="mb-4 text-cyan-600 p-3 bg-cyan-50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-cyan-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
                <Link to={item.link}>
                  <button className="px-5 py-1.5 bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold rounded-full shadow-md transition-all">
                    More Info
                  </button>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ==================== 4. INDUSTRIES SERVED ==================== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left: Content & List */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                We Develop Mobile Apps to Serve Multiple Industries
              </h2>
              
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8">
                {industries.map((ind, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-600 font-medium hover:text-cyan-600 transition-colors">
                    <span className="text-cyan-500">{ind.icon}</span>
                    <span className="text-sm">{ind.name}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all">
                  Request a Free Quote
                </button>
              </Link>
            </div>

            {/* Right: Illustration */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img 
                src={img2}
                alt="Mobile Industries" 
                className="w-full max-w-lg"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default MobileApps;
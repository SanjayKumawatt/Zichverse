import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Monitor, Smartphone, PenTool, Megaphone, 
  Wrench, ShieldCheck, ArrowRight, Code2 
} from 'lucide-react';
import LogoGenerator from '../Components/LogoGenerator';

const Services = () => {

  // List of all services linked to the pages we created
  const allServices = [
    {
      title: "Web Design & Development",
      description: "Custom websites built with modern technologies like React, Node.js, and PHP. We ensure your website is responsive, fast, and SEO-friendly.",
      icon: <Monitor size={40} />,
      link: "/services/web-dev",
      color: "text-teal-600",
      bg: "bg-teal-50",
      border: "border-teal-100"
    },
    {
      title: "Mobile Applications",
      description: "Native and Hybrid mobile apps for iOS and Android. We build scalable apps with great UI/UX using React Native and Flutter.",
      icon: <Smartphone size={40} />,
      link: "/services/mobile-apps",
      color: "text-sky-600",
      bg: "bg-sky-50",
      border: "border-sky-100"
    },
    {
      title: "Graphics Design",
      description: "Creative branding, logos, banners, and UI/UX design. Our designers create visuals that speak your brand's language.",
      icon: <PenTool size={40} />,
      link: "/services/graphics",
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-100"
    },
    {
      title: "Camera & Security System",
      description: "Advanced CCTV, Biometric Access Control, and Video Door Phones installation. Secure your home and business with our surveillance solutions.",
      icon: <ShieldCheck size={40} />,
      link: "/services/security",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      border: "border-indigo-100"
    },
    {
      title: "Support & Maintenance",
      description: "24/7 technical support, website updates, bug fixing, and server maintenance to ensure your business never faces downtime.",
      icon: <Wrench size={40} />,
      link: "/services/support",
      color: "text-orange-600",
      bg: "bg-orange-50",
      border: "border-orange-100"
    }
  ];

  return (
    <div className="font-sans text-slate-800">
      

      {/* ==================== 1. PAGE HEADER ==================== */}
      <div className="relative bg-gradient-to-r from-teal-600 to-cyan-500 py-20 text-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <circle cx="0" cy="0" r="40" fill="white" />
             <circle cx="100" cy="100" r="40" fill="white" />
           </svg>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center md:text-left">
          <p className="text-cyan-100 text-sm font-semibold tracking-wider uppercase mb-2">
            Home &gt; Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
        </div>
      </div>


      {/* ==================== 2. INTRO SECTION ==================== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 uppercase tracking-wide">
            What We Do Best
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            At <span className="font-bold text-teal-600">ZICHVERSE</span>, we don't just build software; we build digital experiences. From conceptualization to deployment and support, we cover every aspect of your digital journey with precision and creativity.
          </p>
          <div className="flex justify-center mt-4">
            <svg width="80" height="10" viewBox="0 0 100 15" fill="none">
               <path d="M2 7.5C10 7.5 10 2 18 2C26 2 26 7.5 34 7.5C42 7.5 42 2 50 2C58 2 58 7.5 66 7.5C74 7.5 74 2 82 2C90 2 90 7.5 98 7.5" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </section>


      {/* ==================== 3. SERVICES GRID ==================== */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl p-8 border ${service.border} shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-start group`}
              >
                {/* Icon Box */}
                <div className={`mb-6 p-4 rounded-xl ${service.bg} ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                <Link to={service.link}>
                  <button className={`flex items-center gap-2 font-bold ${service.color} hover:underline decoration-2 underline-offset-4`}>
                    Read More <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ==================== 4. CTA SECTION ==================== */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements. Our team is ready to deliver the perfect solution tailored to your needs.
          </p>
          <Link to="/contact">
            <button className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-400 hover:to-teal-500 text-white font-bold rounded-full shadow-lg shadow-cyan-500/30 transform hover:-translate-y-1 transition-all">
              Start a Project
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;
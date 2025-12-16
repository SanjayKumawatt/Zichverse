import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, Monitor, Megaphone, PenTool, Wrench, 
  Zap, Database, Code2, ShieldCheck, MousePointerClick, Headset, ArrowRight 
} from 'lucide-react';
import img from "../assets/w.avif";

const ServicesAndFeatures = () => {
  
  // Services Data (Top Grid)
  const services = [
    // Note: First item is handled separately in JSX because it's a text card
    { 
      title: "Android & iOS App Development", 
      icon: <Smartphone size={40} className="text-sky-500" />, 
      bg: "bg-sky-50",
      border: "border-sky-100"
    },
    { 
      title: "Web Design & Development", 
      icon: <Monitor size={40} className="text-teal-500" />, 
      bg: "bg-teal-50",
      border: "border-teal-100"
    },
    
    { 
      title: "Graphics Designing", 
      icon: <PenTool size={40} className="text-slate-500" />, 
      bg: "bg-slate-50",
      border: "border-slate-100"
    },
    { 
      title: "Maintenance & Support", 
      icon: <Wrench size={40} className="text-indigo-500" />, 
      bg: "bg-indigo-50",
      border: "border-indigo-100"
    }
  ];

  // Features Data (Middle Grid)
  const features = [
    { name: "Super Fast Server", icon: <Zap size={24} /> },
    { name: "Daily Backups", icon: <Database size={24} /> },
    { name: "Technical Services", icon: <Code2 size={24} /> },
    { name: "Secure and Reliable", icon: <ShieldCheck size={24} /> },
    { name: "Super-Easy", icon: <MousePointerClick size={24} /> },
    { name: "24/7 Support", icon: <Headset size={24} /> },
  ];

  return (
    <section className="py-16 md:py-24 font-sans text-slate-800">
      <div className="container mx-auto px-4 md:px-8">

        {/* ==================== PART 1: SERVICES GRID ==================== */}
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-2">We Provide Awesome Services</p>
          <h2 className="text-3xl md:text-4xl font-bold uppercase text-slate-900">
            How Can We Help You Today?
          </h2>
          {/* Wave SVG */}
          <div className="flex justify-center mt-2">
            <svg width="80" height="10" viewBox="0 0 100 15" fill="none">
               <path d="M2 7.5C10 7.5 10 2 18 2C26 2 26 7.5 34 7.5C42 7.5 42 2 50 2C58 2 58 7.5 66 7.5C74 7.5 74 2 82 2C90 2 90 7.5 98 7.5" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          
          {/* Card 1: Special Text Card (Gradient Background) */}
          <div className="bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl p-8 text-white shadow-lg flex flex-col justify-center items-start transform hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4 uppercase">Our Services</h3>
            <p className="text-cyan-50 mb-6 leading-relaxed">
              We are a one-stop platform for designing E-commerce websites and android 
              applications that may fulfill your necessity and provide you huge benefits.
            </p>
            <Link to="/services" className="inline-flex items-center gap-2 font-bold underline decoration-2 underline-offset-4 hover:text-cyan-100">
              More Services <ArrowRight size={16} />
            </Link>
          </div>

          {/* Loop for Other Cards */}
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${service.bg} border ${service.border} rounded-xl p-8 flex flex-col items-center justify-center text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1 group`}
            >
              <div className="mb-4 p-4 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-700 uppercase">{service.title}</h3>
            </div>
          ))}
        </div>


        {/* ==================== PART 2: FEATURES ==================== */}
        
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold uppercase text-slate-900">
            Fall in Love with Our Features
          </h2>
          <div className="flex justify-center mt-2">
            <svg width="60" height="8" viewBox="0 0 100 15" fill="none">
               <path d="M2 7.5C10 7.5 10 2 18 2C26 2 26 7.5 34 7.5C42 7.5 42 2 50 2C58 2 58 7.5 66 7.5C74 7.5 74 2 82 2C90 2 90 7.5 98 7.5" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-24">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center p-6 border border-slate-100 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="w-12 h-12 rounded-full bg-cyan-500 text-white flex items-center justify-center mb-3">
                {feature.icon}
              </div>
              <h4 className="font-semibold text-slate-700">{feature.name}</h4>
            </div>
          ))}
        </div>


        {/* ==================== PART 3: WHAT MAKES US DIFFERENT ==================== */}
        
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          
          {/* Left Image */}
          <div className="w-full md:w-1/2 relative">
             <div className="absolute top-4 left-4 w-full h-full bg-teal-50 rounded-2xl -z-10"></div>
             {/* Placeholder for the illustration - Using a free consistent style image */}
             <img 
               src={img}
               alt="Support Team" 
               className="rounded-2xl shadow-lg w-full object-cover"
             />
          </div>

          {/* Right Text */}
          <div className="w-full md:w-1/2 text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">
              What Make Us Different?
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4 text-sm md:text-base">
              At <span className="font-bold text-teal-600">ZICHVERSE</span>, we combine tech expertise and business intelligence to catalyze change and deliver the best results. Our vision is crystal clear, the prime motto of our team is to provide utmost customer satisfaction.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4 text-sm md:text-base">
              We believe in honesty being our prime priority; we won't fake the deadlines, whatever it may take, but the words we marked, are the things we serve.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              The dedicated team of ZICHVERSE enthusiasts and developers brings to the table the best IT solutions that align with the client's business objectives for unmatched results.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesAndFeatures;
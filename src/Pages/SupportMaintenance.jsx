import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, MonitorCog, ShieldCheck, Clock, CheckCircle2, 
  Settings, Server, Activity, Banknote, Smile, Zap, Globe, ArrowRight 
} from 'lucide-react';

import img from "../assets/services/mainten.avif";

const SupportMaintenance = () => {

  const maintenanceServices = [
    {
      title: "Website Managed and Support Services",
      icon: <MonitorCog size={32} />,
      desc: "We provide expertise for your time to time regular requirements such as ongoing changes, enhancements, regular or on-demand backups/restore, and speed optimization etc. to ensure optimal performance.",
      link: "/contact"
    },
    {
      title: "Application Maintenance",
      icon: <Settings size={32} />,
      desc: "We apply a strong service delivery methodology for application support giving stability and availability to manage your occupational with greater efficiency and peace of mind. We also track the bugs & errors.",
      link: "/contact"
    },
    {
      title: "On Demand Maintenance Service",
      icon: <Wrench size={32} />,
      desc: "Let our monitor framework handle the task for your web application problems that may arise occasionally and cause usability display abnormalities or accessibility problems for public or validated users.",
      link: "/contact"
    }
  ];

  const whyChooseFeatures = [
    {
      title: "Your Business Online",
      icon: <Globe size={28} />,
      desc: "Boost your business with industry premium products and services, at prices that won't break your budget. If it doesn't provide you with a better internet experience, we simply don't offer it."
    },
    {
      title: "Privacy and Security",
      icon: <ShieldCheck size={28} />,
      desc: "Your website security and privacy come first at Zichverse, and we will always support the rights of individuals and consumers online. It's our mission to keep the internet open, free, and safe."
    },
    {
      title: "Flexibility",
      icon: <Activity size={28} />,
      desc: "It is essential that organizations have a flexible maintenance model in place to contain added needs, so our maintenance services and support provide \"run the business trained\" sources whenever needed."
    },
    {
      title: "Affordable Services",
      icon: <Banknote size={28} />,
      desc: "We have hired a passionate team of seasoned professionals with years of practice in working with the latest technologies that assist in making an efficient application that adds to easy maintenance."
    },
    {
      title: "Efficiency",
      icon: <Zap size={28} />,
      desc: "Our Maintenance & Support model uses a target model to generate an aligned business function model, which is programmed to improve the effectiveness efficiency of the system."
    },
    {
      title: "Customer Service",
      icon: <Smile size={28} />,
      desc: "You're covered by a Support Team that's renowned for being one of the most knowledgeable, friendly, and professional in the business. Real people are ready to assist you with any issue, any time, 24/7."
    }
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
            Home &gt; Services &gt; Support & Maintenance
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">Support & Maintenance</h1>
        </div>
      </div>


      {/* ==================== 2. INTRO SECTION ==================== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-slate-900 tracking-wide">
              MAINTENANCE
            </h2>
            <div className="flex justify-center mt-2">
              <svg width="80" height="10" viewBox="0 0 100 15" fill="none">
                 <path d="M2 7.5C10 7.5 10 2 18 2C26 2 26 7.5 34 7.5C42 7.5 42 2 50 2C58 2 58 7.5 66 7.5C74 7.5 74 2 82 2C90 2 90 7.5 98 7.5" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left: Illustration */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img 
                src={img}
                alt="Website Maintenance" 
                className="w-full max-w-lg"
              />
            </div>

            {/* Right: Text Content */}
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-bold text-slate-800 mb-4">What is Maintenance?</h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-justify">
                Maintenance of Web applications is as vital as the design and development stage itself. The web application needs regular checkups and adjustments in order to enhance the technical functions and also to update the systems, applications and software as per modern web trends.
              </p>
              
              <p className="font-semibold text-slate-700 mb-3">Timely maintenance of Web/App /Application can give following benefits:</p>
              
              <ul className="space-y-2">
                {[
                  "Potentials.",
                  "User friendliness.",
                  "Realtime communication.",
                  "Relief in long term relationship.",
                  "Intelligent support and maintenance services.",
                  "Ensuring hassle-free operation of your website/application.",
                  "Optimizing performance of the website/applications and minimizing downtime."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                    <span className="text-cyan-500 mt-1"><CheckCircle2 size={16} /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>


      {/* ==================== 3. MAINTENANCE & SUPPORT GRID ==================== */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
            
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-slate-900 tracking-wide">
              MAINTENANCE & SUPPORT
            </h2>
            <div className="flex justify-center mt-2">
              <svg width="80" height="10" viewBox="0 0 100 15" fill="none">
                 <path d="M2 7.5C10 7.5 10 2 18 2C26 2 26 7.5 34 7.5C42 7.5 42 2 50 2C58 2 58 7.5 66 7.5C74 7.5 74 2 82 2C90 2 90 7.5 98 7.5" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {maintenanceServices.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 flex flex-col items-start group">
                <div className="mb-6 p-4 bg-teal-50 text-teal-600 rounded-lg group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-teal-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {item.desc}
                </p>
                <Link to={item.link}>
                  <button className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-bold rounded-full transition-all flex items-center gap-2">
                    More Info <ArrowRight size={14} />
                  </button>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ==================== 4. WHY SEARCH N PLAY (ZICHVERSE) ==================== */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="text-center mb-12">
            <p className="text-slate-500 text-sm font-semibold mb-2">Why to choose us for a reliable support and maintenance?</p>
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-slate-900 tracking-wide">
              WHY ZICHVERSE
            </h2>
            <div className="flex justify-center mt-2">
              <svg width="80" height="10" viewBox="0 0 100 15" fill="none">
                 <path d="M2 7.5C10 7.5 10 2 18 2C26 2 26 7.5 34 7.5C42 7.5 42 2 50 2C58 2 58 7.5 66 7.5C74 7.5 74 2 82 2C90 2 90 7.5 98 7.5" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseFeatures.map((feat, index) => (
              <div key={index} className="border border-slate-200 p-6 rounded-lg text-center hover:border-cyan-400 hover:shadow-md transition-all duration-300 bg-slate-50 group">
                <div className="flex justify-center mb-4">
                   <div className="p-3 bg-white text-cyan-600 rounded-full shadow-sm group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                     {feat.icon}
                   </div>
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-3">{feat.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default SupportMaintenance;
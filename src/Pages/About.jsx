import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import img from "../assets/about.avif";
import HowWeWork from '../Components/HowWeWork';

const About = () => {
  return (
    <div className="font-sans text-slate-800">
      
      {/* ==================== 1. PAGE HEADER ==================== */}
      <div className="relative bg-gradient-to-r from-teal-600 to-cyan-500 py-20 text-white overflow-hidden">
        {/* Abstract Background Pattern (Simulating the icons in your image) */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 L100 0 L100 100 Z" fill="white" />
           </svg>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center md:text-left">
          <p className="text-cyan-100 text-sm font-semibold tracking-wider uppercase mb-2">
            Home &gt; About Us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
        </div>
      </div>


      {/* ==================== 2. MAIN CONTENT SECTION ==================== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-slate-900 tracking-wide">
              Welcome to ZICHVERSE
            </h2>
            {/* Signature Squiggly Line */}
            <div className="flex justify-center mt-2">
              <svg width="80" height="10" viewBox="0 0 100 15" fill="none">
                 <path d="M2 7.5C10 7.5 10 2 18 2C26 2 26 7.5 34 7.5C42 7.5 42 2 50 2C58 2 58 7.5 66 7.5C74 7.5 74 2 82 2C90 2 90 7.5 98 7.5" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            
            {/* --- Left Column: Text Content --- */}
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-teal-700 mb-4">About ZICHVERSE</h3>
              
              <p className="text-slate-600 leading-relaxed mb-4 text-justify">
                <span className="font-bold text-slate-800">ZICHVERSE PRIVATE LIMITED</span> is an expert in the field of creative Website & Application Designing, Digital Marketing, and Search Engine Optimization (SEO). We are a team of young and energetic technical savvies, hungry for the latest innovative technologies on the web.
              </p>
              
              <p className="text-slate-600 leading-relaxed mb-4 text-justify">
                We apply all technology evolution strategies in our projects. Our smart work describes who we are! We provide cost-effective SEO services & quality website development in different CMS technologies. Running a business not only requires hard work but also requires <strong>effective smart work</strong>. We do both to deliver unbelievable value.
              </p>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-slate-800 mb-2">Who We Are?</h4>
                <p className="text-slate-600 leading-relaxed text-justify">
                  Since our establishment, we are primarily aligned with our sole goal to ideate, design, develop, and deliver solutions that meet the budget and specific needs of our clients.
                </p>
              </div>

              <div className="flex items-center gap-2 mb-8 font-medium text-teal-600">
                <CheckCircle2 size={20} />
                <span>Join hands with us and let's create success stories together.</span>
              </div>

              <Link to="/contact">
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-bold rounded-full shadow-lg shadow-cyan-200 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                  Contact Us <ArrowRight size={18} />
                </button>
              </Link>
            </div>

            {/* --- Right Column: Illustration --- */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                {/* Background Decor */}
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-teal-50 rounded-2xl -z-10"></div>
                
                {/* Image matching the vibe of a person sitting at a desk */}
                <img 
                  src={img}
                  alt="ZICHVERSE Team Member" 
                  className="rounded-xl shadow-xl w-full max-w-md border border-slate-100"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Optional: Simple Mission/Vision Strip */}
      <section className="bg-slate-50 py-12 border-t border-slate-100">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
                { title: "Our Mission", text: "To empower businesses with cutting-edge digital solutions." },
                { title: "Our Vision", text: "To be the most trusted global IT service provider." },
                { title: "Our Values", text: "Innovation, Integrity, and Customer Satisfaction." }
            ].map((item, idx) => (
                <div key={idx} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-bold text-teal-700 mb-2">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.text}</p>
                </div>
            ))}
        </div>
      </section>
      <HowWeWork/>
      

    </div>
  );
};

export default About;
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import img from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="relative w-full bg-slate-50 py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* --- Left Content Section --- */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-800 leading-tight">
              Premier <span className="text-teal-500">Website</span> & <br />
              <span className="text-cyan-600">Mobile App</span> <br />
              Development Agency
            </h1>
            
            <p className="mt-6 text-lg text-slate-600 max-w-lg leading-relaxed">
              Discover industry-leading digital solutions tailored to your business. 
              We compare top technologies to build scalable websites and high-performance 
              mobile applications that fit your specific needs and budget.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <button className="flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white text-lg font-bold rounded-full shadow-lg shadow-cyan-200/50 transform hover:-translate-y-1 transition-all duration-300">
                  Get in touch <ArrowRight size={20} />
                </button>
              </Link>
            </div>
          </div>

          {/* --- Right Illustration Section --- */}
          <div className="w-full md:w-1/2 relative flex justify-center items-center">
            {/* Background Blob Shape (Visual effect jaisa image me hai) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-teal-100 to-cyan-50 rounded-full blur-3xl opacity-60 -z-10"></div>
            
            {/* Image Placeholder */}
            {/* Maine yahan ek free illustration use ki hai jo tumhari image se match karti hai. 
                Tum apni custom image 'src' mein laga sakte ho. */}
            <img 
              src={img}
              alt="Team working on development" 
              className="relative z-10 w-full max-w-lg drop-shadow-xl rounded-lg" // Added rounded-lg if you use a rectangular image
              // Agar tumhe transparent PNG use karni hai (jaisa image me hai), toh rectangular background wali image mat lagana.
              // Niche maine ek alternative "UnDraw" style URL diya hai jo transparent hoti hai:
              // src="https://undraw.co/illustrations/load/programming_2svr.svg"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
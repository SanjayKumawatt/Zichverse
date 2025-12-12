import React, { useState } from 'react';
import { Lightbulb, Leaf, Target, Handshake } from 'lucide-react'; // Optional icons agar chahiye ho
import img1 from "../assets/howwework/img1.avif";
import img2 from "../assets/howwework/img2.avif";
import img3 from "../assets/howwework/img3.avif";
import img4 from "../assets/howwework/img4.avif";

const HowWeWork = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Data for each tab
  const steps = [
    {
      id: 'catalysing',
      label: 'Catalysing Ideas',
      title: 'Catalysing Your Ideas',
      description: 'We innovate your core concept into a market-ready solution by identifying loopholes and providing superior alternatives. Once the roadmap is clear, our designers and developers unite to kickstart the development process.',
      image: img1,
      layout: 'image-left' // Image Left, Text Right
    },
    {
      id: 'sustainability',
      label: 'Sustainability',
      title: 'Sustainability Tactics',
      description: 'We analyze the long-term viability of your idea by comparing it with real-time market requirements. By weighing the pros and cons, we carve out a unique selling proposition that ensures your product survives and thrives.',
      image: img2,
      layout: 'image-right' // Text Left, Image Right
    },
    {
      id: 'effectiveness',
      label: 'Effectiveness',
      title: 'Precision & Execution', // Renamed from "Fissioning and Fusioning" for better English
      description: 'We break the project into manageable fragments with strict deadlines. This "divide and conquer" approach helps us innovate, design, and implement with precision, ensuring the best output with minimal errors and on-time delivery.',
      image: img3,
      layout: 'image-left' // Image Left, Text Right
    },
    {
      id: 'relationship',
      label: 'Relationship',
      title: 'Relationship Beyond Contract',
      description: 'We help our clients lead their industry by providing organized solutions. Our work doesn’t end at delivery; we ensure hassle-free operation and provide ongoing support to help you cope with real-time environmental changes.',
      image: img4,
      layout: 'image-right' // Text Left, Image Right
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white font-sans">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase tracking-wide">
            How We Work
          </h2>
          {/* Decorative Squiggly Line */}
          <div className="flex justify-center mt-2">
            <svg width="80" height="10" viewBox="0 0 100 15" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M2 7.5C10 7.5 10 2 18 2C26 2 26 7.5 34 7.5C42 7.5 42 2 50 2C58 2 58 7.5 66 7.5C74 7.5 74 2 82 2C90 2 90 7.5 98 7.5" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* --- Tabs Navigation --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-2.5 rounded-lg border-2 text-sm md:text-base font-semibold transition-all duration-300 transform hover:-translate-y-0.5
                ${activeTab === index 
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-600 border-transparent text-white shadow-lg shadow-cyan-200' 
                  : 'bg-white border-cyan-500 text-slate-600 hover:text-cyan-600 hover:border-cyan-600'
                }`}
            >
              {step.label}
            </button>
          ))}
        </div>

        {/* --- Dynamic Content Section --- */}
        <div className="min-h-[400px]">
          {steps.map((step, index) => (
            activeTab === index && (
              <div 
                key={step.id} 
                className={`flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20 animate-fade-in-up`}
              >
                {/* Logic: Agar layout 'image-left' hai, toh Image pehle dikhegi.
                  Agar 'image-right' hai, toh Text pehle dikhega (md screen se upar).
                  Mobile pe hamesha Image upar ya niche consistency ke liye adjust kar sakte hain, 
                  par yahan maine default flow rakha hai.
                */}
                
                {/* Left Side Content (Swaps based on layout) */}
                <div className={`w-full md:w-1/2 ${step.layout === 'image-right' ? 'order-1' : 'order-2'}`}>
                   {/* Text Block */}
                   {step.layout === 'image-right' ? (
                     <div className="text-left">
                       <h3 className="text-3xl font-bold text-slate-800 mb-6">{step.title}</h3>
                       <p className="text-lg text-slate-600 leading-relaxed">
                         {step.description}
                       </p>
                     </div>
                   ) : (
                     <img 
                       src={step.image} 
                       alt={step.title} 
                       className="w-full max-w-lg mx-auto drop-shadow-lg"
                     />
                   )}
                </div>

                {/* Right Side Content (Swaps based on layout) */}
                <div className={`w-full md:w-1/2 ${step.layout === 'image-right' ? 'order-2' : 'order-1'}`}>
                  {step.layout === 'image-right' ? (
                     <img 
                       src={step.image} 
                       alt={step.title} 
                       className="w-full max-w-lg mx-auto drop-shadow-lg"
                     />
                   ) : (
                    <div className="text-left">
                       <h3 className="text-3xl font-bold text-slate-800 mb-6">{step.title}</h3>
                       <p className="text-lg text-slate-600 leading-relaxed">
                         {step.description}
                       </p>
                     </div>
                   )}
                </div>

              </div>
            )
          ))}
        </div>

      </div>

      {/* Inline styles for simple animation without extra config */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HowWeWork;
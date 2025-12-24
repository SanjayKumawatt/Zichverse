import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  // State to track which question is open (null means all closed)
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Which Software Development Services Do You Provide?",
      answer: "We provide a complete range of services including Android & iOS App Development, Web Design & Development, Digital Marketing (SEO/SEM), Graphics Designing, and ongoing Maintenance & Support."
    },
    {
      question: "How Long Would It Take To Develop A Mobile App/Web App?",
      answer: "The timeline depends on the complexity of the project. A basic website might take 2-4 weeks, while a complex mobile application could take 3-6 months. We provide a detailed timeline after analyzing your requirements."
    },
    {
      question: "What Details Should I Provide In A Project Specification?",
      answer: "Please provide your business goals, target audience, preferred features, design references (if any), budget range, and timeline expectations. The more details you share, the better we can estimate."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white font-sans">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold uppercase text-slate-900 tracking-wide">
            Frequently Asked Questions
          </h2>
          {/* Wave SVG */}
          <div className="flex justify-center mt-2">
            <svg width="80" height="10" viewBox="0 0 100 15" fill="none">
               <path d="M2 7.5C10 7.5 10 2 18 2C26 2 26 7.5 34 7.5C42 7.5 42 2 50 2C58 2 58 7.5 66 7.5C74 7.5 74 2 82 2C90 2 90 7.5 98 7.5" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-12 lg:gap-20">
          
          {/* --- Left Column: Illustration --- */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Background Blob for visual depth */}
              <div className="absolute top-10 left-10 w-full h-full bg-blue-50 rounded-full blur-2xl -z-10"></div>
              
              {/* Illustration Image */}
              {/* Using a placeholder that matches the 'Thinking Woman' vibe from your screenshot */}
              <img 
                src="https://img.freepik.com/free-vector/thoughtful-woman-with-laptop-looking-big-question-mark_1150-39362.jpg?w=740&t=st=1709126000~exp=1709126600~hmac=example" 
                alt="Thinking about questions" 
                className="w-full h-auto drop-shadow-md rounded-lg mix-blend-multiply"
              />
            </div>
          </div>

          {/* --- Right Column: Accordion --- */}
          <div className="w-full md:w-1/2 space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="overflow-hidden">
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-white transition-all duration-300 rounded-full shadow-md
                    ${openIndex === index 
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-700 shadow-lg scale-[1.02]' 
                      : 'bg-[#1e73be] hover:bg-cyan-600' // Using a solid blue similar to screenshot
                    }
                  `}
                >
                  <span className="text-sm md:text-base pr-4">{item.question}</span>
                  {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {/* Answer Dropdown */}
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden
                    ${openIndex === index ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-600 text-sm md:text-base leading-relaxed ml-2 mr-2">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
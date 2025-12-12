import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PenTool, Palette, Video, Layout, Image as ImageIcon, 
  Monitor, Grid, CreditCard, Mail, ArrowRight 
} from 'lucide-react';
import img from "../assets/services/img1.jpg";

const GraphicsDesign = () => {

  const services = [
    {
      title: "Logos & Branding",
      icon: <PenTool size={32} />,
      desc: "A corporate brand is crucial to the success of any business or organization's marketing efforts. We create a brand from scratch or improve upon an existing one to fulfill your branding vision.",
      link: "/contact"
    },
    {
      title: "Graphic Designing",
      icon: <Palette size={32} />,
      desc: "If you have an environment that needs a touch of branding, we develop custom signage and display graphics that are tailored to fit specific environments and requirements.",
      link: "/contact"
    },
    {
      title: "Animations & Videos",
      icon: <Video size={32} />,
      desc: "Make sure your brand is noticeable and consistent throughout your collateral and marketing materials. We guide our clients through this process by offering a variety of print design solutions.",
      link: "/contact"
    },
    {
      title: "Interface Design - UX/UI",
      icon: <Layout size={32} />,
      desc: "We will design your app by understanding all the requirements based on your wireframe. We suggest important User Experience and User Interface changes that will be easy to navigate.",
      link: "/contact"
    },
    {
      title: "Banner Designing",
      icon: <ImageIcon size={32} />,
      desc: "Establishing a strong corporate identity for businesses ranging from small to big, our banner designing services will take your brand to the zenith with eye-catching visuals.",
      link: "/contact"
    },
    {
      title: "Mockup Creation",
      icon: <Monitor size={32} />,
      desc: "Our services in creating website mockups are preferred by clients from around the world. The designs we create are a clear reflection of your ideas before coding begins.",
      link: "/contact"
    },
    {
      title: "Wire Frame Design",
      icon: <Grid size={32} />,
      desc: "We customize logos to suit our clients' necessities providing them custom designing services. We build the skeleton of your application to ensure flow and structure are perfect.",
      link: "/contact"
    },
    {
      title: "Business Cards Design",
      icon: <CreditCard size={32} />,
      desc: "Showcase your work profile with an amazing yet professional business card designed by our talented team of designers that leaves a lasting impression.",
      link: "/contact"
    },
    {
      title: "Newsletter",
      icon: <Mail size={32} />,
      desc: "Reach the market and your millions of audience with beautifully designed newsletters that connect with your customers quickly and effectively.",
      link: "/contact"
    },
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
            Home &gt; Services &gt; Graphics Design
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">Graphics Design</h1>
        </div>
      </div>


      {/* ==================== 2. INTRO SECTION ==================== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-slate-900 tracking-wide">
              GRAPHICS DESIGNING
            </h2>
            {/* Squiggly Line */}
            <div className="flex justify-center mt-2">
              <svg width="80" height="10" viewBox="0 0 100 15" fill="none">
                 <path d="M2 7.5C10 7.5 10 2 18 2C26 2 26 7.5 34 7.5C42 7.5 42 2 50 2C58 2 58 7.5 66 7.5C74 7.5 74 2 82 2C90 2 90 7.5 98 7.5" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            
            {/* Illustration */}
            <div className="w-full md:w-1/2 flex justify-center">
               <img 
                 src={img}
                 alt="Creative Graphics Design" 
                 className="w-full max-w-md"
               />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-bold text-slate-800 mb-4">What is Graphic Design?</h3>
              <p className="text-slate-600 leading-relaxed mb-4 text-justify">
                Graphic design is the art of visual communication through the use of text, photos, and illustrations. Graphic designers combine these three elements to form a single cohesive visual composition of ideas and messaging.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4 text-justify">
                These compositions can be seen everywhere, from logos and branding to web design, magazines, signs, and more. Graphic designs combine these three elements to form a single cohesive visual composition of ideas and messaging. These compositions can be seen everywhere.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* ==================== 3. SERVICES GRID ==================== */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
            
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-slate-900 tracking-wide">
              GRAPHIC DESIGNS & ANIMATIONS
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
                <div className="mb-4 text-cyan-600 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-cyan-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
                <Link to={item.link}>
                  <button className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-bold rounded-full shadow-md transition-all flex items-center gap-2">
                    View Info <ArrowRight size={14} />
                  </button>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default GraphicsDesign;
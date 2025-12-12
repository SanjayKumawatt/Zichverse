import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, Code2, Layout, FileCode, Settings, 
  Headphones, Globe, Clock, TrendingUp, ArrowRight 
} from 'lucide-react';

import img from "../assets/services/web1.avif";

const WebDevelopment = () => {

  const services = [
    {
      title: "E-commerce Website Development",
      icon: <ShoppingCart size={32} />,
      desc: "We can build you a completely scalable e-commerce website that your customers will be able to use from PCs as well as mobile phones. With a combination of sleek website design, coding, and customization.",
      link: "/contact"
    },
    {
      title: "Custom Website Development",
      icon: <Code2 size={32} />,
      desc: "A CMS mainly works in the background and it allows you to publish and maintain content on your website. As a serious business, you cannot use a WordPress CMS out of the box.",
      link: "/contact"
    },
    {
      title: "Website Design and Redesign",
      icon: <Layout size={32} />,
      desc: "If you have an existing website that needs reworking, redesign, we can create a power-packed online presence for you. We will create a website design that will be totally complimentary to your brand's prestige.",
      link: "/contact"
    },
    {
      title: "HTML Page Designs",
      icon: <FileCode size={32} />,
      desc: "We can work to meet the exact design specifications that you have dreamt of. Along with a design that appeals, we will also include the functionality using HTML. We will help your business reach its true potential.",
      link: "/contact"
    },
    {
      title: "Customized Solutions",
      icon: <Settings size={32} />,
      desc: "We completely relate to your requirement for building things a certain way. Our prime responsibility is to back your vision technically and implement apt customizations that make your business grow.",
      link: "/contact"
    },
    {
      title: "Excellent Support Services",
      icon: <Headphones size={32} />,
      desc: "We profoundly maintain your website and enhance your online presence, through our excellent maintenance and support service that has been successful in reinforcing businesses.",
      link: "/contact"
    },
  ];

  const benefits = [
    {
      title: "Website is Accessible 24x7",
      desc: "A website is the best way to tell about your products and services. The user can view services and products at any time.",
      icon: <Clock size={28} />
    },
    {
      title: "Global Reach",
      desc: "Break geographical barriers and reach customers globally. Your website acts as your global storefront open to the entire world.",
      icon: <Globe size={28} />
    },
    {
      title: "Brand Credibility",
      desc: "A professional website establishes trust. It allows you to showcase your expertise and positions your business as an industry leader.",
      icon: <TrendingUp size={28} />
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
            Home &gt; Services &gt; Web Development
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">Web Design & Development</h1>
        </div>
      </div>


      {/* ==================== 2. INTRO SECTION ==================== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-slate-900 tracking-wide">
              OUR WEB DESIGN & DEVELOPMENT SERVICES
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
                alt="Web Design Team" 
                className="w-full max-w-md rounded-lg"
              />
            </div>

            {/* Right: Text Content */}
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-bold text-teal-700 mb-4">
                Our innovative implementation of web and e-commerce ideas to stun your users
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4 text-justify">
                Our web development team looks beyond the visual effect of the website and takes other factors into consideration such as the user-friendliness of the website, ease of maintenance and adhering to the best practices and website development standards.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4 text-justify">
                We also take into account the search engine friendliness and optimization of the website – and of course, we make sure that the website serves and meets its main objectives.
              </p>
              <p className="text-slate-600 leading-relaxed text-justify">
                We develop the website according to your requirements, ensuring a good customer user experience. Our approach includes newer experimentations to the design technologies to meet the client satisfaction strategy.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ==================== 3. SERVICES INCLUDES GRID ==================== */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
            
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-slate-900 tracking-wide">
              OUR WEB DEVELOPMENT SERVICES INCLUDES
            </h2>
            <div className="flex justify-center mt-2">
              <svg width="80" height="10" viewBox="0 0 100 15" fill="none">
                 <path d="M2 7.5C10 7.5 10 2 18 2C26 2 26 7.5 34 7.5C42 7.5 42 2 50 2C58 2 58 7.5 66 7.5C74 7.5 74 2 82 2C90 2 90 7.5 98 7.5" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, index) => (
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


      {/* ==================== 4. WHY IMPORTANT SECTION ==================== */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold uppercase text-slate-900 tracking-wide">
              WHY A WEBSITE IS IMPORTANT FOR YOUR BUSINESS ?
            </h2>
            <div className="flex justify-center mt-2">
              <svg width="80" height="10" viewBox="0 0 100 15" fill="none">
                 <path d="M2 7.5C10 7.5 10 2 18 2C26 2 26 7.5 34 7.5C42 7.5 42 2 50 2C58 2 58 7.5 66 7.5C74 7.5 74 2 82 2C90 2 90 7.5 98 7.5" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-slate-50 rounded-lg hover:bg-teal-50 transition-colors duration-300">
                <div className="shrink-0 text-cyan-600 bg-white p-3 rounded-full shadow-sm">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">{benefit.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default WebDevelopment;
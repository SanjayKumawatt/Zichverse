import React from 'react';
import { 
  Cctv, ShieldCheck, Lock, Fingerprint, Phone, 
  MessageCircle, Mail, MapPin, Bell 
} from 'lucide-react';

import img1 from "../assets/services/cam1.jpg";
import img2 from "../assets/services/cam2.png";

const SecuritySystem = () => {

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
            Home &gt; Services &gt; Camera & Security System
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">Camera & Security System</h1>
        </div>
      </div>


      {/* ==================== 2. MAIN CONTENT SECTION ==================== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          
          {/* Top Text Block */}
          <div className="mb-12 text-slate-600 leading-relaxed text-justify space-y-4">
            <p>
              We offer Network IP cameras and HD security camera systems that use AHD cameras, HD-CVI, and TVI cameras. We are associated with market leading surveillance products brands like <span className="font-bold text-teal-700">HikVision, CP Plus, Honeywell, Panasonic, Dahua, ZKTecho, Samsung</span> etc.
            </p>
            <p>
              We are expert security system installers and we only supply high-quality CCTV equipment from trusted brands. We can supply both analogue HD and IP systems as well as advise you on which system would be most appropriate for your home. We don't install third-party equipment because we cannot retain control over all aspects of the installation and guarantee the performance of the system as we can by supplying all elements.
            </p>
          </div>

          {/* Hero Image */}
          <div className="w-full mb-12 rounded-xl overflow-hidden shadow-lg">
            <img 
              src={img1}
              alt="Home Security Camera Installation" 
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </div>

          {/* Middle Text Block */}
          <div className="mb-16 text-slate-600 leading-relaxed text-justify space-y-4">
            <p>
              Our company has achieved widespread recognition for providing <span className="font-bold text-slate-800">Wireless CCTV Camera</span> to the clients. This product is extensively demanded by our existing client in the market. Offered range of Wireless CCTV Camera is well tested by team of experts for ensuring its quality before.
            </p>
            <p>
              We offer an extensive portfolio of innovative and high quality solutions for security, safety and networking ranging from CCTV systems, IP based surveillance systems, Access control systems, Attendance monitoring systems, Multi-Apartment and Home security Solutions, Video door phones, customized enterprise level security, passive and active Networking. Remote monitoring solutions, Intrusion Alarm systems, Mobile and Cloud based surveillance and much more.
            </p>
            <p className="font-medium text-teal-700 italic">
              No matter what perimeter you wish to protect, you deserve a security solution you can trust around the clock, and in any weather and light conditions.
            </p>
          </div>


          {/* ==================== 3. PRODUCT SHOWCASE (Collage) ==================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            
            {/* Access Control */}
            <div className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer">
              <img 
                src={img2}
                alt="Access Control" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="bg-teal-500 p-2 rounded-lg w-fit mb-2"><Fingerprint size={24} /></div>
                  <h3 className="text-xl font-bold">Access Control</h3>
                  <p className="text-sm text-slate-200">Biometric & Card Systems</p>
                </div>
              </div>
            </div>

            {/* CCTV Dome */}
            <div className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer">
              <img 
                src="https://img.freepik.com/free-photo/cctv-camera-security-system_53876-133364.jpg" 
                alt="Dome Camera" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="bg-cyan-500 p-2 rounded-lg w-fit mb-2"><Cctv size={24} /></div>
                  <h3 className="text-xl font-bold">Dome & IP Cameras</h3>
                  <p className="text-sm text-slate-200">360° Surveillance</p>
                </div>
              </div>
            </div>

            {/* Video Door Phone / Security */}
            <div className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer">
              <img 
                src={img2}
                alt="Video Door Phone" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="bg-indigo-500 p-2 rounded-lg w-fit mb-2"><Lock size={24} /></div>
                  <h3 className="text-xl font-bold">Smart Security</h3>
                  <p className="text-sm text-slate-200">Video Door Phones & Alarms</p>
                </div>
              </div>
            </div>

          </div>


          {/* ==================== 4. CONTACT STRIP (Bottom) ==================== */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-center text-slate-800 mb-10 uppercase tracking-wide">
              Get Instant Support
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-8">
              

              {/* Email Us */}
              <div className="bg-white p-6 rounded-xl shadow-sm text-center border-b-4 border-blue-500 hover:shadow-md transition-all">
                <div className="text-blue-500 mb-3 flex justify-center"><Mail size={32} /></div>
                <h4 className="text-lg font-bold text-slate-700 mb-1">EMAIL US</h4>
                <p className="text-slate-600">support@zichverse.in</p>
              </div>

            </div>

            {/* Address Box */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-center border-b-4 border-slate-400 hover:shadow-md transition-all max-w-3xl mx-auto">
               <div className="text-slate-600 mb-3 flex justify-center"><MapPin size={32} /></div>
               <h4 className="text-lg font-bold text-slate-700 mb-2">ADDRESS</h4>
               <p className="text-slate-600 leading-relaxed">
                 C/o Dulahl Ch. Das, Bhatta Purnia U, Purnea, Purnia, Purnea, Bihar, India, 854301.
               </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default SecuritySystem;
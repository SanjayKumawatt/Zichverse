import React, { useState } from 'react';
import { MapPin, Mail, Send, Clock, Phone, CheckCircle, Loader2 } from 'lucide-react';

const Contact = () => {
    // State to handle loading and success status
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate a network request (API Call)
        setTimeout(() => {
            console.log("Form submitted successfully!");
            
            // 1. Loading stop karo
            setIsSubmitting(false);
            
            // 2. Success message dikhao
            setIsSuccess(true);
            
            // 3. Form ko reset kar do
            e.target.reset();

            // 4. 3 second baad success message hata do
            setTimeout(() => {
                setIsSuccess(false);
            }, 3000);

        }, 2000); // 2 seconds ka delay fake karne ke liye
    };

    return (
        <div className="font-sans text-slate-800">

            {/* ==================== PAGE HEADER ==================== */}
            <div className="relative bg-gradient-to-r from-teal-600 to-cyan-500 py-20 text-white">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <circle cx="0" cy="0" r="40" fill="white" />
                        <circle cx="100" cy="100" r="40" fill="white" />
                    </svg>
                </div>
                <div className="container mx-auto px-4 md:px-8 relative z-10 text-center md:text-left">
                    <p className="text-cyan-100 text-sm font-semibold tracking-wider uppercase mb-2">
                        Get in Touch
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
                </div>
            </div>

            {/* ==================== MAIN CONTACT SECTION ==================== */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                        {/* --- LEFT COLUMN: CONTACT FORM --- */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-slate-100 relative overflow-hidden">
                            <h2 className="text-2xl font-bold text-slate-800 mb-2">Send Us A Message</h2>
                            <p className="text-slate-500 mb-8">
                                Have a project in mind? Fill out the form below.
                            </p>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="+91 98765 43210"
                                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                                        />
                                    </div>
                                    
                                    {/* Requirement For Section */}
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Requirement for*</label>
                                        <select 
                                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all text-slate-600 cursor-pointer"
                                            defaultValue=""
                                            required
                                        >
                                            <option value="" disabled>Select Service</option>
                                            <option value="web-dev">Web Design & Development</option>
                                            <option value="app-dev">Mobile Applications</option>
                                            <option value="graphics">Graphics Design</option>
                                            
                                            <option value="security">Camera & Security System</option>
                                            <option value="support">Support & Maintenance</option>
                                            <option value="other">Other Inquiry</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        placeholder="Project Inquiry"
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                                    <textarea
                                        rows="5"
                                        placeholder="Tell us about your project..."
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all resize-none"
                                    ></textarea>
                                </div>

                                {/* --- Success Message Banner --- */}
                                {isSuccess && (
                                    <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg animate-fade-in-down">
                                        <CheckCircle size={20} />
                                        <span className="font-medium">Message sent successfully! We'll contact you soon.</span>
                                    </div>
                                )}

                                {/* --- Submit Button --- */}
                                <button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-4 font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all duration-300
                                        ${isSubmitting 
                                            ? 'bg-slate-300 text-slate-500 cursor-not-allowed' 
                                            : 'bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white transform hover:-translate-y-1 shadow-teal-200/50'
                                        }
                                    `}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin" /> Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* --- RIGHT COLUMN: CONTACT INFO --- */}
                        <div className="flex flex-col gap-8">
                            <div className="grid grid-cols-1 gap-6">
                                {/* Address Card */}
                                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md border-l-4 border-teal-500 hover:shadow-lg transition-shadow">
                                    <div className="p-3 bg-teal-50 text-teal-600 rounded-lg shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-800 mb-1">Our Office</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            C/o Dulahl Ch. Das, Bhatta Purnia U,<br />
                                            Purnea, Purnia, Purnea,<br />
                                            Bihar, India, 854301.
                                        </p>
                                    </div>
                                </div>

                                {/* Email & Phone Card */}
                                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md border-l-4 border-cyan-500 hover:shadow-lg transition-shadow">
                                    <div className="p-3 bg-cyan-50 text-cyan-600 rounded-lg shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-800 mb-1">Contact Details</h3>
                                        <p className="text-slate-600 text-sm mb-1 flex items-center gap-2">
                                            <Mail size={14} /> support@zichverse.in
                                        </p>
                                    </div>
                                </div>

                                {/* Opening Hours Card */}
                                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
                                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-800 mb-1">Working Hours</h3>
                                        <p className="text-slate-600 text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Simple animation style for the success message */}
                <style>{`
                    @keyframes fadeInDown {
                        from { opacity: 0; transform: translateY(-10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .animate-fade-in-down {
                        animation: fadeInDown 0.3s ease-out forwards;
                    }
                `}</style>
            </section>
        </div>
    );
};

export default Contact;
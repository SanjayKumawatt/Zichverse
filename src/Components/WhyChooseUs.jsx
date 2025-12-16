import React from 'react';
import { Gem, Languages, LayoutGrid, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
// Gem -> Diamond icon
// Languages -> Translation icon
// LayoutGrid -> Awesome results icon

const WhyChooseUs = () => {
    const features = [
        {
            icon: <Gem size={40} className="text-cyan-300" />,
            title: "Catalyzing your idea",
            description: "We help in advancing your thought, into the best, through amending the provisos, giving the best substitute developments to draw out the best."
        },
        {
            icon: <Languages size={40} className="text-cyan-300" />,
            title: "Customer Satisfaction",
            description: "We believe in customer satisfaction and quality services to keep the client's long-term relation trusted with the business, hence We deliver quality services."
        },
        {
            icon: <LayoutGrid size={40} className="text-cyan-300" />,
            title: "Awesome Results",
            description: "Our services will give the awesome results. We face the competitive challenges in the market and keep up with the race today. We help our clients efficiently."
        }
    ];

    const stats = [
        { number: "767", label: "Projects" },
        { number: "3", label: "Awards Won" },
        { number: "300", label: "Hosting Clients" },
        { number: "600", label: "Satisfied Customers" }
    ];

    return (
        <section className="relative w-full bg-gradient-to-b from-cyan-500 to-blue-600 py-16 md:py-24 font-sans text-white">
            <div className="container mx-auto px-4 md:px-8 relative z-10">

                {/* --- Header --- */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-3">Why Choose Us</h2>
                    <p className="text-cyan-100 text-lg md:text-xl font-medium">
                        We Always Try To Understand Users Expectation.
                    </p>
                </div>

                {/* --- Cards Section --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-blue-800/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center hover:bg-blue-800/60 transition-all duration-300 hover:-translate-y-2 shadow-lg"
                        >
                            <div className="flex justify-center mb-6">
                                <div className="p-3 border-2 border-cyan-300/30 rounded-lg">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                            <p className="text-blue-100 leading-relaxed text-sm md:text-base">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>


            </div>

            {/* --- Floating CTA Box (Overlapping Bottom) --- */}
            {/* Absolute positioning to make it sit halfway out of the section if you want, 
          or just inside. Here it's styled to look like the image at the bottom. */}
            <div className="container mx-auto px-4 md:px-8">
                <div className="relative z-20 bg-slate-50 text-slate-800 rounded-xl shadow-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 transform translate-y-10 md:translate-y-16">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">Have any question about us?</h3>
                        <p className="text-slate-600">Want to know more about our Company? Curious how we can help you?</p>
                    </div>
                    <Link to={"/contact"}>
                        <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-full shadow-lg transition-all flex items-center gap-2">
                            Contact Us <Phone size={18} />
                        </button>
                    </Link>
                </div>
            </div>

        </section>
    );
};

export default WhyChooseUs;
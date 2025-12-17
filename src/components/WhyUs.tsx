import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Monitor, Clock, TrendingUp, BarChart, DollarSign, Headphones } from 'lucide-react';

const strengths = [
  {
    icon: <Monitor size={24} />,
    category: "DIGITAL MARKETING",
    title: "One-stop-shop for all digital marketing needs",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=200"
  },
  {
    icon: <Clock size={24} />,
    category: "EXPERIENCE",
    title: "65 years of trust & service",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=200"
  },
  {
    icon: <TrendingUp size={24} />,
    category: "DIGITAL PRESENCE",
    title: "Improved digital presence & brand awareness",
    image: "https://images.unsplash.com/photo-1504384308090-c54be3855463?auto=format&fit=crop&q=80&w=200"
  },
  {
    icon: <BarChart size={24} />,
    category: "CONVERSION",
    title: "Higher conversion rates",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=200"
  },
  {
    icon: <DollarSign size={24} />,
    category: "COST",
    title: "Cost-effective solutions",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=200"
  },
  {
    icon: <Headphones size={24} />,
    category: "CUSTOMER SUPPORT",
    title: "Relentless customer support",
    image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=200"
  }
];

export const WhyUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#FF8A80] font-bold tracking-widest text-sm uppercase mb-2">Our Strength</p>
          <h2 className="text-4xl font-serif text-gray-900">Why us?</h2>
        </div>

        <div className="space-y-8">
          {strengths.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col md:flex-row items-center border-b border-gray-100 pb-8 hover:bg-gray-50 transition-colors p-4 rounded-lg"
            >
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                 <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                    <img src={item.image} alt={item.category} className="w-full h-full object-cover" />
                 </div>
              </div>
              
              <div className="w-full md:w-2/4 text-center md:text-left">
                <p className="text-[#FF8A80] text-xs font-bold uppercase mb-1">{item.category}</p>
                <h3 className="text-xl font-medium text-gray-800">{item.title}</h3>
              </div>

              <div className="w-full md:w-1/4 flex justify-center md:justify-end mt-4 md:mt-0">
                <button className="text-xs font-bold text-gray-400 group-hover:text-[#FF8A80] transition-colors flex items-center gap-2 uppercase tracking-widest">
                  Read More <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

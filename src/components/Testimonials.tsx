import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "If you need any help or assistance we'd be happy to help. Just reply to this email. Trusted by Agency proud to work many well known brands",
    name: "John Gregory",
    role: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    quote: "The team at DigiDrive transformed our digital presence completely. Their strategic approach to content marketing yielded results beyond our expectations.",
    name: "Sarah Williams",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    quote: "Professional, creative, and data-driven. They understood our brand voice immediately and helped us connect with our audience in meaningful ways.",
    name: "Michael Chen",
    role: "Startup Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="grid grid-cols-5 gap-2 opacity-50">
          {[...Array(25)].map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-blue-400' : 'border border-blue-400'}`} />
          ))}
        </div>
        <div className="w-16 h-16 bg-green-400 rotate-12 mt-4 ml-8 opacity-80"></div>
      </div>

      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="relative w-32 h-32">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute w-1 h-1 bg-red-400 rounded-full" style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }} />
          ))}
          <div className="absolute top-0 right-0 w-8 h-8 bg-yellow-400 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 bg-blue-500 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#FF8A80] font-bold tracking-widest text-xs uppercase mb-4 block">Testimonials</span>
          <h2 className="text-4xl font-serif text-gray-900">Love from Clients</h2>
        </div>

        <div className="relative">
          <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 w-full -z-0 px-4 md:px-0">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-400 hover:text-[#FF8A80] transition-colors md:-ml-16"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-400 hover:text-[#FF8A80] transition-colors md:-mr-16"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 text-center relative mx-auto max-w-2xl border border-gray-50">
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-xl md:text-2xl text-gray-600 font-serif italic mb-8 leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div>
                    <h4 className="text-gray-900 font-bold text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative pt-40 pb-32 lg:pt-56 lg:pb-48 overflow-hidden bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 font-serif">
              Pioneer digital marketing agency
              <span className="block text-2xl lg:text-3xl font-sans font-normal text-gray-500 mt-4">
                Based in Bangladesh.
              </span>
            </h1>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 bg-white border border-gray-200 text-gray-900 text-sm font-semibold uppercase tracking-wider hover:bg-gray-50 transition-colors flex items-center gap-2 rounded-sm shadow-sm"
            >
              Let's work together
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12,5 19,12 12,19"></polyline>
              </svg>
            </motion.button>
            
            {/* Decorative dots */}
            <div className="mt-16 opacity-20">
              <div className="grid grid-cols-6 gap-2 w-24">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-gray-900 rounded-full" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Using a 3D illustration placeholder that matches the vibe */}
            <div className="relative z-10">
               <img 
                src="../image/saly.png" 
                alt="Digital Marketing 3D Illustration" 
                className="w-full h-auto object-contain max-h-[600px] rounded-lg "
              />
            </div>

            {/* Floating abstract elements */}
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 w-16 h-16 bg-yellow-400 rounded-full blur-xl opacity-20"
            />
            <motion.div 
              animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-10 w-24 h-24 bg-pink-400 rounded-full blur-xl opacity-20"
            />
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center"
        >
          <svg className="rotate-90 text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12,5 19,12 12,19"></polyline>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

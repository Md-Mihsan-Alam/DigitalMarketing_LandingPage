import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const ContactCTA = () => {
  return (
    <section className="bg-[#FFF0F0] py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
         <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="200" r="199.5" stroke="#000"/>
            <circle cx="200" cy="200" r="159.5" stroke="#000"/>
            <circle cx="200" cy="200" r="119.5" stroke="#000"/>
            <circle cx="200" cy="200" r="79.5" stroke="#000"/>
         </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#FF8A80] font-bold tracking-widest text-xs uppercase mb-4 block">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
              Wanna discuss on your project?
            </h2>
            <p className="text-gray-600 mb-8 text-sm leading-relaxed max-w-md">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat. Attribution is appreciated and allows contributors to gain exposure.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF8A80] text-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-[#FF5252] transition-colors flex items-center gap-2 shadow-lg shadow-red-200"
            >
              Start Project <ArrowRight size={16} />
            </motion.button>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img 
              src="https://cdni.iconscout.com/illustration/premium/thumb/video-conference-illustration-download-in-svg-png-gif-file-formats--online-meeting-call-business-pack-illustrations-2868162.png" 
              alt="Video Conference" 
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

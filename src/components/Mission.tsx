import React from 'react';
import { motion } from 'framer-motion';

export const Mission = () => {
  return (
    <section className="py-32 bg-[#0A192F] relative overflow-hidden">
      {/* Floating 3D Shapes Background */}
      <motion.div 
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-32 h-32 rounded-full border-4 border-blue-500/20"
      />
      <motion.div 
        animate={{ y: [0, 40, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"
      />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl text-white font-light leading-relaxed"
        >
          "Our digital solutions are focused on enabling brands to have an edge over their competition."
        </motion.h2>
      </div>
    </section>
  );
};

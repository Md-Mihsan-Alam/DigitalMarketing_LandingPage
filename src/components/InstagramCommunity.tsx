import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Newspaper } from 'lucide-react';

export const InstagramCommunity = () => {
  return (
    <section className="py-24 bg-[#FFCDD2]/30 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-gray-900 mb-4"
        >
          Join our Instagram <br /> Community
        </motion.h2>
        <p className="text-gray-500 text-sm">Latest Posts</p>
      </div>

      {/* Decorative Illustrations */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute left-0 bottom-0 md:bottom-10 w-48 md:w-64 text-gray-400"
      >
        <Newspaper size={200} strokeWidth={0.5} />
      </motion.div>

      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute right-0 bottom-0 md:bottom-10 w-48 md:w-64 text-gray-400"
      >
        <Globe size={200} strokeWidth={0.5} />
      </motion.div>
    </section>
  );
};

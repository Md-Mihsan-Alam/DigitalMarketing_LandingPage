import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    color: "bg-purple-200",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=800",
    alt: "3D Character"
  },
  {
    color: "bg-pink-200",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    alt: "Abstract Pink"
  },
  {
    color: "bg-cyan-200",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=800",
    alt: "Breakfast Concept"
  },
  {
    color: "bg-yellow-100",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800",
    alt: "Summer Vibes"
  },
  {
    color: "bg-red-400",
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?auto=format&fit=crop&q=80&w=800",
    alt: "Action Camera"
  },
  {
    color: "bg-green-200",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
    alt: "Fresh Fruit"
  }
];

export const PortfolioGrid = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative aspect-square overflow-hidden group ${item.color}`}
          >
            <img 
              src={item.image} 
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-bold text-lg tracking-widest uppercase border-2 border-white px-6 py-2">
                View Project
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

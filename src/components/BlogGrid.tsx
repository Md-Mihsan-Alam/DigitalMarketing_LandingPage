import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  {
    date: "25 MAR",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600",
    title: "Doloremque velit sapien labore eius lopren itna",
    author: "Justin Trada",
    comments: "03 Comments"
  },
  {
    date: "25 MAR",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600",
    title: "Officiis similiq repell partu orie error earum conubia",
    author: "Justin Trada",
    comments: "03 Comments"
  },
  {
    date: "25 MAR",
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&q=80&w=600",
    title: "Morbi asperiores nascetur ligula cras blanditiis",
    author: "Justin Trada",
    comments: "03 Comments"
  },
  {
    date: "25 MAR",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600",
    title: "Why I say old chap that is spiffing jolly good a load",
    author: "Justin Trada",
    comments: "03 Comments"
  },
  {
    date: "25 MAR",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=600",
    title: "Doloremque velit sapien labore eius lopren itna",
    author: "Justin Trada",
    comments: "03 Comments"
  },
  {
    date: "25 MAR",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=600",
    title: "The new camera king is coming will rock!",
    author: "Justin Trada",
    comments: "03 Comments"
  }
];

export const BlogGrid = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-4 bg-gray-100">
                <div className="absolute top-4 left-4 bg-[#FF8A80] text-white p-2 text-center z-10">
                  <span className="block text-xl font-bold leading-none">{post.date.split(' ')[0]}</span>
                  <span className="block text-xs uppercase">{post.date.split(' ')[1]}</span>
                </div>
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  <span>By {post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  <span>{post.comments}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#FF8A80] transition-colors">
                {post.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      {/* Part 1: Intro & Collage */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Collage */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative Dots */}
            <div className="absolute -left-8 -bottom-8 grid grid-cols-6 gap-2 opacity-30 z-0">
               {[...Array(36)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-[#FF8A80] rounded-full" />
               ))}
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mt-12"
              >
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800" 
                  alt="Team meeting" 
                  className="w-full h-64 object-cover shadow-lg"
                />
              </motion.div>
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800" 
                  alt="Man working" 
                  className="w-full h-80 object-cover shadow-lg"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#FF8A80] font-bold tracking-widest text-xs uppercase mb-4 block">About Us</span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8 leading-tight">
              A one-stop-shop for all your digital presence needs
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                Pioneer DigiDrive is the business vertical of Pioneer Publicity Corporation which deals in branding, advertising, and marketing. Being an integrated digital marketing agency, the firm is Pioneer's initiative to bring all the essential online visibility solutions at one platform to help businesses thrive by ensuring better brand reach and organic growth.
              </p>
              <p>
                We believe in a customer-first approach and don't mind going that extra mile to meet our clients' expectations who trust us for our dedication and transparency.
              </p>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-8 py-3 border border-gray-300 text-gray-900 text-xs font-bold uppercase tracking-widest hover:border-gray-900 transition-colors"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Part 2: Pink Section */}
      <div className="relative mb-32">
        {/* Decorative Circles Background */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 border border-blue-100 rounded-full opacity-50 pointer-events-none"></div>
        <div className="absolute -right-16 -bottom-16 w-80 h-80 border border-blue-100 rounded-full opacity-50 pointer-events-none"></div>
        <div className="absolute -right-12 -bottom-12 w-64 h-64 border border-blue-100 rounded-full opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFF0F0] rounded-sm p-8 md:p-16 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-[#FF8A80] font-bold tracking-widest text-xs uppercase mb-4 block">Get To Know Us</span>
                <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8">
                  Wanna know more about us?
                </h2>
                <div className="space-y-6 text-gray-600 text-sm leading-relaxed mb-8">
                  <p>
                    Our team is determined to serve our clients with digital branding and marketing solutions developed and customized as per their business needs which has been the key to building and keeping the trust earned over 65 years. Being a prominent name in the OOH advertising space, we endeavor to bring the same success to our new as well as existing clients in this digital era by catering to all their digital needs under one roof.
                  </p>
                  <p>
                    With a quest for modern approaches to help clients drive more revenue, DigiDrive is here to bring innovation to your existing marketing strategies, making your business future-ready and driving you towards digital.
                  </p>
                </div>
                
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="bg-[#FF8A80] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#FF5252] transition-colors flex items-center gap-2 shadow-lg shadow-red-200"
                >
                  Meet Our Team <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12,5 19,12 12,19"></polyline>
                  </svg>
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center"
              >
                <img 
                  src="https://picsum.photos/400/300?random=6" 
                  alt="Team Collaboration Illustration" 
                  className="w-full max-w-md object-contain rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Part 3: Video Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative Grid */}
        <div className="absolute -top-12 left-0 grid grid-cols-8 gap-2 opacity-20 z-0">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-gray-400 rounded-full" />
            ))}
        </div>
        
        {/* Decorative Circle */}
        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-cyan-100 rounded-full -z-10 blur-sm opacity-70"></div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-video w-full overflow-hidden shadow-2xl group"
        >
          <img 
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1600" 
            alt="Office Lounge" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl cursor-pointer"
            >
              <svg className="w-8 h-8 text-[#FF8A80] ml-1" viewBox="0 0 24 24" fill="#FF8A80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5,3 19,12 5,21 5,3"></polygon>
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

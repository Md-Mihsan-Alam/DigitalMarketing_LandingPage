import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="bg-white">
      {/* 1. Hero / Header Section */}
      <div className="bg-[#FFF8E1] pt-20 pb-0 md:pt-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8">
            
            {/* Left Illustration: Woman on phone */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/3 flex justify-center md:justify-start"
            >
              <img 
                src="https://img.freepik.com/free-vector/customer-support-illustration_23-2148889374.jpg" 
                alt="Customer Support" 
                className="w-64 md:w-80 h-auto object-contain rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Center Text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/3 text-center mb-12 md:mb-20"
            >
              <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-4">
                Contact Us
              </h1>
              <p className="text-gray-600 text-sm md:text-base max-w-xs mx-auto leading-relaxed">
                Dedicated customer support for resolving branding and marketing queries
              </p>
            </motion.div>

            {/* Right Illustration: Team working */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/3 flex justify-center md:justify-end"
            >
              <img 
                src="https://img.freepik.com/free-vector/business-team-working-together_74855-5470.jpg" 
                alt="Team Working" 
                className="w-64 md:w-80 h-auto object-contain rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* 2. Contact Info / "Virtual Coffee" Section */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-600 mb-2"
          >
            Want to explore more about our role in shifting your business online?
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-serif text-gray-900"
          >
            Let's connect for a virtual <br /> coffee today!
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          {/* Address */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 mb-6 text-[#FF8A80]">
              <MapPin size={64} strokeWidth={1} />
            </div>
            <h3 className="font-bold text-gray-900 mb-4">Write us at:</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Pioneer House - 2C/4<br />
              Dhanmondi Road<br />
              Dhanmondi, Nr. Rabindra Sarobar<br />
              Dhaka - 1205
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 mb-6 text-[#FF8A80]">
              <Phone size={64} strokeWidth={1} />
            </div>
            <h3 className="font-bold text-gray-900 mb-4">Connect with us at:</h3>
            <p className="text-gray-500 text-sm">
+880 1712-345678
            </p>
          </motion.div>

          {/* Email */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 mb-6 text-[#FF8A80]">
              <Mail size={64} strokeWidth={1} />
            </div>
            <h3 className="font-bold text-gray-900 mb-4">Send us your queries at:</h3>
            <p className="text-gray-500 text-sm">
chirag@pioneerpublicitybd.com
            </p>
          </motion.div>
        </div>
      </div>

      {/* 3. Form Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-600 mb-2 font-medium">Have something more to convey?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Drop Here!</h2>
          </div>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-[#FF8A80] focus:ring-1 focus:ring-[#FF8A80] transition-colors"
              />
              <input 
                type="tel" 
                placeholder="Phone" 
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-[#FF8A80] focus:ring-1 focus:ring-[#FF8A80] transition-colors"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-[#FF8A80] focus:ring-1 focus:ring-[#FF8A80] transition-colors"
              />
            </div>
            
            <textarea 
              rows={6} 
              placeholder="Message" 
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-[#FF8A80] focus:ring-1 focus:ring-[#FF8A80] transition-colors resize-none"
            ></textarea>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#FF8A80] text-white font-bold py-4 rounded-sm hover:bg-[#FF5252] transition-colors uppercase tracking-wider shadow-lg shadow-red-200"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>

      {/* 4. Map Section */}
      <div className="w-full h-96 bg-gray-200 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.560662663968!2d77.18955531508285!3d28.64292598241369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d029c5f402c8b%3A0x4642690336a5e677!2sPioneer%20Publicity%20Corporation%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1645520000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          title="Office Location"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>
      </div>
    </section>
  );
};

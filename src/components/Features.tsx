import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Share2, Smartphone, Zap, Database, Users } from 'lucide-react';

const features = [
  {
    icon: <Lock className="w-6 h-6" />,
    title: "End-to-End Encryption",
    description: "Your files are encrypted before they leave your device. Only you hold the keys."
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Secure Sharing",
    description: "Share files with password protection and expiration dates for enhanced security."
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Access Anywhere",
    description: "Access your files from any device, anywhere in the world with our mobile apps."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning Fast",
    description: "Optimized transfer speeds ensure your files are uploaded and downloaded instantly."
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Automatic Backup",
    description: "Never lose a file again. Changes are synced and backed up in real-time."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Collaboration",
    description: "Work together on documents in real-time with your team members."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Powerful features for your <span className="text-blue-600">peace of mind</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Everything you need to keep your files safe, accessible, and organized.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

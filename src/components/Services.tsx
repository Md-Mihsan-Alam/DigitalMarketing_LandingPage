import React from 'react';
import { motion } from 'framer-motion';
import { 
  PenTool, 
  LayoutTemplate, 
  Target, 
  PieChart, 
  Megaphone, 
  CodeXml, 
  BarChart3 
} from 'lucide-react';

const services = [
  {
    icon: <LayoutTemplate className="w-8 h-8" />,
    title: "Social Media Marketing",
    description: "Looking forward to educating and engaging your audience..."
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Content Marketing",
    description: "Searching for innovative ways to influence your target..."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Paid Media",
    description: "Compensating for your passive sales practices made..."
  },
  {
    icon: <PieChart className="w-8 h-8" />,
    title: "Online PR + Influencer Marketing",
    description: "Online PR on top of your list? Let our experts do it..."
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "SEO",
    description: "Whether you're looking for a quick way to make your..."
  },
  {
    icon: <CodeXml className="w-8 h-8" />,
    title: "Web & App Development",
    description: "With digital presence becoming the need of the hour..."
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Digital Marketing Analytics",
    description: "Convert user behavior into actionable data with our online analytics..."
  }
];

export const Services = () => {
  return (
    <section id="services" className="bg-white">
      {/* Top Banner Section */}
      <div className="bg-[#FFF8E1] py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Left Illustration Placeholder */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden md:block w-1/4"
            >
              <img 
                src="https://picsum.photos/400/300?random=4" 
                alt="Digital Interaction" 
                className="w-full h-auto object-contain rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Center Text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-2xl"
            >
              <h2 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
                Promoting digital interactions while driving higher returns
              </h2>
            </motion.div>

            {/* Right Illustration Placeholder */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden md:block w-1/4"
            >
              <img 
                src="https://picsum.photos/400/300?random=5" 
                alt="Marketing Megaphone" 
                className="w-full h-auto object-contain rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-[#FF8A80] font-bold tracking-widest text-xs uppercase mb-4 block">Our Services</span>
          <h2 className="text-4xl font-serif text-gray-900">Services we Provide</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col items-center text-center group ${index === 6 ? 'lg:col-start-2' : ''}`}
            >
              <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-2xl border-2 border-[#FF8A80]/30 text-[#FF8A80] group-hover:bg-[#FF8A80] group-hover:text-white transition-all duration-300">
                {React.cloneElement(service.icon as React.ReactElement, { strokeWidth: 1.5 })}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

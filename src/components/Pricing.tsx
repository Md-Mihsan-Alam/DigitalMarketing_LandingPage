import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '../lib/utils';

const plans = [
  {
    name: "Basic",
    price: "0",
    description: "Perfect for personal use",
    features: ["5 GB Storage", "Basic Security", "Access on 2 Devices", "Standard Support"],
    popular: false
  },
  {
    name: "Pro",
    price: "12",
    description: "For power users",
    features: ["2 TB Storage", "Advanced Encryption", "Unlimited Devices", "Priority Support", "File Recovery (30 days)"],
    popular: true
  },
  {
    name: "Business",
    price: "25",
    description: "For teams and businesses",
    features: ["Unlimited Storage", "Admin Controls", "SSO Integration", "24/7 Dedicated Support", "Advanced Auditing"],
    popular: false
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Simple, transparent <span className="text-blue-600">pricing</span>
          </motion.h2>
          <p className="text-xl text-gray-600">
            Choose the perfect plan for your needs. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative p-8 rounded-2xl bg-white border transition-all duration-300",
                plan.popular 
                  ? "border-blue-600 shadow-2xl scale-105 z-10" 
                  : "border-gray-200 shadow-lg hover:shadow-xl"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="text-gray-500">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={cn(
                "w-full py-3 rounded-xl font-semibold transition-colors",
                plan.popular
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/25"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              )}>
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

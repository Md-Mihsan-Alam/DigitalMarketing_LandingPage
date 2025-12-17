import React from 'react';
import { Twitter, Facebook, Instagram, Linkedin, MapPin, Mail, Phone, Globe } from 'lucide-react';

export const Footer = () => {
  return (
    <footer>
      {/* CTA Section */}
      <div className="bg-[#1A1A1A] py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="relative z-10 px-4">
          <p className="text-[#FF8A80] font-bold tracking-widest text-xs uppercase mb-4">Let's Get Started</p>
          <h2 className="text-3xl md:text-4xl text-white font-medium mb-8">
            All set to kickstart your digital journey?
          </h2>
          <button className="bg-[#FF8A80] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#FF5252] transition-colors">
            Get Started Today
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[#0A1016] text-gray-400 py-16 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Logo Column */}
            <div className="col-span-1">
              <div className="w-12 h-12 border-2 border-white text-white flex items-center justify-center text-2xl font-bold font-serif mb-6">
                N
              </div>
              <p className="mb-6 leading-relaxed text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Contact Info</h4>
              <ul className="space-y-4 text-xs">
                <li className="flex items-start gap-3">
                  <Globe size={16} className="shrink-0 mt-0.5" />
                  <span>www.digidrive.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={16} className="shrink-0 mt-0.5" />
                  <span>contact@pioneerpublicitybd.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={16} className="shrink-0 mt-0.5" />
                  <span>Phone: +880 1712-345678</span>
                </li>
              </ul>
            </div>

            {/* Visit Us */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Visit Us</h4>
              <ul className="space-y-2 text-xs leading-relaxed">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="shrink-0 mt-0.5" />
                  <span>
                    Pioneer House - 2C/4<br />
                    Dhanmondi Road<br />
                    Dhanmondi, Nr. Rabindra Sarobar<br />
                    Dhaka - 1205
                  </span>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider">On Socials</h4>
              <ul className="space-y-3 text-xs">
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Facebook size={14} /> Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Twitter size={14} /> Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Globe size={14} /> Youtube</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Instagram size={14} /> Instagram</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>© Copyright 2021 DigiDrive</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white"><Globe size={14} /></a>
              <a href="#" className="hover:text-white"><Facebook size={14} /></a>
              <a href="#" className="hover:text-white"><Twitter size={14} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioGrid } from './components/PortfolioGrid';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Testimonials } from './components/Testimonials';
import { BlogGrid } from './components/BlogGrid';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <PortfolioGrid />
        <About />
        <Services />
        <Testimonials />
        <BlogGrid />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

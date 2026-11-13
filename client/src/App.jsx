import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Industries from './components/Industries';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleOpenQuote = () => setIsQuoteOpen(true);
  const handleCloseQuote = () => setIsQuoteOpen(false);

  const handleScrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-800 font-sans antialiased selection:bg-emerald-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero onStartProject={handleOpenQuote} />

        {/* About Us */}
        <About />

        {/* Industries We Serve */}
        <Industries />

        {/* Our Services */}
        <Services 
          onOpenQuote={handleOpenQuote} 
          onExploreServices={handleScrollToServices} 
        />

        {/* Why Choose Us */}
        <WhyChoose />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Call To Action */}
        <CTA onOpenContact={handleOpenQuote} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal Dialog */}
      <QuoteModal isOpen={isQuoteOpen} onClose={handleCloseQuote} />
    </div>
  );
}


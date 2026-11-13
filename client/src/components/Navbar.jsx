import React, { useState } from 'react';

export default function Navbar({ onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3.5 group">
            <img 
              src="/images/company-logo.jpg" 
              alt="Ganapati Ganesh Construction Logo" 
              className="w-12 h-12 object-contain rounded-full shadow-sm group-hover:scale-105 transition-transform duration-200"
            />
            <div className="flex flex-col">
              <span className="text-zinc-900 font-extrabold text-lg sm:text-xl tracking-tight leading-none">
                GANAPATI GANESH
              </span>
              <span className="text-[#a1322b] text-[10px] tracking-[0.22em] font-bold mt-1">
                CONSTRUCTION
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            <a href="#home" className="text-zinc-900 font-semibold text-sm hover:text-[#2ca35c] transition-colors">Home</a>
            <a href="#about" className="text-stone-600 font-medium text-sm hover:text-[#2ca35c] transition-colors">About Us</a>
            <a href="#services" className="text-stone-600 font-medium text-sm hover:text-[#2ca35c] transition-colors">Services</a>
            <a href="#contact" className="text-stone-600 font-medium text-sm hover:text-[#2ca35c] transition-colors">Contact Us</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={onOpenQuote}
              className="bg-[#2ca35c] hover:bg-[#258d4e] text-white font-medium text-sm px-6 py-2.5 rounded-md shadow-md shadow-emerald-600/20 transition-all duration-200 hover:shadow-emerald-700/30 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Request A Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-stone-700 hover:text-zinc-900 p-2 rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-b border-stone-200 px-6 pt-4 pb-6 space-y-4 shadow-lg">
          <a 
            href="#home" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-900 font-medium text-base hover:text-[#2ca35c]"
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-600 font-medium text-base hover:text-[#2ca35c]"
          >
            About Us
          </a>
          <a 
            href="#services" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-600 font-medium text-base hover:text-[#2ca35c]"
          >
            Services
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-600 font-medium text-base hover:text-[#2ca35c]"
          >
            Contact Us
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuote();
            }}
            className="w-full bg-[#2ca35c] text-white font-medium text-sm py-3 rounded-md shadow-md text-center"
          >
            Request A Quote
          </button>
        </div>
      )}
    </header>
  );
}

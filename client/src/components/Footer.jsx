import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-stone-200 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Col 1: Logo & Company */}
          <div className="md:col-span-5 flex items-center gap-3.5">
            <img 
              src="/images/company-logo.jpg" 
              alt="Ganapati Ganesh Construction Logo" 
              className="w-14 h-14 object-contain rounded-full shadow-sm"
            />
            <div className="flex flex-col">
              <span className="text-zinc-900 font-extrabold text-xl tracking-tight leading-none">
                GANAPATI GANESH
              </span>
              <span className="text-[#a1322b] text-[11px] tracking-[0.22em] font-bold mt-1">
                CONSTRUCTION
              </span>
              <span className="text-stone-400 text-[11px] italic mt-1">
                Within the time, brick by brick, we make it stick
              </span>
            </div>
          </div>

          {/* Col 2: Contact */}
          <div className="md:col-span-3">
            <span className="block text-stone-400 text-xs font-bold tracking-[0.2em] uppercase mb-2">
              CONTACT
            </span>
            <a 
              href="tel:+919136226996" 
              className="text-zinc-900 hover:text-emerald-700 text-base sm:text-lg font-semibold tracking-wide transition-colors"
            >
              +91 9136226996
            </a>
          </div>

          {/* Col 3: Offices & Email */}
          <div className="md:col-span-4">
            <span className="block text-stone-400 text-xs font-bold tracking-[0.2em] uppercase mb-2">
              OFFICES
            </span>
            <p className="text-stone-700 text-sm font-medium leading-relaxed mb-1">
              Mishan Mahadewa, Siwan, Bihar 841226, India
            </p>
            <a 
              href="mailto:info@ganapatiganeshconstruction.com" 
              className="text-stone-700 hover:text-emerald-700 text-sm font-medium transition-colors block"
            >
              info@ganapatiganeshconstruction.com
            </a>
          </div>

        </div>

        {/* Bottom subtle copyright */}
        <div className="mt-14 pt-8 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Ganapati Ganesh Construction. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-stone-600 transition-colors">About</a>
            <a href="#services" className="hover:text-stone-600 transition-colors">Services</a>
            <a href="#contact" className="hover:text-stone-600 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


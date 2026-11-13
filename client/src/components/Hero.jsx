import React from 'react';

export default function Hero({ onStartProject }) {
  return (
    <section 
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-white overflow-hidden pt-20"
    >
      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto pt-16 pb-16 flex flex-col items-center">
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-zinc-900 font-normal tracking-tight leading-[1.18] mb-6 drop-shadow-none">
          Powering Modern Construction with Engineering Expertise
        </h1>
        
        <p className="text-stone-600 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed mb-10 text-center">
          Our integrated engineering solutions help project teams streamline collaboration, improve constructability, and achieve greater control over project delivery.
        </p>

        <div>
          <button 
            onClick={onStartProject}
            className="inline-flex items-center gap-2 bg-[#2ca35c] hover:bg-[#258d4e] text-white font-medium text-sm sm:text-base px-8 py-3.5 rounded-md shadow-lg shadow-emerald-600/25 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl cursor-pointer"
          >
            <span>Start Your Project Today</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

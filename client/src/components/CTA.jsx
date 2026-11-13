import React from 'react';

export default function CTA({ onOpenContact }) {
  return (
    <section className="relative py-24 sm:py-32 flex items-center justify-center bg-stone-900 overflow-hidden">
      {/* Clean Background City Skyline without baked-in card */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/cta-clean-bg.jpg')` }}
      >
        <div className="absolute inset-0 bg-stone-950/50 backdrop-grayscale-[20%]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center">
        {/* Floating Forest Green Card */}
        <div className="w-full max-w-2xl bg-[#143526] text-white p-8 sm:p-12 lg:p-14 rounded-2xl shadow-2xl border border-emerald-800/40 text-left">
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.2] mb-4 text-white">
            Let&apos;s Build Something <br />
            Exceptional Together
          </h2>

          <p className="text-emerald-100/90 text-sm sm:text-[15px] font-light leading-relaxed mb-8">
            Have a project in mind? Our team is ready to support you with expert BIM, VDC, and engineering solutions tailored to your needs. Reach out today and take the first step toward efficient, risk-free project execution.
          </p>

          {/* Get In Touch link with horizontal line */}
          <button
            onClick={onOpenContact}
            className="group inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-white hover:text-emerald-400 transition-colors cursor-pointer"
          >
            <span className="w-12 h-[1px] bg-white group-hover:bg-emerald-400 group-hover:w-16 transition-all duration-300" />
            <span>GET IN TOUCH</span>
          </button>

        </div>
      </div>
    </section>
  );
}


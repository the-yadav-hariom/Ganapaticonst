import React from 'react';

const industries = [
  {
    id: 1,
    title: 'Commercial Buildings',
    icon: (
      <svg className="w-12 h-12 stroke-[1.5] text-zinc-900 group-hover:text-[#2ca35c] transition-colors" viewBox="0 0 48 48" fill="none" stroke="currentColor">
        {/* Skyscraper / Commercial tower */}
        <rect x="14" y="8" width="20" height="34" rx="1.5" />
        <rect x="6" y="18" width="8" height="24" rx="1" />
        <line x1="18" y1="14" x2="22" y2="14" />
        <line x1="26" y1="14" x2="30" y2="14" />
        <line x1="18" y1="20" x2="22" y2="20" />
        <line x1="26" y1="20" x2="30" y2="20" />
        <line x1="18" y1="26" x2="22" y2="26" />
        <line x1="26" y1="26" x2="30" y2="26" />
        <line x1="18" y1="32" x2="22" y2="32" />
        <line x1="26" y1="32" x2="30" y2="32" />
        <line x1="9" y1="24" x2="11" y2="24" />
        <line x1="9" y1="30" x2="11" y2="30" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Residential Projects',
    icon: (
      <svg className="w-12 h-12 stroke-[1.5] text-zinc-900 group-hover:text-[#2ca35c] transition-colors" viewBox="0 0 48 48" fill="none" stroke="currentColor">
        {/* House / Residential villa */}
        <path d="M8 20L24 8L40 20" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 18V38H36V18" />
        <rect x="20" y="26" width="8" height="12" />
        <rect x="16" y="20" width="6" height="5" />
        <rect x="26" y="20" width="6" height="5" />
        <path d="M32 10V14" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Healthcare Facilities',
    icon: (
      <svg className="w-12 h-12 stroke-[1.5] text-zinc-900 group-hover:text-[#2ca35c] transition-colors" viewBox="0 0 48 48" fill="none" stroke="currentColor">
        {/* Hospital Building with Cross */}
        <rect x="12" y="10" width="24" height="32" rx="1.5" />
        <rect x="21" y="15" width="6" height="6" />
        <line x1="24" y1="16" x2="24" y2="20" strokeLinecap="round" strokeWidth="2" stroke="#2ca35c" />
        <line x1="22" y1="18" x2="26" y2="18" strokeLinecap="round" strokeWidth="2" stroke="#2ca35c" />
        <rect x="16" y="25" width="4" height="4" />
        <rect x="28" y="25" width="4" height="4" />
        <rect x="16" y="32" width="4" height="4" />
        <rect x="28" y="32" width="4" height="4" />
        <rect x="22" y="32" width="4" height="10" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Hospitality & Hotels',
    icon: (
      <svg className="w-12 h-12 stroke-[1.5] text-zinc-900 group-hover:text-[#2ca35c] transition-colors" viewBox="0 0 48 48" fill="none" stroke="currentColor">
        {/* Resort hotel with palm & sun */}
        <rect x="18" y="14" width="20" height="28" rx="1.5" />
        <line x1="23" y1="19" x2="26" y2="19" />
        <line x1="29" y1="19" x2="33" y2="19" />
        <line x1="23" y1="25" x2="26" y2="25" />
        <line x1="29" y1="25" x2="33" y2="25" />
        <line x1="23" y1="31" x2="26" y2="31" />
        <line x1="29" y1="31" x2="33" y2="31" />
        {/* Palm tree */}
        <path d="M12 42C12 34 10 26 6 22" strokeLinecap="round" />
        <path d="M6 22C4 18 10 16 12 20C14 16 18 19 14 23C16 26 12 26 10 24" strokeLinecap="round" strokeLinejoin="round" />
        {/* Sun */}
        <circle cx="8" cy="10" r="3" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Airports & Aviation',
    icon: (
      <svg className="w-12 h-12 stroke-[1.5] text-zinc-900 group-hover:text-[#2ca35c] transition-colors" viewBox="0 0 48 48" fill="none" stroke="currentColor">
        {/* Air control tower and airplane */}
        <path d="M18 14L22 40H26L30 14" />
        <rect x="15" y="8" width="18" height="6" rx="1.5" />
        <line x1="24" y1="4" x2="24" y2="8" strokeLinecap="round" />
        {/* Airplane */}
        <path d="M34 22L42 18L40 25L44 26L40 28L41 33L36 30L34 32V22Z" fill="currentColor" fillOpacity="0.1" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Industrial Facilities',
    icon: (
      <svg className="w-12 h-12 stroke-[1.5] text-zinc-900 group-hover:text-[#2ca35c] transition-colors" viewBox="0 0 48 48" fill="none" stroke="currentColor">
        {/* Power plant / Cooling tower with bolt */}
        <path d="M12 40L16 16H32L36 40H12Z" strokeLinejoin="round" />
        <ellipse cx="24" cy="16" rx="8" ry="2" />
        {/* Lightning bolt */}
        <path d="M25 22L21 28H26L23 34" strokeLinecap="round" strokeLinejoin="round" stroke="#2ca35c" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 7,
    title: 'Infrastructure Projects',
    icon: (
      <svg className="w-12 h-12 stroke-[1.5] text-zinc-900 group-hover:text-[#2ca35c] transition-colors" viewBox="0 0 48 48" fill="none" stroke="currentColor">
        {/* Modern skyline with gear and suspension bridge */}
        <rect x="8" y="24" width="8" height="18" />
        <rect x="18" y="16" width="10" height="26" />
        <path d="M23 10V16" strokeLinecap="round" />
        <circle cx="36" cy="32" r="7" strokeDasharray="3 2" />
        <circle cx="36" cy="32" r="3" />
      </svg>
    ),
  },
  {
    id: 8,
    title: 'Data Centers',
    icon: (
      <svg className="w-12 h-12 stroke-[1.5] text-zinc-900 group-hover:text-[#2ca35c] transition-colors" viewBox="0 0 48 48" fill="none" stroke="currentColor">
        {/* Server rack enclosure */}
        <rect x="12" y="8" width="24" height="34" rx="2" />
        <line x1="12" y1="18" x2="36" y2="18" />
        <line x1="12" y1="28" x2="36" y2="28" />
        <circle cx="17" cy="13" r="1.5" fill="#2ca35c" />
        <line x1="22" y1="13" x2="30" y2="13" />
        <circle cx="17" cy="23" r="1.5" fill="#2ca35c" />
        <line x1="22" y1="23" x2="30" y2="23" />
        <circle cx="17" cy="33" r="1.5" fill="#2ca35c" />
        <line x1="22" y1="33" x2="30" y2="33" />
      </svg>
    ),
  },
];

export default function Industries() {
  return (
    <section className="py-20 lg:py-28 bg-[#f5f5f3] relative overflow-hidden">
      {/* Subtle blueprint grid overlay background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <span className="text-[#2ca35c] text-xs font-bold tracking-[0.2em] uppercase block mb-3">
          INDUSTRIES WE SERVE
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-zinc-900 font-normal leading-[1.25] mb-5 max-w-3xl mx-auto">
          Powering Projects Across Every Sector with Precision
        </h2>

        <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed mb-14">
          Ganapati Ganesh Construction provides comprehensive engineering and construction support across sectors, helping streamline projects, improve performance, and ensure successful delivery from start to finish.
        </p>

        {/* 8 Cards Grid (4 cols on lg, 2 cols on md/sm) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl hover:shadow-stone-200/80 transition-all duration-300 border border-stone-200/60 hover:border-emerald-500/30 transform hover:-translate-y-1.5 cursor-pointer min-h-[175px]"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-zinc-900 font-semibold text-[15px] group-hover:text-emerald-700 transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


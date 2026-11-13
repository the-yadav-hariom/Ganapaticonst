import React from 'react';

const servicesList = [
  {
    id: 'bim',
    title: 'BIM Services',
    image: '/images/service-bim.jpg',
    description:
      'Empower your projects with intelligent BIM solutions that improve collaboration, enhance design accuracy, and reduce costly rework. We help teams achieve greater visibility and coordination throughout the project lifecycle.',
  },
  {
    id: 'vdc',
    title: 'VDC Services',
    image: '/images/service-vdc.jpg',
    description:
      'Optimize planning and execution through advanced Virtual Design & Construction solutions. Our VDC expertise enables better decision-making, improved coordination, and greater control over project outcomes.',
  },
  {
    id: 'offshore',
    title: 'Offshore Engineering Support',
    image: '/images/service-offshore.jpg',
    description:
      'Extend your engineering capabilities with dedicated offshore professionals who seamlessly integrate into your workflow, helping you scale operations efficiently while maintaining quality and productivity.',
  },
  {
    id: 'staffing',
    title: 'Technical Staffing Solutions',
    image: '/images/service-staffing.jpg',
    description:
      'Access highly skilled engineering and construction professionals tailored to your project requirements. We provide flexible staffing solutions that support both short-term needs and long-term growth.',
  },
  {
    id: 'cad',
    title: 'CAD Drafting & Documentation',
    image: '/images/service-cad.jpg',
    badge: 'cad-drafting',
    description:
      'Deliver projects with confidence through accurate drafting and detailed documentation services. We create precise technical drawings that support efficient planning, coordination, and construction execution.',
  },
  {
    id: 'scan-bim',
    title: 'Scan to BIM Services',
    image: '/images/service-scan-bim.jpg',
    description:
      'Transform existing site conditions into intelligent digital models using advanced Scan to BIM solutions. Our services improve project planning, facility management, and renovation workflows through accurate data capture and modeling.',
  },
];

export default function Services({ onOpenQuote, onExploreServices }) {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#121212] relative overflow-hidden">
      {/* Background architectural geometric lines */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #2ca35c 1px, transparent 1px), linear-gradient(135deg, rgba(255,255,255,0.05) 25%, transparent 25%)`,
          backgroundSize: '48px 48px, 120px 120px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#2ca35c] text-xs font-bold tracking-[0.2em] uppercase block mb-3">
            OUR SERVICES
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-white font-normal leading-[1.22] mb-5">
            Transforming Challenges Into <br className="hidden sm:inline" />
            Engineering Excellence
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            We deliver integrated BIM, VDC, engineering support, and workforce solutions that help construction professionals improve coordination, reduce risks, and achieve successful project outcomes.
          </p>
        </div>

        {/* 6 Services Cards (3 cols on lg, 2 on md, 1 on sm) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              {/* Card Image */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-zinc-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                />
                
                {service.badge && (
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-zinc-900 text-[11px] font-medium px-2.5 py-1 rounded shadow">
                    {service.badge}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                <h3 className="text-emerald-800 font-bold text-lg mb-3 tracking-tight group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-600 text-xs sm:text-[13px] leading-relaxed font-normal flex-1">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Dual Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2ca35c] hover:bg-[#258d4e] text-white font-medium text-sm px-7 py-3 rounded-md shadow-md transition-all duration-200 hover:shadow-emerald-900/50 cursor-pointer"
          >
            <span>Explore Our Services</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-100 text-zinc-900 font-medium text-sm px-7 py-3 rounded-md shadow-md transition-all duration-200 cursor-pointer"
          >
            <span>Contact Us Now</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}


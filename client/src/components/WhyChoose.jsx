import React from 'react';

const reasons = [
  {
    id: 1,
    title: 'Industry Expertise',
    description:
      'Deep experience across residential, commercial, and industrial projects ensures reliable and efficient execution.',
  },
  {
    id: 2,
    title: 'Quality & Precision',
    description:
      'Focused on accuracy and detail to minimize errors and improve overall project performance.',
  },
  {
    id: 3,
    title: 'Risk Reduction',
    description:
      'Proactive coordination and digital planning help identify and reduce potential project risks early.',
  },
  {
    id: 4,
    title: 'End-to-End Support',
    description:
      'From concept to completion, we provide dedicated engineering support at every stage.',
  },
];

export default function WhyChoose() {
  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center bg-stone-900 overflow-hidden py-16 lg:py-24">
      {/* Clean Background Crane Image without overlapping text or card */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/crane-clean-bg.jpg')` }}
      >
        <div className="absolute inset-0 bg-stone-900/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Forest Green Overlay Card on Left */}
        <div className="max-w-xl lg:max-w-2xl bg-[#143825] text-white p-8 sm:p-12 lg:p-14 rounded-2xl shadow-2xl border border-emerald-900/40">
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-normal leading-[1.2] mb-4 text-white">
            Why Choose Ganapati Ganesh <br className="hidden sm:inline" />
            Construction
          </h2>

          <p className="text-emerald-100/90 text-sm sm:text-[15px] font-light leading-relaxed mb-8">
            Delivering precision-driven BIM and VDC solutions that improve efficiency, reduce risks, and ensure successful project outcomes.
          </p>

          <div className="space-y-6">
            {reasons.map((item) => (
              <div key={item.id} className="flex items-start gap-4">
                {/* Checked Square Icon */}
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-5 h-5 rounded border border-white/80 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="font-semibold text-white text-[15px] tracking-wide mb-1">
                    {item.title}
                  </h3>
                  <p className="text-emerald-100/80 text-xs sm:text-[13px] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}


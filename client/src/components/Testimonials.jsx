import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote:
      'Ganapati Ganesh Construction delivered outstanding engineering and construction coordination services for our commercial development project in India. Their team demonstrated excellent technical expertise, maintained clear communication throughout the project, and delivered with superior quality and timely execution.',
    author: 'Rajesh Sharma',
    title: 'Project Director',
    location: 'Bihar, India',
  },
  {
    id: 2,
    quote:
      'The construction planning and quality execution provided by Ganapati Ganesh Construction transformed our project scheduling. Their proactive management saved hundreds of hours on-site and ensured solid, durable construction.',
    author: 'Vikram Patel',
    title: 'Senior Operations Lead',
    location: 'India',
  },
  {
    id: 3,
    quote:
      'Outstanding craftsmanship, structural precision, and workforce coordination. Ganapati Ganesh Construction seamlessly delivered according to our exact requirements while maintaining the highest safety standards.',
    author: 'Suresh Kumar',
    title: 'Chief Engineering Lead',
    location: 'India',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const current = testimonials[activeIndex];

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <span className="text-[#2ca35c] text-xs font-bold tracking-[0.2em] uppercase block mb-3">
          WHAT OUR CLIENTS SAY
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-zinc-900 font-normal leading-[1.22] mb-10 max-w-2xl mx-auto">
          Results That Speak Through <br />
          Our Clients
        </h2>

        {/* Large Decorative Quotation Mark */}
        <div className="flex justify-center mb-6">
          <svg className="w-12 h-12 text-zinc-900" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-8.983z" />
          </svg>
        </div>

        {/* Quote Content */}
        <div className="min-h-[140px] flex items-center justify-center mb-8">
          <p className="text-stone-600 text-[14.5px] sm:text-base md:text-[17px] font-normal leading-relaxed max-w-3xl mx-auto transition-opacity duration-300">
            {current.quote}
          </p>
        </div>

        {/* Author */}
        <div className="mb-10">
          <p className="text-[#2ca35c] font-medium text-sm sm:text-[15px] tracking-wide">
            {current.author}, {current.title}, {current.location}
          </p>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? 'w-6 bg-zinc-900'
                  : 'w-2 bg-stone-300 hover:bg-stone-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}


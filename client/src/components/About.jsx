import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#fafaf8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Team Photo with smooth rounded corners */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              <div className="overflow-hidden rounded-2xl shadow-xl shadow-stone-200/60 border border-stone-200/50">
                <img 
                  src="/images/about-team-photo.jpg" 
                  alt="Ganapati Ganesh Construction Team collaborating over blueprints" 
                  className="w-full h-[380px] sm:h-[460px] lg:h-[490px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[#2ca35c] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              ABOUT GANAPATI GANESH CONSTRUCTION
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-zinc-900 font-normal leading-[1.2] mb-6">
              Delivering Smarter <br className="hidden sm:inline" />
              Engineering Solutions
            </h2>

            <div className="space-y-5 text-stone-600 text-[14.5px] sm:text-[15px] leading-relaxed font-normal">
              <p>
                At Ganapati Ganesh Construction, we believe that successful projects are built on precision, collaboration, and innovation. We are a trusted provider of construction planning, engineering support, and technical workforce solutions, helping construction professionals deliver projects with greater efficiency, accuracy, and confidence.
              </p>
              
              <p>
                With a deep understanding of modern construction challenges, we support contractors, consultants, developers, and project teams with intelligent engineering solutions that enhance coordination, streamline workflows, and improve project outcomes. From BIM modeling and virtual construction planning to dedicated engineering resources and technical workforce support, we provide the expertise required to execute projects of every scale and complexity. Our strength lies in our people, technology, and commitment to excellence. By combining industry expertise with advanced digital engineering practices, we help clients reduce risks, optimize resources, and achieve successful project delivery while maintaining the highest standards of quality and professionalism.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


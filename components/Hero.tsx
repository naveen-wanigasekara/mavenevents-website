import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden py-20"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Wedding Event"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="max-w-3xl">
          <span className="inline-block text-[#EBD5A4] text-[10px] sm:text-xs font-bold uppercase tracking-[0.5em] mb-4">
            Vision to Reality
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif text-white mb-6 md:mb-8 leading-tight">
            Curating <span className="italic font-normal">Extraordinary</span>{" "}
            Moments
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 md:mb-12 font-light leading-relaxed max-w-2xl">
            From iconic Melbourne galas to romantic Yarra Valley weddings, we
            transform your most ambitious visions into breathtaking realities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
            <a
              href="#ai-planner"
              className="px-8 md:px-10 py-4 md:py-5 bg-[#EBD5A4] text-slate-900 font-bold rounded-sm hover:brightness-110 transition-all text-center tracking-[0.2em] uppercase text-[10px] md:text-xs shadow-xl"
            >
              Design Your Concept
            </a>
            <a
              href="#contact"
              className="px-8 md:px-10 py-4 md:py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-sm hover:bg-white/20 transition-all text-center tracking-[0.2em] uppercase text-[10px] md:text-xs"
            >
              Inquire Now
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce hidden sm:block">
        <i className="fa-solid fa-chevron-down text-xl"></i>
      </div>
    </section>
  );
};

export default Hero;

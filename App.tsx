import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AIPlanner from "./components/AIPlanner";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <Header />
      <main>
        <Hero />
{/*
        <section className="py-12 md:py-16 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.5em] mb-8 md:mb-12">
              Proudly Featured In
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-30 grayscale hover:grayscale-0 transition-all">
              <span className="text-xl md:text-2xl font-serif font-bold text-slate-800">
                VOGUE
              </span>
              <span className="text-xl md:text-2xl font-serif font-bold text-slate-800">
                BAZAAR
              </span>
              <span className="text-xl md:text-2xl font-serif font-bold text-slate-800">
                BRIDES
              </span>
              <span className="text-xl md:text-2xl font-serif font-bold text-slate-800">
                THE LANE
              </span>
            </div>
          </div>
        </section>
*/}

        <Services />

        <AIPlanner />

        <section id="gallery" className="py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-slate-800 mb-4">
                The Portfolio
              </h2>
              <p className="text-slate-500 text-sm">
                Glimpses into our most recent curated experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:h-[600px]">
              <div className="sm:col-span-2 sm:row-span-2 relative h-64 sm:h-auto overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  alt="Gala"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white border border-white px-6 py-2 uppercase tracking-widest text-[10px] md:text-sm">
                    Melbourne Harbour Gala
                  </span>
                </div>
              </div>
              <div className="relative h-64 sm:h-auto overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  alt="Wedding"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-center">
                  <span className="text-white border border-white px-6 py-2 uppercase tracking-widest text-[10px] md:text-sm">
                    Byron Bay
                    <br />
                    Beachfront
                  </span>
                </div>
              </div>
              <div className="relative h-64 sm:h-auto overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  alt="Party"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-center">
                  <span className="text-white border border-white px-6 py-2 uppercase tracking-widest text-[10px] md:text-sm">
                    Melbourne Loft
                  </span>
                </div>
              </div>
              <div className="sm:col-span-2 relative h-64 sm:h-auto overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1200"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  alt="Table"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white border border-white px-6 py-2 uppercase tracking-widest text-[10px] md:text-sm">
                    Tablescape Design
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;

import React from "react";

const FloatingWhatsApp: React.FC = () => {
  const openWhatsApp = () => {
    const text = `Hi Maven Events! I’d like to inquire about your event planning and management services. Could you please share more details? Thank you!`;
    window.open(
      `https://wa.me/+61468613994?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  return (
    <a
      onClick={openWhatsApp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulsing effect */}
        <div className="absolute inset-0 bg-maven-gold rounded-full animate-ping opacity-25 group-hover:opacity-40 transition-opacity"></div>

        {/* Main Button */}
        <div className="relative bg-slate-950 text-maven-gold w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full shadow-2xl border border-maven-gold/30 hover:bg-maven-gold hover:text-slate-950 transition-all duration-300">
          <i className="fa-brands fa-whatsapp text-2xl md:text-3xl"></i>
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-4 py-2 rounded-md shadow-xl border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden md:block">
          <span className="text-[11px] font-bold uppercase tracking-widest">
            Connect on WhatsApp
          </span>
        </div>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;

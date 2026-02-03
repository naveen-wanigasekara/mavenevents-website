import React from "react";
import Logo from "./Logo";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <Logo light className="mb-8" />
            <p className="text-slate-500 max-w-sm leading-relaxed text-sm">
              Crafting world-class events that tell stories and leave lasting
              memories. From vision to reality, we serve clients across all of
              Australia with bespoke luxury planning.
            </p>
            <div className="flex space-x-4 mt-8">
              <a
                href="#"
                className="w-10 h-10 border border-slate-800 flex items-center justify-center rounded-full hover:bg-[#EBD5A4] hover:text-slate-900 transition-all"
              >
                <i className="fa-brands fa-instagram text-lg"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-slate-800 flex items-center justify-center rounded-full hover:bg-[#EBD5A4] hover:text-slate-900 transition-all"
              >
                <i className="fa-brands fa-pinterest text-lg"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-slate-800 flex items-center justify-center rounded-full hover:bg-[#EBD5A4] hover:text-slate-900 transition-all"
              >
                <i className="fa-brands fa-linkedin-in text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 text-[#EBD5A4]">
              Quick Links
            </h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#ai-planner"
                  className="hover:text-white transition-colors"
                >
                  AI Concept Generator
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-white transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 text-[#EBD5A4]">
              Company
            </h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 text-center text-slate-600 text-[10px] uppercase tracking-[0.2em]">
          <p>
            © {new Date().getFullYear()} Maven Events Australia. Vision to
            Reality.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

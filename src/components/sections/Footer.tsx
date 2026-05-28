import { FOOTER_OFFICES, FOOTER_COLS } from "../../constants";

export default function Footer() {
  return (
    <footer className="px-6 md:px-[60px] pt-16 md:pt-20 pb-10 md:pb-16 bg-[#03070b] relative overflow-hidden">
      {/* Massive Background Glow */}
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] md:w-[1200px] h-[600px] md:h-[1200px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00A3FF]/40 via-[#00A3FF]/10 to-transparent blur-[80px] md:blur-[140px] pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 xl:gap-32 text-center lg:text-left">
        {/* Huge N7 Logo (Left Side) */}
        <div data-aos="zoom-in" data-aos-delay="100" className="w-[60%] sm:w-[40%] lg:w-[25%] xl:w-[35%] shrink-0">
          <img src="/Mask group.png" alt="N7 Logo" className="w-[100%] lg:w-[90%] object-contain mx-auto lg:mx-0" />
        </div>

        {/* Info & Links Grid (Right Side) */}
        <div className="flex-1 flex flex-col gap-16 lg:gap-20 mt-4 w-full">

          {/* Offices Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-8">
            {FOOTER_OFFICES.map((o, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={200 + (i * 100)} className="flex flex-col items-center lg:items-start">
                <div className="text-[15px] font-medium text-white mb-4 lg:mb-6">{o.city}</div>
                <p className="text-[13px] text-white/60 leading-[1.6] lg:pr-4 max-w-[200px]">
                  {o.addr}
                </p>
              </div>
            ))}
          </div>

          {/* Links Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-8">
            {FOOTER_COLS.map((col, idx) => (
              <div key={col.heading} data-aos="fade-up" data-aos-delay={300 + (idx * 100)} className="flex flex-col items-center lg:items-start">
                <div className="text-[15px] font-medium text-white mb-4 lg:mb-3">{col.heading}</div>
                <div className="flex flex-col items-center lg:items-start gap-3 lg:gap-1.5">
                  {col.links.map(l => (
                    <a key={l} href="#" className="group flex items-center justify-center lg:justify-between gap-2 text-[13px] text-white/60 hover:text-white transition-colors lg:w-[200px]">
                      <span>{l}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00A3FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="hidden lg:block opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Copyright Bottom */}
          <div className="mt-4 pt-8 lg:pt-0 border-t border-white/10 lg:border-none">
            <p className="text-[12px] text-white/20 leading-relaxed max-w-full lg:max-w-[800px] mx-auto lg:mx-0">
              Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

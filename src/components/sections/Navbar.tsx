import { NAV_LINKS } from "../../constants";

export default function Navbar() {
  return (
    <div data-aos="fade-down" className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <nav className="flex items-center justify-between bg-[#1e1e1e]/90 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-white/5">
        <div className="text-[24px] font-medium leading-[1.2] text-white tracking-normal font-['Archivo']">
          N7
        </div>
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <div key={l} className="relative group">
              <a href="#" className="flex items-center gap-1.5 text-[12px] uppercase leading-[1.3] tracking-normal text-white/70 group-hover:text-white transition-colors font-normal font-['Chivo_Mono'] py-2">
                {l}
                {(l === "Solutions" || l === "Resources") && (
                  <svg width="8" height="5" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70 group-hover:rotate-180 transition-transform duration-200">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </a>

              {/* Dropdown Menu */}
              {(l === "Solutions" || l === "Resources") && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-[#1e1e1e] border border-white/10 rounded-xl shadow-2xl py-2 backdrop-blur-xl">
                    {l === "Solutions" ? (
                      <>
                        <a href="#" className="block px-4 py-2 text-xs font-['Chivo_Mono'] text-white/70 hover:text-white hover:bg-white/5 transition-colors">Core Banking CB7</a>
                        <a href="#" className="block px-4 py-2 text-xs font-['Chivo_Mono'] text-white/70 hover:text-white hover:bg-white/5 transition-colors">Digital Banking N7</a>
                        <a href="#" className="block px-4 py-2 text-xs font-['Chivo_Mono'] text-white/70 hover:text-white hover:bg-white/5 transition-colors">Open Banking</a>
                      </>
                    ) : (
                      <>
                        <a href="#" className="block px-4 py-2 text-xs font-['Chivo_Mono'] text-white/70 hover:text-white hover:bg-white/5 transition-colors">Insights</a>
                        <a href="#" className="block px-4 py-2 text-xs font-['Chivo_Mono'] text-white/70 hover:text-white hover:bg-white/5 transition-colors">Case Studies</a>
                        <a href="#" className="block px-4 py-2 text-xs font-['Chivo_Mono'] text-white/70 hover:text-white hover:bg-white/5 transition-colors">Help Center</a>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="cursor-pointer px-4 md:px-6 py-2.5 text-[12px] uppercase leading-[1.3] tracking-normal text-white/90 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors font-normal font-['Chivo_Mono']">
          REQUEST DEMO
        </button>
      </nav>
    </div>
  );
}

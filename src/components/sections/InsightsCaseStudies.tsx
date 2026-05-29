import { useState } from 'react';
import { Button, LearnMoreLink } from '../ui';

const CASE_STUDIES = [
  {
    title: "How we help brand reach out to more people",
    company: "Zoomerr",
    image: "/frame-54.png"
  },
  {
    title: "Revolutionizing digital payments across the globe",
    company: "PayStream",
    image: "/frame-54.png"
  },
  {
    title: "Securing the future of decentralized finance",
    company: "Crypton",
    image: "/frame-54.png"
  },
  {
    title: "Empowering next-gen neo banking solutions",
    company: "NeoFi",
    image: "/frame-54.png"
  }
];

export default function InsightsCaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? CASE_STUDIES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === CASE_STUDIES.length - 1 ? 0 : prev + 1));
  };

  const getCardIndex = (offset: number) => {
    const len = CASE_STUDIES.length;
    return (activeIndex + offset + len) % len;
  };

  return (
    <div className="relative w-full bg-[#03070b] overflow-hidden pt-32 pb-10 text-white">
      {/* 1. Insights Section */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-[60px] flex flex-col xl:flex-row items-start justify-between gap-12 xl:gap-20 mb-35">
        {/* Left Side */}
        <div className="w-full xl:w-[35%] text-center xl:text-left">
          <h2 data-aos="fade-right" className="font-['Archivo'] text-[37px] font-normal leading-[1.15] tracking-[-0.03em] mb-8 md:mb-12">
            Get yourself up-to-speed on<br className="hidden sm:block" />all the things happening in<br className="hidden sm:block" />fintech
          </h2>
          <Button variant="secondary" data-aos="fade-right" data-aos-delay="100">
            INSIGHTS
          </Button>
        </div>

        {/* Right Side (Grid) */}
        <div className="w-full xl:w-[55%] flex flex-col items-center xl:items-end gap-6">
          {/* Top Wide Card */}
          <div data-aos="fade-up" data-aos-delay="200" className="w-full bg-[#070d17] rounded-[24px] overflow-hidden flex flex-col sm:flex-row border border-white/5">
            <div className="w-full sm:w-[45%] h-[200px] sm:h-auto  flex items-center justify-center p-6">
              <img src="/frame-54.png" alt="" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="w-full sm:w-[55%] p-8 md:p-10 flex flex-col justify-center">
              <div className="text-[#1c769a] text-[10px] font-normal tracking-[0.15em] uppercase font-['Chivo_Mono'] mb-4">
                GETTING STARTED
              </div>
              <h3 className="font-['Archivo'] text-[20px] md:text-[24px] font-bold leading-[1.25] mb-6 md:mb-8 pr-4">
                How to transition from a traditional to a digital bank
              </h3>
              <div className="text-[#1c769a] text-[12px] mb-8 md:mb-10 font-medium">
                David Grohl &nbsp;&nbsp;&nbsp; 17/08/24
              </div>
              <button className="w-full py-3 bg-transparent border border-white/10 rounded-xl text-white/50 text-[10px] font-['Chivo_Mono'] uppercase tracking-[0.15em] hover:bg-white/5 hover:text-white transition-all text-center">
                READ MORE
              </button>
            </div>
          </div>

          {/* Bottom Two Cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[1, 2].map((_, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={300 + (i * 100)} className="bg-[#070d17] rounded-[24px] p-8 border border-white/5 flex flex-col">
                <div className="text-[#1c769a] text-[10px] font-bold tracking-[0.15em] uppercase font-['Chivo_Mono'] mb-4">
                  GETTING STARTED
                </div>
                <h3 className="font-['Archivo'] text-[18px] md:text-[22px] font-bold leading-[1.3] mb-8 pr-4 flex-1">
                  How to transition from a traditional to a digital bank
                </h3>
                <div className="text-[#1c769a] text-[12px] mb-10 font-medium">
                  David Grohl &nbsp;&nbsp;&nbsp; 17/08/24
                </div>
                <button className="w-full py-3 bg-transparent border border-white/10 rounded-xl text-white/50 text-[10px] font-['Chivo_Mono'] uppercase tracking-[0.15em] hover:bg-white/5 hover:text-white transition-all text-center">
                  READ MORE
                </button>
              </div>
            ))}
          </div>

          <div data-aos="fade-up" data-aos-delay="400" className="mt-4 flex justify-center w-full xl:w-auto">
            <LearnMoreLink>
              READ ALL INSIGHTS
            </LearnMoreLink>
          </div>
        </div>
      </div>

      {/* 2. Our Case Studies (Carousel) */}
      <div className="w-full mb-32 md:mb-48 flex flex-col items-center">
        <h2 data-aos="fade-up" className="font-['Archivo'] text-[32px] md:text-[42px] font-bold mb-12 md:mb-20 text-center">
          Our Case Studies
        </h2>

        {/* Carousel Track */}
        <div data-aos="zoom-in" data-aos-delay="100" className="w-full relative flex items-center justify-center min-h-[380px] md:h-[420px] overflow-hidden px-6 md:px-0">

          {/* Left Card (Faded/Scaled) */}
          <div className="hidden lg:flex absolute left-[-15%] w-[850px] h-[380px] bg-[#070d17] rounded-[32px] opacity-30 scale-[0.85] blur-[1px] pointer-events-none border border-white/5 overflow-hidden transition-all duration-500">
            <div className="w-[45%] bg-[#031535] opacity-50 flex items-center justify-center p-6">
              <img src={CASE_STUDIES[getCardIndex(-1)].image} alt="" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="w-[55%] p-12"></div>
          </div>

          {/* Center Active Card */}
          <div className="relative z-10 w-full lg:w-[850px] h-auto lg:h-[380px] bg-[#070d17] rounded-[32px] shadow-2xl flex flex-col lg:flex-row border border-white/5 overflow-hidden transition-all duration-500">
            <div className="w-full lg:w-[45%] h-[200px] lg:h-auto flex items-center justify-center p-6 lg:p-8">
              <img src={CASE_STUDIES[activeIndex].image} alt="" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="w-full lg:w-[55%] p-8 lg:p-14 flex flex-col justify-center bg-[#070d17]">
              <div className="text-[#1c769a] text-[10px] font-bold tracking-[0.15em] uppercase font-['Chivo_Mono'] mb-4 lg:mb-5">
                GETTING STARTED
              </div>
              <h3 className="font-['Archivo'] text-[24px] lg:text-[32px] font-bold leading-[1.2] mb-8 lg:mb-10 pr-0 lg:pr-6">
                {CASE_STUDIES[activeIndex].title}
              </h3>
              <div className="flex items-center gap-2.5 text-white/50 font-bold mb-8 lg:mb-10 text-[13px] lg:text-[14px]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#1e293b" />
                  <path d="M13 6L7 14h5l-1 6 7-8h-5l1-6z" fill="#94a3b8" />
                </svg>
                {CASE_STUDIES[activeIndex].company}
              </div>
              <button className="w-full py-3.5 bg-transparent border border-white/10 rounded-xl text-white/50 text-[10px] font-['Chivo_Mono'] uppercase tracking-[0.15em] hover:bg-white/5 hover:text-white transition-all text-center">
                READ MORE
              </button>
            </div>
          </div>

          {/* Right Card (Faded/Scaled) */}
          <div className="hidden lg:flex absolute right-[-15%] w-[850px] h-[380px] bg-[#070d17] rounded-[32px] opacity-30 scale-[0.85] blur-[1px] pointer-events-none border border-white/5 overflow-hidden transition-all duration-500">
            <div className="w-[45%] bg-[#031535] opacity-50 flex items-center justify-center p-6">
              <img src={CASE_STUDIES[getCardIndex(1)].image} alt="" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="w-[55%] p-12"></div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div data-aos="fade-up" data-aos-delay="200" className="mt-10 md:mt-16 w-full max-w-[1400px] px-6 md:px-[60px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-0">
          <div className="w-32 hidden sm:block"></div> {/* Spacer to keep arrows perfectly centered */}
          <div className="flex items-center gap-6 md:gap-8">
            <button onClick={handlePrev} className="cursor-pointer w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#00A3FF] flex items-center justify-center text-[#00A3FF] hover:bg-[#00A3FF]/10 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              {CASE_STUDIES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-6 bg-[#00A3FF]' : 'w-1.5 border border-white/30 hover:border-white'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={handleNext} className="cursor-pointer w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#00A3FF] flex items-center justify-center text-[#00A3FF] hover:bg-[#00A3FF]/10 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="w-full sm:w-32 flex justify-center sm:justify-end">
            <LearnMoreLink>
              VIEW ALL
            </LearnMoreLink>
          </div>
        </div>
      </div>

      {/* 3. Bottom Paper-less CTA (Raw Section) */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-[60px] pt-10 md:pt-16 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0 text-center lg:text-left">
        <div className="max-w-[520px]">
          <h2 data-aos="fade-right" className="font-['Archivo'] text-[32px] md:text-[42px] font-bold leading-[1.1] text-white tracking-[-0.02em] mb-4 md:mb-6">
            Take the full advantage of<br className="hidden sm:block" />going paper-less now.
          </h2>
          <p data-aos="fade-right" data-aos-delay="100" className="text-white/50 text-[13px] md:text-[14px] leading-[1.6]">
            CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
          </p>
        </div>

        <div data-aos="fade-left" data-aos-delay="200" className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
          <Button variant="secondary">
            CONTACT US
          </Button>
          <Button variant="primary">
            REQUEST DEMO
          </Button>
        </div>
      </div>
    </div>
  );
}

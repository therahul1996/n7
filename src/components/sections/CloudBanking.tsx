import { CB7_FEATURES } from "../../constants";
import { LearnMoreLink, Button } from "../ui";

export default function CloudBanking() {
  return (
    <>
      <section className="relative px-6 md:px-[60px] py-20 md:py-40 flex flex-col xl:flex-row items-center justify-between gap-12 overflow-hidden">
        {/* CB7 Background Text Image */}
        <div className="absolute top-1/2 left-1/2 xl:left-1/4 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none z-0">
          <img data-aos="fade-in" data-aos-duration="1500" src="/CB7.png" alt="" className="w-[120%] xl:w-full xl:max-w-[65%] opacity-30 xl:opacity-40 object-contain" />
        </div>

        <div className="relative z-10 max-w-[450px] text-center xl:text-left mt-10 xl:mt-0">
          <h2 data-aos="fade-right" className="text-[40px] md:text-[53px] leading-[1.1] font-['Archivo'] font-normal text-white tracking-tight mb-6">
            A complete cloud-based<br className="hidden sm:block" />core banking.
          </h2>
          <p data-aos="fade-right" data-aos-delay="100" className="text-[16px] font-normal font-['Archivo'] text-white/50 leading-relaxed mb-10 max-w-[360px] mx-auto xl:mx-0">
            Faster time to market with our cloud-based<br className="hidden sm:block" />core banking services
          </p>
          <div data-aos="fade-right" data-aos-delay="200" className="flex flex-col items-center xl:items-start gap-4 w-full">
            <Button variant="primary">
              REQUEST DEMO
            </Button>
            <LearnMoreLink className="mt-2 justify-center sm:justify-start" />
          </div>
        </div>

        {/* Dashboard Mockup (Right) */}
        <div data-aos="fade-left" data-aos-delay="300" className="relative z-10 w-full xl:w-[50%] flex justify-center xl:justify-end shrink-0 mt-8 xl:mt-0">
          <img src="/aml.svg" alt="Cloud Banking Dashboard" className="hidden xl:block w-[100%] max-w-[750px] xl:translate-x-12 drop-shadow-2xl" />
          <img src="/aml-2.svg" alt="Cloud Banking Dashboard" className="block xl:hidden w-[100%] max-w-[750px] drop-shadow-2xl" />
        </div>
      </section>

      <section className="relative px-6 md:px-[60px] xl:pr-[60px] xl:pl-0 py-20 md:py-32 flex flex-col-reverse xl:flex-row items-center justify-between gap-16 overflow-hidden">
        {/* Dashboard Mockup (Left) */}
        <div data-aos="fade-right" data-aos-delay="200" className="relative w-full xl:w-[50%] flex justify-center xl:justify-start shrink-0">
          <img src="/yc.svg" alt="KYC Dashboard" className="hidden xl:block w-[100%] max-w-[750px] drop-shadow-[0_0_80px_rgba(0,102,255,0.15)]" />
          <img src="/yc-2.svg" alt="KYC Dashboard" className="block xl:hidden w-[100%] max-w-[750px] drop-shadow-[0_0_80px_rgba(0,102,255,0.15)]" />
        </div>

        {/* Text Content (Right) */}
        <div className="flex-1 max-w-[650px] z-10 text-center xl:text-left">
          <h2 data-aos="fade-left" className="text-[28px] md:text-[32px] font-['Archivo'] font-medium text-white leading-[1.25] tracking-tight mb-10 md:mb-12">
            Run a more efficient, flexible, and digitally connected core banking system
          </h2>

          <h3 data-aos="fade-up" data-aos-delay="100" className="text-[15px] md:text-[16px] font-medium text-white mb-6 md:mb-8 text-center xl:text-left">What you will get:</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 md:gap-y-2 text-left">
            {CB7_FEATURES.map((f, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={200 + (i * 50)} className="flex items-start gap-3 justify-start sm:justify-start">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mt-[3px]">
                  <circle cx="12" cy="12" r="10" fill="#0066FF" />
                  <path d="M7.5 12L10.5 15L16.5 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[13px] md:text-[14px] text-white/70 leading-relaxed font-sans">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-aos="zoom-in" data-aos-delay="100" className="relative mx-6 xl:ml-[60px] xl:pl-[60px] mb-20 md:mb-32 flex flex-col xl:flex-row items-center justify-between py-[50px] md:py-[80px] px-6 xl:px-0 rounded-[32px] xl:rounded-l-[32px] xl:rounded-r-none overflow-hidden bg-gradient-to-r from-[#00A3FF]/10 via-[#00A3FF]/5 to-[#00A3FF]/10 xl:to-transparent">
        {/* CB7 Background Text Image */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-full xl:w-[75%] h-[120%] flex items-center justify-center xl:justify-end pointer-events-none z-0">
          <img src="/CB7.png" alt="" className="w-[150%] xl:w-full h-full object-contain object-center xl:object-right opacity-30 xl:opacity-80" />
        </div>

        <div className="relative z-10 max-w-[500px] text-center xl:text-left mb-10 xl:mb-0">
          <h2 data-aos="fade-right" data-aos-delay="200" className="text-[32px] md:text-[40px] font-['Archivo'] font-medium text-white leading-[1.15] tracking-tight mb-4 md:mb-6">
            Take the full advantage of<br className="hidden sm:block" />going paper-less now.
          </h2>
          <p data-aos="fade-right" data-aos-delay="300" className="text-[14px] md:text-[14.5px] text-white/50 leading-relaxed max-w-[420px] mx-auto xl:mx-0">
            CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
          </p>
        </div>

        <div data-aos="fade-left" data-aos-delay="300" className="relative z-10 flex flex-col sm:flex-row gap-4 xl:pr-[80px] shrink-0 w-full sm:w-auto">
          <Button variant="secondary">
            CONTACT US
          </Button>
          <Button variant="primary">
            REQUEST DEMO
          </Button>
        </div>
      </section>
    </>
  );
}


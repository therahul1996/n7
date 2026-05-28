import { Button, LearnMoreLink } from "../ui";

const BlueCheck = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mt-0.5">
    <circle cx="10" cy="10" r="10" fill="#0066FF" />
    <path d="M6 10.5L8.5 13L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function DigitalBanking() {
  return (
    <div className="relative w-full bg-gradient-to-r from-[#e9f2f4] to-[#e8eded] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-0 w-[500px] md:w-[1000px] h-[500px] md:h-[1000px] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#0066FF]/10 to-transparent blur-[60px] md:blur-[100px] pointer-events-none z-0"></div>

      {/* Background Assets */}
      <img src="/N7.png" alt="" className="absolute top-30 left-90 w-[120%] md:w-[40%] opacity-60 mix-blend-multiply pointer-events-none z-0" />
      <img src="/Vector.png" alt="" className="absolute top-1/2 -translate-y-1/2 left-0 md:w-[30%] opacity-80 mix-blend-multiply pointer-events-none z-0" />

      {/* Main Content Container */}
      <div className="relative z-10 px-6 md:px-[60px] max-w-[1400px] mx-auto py-20 md:py-32 flex flex-col gap-24 md:gap-32">

        {/* COMBINED ROW */}
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between gap-12 xl:gap-0 relative">

          {/* Left: Titles */}
          <div className="w-full xl:w-[30%] pt-0 xl:pt-10 text-center xl:text-left xl:sticky xl:top-32 flex flex-col items-center xl:items-start">
            <h2 data-aos="fade-right" className="font-['Archivo'] text-[36px] md:text-[46px] font-bold leading-[1.1] text-[#0a0a0a] tracking-[-0.04em] mb-6">
              Digital banking<br className="hidden sm:block" />out-of-the-box
            </h2>
            <p data-aos="fade-right" data-aos-delay="100" className="text-[#555] text-[14px] md:text-[15px] leading-[1.6] mb-8 md:mb-10 max-w-[320px] mx-auto xl:mx-0">
              N7 helps your financial institution improve the client experience, automate and optimize procedures
            </p>
            <div data-aos="fade-right" data-aos-delay="200" className="flex flex-col sm:flex-row xl:flex-col items-center xl:items-start gap-4 md:gap-6 justify-center xl:justify-start">
              <Button variant="primary">
                REQUEST DEMO
              </Button>
              <LearnMoreLink className="mt-1" />
            </div>
          </div>

          {/* Middle & Right: Features Container */}
          <div className="w-full xl:w-[65%] flex flex-col gap-24 md:gap-32 mt-10 xl:mt-0">

            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-0">
              {/* Phone 1 */}
              <div data-aos="zoom-in" className="w-full md:w-[45%] flex justify-center relative">
                <img src="/phone-1.svg" alt="Digital Banking App" className="w-[70%] md:w-[280px] drop-shadow-[0_30px_60px_rgba(0,30,80,0.15)] relative z-10" />
              </div>
              {/* Info 1 */}
              <div className="w-full md:w-[50%] pt-0 md:pt-10 flex flex-col items-center md:items-start text-center md:text-left">
                <h4 data-aos="fade-left" className="font-['Archivo'] text-[16px] md:text-[15px] font-bold text-[#1a1a1a] mb-4">
                  Fully compliant with regulatory<br className="hidden sm:block" />requirement
                </h4>
                <p data-aos="fade-left" data-aos-delay="100" className="text-[#555] text-[13px] leading-[1.6] mb-8 max-w-[350px] md:max-w-[300px]">
                  The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures.
                </p>
                <div className="flex flex-col gap-4 md:gap-5 text-left w-full max-w-[350px] md:max-w-none">
                  {[
                    "Pre-integrated Security System",
                    "Fully Compliant With Regulatory Requirement",
                    "Digitally Connected Core"
                  ].map((item, i) => (
                    <div key={i} data-aos="fade-left" data-aos-delay={200 + (i * 100)} className="flex items-start gap-3">
                      <BlueCheck />
                      <span className="text-[13px] text-[#333] font-medium leading-snug pt-0.5">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start justify-between gap-12 md:gap-0">
              {/* Phone 2 */}
              <div data-aos="zoom-in" className="w-full md:w-[45%] flex justify-center relative">
                <img src="/phone-2.svg" alt="Digital Banking System" className="w-[70%] md:w-[280px] drop-shadow-[0_30px_60px_rgba(0,30,80,0.15)] relative z-10" />
              </div>

              {/* Info 2 */}
              <div className="w-full md:w-[50%] pt-0 md:pt-10 flex flex-col items-center md:items-start text-center md:text-left xl:ml-10">
                <h4 data-aos="fade-right" className="font-['Archivo'] text-[16px] md:text-[15px] font-bold text-[#1a1a1a] mb-4">
                  No legacy IT systems
                </h4>
                <p data-aos="fade-right" data-aos-delay="100" className="text-[#555] text-[13px] leading-[1.6] mb-8 max-w-[350px] md:max-w-[300px]">
                  Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.
                </p>
                <div className="flex flex-col gap-4 md:gap-5 text-left w-full max-w-[350px] md:max-w-none">
                  {[
                    "Adaptive & Intelligent API monetization",
                    "Ambient User Experience",
                    "Cloud-native With lower TCO"
                  ].map((item, i) => (
                    <div key={i} data-aos="fade-right" data-aos-delay={200 + (i * 100)} className="flex items-start gap-3">
                      <BlueCheck />
                      <span className="text-[13px] text-[#333] font-medium leading-snug pt-0.5">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-0 relative">
              <img src="/7.png" alt="" className="absolute top-1/2 -translate-y-1/2 right-0 w-[150%] md:w-[40%] max-w-[800px] opacity-90 mix-blend-multiply pointer-events-none z-0" />
              {/* Phone 3 */}
              <div data-aos="zoom-in" className="w-full md:w-[45%] flex justify-center relative">
                <img src="/phone-3.svg" alt="Branchless Experience" className="w-[70%] md:w-[280px] drop-shadow-[0_30px_60px_rgba(0,30,80,0.15)] relative z-10" />
              </div>
              {/* Info 3 */}
              <div className="w-full md:w-[50%] pt-0 md:pt-10 flex flex-col items-center md:items-start text-center md:text-left">
                <h4 data-aos="fade-left" className="font-['Archivo'] text-[16px] md:text-[15px] font-bold text-[#1a1a1a] mb-4">
                  No traditional branches
                </h4>
                <p data-aos="fade-left" data-aos-delay="100" className="text-[#555] text-[13px] leading-[1.6] mb-8 max-w-[350px] md:max-w-[300px]">
                  Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.
                </p>
                <div className="flex flex-col gap-4 md:gap-5 text-left w-full max-w-[350px] md:max-w-none">
                  {[
                    "Branchless & Paperless Banking",
                    "Digital Transformation Capability",
                    "Optimized, Adaptable and Scalable"
                  ].map((item, i) => (
                    <div key={i} data-aos="fade-left" data-aos-delay={200 + (i * 100)} className="flex items-start gap-3">
                      <BlueCheck />
                      <span className="text-[13px] text-[#333] font-medium leading-snug pt-0.5">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Dark Card */}
      <div data-aos="zoom-in" data-aos-delay="200" className="relative px-6 md:px-[60px] pb-20 md:pb-32 z-20">
        <div className="bg-[#03070b] rounded-[32px] p-10 md:p-20 flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-0 relative overflow-hidden text-center xl:text-left">
          {/* Card Watermark */}
          <div className="absolute top-1/2 right-1/2 xl:right-[-5%] translate-x-1/2 xl:translate-x-0 -translate-y-1/2 w-full xl:w-[70%] h-[150%] flex items-center justify-center xl:justify-end pointer-events-none z-0">
            <img src="/N7.png" alt="" className="w-[150%] xl:w-full h-full object-contain object-center xl:object-right opacity-[0.08] xl:opacity-20" />
          </div>

          <div className="relative z-10 max-w-[500px]">
            <h2 data-aos="fade-right" data-aos-delay="300" className="font-['Archivo'] text-[38px] md:text-[45px] font-normal leading-[1.1] text-white tracking-[-0.02em] mb-4 md:mb-6">
              Take the full advantage of<br className="hidden sm:block" />going paper-less now.
            </h2>
            <p data-aos="fade-right" data-aos-delay="400" className="text-white/50 text-[13px] md:text-[14px] leading-[1.6] md:pr-10 mx-auto xl:mx-0">
              N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
            </p>
          </div>

          <div data-aos="fade-left" data-aos-delay="300" className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0 xl:pr-10 w-full sm:w-auto justify-center xl:justify-start">
            <Button variant="secondary">
              CONTACT US
            </Button>
            <Button variant="primary">
              REQUEST DEMO
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

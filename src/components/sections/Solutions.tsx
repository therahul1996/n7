import { SOLUTIONS } from "../../constants";
import { LearnMoreLink, Button } from "../ui";

const ICONS = [
  "/core.svg",
  "/digital.svg",
  "/open.svg",
  "/loan.svg",
  "/loan-2.svg"
];

export default function Solutions() {
  return (
    <section className="px-6 md:px-[60px] py-20 md:py-32 flex flex-col xl:flex-row items-center xl:items-start gap-16 xl:gap-32">
      {/* Left Column */}
      <div className="w-full xl:w-[400px] shrink-0 xl:sticky xl:top-40 flex flex-col items-center xl:items-start text-center xl:text-left">
        <h2 data-aos="fade-right" className="text-[32px] md:text-[37px] leading-[1.15] font-['Archivo'] font-normal text-white tracking-tight mb-8 xl:mb-12">
          All of our solutions are<br className="hidden sm:block" />tailor-made to your needs
        </h2>
        <Button variant="secondary" data-aos="fade-right">
          REQUEST DEMO
        </Button>
      </div>

      {/* Right Column Grid */}
      <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 xl:gap-x-16 gap-y-12 xl:gap-y-20">
        {SOLUTIONS.map((s, i) => {
          const title = s.title ? `${s.tag} ${s.title}` : s.tag;
          return (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex justify-center md:justify-between items-start w-full mb-6">
                <img src={ICONS[i] || ICONS[0]} alt="Icon" className="w-[52px] h-[52px] opacity-80 object-contain" />
                {(s.tag === "Loan Origination System" || s.tag === "Loan Management System") && (
                  <span className="hidden md:block text-[10px] text-white/40 uppercase tracking-widest font-['Chivo_Mono'] mt-2">NBFC</span>
                )}
              </div>

              <h3 className="text-[20px] md:text-[22px] font-normal font-['Archivo'] text-white mb-4">
                {title}
              </h3>

              <p className="text-[15px] md:text-[16px] font-light font-['Archivo'] text-white/50 leading-[1.7] mb-8">
                {s.desc}
              </p>

              <LearnMoreLink className="mt-auto" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

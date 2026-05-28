import { Button } from "../ui";

export default function Hero() {
  return (
    <section className="relative px-6 md:px-[60px] pt-32 md:pt-40 pb-20 md:pb-28 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-visible">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-[15%] -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#0066FF] rounded-full blur-[100px] md:blur-[150px] opacity-[0.25] pointer-events-none" />

      <div className="flex-1 max-w-[620px] z-10 flex flex-col items-center lg:items-start text-center lg:text-left mt-10 lg:mt-0">
        <h1 data-aos="fade-up" className="text-[40px] md:text-[54px] xl:text-[67px] leading-[1.2] font-['Archivo'] font-medium text-white tracking-[-0.03em] mb-6">
          The new foundation<br className="hidden sm:block" />of modern banking
        </h1>
        <p data-aos="fade-up" data-aos-delay="100" className="text-[16px] text-white/60 leading-[1.6] max-w-[400px] mb-10 md:mb-12 font-normal font-['Archivo']">
          We drive innovation and growth, provide seamless<br className="hidden sm:block" />
          customer experience and operational excellence
        </p>

        <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col sm:flex-row items-center gap-4 mb-16 md:mb-24 w-full sm:w-auto">
          <Button variant="primary">
            REQUEST DEMO
          </Button>
          <Button variant="secondary">
            CONTACT US
          </Button>
        </div>

        <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col items-center lg:items-start w-full">
          <div className="text-[13px] font-medium text-white/50 mb-6 font-sans">Trusted By:</div>
          <img src="/trusted.svg" alt="Trusted Brands" className="w-full object-contain opacity-70" />
        </div>
      </div>

      {/* Hero Image */}
      <div data-aos="fade-left" data-aos-delay="200" className="relative flex-1 z-10 flex justify-center lg:justify-end shrink-0 w-full mt-10 lg:mt-0">
        <img src="/hero.svg" alt="Hero Interface" className="w-[90%] md:w-[80%] lg:w-[120%] max-w-[750px] drop-shadow-2xl lg:translate-x-12" />
      </div>
    </section>
  );
}

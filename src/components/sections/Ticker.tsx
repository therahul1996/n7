const Star = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-300 w-5 h-5 md:w-7 md:h-7 shrink-0">
    <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

export default function Ticker() {
  return (
    <div data-aos="fade-in" className="border-t border-b border-gray-200 py-4 md:py-6 overflow-hidden whitespace-nowrap bg-white flex items-center">
      <div className="inline-flex gap-6 md:gap-10 items-center" style={{ animation: "marquee 20s linear infinite" }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-6 md:gap-10">
            <Star />
            <span className="text-[#0066FF] font-['Archivo'] font-bold text-[20px] md:text-[32px] tracking-tight">N7</span>
            <Star />
            <span className="text-[#0a0a0a] font-['Archivo'] font-bold text-[20px] md:text-[32px] tracking-tight">Say 👋 &nbsp;&nbsp; to the new way of banking</span>
            <Star />
            <span className="text-[#0066FF] font-['Archivo'] font-bold text-[20px] md:text-[32px] tracking-tight">CB7</span>
            <Star />
            <span className="text-[#0a0a0a] font-['Archivo'] font-bold text-[20px] md:text-[32px] tracking-tight">Say 👋 &nbsp;&nbsp; to the new way of banking</span>
          </div>
        ))}
      </div>
    </div>
  );
}

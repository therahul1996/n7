import React from 'react';

interface LearnMoreLinkProps {
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function LearnMoreLink({ href = "#", className = "", children = "LEARN MORE" }: LearnMoreLinkProps) {
  const renderText = () => {
    if (typeof children === "string") {
      return (
        <>
          <span className="border-b border-current pb-[1px]">{children.substring(0, 4)}</span>
          {children.substring(4)}
        </>
      );
    }
    return children;
  };

  return (
    <a href={href} className={`cursor-pointer text-[14px] font-['Chivo_Mono'] font-normal text-[#00A3FF] uppercase tracking-[0.1em] flex items-center gap-2 hover:opacity-80 transition-opacity group ${className}`}>
      <span>{renderText()}</span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </a>
  );
}

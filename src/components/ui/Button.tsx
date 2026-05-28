import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export default function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const baseStyles = "cursor-pointer w-full sm:w-auto px-10 py-3 text-white text-[15px] font-['Chivo_Mono'] uppercase font-light rounded-xl transition-all";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#00A3FF] to-[#0055FF] hover:opacity-90",
    secondary: "bg-transparent border border-white/20 hover:bg-white/5"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

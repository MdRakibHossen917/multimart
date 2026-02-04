import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;

}

const Button: React.FC<ButtonProps> = ({ children, className, href, onClick}) => {
  const baseClasses =
    "px-6 py-2 bg-[#ffd43a] text-[#115061] font-semibold rounded-md hover:bg-yellow-400 transition cursor-pointer inline-flex items-center gap-1";

  return href ? (
    <Link href={href} className={twMerge(baseClasses, className)}>
      {children}
    </Link>
  ) : (
    <button   onClick={onClick} className={twMerge(baseClasses, className)}>
      {children}
    </button>
  );
};

export default Button;

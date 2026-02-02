import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={twMerge("max-w-6xl mx-auto px-4", className)}>
      {children}
    </div>
  );
};

export default Container;

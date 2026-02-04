import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { twMerge } from "tailwind-merge";

interface SocialLinksProps {
  className?: string;    
  iconStyle?: string;    
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className, iconStyle }) => {
  const linksData = [
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/rakibhossen917/", label: "LinkedIn" },
    { icon: <FaFacebook />, href: "https://www.facebook.com/md.rakib.hossen.41751", label: "Facebook" },
    { icon: <FaGithub />, href: "https://github.com/MdRakibHossen917", label: "GitHub" },
    { icon: <MdEmail />, href: "mailto:mdrakibhossen@gmail.com", label: "Email" },
    { icon: <FaYoutube />, href: "https://www.youtube.com/channel/UCVzbtrcSmsX5_TWnPXAb_iw", label: "YouTube" },
    
  ];

  return (
    <div className={twMerge("flex items-center gap-3", className)}>
      {linksData.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className={twMerge(
            `
            flex items-center justify-center w-10 h-10
            text-lg text-white/70
            border border-white/20 rounded-full
            hover:text-[#0C55AA] hover:border-[#0C55AA]
            active:text-[#0C55AA] active:border-[#0C55AA]
            focus-visible:text-[#0C55AA] focus-visible:border-[#0C55AA]
            transition-all duration-300
            `,
            iconStyle
          )}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;

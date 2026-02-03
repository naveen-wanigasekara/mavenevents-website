import React from "react";

interface LogoProps {
  light?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ light = false, className = "" }) => {
  const primaryColor = light ? "text-white" : "text-slate-900";
  const goldColor = "text-[#EBD5A4]";

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Balloon Icon */}
      <div className="relative logo-balloon">
        <svg
          width="45"
          height="55"
          viewBox="0 0 100 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="50" cy="45" rx="35" ry="40" fill="#EBD5A4" />
          <path
            d="M50 85C50 85 45 100 40 105C35 110 30 115 25 118"
            stroke="#EBD5A4"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Highlight detail on balloon */}
          <ellipse
            cx="68"
            cy="30"
            rx="8"
            ry="12"
            fill="white"
            fillOpacity="0.3"
            transform="rotate(15 68 30)"
          />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span
          className={`text-2xl font-brand font-bold tracking-tight uppercase leading-none ${primaryColor}`}
        >
          MAVEN <span className={goldColor}>EVENTS</span>
        </span>
        <span
          className={`text-[10px] tracking-[0.4em] uppercase font-medium mt-1 ${primaryColor} opacity-80`}
        >
          Vision to Reality
        </span>
      </div>
    </div>
  );
};

export default Logo;

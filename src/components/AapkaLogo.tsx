import React from 'react';

interface AapkaLogoProps {
  className?: string;
  size?: number | string;
  variant?: 'image' | 'svg';
}

export const AapkaLogo: React.FC<AapkaLogoProps> = ({ 
  className = "w-9 h-9", 
  variant = 'svg' 
}) => {
  if (variant === 'image') {
    return (
      <img 
        src="/aapka-logo.png" 
        alt="Aapka Official Logo" 
        className={`object-contain ${className}`} 
      />
    );
  }

  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Aapka Logo"
    >
      {/* Top Dot (Light Blue) */}
      <circle cx="50" cy="27" r="8.5" fill="#5D85EB" />

      {/* Middle Row (Medium Blue) */}
      <circle cx="37.5" cy="48.5" r="8.5" fill="#265FF4" />
      <circle cx="62.5" cy="48.5" r="8.5" fill="#265FF4" />

      {/* Bottom Row (Deep Navy Blue) */}
      <circle cx="25" cy="70" r="8.5" fill="#0332AB" />
      <circle cx="50" cy="70" r="8.5" fill="#0332AB" />
      <circle cx="75" cy="70" r="8.5" fill="#0332AB" />
    </svg>
  );
};

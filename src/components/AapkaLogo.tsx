import React from 'react';

interface AapkaLogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'svg';
  alt?: string;
}

export const AapkaLogo: React.FC<AapkaLogoProps> = ({ 
  className = "h-9 sm:h-9.5 lg:h-10 w-auto", 
  variant = 'full',
  alt = "Aapka - The Health Hub"
}) => {
  if (variant === 'full') {
    return (
      <picture className="inline-flex items-center">
        <source srcSet="/aapka-brand-logo.webp" type="image/webp" />
        <img 
          src="/aapka-brand-logo.png" 
          srcSet="/aapka-brand-logo.png 1x, /aapka-brand-logo@2x.png 2x"
          alt={alt} 
          className={`object-contain block ${className}`} 
          loading="eager"
          decoding="async"
        />
      </picture>
    );
  }

  if (variant === 'icon') {
    return (
      <img 
        src="/aapka-logo.png" 
        alt={alt} 
        className={`object-contain ${className}`} 
        loading="eager"
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
      <circle cx="50" cy="27" r="8.5" fill="#5D85EB" />
      <circle cx="37.5" cy="48.5" r="8.5" fill="#265FF4" />
      <circle cx="62.5" cy="48.5" r="8.5" fill="#265FF4" />
      <circle cx="25" cy="70" r="8.5" fill="#0332AB" />
      <circle cx="50" cy="70" r="8.5" fill="#0332AB" />
      <circle cx="75" cy="70" r="8.5" fill="#0332AB" />
    </svg>
  );
};

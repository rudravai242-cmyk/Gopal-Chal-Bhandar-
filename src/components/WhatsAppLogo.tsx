import React from 'react';

interface WhatsAppLogoProps {
  className?: string;
  size?: number;
}

/**
 * Official Authentic WhatsApp Brand Logo
 * Real, high-visibility vector SVG (Brand Green #25D366 + phone silhouette)
 */
export const WhatsAppLogo: React.FC<WhatsAppLogoProps> = ({
  className = 'w-6 h-6',
  size,
}) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 drop-shadow-xs ${className}`}
      style={size ? { width: size, height: size } : undefined}
      aria-label="Official WhatsApp"
    >
      {/* Official WhatsApp Green Circular Background */}
      <circle cx="24" cy="24" r="24" fill="#25D366" />
      {/* Official WhatsApp White Phone Silhouette in Speech Bubble */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.08 9.5C16.03 9.5 9.5 16.03 9.5 24.08C9.5 26.65 10.17 29.13 11.45 31.35L9.5 38.5L16.82 36.58C18.96 37.75 21.39 38.37 24.08 38.37C32.13 38.37 38.66 31.84 38.66 23.79C38.66 15.74 32.13 9.5 24.08 9.5ZM24.08 35.88C21.73 35.88 19.6 35.25 17.74 34.14L17.3 33.88L12.96 35.02L14.12 30.79L13.84 30.34C12.61 28.38 11.96 26.11 11.96 23.79C11.96 17.1 17.39 11.67 24.08 11.67C30.77 11.67 36.2 17.1 36.2 23.79C36.2 30.48 30.77 35.88 24.08 35.88ZM31.42 27.65C31.02 27.45 29.04 26.48 28.67 26.35C28.31 26.21 28.04 26.15 27.78 26.54C27.51 26.94 26.75 27.83 26.52 28.09C26.29 28.36 26.06 28.39 25.66 28.19C25.26 27.99 23.98 27.57 22.46 26.21C21.28 25.16 20.48 23.86 20.25 23.46C20.02 23.06 20.23 22.85 20.43 22.65C20.61 22.47 20.83 22.18 21.03 21.95C21.23 21.72 21.3 21.55 21.43 21.29C21.56 21.02 21.5 20.79 21.4 20.59C21.3 20.39 20.51 18.45 20.18 17.65C19.85 16.88 19.52 16.98 19.27 16.97C19.04 16.96 18.77 16.96 18.51 16.96C18.24 16.96 17.81 17.06 17.45 17.46C17.08 17.85 16.03 18.84 16.03 20.86C16.03 22.87 17.5 24.82 17.7 25.09C17.9 25.35 20.58 29.49 24.71 31.27C25.69 31.69 26.46 31.95 27.05 32.14C28.04 32.45 28.94 32.41 29.65 32.3C30.45 32.18 32.09 31.31 32.42 30.38C32.76 29.45 32.76 28.66 32.66 28.49C32.56 28.33 32.29 28.23 31.89 28.03L31.42 27.65Z"
        fill="white"
      />
    </svg>
  );
};

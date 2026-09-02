import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data';
import { useLanguage } from '../context/LanguageContext';

export const FloatingLineButton: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={BRAND_INFO.lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with VELORA on LINE"
        id="floating-line-cta"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#C9A24B] via-[#E2C779] to-[#F3E3A0] text-[#0A0A0F] shadow-[0_0_25px_rgba(201,162,75,0.5)] animate-pulse-glow transition-transform duration-300 hover:scale-110 focus:outline-none"
      >
        {/* Outer glowing halo */}
        <span className="absolute inset-0 rounded-full bg-[#F3E3A0]/30 blur-md pointer-events-none group-hover:bg-[#F3E3A0]/50 transition-colors" />

        {/* Icon & Label */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-current stroke-[#0A0A0F]" />
          <span className="text-[9px] font-bold tracking-tighter uppercase leading-none mt-0.5">
            LINE
          </span>
        </div>

        {/* Tooltip on Desktop */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#1B1B24]/90 text-gold border border-gold/30 text-xs font-medium tracking-wide whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-xl backdrop-blur-md hidden sm:block">
          {t.floatingButton.tooltip}
        </span>
      </a>
    </div>
  );
};

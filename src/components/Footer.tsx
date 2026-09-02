import React from 'react';
import { BRAND_INFO } from '../data';
import { ImageWithFallback } from './ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-[#0A0A0F] border-t border-gold/20 py-12 md:py-16 overflow-hidden text-center text-xs text-[#F5F1E8]/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 flex flex-col items-center">
        
        {/* Monogram / Logo */}
        <div className="w-10 h-10 rounded-full overflow-hidden mb-1">
          <ImageWithFallback
            src="/logo.png?v=3"
            alt="VELORA"
            fallbackType="logo"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Brand Name */}
        <h3 className="font-serif-luxury text-2xl text-gold font-medium tracking-[0.2em] uppercase">
          {BRAND_INFO.fullName}
        </h3>

        {/* Tagline */}
        <p className="font-script-luxury text-2xl text-gold/90 font-normal">
          &ldquo;{t.footer.tagline}&rdquo;
        </p>

        {/* Address */}
        <p className="text-[#F5F1E8]/80 max-w-lg leading-relaxed font-light">
          {BRAND_INFO.address}
        </p>

        {/* Hours */}
        <p className="text-gold/80 font-medium tracking-wide">
          {t.location.hoursText}
        </p>

        {/* Contact Line */}
        <p className="text-[#F5F1E8]/70 tracking-wide flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <a href={BRAND_INFO.phoneTel} className="hover:text-gold transition-colors">
            {BRAND_INFO.phone}
          </a>
          <span className="text-gold/40">|</span>
          <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-gold transition-colors">
            {BRAND_INFO.email}
          </a>
          <span className="text-gold/40">|</span>
          <a
            href={BRAND_INFO.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            LINE: {BRAND_INFO.lineId}
          </a>
          <span className="text-gold/40">|</span>
          <span className="hover:text-gold transition-colors">
            {t.contact.wechatLabel}: {BRAND_INFO.wechatId}
          </span>
        </p>

        {/* Divider */}
        <div className="w-24 h-[1px] bg-gold/20 my-2" />

        {/* Copyright */}
        <p className="text-[11px] text-[#F5F1E8]/50 tracking-wider">
          {t.footer.copyright}
        </p>

      </div>
    </footer>
  );
};

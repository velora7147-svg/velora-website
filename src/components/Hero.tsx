import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BRAND_INFO } from '../data';
import { StarField } from './StarField';
import { FadeInView } from './FadeInView';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const [bgFailed, setBgFailed] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0A0A0F]"
    >
      {/* Background Image with Fallback */}
      {!bgFailed && (
        <img
          src="/hero-bg.jpg"
          alt="Moonlit Spa Ambiance"
          referrerPolicy="no-referrer"
          onError={() => setBgFailed(true)}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40 z-0 transition-opacity duration-1000"
        />
      )}

      {/* Dark gradient and atmospheric radial glows for moonlit luxury */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F]/80 via-[#0A0A0F]/60 to-[#0A0A0F] z-[1] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#7B5FA6]/15 blur-[120px] pointer-events-none z-[1]" />
      <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-[#2D3C6E]/20 blur-[100px] pointer-events-none z-[1]" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-[#C9A24B]/10 blur-[90px] pointer-events-none z-[1]" />

      {/* Star Particles */}
      <StarField className="z-[2]" count={75} speed={0.25} />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-24 pb-16 md:py-28">
        
        {/* Emblem / Monogram Logo */}
        <FadeInView delay={100} direction="down">
          <div className="mb-6 relative group">
            {/* Ambient gold glow ring behind logo */}
            <div className="absolute inset-0 rounded-full bg-[#C9A24B]/20 blur-xl scale-125 group-hover:bg-[#F3E3A0]/30 transition-all duration-700" />
            
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto rounded-full border border-gold/50 p-1 bg-[#1B1B24]/80 backdrop-blur-md flex items-center justify-center shadow-[0_0_35px_rgba(201,162,75,0.25)] overflow-hidden">
              {!logoFailed ? (
                <img
                  src="/logo.png?v=3"
                  alt="VELORA Monogram Logo"
                  referrerPolicy="no-referrer"
                  onError={() => setLogoFailed(true)}
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                /* Fallback stylized gold monogram when logo.png is not yet on disk */
                <div className="w-full h-full rounded-full border border-gold/30 flex flex-col items-center justify-center text-center p-2 bg-gradient-to-b from-[#1B1B24] to-[#0D0D14]">
                  <span className="font-serif-luxury text-3xl sm:text-4xl text-gold font-semibold tracking-wider">
                    V
                  </span>
                  <span className="text-[8px] uppercase tracking-[0.3em] text-[#F3E3A0]/70 font-light">
                    VELORA
                  </span>
                </div>
              )}
            </div>
          </div>
        </FadeInView>

        {/* Brand Name */}
        <FadeInView delay={250} direction="up">
          <h1 className="font-serif-luxury text-5xl sm:text-7xl md:text-8xl tracking-[0.22em] font-light text-gold mb-3 sm:mb-4 drop-shadow-[0_4px_24px_rgba(201,162,75,0.25)]">
            VELORA
          </h1>
        </FadeInView>

        {/* Subtitle */}
        <FadeInView delay={400} direction="up">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-6">
            <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-gold/60" />
            <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.35em] text-[#F3E3A0] font-medium">
              {t.hero.subtitle}
            </p>
            <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-gold/60" />
          </div>
        </FadeInView>

        {/* Cursive Tagline */}
        <FadeInView delay={550} direction="up">
          <p className="font-script-luxury text-3xl sm:text-4xl md:text-5xl text-gold/90 mb-10 md:mb-12 font-normal">
            &ldquo;{t.hero.tagline}&rdquo;
          </p>
        </FadeInView>

        {/* CTA Button */}
        <FadeInView delay={700} direction="up">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={BRAND_INFO.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-button"
              className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full border border-gold bg-[#1B1B24]/80 text-gold hover:bg-gold hover:text-[#0A0A0F] font-serif-luxury text-sm sm:text-base tracking-[0.25em] uppercase font-semibold transition-all duration-400 shadow-[0_0_25px_rgba(201,162,75,0.2)] hover:shadow-[0_0_35px_rgba(243,227,160,0.5)] transform hover:-translate-y-0.5"
            >
              <span>{t.hero.bookExperience}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </FadeInView>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-[10px] uppercase tracking-[0.25em] text-gold/80 font-light">
            {t.hero.scrollToExplore}
          </span>
          <div className="w-[1px] h-6 bg-gradient-to-b from-gold/80 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ImageWithFallback } from './ImageWithFallback';
import { FadeInView } from './FadeInView';
import { Sparkles, Moon, Flower2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-[#121218] overflow-hidden border-t border-b border-gold/15"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#7B5FA6]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-[#C9A24B]/08 blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Atmosphere Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <FadeInView direction="right" delay={150}>
              <div className="relative group">
                {/* Gold accent aura behind image */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-gold/30 via-transparent to-gold/30 opacity-70 blur-md group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative rounded-2xl overflow-hidden border border-gold/35 shadow-[0_12px_40px_rgba(0,0,0,0.6)] aspect-[4/3] sm:aspect-[16/11]">
                  <ImageWithFallback
                    src="/about-atmosphere.jpg?v=2"
                    alt="VELORA Atmosphere"
                    fallbackType="about"
                    fallbackText="VELORA Atmosphere & Candlelight"
                    className="w-full h-full"
                  />
                  
                  {/* Subtle inner overlay for luxury feel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/70 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Accent Badge */}
                  <div className="absolute bottom-4 left-4 z-10 px-4 py-2 rounded-full glass-card border border-gold/40 flex items-center gap-2">
                    <Moon className="w-3.5 h-3.5 text-moon-yellow" />
                    <span className="text-[11px] font-serif-luxury tracking-widest text-[#F3E3A0] uppercase">
                      {t.about.sanctuaryBadge}
                    </span>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>

          {/* Right Column: Copy */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <FadeInView direction="left" delay={200}>
              <div className="flex items-center gap-2 text-gold">
                <Flower2 className="w-4 h-4 text-gold/80" />
                <span className="text-xs uppercase tracking-[0.3em] font-medium text-gold/90">
                  {t.about.badge}
                </span>
              </div>
            </FadeInView>

            <FadeInView direction="left" delay={300}>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-gold font-normal tracking-wide leading-tight">
                {t.about.heading}
              </h2>
            </FadeInView>

            <FadeInView direction="left" delay={400}>
              <div className="w-16 h-[1.5px] bg-gradient-to-r from-gold via-moon-yellow to-transparent" />
            </FadeInView>

            <FadeInView direction="left" delay={500}>
              <p className="text-[#F5F1E8]/85 text-base sm:text-lg leading-relaxed font-light">
                {t.about.p1}
              </p>
            </FadeInView>

            <FadeInView direction="left" delay={600}>
              <p className="text-[#F5F1E8]/85 text-base sm:text-lg leading-relaxed font-light">
                {t.about.p2}
              </p>
            </FadeInView>

            {/* Aesthetic highlight badge */}
            <FadeInView direction="left" delay={700}>
              <div className="pt-2">
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#1B1B24]/80 border border-gold/25">
                  <Sparkles className="w-4 h-4 text-moon-yellow flex-shrink-0" />
                  <span className="font-serif-luxury italic text-sm sm:text-base text-gold tracking-wide">
                    {t.about.quote}
                  </span>
                </div>
              </div>
            </FadeInView>

          </div>
        </div>
      </div>
    </section>
  );
};

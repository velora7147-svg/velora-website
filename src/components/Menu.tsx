import React from 'react';
import { ArrowUpRight, Clock, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data';
import { ImageWithFallback } from './ImageWithFallback';
import { FadeInView } from './FadeInView';
import { useLanguage } from '../context/LanguageContext';

export const Menu: React.FC = () => {
  const { t } = useLanguage();

  const treatments = [
    {
      id: 'treatment-thai',
      name: t.treatments.items.thaiTitle,
      duration: t.treatments.duration60,
      price: '900 THB',
      description: t.treatments.items.thaiDesc,
      imageSrc: '/menu-thai-massage.jpg',
    },
    {
      id: 'treatment-oil',
      name: t.treatments.items.oilTitle,
      duration: t.treatments.duration60,
      price: '1,100 THB',
      description: t.treatments.items.oilDesc,
      imageSrc: '/menu-oil-massage.jpg',
    },
    {
      id: 'treatment-man',
      name: t.treatments.items.manTitle,
      duration: t.treatments.duration60,
      price: '1,600 THB',
      description: t.treatments.items.manDesc,
      imageSrc: '/menu-man-revive.jpg',
    },
  ];

  return (
    <section id="treatments" className="relative py-24 md:py-32 bg-[#0A0A0F] overflow-hidden">
      {/* Soft atmospheric glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#7B5FA6]/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#C9A24B]/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <FadeInView direction="up">
            <span className="text-xs uppercase tracking-[0.35em] text-[#F3E3A0]/80 font-medium block mb-3">
              {t.treatments.badge}
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl text-gold font-normal tracking-wide mb-4">
              {t.treatments.heading}
            </h2>
            <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-4" />
            <p className="text-[#F5F1E8]/70 text-sm sm:text-base font-light">
              {t.treatments.subtext}
            </p>
          </FadeInView>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {treatments.map((treatment, index) => (
            <FadeInView key={treatment.id} delay={index * 160} direction="up">
              <div className="group rounded-2xl overflow-hidden glass-card flex flex-col h-full border border-gold/30 hover:border-gold/70 transition-all duration-500 shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
                
                {/* Photo Top Area */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#121218] border-b border-gold/20">
                  <ImageWithFallback
                    src={treatment.imageSrc}
                    alt={treatment.name}
                    fallbackType="menu"
                    fallbackText={treatment.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B24] via-transparent to-transparent opacity-80" />

                  {/* Duration Tag */}
                  <div className="absolute top-4 right-4 z-10 px-3.5 py-1 rounded-full bg-[#0A0A0F]/85 border border-gold/40 backdrop-blur-md flex items-center gap-1.5 shadow-md">
                    <Clock className="w-3.5 h-3.5 text-moon-yellow" />
                    <span className="text-xs font-medium text-[#F3E3A0] tracking-wider uppercase">
                      {treatment.duration}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-7 sm:p-8 flex flex-col flex-grow justify-between text-center bg-[#1B1B24]/70">
                  <div>
                    {/* Treatment Name */}
                    <h3 className="font-serif-luxury text-2xl sm:text-3xl text-gold font-semibold tracking-[0.12em] mb-2 uppercase group-hover:text-moon-yellow transition-colors">
                      {treatment.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-[#F5F1E8]/75 text-sm sm:text-[15px] leading-relaxed font-light mb-6 min-h-[44px]">
                      {treatment.description}
                    </p>

                    {/* Thin Gold Divider with Diamond */}
                    <div className="flex items-center justify-center gap-2 mb-6">
                      <span className="w-12 h-[1px] bg-gold/30" />
                      <Sparkles className="w-3.5 h-3.5 text-gold/70" />
                      <span className="w-12 h-[1px] bg-gold/30" />
                    </div>

                    {/* Price */}
                    <div className="mb-8">
                      <span className="text-[11px] uppercase tracking-[0.25em] text-[#F5F1E8]/60 block mb-1">
                        {t.treatments.investment}
                      </span>
                      <span className="font-serif-luxury text-4xl sm:text-5xl text-gold font-bold tracking-tight">
                        {treatment.price}
                      </span>
                    </div>
                  </div>

                  {/* Gold-Outlined BOOK NOW Button */}
                  <div>
                    <a
                      href={BRAND_INFO.lineUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full border border-gold text-gold hover:bg-gold hover:text-[#0A0A0F] font-serif-luxury text-sm uppercase tracking-[0.25em] font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(201,162,75,0.12)] hover:shadow-[0_0_25px_rgba(201,162,75,0.35)]"
                    >
                      <span>{t.treatments.bookNow}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                </div>

              </div>
            </FadeInView>
          ))}
        </div>

      </div>
    </section>
  );
};

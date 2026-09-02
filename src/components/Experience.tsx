import React from 'react';
import { Hand, Flower2, Sun, Sparkles } from 'lucide-react';
import { FadeInView } from './FadeInView';
import { ImageWithFallback } from './ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';

export const Experience: React.FC = () => {
  const { t } = useLanguage();

  const experienceList = [
    {
      id: 'exp-touch',
      title: t.experience.items.touchTitle,
      iconName: 'touch' as const,
      description: t.experience.items.touchDesc,
      imageSrc: '/menu-thai-massage.jpg',
    },
    {
      id: 'exp-scent',
      title: t.experience.items.scentTitle,
      iconName: 'scent' as const,
      description: t.experience.items.scentDesc,
      imageSrc: '/gallery-04.jpg',
    },
    {
      id: 'exp-light',
      title: t.experience.items.lightTitle,
      iconName: 'light' as const,
      description: t.experience.items.lightDesc,
      imageSrc: '/gallery-01.jpg',
    },
    {
      id: 'exp-atmosphere',
      title: t.experience.items.atmosphereTitle,
      iconName: 'atmosphere' as const,
      description: t.experience.items.atmosphereDesc,
      imageSrc: '/about-atmosphere.jpg',
    },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'touch':
        return <Hand className="w-8 h-8 text-gold" strokeWidth={1.5} />;
      case 'scent':
        return <Flower2 className="w-8 h-8 text-gold" strokeWidth={1.5} />;
      case 'light':
        return <Sun className="w-8 h-8 text-gold" strokeWidth={1.5} />;
      case 'atmosphere':
      default:
        return <Sparkles className="w-8 h-8 text-gold" strokeWidth={1.5} />;
    }
  };

  return (
    <section id="experience" className="relative py-24 md:py-32 bg-[#0A0A0F] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-[#7B5FA6]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#2D3C6E]/20 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <FadeInView direction="up">
            <span className="text-xs uppercase tracking-[0.35em] text-[#F3E3A0]/80 font-medium block mb-3">
              {t.experience.badge}
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl text-gold font-normal tracking-wide mb-4">
              {t.experience.heading}
            </h2>
            <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-5" />
            <p className="text-[#F5F1E8]/70 text-sm sm:text-base font-light">
              {t.experience.subtext}
            </p>
          </FadeInView>
        </div>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {experienceList.map((item, index) => (
            <FadeInView key={item.id} delay={index * 150} direction="up">
              <div className="group relative rounded-2xl overflow-hidden glass-card h-full flex flex-col justify-between p-6 sm:p-7 border border-gold/25 hover:border-gold/60 transition-all duration-500">
                
                {/* Subtle Background Image Layer */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none overflow-hidden">
                  <ImageWithFallback
                    src={item.imageSrc}
                    alt={item.title}
                    fallbackType="experience"
                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B24]/90 via-[#1B1B24]/80 to-[#121218]/95" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with illuminated circle */}
                  <div className="w-16 h-16 rounded-2xl bg-[#0A0A0F]/80 border border-gold/30 flex items-center justify-center mb-6 group-hover:border-gold group-hover:shadow-[0_0_20px_rgba(201,162,75,0.3)] transition-all duration-400">
                    {getIcon(item.iconName)}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl text-gold font-semibold tracking-wider mb-3 group-hover:text-moon-yellow transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#F5F1E8]/80 text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Subtle bottom decorative gold line */}
                <div className="relative z-10 mt-6 pt-4 border-t border-gold/15 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold/60 font-medium">
                    0{index + 1} {t.experience.ritual}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-moon-yellow transition-colors" />
                </div>

              </div>
            </FadeInView>
          ))}
        </div>

      </div>
    </section>
  );
};

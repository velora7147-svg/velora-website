import React from 'react';
import { MoonStar, Sparkles, Armchair, Gem } from 'lucide-react';
import { FadeInView } from './FadeInView';
import { useLanguage } from '../context/LanguageContext';

export const WhyVelora: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      id: 'feat-starry',
      title: t.whyVelora.items.starryTitle,
      iconName: 'star' as const,
      description: t.whyVelora.items.starryDesc,
    },
    {
      id: 'feat-aroma',
      title: t.whyVelora.items.aromaTitle,
      iconName: 'aroma' as const,
      description: t.whyVelora.items.aromaDesc,
    },
    {
      id: 'feat-design',
      title: t.whyVelora.items.designTitle,
      iconName: 'design' as const,
      description: t.whyVelora.items.designDesc,
    },
    {
      id: 'feat-luxury',
      title: t.whyVelora.items.luxuryTitle,
      iconName: 'luxury' as const,
      description: t.whyVelora.items.luxuryDesc,
    },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'star':
        return <MoonStar className="w-9 h-9 text-gold" strokeWidth={1.4} />;
      case 'aroma':
        return <Sparkles className="w-9 h-9 text-gold" strokeWidth={1.4} />;
      case 'design':
        return <Armchair className="w-9 h-9 text-gold" strokeWidth={1.4} />;
      case 'luxury':
      default:
        return <Gem className="w-9 h-9 text-gold" strokeWidth={1.4} />;
    }
  };

  return (
    <section
      id="why-velora"
      className="relative py-24 md:py-32 bg-[#121218] border-t border-b border-gold/15 overflow-hidden"
    >
      {/* Soft background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#7B5FA6]/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <FadeInView direction="up">
            <span className="text-xs uppercase tracking-[0.35em] text-[#F3E3A0]/80 font-medium block mb-3">
              {t.whyVelora.badge}
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl text-gold font-normal tracking-wide mb-4">
              {t.whyVelora.heading}
            </h2>
            <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-4" />
            <p className="text-[#F5F1E8]/70 text-sm sm:text-base font-light">
              {t.whyVelora.subtext}
            </p>
          </FadeInView>
        </div>

        {/* 4-Column Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {features.map((feature, index) => (
            <FadeInView key={feature.id} delay={index * 130} direction="up">
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#1B1B24]/50 border border-gold/20 hover:border-gold/50 hover:bg-[#1B1B24]/80 transition-all duration-400 group h-full">
                
                {/* Icon Container */}
                <div className="w-20 h-20 rounded-full border border-gold/30 bg-[#0A0A0F]/70 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-gold group-hover:shadow-[0_0_25px_rgba(201,162,75,0.25)] transition-all duration-400">
                  {getIcon(feature.iconName)}
                </div>

                {/* Title */}
                <h3 className="font-serif-luxury text-2xl text-gold font-semibold tracking-wider mb-3 group-hover:text-moon-yellow transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[#F5F1E8]/75 text-sm sm:text-[15px] leading-relaxed font-light">
                  {feature.description}
                </p>

              </div>
            </FadeInView>
          ))}
        </div>

      </div>
    </section>
  );
};

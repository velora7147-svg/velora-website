import React from 'react';
import { MapPin, Clock, Navigation, ExternalLink } from 'lucide-react';
import { BRAND_INFO } from '../data';
import { FadeInView } from './FadeInView';
import { useLanguage } from '../context/LanguageContext';

export const Location: React.FC = () => {
  const { t } = useLanguage();
  // Standard Google Maps embed URL using the specified address
  const encodedAddress = encodeURIComponent(BRAND_INFO.address);
  const embedMapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="location" className="relative py-24 md:py-32 bg-[#0A0A0F] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-[#7B5FA6]/12 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#C9A24B]/08 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <FadeInView direction="up">
            <span className="text-xs uppercase tracking-[0.35em] text-[#F3E3A0]/80 font-medium block mb-3">
              {t.location.badge}
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl text-gold font-normal tracking-wide mb-4">
              {t.location.heading}
            </h2>
            <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-4" />
            <p className="text-[#F5F1E8]/70 text-sm sm:text-base font-light">
              {t.location.subtext}
            </p>
          </FadeInView>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Details & CTA */}
          <div className="lg:col-span-5 space-y-8">
            <FadeInView direction="right" delay={150}>
              <div className="p-8 rounded-2xl glass-card border border-gold/30 space-y-6">
                
                {/* Location Heading & Icon */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/40 flex items-center justify-center text-gold">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-gold/70 font-medium block">
                      {t.location.addressTitle}
                    </span>
                    <h3 className="font-serif-luxury text-2xl sm:text-3xl text-gold font-medium">
                      VELORA Spa
                    </h3>
                  </div>
                </div>

                {/* Address Text */}
                <div className="space-y-2 border-t border-gold/15 pt-5">
                  <p className="text-[#F5F1E8]/90 text-base sm:text-lg leading-relaxed font-light">
                    {BRAND_INFO.address}
                  </p>
                </div>

                {/* Hours Box */}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-[#0A0A0F]/60 border border-gold/20">
                  <Clock className="w-5 h-5 text-moon-yellow flex-shrink-0" />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#F5F1E8]/60 block">
                      {t.location.operatingHours}
                    </span>
                    <span className="text-sm font-medium text-[#F3E3A0]">
                      {t.location.hoursText}
                    </span>
                  </div>
                </div>

                {/* Get Directions Button */}
                <div className="pt-2">
                  <a
                    href={BRAND_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="location-directions-button"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full border border-gold text-gold hover:bg-gold hover:text-[#0A0A0F] font-serif-luxury text-sm uppercase tracking-[0.25em] font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(201,162,75,0.15)] hover:shadow-[0_0_25px_rgba(201,162,75,0.4)]"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>{t.location.getDirections}</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>

              </div>
            </FadeInView>
          </div>

          {/* Right Column: Embedded Map Iframe */}
          <div className="lg:col-span-7">
            <FadeInView direction="left" delay={250}>
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-gold/20 via-transparent to-gold/20 opacity-70 blur-md group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative rounded-2xl overflow-hidden border border-gold/40 shadow-[0_12px_40px_rgba(0,0,0,0.6)] aspect-[16/10] sm:aspect-[16/11] bg-[#1B1B24]">
                  <iframe
                    title={t.location.mapTitle}
                    src={embedMapUrl}
                    className="w-full h-full border-0 grayscale contrast-125 opacity-85 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  
                  {/* Subtle Dark Vignette Border */}
                  <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-gold/30 shadow-inner" />
                </div>
              </div>
            </FadeInView>
          </div>

        </div>

      </div>
    </section>
  );
};

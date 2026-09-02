import React, { useState, useEffect } from 'react';
import { Moon, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { FadeInView } from './FadeInView';
import { useLanguage } from '../context/LanguageContext';

export const Gallery: React.FC = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const galleryItems = [
    {
      id: 'gal-1',
      imageSrc: '/gallery-01.jpg',
      caption: t.gallery.items.img1,
    },
    {
      id: 'gal-2',
      imageSrc: '/gallery-02.jpg',
      caption: t.gallery.items.img2,
    },
    {
      id: 'gal-3',
      imageSrc: '/gallery-03.jpg',
      caption: t.gallery.items.img3,
    },
    {
      id: 'gal-4',
      imageSrc: '/gallery-04.jpg',
      caption: t.gallery.items.img4,
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedItemIndex(index);
  };

  const closeLightbox = () => {
    setSelectedItemIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % galleryItems.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex(
        (selectedItemIndex - 1 + galleryItems.length) % galleryItems.length
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') {
        setSelectedItemIndex((prev) => (prev !== null ? (prev + 1) % galleryItems.length : null));
      }
      if (e.key === 'ArrowLeft') {
        setSelectedItemIndex((prev) =>
          prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemIndex, galleryItems.length]);

  const activeItem =
    selectedItemIndex !== null ? galleryItems[selectedItemIndex] : null;

  return (
    <section
      id="gallery"
      className="relative py-24 md:py-32 bg-[#121218] border-t border-b border-gold/15 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] rounded-full bg-[#7B5FA6]/10 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <FadeInView direction="up">
            <span className="text-xs uppercase tracking-[0.35em] text-[#F3E3A0]/80 font-medium block mb-3">
              {t.gallery.badge}
            </span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl text-gold font-normal tracking-wide mb-4">
              {t.gallery.heading}
            </h2>
            <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-4" />
            <p className="text-[#F5F1E8]/70 text-sm sm:text-base font-light">
              {t.gallery.subtext}
            </p>
          </FadeInView>
        </div>

        {/* 4-Image Responsive 2x2 Grid (Desktop & Tablet 2x2, Mobile 1 column for generous visual presence) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {galleryItems.map((item, index) => (
            <FadeInView key={item.id} delay={index * 140} direction="up">
              <div
                onClick={() => openLightbox(index)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-gold/25 hover:border-gold/70 transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)] aspect-[16/10] sm:aspect-[16/10.5] bg-[#1B1B24]"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') openLightbox(index);
                }}
              >
                {/* Image or Dark Gradient Fallback */}
                <ImageWithFallback
                  src={item.imageSrc}
                  alt={item.caption}
                  fallbackType="gallery"
                  fallbackText={item.caption}
                  fallbackIcon={<Moon className="w-8 h-8 text-moon-yellow/60" />}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Hover Overlay & Gold Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/95 via-[#0A0A0F]/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#F3E3A0]/80 font-medium block mb-1">
                        {t.gallery.sanctuaryLabel}
                      </span>
                      <h4 className="font-serif-luxury text-xl sm:text-2xl text-gold font-medium">
                        {item.caption}
                      </h4>
                    </div>
                    <div className="w-11 h-11 rounded-full bg-[#0A0A0F]/80 border border-gold/50 flex items-center justify-center text-gold group-hover:text-moon-yellow shadow-md flex-shrink-0 ml-4">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Corner Subtle Moon Badge */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0A0A0F]/60 backdrop-blur-md border border-gold/20 flex items-center justify-center pointer-events-none opacity-70 group-hover:opacity-0 transition-opacity">
                  <Moon className="w-4 h-4 text-moon-yellow/80" />
                </div>
              </div>
            </FadeInView>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          id="gallery-lightbox"
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-[#0A0A0F]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-[#1B1B24]/90 border border-gold/40 text-gold hover:text-moon-yellow hover:border-gold transition-colors focus:outline-none shadow-lg"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#1B1B24]/90 border border-gold/40 text-gold hover:text-moon-yellow hover:border-gold transition-colors focus:outline-none shadow-lg"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#1B1B24]/90 border border-gold/40 text-gold hover:text-moon-yellow hover:border-gold transition-colors focus:outline-none shadow-lg"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden border border-gold/40 bg-[#1B1B24] flex flex-col shadow-[0_0_50px_rgba(201,162,75,0.25)]"
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#121218]">
              <ImageWithFallback
                src={activeItem.imageSrc}
                alt={activeItem.caption}
                fallbackType="gallery"
                fallbackText={activeItem.caption}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 sm:p-6 bg-[#1B1B24] border-t border-gold/20 flex items-center justify-between">
              <div>
                <p className="font-serif-luxury text-xl sm:text-2xl text-gold font-medium">
                  {activeItem.caption}
                </p>
                <p className="text-xs uppercase tracking-widest text-[#F5F1E8]/60 mt-1">
                  {t.gallery.locationSubtitle}
                </p>
              </div>
              <span className="text-xs text-gold/80 font-mono">
                {selectedItemIndex! + 1} / {galleryItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

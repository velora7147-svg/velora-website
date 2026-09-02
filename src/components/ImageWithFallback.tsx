import React, { useState } from 'react';
import { Sparkles, Moon, Flower2, HeartHandshake } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackType?: 'logo' | 'hero' | 'about' | 'experience' | 'menu' | 'gallery' | 'generic';
  fallbackText?: string;
  fallbackIcon?: React.ReactNode;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackType = 'generic',
  fallbackText,
  fallbackIcon,
  ...rest
}) => {
  const [errorCount, setErrorCount] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Derive source candidates (e.g. /public/logo.png -> fallback to /logo.png -> fallback to failure)
  const getAttemptSrc = () => {
    if (errorCount === 0) {
      return src;
    }
    if (errorCount === 1) {
      if (src.startsWith('/public/')) {
        return src.replace('/public/', '/');
      } else if (src.startsWith('/')) {
        return `/public${src}`;
      }
    }
    return '';
  };

  const currentSrc = getAttemptSrc();
  const hasFailed = errorCount >= 2 || !currentSrc;

  const handleError = () => {
    setErrorCount((prev) => prev + 1);
  };

  const handleLoad = () => {
    setLoaded(true);
  };

  if (hasFailed) {
    if (fallbackType === 'logo') {
      return (
        <div
          className="w-full h-full rounded-full border border-gold/40 flex items-center justify-center bg-[#1B1B24] text-gold font-serif-luxury text-sm font-semibold select-none shadow-inner"
          aria-label={alt}
        >
          V
        </div>
      );
    }

    return (
      <div
        className={`relative overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-[#1B1B24] via-[#12121A] to-[#0A0A0F] border border-[#C9A24B]/20 select-none ${className}`}
        role="img"
        aria-label={alt}
      >
        {/* Ambient subtle glow inside fallback */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(123,95,166,0.18)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,rgba(201,162,75,0.08)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center justify-center p-4 text-center">
          {fallbackIcon ? (
            <div className="text-gold/60 mb-2">{fallbackIcon}</div>
          ) : fallbackType === 'gallery' ? (
            <Moon className="w-6 h-6 text-[#C9A24B]/50 mb-2 animate-pulse" />
          ) : fallbackType === 'menu' ? (
            <Flower2 className="w-7 h-7 text-[#C9A24B]/50 mb-2" />
          ) : fallbackType === 'about' ? (
            <Sparkles className="w-8 h-8 text-[#C9A24B]/50 mb-2" />
          ) : (
            <Sparkles className="w-6 h-6 text-[#C9A24B]/40 mb-2" />
          )}

          {fallbackText ? (
            <span className="font-serif-luxury text-sm tracking-widest text-[#F5F1E8]/70 uppercase">
              {fallbackText}
            </span>
          ) : (
            <span className="font-serif-luxury text-xs tracking-widest text-[#C9A24B]/50 uppercase">
              VELORA · {alt}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B1B24] via-[#151520] to-[#0A0A0F] flex items-center justify-center z-10 border border-[#C9A24B]/15">
          <div className="w-5 h-5 rounded-full border-2 border-[#C9A24B]/30 border-t-[#C9A24B] animate-spin" />
        </div>
      )}
      <img
        src={currentSrc}
        alt={alt}
        referrerPolicy="no-referrer"
        onError={handleError}
        onLoad={handleLoad}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...rest}
      />
    </div>
  );
};

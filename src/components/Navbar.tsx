import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO, NAV_KEYS } from '../data';
import { ImageWithFallback } from './ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ['hero', 'about', 'experience', 'why-velora', 'treatments', 'gallery', 'location', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav py-3.5 shadow-2xl'
          : 'bg-transparent py-5 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Wordmark */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-3 group focus:outline-none"
          id="nav-logo-link"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <ImageWithFallback
              src="/logo.png?v=3"
              alt="VELORA Emblem"
              fallbackType="logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-[0.2em] text-gold group-hover:text-moon-yellow transition-colors leading-none">
            VELORA
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8" id="desktop-navigation">
          {NAV_KEYS.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            const label = t.nav[item.key];
            return (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-xs uppercase tracking-[0.16em] transition-all duration-300 relative py-1 ${
                  isActive
                    ? 'text-moon-yellow font-medium'
                    : 'text-[#F5F1E8]/75 hover:text-gold'
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#C9A24B] to-transparent animate-pulse" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Area: Language Switcher & BOOK NOW Button */}
        <div className="hidden sm:flex items-center gap-3 md:gap-4">
          <LanguageSwitcher idPrefix="desktop-nav" />

          <a
            href={BRAND_INFO.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-book-button"
            className="group relative inline-flex items-center gap-2 px-4 md:px-5 py-2 rounded-full border border-gold text-gold hover:text-[#0A0A0F] hover:bg-gold text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-[0_0_15px_rgba(201,162,75,0.15)] hover:shadow-[0_0_20px_rgba(201,162,75,0.4)]"
          >
            <span>{t.nav.bookNow}</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex items-center gap-2 sm:hidden">
          <LanguageSwitcher idPrefix="mobile-top-nav" />

          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gold hover:text-moon-yellow focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Tablet Hamburger (hidden on lg and sm) */}
        <div className="hidden sm:flex lg:hidden items-center gap-3">
          <button
            id="tablet-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gold hover:text-moon-yellow focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden bg-[#12121A]/95 backdrop-blur-xl border-b border-gold/20 px-6 pt-4 pb-8 space-y-5 shadow-2xl animate-in slide-in-from-top duration-300"
        >
          {/* Mobile Language Switcher inside Drawer */}
          <div className="flex items-center justify-between py-2 border-b border-[#2A2A38]/50">
            <span className="text-xs uppercase tracking-widest text-[#F5F1E8]/60 font-medium">
              Language / ภาษา / 语言
            </span>
            <LanguageSwitcher idPrefix="drawer-nav" />
          </div>

          <div className="flex flex-col space-y-3">
            {NAV_KEYS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm uppercase tracking-[0.2em] text-[#F5F1E8]/80 hover:text-gold py-2 border-b border-[#2A2A38]/30 transition-colors"
              >
                {t.nav[item.key]}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={BRAND_INFO.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-gold bg-gold/10 text-gold hover:bg-gold hover:text-[#0A0A0F] text-xs uppercase tracking-[0.22em] font-medium transition-all"
            >
              <span>{t.nav.bookAppointment}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

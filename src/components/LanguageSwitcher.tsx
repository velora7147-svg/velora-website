import React from 'react';
import { useLanguage, Language } from '../context/LanguageContext';

interface LanguageSwitcherProps {
  idPrefix?: string;
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  idPrefix = 'nav',
  className = '',
}) => {
  const { lang, setLang } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'th', label: 'TH' },
    { code: 'en', label: 'EN' },
    { code: 'zh', label: '中文' },
  ];

  return (
    <div
      id={`${idPrefix}-language-switcher`}
      className={`inline-flex items-center p-0.5 rounded-full border border-gold/30 bg-[#12121A]/80 backdrop-blur-sm shadow-inner ${className}`}
      role="group"
      aria-label="Language selection"
    >
      {languages.map(({ code, label }) => {
        const isActive = lang === code;
        return (
          <button
            key={code}
            id={`${idPrefix}-lang-btn-${code}`}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={isActive}
            className={`relative px-2.5 py-1 text-xs font-medium tracking-wider rounded-full transition-all duration-200 focus:outline-none ${
              isActive
                ? 'bg-gradient-to-r from-[#C9A24B] to-[#F3E3A0] text-[#0A0A0F] font-semibold shadow-[0_0_12px_rgba(201,162,75,0.45)] scale-100'
                : 'text-[#C9A24B]/80 hover:text-[#F3E3A0] hover:bg-gold/10'
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

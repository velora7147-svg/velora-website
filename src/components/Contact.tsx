import React, { useState } from 'react';
import { Phone, MessageCircle, MessageSquare, CalendarCheck, Mail, Clock, Check, Copy } from 'lucide-react';
import { BRAND_INFO } from '../data';
import { FadeInView } from './FadeInView';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [copiedWeChat, setCopiedWeChat] = useState(false);

  const handleCopyWeChat = async () => {
    try {
      await navigator.clipboard.writeText(BRAND_INFO.wechatId);
      setCopiedWeChat(true);
      setTimeout(() => setCopiedWeChat(false), 3000);
    } catch {
      // Fallback
      setCopiedWeChat(true);
      setTimeout(() => setCopiedWeChat(false), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-[#121218] border-t border-gold/20 overflow-hidden text-center"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] rounded-full bg-[#7B5FA6]/15 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeInView direction="up">
          <span className="text-xs uppercase tracking-[0.35em] text-[#F3E3A0]/80 font-medium block mb-3">
            {t.contact.badge}
          </span>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl text-gold font-normal tracking-wide mb-4">
            {t.contact.heading}
          </h2>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-5" />
          <p className="font-serif-luxury italic text-xl sm:text-2xl md:text-3xl text-gold/90 mb-12">
            {t.contact.emotiveLine}
          </p>
        </FadeInView>

        {/* Action Buttons */}
        <FadeInView direction="up" delay={200}>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-16">
            
            {/* CALL NOW */}
            <a
              href={BRAND_INFO.phoneTel}
              id="contact-call-btn"
              className="w-full sm:w-auto min-w-[180px] inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full border border-gold bg-[#1B1B24]/80 text-gold hover:bg-gold hover:text-[#0A0A0F] font-serif-luxury text-sm tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(201,162,75,0.15)] hover:shadow-[0_0_30px_rgba(201,162,75,0.4)] transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              <span>{t.contact.callNow}</span>
            </a>

            {/* LINE US */}
            <a
              href={BRAND_INFO.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-line-btn"
              className="w-full sm:w-auto min-w-[180px] inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full border border-[#06C755] bg-[#06C755]/10 text-[#54E487] hover:bg-[#06C755] hover:text-[#0A0A0F] font-serif-luxury text-sm tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(6,199,85,0.2)] hover:shadow-[0_0_30px_rgba(6,199,85,0.4)] transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.contact.lineUs}</span>
            </a>

            {/* WECHAT US (Copy ID button with tooltip) */}
            <div className="relative w-full sm:w-auto">
              <button
                type="button"
                onClick={handleCopyWeChat}
                id="contact-wechat-btn"
                aria-label={`WeChat: ${BRAND_INFO.wechatId}`}
                className="w-full sm:w-auto min-w-[180px] inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full border border-[#07C160]/70 bg-[#07C160]/10 text-[#75E898] hover:bg-[#07C160] hover:text-[#0A0A0F] font-serif-luxury text-sm tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(7,193,96,0.2)] hover:shadow-[0_0_30px_rgba(7,193,96,0.4)] transform hover:-translate-y-0.5 cursor-pointer"
              >
                {copiedWeChat ? (
                  <Check className="w-4 h-4 text-[#75E898]" />
                ) : (
                  <MessageSquare className="w-4 h-4" />
                )}
                <span>{copiedWeChat ? t.contact.wechatCopied : t.contact.wechatUs}</span>
              </button>

              {/* WeChat ID Floating Tooltip badge on hover/copied */}
              <div className="hidden sm:block absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] tracking-wider text-gold/80 bg-[#121218]/90 px-3 py-0.5 rounded-full border border-gold/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                ID: {BRAND_INFO.wechatId}
              </div>
            </div>

            {/* BOOK NOW */}
            <a
              href={BRAND_INFO.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-book-btn"
              className="w-full sm:w-auto min-w-[180px] inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full border border-gold bg-gold text-[#0A0A0F] hover:bg-[#F3E3A0] font-serif-luxury text-sm tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-[0_0_25px_rgba(201,162,75,0.3)] hover:shadow-[0_0_35px_rgba(243,227,160,0.6)] transform hover:-translate-y-0.5"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>{t.contact.bookNow}</span>
            </a>

          </div>
        </FadeInView>

        {/* Contact Details Grid / Row (Phone | Email | LINE ID | WeChat | Hours) */}
        <FadeInView direction="up" delay={350}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 p-6 sm:p-8 rounded-2xl glass-card border border-gold/20 text-left sm:text-center">
            
            {/* Phone */}
            <div className="flex sm:flex-col items-center gap-3 sm:gap-2 p-3">
              <Phone className="w-5 h-5 text-gold flex-shrink-0" />
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#F5F1E8]/60 block">
                  {t.contact.directLine}
                </span>
                <a
                  href={BRAND_INFO.phoneTel}
                  className="text-sm font-medium text-[#F3E3A0] hover:text-gold transition-colors"
                >
                  {BRAND_INFO.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex sm:flex-col items-center gap-3 sm:gap-2 p-3 border-t sm:border-t-0 sm:border-l border-gold/15">
              <Mail className="w-5 h-5 text-gold flex-shrink-0" />
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#F5F1E8]/60 block">
                  {t.contact.emailLabel}
                </span>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="text-sm font-medium text-[#F3E3A0] hover:text-gold transition-colors break-all"
                >
                  {BRAND_INFO.email}
                </a>
              </div>
            </div>

            {/* LINE ID */}
            <div className="flex sm:flex-col items-center gap-3 sm:gap-2 p-3 border-t sm:border-t-0 sm:border-l border-gold/15">
              <MessageCircle className="w-5 h-5 text-gold flex-shrink-0" />
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#F5F1E8]/60 block">
                  {t.contact.lineOfficial}
                </span>
                <a
                  href={BRAND_INFO.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#F3E3A0] hover:text-gold transition-colors"
                >
                  @{BRAND_INFO.lineId}
                </a>
              </div>
            </div>

            {/* WeChat ID */}
            <div
              onClick={handleCopyWeChat}
              className="flex sm:flex-col items-center gap-3 sm:gap-2 p-3 border-t sm:border-t-0 sm:border-l border-gold/15 cursor-pointer group"
              title={t.contact.wechatClickToCopy}
            >
              <div className="relative">
                <MessageSquare className="w-5 h-5 text-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                {copiedWeChat && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#07C160]" />
                )}
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#F5F1E8]/60 block">
                  {t.contact.wechatLabel}
                </span>
                <span className="text-sm font-medium text-[#F3E3A0] group-hover:text-gold transition-colors inline-flex items-center gap-1.5">
                  {BRAND_INFO.wechatId}
                  {copiedWeChat ? (
                    <Check className="w-3.5 h-3.5 text-[#07C160]" />
                  ) : (
                    <Copy className="w-3 h-3 text-gold/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </span>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="flex sm:flex-col items-center gap-3 sm:gap-2 p-3 border-t sm:border-t-0 sm:border-l border-gold/15">
              <Clock className="w-5 h-5 text-gold flex-shrink-0" />
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#F5F1E8]/60 block">
                  {t.contact.hoursLabel}
                </span>
                <span className="text-sm font-medium text-[#F3E3A0]">
                  {t.location.hoursText}
                </span>
              </div>
            </div>

          </div>
        </FadeInView>

      </div>
    </section>
  );
};

import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { WhyVelora } from './components/WhyVelora';
import { Menu } from './components/Menu';
import { Gallery } from './components/Gallery';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingLineButton } from './components/FloatingLineButton';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0A0A0F] text-[#F5F1E8] selection:bg-[#C9A24B]/30 selection:text-[#F3E3A0] relative font-sans">
        {/* Top Sticky Navigation with Language Switcher */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          {/* 1. Hero */}
          <Hero />

          {/* 2. About — A Different Kind of Relaxation */}
          <About />

          {/* 3. The Experience */}
          <Experience />

          {/* 4. Signature Features — Why VELORA */}
          <WhyVelora />

          {/* 5. Menu — Signature Treatments */}
          <Menu />

          {/* 6. Gallery — 4-Image Responsive Showcase */}
          <Gallery />

          {/* 7. Location */}
          <Location />

          {/* 8. Contact / Booking — Begin Your Ritual */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating LINE CTA */}
        <FloatingLineButton />
      </div>
    </LanguageProvider>
  );
}

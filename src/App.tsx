import React, { useState } from 'react';
import { Header } from './components/Header';
import { BottomNavBar } from './components/BottomNavBar';
import { HomeSection } from './components/HomeSection';
import { ProductsSection } from './components/ProductsSection';
import { RatesSection } from './components/RatesSection';
import { StoreSection } from './components/StoreSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CookingGuideModal } from './components/CookingGuideModal';
import { NavTabId } from './types';
import { STORE_INFO } from './data/riceData';
import { useLanguage } from './context/LanguageContext';

export default function App() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<NavTabId>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isCookingGuideOpen, setIsCookingGuideOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  const handleSelectTab = (tab: NavTabId) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50/70 text-stone-900 font-['Hind_Siliguri',sans-serif] overflow-x-hidden w-full max-w-full">
      {/* 🇮🇳 Global Indian Flag Ambient Glows (Subtle for light theme) */}
      <div className="fixed -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[#FF9933] opacity-[0.05] blur-[150px] pointer-events-none z-0" />
      <div className="fixed -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-[#138808] opacity-[0.05] blur-[150px] pointer-events-none z-0" />
      
      {/* Sticky Header */}
      <Header
        onSelectTab={handleSelectTab}
        onOpenCookingGuide={() => setIsCookingGuideOpen(true)}
      />

      {/* Main Body Content (Includes generous bottom padding for the iOS bottom navigation bar) */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 pt-5 pb-28">
        {activeTab === 'home' && (
          <HomeSection
            onSelectTab={handleSelectTab}
            onSelectCategory={handleSelectCategory}
            onOpenCookingGuide={() => setIsCookingGuideOpen(true)}
            onOpenWhatsApp={() => setIsWhatsAppOpen(true)}
          />
        )}

        {activeTab === 'products' && (
          <ProductsSection
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
            onOpenCookingGuide={() => setIsCookingGuideOpen(true)}
          />
        )}

        {activeTab === 'rates' && <RatesSection />}

        {activeTab === 'store' && <StoreSection />}

        {/* Footer info inside website */}
        <footer className="mt-12 pt-6 border-t border-stone-200/80 text-center text-xs text-stone-500 space-y-1.5">
          <p className="font-bold text-stone-800 text-sm">
            {language === 'en' ? STORE_INFO.nameEn : language === 'hi' ? STORE_INFO.nameHi : STORE_INFO.nameBn}
          </p>
          <p className="font-semibold text-amber-700 uppercase tracking-wider text-[10px]">
            {language === 'en' ? 'Proprietor' : language === 'hi' ? 'संचालक' : 'প্রোপ্রাইটর'}: {language === 'en' ? STORE_INFO.proprietorEn : language === 'hi' ? STORE_INFO.proprietorHi : STORE_INFO.proprietorBn}
          </p>
          <p className="text-stone-500">
            {language === 'en' ? STORE_INFO.taglineEn : language === 'hi' ? STORE_INFO.taglineHi : STORE_INFO.taglineBn}
          </p>
          <p>
            {language === 'en' ? STORE_INFO.addressEn : language === 'hi' ? STORE_INFO.addressHi : STORE_INFO.addressBn}
          </p>
          <p className="text-[11px] text-stone-400">
            {language === 'en'
              ? `Phone: ${STORE_INFO.phoneDisplay} (${STORE_INFO.phoneTimingEn}) | Wholesale & Retail`
              : language === 'hi'
              ? `मोबाइल: ${STORE_INFO.phoneDisplay} (${STORE_INFO.phoneTimingHi}) | थोक एवं खुदरा`
              : `মোবাইল: ${STORE_INFO.phoneDisplay} (${STORE_INFO.phoneTimingBn}) | পাইকারি ও খুচরো`}
          </p>
        </footer>
      </main>

      {/* Floating WhatsApp Quick Connect & Inquiry (Only floating button active) */}
      <FloatingWhatsApp
        isOpen={isWhatsAppOpen}
        onOpen={() => setIsWhatsAppOpen(true)}
        onClose={() => setIsWhatsAppOpen(false)}
      />

      {/* Rice Cooking Guide & Grain Quality Modal */}
      <CookingGuideModal
        isOpen={isCookingGuideOpen}
        onClose={() => setIsCookingGuideOpen(false)}
      />

      {/* The 4-Option Apple-Style (iOS) Bottom Navigation Bar - Hidden when WhatsApp modal is open */}
      {!isWhatsAppOpen && (
        <BottomNavBar
          activeTab={activeTab}
          onSelectTab={handleSelectTab}
        />
      )}
    </div>
  );
}

import React from 'react';
import { Phone, Wheat, TrendingUp, ChefHat } from 'lucide-react';
import { STORE_INFO } from '../data/riceData';
import { NavTabId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderProps {
  onSelectTab: (tab: NavTabId) => void;
  onOpenCookingGuide?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSelectTab, onOpenCookingGuide }) => {
  const { t, language } = useLanguage();

  const getLocalizedStoreName = () => {
    if (language === 'en') return STORE_INFO.nameEn;
    if (language === 'hi') return STORE_INFO.nameHi;
    return STORE_INFO.nameBn;
  };

  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 text-stone-100 backdrop-blur-md border-b border-amber-900/30 shadow-md">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-stone-950 text-xs font-bold py-1 px-4 text-center flex items-center justify-center gap-2">
        <span className="bg-red-700 text-white text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded shadow-sm animate-pulse">
          {t.noOnlineDeliveryNotice}
        </span>
        <span className="truncate hidden sm:inline">
          {t.noOnlineDeliveryDesc} | {t.phoneLabel}: {STORE_INFO.phoneDisplay}
        </span>
        <span className="truncate sm:hidden">
          {STORE_INFO.phoneDisplay}
        </span>
      </div>

      <div className="w-full max-w-5xl mx-auto px-3 sm:px-4 py-2 flex items-center justify-between gap-2 overflow-hidden">
        {/* Brand Identity */}
        <button
          onClick={() => onSelectTab('home')}
          className="flex items-center gap-2 text-left group transition min-w-0 shrink"
          aria-label={t.storeName}
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-stone-950 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform shrink-0">
            <Wheat className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
          </div>
          <div className="min-w-0 truncate">
            <div className="flex items-center gap-1.5">
              <h1 className="text-sm sm:text-lg font-extrabold text-amber-300 tracking-tight leading-tight truncate font-['Hind_Siliguri']">
                {getLocalizedStoreName()}
              </h1>
              <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 font-medium px-1.5 py-0.2 rounded-full hidden md:inline-block shrink-0">
                {language === 'en' ? 'Kalna RMC' : language === 'hi' ? 'कालना आरएमसी' : 'কালনা আরএমসি'}
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-stone-400 font-medium tracking-wide truncate">
              {t.proprietor} | {t.wholesale} & {t.retail}
            </p>
          </div>
        </button>

        {/* Quick Actions (Compact on mobile to guarantee no horizontal overflow) */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Header Language Switcher */}
          <LanguageSwitcher variant="compact" />

          {/* Quick Cooking Guide Button */}
          {onOpenCookingGuide && (
            <button
              onClick={onOpenCookingGuide}
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-300 border border-amber-500/30 text-xs font-semibold transition"
              title={language === 'en' ? 'Cooking Guide' : language === 'hi' ? 'कुकिंग गाइड' : 'রান্নার গাইড'}
            >
              <ChefHat className="w-4 h-4 text-amber-400" />
              <span>{language === 'en' ? 'Cooking Guide' : language === 'hi' ? 'कुकिंग गाइड' : 'রান্নার গাইড'}</span>
            </button>
          )}

          {/* Direct Phone Call Button - Compact on mobile */}
          <a
            href={`tel:${STORE_INFO.phone}`}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs shadow-md transition active:scale-95 shrink-0"
            title={
              language === 'en'
                ? 'Call 81456 25847 (Confirm Status)'
                : language === 'hi'
                ? 'कॉल करें 81456 25847 (स्थिति की पुष्टि करें)'
                : 'ফোন করুন: ৮১৪৫৬ ২৫৮৪৭ (দোকান খোলা আছে কি না নিশ্চিত করুন)'
            }
          >
            <Phone className="w-3.5 h-3.5 fill-stone-950" />
            <span className="hidden xs:inline sm:inline">
              {language === 'en' ? 'Call' : language === 'hi' ? 'कॉल' : 'ফোন'}
            </span>
          </a>

          {/* Live Daily Rates Button */}
          <button
            id="header-rates-btn"
            onClick={() => onSelectTab('rates')}
            className="relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold transition cursor-pointer active:scale-95 shrink-0"
            aria-label={t.navRates}
            title={t.navRates}
          >
            <TrendingUp className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">{t.navRates}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

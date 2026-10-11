import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AppLanguage } from '../types';
import { Globe, Check } from 'lucide-react';

interface LanguageSwitcherProps {
  variant?: 'home-banner' | 'compact' | 'header';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ variant = 'compact' }) => {
  const { language, setLanguage, t } = useLanguage();

  const languages: { id: AppLanguage; label: string; subLabel: string; flag: string }[] = [
    { id: 'bn', label: 'বাংলা', subLabel: 'Bengali', flag: '🇧🇩' },
    { id: 'en', label: 'English', subLabel: 'ইংরেজি', flag: '🇬🇧' },
    { id: 'hi', label: 'हिन्दी', subLabel: 'Hindi', flag: '🇮🇳' },
  ];

  if (variant === 'home-banner') {
    return (
      <div className="w-full bg-gradient-to-r from-amber-900/90 via-stone-900 to-amber-950 text-white rounded-2xl p-3 sm:p-4 shadow-md border border-amber-500/20 mb-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 text-center sm:text-left">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 flex items-center justify-center shrink-0 border border-amber-400/30">
              <Globe className="w-4 h-4 text-amber-300" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-300 block tracking-wide">
                🌐 {t.languageSelectLabel} / Language Switcher
              </span>
              <p className="text-[11px] text-stone-300">
                বাংলা, English বা हिन्दी বেছে নিন — পুরো ওয়েবসাইটের সব লেখা পরিবর্তিত হবে
              </p>
            </div>
          </div>

          {/* 3-Language Segmented Switcher */}
          <div className="flex items-center bg-black/40 p-1 rounded-xl border border-white/10 w-full sm:w-auto justify-center">
            {languages.map((lang) => {
              const isActive = language === lang.id;
              return (
                <button
                  key={lang.id}
                  onClick={() => setLanguage(lang.id)}
                  className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95 ${
                    isActive
                      ? 'bg-amber-500 text-stone-950 shadow-md font-black ring-1 ring-amber-300'
                      : 'text-stone-300 hover:text-white hover:bg-white/5'
                  }`}
                  aria-pressed={isActive}
                >
                  <span className="text-sm">{lang.flag}</span>
                  <span>{lang.label}</span>
                  {isActive && <Check className="w-3 h-3 text-stone-950 stroke-[3]" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Header / Compact Variant
  return (
    <div className="inline-flex items-center bg-stone-100 p-0.5 rounded-xl border border-stone-200 text-xs">
      {languages.map((lang) => {
        const isActive = language === lang.id;
        return (
          <button
            key={lang.id}
            onClick={() => setLanguage(lang.id)}
            className={`px-2 py-1 rounded-lg font-bold text-[11px] sm:text-xs transition-all ${
              isActive
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
            title={`Switch to ${lang.label}`}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
};

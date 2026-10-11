import React, { useState } from 'react';
import {
  Wheat,
  ShieldCheck,
  Store,
  Sparkles,
  ArrowRight,
  Phone,
  Star,
  MapPin,
  ChefHat,
  Navigation,
  ZoomIn,
} from 'lucide-react';
import { RICE_PRODUCTS, STORE_INFO } from '../data/riceData';
import { NavTabId, RiceProduct } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { LiveStoreStatus } from './LiveStoreStatus';
import { WhatsAppLogo } from './WhatsAppLogo';
import { RiceBagModal } from './RiceBagModal';


interface HomeSectionProps {
  onSelectTab: (tab: NavTabId) => void;
  onSelectCategory: (category: string) => void;
  onOpenCookingGuide?: () => void;
  onOpenWhatsApp?: () => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  onSelectTab,
  onSelectCategory,
  onOpenCookingGuide,
}) => {
  const { t, language, setLanguage, getProductName, getProductTagline, getProductDesc, getProductCategory } =
    useLanguage();
  const [selectedBagProduct, setSelectedBagProduct] = useState<RiceProduct | null>(null);
  const bestsellers = RICE_PRODUCTS.filter((p) => p.isBestseller).slice(0, 4);
  const bagProducts = RICE_PRODUCTS.filter((p) => Boolean(p.bagImage));

  const getLocalizedAddress = () => {
    if (language === 'en') return STORE_INFO.addressEn;
    if (language === 'hi') return STORE_INFO.addressHi;
    return STORE_INFO.addressBn;
  };

  const categories = [
    {
      id: 'minikit',
      name: t.catMinikit,
      desc: language === 'en' ? 'Daily meal favorite' : language === 'hi' ? 'दैनिक भोजन के लिए' : 'দৈনন্দিন ঝরঝরে ভাত',
      icon: '🍚',
      color: 'from-amber-50 to-amber-100 border-amber-200',
    },
    {
      id: 'oil',
      name: t.catOil,
      desc: language === 'en' ? 'Saloni Kacchi Ghani' : language === 'hi' ? 'सलोनी कच्ची घानी' : 'সালোনি ১L পাউচ ও বোতল',
      icon: '🛢️',
      color: 'from-yellow-50 to-yellow-100 border-yellow-200',
    },
    {
      id: 'atta',
      name: t.catAtta,
      desc: language === 'en' ? 'MP Sharbati Chakki' : language === 'hi' ? 'एमपी शरबती चक्की' : 'এমপি শরবতী খাঁটি আটা',
      icon: '🌾',
      color: 'from-orange-50 to-orange-100 border-orange-200',
    },
    {
      id: 'gobindobhog',
      name: t.catGobindobhog,
      desc: language === 'en' ? 'Fragrant Pulao & Kheer' : language === 'hi' ? 'सुगंधित पुलाव एवं खीर' : 'সুগন্ধি পোলাও ও পায়েস',
      icon: '✨',
      color: 'from-emerald-50 to-emerald-100 border-emerald-200',
    },
    {
      id: 'basmati',
      name: t.catBasmati,
      desc: language === 'en' ? 'Biryani long grain' : language === 'hi' ? 'शाही बिरयानी स्पेशल' : 'বিরিয়ানি স্পেশাল লং গ্রেন',
      icon: '👑',
      color: 'from-indigo-50 to-indigo-100 border-indigo-200',
    },
    {
      id: 'boiled',
      name: t.catBoiled,
      desc: language === 'en' ? 'Soft & nutritious' : language === 'hi' ? 'मुलायम एवं पौष्टिक' : 'নরম ও পুষ্টিকর চাল',
      icon: '🌾',
      color: 'from-amber-50 to-amber-100 border-amber-200',
    },
  ];

  return (
    <div className="space-y-6 pb-10 max-w-full overflow-hidden">
      {/* 1. Simplified & Stylish Top Action Bar (Light Mode) */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-1">
        {/* Shop Live Status Badge */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-emerald-600 border border-stone-200 shadow-sm text-[11px] font-black">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>
              {language === 'en' ? 'Shop Open (Ask via WhatsApp)' : language === 'hi' ? 'दुकान खुली है (व्हाट्सएप पर पूछें)' : 'দোকান খোলা (হোয়াটসঅ্যাপে জিজ্ঞাসা করুন)'}
            </span>
          </div>
          <span className="text-[11px] font-bold text-amber-700 bg-white px-2.5 py-1.5 rounded-full border border-stone-200 shadow-sm hidden xs:inline">
            📞 81456 25847
          </span>
        </div>

        {/* Minimal Language Switcher */}
        <div className="flex items-center bg-white p-1 rounded-full shadow-sm border border-stone-200">
          {(
            [
              { id: 'bn' as const, flag: '🇮🇳', label: 'বাংলা' },
              { id: 'en' as const, flag: '🇬🇧', label: 'EN' },
              { id: 'hi' as const, flag: '🇮🇳', label: 'हिन्दी' },
            ]
          ).map((lang) => {
            const isActive = language === lang.id;
            return (
              <button
                key={lang.id}
                onClick={() => setLanguage(lang.id)}
                className={`px-3 py-1 rounded-full text-[10px] font-black transition-all active:scale-95 cursor-pointer flex items-center gap-1 ${
                  isActive
                    ? 'bg-amber-500 text-stone-950 shadow-inner'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                <span className="opacity-80">{lang.flag}</span>
                {lang.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Indian Style Hero Section - Simple, Stylish & Focused (Light) */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-white text-stone-900 shadow-2xl border border-stone-200 p-6 sm:p-10">
        {/* 🇮🇳 Original Indian Flag Tricolor Ambient Glow Layers (Subtle for light theme) */}
        <div className="absolute -top-32 -left-32 w-[30rem] h-[30rem] bg-[#FF9933] opacity-10 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] bg-[#138808] opacity-10 blur-[120px] pointer-events-none" />
        
        {/* Extra Center Accent */}
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#FF9933] opacity-[0.05] blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#138808] opacity-[0.05] blur-[100px] pointer-events-none" />
        
        {/* Ethnic Background Pattern Motif (Subtle) */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-multiply overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 border-[32px] border-stone-900 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 border-[24px] border-stone-900 rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative z-10 max-w-2xl space-y-5">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-amber-600 text-[10px] font-black uppercase tracking-widest">
            <Sparkles className="w-3 h-3" />
            <span>{t.heroGreeting}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1] font-['Hind_Siliguri']">
            {language === 'en' ? 'Gopal' : language === 'hi' ? 'गोपाल' : 'গোপাল'}{' '}
            <span className="text-amber-600">{language === 'en' ? 'Rice' : language === 'hi' ? 'चावल' : 'চাল'}</span>
            <br />
            <span className="bg-gradient-to-r from-stone-700 via-stone-900 to-black bg-clip-text text-transparent">
              {t.heroTitle}
            </span>
          </h1>

          <p className="text-sm sm:text-base text-stone-400 leading-relaxed max-w-lg font-medium">
            {t.heroSubtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3.5 pt-4">
            <button
              onClick={() => onSelectTab('products')}
              className="px-7 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-sm shadow-xl shadow-amber-500/20 transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <span>{t.heroExploreBtn}</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </button>

            {/* 🇮🇳 WhatsApp Inquiry with Heavy Indian Flag Tricolor Blur Glow */}
            <div className="relative group">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#FF9933] via-white to-[#138808] opacity-100 blur-md group-hover:blur-xl transition-all duration-300 animate-pulse" />
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                  language === 'en' ? 'Hello, I want to inquire about rice rates.' : language === 'hi' ? 'नमस्ते, मैं चावल के भाव जानना चाहता हूँ।' : 'নমস্কার, আমি চালের দরদাম জানতে চাই।'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-sm shadow-xl transition-all active:scale-95 cursor-pointer"
              >
                <WhatsAppLogo className="w-5 h-5" />
                <span>{language === 'en' ? 'Inquiry' : language === 'hi' ? 'पूछताछ' : 'ইনকোয়ারি'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid (Clean & Simple) */}
        <div className="grid grid-cols-3 gap-3 pt-8 mt-10 border-t border-stone-200">
          {[
            { label: '100%', sub: t.feature1Title },
            { label: t.wholesale, sub: t.feature2Title },
            { label: 'Kalna RMC', sub: t.feature3Title }
          ].map((item, i) => (
            <div key={i} className="text-center group">
              <div className="text-amber-600 text-xl font-black group-hover:scale-110 transition-transform">{item.label}</div>
              <div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">{item.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Address & Mandatory Shop Visit Notice (Simplified) */}
      <div className="bg-amber-50/80 border border-amber-200/60 rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
        <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200 shadow-sm">
          <MapPin className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <div className="text-[11px] font-black text-amber-800 uppercase tracking-widest mb-0.5">
            📍 {t.storeAddressHeading}
          </div>
          <div className="text-xs text-stone-700 font-medium leading-relaxed">
            {getLocalizedAddress()}. <span className="font-bold text-red-700 underline decoration-red-700/30 underline-offset-2">{t.noOnlineDeliveryNotice}:</span> {t.noOnlineDeliveryDesc}
          </div>
        </div>
        <a
          href={STORE_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl bg-stone-900 text-amber-400 font-black text-xs shadow-md hover:bg-black transition active:scale-95 shrink-0 flex items-center gap-1.5"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>{language === 'en' ? 'Get Directions' : language === 'hi' ? 'रास्ता देखें' : 'ম্যাপে দেখুন'}</span>
        </a>
      </div>


      {/* Quick Category Navigation */}
      <section>
        <div className="flex items-center justify-between mb-3 px-1">
          <h3 className="text-base sm:text-lg font-bold text-stone-900 flex items-center gap-2">
            <Wheat className="w-5 h-5 text-amber-600" />
            <span>{t.productsTitle}</span>
          </h3>
          <button
            onClick={() => {
              onSelectCategory('all');
              onSelectTab('products');
            }}
            className="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1"
          >
            {t.catAll} <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                onSelectCategory(cat.id);
                onSelectTab('products');
              }}
              className={`p-3.5 rounded-2xl bg-gradient-to-br ${cat.color} border text-left shadow-sm hover:shadow-md transition active:scale-98 flex flex-col justify-between`}
            >
              <div className="text-2xl mb-1">{cat.icon}</div>
              <div>
                <h4 className="font-bold text-stone-900 text-sm">{cat.name}</h4>
                <p className="text-[11px] text-stone-600">{cat.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 🌾 Authentic 26 KG Mill-Packed Rice Bags Showcase */}
      <section className="bg-white rounded-3xl p-4 sm:p-6 border border-stone-200 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                {language === 'en' ? 'Original Mill Packaging' : language === 'hi' ? 'असली मिल प्रिंटेड बोरी' : 'আসল মিলের ছাপা বস্তা'}
              </span>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                <span>⚡</span>
                <span>{language === 'en' ? 'Ultra Fast • 1GB RAM Ready' : language === 'hi' ? 'सुपर फास्ट • 1GB फोन फ्रेंडली' : '১ জিবি র‍্যামেও সুপার ফাস্ট • নো ল্যাগ'}</span>
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-stone-900">
              {language === 'en'
                ? 'Authentic 26 KG Rice Bags Collection'
                : language === 'hi'
                ? 'विशेष 26 किग्रा प्रिंटेड चावल बोरियां'
                : 'আমাদের আসল ছাপা ২৬ কেজি চালের বস্তা'}
            </h3>
            <p className="text-xs text-stone-500">
              {language === 'en'
                ? 'Original 26 kg mill-packed bags available at Kalna RMC Market store'
                : language === 'hi'
                ? 'कालना आरएमसी मार्केट दुकान पर सीधे उपलब्ध असली 26 किग्रा सीलबंद बोरियां'
                : 'কালনা আরএমসি মার্কেটের দোকানে সরাসরি আসল সিল করা ২৬ কেজির বস্তা পাওয়া যায়'}
            </p>
          </div>

          <button
            onClick={() => onSelectTab('products')}
            className="text-xs font-bold text-amber-700 hover:text-amber-800 self-start sm:self-auto flex items-center gap-1 cursor-pointer"
          >
            <span>{language === 'en' ? 'View All Rice' : language === 'hi' ? 'सभी चावल देखें' : 'সব চাল ও বস্তা দেখুন'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Bags Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {bagProducts.map((prod) => {
            const bag26 = prod.bagOptions.find((b) => b.weight === 26) || prod.bagOptions[0];
            return (
              <div
                key={prod.id}
                onClick={() => setSelectedBagProduct(prod)}
                className="group cursor-pointer rounded-2xl border border-stone-200 bg-stone-50/70 hover:bg-white hover:border-amber-500/50 hover:shadow-lg transition-all p-3 flex flex-col justify-between"
              >
                <div>
                  {/* Bag Photo Box */}
                  <div className="relative rounded-xl overflow-hidden bg-stone-950 p-2 border border-stone-800 flex items-center justify-center h-44 sm:h-52 mb-2.5 shadow-inner">
                    <img
                      src={prod.bagImage}
                      alt={prod.bagBrandName || prod.nameBn}
                      className="max-h-40 sm:max-h-48 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-200"
                      loading="lazy"
                      decoding="async"
                      width={600}
                      height={800}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-1.5 left-1.5 bg-amber-500 text-stone-950 text-[9px] font-black px-2 py-0.5 rounded-full shadow">
                      {prod.bagWeightLabel || '২৬ কেজি বস্তা'}
                    </div>
                    <div className="absolute bottom-1.5 right-1.5 bg-black/85 text-white text-[10px] font-bold px-2 py-0.5 rounded-lg flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-3 h-3 text-amber-400" />
                      <span>{language === 'en' ? 'Zoom' : language === 'hi' ? 'बड़ा देखें' : 'বড় ছবি'}</span>
                    </div>
                  </div>

                  {/* Brand & Name */}
                  <div className="text-[10px] font-bold text-amber-700 truncate mb-0.5">
                    {prod.bagBrandName}
                  </div>
                  <h4 className="text-xs sm:text-sm font-black text-stone-900 line-clamp-1 group-hover:text-amber-700 transition-colors">
                    {getProductName(prod)}
                  </h4>
                  <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                    {prod.taglineBn}
                  </p>
                </div>

                <div className="pt-2 mt-2 border-t border-stone-200/80 flex items-center justify-between gap-1">
                  <div>
                    <span className="text-[9px] text-stone-400 uppercase font-bold block truncate max-w-[110px]">
                      {bag26.label || (prod.category === 'oil' ? 'প্যাক দর' : 'বস্তা দর')}
                    </span>
                    <span className="text-sm sm:text-base font-black text-amber-700">
                      ₹{bag26.retailPrice}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <a
                      href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                        language === 'en'
                          ? `Hello Gopal Chal Bhandar, I saw the original photo of ${prod.nameEn}. Please share today's rate and stock.`
                          : language === 'hi'
                          ? `नमस्ते गोपाल चावल भंडार, मैंने ${prod.nameHi || prod.nameBn} की असली फोटो देखी। आज का रेट बताएं।`
                          : `নমস্কার গোপাল চাল ভাণ্ডার, আমি ${prod.nameBn}-এর আসল ছবি দেখলাম। আজকের দর কত?`
                      )}`}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1caa4f] text-white shadow-sm transition active:scale-95 cursor-pointer flex items-center justify-center"
                      title="WhatsApp"
                    >
                      <WhatsAppLogo className="w-4 h-4 fill-white" />
                    </a>
                    <a
                      href={`tel:${STORE_INFO.phone}`}
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 shadow-sm transition active:scale-95 cursor-pointer flex items-center justify-center"
                      title="Call Store"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-800" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Bestseller Rice Products */}
      <section>
        <div className="flex items-center justify-between mb-4 px-1">
          <div>
            <h3 className="text-base sm:text-xl font-bold text-stone-900 flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span>
                {t.productsTitle}{' '}
                {language === 'en'
                  ? '(Bestsellers)'
                  : language === 'hi'
                  ? '(सबसे ज्यादा बिकने वाले)'
                  : '(সবচেয়ে বেশি বিক্রিত)'}
              </span>
            </h3>
            <p className="text-xs text-stone-500">{t.productsSubtitle}</p>
          </div>
          <button
            onClick={() => onSelectTab('products')}
            className="text-xs font-bold text-amber-700 hover:text-amber-800"
          >
            {t.catAll} →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bestsellers.map((product) => {
            const popularBag = product.bagOptions.find((b) => b.isPopular) || product.bagOptions[0];

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/90 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                      {getProductCategory(product.category)}
                    </span>
                    <span className="text-xs font-medium text-stone-500 flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      {product.rating} ({product.reviewsCount}+ reviews)
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-stone-900 leading-snug">
                    {getProductName(product)}
                  </h4>
                  <p className="text-xs text-stone-500 font-medium mb-2">{getProductTagline(product)}</p>
                  <p className="text-xs text-stone-600 line-clamp-2 mb-3">{getProductDesc(product)}</p>

                  <div className="flex items-center gap-3 text-xs text-stone-500 mb-4 pb-3 border-b border-stone-100">
                    <span className="bg-stone-100 px-2 py-1 rounded">
                      {t.grainTypeLabel}: {product.grainType}
                    </span>
                    <span className="bg-stone-100 px-2 py-1 rounded">
                      {t.originLabel}: {product.origin}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 pt-1">
                  <div>
                    <span className="text-[11px] text-stone-500 block">
                      {popularBag.label}
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-extrabold text-amber-700">
                        ₹{popularBag.retailPrice}
                      </span>
                      <span className="text-[11px] text-stone-400">
                        (₹{product.pricePerKg}/{t.kgUnit})
                      </span>
                    </div>
                  </div>

                  <button
                    id={`bestseller-rates-${product.id}`}
                    type="button"
                    onClick={() => {
                      onSelectCategory(product.category);
                      onSelectTab('products');
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-amber-600 text-white text-xs font-bold shadow transition active:scale-95 cursor-pointer"
                  >
                    <span>{language === 'en' ? 'Check Rates' : language === 'hi' ? 'दाम देखें' : 'দর দেখুন'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Rice Cooking Guide & Grain Quality Secrets Promo */}
      {onOpenCookingGuide && (
        <section className="bg-gradient-to-r from-amber-800 via-amber-900 to-stone-900 rounded-3xl p-5 sm:p-6 text-white shadow-lg border border-amber-700/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-500/30">
              <ChefHat className="w-8 h-8 stroke-[2]" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[11px] font-bold mb-1">
                <Sparkles className="w-3 h-3" />
                <span>
                  {language === 'en'
                    ? 'Cooking Perfection Secrets'
                    : language === 'hi'
                    ? 'स्वादिष्ट चावल पकाने के टिप्स'
                    : 'ঝরঝরে সুস্বাদু ভাত রান্নার গাইড'}
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-black text-amber-100">
                {language === 'en'
                  ? 'Rice Cooking Guide & Quality Secrets'
                  : language === 'hi'
                  ? 'चावल कुकिंग गाइड एवं जल-अनुपात'
                  : 'চালের রান্নার গাইড, জলের সঠিক মাপ ও গুণমান নির্দেশিকা'}
              </h4>
              <p className="text-xs text-stone-300 mt-0.5 max-w-xl leading-relaxed">
                {language === 'en'
                  ? 'Check ideal water ratios, cooking minutes, pre-soaking tips and dish pairings for Minikit, Gobindobhog, Basmati & Dudheswar.'
                  : language === 'hi'
                  ? 'मिनीकेट, गोबिंदभोग, बासमती और दूधेश्वर के लिए पानी का सही नाप, समय और खास शेफ टिप्स जानें।'
                  : 'মিনিকেট, গোবিন্দভোগ, বাসমতী ও দুধেশ্বর চালের জন্য জলের খাঁটি মাপ, ফোটানোর সময় ও গোপন রাঁধুনি টিপস দেখুন।'}
              </p>
            </div>
          </div>

          <button
            onClick={onOpenCookingGuide}
            className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs sm:text-sm shadow-md transition active:scale-95 shrink-0 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>
              {language === 'en' ? 'Open Cooking Guide' : language === 'hi' ? 'कुकिंग गाइड खोलें' : 'রান্নার গাইড দেখুন'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>
      )}

      {/* Prominent Direct Phone Call Banner (Light Mode) */}
      <section className="relative overflow-hidden bg-stone-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-stone-800">
        {/* 🇮🇳 Original Indian Flag Tricolor Ambient Glow Background Layers */}
        <div className="absolute -top-16 -right-16 w-80 h-80 bg-[#FF9933] opacity-20 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-[#138808] opacity-20 blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5 text-left w-full md:w-auto">
            {/* BIG BOLD PHONE ICON */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-amber-500/10 border-2 border-amber-500/30 flex items-center justify-center shrink-0 shadow-lg">
              <Phone className="w-9 h-9 sm:w-11 sm:h-11 text-amber-400 fill-amber-400/20" />
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-black border border-amber-500/30 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                <span>
                  {language === 'en'
                    ? 'Confirm Status: 9:30 AM – 9:30 PM'
                    : language === 'hi'
                    ? 'स्थिति की पुष्टि करें: 9:30 AM – 9:30 PM'
                    : 'আসার আগে ফোন করে নিন: ৯:৩০ – ৯:৩০'}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {language === 'en'
                  ? 'Contact Gopal Chal Bhandar'
                  : language === 'hi'
                  ? 'गोपाल चावल भंडार से संपर्क करें'
                  : 'গোপাল চাল ভাণ্ডারে যোগাযোগ করুন'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-xl leading-relaxed font-medium">
                <span className="text-white">{t.proprietor}</span>
              </p>
              <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-xl leading-relaxed font-medium">
                {language === 'en'
                  ? 'The shop is open every day at the selected times. Please call or WhatsApp before coming to confirm current stock.'
                  : language === 'hi'
                  ? 'दुकान हर दिन चयनित समय पर खुली रहती है। कृपया आने से पहले वर्तमान स्टॉक की पुष्टि के लिए फोन या व्हाट्सएप करें।'
                  : 'দোকান প্রতিদিন নির্দিষ্ট সময়ে খোলা থাকে। তবুও আসার আগে বর্তমান স্টক সম্পর্কে নিশ্চিত হতে ফোন বা হোয়াটসঅ্যাপ করুন।'}
              </p>
            </div>
          </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
              {/* 🇮🇳 WhatsApp Inquiry with Indian Flag Blur Glow */}
              <div className="relative group w-full sm:w-auto">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#FF9933] via-white to-[#138808] opacity-100 blur-md group-hover:opacity-100 group-hover:blur-xl transition-all duration-300 pointer-events-none animate-pulse" />

                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                    language === 'en'
                      ? 'Hello Gopal Chal Bhandar, I want to inquire about today rice rates.'
                      : language === 'hi'
                      ? 'नमस्ते गोपाल चावल भंडार, मैं आज के चावल भाव की जानकारी चाहता हूँ।'
                      : 'নমস্কার গোপাল চাল ভাণ্ডার, আমি আজকের চালের দরদাম সম্পর্কে জানতে চাই।'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full sm:w-auto px-10 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-black text-sm flex items-center justify-center gap-2.5 shadow-xl transition cursor-pointer"
                  title="WhatsApp Inquiry"
                >
                  <WhatsAppLogo className="w-5 h-5" />
                  <span>
                    {language === 'en' ? 'WhatsApp Inquiry' : language === 'hi' ? 'व्हाट्सएप पूछताछ' : 'হোয়াটসঅ্যাপ ইনকোয়ারি'}
                  </span>
                </a>
              </div>
            </div>
        </div>

        {/* Quick Action Pills: WhatsApp & Google Maps Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-5 pt-5 border-t border-amber-500/20 text-xs">
          <a
            href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
              language === 'en'
                ? 'Hello Gopal Chal Bhandar, I need a wholesale quote for 10+ bags of rice.'
                : language === 'hi'
                ? 'नमस्ते गोपाल चावल भंडार, मुझे 10+ बोरी चावल का थोक कोटेशन चाहिए।'
                : 'নমস্কার গোপাল চাল ভাণ্ডার, আমার ১০+ বস্তা চালের পাইকারি কোটেশন প্রয়োজন।'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-stone-200 flex items-center justify-between transition group"
          >
            <span>💬 {language === 'en' ? 'WhatsApp Bulk Quotation' : language === 'hi' ? 'व्हाट्सएप थोक कोटेशन' : 'হোয়াটসঅ্যাপে পাইকারি কোটেশন'}</span>
            <WhatsAppLogo className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
          </a>

          <a
            href={STORE_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-amber-400/30 text-amber-300 flex items-center justify-between transition group"
            title="Open Gopal Chal Bhandar in Google Maps"
          >
            <span>📍 {language === 'en' ? 'Open Store in Google Maps' : language === 'hi' ? 'गूगल मैप पर दुकान खोलें' : 'গুগল ম্যাপে দোকান দেখুন'}</span>
            <Navigation className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </section>

      {/* Why Choose Gopal Chal Bhandar */}
      <section className="bg-amber-100/60 rounded-2xl p-5 border border-amber-200/80">
        <h3 className="text-base font-bold text-stone-900 mb-3 text-center">
          {t.storeName} — {t.storeTagline}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
          <div className="flex items-start gap-2.5 p-2.5 bg-white/80 rounded-xl">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs font-bold text-stone-900">{t.feature1Title}</h5>
              <p className="text-[11px] text-stone-600">{t.feature1Desc}</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-2.5 bg-white/80 rounded-xl">
            <Store className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs font-bold text-stone-900">{t.feature3Title}</h5>
              <p className="text-[11px] text-stone-600">{t.storeLandmarkText}</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-2.5 bg-white/80 rounded-xl">
            <Phone className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              <h5 className="text-xs font-bold text-stone-900">{t.feature4Title}</h5>
              <p className="text-[11px] text-stone-600">{t.feature4Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* High-Resolution Interactive Rice Bag Modal */}
      {selectedBagProduct && (
        <RiceBagModal
          product={selectedBagProduct}
          onClose={() => setSelectedBagProduct(null)}
        />
      )}
    </div>
  );
};

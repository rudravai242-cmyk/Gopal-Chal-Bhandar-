import React, { useState } from 'react';
import { X, Store, Phone, Eye, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/riceData';
import { RiceProduct } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { WhatsAppLogo } from './WhatsAppLogo';

interface RiceBagModalProps {
  product: RiceProduct | null;
  onClose: () => void;
}

export const RiceBagModal: React.FC<RiceBagModalProps> = ({ product, onClose }) => {
  const { language, getProductName, getGrainType, getProductOrigin } = useLanguage();
  const [activeView, setActiveView] = useState<'bag' | 'grain'>('bag');

  if (!product || !product.bagImage) return null;

  const bag26 = product.bagOptions.find((b) => b.weight === 26) || product.bagOptions[0];

  const getOwnerText = () => {
    if (language === 'en') return `Shop Owner - ${STORE_INFO.proprietorEn}`;
    if (language === 'hi') return `দোকানের মালিক - ${STORE_INFO.proprietorHi}`;
    return `দোকানের মালিক - ${STORE_INFO.proprietorBn}`;
  };

  const getWhatsAppMessage = () => {
    const isOil = product.category === 'oil';
    const isAtta = product.category === 'atta';
    const itemType = isOil ? 'সরিষার তেল' : isAtta ? 'আটা' : 'চাল';

    if (language === 'en') {
      return `Hello Gopal Chal Bhandar (${STORE_INFO.proprietorEn}), I saw the original photo of "${product.nameEn} (${product.bagBrandName || ''})". What is today's best rate and is it in stock at Kalna RMC market?`;
    }
    if (language === 'hi') {
      return `नमस्ते गोपाल चावल भंडार (${STORE_INFO.proprietorHi}), मैंने "${product.nameHi || product.nameBn}" की असली फोटो देखी। आज का रेट क्या है और कालना दुकान में स्टॉक उपलब्ध है?`;
    }
    return `নমস্কার গোপাল চাল ভাণ্ডার (${STORE_INFO.proprietorBn}), আমি "${product.nameBn} (${product.bagBrandName || ''})" এর আসল ছবি দেখলাম। আজকের দর কত এবং কালনা দোকানে কি স্টক আছে?`;
  };

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-2 sm:p-4 bg-black/95 backdrop-blur-md hw-accel"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-stone-900 text-stone-100 rounded-2xl sm:rounded-3xl border border-amber-500/50 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[88vh] sm:max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Clean & Focused */}
        <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 sm:py-3 border-b border-stone-800 bg-stone-950 shrink-0">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
              {product.category === 'oil' ? 'খাঁটি সরিষার তেল' : product.category === 'atta' ? 'খাঁটি গম আটা' : 'রাইস মিলের আসল বস্তা'}
            </span>
            <h3 className="text-xs sm:text-base font-black text-white leading-tight line-clamp-1">
              {getProductName(product)}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 flex items-center justify-center transition cursor-pointer shrink-0 ml-2"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* View Switcher: Real Bag/Bottle Photo vs Details View */}
        <div className="flex border-b border-stone-800 bg-stone-950/80 p-1.5 gap-1.5 shrink-0">
          <button
            type="button"
            onClick={() => setActiveView('bag')}
            className={`flex-1 py-1.5 px-2.5 rounded-lg text-[11px] sm:text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer ${
              activeView === 'bag'
                ? 'bg-amber-500 text-stone-950 shadow'
                : 'text-stone-400 hover:text-stone-200 bg-stone-900/50'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>
              {product.category === 'oil'
                ? (language === 'en' ? 'Original Saloni Photo' : language === 'hi' ? 'सलोनी ओरिजिनल फोटो' : 'আসল সালোনি ফটো')
                : product.category === 'atta'
                ? (language === 'en' ? 'Aashirvaad Atta Photo' : language === 'hi' ? 'आशीर्वाद आटा फोटो' : 'আশীর্বাদ আটার আসল ফটো')
                : (language === 'en' ? '26 KG Mill Bag Photo' : language === 'hi' ? '26 किग्रा प्रिंटेड बोरी फोटो' : '২৬ কেজি ছাপা বস্তার ফটো')}
            </span>
          </button>
          <button
            type="button"
            onClick={() => setActiveView('grain')}
            className={`flex-1 py-1.5 px-2.5 rounded-lg text-[11px] sm:text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer ${
              activeView === 'grain'
                ? 'bg-amber-500 text-stone-950 shadow'
                : 'text-stone-400 hover:text-stone-200 bg-stone-900/50'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {product.category === 'oil'
                ? (language === 'en' ? 'Purity & Grade' : language === 'hi' ? 'शुद्धता एवं ग्रेड' : 'খাঁটি মান ও গ্রেড')
                : product.category === 'atta'
                ? (language === 'en' ? 'Atta Quality' : language === 'hi' ? 'आटे की गुणवत्ता' : 'আটার গুণমান')
                : (language === 'en' ? 'Rice Grain Profile' : language === 'hi' ? 'चावल के दाने का विवरण' : 'চালের দানা ও রূপ')}
            </span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-2.5 sm:p-4 space-y-3 overscroll-contain">
          {activeView === 'bag' ? (
            /* Clean Authentic Packaging Photo Container without artificial badges */
            <div className="relative rounded-xl bg-stone-950 p-2 sm:p-3 border border-stone-800 flex items-center justify-center shadow-inner overflow-hidden">
              <img
                src={product.bagImage}
                alt={product.bagBrandName || product.nameBn}
                className="max-h-[260px] sm:max-h-[380px] w-auto object-contain rounded-lg drop-shadow-2xl"
                loading="eager"
                decoding="async"
                width={600}
                height={800}
                referrerPolicy="no-referrer"
              />
            </div>
          ) : (
            /* Grain Profile & Quality Characteristics */
            <div className="rounded-xl bg-stone-950 p-3.5 border border-stone-800 space-y-2.5 text-left">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <h4 className="text-xs sm:text-sm font-bold text-amber-300">
                  {language === 'en' ? 'Product Specifications' : language === 'hi' ? 'उत्पाद की विशेषताएँ' : 'পণ্যের গুণমান ও বৈশিষ্ট্য'}
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 rounded-lg bg-stone-900 border border-stone-800">
                  <span className="text-[9px] text-stone-400 block">{language === 'en' ? 'Category / Type' : 'ধরন'}</span>
                  <span className="font-bold text-white text-[11px] sm:text-xs truncate block">{getGrainType(product)}</span>
                </div>
                <div className="p-2 rounded-lg bg-stone-900 border border-stone-800">
                  <span className="text-[9px] text-stone-400 block">{language === 'en' ? 'Origin / Brand' : 'উৎস'}</span>
                  <span className="font-bold text-white text-[11px] sm:text-xs truncate block">{getProductOrigin(product)}</span>
                </div>
                <div className="p-2 rounded-lg bg-stone-900 border border-stone-800">
                  <span className="text-[9px] text-stone-400 block">{language === 'en' ? 'Specialty' : 'বিশেষত্ব'}</span>
                  <span className="font-bold text-amber-300 text-[11px] sm:text-xs truncate block">
                    {product.category === 'atta'
                      ? '০% ময়দা, নরম রুটি'
                      : product.category === 'oil'
                      ? 'তীব্র ঝাঁঝ, ১০০% খাঁটি'
                      : product.id === 'gobindo-bhog'
                      ? 'পায়েস ও খিচুড়ি'
                      : 'রোজকার ঝরঝরে ভাত'}
                  </span>
                </div>
                <div className="p-2 rounded-lg bg-stone-900 border border-stone-800">
                  <span className="text-[9px] text-stone-400 block">{language === 'en' ? 'Purity' : 'বিশুদ্ধতা'}</span>
                  <span className="font-bold text-emerald-400 text-[11px] sm:text-xs truncate block">১০০% আসল সিল প্যাক</span>
                </div>
              </div>

              <p className="text-[11px] sm:text-xs text-stone-300 leading-relaxed bg-stone-900/60 p-2.5 rounded-xl border border-stone-800">
                {language === 'en'
                  ? `Authentic factory-packed stock of ${product.nameEn} directly available at Gopal Chal Bhandar in Kalna RMC Market.`
                  : `গোপাল চাল ভাণ্ডারের প্রতিটি ${product.nameBn} সরাসরি কোম্পানি ও মিলের সিল করা আসল প্যাক। কোনো ভেজাল ছাড়া ১০০% খাঁটি মানের নিশ্চয়তা।`}
              </p>
            </div>
          )}

          {/* Bag Specifications */}
          <div className="bg-stone-950 rounded-xl p-3 border border-stone-800 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-stone-400">
                {language === 'en' ? 'Brand / Packaging:' : language === 'hi' ? 'ब्रांड / पैकेजिंग:' : 'ব্র্যান্ড ও প্যাক:'}
              </span>
              <span className="text-[11px] font-bold text-amber-300 text-right truncate max-w-[200px]">
                {product.bagBrandName || product.nameBn}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[11px] text-stone-400">
                {language === 'en' ? 'Pack / Weight:' : language === 'hi' ? 'वजन:' : 'ওজন ও সাইজ:'}
              </span>
              <span className="text-[11px] font-bold text-white">
                {product.bagWeightLabel || 'আসল প্যাক'}
              </span>
            </div>

            <div className="flex items-center justify-between pt-1.5 border-t border-stone-800">
              <div>
                <span className="text-[9px] text-stone-400 block">
                  {language === 'en' ? 'Estimated Price:' : language === 'hi' ? 'अनुमानित मूल्य:' : 'আনুমানিক দাম:'}
                </span>
                <span className="text-base sm:text-lg font-black text-amber-400">
                  ₹{bag26.retailPrice}
                </span>
                {bag26.wholesalePrice && (
                  <span className="text-[10px] text-emerald-400 ml-1.5 font-bold">
                    (পাইকারি: ₹{bag26.wholesalePrice})
                  </span>
                )}
              </div>
              <span className="text-[9px] text-stone-400 max-w-[140px] text-right">
                *দোকানে সরাসরি এসে যাচাই করুন
              </span>
            </div>
          </div>

          {/* Store Physical Pick-up Warning Notice */}
          <div className="bg-amber-950/25 border border-amber-500/25 rounded-xl p-2 flex items-start gap-2 text-[10px] sm:text-[11px] text-amber-200/90">
            <Store className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
            <p>
              {language === 'en'
                ? 'No home delivery. Please visit our store at Kalna RMC Market directly to purchase.'
                : language === 'hi'
                ? 'हम होम डिलीवरी नहीं करते हैं। कृपया कालना आरएमसी मार्केट की दुकान से सीधे खरीदारी करें।'
                : 'আমরা কোনো হোম ডেলিভারি করি না। কালনা আরএমসি মার্কেটের দোকানে সরাসরি এসে পণ্য সংগ্রহ করুন।'}
            </p>
          </div>
        </div>

        {/* Modal Footer Actions - PINNED STICKY AT BOTTOM FOR IMMEDIATE ACTION */}
        <div className="p-3 sm:p-3.5 border-t border-stone-800 bg-stone-950 flex items-center gap-2 shrink-0 shadow-[0_-8px_20px_rgba(0,0,0,0.5)]">
          <a
            id="modal-whatsapp-inquire-btn"
            href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(getWhatsAppMessage())}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1caa4f] text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition active:scale-98 cursor-pointer"
          >
            <WhatsAppLogo className="w-4 h-4 sm:w-5 sm:h-5 fill-white shrink-0" />
            <span className="truncate">
              {language === 'en'
                ? 'WhatsApp Inquire & Rate'
                : language === 'hi'
                ? 'व्हाट्सएप पर रेट पूछें'
                : 'হোয়াটসঅ্যাপে রেট ও স্টক জানুন'}
            </span>
          </a>

          <a
            id="modal-call-shop-btn"
            href={`tel:${STORE_INFO.phone}`}
            className="py-3 px-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-stone-950 font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow transition active:scale-98 cursor-pointer shrink-0"
            title="Call Store Owner"
          >
            <Phone className="w-4 h-4 text-stone-950 shrink-0" />
            <span>কল করুন</span>
          </a>
        </div>
      </div>
    </div>
  );
};

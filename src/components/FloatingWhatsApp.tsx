import React, { useState } from 'react';
import { Phone, ArrowLeft, Send } from 'lucide-react';
import { WhatsAppLogo } from './WhatsAppLogo';
import { STORE_INFO } from '../data/riceData';
import { useLanguage } from '../context/LanguageContext';

interface FloatingWhatsAppProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  isOpen,
  onOpen,
  onClose,
}) => {
  const { language } = useLanguage();
  const [customMsg, setCustomMsg] = useState('');

  const quickMessages = [
    {
      id: 'rate',
      titleBn: '🌾 আজকের চালের পাইকারি দর কত?',
      titleEn: "🌾 Today's wholesale rice rates?",
      titleHi: '🌾 आज के चावल के थोक भाव क्या हैं?',
      textBn: 'নমস্কার গোপাল চাল ভাণ্ডার, আজকের সুপার মিনিকেট ও বাসমতী চালের পাইকারি বস্তা দর কত জানাবেন?',
      textEn: 'Hello Gopal Chal Bhandar, please let me know today wholesale bag rates for Super Minikit and Basmati rice.',
      textHi: 'नमस्ते गोपाल चावल भंडार, कृपया आज के सुपर मिनिकिट और बासमती चावल के थोक बोरी भाव बताएं।'
    },
    {
      id: 'location',
      titleBn: '📍 কালনা আরএমসি মার্কেট দোকানের লোকেশন',
      titleEn: '📍 Kalna RMC Market store location',
      titleHi: '📍 कालना आरएमसी मार्केट दुकान की लोकेशन',
      textBn: 'নমস্কার, আমি কালনা আরএমসি মার্কেটে আপনাদের দোকানে আসতে চাই। ভোলেবাবা রেস্টুরেন্ট বা কুণ্ডু দোকানের কাছে পৌঁছানোর সঠিক দিকনির্দেশ দিন।',
      textEn: 'Hello, I want to visit your shop at Kalna RMC Market. Please share exact directions near Bholebaba Restaurant / Kundu shop.',
      textHi: 'नमस्ते, मैं कालना आरएमसी मार्केट में आपकी दुकान पर आना चाहता हूँ। कृपया सटीक रास्ता बताएं।'
    },
    {
      id: 'ceremony',
      titleBn: '💍 বিয়েবাড়ি / অনুষ্ঠানের জন্য ১০+ বস্তার কোটেশন',
      titleEn: '💍 Wedding / Catering 10+ bag wholesale discount quote',
      titleHi: '💍 शादी / कैटरिंग 10+ बोरी विशेष थोक कोटेशन',
      textBn: 'নমস্কার, আমাদের অনুষ্ঠানে ১০ বস্তা বা তার বেশি মিনিকেট ও সুগন্ধি গোবিন্দভোগ চালের প্রয়োজন। পাইকারি দর ও গাড়ি লোডিং সুবিধা সম্পর্কে জানতে চাই।',
      textEn: 'Hello, we require 10+ bags of Minikit and Gobindobhog rice for a catering ceremony. Please provide wholesale quotation and vehicle loading details.',
      textHi: 'नमस्ते, हमें शादी समारोह के लिए 10+ बोरी चावल की आवश्यकता है। कृपया थोक भाव और लोডিং की जानकारी दें।'
    },
    {
      id: 'stock-check',
      titleBn: '📦 চালের বস্তার বর্তমান দর ও স্টক যাচাই',
      titleEn: '📦 Check rice bag rates & stock availability',
      titleHi: '📦 चावल बोरी के वर्तमान भाव एवं स्टॉक की जानकारी',
      textBn: 'নমস্কার, আমি কালনা দোকানে আসার আগে নির্দিষ্ট চালের বস্তার বর্তমান পাইকারি দর ও স্টক সম্পর্কে নিশ্চিত হতে চাই।',
      textEn: 'Hello, I want to check current rice bag rates and availability before visiting your Kalna shop.',
      textHi: 'नमस्ते, मैं कालना दुकान आने से पहले चावल की बोरी का वर्तमान भाव और स्टॉक सुनिश्चित करना चाहता हूँ।'
    }
  ];

  const handleSendPredefined = (text: string) => {
    const url = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    const finalMsg = customMsg.trim() || (
      language === 'en'
        ? 'Hello Gopal Chal Bhandar, I would like to inquire about rice prices.'
        : language === 'hi'
        ? 'नमस्ते गोपाल चावल भंडार, मैं चावल के भाव के बारे में जानकारी चाहता हूँ।'
        : 'নমস্কার গোপাল চাল ভাণ্ডার, আমি চালের দরদাম সম্পর্কে জানতে চাই।'
    );
    const url = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, '_blank');
    setCustomMsg('');
    onClose();
  };

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex items-center gap-3">
          <div
            onClick={onOpen}
            className="hidden md:flex items-center gap-2 bg-white text-stone-900 text-xs font-bold py-2 px-3.5 rounded-full shadow-lg border border-stone-200 cursor-pointer hover:bg-stone-50 transition"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
            <span>
              {language === 'en'
                ? 'WhatsApp Us: 81456 25847'
                : language === 'hi'
                ? 'व्हाट्सएप सहायता: 81456 25847'
                : 'হোয়াটসঅ্যাপ সহায়তা: ৮১৪৫৬ ২৫৮৪৭'}
            </span>
          </div>

          <div className="relative group">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[#138808] via-white/50 to-[#FF9933] opacity-60 blur-lg group-hover:opacity-100 group-hover:blur-xl transition-all duration-300 pointer-events-none" />
            
            <button
              onClick={onOpen}
              aria-label="Open WhatsApp Quick Chat"
              className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-90 text-white flex items-center justify-center shadow-lg border-2 border-white transition-all cursor-pointer z-10"
            >
              <WhatsAppLogo className="w-9 h-9 sm:w-10 sm:h-10 text-white" />
              <span className="absolute top-0 right-0 w-4.5 h-4.5 bg-red-600 border-2 border-white rounded-full flex items-center justify-center text-[9px] font-black text-white shadow-md animate-bounce">
                1
              </span>
            </button>
          </div>
        </div>
      )}

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={onClose}
        >
          <div
            className="relative w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden border border-stone-200 flex flex-col max-h-[92vh] sm:max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-1.5 w-full bg-gradient-to-r from-[#FF9933] via-white to-[#138808] shrink-0" />

            <div className="relative z-10 bg-gradient-to-r from-[#075E54] to-[#128C7E] text-white p-4 sm:p-5 shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-white/20 p-1 flex items-center justify-center">
                    <WhatsAppLogo className="w-9 h-9" />
                  </div>
                  <div>
                    <h3 className="font-black text-base leading-snug">
                      {language === 'en' ? 'Gopal Chal Bhandar' : language === 'hi' ? 'गोपाल चावल भंडार' : 'গোপাল চাল ভাণ্ডার'}
                    </h3>
                    <p className="text-[10px] font-bold text-emerald-50 bg-white/10 px-1.5 py-0.5 rounded mt-0.5 inline-block">
                      {language === 'en' ? 'Proprietor: Ram Debnath' : language === 'hi' ? 'संचालक: राम देबनाथ' : 'প্রোপ্রাইটর: রাম দেবনাথ'}
                    </p>
                    <div className="flex items-center gap-1.5 text-[10px] text-emerald-100 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                      <span>{language === 'en' ? 'Official WhatsApp Desk' : language === 'hi' ? 'आधिकारिक व्हाट्सएप' : 'অফিসিয়াল হোয়াটসঅ্যাপ'}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-full text-xs font-bold transition flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? 'Back' : language === 'hi' ? 'वापस' : 'ফিরে যান'}</span>
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-5 overflow-y-auto space-y-4 bg-stone-50 flex-1">
              <div>
                <p className="text-[10px] font-bold text-stone-400 mb-2 uppercase tracking-widest">
                  {language === 'en' ? 'QUICK INQUIRIES' : language === 'hi' ? 'त्वरित प्रश्न' : 'দ্রুত বার্তা'}
                </p>
                <div className="space-y-2">
                  {quickMessages.map((item) => {
                    const title = language === 'en' ? item.titleEn : language === 'hi' ? item.titleHi : item.titleBn;
                    const text = language === 'en' ? item.textEn : language === 'hi' ? item.textHi : item.textBn;

                    return (
                      <button
                        key={item.id}
                        onClick={() => handleSendPredefined(text)}
                        className="w-full text-left p-3 rounded-xl bg-white hover:bg-emerald-50 border border-stone-200 hover:border-emerald-200 text-xs text-stone-700 font-bold shadow-sm transition flex items-center justify-between group cursor-pointer"
                      >
                        <span className="group-hover:text-emerald-700">{title}</span>
                        <Send className="w-3.5 h-3.5 text-stone-300 group-hover:text-emerald-500 transition shrink-0 ml-2" />
                      </button>
                    );
                  })}
                </div>
              </div>

              <form onSubmit={handleSendCustom} className="space-y-2 pt-2 border-t border-stone-200">
                <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                  {language === 'en' ? 'YOUR MESSAGE' : language === 'hi' ? 'आपका संदेश' : 'আপনার বার্তা'}
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={customMsg}
                    onChange={(e) => setCustomMsg(e.target.value)}
                    placeholder={language === 'en' ? 'Type here...' : language === 'hi' ? 'यहाँ लिखें...' : 'এখানে লিখুন...'}
                    className="flex-1 px-4 py-2.5 text-xs rounded-xl bg-white border border-stone-200 text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center gap-1.5 shadow-sm active:scale-95 transition cursor-pointer shrink-0"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>

              <div className="pt-2 flex items-center justify-between text-xs text-stone-500 border-t border-stone-200">
                <span>{language === 'en' ? 'Direct Call:' : language === 'hi' ? 'सीधा कॉल:' : 'সরাসরি ফোন:'}</span>
                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="font-bold text-amber-700 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200 flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>{STORE_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

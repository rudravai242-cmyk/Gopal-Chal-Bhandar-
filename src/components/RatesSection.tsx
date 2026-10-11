import React, { useState } from 'react';
import { TrendingUp, Sparkles, Phone, Calculator, CheckCircle } from 'lucide-react';
import { DAILY_MARKET_RATES, BULK_OFFERS, STORE_INFO } from '../data/riceData';
import { useLanguage } from '../context/LanguageContext';
import { WhatsAppLogo } from './WhatsAppLogo';

export const RatesSection: React.FC = () => {
  const { t, language } = useLanguage();

  // Calculator state
  const [calcBags, setCalcBags] = useState<number>(10);
  const [calcType, setCalcType] = useState<string>('minikit');

  const bagPriceMap: Record<string, { nameBn: string; nameEn: string; nameHi: string; rate26kg: number; wholesaleDiscount: number }> = {
    minikit: { nameBn: 'সুপার মিনিকেট (২৬ কেজি)', nameEn: 'Super Minikit (26 kg)', nameHi: 'सुपर मिनिकिट (26 किग्रा)', rate26kg: 1300, wholesaleDiscount: 40 },
    gobindobhog: { nameBn: 'সুগন্ধি গোবিন্দভোগ (২৫ কেজি)', nameEn: 'Aromatic Gobindobhog (25 kg)', nameHi: 'সুগন্ধিত গোবিন্দভোগ (25 किग्रा)', rate26kg: 2700, wholesaleDiscount: 80 },
    basmati: { nameBn: 'রয়্যাল বিরিয়ানি বাসমতী (২৫ কেজি)', nameEn: 'Royal Biryani Basmati (25 kg)', nameHi: 'रॉयल बिरयानी बासमती (25 किग्रा)', rate26kg: 3200, wholesaleDiscount: 100 },
    swarna: { nameBn: 'স্বর্ণ মোটা চাল (৫০ কেজি)', nameEn: 'Swarna Coarse Rice (50 kg)', nameHi: 'स्वर्ण मोटा चावल (50 किग्रा)', rate26kg: 1750, wholesaleDiscount: 50 },
    dudheswar: { nameBn: 'খাঁটি দুধেশ্বর (২৬ কেজি)', nameEn: 'Pure Dudheswar (26 kg)', nameHi: 'शुद्ध दूधेश्वर (26 किग्रा)', rate26kg: 1700, wholesaleDiscount: 50 },
  };

  const selectedCalc = bagPriceMap[calcType] || bagPriceMap.minikit;
  const selectedCalcName = language === 'en' ? selectedCalc.nameEn : language === 'hi' ? selectedCalc.nameHi : selectedCalc.nameBn;
  const regularTotal = selectedCalc.rate26kg * calcBags;
  const discountTotal = calcBags >= 5 ? selectedCalc.wholesaleDiscount * calcBags : 0;
  const estimatedTotal = regularTotal - discountTotal;

  return (
    <div className="space-y-6 pb-16 max-w-full overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-700 via-stone-800 to-amber-900 text-white rounded-3xl p-5 sm:p-6 shadow-lg">
        <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
          <TrendingUp className="w-4 h-4" />
          <span>
            {language === 'en'
              ? 'Bardhaman & Kalna Mandi Update'
              : language === 'hi'
              ? 'बर्धमान और कालना मंडी अपडेट'
              : 'বর্ধমান ও কালনা মণ্ডি আপডেট'}
          </span>
          <span className="ml-auto bg-white/10 px-2 py-0.5 rounded text-[10px] lowercase">
            {t.proprietor}
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black mb-2">
          {language === 'en'
            ? "Today's Fresh Rice Market Rates (Mandi Rate)"
            : language === 'hi'
            ? 'आज के ताजा चावल बाजार भाव (Mandi Rate)'
            : 'আজকের চালের তাজা বাজার দর (Mandi Rate)'}
        </h2>
        <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
          {language === 'en'
            ? 'Daily updated retail and wholesale sack prices. Special benefits and bulk savings for wholesale buyers and ceremonies.'
            : language === 'hi'
            ? 'दैनिक अद्यतन खुदरा और थोक बोरी भाव। थोक खरीदारों और समारोहों के लिए विशेष लाभ।'
            : 'দৈনিক হালনাগাদ করা খুচরো ও পাইকারি বস্তা দর। পাইকারি ক্রেতা ও অনুষ্ঠানের জন্য বিশেষ সুবিধা রয়েছে।'}
        </p>
      </div>

      {/* Daily Rates Table */}
      <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
        <div className="p-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between">
          <h3 className="text-sm sm:text-base font-bold text-stone-900 flex items-center gap-2">
            <span>
              🌾{' '}
              {language === 'en'
                ? 'Current Rice Price List'
                : language === 'hi'
                ? 'प्रमुख चावलों की वर्तमान मूल्य सूची'
                : 'প্রধান চালের বর্তমান মূল্য তালিকা'}
            </span>
          </h3>
          <span className="text-[11px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-full border border-emerald-200">
            {language === 'en' ? 'Updated Today' : language === 'hi' ? 'आज अपडेट' : 'আজকে আপডেট'}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="bg-stone-50 text-stone-500 uppercase text-[10px] font-bold border-b border-stone-100">
                <th className="py-2.5 px-3">{language === 'en' ? 'Rice Name' : language === 'hi' ? 'चावल का नाम' : 'চালের নাম'}</th>
                <th className="py-2.5 px-3">{language === 'en' ? 'Kg Rate (Retail)' : language === 'hi' ? 'प्रति किग्रा (खुदरा)' : 'কেজি দর (খুচরো)'}</th>
                <th className="py-2.5 px-3">{language === 'en' ? '26 Kg Bag' : language === 'hi' ? '26 किग्रा बोरी' : '২৬ কেজি বস্তা'}</th>
                <th className="py-2.5 px-3">{language === 'en' ? '50 Kg Bag' : language === 'hi' ? '50 किग्रा बोरी' : '৫০ কেজি বস্তা'}</th>
                <th className="py-2.5 px-3 text-right">{language === 'en' ? 'Market Trend' : language === 'hi' ? 'বাজার ট্রেন্ড' : 'বাজার ট্রেন্ড'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 font-medium text-stone-700">
              {DAILY_MARKET_RATES.map((rate) => {
                const itemName = language === 'en' ? rate.itemEn : language === 'hi' ? rate.itemHi || rate.itemBn : rate.itemBn;
                const changeLabel = language === 'en' ? rate.changeTextEn || rate.changeText : language === 'hi' ? rate.changeTextHi || rate.changeText : rate.changeText;

                return (
                  <tr key={rate.id} className="hover:bg-amber-50 transition">
                    <td className="py-3 px-3">
                      <div className="font-bold text-stone-900">{itemName}</div>
                      {language !== 'en' && (
                        <div className="text-[10px] text-stone-500">{rate.itemEn}</div>
                      )}
                    </td>
                    <td className="py-3 px-3 font-semibold text-amber-700">
                      {rate.retailPerKg}
                    </td>
                    <td className="py-3 px-3 font-semibold text-stone-800">
                      {rate.bag26kg}
                    </td>
                    <td className="py-3 px-3 font-semibold text-stone-800">
                      {rate.bag50kg}
                    </td>
                    <td className="py-3 px-3 text-right">
                      <span
                        className={`inline-block text-[11px] font-bold px-2 py-0.5 rounded-full ${
                          rate.trend === 'up'
                            ? 'bg-red-50 text-red-700 border border-red-200'
                            : rate.trend === 'down'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-stone-100 text-stone-500'
                        }`}
                      >
                        {changeLabel}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="p-3 bg-stone-50 text-[11px] text-stone-400 border-t border-stone-100 text-center">
          {language === 'en'
            ? '* Rates may slightly vary according to market dynamics and harvest season. Please contact directly for exact wholesale rates.'
            : language === 'hi'
            ? '* बाजार की स्थिति और फसल के मौसम के अनुसार दरों में थोड़ा अंतर हो सकता है। सटीक थोक भाव के लिए सीधे संपर्क करें।'
            : '* বাজার পরিস্থিতি ও ধান ওঠার মরসুম অনুযায়ী দরের সামান্য তারতম্য হতে পারে। সঠিক পাইকারি দরের জন্য সরাসরি যোগাযোগ করুন।'}
        </div>
      </div>

      {/* Bulk Ceremony Calculator */}
      <div className="bg-white rounded-2xl p-5 border border-amber-200/90 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center">
            <Calculator className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-stone-900">
              {language === 'en'
                ? 'Ceremony & Catering Wholesale Calculator'
                : language === 'hi'
                ? 'समारोह एवं कैटरिंग थोक कैलकुलेटर'
                : 'অনুষ্ঠান ও ক্যাটারিং পাইকারি ক্যালকুলেটর'}
            </h3>
            <p className="text-xs text-stone-500">
              {language === 'en'
                ? 'Enter bag count for wedding, rituals, or events to calculate instant estimated cost'
                : language === 'hi'
                ? 'शादी, अनुष्ठान या किसी भी समारोह के लिए बोरी संख्या दर्ज कर तुरंत अनुमानित खर्च देखें'
                : 'বিয়েবাড়ি, শ্রাদ্ধ বা যেকোনো অনুষ্ঠানের জন্য বস্তা সংখ্যা বসিয়ে সরাসরি আনুমানিক খরচ দেখুন'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div>
            <label className="text-xs font-bold text-stone-700 block mb-1">
              {t.ratesCalcChooseRice}:
            </label>
            <select
              value={calcType}
              onChange={(e) => setCalcType(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="minikit">{language === 'en' ? 'Super Minikit (26 kg bag)' : language === 'hi' ? 'सुपर मिनिकिट (26 किग्रा बोरी)' : 'সুপার মিনিকেট (২৬ কেজি বস্তা)'}</option>
              <option value="gobindobhog">{language === 'en' ? 'Aromatic Gobindobhog (25 kg bag)' : language === 'hi' ? 'সুগন্ধিত গোবিন্দভোগ (25 किग्रा बोरी)' : 'সুগন্ধি গোবিন্দভোগ (২৫ কেজি বস্তা)'}</option>
              <option value="basmati">{language === 'en' ? 'Royal Biryani Basmati (25 kg bag)' : language === 'hi' ? 'रॉयल बिरयानी बासमती (25 किग्रा बोरी)' : 'রয়্যাল বিরিয়ানি বাসমতী (২৫ কেজি বস্তা)'}</option>
              <option value="swarna">{language === 'en' ? 'Swarna Coarse Rice (50 kg bag)' : language === 'hi' ? 'स्वर्ण मोटा चावल (50 किग्रा बोरी)' : 'স্বর্ণ মোটা চাল (৫০ কেজি বস্তা)'}</option>
              <option value="dudheswar">{language === 'en' ? 'Pure Dudheswar (26 kg bag)' : language === 'hi' ? 'शुদ্ধ दूधेश्वर (26 किग्रा बोरी)' : 'খাঁটি দুধেশ্বর (২৬ কেজি বস্তা)'}</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-stone-700 block mb-1">
              {t.ratesCalcQuantity}:
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="1"
                max="200"
                value={calcBags}
                onChange={(e) => setCalcBags(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <div className="flex gap-1">
                {[5, 10, 25].map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setCalcBags(b)}
                    className="px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-stone-100 hover:bg-amber-100 text-stone-800"
                  >
                    {b} {language === 'en' ? 'Bags' : language === 'hi' ? 'बोरी' : 'টি'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Calculation Result */}
        <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <div className="text-xs text-stone-500">
              {language === 'en' ? 'Selected: ' : language === 'hi' ? 'चयनित: ' : 'নির্বাচিত: '}
              <strong className="text-stone-900">{selectedCalcName}</strong> × {calcBags} {language === 'en' ? 'Bags' : language === 'hi' ? 'बोरी' : 'বস্তা'}
            </div>
            {discountTotal > 0 ? (
              <div className="text-xs text-emerald-600 font-bold flex items-center gap-1 mt-0.5">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>
                  {language === 'en'
                    ? `Direct wholesale savings of ₹${discountTotal} applied!`
                    : language === 'hi'
                    ? `थोक ऑर्डर पर सीधे ₹${discountTotal} की छूट लागू!`
                    : `পাইকারি অর্ডারে সরাসরি ₹${discountTotal} সাশ্রয় প্রযোজ্য!`}
                </span>
              </div>
            ) : (
              <div className="text-xs text-stone-400 mt-0.5">
                {language === 'en'
                  ? 'Special wholesale discount applies on orders of 5 bags or more.'
                  : language === 'hi'
                  ? '5 बोरी या उससे अधिक के ऑर्डर पर विशेष छूट मिलती है।'
                  : '৫ বস্তা বা তার বেশি অর্ডারে বিশেষ ছাড় প্রযোজ্য হয়।'}
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-end sm:items-center gap-3">
            <div className="text-right">
              <span className="text-[11px] text-stone-400 block">
                {language === 'en' ? 'Estimated Total Price:' : language === 'hi' ? 'अनुমানित कुल मूल्य:' : 'আনুমানিক মোট মূল্য:'}
              </span>
              <span className="text-2xl font-black text-amber-600">₹{estimatedTotal}</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="px-3.5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-black flex items-center gap-1.5 shadow-sm transition active:scale-95"
                title={
                  language === 'en'
                    ? 'Call 81456 25847 (Confirm Status)'
                    : language === 'hi'
                    ? 'कॉल करें 81456 25847 (स्थिति की पुष्टि करें)'
                    : 'ফোন করুন: ৮১৪৫৬ ২৫৮৪৭ (দোকান খোলা আছে কি না নিশ্চিত করুন)'
                }
              >
                <Phone className="w-3.5 h-3.5 fill-stone-950" />
                <span>{language === 'en' ? 'Call' : language === 'hi' ? 'कॉल' : 'ফোন'}</span>
              </a>

              <div className="relative group">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#FF9933] via-white to-[#138808] opacity-80 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-300 pointer-events-none" />
                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                    language === 'en'
                      ? `Hello Gopal Chal Bhandar (Shop Owner - ${STORE_INFO.proprietorEn}), I calculated ${calcBags} bags of ${selectedCalcName}, total est. ₹${estimatedTotal}. Can I get current rate confirmation and availability at Kalna store?`
                      : language === 'hi'
                      ? `नमस्ते गोपाल चावल भंडार (दुकान के मालिक - ${STORE_INFO.proprietorHi}), मैंने ${selectedCalcName} के ${calcBags} बोरी का हिसाब निकाला (अनुमानित ₹${estimatedTotal})। कृपया कालना दुकान पर आज का पक्का रेट बताएं।`
                      : `নমস্কার গোপাল চাল ভাণ্ডার (দোকানের মালিক - ${STORE_INFO.proprietorBn}), আমি ${selectedCalcName}-এর ${calcBags} বস্তার হিসাব করেছি (আনুমানিক ₹${estimatedTotal})। কালনা দোকানের আজকের সেরা দর ও স্টক কনফার্ম করবেন?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative px-3.5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-black flex items-center gap-1.5 shadow-sm transition active:scale-95"
                  title="WhatsApp Inquiry"
                >
                  <WhatsAppLogo className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Special Bulk Offers */}
      <div className="space-y-3">
        <h3 className="text-base font-bold text-stone-900 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>
            {language === 'en'
              ? 'Special Wholesale Offers & Packages'
              : language === 'hi'
              ? 'विशेष थोक ऑफर और पैकेज'
              : 'বিশেষ পাইকারি অফার ও প্যাকেজ'}
          </span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {BULK_OFFERS.map((offer: any, idx) => {
            const title = language === 'en' ? offer.titleEn || offer.titleBn : language === 'hi' ? offer.titleHi || offer.titleBn : offer.titleBn;
            const desc = language === 'en' ? offer.descEn || offer.descBn : language === 'hi' ? offer.descHi || offer.descBn : offer.descBn;
            const badge = language === 'en' ? offer.badgeEn || offer.badgeBn : language === 'hi' ? offer.badgeHi || offer.badgeBn : offer.badgeBn;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 border border-stone-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 mb-2 inline-block border border-amber-200">
                    {badge}
                  </span>
                  <h4 className="font-bold text-stone-900 text-sm mb-1">{title}</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">{desc}</p>
                </div>

                <div className="pt-3 mt-3 border-t border-stone-100 flex items-center">
                  <div className="relative group w-full">
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#FF9933] via-white to-[#138808] opacity-80 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-300 pointer-events-none" />
                    <a
                      href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                        language === 'en'
                          ? `Hello Gopal Chal Bhandar, I am inquiring about the offer: "${title}".`
                          : language === 'hi'
                          ? `नमस्ते गोपाल चावल भंडार, मैं इस ऑफर के बारे में जानकारी चाहता हूँ: "${title}"।`
                          : `নমস্কার গোপাল চাল ভাণ্ডার, আমি এই অফার সম্পর্কে জানতে চাই: "${title}"।`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-full py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-black flex items-center justify-center gap-1.5 transition active:scale-95"
                      title="WhatsApp Offer Inquiry"
                    >
                      <WhatsAppLogo className="w-3.5 h-3.5" />
                      <span>{language === 'en' ? 'Inquire on WhatsApp' : language === 'hi' ? 'व्हाट्सएप पर पूछताछ करें' : 'হোয়াটসঅ্যাপে অফার ইনকোয়ারি'}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

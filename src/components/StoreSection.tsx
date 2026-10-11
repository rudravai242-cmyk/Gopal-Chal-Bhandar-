import React from 'react';
import {
  Store,
  MapPin,
  Clock,
  Phone,
  ShieldCheck,
  CreditCard,
  Award,
  ExternalLink,
  HelpCircle,
  Navigation,
} from 'lucide-react';
import { STORE_INFO } from '../data/riceData';
import { useLanguage } from '../context/LanguageContext';
import { WhatsAppLogo } from './WhatsAppLogo';

export const StoreSection: React.FC = () => {
  const { t, language } = useLanguage();

  const getLocalizedStoreName = () => {
    if (language === 'en') return STORE_INFO.nameEn;
    if (language === 'hi') return STORE_INFO.nameHi;
    return STORE_INFO.nameBn;
  };

  const getLocalizedAddress = () => {
    if (language === 'en') return STORE_INFO.addressEn;
    if (language === 'hi') return STORE_INFO.addressHi;
    return STORE_INFO.addressBn;
  };

  const getLocalizedProprietor = () => {
    if (language === 'en') return STORE_INFO.proprietorEn;
    if (language === 'hi') return STORE_INFO.proprietorHi;
    return STORE_INFO.proprietorBn;
  };

  const getLocalizedTiming = () => {
    if (language === 'en') return STORE_INFO.timingEn;
    if (language === 'hi') return STORE_INFO.timingHi;
    return STORE_INFO.timingBn;
  };

  return (
    <div className="space-y-6 pb-16 max-w-full overflow-hidden">
      {/* Store Banner */}
      <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-amber-900/30">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30 mb-2">
              <Store className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Kalna RMC Market' : language === 'hi' ? 'कालना आरएमसी मार्केट' : 'কালনা আরএমসি মার্কেট'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-amber-200">
              {getLocalizedStoreName()}
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-1">
              <strong className="text-white">{t.proprietor}</strong>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-md transition active:scale-95"
              title={
                language === 'en'
                  ? 'Call 81456 25847 (Confirm Current Stock)'
                  : language === 'hi'
                  ? 'कॉल करें 81456 25847 (स्टॉक की पुष्टि करें)'
                  : 'ফোন করুন: ৮১৪৫৬ ২৫৮৪৭ (স্টক নিশ্চিত করুন)'
              }
            >
              <Phone className="w-4 h-4 fill-stone-950" />
              <span>{language === 'en' ? 'Direct Call' : language === 'hi' ? 'सीधा कॉल' : 'সরাসরি ফোন'}</span>
            </a>

            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                language === 'en'
                  ? 'Hello Gopal Chal Bhandar, I am inquiring about rice varieties and wholesale rates.'
                  : language === 'hi'
                  ? 'नमस्ते गोपाल चावल भंडार, मैं चावल की किस्मों और थोक भाव के बारे में जानकारी चाहता हूँ।'
                  : 'নমস্কার গোপাল চাল ভাণ্ডার, আমি চালের জাত ও পাইকারি দর সম্পর্কে জানতে চাই।'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-md transition active:scale-95"
            >
              <WhatsAppLogo className="w-4 h-4" />
              <span>{language === 'en' ? 'WhatsApp Inquiry' : language === 'hi' ? 'व्हाट्सएप पूछताछ' : 'হোয়াটসঅ্যাপ ইনকোয়ারি'}</span>
            </a>

            <span className="text-[11px] font-bold text-amber-300 bg-black/40 border border-amber-500/30 px-3 py-1.5 rounded-xl">
              ⏰ {language === 'en' ? 'Open Everyday (Selected Times)' : language === 'hi' ? 'प्रतिदिन खुला (चयनित समय)' : 'প্রতিদিন খোলা (নির্দিষ্ট সময়)'}
            </span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-300">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block">{t.storeAddressHeading}:</strong>
              <span>{getLocalizedAddress()}</span>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block">{t.storeHoursHeading}:</strong>
              <span>{getLocalizedTiming()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Service Guarantees */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
            <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
          </div>
          <h4 className="font-bold text-stone-900 text-sm mb-1">{t.feature1Title}</h4>
          <p className="text-xs text-stone-500 leading-relaxed">
            {t.feature1Desc}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
            <CreditCard className="w-5 h-5 stroke-[2.2]" />
          </div>
          <h4 className="font-bold text-stone-900 text-sm mb-1">
            {language === 'en' ? 'Easy Counter Payments' : language === 'hi' ? 'काउंटर पर आसान भुगतान' : 'কাউন্টারে সহজ পেমেন্ট'}
          </h4>
          <p className="text-xs text-stone-500 leading-relaxed">
            {language === 'en'
              ? 'Cash, Google Pay, PhonePe, Paytm, UPI QR code & direct bank transfers supported.'
              : language === 'hi'
              ? 'नकद कैश, Google Pay, PhonePe, Paytm, UPI QR कोड एवं सीधे बैंक ट्रांसफर की सुविधा।'
              : 'কাউন্টারে নগদ ক্যাশ টাকা, Google Pay, PhonePe, Paytm, UPI QR কোড ও সরাসরি ব্যাঙ্ক ট্রান্সফারের সুবিধা।'}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-3">
            <Award className="w-5 h-5 stroke-[2.2]" />
          </div>
          <h4 className="font-bold text-stone-900 text-sm mb-1">
            {language === 'en' ? 'Official Invoices & Wholesale' : language === 'hi' ? 'पक्का बिल एवं थोक आपूर्ति' : 'পাকা বিল ও পাইকারি সুবিধা'}
          </h4>
          <p className="text-xs text-stone-500 leading-relaxed">
            {language === 'en'
              ? 'Wholesale supply with valid GST challans for weddings, caterers, hotels, and retail shops.'
              : language === 'hi'
              ? 'शादी, होटल, कैटरिंग व रीसेलिंग के लिए वैध जीएसटी चालान सहित थोक आपूर्ति।'
              : 'অনুষ্ঠান, হোটেল, মেস বা রিসেলিং-এর জন্য বৈধ জিএসটি চালান সহ পাইকারি সরবরাহ করা হয়।'}
          </p>
        </div>
      </div>

      {/* Map & Location Card */}
      <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-stone-900">
              {language === 'en'
                ? 'Located at Kalna RMC Market'
                : language === 'hi'
                ? 'कालना आरएमसी मार्केट में स्थित'
                : 'কালনা আরএমসি মার্কেটে আমাদের অবস্থান'}
            </h3>
            <p className="text-xs text-stone-500">
              {t.storeLandmarkText}
            </p>
          </div>
          <a
            href={STORE_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1.5 bg-amber-100/70 hover:bg-amber-100 border border-amber-300 px-3 py-1.5 rounded-xl transition active:scale-95"
          >
            <Navigation className="w-3.5 h-3.5 text-amber-600" />
            <span>{language === 'en' ? 'Open in Google Maps' : language === 'hi' ? 'गूगल मैप पर खोलें' : 'গুগল ম্যাপে খুলুন'}</span>
            <ExternalLink className="w-3 h-3 text-amber-600" />
          </a>
        </div>

        {/* Visual Simulated Map Display linking directly to user provided Google Maps URL */}
        <a
          href={STORE_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-full h-48 rounded-2xl bg-gradient-to-br from-amber-100 via-stone-100 to-amber-200 border-2 border-amber-300/80 flex items-center justify-center overflow-hidden transition hover:border-amber-500 shadow-sm block"
          title="Open Gopal Chal Bhandar on Google Maps"
        >
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#d97706_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
          <div className="relative text-center p-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-amber-200 max-w-sm group-hover:scale-105 transition-transform">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-100 text-red-600 mb-1 shadow-sm">
              <MapPin className="w-6 h-6 animate-bounce" />
            </div>
            <h5 className="font-black text-stone-900 text-sm">{getLocalizedStoreName()}</h5>
            <p className="text-[11px] text-stone-600 mt-0.5">{getLocalizedAddress()}</p>
            <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
              <Navigation className="w-3 h-3 text-amber-600" />
              <span>{language === 'en' ? 'Tap for GPS Navigation' : language === 'hi' ? 'नेविगेशन के लिए टैप करें' : 'জিপিএস নেভিগেশনের জন্য স্পর্শ করুন'}</span>
            </div>
          </div>
        </a>
      </div>

      {/* Route & Transport Guide */}
      <div className="bg-amber-50/80 rounded-2xl p-5 border border-amber-200 shadow-sm space-y-3">
        <h4 className="font-extrabold text-stone-900 text-sm flex items-center gap-2">
          <Store className="w-4 h-4 text-amber-700" />
          <span>
            {language === 'en'
              ? 'Directions & Loading Assistance'
              : language === 'hi'
              ? 'दुकान तक पहुँचने का मार्ग एवं लोडिंग सुविधा'
              : 'দোকানে আসার পথনির্দেশ ও সুবিধাসমূহ'}
          </span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="bg-white p-3 rounded-xl border border-amber-200/70">
            <strong className="block text-stone-900 font-bold mb-1">
              {language === 'en' ? 'From Kalna Station:' : language === 'hi' ? 'कालना स्टेशन से:' : 'কালনা স্টেশন থেকে:'}
            </strong>
            <p className="text-stone-600">
              {language === 'en'
                ? "Take any local toto/rickshaw to 'Kalna RMC Market near Bholebaba Restaurant'. Takes around 5-7 minutes."
                : language === 'hi'
                ? "स्टेशन से किसी भी टोटो को कहें 'कालना आरएमसी मार्केट, भोलेबाबा रेस्टोरेंट के पास'। केवल 5-7 मिनट लगते हैं।"
                : "স্টেশনে নেমে যেকোনো টোটোকে বলুন 'কালনা আরএমসি মার্কেট, ভোলানাথ বা ভোলেবাবা রেস্তোরাঁ ও কুণ্ডু দোকানের কাছে'। সময় লাগে মাত্র ৫ মিনিট।"}
            </p>
          </div>
          <div className="bg-white p-3 rounded-xl border border-amber-200/70">
            <strong className="block text-stone-900 font-bold mb-1">
              {language === 'en' ? 'Bike & Toto Parking:' : language === 'hi' ? 'बाइक व टोटो पार्किंग:' : 'বাইক ও টোটো পার্কিং:'}
            </strong>
            <p className="text-stone-600">
              {language === 'en'
                ? 'Spacious front area in RMC market to comfortably park bikes or totos while inspecting rice grain samples.'
                : language === 'hi'
                ? 'आरएमसी मार्केट के सामने पर्याप्त खुली जगह है जहाँ बाइक या टोटो आसानी से खड़ा कर चावल परख सकते हैं।'
                : 'দোকানের সামনে খোলা চওড়া জায়গা রয়েছে, বাইক বা টোটো দাঁড় করিয়ে স্বচ্ছন্দে চাল দেখে নিতে পারেন।'}
            </p>
          </div>
          <div className="bg-white p-3 rounded-xl border border-amber-200/70">
            <strong className="block text-stone-900 font-bold mb-1">
              {language === 'en' ? 'Bag Loading Staff:' : language === 'hi' ? 'गाड़ी में बोरी लोडिंग:' : 'গাড়িতে বস্তা লোডিং:'}
            </strong>
            <p className="text-stone-600">
              {language === 'en'
                ? 'Our experienced staff will safely load heavy 10kg, 25kg, and 50kg rice bags directly onto your vehicle or toto.'
                : language === 'hi'
                ? 'हमारे कर्मचारी भारी बोरियों को सीधे आपकी बाइक, टोटो या पिकअप वैन में चढ़ा देंगे।'
                : '১০-৫০ বস্তা চাল এক সাথে কিনলে আমাদের কর্মীরা সরাসরি পিকআপ ভ্যান বা টোটোয় বস্তা তুলে দেবে।'}
            </p>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions (FAQ) */}
      <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm space-y-4">
        <h3 className="font-extrabold text-stone-900 text-sm flex items-center gap-2 mb-2">
          <HelpCircle className="w-5 h-5 text-amber-600" />
          <span>
            {language === 'en'
              ? 'Frequently Asked Questions (FAQ)'
              : language === 'hi'
              ? 'अक्सर पूछे जाने वाले प्रश्न (FAQ)'
              : 'সাধারণ জিজ্ঞাস্য (FAQ)'}
          </span>
        </h3>
        <div className="space-y-3">
          {/* FAQ 1 */}
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
            <h5 className="text-xs font-bold text-stone-900 mb-1.5 flex items-start gap-1.5">
              <span className="text-amber-600">Q:</span>
              {language === 'en' ? 'What is the minimum quantity for wholesale rates?' : language === 'hi' ? 'थोक भाव (Wholesale) के लिए कम से कम कितना चावल लेना होगा?' : 'পাইকারি দাম পেতে হলে ন্যূনতম কতটা চাল নিতে হবে?'}
            </h5>
            <p className="text-[11px] text-stone-600 pl-4">
              {language === 'en' 
                ? 'Wholesale rates apply when purchasing at least 5 bags (e.g., 5 x 25kg or 5 x 50kg) in total. This is ideal for weddings, catering, or retail shops.' 
                : language === 'hi' 
                ? 'थोक रेट का लाभ उठाने के लिए एक साथ कम से कम 5 बोरी (उदा. 5x25 किग्रा या 5x50 किग्रा) लेनी होगी। यह शादी, कैटरिंग या दुकानदारों के लिए उपयुक्त है।' 
                : 'পাইকারি রেটের সুবিধা পেতে হলে একসাথে কমপক্ষে ৫ বস্তা (যেমন ৫x২৫ কেজি বা ৫x৫০ কেজি) চাল নিতে হবে। এটি বিয়েবাড়ি, ক্যাটারিং বা ছোট দোকানের জন্য উপযুক্ত।'}
            </p>
          </div>
          
          {/* FAQ 2 */}
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
            <h5 className="text-xs font-bold text-stone-900 mb-1.5 flex items-start gap-1.5">
              <span className="text-amber-600">Q:</span>
              {language === 'en' ? 'Are there special discounts for weddings or catering events?' : language === 'hi' ? 'क्या शादी या बड़े आयोजनों के लिए विशेष छूट उपलब्ध है?' : 'বিয়েবাড়ি বা বড় অনুষ্ঠানের জন্য কি স্পেশাল ডিসকাউন্ট আছে?'}
            </h5>
            <p className="text-[11px] text-stone-600 pl-4">
              {language === 'en' 
                ? 'Yes! We offer special bulk pricing for catering and family events. Please call us directly on 81456 25847 (Everyday 10:00 AM to 9:00 PM) for a custom quotation.' 
                : language === 'hi' 
                ? 'हाँ! हम कैटरिंग और पारिवारिक आयोजनों के लिए विशेष थोक मूल्य प्रदान करते हैं। सही कोटेशन के लिए हमें सीधे 81456 25847 पर कॉल करें (प्रतिदिन सुबह 10:00 से रात 9:00 बजे)।' 
                : 'হ্যাঁ! ক্যাটারিং বা বড় অনুষ্ঠানের ক্ষেত্রে আমরা স্পেশাল পাইকারি রেট প্রদান করি। স্পেশাল রেটের জন্য প্রতিদিন সকাল ১০:০০ থেকে রাত ৯:০০ এর মধ্যে সরাসরি ৮১৪৫৬ ২৫৮৪৭ নম্বরে ফোন করুন।'}
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
            <h5 className="text-xs font-bold text-stone-900 mb-1.5 flex items-start gap-1.5">
              <span className="text-amber-600">Q:</span>
              {language === 'en' ? 'What payment methods do you accept at the store?' : language === 'hi' ? 'आप दुकान पर कौन-से भुगतान माध्यम स्वीकार करते हैं?' : 'দোকানে পেমেন্ট করার কি কি সুবিধা রয়েছে?'}
            </h5>
            <p className="text-[11px] text-stone-600 pl-4">
              {language === 'en' 
                ? 'We accept Cash, all UPI apps (Google Pay, PhonePe, Paytm), and direct Bank Transfers at our Kalna counter.' 
                : language === 'hi' 
                ? 'हम नकद (Cash), सभी UPI ऐप्स (Google Pay, PhonePe, Paytm) और बैंक ट्रांसफर के माध्यम से भुगतान स्वीकार करते हैं।' 
                : 'আমরা ক্যাশ, যেকোনো ইউপিআই (PhonePe, Google Pay, Paytm) এবং ব্যাঙ্ক ট্রান্সফার এর মাধ্যমে পেমেন্ট গ্রহণ করি।'}
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
            <h5 className="text-xs font-bold text-stone-900 mb-1.5 flex items-start gap-1.5">
              <span className="text-amber-600">Q:</span>
              {language === 'en' ? 'Do you offer home delivery if I order online?' : language === 'hi' ? 'क्या आप ऑनलाइन ऑर्डर करने पर होम डिलीवरी करते हैं?' : 'আপনারা কি এক বা দু বস্তা চাল হোম ডেলিভারি করেন?'}
            </h5>
            <p className="text-[11px] text-stone-600 pl-4">
              {language === 'en' 
                ? 'Currently, we do not offer home delivery. Please check rates here and visit our Kalna RMC Market store to collect your rice.' 
                : language === 'hi' 
                ? 'वर्तमान में हम होम डिलीवरी नहीं करते हैं। कृपया भाव जांचें और चावल प्राप्त करने के लिए कालना आरएमसी मार्केट स्थित दुकान पर आएं।' 
                : 'না, আমরা কোনো অনলাইন হোম ডেলিভারি করি না। রেট জেনে সরাসরি কালনা আরএমসি মার্কেটের দোকানে এসে চাল সংগ্রহ করতে হবে।'}
            </p>
          </div>
        </div>
      </div>

      {/* Contact Numbers Box - Phone Call & WhatsApp */}
      <div className="bg-amber-50/80 rounded-3xl p-6 border-2 border-amber-300 text-center space-y-4">
        <div className="space-y-1">
          <h4 className="text-xs font-black text-amber-900 uppercase tracking-wider">
            {language === 'en'
              ? 'Store Direct Call & WhatsApp Inquiry (Confirm Status)'
              : language === 'hi'
              ? 'सीधा फोन कॉल एवं व्हाट्सएप पूछताछ (स्थिति की पुष्टि करें)'
              : 'সরাসরি ফোন কল ও হোয়াটসঅ্যাপ ইনকোয়ারি (আসার আগে ফোন করুন)'}
          </h4>
          <p className="text-sm font-bold text-stone-700">
            <span className="text-stone-950">{t.proprietor}</span>
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={`tel:${STORE_INFO.phone}`}
            className="flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-sm sm:text-base shadow-md transition active:scale-95"
            title={
              language === 'en'
                ? 'Call 81456 25847'
                : language === 'hi'
                ? 'कॉल करें 81456 25847'
                : 'ফোন করুন: ৮১৪৫৬ ২৫৮৪৭'
            }
          >
            <Phone className="w-5 h-5 fill-stone-950" />
            <span>{STORE_INFO.phoneDisplay}</span>
            <span className="text-xs font-bold bg-stone-950/10 px-2 py-0.5 rounded">
              Confirm Status
            </span>
          </a>

          <a
            href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
              language === 'en'
                ? 'Hello Gopal Chal Bhandar, I am inquiring about today rice rates and stock.'
                : language === 'hi'
                ? 'नमस्ते गोपाल चावल भंडार, मैं आज के चावल भाव और स्टॉक की जानकारी चाहता हूँ।'
                : 'নমস্কার গোপাল চাল ভাণ্ডার, আমি আজকের চালের দর ও স্টক সম্পর্কে জানতে চাই।'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-sm sm:text-base shadow-md transition active:scale-95"
            title="WhatsApp Inquiry"
          >
            <WhatsAppLogo className="w-5 h-5" />
            <span>{language === 'en' ? 'WhatsApp Chat' : language === 'hi' ? 'व्हाट्सएप चैट' : 'হোয়াটসঅ্যাপে কথা বলুন'}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

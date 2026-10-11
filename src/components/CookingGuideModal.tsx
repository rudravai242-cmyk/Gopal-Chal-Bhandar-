import React, { useState } from 'react';
import { X, Sparkles, ChefHat, Droplets, Clock, Flame, CheckCircle, Wheat, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CookingGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CookingGuideModal: React.FC<CookingGuideModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [activeRice, setActiveRice] = useState<string>('minikit');

  if (!isOpen) return null;

  const riceGuides = [
    {
      id: 'minikit',
      nameBn: 'সুপার মিনিকেট চাল',
      nameEn: 'Super Minikit Rice',
      nameHi: 'सुपर मिनिकिट चावल',
      tagBn: 'রোজকার ঝরঝরে সেরা ভাত',
      tagEn: 'Daily meals staple',
      tagHi: 'दैनिक भोजन के लिए सर्वोत्तम',
      waterRatioBn: '১ কাপ চাল : ২ কাপ জল (1:2)',
      waterRatioEn: '1 Cup Rice : 2 Cups Water (1:2)',
      waterRatioHi: '1 कप चावल : 2 कप पानी (1:2)',
      cookTimeBn: '১০ - ১২ মিনিট (মাঝারি আঁচে)',
      cookTimeEn: '10 - 12 Minutes (Medium flame)',
      cookTimeHi: '10 - 12 मिनट (मध्यम आंच)',
      soakingBn: 'রান্নার আগে ৫ মিনিট ধুয়ে জল ঝরিয়ে রাখুন',
      soakingEn: 'Wash and drain 5 mins prior to cooking',
      soakingHi: 'बनाने से 5 मिनट पहले धोकर पानी निकाल लें',
      dishesBn: ['দৈনন্দিন লাঞ্চ ও ডিনার', 'মাছের ঝোল-ভাত', 'ঘরোয়া ফ্রাইড রাইস', 'ডাল-ভাত'],
      dishesEn: ['Daily Lunch & Dinner', 'Fish Curry & Rice', 'Home Fried Rice', 'Dal Chawal'],
      dishesHi: ['दैनिक दोपहर व रात का खाना', 'दाल-चावल', 'होम फ्राइड राइस', 'सब्जी पुलाव'],
      secretTipBn: 'ভাত নামিয়ে ফ্যান (মাড়) ঝরানোর পর হাঁড়ির মুখ ২ মিনিট চাপা দিয়ে রাখুন, এতে ভাত কাচের মতো চকচকে ও সম্পূর্ণ ঝরঝরে থাকে।',
      secretTipEn: 'After draining the rice starch, cover the pot with a tight lid for 2 minutes. The grains will emerge glossy, non-sticky and perfectly fluffy.',
      secretTipHi: 'चावल का माड़ निकालने के बाद बर्तन का ढक्कन 2 मिनट बंद रखें, इससे चावल एकदम खिला-खिला, चमकदार और अलग-अलग दानेदार बनेगा।'
    },
    {
      id: 'gobindobhog',
      nameBn: 'খাঁটি বর্ধমানের সুগন্ধি গোবিন্দভোগ',
      nameEn: 'Pure Bardhaman Gobindobhog',
      nameHi: 'शुद्ध बर्धमान सुगंधित गोविंदभोग',
      tagBn: 'ঠাকুরের ভোগ, পায়েস ও বাসন্তী পোলাও',
      tagEn: 'Sacred Bhog, Kheer & Basanti Pulao',
      tagHi: 'भोग, खीर एवं बासंती पुलाव',
      waterRatioBn: '১ কাপ চাল : ১.৫ কাপ জল (বা দুধ)',
      waterRatioEn: '1 Cup Rice : 1.5 Cups Water (or Milk)',
      waterRatioHi: '1 कप चावल : 1.5 कप पानी (या दूध)',
      cookTimeBn: '৮ - ১০ মিনিট (ধীমে আঁচে)',
      cookTimeEn: '8 - 10 Minutes (Low-medium flame)',
      cookTimeHi: '8 - 10 मिनट (धीमी आंच)',
      soakingBn: 'বেশি সময় ভেজাবেন না, হালকা ধুয়ে সাথে সাথে ছাঁকনিতে শুকিয়ে নিন',
      soakingEn: 'Do not soak long; quick rinse and air dry',
      soakingHi: 'ज्यादा देर न भिगोएं, धोकर तुरंत सुखा लें',
      dishesBn: ['বাসন্তী পোলাও', 'মিহি ক্ষীর ও পায়েস', 'খিচুড়ি ভোগ', 'মিষ্টি পোলাও'],
      dishesEn: ['Basanti Pulao', 'Creamy Rice Kheer', 'Khichuri Bhog', 'Sweet Pulao'],
      dishesHi: ['बासंती पुलाव', 'गाढ़ी चावल खीर', 'खिचड़ी भोग', 'मीठा पुलाव'],
      secretTipBn: 'পোলাও বা পায়েস তৈরির আগে ১ চামচ দেশি ঘি ও সামান্য তেজপাতা দিয়ে চালটি হাত দিয়ে মাখিয়ে ৫ মিনিট রেখে দিলে রাজকীয় সুবাস ছড়িয়ে পড়ে।',
      secretTipEn: 'Before making Pulao or Kheer, rub the raw rice with 1 tsp desi ghee and bay leaf, then rest for 5 minutes to release an irresistible royal aroma.',
      secretTipHi: 'पुलाव या खीर बनाने से पहले चावल में 1 चम्मच शुद्ध देसी घी व तेजपत्ता मिलाकर 5 मिनट रखें, जिससे शाही सुगंध उभर कर आती है।'
    },
    {
      id: 'basmati',
      nameBn: 'রয়্যাল বিরিয়ানি বাসমতী XXL',
      nameEn: 'Royal Biryani Basmati XXL',
      nameHi: 'रॉयल बिरयानी बासमती XXL',
      tagBn: 'লম্বা দানা ও বিরিয়ানির অহংকার',
      tagEn: 'Extra Long Grain for Biryani',
      tagHi: 'शाही बिरयानी स्पेशल लंबा दाना',
      waterRatioBn: '১ কাপ চাল : ৬ কাপ ফুটন্ত জল (বিরিয়ানি ড্রেন মেথড)',
      waterRatioEn: '1 Cup Rice : 6 Cups Boiling Water (Drain Method)',
      waterRatioHi: '1 कप चावल : 6 कप उबलता पानी (ड्रेन मेथड)',
      cookTimeBn: '৭ - ৮ মিনিট (৭০% সেদ্ধ বিরিয়ানির দমের জন্য)',
      cookTimeEn: '7 - 8 mins (70% parboiled for Biryani Dum)',
      cookTimeHi: '7 - 8 मिनट (दम बिरयानी हेतु 70% पकाना)',
      soakingBn: 'রান্নার আগে অবশ্যই ৩০ মিনিট ঠাণ্ডা জলে ভিজিয়ে রাখতে হবে',
      soakingEn: 'Mandatory 30-minute cold water soak',
      soakingHi: 'पकाने से पहले 30 मिनट पानी में अवश्य भिगोएं',
      dishesBn: ['কলকাতা চিকেন/মাটন বিরিয়ানি', 'রেস্তোরাঁ স্টাইল ফ্রাইড রাইস', 'মটর পোলাও'],
      dishesEn: ['Kolkata Dum Biryani', 'Restaurant Fried Rice', 'Matar Pulao'],
      dishesHi: ['कोलकाता दम बिरयानी', 'रेस्टोरेंट फ्राइड राइस', 'मटर पुलाव'],
      secretTipBn: 'ফুটন্ত জলে সামান্য লেবুর রস ও ১ চামচ তেল দিলে বাসমতীর দানা ভাঙে না এবং অতিরিক্ত লম্বা ও দুধের মতো সাদা হয়।',
      secretTipEn: 'Add a few drops of lemon juice and a teaspoon of oil to the boiling water to keep Basmati grains intact, extra-long, and snowy white.',
      secretTipHi: 'उबलते पानी में थोड़ा नींबू का रस और 1 चम्मच तेल डालने से बासमती का दाना टूटता नहीं है, अत्यधिक लंबा और दूध जैसा सफेद बनता है।'
    },
    {
      id: 'dudheswar',
      nameBn: 'খাঁটি দুধেশ্বর মিহি সেদ্ধ চাল',
      nameEn: 'Pure Dudheswar Parboiled Rice',
      nameHi: 'शुद्ध दूधेश्वर महीन सेद्ध चावल',
      tagBn: 'পেটের জন্য হালকা, নরম ও স্বাস্থ্যকর',
      tagEn: 'Gentle on stomach, soft & healthy',
      tagHi: 'पेट के लिए सुपाच्य, हल्का एवं स्वास्थ्यवर्धक',
      waterRatioBn: '১ কাপ চাল : ২.২৫ কাপ জল (1:2.25)',
      waterRatioEn: '1 Cup Rice : 2.25 Cups Water (1:2.25)',
      waterRatioHi: '1 कप चावल : 2.25 कप पानी (1:2.25)',
      cookTimeBn: '১২ - ১৪ মিনিট',
      cookTimeEn: '12 - 14 Minutes',
      cookTimeHi: '12 - 14 मिनट',
      soakingBn: '১০ মিনিট ভিজিয়ে রাখলে খুব নরম হয়',
      soakingEn: 'Soak 10 mins for gentle softness',
      soakingHi: '10 मिनट भिगोने पर बहुत मुलायम बनता है',
      dishesBn: ['দৈনন্দিন স্বাস্থ্যসম্মত আহার', 'শিশু ও বয়স্কদের খাবার', 'ঝোল-ভাত', 'জাউ ভাত'],
      dishesEn: ['Daily Healthy Diet', 'Children & Elderly Meals', 'Comfort Stew Rice'],
      dishesHi: ['दैनिक स्वास्थ्यवर्धक आहार', 'बुजुर्गों व बच्चों के लिए भोजन'],
      secretTipBn: 'দুধেশ্বর চালে গ্যাস্ট্রিক বা পেটভার ভাব হয় না, যাঁরা মিনিকেটের চেয়ে নরম ভাত ভালোবাসেন তাঁদের জন্য আদর্শ।',
      secretTipEn: 'Dudheswar is light on the stomach, highly digestible, and ideal for elderly and kids who prefer a softer grain texture.',
      secretTipHi: 'दूधेश्वर चावल पचने में बहुत हल्का है, पेट भारी नहीं होता और जो मिनिकिट से अधिक मुलायम भात पसंद करते हैं उनके लिए सर्वोत्तम है।'
    },
    {
      id: 'swarna',
      nameBn: 'স্বর্ণ ও রত্না মোটা চাল',
      nameEn: 'Swarna & Ratna Coarse Rice',
      nameHi: 'स्वर्ण एवं रत्ना मोटा चावल',
      tagBn: 'শক্তিদায়ী, সাশ্রয়ী ও বেশি ফোটানো যায়',
      tagEn: 'Energy-rich, heavy & pocket-friendly',
      tagHi: 'शक्तिवर्धक, पेट भरने वाला एवं किफायती',
      waterRatioBn: '১ কাপ চাল : ২.৫ কাপ জল (1:2.5)',
      waterRatioEn: '1 Cup Rice : 2.5 Cups Water (1:2.5)',
      waterRatioHi: '1 कप चावल : 2.5 कप पानी (1:2.5)',
      cookTimeBn: '১৫ - ১৮ মিনিট',
      cookTimeEn: '15 - 18 Minutes',
      cookTimeHi: '15 - 18 मिनट',
      soakingBn: '১৫ মিনিট ভিজিয়ে রাখলে তাড়াতাড়ি নরম হয়',
      soakingEn: '15 mins pre-soak reduces cooking time',
      soakingHi: '15 मिनट भिगोने से जल्दी पकता है',
      dishesBn: ['কায়িক পরিশ্রমীদের পেটভরা আহার', 'হোটেল ও মেস', 'খিচুড়ি', 'পান্তা ভাত'],
      dishesEn: ['Heavy Energy Lunch', 'Canteens & Hotels', 'Panta Bhaat', 'Khichuri'],
      dishesHi: ['होटल, कैंटीन व भारी भोजन', 'खिचड़ी', 'दैनिक भारी खुराक'],
      secretTipBn: 'এই চাল সহজে গলে যায় না এবং অনেকক্ষণ পেট ভরা রাখে, কায়িক পরিশ্রম ও মেসের জন্য অত্যন্ত সাশ্রয়ী।',
      secretTipEn: 'Swarna rice retains its shape without getting mushy and sustains energy longer, making it top-value for mess, hotels and heavy work.',
      secretTipHi: 'यह चावल गलता नहीं है और लंबे समय तक पेट भरा रखता है, मेस और कैंटीन के लिए बेहद किफायती विकल्प है।'
    }
  ];

  const current = riceGuides.find((r) => r.id === activeRice) || riceGuides[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/30 text-amber-200 flex items-center justify-center">
              <ChefHat className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">
                {language === 'en'
                  ? 'Rice Cooking Guide & Quality Secrets'
                  : language === 'hi'
                  ? 'चावल पकाने की मार्गदर्शिका एवं विशेषताएं'
                  : 'চালের রান্নার গাইড ও গুণমান রহস্য'}
              </h3>
              <p className="text-xs text-amber-200/90">
                {language === 'en'
                  ? 'Proper water ratios, cooking time & chef tips'
                  : language === 'hi'
                  ? 'सही पानी का माप, समय और खास कुकिंग टिप्स'
                  : 'জলের সঠিক পরিমাপ, ফোটানোর সময় ও অভিজ্ঞ রাঁধুনিদের টিপস'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Rice Variety Tabs */}
        <div className="flex items-center gap-1.5 p-3 bg-stone-100 border-b border-stone-200 overflow-x-auto scrollbar-none">
          {riceGuides.map((item) => {
            const isSelected = item.id === activeRice;
            const label = language === 'en' ? item.nameEn : language === 'hi' ? item.nameHi : item.nameBn;

            return (
              <button
                key={item.id}
                onClick={() => setActiveRice(item.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                  isSelected
                    ? 'bg-amber-700 text-white shadow-sm'
                    : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-stone-800">
          <div>
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200 inline-block mb-1">
              {language === 'en' ? current.tagEn : language === 'hi' ? current.tagHi : current.tagBn}
            </span>
            <h4 className="text-xl font-black text-stone-900">
              {language === 'en' ? current.nameEn : language === 'hi' ? current.nameHi : current.nameBn}
            </h4>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 mb-1">
                <Droplets className="w-4 h-4 text-amber-600" />
                <span>{language === 'en' ? 'Water Ratio' : language === 'hi' ? 'पानी का माप' : 'জলের সঠিক মাপ'}</span>
              </div>
              <p className="text-sm font-extrabold text-stone-900">
                {language === 'en' ? current.waterRatioEn : language === 'hi' ? current.waterRatioHi : current.waterRatioBn}
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 mb-1">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>{language === 'en' ? 'Cooking Time' : language === 'hi' ? 'पकाने का समय' : 'রান্নার সময়'}</span>
              </div>
              <p className="text-sm font-extrabold text-stone-900">
                {language === 'en' ? current.cookTimeEn : language === 'hi' ? current.cookTimeHi : current.cookTimeBn}
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 mb-1">
                <Flame className="w-4 h-4 text-amber-600" />
                <span>{language === 'en' ? 'Pre-soaking' : language === 'hi' ? 'भिगोने का नियम' : 'ভিজিয়ে রাখা'}</span>
              </div>
              <p className="text-xs font-bold text-stone-900">
                {language === 'en' ? current.soakingEn : language === 'hi' ? current.soakingHi : current.soakingBn}
              </p>
            </div>
          </div>

          {/* Dishes List */}
          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
            <h5 className="text-xs font-extrabold text-stone-700 uppercase tracking-wide mb-2 flex items-center gap-1.5">
              <Wheat className="w-4 h-4 text-amber-600" />
              <span>
                {language === 'en'
                  ? 'Best Suited Dishes'
                  : language === 'hi'
                  ? 'किन व्यंजनों के लिए सर्वोत्तम'
                  : 'যে রান্নার জন্য সবচেয়ে উপযুক্ত'}
              </span>
            </h5>
            <div className="flex flex-wrap gap-2">
              {((language === 'en' ? current.dishesEn : language === 'hi' ? current.dishesHi : current.dishesBn) || []).map((dish, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white rounded-lg border border-stone-200 text-xs font-semibold text-stone-800 shadow-2xs"
                >
                  ✓ {dish}
                </span>
              ))}
            </div>
          </div>

          {/* Secret Pro Tip */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30">
            <div className="flex items-start gap-2.5">
              <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs font-extrabold text-amber-950 uppercase tracking-wider block mb-1">
                  💡 {language === 'en' ? 'Merchant Secret Cooking Tip:' : language === 'hi' ? 'खास व्यापारी कुकिंग टिप:' : 'গোপাল চাল ভাণ্ডারের গোপন রাঁধুনি টিপস:'}
                </strong>
                <p className="text-xs text-stone-700 leading-relaxed font-medium">
                  {language === 'en' ? current.secretTipEn : language === 'hi' ? current.secretTipHi : current.secretTipBn}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-stone-100 border-t border-stone-200 text-center flex items-center justify-between px-4">
          <span className="text-[11px] text-stone-500 font-medium">
            📍 {language === 'en' ? 'Kalna RMC Market • Trusted destination for pure rice' : language === 'hi' ? 'कालना आरएमसी मार्केट • शुद्ध चावल का विश्वसनीय पता' : 'কালনা আরএমসি মার্কেট • খাঁটি চালের বিশ্বস্ত ঠিকানা'}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 transition"
          >
            {language === 'en' ? 'Close' : language === 'hi' ? 'बंद करें' : 'বন্ধ করুন'}
          </button>
        </div>
      </div>
    </div>
  );
};

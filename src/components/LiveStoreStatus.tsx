import React, { useState, useEffect } from 'react';
import { Store, MapPin } from 'lucide-react';
import { STORE_INFO } from '../data/riceData';
import { useLanguage } from '../context/LanguageContext';

export const LiveStoreStatus: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(true);
  const [currentTimeStr, setCurrentTimeStr] = useState('');

  useEffect(() => {
    const checkStatus = () => {
      // Calculate Indian Standard Time (UTC + 5:30)
      const now = new Date();
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utcTime + 3600000 * 5.5);

      const hours = istTime.getHours();
      const minutes = istTime.getMinutes();
      const totalMinutes = hours * 60 + minutes;

      // Store hours: 
      // Morning: 9:30 AM (570 mins) to 2:00 PM (840 mins)
      // Evening: 5:30 PM (1050 mins) to 9:30 PM (1290 mins)
      const isMorningOpen = totalMinutes >= 570 && totalMinutes <= 840;
      const isEveningOpen = totalMinutes >= 1050 && totalMinutes <= 1290;
      const isStoreOpen = isMorningOpen || isEveningOpen;
      setIsOpen(isStoreOpen);

      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      setCurrentTimeStr(`${formattedHours}:${formattedMinutes} ${ampm} IST`);
    };

    checkStatus();
    const timer = setInterval(checkStatus, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-2xl p-4 border border-stone-200/90 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
      <div className="flex items-start sm:items-center gap-3">
        <div
          className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 shadow-xs ${
            isOpen
              ? 'bg-emerald-100 text-emerald-700 border border-emerald-300'
              : 'bg-amber-100 text-amber-700 border border-amber-300'
          }`}
        >
          <Store className="w-5 h-5 stroke-[2.2]" />
        </div>

        <div>
          <div className="flex items-center flex-wrap gap-2">
            <span
              className={`inline-flex items-center gap-1 text-[11px] font-extrabold px-2 py-0.5 rounded-full ${
                isOpen
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-amber-100 text-amber-800'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isOpen ? 'bg-emerald-600 animate-pulse' : 'bg-amber-600'
                }`}
              />
              {isOpen
                ? language === 'en'
                  ? 'Shop Open'
                  : language === 'hi'
                  ? 'दुकान खुली है'
                  : 'দোকান খোলা'
                : language === 'en'
                ? 'Store Closed (Mid-day Break)'
                : language === 'hi'
                ? 'दुकान बंद है (मध्यांतर)'
                : 'দোকান এখন বন্ধ (বিরতি)'}
            </span>

            <span className="text-[11px] text-amber-800 font-bold bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/70">
              📞 {language === 'en' ? 'Confirm: 9:30 AM – 9:30 PM' : language === 'hi' ? 'पुष्टि करें: 9:30 AM – 9:30 PM' : 'নিশ্চিত করুন: ৯:৩০ – ৯:৩০'}
            </span>

            {currentTimeStr && (
              <span className="text-[10px] text-stone-400 font-medium hidden md:inline">
                ({currentTimeStr})
              </span>
            )}
          </div>

          <p className="text-[10px] sm:text-xs text-stone-700 font-medium mt-1">
            📍 <strong>{language === 'en' ? 'Kalna RMC Market' : language === 'hi' ? 'कालना आरएमसी मार्केट' : 'কালনা আরএমসি মার্কেট'}</strong> • {language === 'en' ? 'Confirm status via Phone/WhatsApp before visiting.' : language === 'hi' ? 'आने से पहले फोन/व्हाट्सएप से पुष्टि करें।' : 'আসার আগে ফোন বা হোয়াটসঅ্যাপে নিশ্চিত হয়ে নিন।'}
          </p>
        </div>
      </div>

      {/* Quick Action: Google Maps Store Location */}
      <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
        <a
          href={STORE_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3.5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 active:scale-95 text-amber-900 border border-amber-500/30 text-xs font-bold flex items-center gap-1.5 shadow-xs transition"
          title="Open in Google Maps"
        >
          <MapPin className="w-3.5 h-3.5 text-amber-700" />
          <span>{language === 'en' ? 'Directions' : language === 'hi' ? 'রাস্তা देखें' : 'দিকনির্দেশ'}</span>
        </a>
      </div>
    </div>
  );
};

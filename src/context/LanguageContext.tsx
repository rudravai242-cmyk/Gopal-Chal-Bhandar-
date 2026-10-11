import React, { createContext, useContext, useState } from 'react';
import { AppLanguage, RiceProduct, BagOption } from '../types';
import { TRANSLATIONS, Translations } from '../i18n/translations';

interface LanguageContextType {
  language: AppLanguage;
  setLanguage: (lang: AppLanguage) => void;
  t: Translations;
  getProductName: (product: RiceProduct) => string;
  getProductTagline: (product: RiceProduct) => string;
  getProductDesc: (product: RiceProduct) => string;
  getProductCategory: (category: string) => string;
  getBagLabel: (bag: BagOption) => string;
  getGrainType: (product: RiceProduct) => string;
  getProductOrigin: (product: RiceProduct) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<AppLanguage>(() => {
    const saved = localStorage.getItem('gopal_app_lang');
    if (saved === 'en' || saved === 'hi' || saved === 'bn') {
      return saved as AppLanguage;
    }
    return 'bn';
  });

  const setLanguage = (newLang: AppLanguage) => {
    setLanguageState(newLang);
    localStorage.setItem('gopal_app_lang', newLang);
  };

  const t = TRANSLATIONS[language];

  // Helper for localized product names
  const getProductName = (product: RiceProduct): string => {
    if (!product) return '';
    if (language === 'en') {
      if (product.nameEn) return product.nameEn;
      const enMap: Record<string, string> = {
        'minikit-super': 'Ratnadeep Super Minikit Rice',
        'gobindobhog-aromatic': 'Pure Aromatic Gobindobhog Rice',
        'basmati-royal-biryani': 'Royal XXL Biryani Basmati Rice',
        'dudheswar-rice': 'Pure Dudheswar Fine Rice',
        'basmati-broken-mogra': 'Basmati Mogra / Broken Rice',
        'swarna-boiled': 'Swarna Pure Coarse Boiled Rice',
        'kataribhog-aromatic': 'Dinajpur Kataribhog Aromatic Rice',
        'dehradun-atap': 'Dehradun Pure Atap Basmati Rice',
        'brown-rice-organic': 'Organic Unpolished Brown Rice',
      };
      return enMap[product.id] || product.nameBn;
    }
    if (language === 'hi') {
      if (product.nameHi) return product.nameHi;
      const hiMap: Record<string, string> = {
        'minikit-super': 'रत्नदीप सुपर मिनिकिट चावल',
        'gobindobhog-aromatic': 'सुगंधित तुलाईपांजी गोविंदभोग चावल',
        'basmati-royal-biryani': 'रॉयल बिरयानी स्पेशल बासमती (XXL)',
        'dudheswar-rice': 'शुद्ध दूधेश्वर महीन उसना चावल',
        'basmati-broken-mogra': 'बासमती मोगरा / चावल टुकड़ा',
        'swarna-boiled': 'स्वर्ण शुद्ध मोटा उसना चावल',
        'kataribhog-aromatic': 'दिनाजपुरी कतारीभोग सुगंधित चावल',
        'dehradun-atap': 'देहरादून शुद्ध आतप बासमती चावल',
        'brown-rice-organic': 'ऑर्गेनिक अनपॉलिश्ड ब्राउन राइस',
      };
      return hiMap[product.id] || product.nameBn;
    }
    return product.nameBn;
  };

  const getProductTagline = (product: RiceProduct): string => {
    if (!product) return '';
    if (language === 'en') {
      if (product.taglineEn) return product.taglineEn;
      const enMap: Record<string, string> = {
        'minikit-super': 'Best choice for daily family meals, slender and fluffy',
        'gobindobhog-aromatic': 'Divine aroma for Puja, Pulao, and delicious Kheer',
        'basmati-royal-biryani': '8.4mm extra-long grains, restaurant style Biryani special',
        'dudheswar-rice': 'Soft, fine & easily digestible traditional Bengal rice',
        'basmati-broken-mogra': 'Affordable aromatic Basmati broken grain for Fried Rice & Khichdi',
        'swarna-boiled': 'High-yield nutritious boiled staple for everyday energy',
        'kataribhog-aromatic': 'North Bengal heirloom ultra-fine fragrant rice',
        'dehradun-atap': 'Pure pristine unboiled Atap Basmati for Puja and sweet dishes',
        'brown-rice-organic': 'High-fiber unpolished healthy rice for diabetes and fitness',
      };
      return enMap[product.id] || product.taglineBn;
    }
    if (language === 'hi') {
      if (product.taglineHi) return product.taglineHi;
      const hiMap: Record<string, string> = {
        'minikit-super': 'दैनिक भोजन के लिए सबसे पसंदीदा बारीक और खिला-खिला चावल',
        'gobindobhog-aromatic': 'पूजा, भोग, पुलाव और शुद्ध खीर के लिए दिव्य सुगंध',
        'basmati-royal-biryani': '8.4 मिमी अतिरिक्त लंबा दाना, होटल व रेस्तरां स्टाइल बिरयानी हेतु',
        'dudheswar-rice': 'पेट के लिए सुपाच्य, अत्यंत मुलायम और स्वास्थ्यवर्धक देशी चावल',
        'basmati-broken-mogra': 'किफायती बासमती खुशबू - फ्राइड राइस और खिचड़ी का साथी',
        'swarna-boiled': 'दैनिक पौष्टिकता से भरपूर व पेट भरने वाला किफायती उसना चावल',
        'kataribhog-aromatic': 'उत्तरी बंगाल का दुर्लभ सुगंधित महीन दाना चावल',
        'dehradun-atap': 'पूजा, भोग और खीर के लिए हिमालयी शुद्ध आतप चावल',
        'brown-rice-organic': 'शुगर नियंत्रण और वजन घटाने के लिए फाइबर युक्त अनपॉलिश्ड चावल',
      };
      return hiMap[product.id] || product.taglineBn;
    }
    return product.taglineBn;
  };

  const getProductDesc = (product: RiceProduct): string => {
    if (!product) return '';
    if (language === 'en') {
      if (product.descriptionEn) return product.descriptionEn;
      const descEnMap: Record<string, string> = {
        'minikit-super': 'Harvested directly from prime Bardhaman paddy fields. Snowy white, slender, and cooks into non-sticky separate grains. Ideal for family meals.',
        'gobindobhog-aromatic': '100% natural aromatic short-grain Gobindobhog. Sweet natural scent that fills the room without artificial perfumes or polish.',
        'basmati-royal-biryani': 'Authentic 2-year naturally aged royal Basmati. Grains lengthen up to twice their size without breaking or sticking.',
        'dudheswar-rice': 'Milk-white soft rice, tender on digestion and highly recommended by doctors for children and senior family members.',
        'basmati-broken-mogra': 'Naturally fragrant broken cuts of pure Basmati. Same royal taste and aroma at nearly half the price.',
        'swarna-boiled': 'Rich in energy and nutrition. Retains shape and firmness even when boiled well. Highly popular for messes, hotels and daily stamina.',
        'kataribhog-aromatic': 'Traditional North Bengal heirloom fine grain. Renowned for guest hospitality, ghee-bhaat, and special feast occasions.',
        'dehradun-atap': 'Finest raw unboiled Basmati from the Himalayan foothills. Emits deep pristine fragrance on washing. Perfect for sacred rituals and Pulao.',
        'brown-rice-organic': 'Contains intact bran and germ layers. Low glycemic index makes it ideal for diabetic patients and clean healthy fitness diets.',
      };
      return descEnMap[product.id] || product.descriptionBn;
    }
    if (language === 'hi') {
      if (product.descriptionHi) return product.descriptionHi;
      const descHiMap: Record<string, string> = {
        'minikit-super': 'बर्धमान जिले की उत्तम धान से तैयार। दूधिया सफेद, बारीक और पकने पर एकदम खिला-खिला। पारिवारिक भोजन के लिए सर्वोत्तम।',
        'gobindobhog-aromatic': '100% प्राकृतिक सुगंधित छोटा दाना गोविंदभोग। घर को महका देने वाली प्राकृतिक खुशबू, कृत्रिम पॉलिश रहित।',
        'basmati-royal-biryani': 'असली 2 वर्ष पुराना एज्ड (Aged) बासमती। पकाने पर दाना दोगुना लंबा होता है और आपस में चिपकता नहीं।',
        'dudheswar-rice': 'दूध जैसा सफेद व मुलायम भात। पेट के लिए अति सुपाच्य, बच्चों और बुजुर्गों के स्वास्थ्य के लिए डॉक्टरों द्वारा अनुशंसित।',
        'basmati-broken-mogra': 'शुद्ध बासमती का सुगंधित टुकड़ा दाना। स्वाद व खुशबू में पूरे बासमती जैसा, पर कीमत आधी।',
        'swarna-boiled': 'मेहनती लोगों के लिए शक्ति का स्रोत। पोषक तत्वों से भरपूर, मेस, होटल और दैनिक भारी खुराक के लिए किफायती।',
        'kataribhog-aromatic': 'पारंपरिक उत्तर बंगाल का महीन सुगंधित चावल। खास मेहमाननवाजी और घी-चावल के लिए मशहूर।',
        'dehradun-atap': 'उच्च हिमालयी क्षेत्र का शुद्ध कच्चा आतप बासमती चावल। पूजा-पाठ, भोग व खीर के लिए विशेष उपयुक्त।',
        'brown-rice-organic': 'प्राकृतिक चोकर व पोषक परत से युक्त। कम ग्लाइसेमिक इंडेक्स के कारण शुगर मरीजों और फिटनेस हेतु आदर्श।',
      };
      return descHiMap[product.id] || product.descriptionBn;
    }
    return product.descriptionBn;
  };

  const getProductCategory = (category: string): string => {
    switch (category) {
      case 'minikit':
        return t.catMinikit;
      case 'oil':
        return t.catOil;
      case 'atta':
        return t.catAtta;
      case 'basmati':
        return t.catBasmati;
      case 'gobindobhog':
        return t.catGobindobhog;
      case 'boiled':
        return t.catBoiled;
      case 'atap':
        return t.catAtap;
      case 'special':
        return t.catSpecial;
      default:
        return t.catAll;
    }
  };

  // Helper for localized Bag Size/Weight labels
  const getBagLabel = (bag: BagOption): string => {
    if (!bag) return '';
    if (language === 'en') {
      if (bag.labelEn) return bag.labelEn;
      if (bag.weight === 1) return '1 kg Retail Pack';
      if (bag.weight === 2) return '2 kg Pack';
      if (bag.weight === 5) return '5 kg Pack';
      if (bag.weight === 10) return '10 kg Bag';
      if (bag.weight === 25) return '25 kg Wholesale Bag';
      if (bag.weight === 26) return '26 kg Bag';
      if (bag.weight === 50) return '50 kg Wholesale Bag';
      return `${bag.weight} kg Bag`;
    }
    if (language === 'hi') {
      if (bag.labelHi) return bag.labelHi;
      if (bag.weight === 1) return '1 किग्रा खुदरा थैली';
      if (bag.weight === 2) return '2 किग्रा पैक';
      if (bag.weight === 5) return '5 किग्रा पैक';
      if (bag.weight === 10) return '10 किग्रा बोरी';
      if (bag.weight === 25) return '25 किग्रा थोक बोरी';
      if (bag.weight === 26) return '26 किग्रा मिल बोरी';
      if (bag.weight === 50) return '50 किग्रा थोक बोरी';
      return `${bag.weight} किग्रा बोरी`;
    }
    return bag.label;
  };

  // Helper for localized grain type
  const getGrainType = (product: RiceProduct): string => {
    if (!product) return '';
    if (language === 'en') {
      if (product.grainTypeEn) return product.grainTypeEn;
      const grainMap: Record<string, string> = {
        'minikit-super': 'Ultra slender & long',
        'gobindobhog-aromatic': 'Short grain aromatic',
        'basmati-royal-biryani': 'Extra long grain (8.4mm)',
        'dudheswar-rice': 'Fine & soft grain',
        'basmati-broken-mogra': 'Medium broken grains',
        'swarna-boiled': 'Coarse round grain',
        'kataribhog-aromatic': 'Ultra fine & fragrant',
        'dehradun-atap': 'Long raw atap grain',
        'brown-rice-organic': 'Reddish medium grain',
      };
      return grainMap[product.id] || product.grainType;
    }
    if (language === 'hi') {
      if (product.grainTypeHi) return product.grainTypeHi;
      const grainMap: Record<string, string> = {
        'minikit-super': 'अत्यधिक बारीक व लंबा',
        'gobindobhog-aromatic': 'छोटा दाना सुगंधित',
        'basmati-royal-biryani': 'अति लंबा दाना (8.4 मिमी)',
        'dudheswar-rice': 'महीन व मुलायम दाना',
        'basmati-broken-mogra': 'मध्यम टुकड़ा दाना',
        'swarna-boiled': 'मोटा गोल दाना',
        'kataribhog-aromatic': 'अति महीन व सुगंधित',
        'dehradun-atap': 'लंबा आतप दाना',
        'brown-rice-organic': 'लालिमायुक्त मध्यम दाना',
      };
      return grainMap[product.id] || product.grainType;
    }
    return product.grainType;
  };

  // Helper for localized origin
  const getProductOrigin = (product: RiceProduct): string => {
    if (!product) return '';
    if (language === 'en') {
      if (product.originEn) return product.originEn;
      const originMap: Record<string, string> = {
        'minikit-super': 'Bardhaman Special',
        'gobindobhog-aromatic': 'Uttar Dinajpur & Nadia',
        'basmati-royal-biryani': 'Punjab & Haryana Terai',
        'dudheswar-rice': 'South 24 Parganas & Sundarbans',
        'basmati-broken-mogra': 'Haryana',
        'swarna-boiled': 'Bardhaman',
        'kataribhog-aromatic': 'Dinajpur',
        'dehradun-atap': 'Dehradun',
        'brown-rice-organic': 'Bardhaman Rural Farm',
      };
      return originMap[product.id] || product.origin;
    }
    if (language === 'hi') {
      if (product.originHi) return product.originHi;
      const originMap: Record<string, string> = {
        'minikit-super': 'बर्धमान मिल स्पेशल',
        'gobindobhog-aromatic': 'उत्तर दिनाजपुर व नदिया',
        'basmati-royal-biryani': 'पंजाब व हरियाणा तराई',
        'dudheswar-rice': 'दक्षिण 24 परगना व सुंदरबन',
        'basmati-broken-mogra': 'हरियाणा',
        'swarna-boiled': 'बर्धमान मिल',
        'kataribhog-aromatic': 'दिनाजपुर',
        'dehradun-atap': 'देहरादून',
        'brown-rice-organic': 'बर्धमान ग्रामीण फार्म',
      };
      return originMap[product.id] || product.origin;
    }
    return product.origin;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        getProductName,
        getProductTagline,
        getProductDesc,
        getProductCategory,
        getBagLabel,
        getGrainType,
        getProductOrigin,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

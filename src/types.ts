export interface BagOption {
  weight: number; // in kg (e.g. 1, 5, 10, 26, 50)
  label: string; // e.g. '১ কেজি খুচরো'
  labelEn?: string; // e.g. '1 kg Retail'
  labelHi?: string; // e.g. '1 किग्रा खुदरा'
  retailPrice: number; // in ₹
  wholesalePrice?: number; // in ₹ for bulk
  isPopular?: boolean;
}

export interface RiceProduct {
  id: string;
  nameBn: string;
  nameEn: string;
  nameHi?: string;
  category: 'minikit' | 'basmati' | 'gobindobhog' | 'boiled' | 'atap' | 'special' | 'oil' | 'atta';
  categoryBn: string;
  taglineBn: string;
  taglineEn?: string;
  taglineHi?: string;
  descriptionBn: string;
  descriptionEn?: string;
  descriptionHi?: string;
  grainType: string; // 'অতি সরু', 'লং গ্রেন', 'ছোট সুগন্ধি', 'মাঝারি'
  grainTypeEn?: string;
  grainTypeHi?: string;
  origin: string; // e.g., 'বর্ধমান', 'দিনাজপুর', 'দেরাদুন'
  originEn?: string;
  originHi?: string;
  pricePerKg: number;
  bagOptions: BagOption[];
  rating: number;
  reviewsCount: number;
  isBestseller?: boolean;
  isAromatic?: boolean;
  isNewArrival?: boolean;
  inStock: boolean;
  colorAccent: string; // e.g., 'amber', 'emerald', 'indigo'
  bagImage?: string; // photo/visual representation of branded sack
  bagBrandName?: string; // e.g., 'Greenstarline Mama Rice', 'Ma Sarada Mini Rice Mill'
  bagWeightLabel?: string; // e.g., '26 KG Bag'
}

export interface MarketRate {
  id: string;
  itemBn: string;
  itemEn: string;
  itemHi?: string;
  category: string;
  retailPerKg: string;
  bag26kg: string;
  bag50kg: string;
  trend: 'up' | 'down' | 'stable';
  changeText: string;
  changeTextEn?: string;
  changeTextHi?: string;
}

export type AppLanguage = 'bn' | 'en' | 'hi';

export type NavTabId = 'home' | 'products' | 'rates' | 'store';

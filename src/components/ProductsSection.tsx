import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, SlidersHorizontal, Star, Store, ChefHat, ZoomIn, Phone, X, Sparkles } from 'lucide-react';
import { RICE_PRODUCTS, STORE_INFO } from '../data/riceData';
import { BagOption, RiceProduct } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { ProductSkeletonGrid } from './ProductCardSkeleton';
import { WhatsAppLogo } from './WhatsAppLogo';
import { RiceBagModal } from './RiceBagModal';

interface ProductsSectionProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onOpenCookingGuide?: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  onOpenCookingGuide,
}) => {
  const {
    t,
    language,
    getProductName,
    getProductDesc,
    getProductCategory,
    getBagLabel,
    getGrainType,
    getProductOrigin,
  } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBagMap, setSelectedBagMap] = useState<Record<string, number>>({});
  const [selectedBagProduct, setSelectedBagProduct] = useState<RiceProduct | null>(null);

  const [isCategoryLoading, setIsCategoryLoading] = useState(false);
  const prevCategoryRef = useRef(selectedCategory);
  const loadingTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (prevCategoryRef.current !== selectedCategory) {
      prevCategoryRef.current = selectedCategory;
      setIsCategoryLoading(true);

      if (loadingTimerRef.current) {
        clearTimeout(loadingTimerRef.current);
      }

      loadingTimerRef.current = setTimeout(() => {
        setIsCategoryLoading(false);
      }, 260);
    }

    return () => {
      if (loadingTimerRef.current) {
        clearTimeout(loadingTimerRef.current);
      }
    };
  }, [selectedCategory]);

  const handleCategoryClick = (categoryId: string) => {
    if (categoryId === selectedCategory && !isCategoryLoading) return;
    setIsCategoryLoading(true);
    onSelectCategory(categoryId);

    if (loadingTimerRef.current) {
      clearTimeout(loadingTimerRef.current);
    }
    loadingTimerRef.current = setTimeout(() => {
      setIsCategoryLoading(false);
    }, 260);
  };

  const categories = [
    { id: 'all', label: t.catAll },
    { id: 'minikit', label: t.catMinikit },
    { id: 'oil', label: t.catOil },
    { id: 'atta', label: t.catAtta },
    { id: 'gobindobhog', label: t.catGobindobhog },
    { id: 'basmati', label: t.catBasmati },
    { id: 'boiled', label: t.catBoiled },
    { id: 'atap', label: t.catAtap },
    { id: 'special', label: t.catSpecial },
  ];

  // Quick search keywords for 1-tap instant filtering
  const quickSearchTags = [
    { id: 'minikit', labelBn: 'মিনিকেট', labelEn: 'Minikit', labelHi: 'मिनीकेट', query: 'মিনিকেট' },
    { id: 'basmati', labelBn: 'বাসমতী', labelEn: 'Basmati', labelHi: 'बासमती', query: 'বাসমতী' },
    { id: 'gobindobhog', labelBn: 'গোবিন্দভোগ', labelEn: 'Gobindobhog', labelHi: 'गोविंदभोग', query: 'গোবিন্দভোগ' },
    { id: 'dudheswar', labelBn: 'দুধেশ্বর', labelEn: 'Dudheswar', labelHi: 'दूधेश्वर', query: 'দুধেশ্বর' },
    { id: 'boiled', labelBn: 'সেদ্ধ চাল', labelEn: 'Boiled Rice', labelHi: 'उसना चावल', query: 'সেদ্ধ' },
    { id: 'oil', labelBn: 'সরিষার তেল', labelEn: 'Mustard Oil', labelHi: 'सरसों तेल', query: 'তেল' },
    { id: 'atta', labelBn: 'শরবতী আটা', labelEn: 'Chakki Atta', labelHi: 'गेहूं आटा', query: 'আটা' },
  ];

  // Phonetic normalization for Bengali & English search variations
  const normalize = (str: string) =>
    str
      .toLowerCase()
      .replace(/ket/g, 'kit')
      .replace(/sh/g, 's')
      .replace(/bhat/g, 'rice');

  // Filtered products list with high-performance multi-language search
  const filteredProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    const normalizedTerm = normalize(term);

    return RICE_PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;

      if (!term) return matchesCategory;

      const searchPool = [
        product.nameBn,
        product.nameEn,
        product.nameHi || '',
        product.taglineBn,
        product.taglineEn || '',
        product.taglineHi || '',
        product.grainType,
        product.grainTypeEn || '',
        product.categoryBn,
        product.category,
        product.bagBrandName || '',
        product.origin || '',
        product.originEn || '',
      ].map((s) => s.toLowerCase());

      const matchesSearch = searchPool.some((str) => {
        return str.includes(term) || normalize(str).includes(normalizedTerm);
      });

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  // Check if matches exist across all categories (helps if user is filtered to a specific category)
  const globalMatchesCount = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term || selectedCategory === 'all') return 0;
    const normalizedTerm = normalize(term);

    return RICE_PRODUCTS.filter((product) => {
      const searchPool = [
        product.nameBn,
        product.nameEn,
        product.nameHi || '',
        product.category,
        product.categoryBn,
        product.bagBrandName || '',
      ].map((s) => s.toLowerCase());

      return searchPool.some((str) => str.includes(term) || normalize(str).includes(normalizedTerm));
    }).length;
  }, [selectedCategory, searchTerm]);

  const handleSelectBag = (productId: string, bagIndex: number) => {
    setSelectedBagMap((prev) => ({
      ...prev,
      [productId]: bagIndex,
    }));
  };

  const handleQuickTagClick = (tagQuery: string) => {
    if (searchTerm === tagQuery) {
      setSearchTerm('');
    } else {
      setSearchTerm(tagQuery);
      // Auto-switch to 'all' category so user gets full results for this rice variety
      if (selectedCategory !== 'all') {
        onSelectCategory('all');
      }
    }
  };

  return (
    <div className="space-y-6 pb-12 max-w-full overflow-hidden">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-stone-900">
              {t.productsTitle}
            </h2>
            <p className="text-[10px] font-bold text-amber-700 uppercase tracking-wider mb-1">
              {t.proprietor}
            </p>
            <p className="text-xs text-stone-500">
              {t.productsSubtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start">
            {onOpenCookingGuide && (
              <button
                onClick={onOpenCookingGuide}
                className="text-xs bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition cursor-pointer"
              >
                <ChefHat className="w-3.5 h-3.5 text-amber-700" />
                <span>{language === 'en' ? 'Cooking Guide' : language === 'hi' ? 'कुकिंग गाइड' : 'রান্নার গাইড'}</span>
              </button>
            )}

            <div className="text-xs bg-red-50 text-red-800 border border-red-200 font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5">
              <Store className="w-3.5 h-3.5 text-red-600" />
              <span>{t.noOnlineDeliveryNotice}</span>
            </div>
          </div>
        </div>

        {/* 🔍 Local Search Bar with Real-time Filtering */}
        <div className="relative mb-2">
          <Search className="w-4 h-4 text-amber-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="rice-search-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={
              language === 'en'
                ? 'Search rice by name (e.g. Minikit, Basmati, Gobindobhog, Dudheswar)...'
                : language === 'hi'
                ? 'चावल के नाम से खोजें (जैसे: मिनीकेट, बासमती, गोविंदभोग, दूधेश्वर)...'
                : 'চালের নাম দিয়ে দ্রুত খুঁজুন (যেমন: মিনিকেট, বাসমতী, গোবিন্দভোগ, দুধেশ্বর)...'
            }
            className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white shadow-inner transition"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-800 bg-stone-200 hover:bg-stone-300 rounded-full w-5 h-5 flex items-center justify-center transition active:scale-90"
              title={language === 'en' ? 'Clear search' : 'সার্চ মুছুন'}
              aria-label="Clear search"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* 🏷️ Quick 1-Tap Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none text-xs">
          <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider shrink-0 mr-0.5">
            {language === 'en' ? 'Quick:' : language === 'hi' ? 'जल्दी खोजें:' : 'জনপ্রিয়:'}
          </span>
          {quickSearchTags.map((tag) => {
            const isTagActive = searchTerm.toLowerCase() === tag.query.toLowerCase();
            const label = language === 'en' ? tag.labelEn : language === 'hi' ? tag.labelHi : tag.labelBn;
            return (
              <button
                key={tag.id}
                type="button"
                onClick={() => handleQuickTagClick(tag.query)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
                  isTagActive
                    ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                    : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-amber-50 hover:text-amber-800 hover:border-amber-200'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* 📊 Live Search Results Counter & Active Filter Badge */}
        {searchTerm.trim() && (
          <div className="flex flex-wrap items-center justify-between gap-2 py-1.5 px-2 bg-amber-50/70 border border-amber-200/80 rounded-xl mb-2 text-xs">
            <div className="flex items-center gap-1.5 text-stone-700">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>
                {language === 'en'
                  ? `Found ${filteredProducts.length} ${filteredProducts.length === 1 ? 'variety' : 'varieties'} for "${searchTerm}"`
                  : language === 'hi'
                  ? `"${searchTerm}" के लिए ${filteredProducts.length} प्रकार के चावल मिले`
                  : `"${searchTerm}" এর জন্য ${filteredProducts.length}টি চালের সম্ভার পাওয়া গেছে`}
              </span>
            </div>

            <button
              onClick={() => setSearchTerm('')}
              className="text-[11px] font-bold text-amber-800 hover:text-red-700 flex items-center gap-1 cursor-pointer"
            >
              <span>{language === 'en' ? 'Clear Filter' : language === 'hi' ? 'फिल्टर हटाएं' : 'ফিল্টার মুছুন'}</span>
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* Notification when results exist in other categories */}
        {filteredProducts.length === 0 && globalMatchesCount > 0 && selectedCategory !== 'all' && (
          <div className="p-2.5 bg-blue-50 border border-blue-200 rounded-xl mb-2 text-xs text-blue-900 flex items-center justify-between gap-2">
            <span>
              {language === 'en'
                ? `Found ${globalMatchesCount} matches in other categories.`
                : language === 'hi'
                ? `अन्य श्रेणियों में ${globalMatchesCount} परिणाम मिले हैं।`
                : `অন্যান্য ক্যাটাগরিতে ${globalMatchesCount}টি চাল রয়েছে।`}
            </span>
            <button
              onClick={() => onSelectCategory('all')}
              className="font-bold underline text-blue-800 hover:text-blue-950 shrink-0"
            >
              {language === 'en' ? 'View All Categories' : language === 'hi' ? 'सभी श्रेणियां देखें' : 'সব ক্যাটাগরি দেখুন'}
            </button>
          </div>
        )}

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none" role="tablist" aria-label="Rice categories">
          <SlidersHorizontal className="w-3.5 h-3.5 text-stone-400 shrink-0 mr-1" />
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`cat-filter-${cat.id}`}
                onClick={() => handleCategoryClick(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                  isActive
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Products Grid / Skeleton Loading State */}
      {isCategoryLoading ? (
        <div id="products-loading-skeleton" className="animate-in fade-in duration-200" aria-busy="true">
          <ProductSkeletonGrid count={4} />
        </div>
      ) : filteredProducts.length === 0 ? (
        <div id="products-empty-state" className="bg-white rounded-2xl p-8 sm:p-10 text-center border border-stone-200 shadow-sm animate-in fade-in duration-200">
          <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-3">
            <Search className="w-6 h-6" />
          </div>
          <p className="text-base font-bold text-stone-900">
            {language === 'en'
              ? `No rice variety found for "${searchTerm}"`
              : language === 'hi'
              ? `"${searchTerm}" के लिए कोई चावल नहीं मिला`
              : `"${searchTerm}" নামে কোনো চাল পাওয়া যায়নি`}
          </p>
          <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
            {language === 'en'
              ? 'Try searching with another variety like Minikit, Gobindobhog, Basmati, Dudheswar or click below.'
              : language === 'hi'
              ? 'कृपया मिनीकेट, गोविंदभोग, बासमती या दूधेश्वर जैसे किसी अन्य नाम से खोजें।'
              : 'দয়া করে মিনিকেট, বাসমতী, গোবিন্দভোগ বা দুধেশ্বর ইত্যাদি কোনো নাম দিয়ে সার্চ করুন।'}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <button
              id="reset-search-btn"
              onClick={() => {
                setSearchTerm('');
                handleCategoryClick('all');
              }}
              className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition cursor-pointer shadow-sm"
            >
              {language === 'en' ? 'Clear Search & Show All' : language === 'hi' ? 'सर्च हटाएं व सभी देखें' : 'সার্চ মুছুন ও সমস্ত চাল দেখুন'}
            </button>
            <a
              href={`https://wa.me/918145625847?text=${encodeURIComponent(
                `নমস্কার গোপাল চাল ভাণ্ডার, আমি "${searchTerm}" চাল বা বস্তা সম্পর্কে জানতে চাই। দোকানে কি এই চাল পাওয়া যাবে?`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm"
            >
              <WhatsAppLogo className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Ask on WhatsApp' : language === 'hi' ? 'व्हाट्सएप पर पूछें' : 'হোয়াটসঅ্যাপে খোঁজ নিন'}</span>
            </a>
          </div>
        </div>
      ) : (
        <div id="products-grid" className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-200">
          {filteredProducts.map((product) => {
            const currentBagIndex = selectedBagMap[product.id] ?? 0;
            const currentBag = product.bagOptions[currentBagIndex] || product.bagOptions[0];

            return (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-sm hover:border-amber-500/30 transition flex flex-col justify-between group"
              >
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                      {getProductCategory(product.category)}
                    </span>
                    <div className="flex items-center gap-2">
                      {product.isBestseller && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-50 text-red-700 border border-red-200">
                          {language === 'en' ? 'Bestseller' : language === 'hi' ? 'बेस्ट सेलर' : 'বেস্ট সেলার'}
                        </span>
                      )}
                      {product.isAromatic && (
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {language === 'en' ? 'Aromatic' : language === 'hi' ? 'सुगंधित' : 'সুগন্ধি'}
                        </span>
                      )}
                      <span className="text-xs font-semibold text-stone-400 flex items-center gap-0.5">
                        <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  {/* Branded Rice / Grocery Product Photo Display */}
                  {product.bagImage && (
                    <div
                      onClick={() => setSelectedBagProduct(product)}
                      className="mb-3 rounded-2xl overflow-hidden bg-stone-950 border border-stone-800/90 p-2.5 relative group/img shadow-inner cursor-pointer select-none transition-all hover:border-amber-500/50"
                      title={language === 'en' ? 'Click to view high-resolution packaging photo' : language === 'hi' ? 'उच्च-रिज़ॉल्यूशन पैकेजिंग देखने के लिए क्लिक करें' : 'আসল বড় ফটো দেখতে ক্লিক করুন'}
                    >
                      <div className="h-44 sm:h-52 w-full flex items-center justify-center">
                        <img
                          src={product.bagImage}
                          alt={product.bagBrandName || product.nameBn}
                          className="h-full max-h-48 w-auto object-contain drop-shadow-md group-hover/img:scale-105 transition-transform duration-200"
                          loading="lazy"
                          decoding="async"
                          width={600}
                          height={800}
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Weight Tag Badge */}
                      <div className="absolute top-2 left-2 bg-amber-500 text-stone-950 font-black text-[10px] px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1">
                        <span>{product.bagWeightLabel || '২৬ কেজি বস্তা'}</span>
                      </div>

                      {/* Zoom Modal Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedBagProduct(product);
                        }}
                        className="absolute bottom-2 right-2 bg-stone-900/90 hover:bg-amber-600 text-white border border-stone-700/80 hover:border-amber-500 text-[11px] font-bold px-2.5 py-1 rounded-xl flex items-center gap-1.5 shadow transition active:scale-95 cursor-pointer backdrop-blur-sm"
                        title="View high-resolution photo"
                      >
                        <ZoomIn className="w-3.5 h-3.5 text-amber-400 group-hover/img:text-white" />
                        <span>{language === 'en' ? 'Original Photo' : language === 'hi' ? 'असली फोटो' : 'আসল ছবি'}</span>
                      </button>
                    </div>
                  )}

                  {/* Title & Description */}
                  <h3 className="text-base sm:text-lg font-bold text-stone-900 leading-snug group-hover:text-amber-700 transition-colors">
                    {getProductName(product)}
                  </h3>
                  <p className="text-[11px] text-stone-500 font-medium mb-1.5">
                    {product.nameEn}
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    {getProductDesc(product)}
                  </p>

                  {/* Grain & Origin info */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-stone-500 mb-3">
                    <span className="bg-stone-50 px-2 py-0.5 rounded font-medium border border-stone-100">
                      {t.grainTypeLabel}: {getGrainType(product)}
                    </span>
                    <span className="bg-stone-50 px-2 py-0.5 rounded font-medium border border-stone-100">
                      {t.originLabel}: {getProductOrigin(product)}
                    </span>
                  </div>

                  {/* Bag Weight Selection */}
                  <div className="mb-4">
                    <label className="text-[11px] font-bold text-stone-500 mb-1.5 block">
                      {language === 'en'
                        ? 'Select Bag Size / Weight:'
                        : language === 'hi'
                        ? 'बोरी का वजन / आकार चुनें:'
                        : 'ওজন / বস্তার সাইজ নির্বাচন করুন:'}
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {product.bagOptions.map((bag, idx) => {
                        const isSelected = idx === currentBagIndex;
                        return (
                          <button
                            key={bag.label}
                            id={`product-bag-opt-${product.id}-${idx}`}
                            type="button"
                            onClick={() => handleSelectBag(product.id, idx)}
                            className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition ${
                              isSelected
                                ? 'bg-amber-600 text-white border-amber-600 shadow-md'
                                : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                            }`}
                          >
                            {getBagLabel(bag)}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Pricing & Rate Check Footer */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-stone-400 block">
                      {getBagLabel(currentBag)} ({t.retail}):
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl font-extrabold text-amber-700">
                        ₹{currentBag.retailPrice}
                      </span>
                      {currentBag.wholesalePrice && (
                        <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-1.5 py-0.5 rounded border border-emerald-200">
                          {t.wholesale}: ₹{currentBag.wholesalePrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className="relative group">
                      {/* 🇮🇳 Original Indian Flag Tricolor Blur Glow Aura */}
                      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#FF9933] via-white to-[#138808] opacity-80 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-300 pointer-events-none" />
                      
                      <a
                        id={`product-whatsapp-${product.id}`}
                        href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                          language === 'en'
                            ? `Hello Gopal Chal Bhandar (Shop Owner - ${STORE_INFO.proprietorEn}), I want to inquire about ${product.nameEn} (${currentBag.labelEn || currentBag.label}). Is it in stock and what is today's best rate at Kalna store?`
                            : language === 'hi'
                            ? `नमस्ते गोपाल चावल भंडार (दुकान के मालिक - ${STORE_INFO.proprietorHi}), मैं ${product.nameHi || product.nameBn} (${currentBag.labelHi || currentBag.label}) के आज के भाव और स्टॉक के बारे में पूछना चाहता हूँ।`
                            : `নমস্কার গোপাল চাল ভাণ্ডার (দোকানের মালিক - ${STORE_INFO.proprietorBn}), আমি ${product.nameBn} (${currentBag.label} বস্তার) আজকের রেট ও কালনা দোকানের স্টক সম্পর্কে জানতে চাই।`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1caa4f] text-white text-xs font-black shadow-sm transition active:scale-95 cursor-pointer"
                        title="WhatsApp Inquiry"
                      >
                        <WhatsAppLogo className="w-4 h-4 fill-white" />
                        <span>{language === 'en' ? 'Inquiry' : language === 'hi' ? 'पूछताछ' : 'ইনকোয়ারি'}</span>
                      </a>
                    </div>

                    <a
                      href={`tel:${STORE_INFO.phone}`}
                      className="p-2 rounded-xl bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-900 border border-stone-200 hover:border-amber-300 transition active:scale-95 cursor-pointer flex items-center justify-center"
                      title="Direct Call"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

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

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, SlidersHorizontal, Star, Store, ChefHat, ZoomIn, Phone } from 'lucide-react';
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

  const filteredProducts = useMemo(() => {
    return RICE_PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      const term = searchTerm.trim().toLowerCase();
      const matchesSearch =
        term === '' ||
        product.nameBn.toLowerCase().includes(term) ||
        product.nameEn.toLowerCase().includes(term) ||
        product.grainType.toLowerCase().includes(term) ||
        product.descriptionBn.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const handleSelectBag = (productId: string, bagIndex: number) => {
    setSelectedBagMap((prev) => ({
      ...prev,
      [productId]: bagIndex,
    }));
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

        {/* Search Bar */}
        <div className="relative mb-3">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700 bg-stone-200 rounded-full w-4 h-4 flex items-center justify-center"
            >
              ✕
            </button>
          )}
        </div>

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
        <div id="products-empty-state" className="bg-white rounded-2xl p-10 text-center border border-stone-200 shadow-sm animate-in fade-in duration-200">
          <p className="text-base font-bold text-stone-900">
            {language === 'en'
              ? 'No rice variety found'
              : language === 'hi'
              ? 'कोई चावल नहीं मिला'
              : 'কোনো চালের সন্ধান পাওয়া যায়নি'}
          </p>
          <p className="text-xs text-stone-500 mt-1">
            {language === 'en'
              ? 'Please try searching with another keyword.'
              : language === 'hi'
              ? 'कृपया किसी अन्य नाम से खोजें।'
              : 'অনুগ্রহ করে অন্য কোনো নাম দিয়ে সার্চ করুন।'}
          </p>
          <button
            id="reset-category-btn"
            onClick={() => {
              setSearchTerm('');
              handleCategoryClick('all');
            }}
            className="mt-3 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition cursor-pointer"
          >
            {t.catAll}
          </button>
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

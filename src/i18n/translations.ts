import { AppLanguage } from '../types';

export interface Translations {
  // Common & Branding
  storeName: string;
  storeTagline: string;
  proprietor: string;
  addressText: string;
  phoneLabel: string;
  whatsappLabel: string;
  timingLabel: string;
  noOnlineDeliveryNotice: string;
  noOnlineDeliveryDesc: string;
  callNow: string;
  sendWhatsApp: string;
  viewMap: string;
  currency: string;
  kgUnit: string;
  bagUnit: string;
  retail: string;
  wholesale: string;

  // Header & Navigation
  navHome: string;
  navProducts: string;
  navDigitalFard: string;
  navRates: string;
  navStore: string;
  languageSelectLabel: string;

  // Home Hero & Features
  heroGreeting: string;
  heroTitle: string;
  heroSubtitle: string;
  heroExploreBtn: string;
  heroFardBtn: string;
  feature1Title: string;
  feature1Desc: string;
  feature2Title: string;
  feature2Desc: string;
  feature3Title: string;
  feature3Desc: string;
  feature4Title: string;
  feature4Desc: string;

  // Categories
  catAll: string;
  catMinikit: string;
  catBasmati: string;
  catGobindobhog: string;
  catBoiled: string;
  catAtap: string;
  catSpecial: string;
  catOil: string;
  catAtta: string;

  // Product Card & Catalog
  productsTitle: string;
  productsSubtitle: string;
  searchPlaceholder: string;
  addToFard: string;
  addedToFardToast: string;
  grainTypeLabel: string;
  originLabel: string;
  perKgRate: string;
  popularBag: string;
  inStock: string;
  outOfStock: string;

  // Digital Fard
  fardTitle: string;
  fardNoticeTitle: string;
  fardNoticeDesc: string;
  fardTabCurrent: string;
  fardTabKhata: string;
  fardOptionalLoginBtn: string;
  fardUserPhoneLabel: string;
  fardEmptyTitle: string;
  fardEmptyDesc: string;
  fardSelectRiceBtn: string;
  fardViewSavedBtn: string;
  fardClearBtn: string;
  fardPrintBtn: string;
  fardCustomerDetailsTitle: string;
  fardCustomerNameLabel: string;
  fardCustomerNamePlaceholder: string;
  fardCustomerPhoneLabel: string;
  fardCustomerPhonePlaceholder: string;
  fardVisitTimeLabel: string;
  fardVisitTimePlaceholder: string;
  fardNotesLabel: string;
  fardNotesPlaceholder: string;
  fardSummaryTitle: string;
  fardSummarySubtitle: string;
  fardTotalWeightLabel: string;
  fardTotalBagsLabel: string;
  fardTotalPayableLabel: string;
  fardPickupLocationLabel: string;
  fardPickupLocationValue: string;
  fardSaveToWebsiteBtn: string;
  fardSendWhatsAppAiBtn: string;
  fardGeneratingAiMsg: string;
  fardSavedSuccessMsg: string;
  fardViewSavedCodeBtn: string;
  fardSavedListTitle: string;
  fardSavedListSubtitle: string;
  fardSearchKhataPlaceholder: string;
  fardViewMemoBtn: string;
  fardDeleteBtn: string;
  fardMemoTitle: string;
  fardCounterNotice: string;
  fardCopyBtn: string;
  fardCopiedBtn: string;
  fardSendDirectWhatsApp: string;
  fardAiModalTitle: string;
  fardAiModalSubtitle: string;
  fardAiModalLabel: string;
  fardLoginModalTitle: string;
  fardLoginModalDesc: string;
  fardLoginModalSubmit: string;
  fardLoginModalSkip: string;

  // Rates Section
  ratesTitle: string;
  ratesSubtitle: string;
  ratesTableItem: string;
  ratesTableCategory: string;
  ratesTablePerKg: string;
  ratesTableBag26: string;
  ratesTableBag50: string;
  ratesTableTrend: string;
  ratesCalcTitle: string;
  ratesCalcSubtitle: string;
  ratesCalcChooseRice: string;
  ratesCalcChooseBag: string;
  ratesCalcQuantity: string;
  ratesCalcEstimatedTotal: string;
  ratesCalcFardAdd: string;

  // Store & Contact Section
  storePageTitle: string;
  storePageSubtitle: string;
  storeAddressHeading: string;
  storeLandmarkHeading: string;
  storeLandmarkText: string;
  storeHoursHeading: string;
  storeHoursWeekly: string;
  storeImportantNoticeTitle: string;
  storeDirectionsHeading: string;
  storeDirectionsText: string;
  storeCallButton: string;
  storeWhatsAppButton: string;

  // Cart & Fard specific UI
  cartHeaderTitle: string;
  cartItemCountSuffix: string;
  cartNoticeTitle: string;
  cartNoticeDesc: string;
  cartColRice: string;
  cartColRate: string;
  cartColTotal: string;
  cartClearAll: string;
  cartAddMoreRice: string;
  cartApproxTotalWeight: string;
  cartApproxTotalCost: string;
  cartCounterTotal: string;
  cartPaymentHelp: string;
  cartOrderToken: string;
  cartTokenRef: string;
  cartSendWhatsAppDesc: string;
  cartSendWhatsAppBtn: string;
  cartStoreAddressLabel: string;
  cartStoreAddressVal: string;
  cartDeliveryRuleTitle: string;
  cartDeliveryRuleDesc: string;
  cartVisitStore: string;
  cartStoreTimings: string;
  cartStoreHours: string;
  cartEmptyTitle: string;
  cartEmptyDesc: string;
  cartEmptyButton: string;

  // Rates Section specific UI
  ratesCalcChooseRiceBag: string;
  ratesCalcBagCount: string;
  ratesCalcTotalWeight: string;
  ratesCalcWholesaleSavings: string;
  ratesCalcWhatsAppQuote: string;
  ratesColRiceName: string;
  ratesColGrainGrade: string;
  ratesCol1KgRetail: string;
  ratesCol26KgBag: string;
  ratesCol50KgBag: string;
  ratesColWholesaleBenefit: string;
  ratesBadgeBestChoice: string;
  ratesBadgeMillRate: string;
  ratesBadgeBulkDiscount: string;
  ratesMarketSubject: string;
  ratesNoticeHeading: string;
  ratesNoticeLine1: string;
  ratesNoticeLine2: string;
  ratesNoticeLine3: string;

  // General & status helpers
  storeLocationDetail: string;
  deliveryWarningPopup: string;
  cookingGuideButton: string;
}

export const TRANSLATIONS: Record<AppLanguage, Translations> = {
  bn: {
    // Common & Branding
    storeName: 'গোপাল চাল ভাণ্ডার',
    storeTagline: 'খাঁটি ও তাজা চালের বিশ্বস্ত প্রতিষ্ঠান | পাইকারি ও খুচরো বিক্রেতা',
    proprietor: 'দোকানের মালিক - রাম দেবনাথ',
    addressText: 'কালনা আর.এম.সি মার্কেট, ভোলেবাবা রেস্টুরেন্ট ও কুণ্ডু শপের কাছে, কালনা, পূর্ব বর্ধমান, পশ্চিমবঙ্গ - ৭১৩৪০৯',
    phoneLabel: 'ফোন নম্বর',
    whatsappLabel: 'হোয়াটসঅ্যাপ',
    timingLabel: 'দোকান খোলার সময়',
    noOnlineDeliveryNotice: 'আমরা কোনো অনলাইন ডেলিভারি করি না',
    noOnlineDeliveryDesc: 'চাল কিনতে হলে সরাসরি আমাদের কালনার দোকানে আসতে হবে। গাড়ি বা টোটোয় বস্তা তুলে দেওয়া হবে।',
    callNow: 'সরাসরি কল করুন',
    sendWhatsApp: 'হোয়াটসঅ্যাপ করুন',
    viewMap: 'ম্যাপে রুট দেখুন',
    currency: '₹',
    kgUnit: 'কেজি',
    bagUnit: 'বস্তা/প্যাক',
    retail: 'খুচরো',
    wholesale: 'পাইকারি',

    // Header & Navigation
    navHome: 'হোম',
    navProducts: 'চাল সম্ভার',
    navDigitalFard: 'ডিজিটাল ফর্দ',
    navRates: 'বাজার দর',
    navStore: 'দোকানের রুট',
    languageSelectLabel: 'ভাষা নির্বাচন করুন',

    // Home Hero & Features
    heroGreeting: 'গোপাল চাল ভাণ্ডার',
    heroTitle: 'সেরা মানের চালের নির্ভরযোগ্য প্রতিষ্ঠান',
    heroSubtitle: 'কালনা আরএমসি মার্কেটে সেরা মানের খাঁটি ও বাছাই করা চাল। কোনো প্রকার কৃত্রিম পলিশ বা ভেজাল মুক্ত চালের নির্ভরযোগ্য প্রতিষ্ঠান।',
    heroExploreBtn: 'চাল সম্ভার দেখুন',
    heroFardBtn: 'বাজার দর দেখুন',
    feature1Title: '১০০% খাঁটি ও তাজা চাল',
    feature1Desc: 'বাছাইকৃত সেরা মানের খাঁটি ধান ও চাল, কোনো ভেজাল নেই।',
    feature2Title: 'পাইকারি ও খুচরো দর',
    feature2Desc: '১ কেজি খুচরো থেকে শুরু করে ২৫, ২৬ ও ৫০ কেজির পাইকারি বস্তা।',
    feature3Title: 'সরাসরি দোকান সংগ্রহ',
    feature3Desc: 'কালনা আর.এম.সি মার্কেটের দোকানে এসে যাচাই করে মাল নিন।',
    feature4Title: 'দৈনিক তাজা বাজার দর',
    feature4Desc: 'প্রতিদিনের খুচরো ও পাইকারি বস্তার দরদাম সহজে দেখে নিন।',

    // Categories
    catAll: 'সব সম্ভার',
    catMinikit: 'মিনিকেট',
    catBasmati: 'বাসমতী',
    catGobindobhog: 'গোবিন্দভোগ',
    catBoiled: 'সেদ্ধ চাল',
    catAtap: 'আতপ চাল',
    catSpecial: 'স্পেশাল চাল',
    catOil: 'সরিষার তেল (Saloni)',
    catAtta: 'গম আটা (Atta)',

    // Product Card & Catalog
    productsTitle: 'চালের তালিকা ও সম্ভার',
    productsSubtitle: 'পছন্দের চাল ও বস্তার সাইজ নির্বাচন করে ডিজিটাল ফর্দে যোগ করুন এবং ওয়েবসাইটে সেভ করে রাখুন',
    searchPlaceholder: 'চাল খুঁজুন (যেমন: মিনিকেট, বাসমতী, গোবিন্দভোগ)...',
    addToFard: 'ডিজিটাল ফর্দে যোগ',
    addedToFardToast: 'ডিজিটাল ফর্দে যোগ হয়েছে',
    grainTypeLabel: 'দানা',
    originLabel: 'উৎপত্তি',
    perKgRate: 'প্রতি কেজি দর',
    popularBag: 'জনপ্রিয় সাইজ',
    inStock: 'স্টকে আছে',
    outOfStock: 'স্টক শেষ',

    // Digital Fard
    fardTitle: 'ভার্চুয়াল ডিজিটাল ফর্দ',
    fardNoticeTitle: 'ওয়েবসাইটে সংরক্ষিত ভার্চুয়াল ডিজিটাল ফর্দ',
    fardNoticeDesc: 'আমরা কোনো অনলাইন ডেলিভারি করি না। এই ডিজিটাল ফর্দটি ওয়েবসাইটে সেভ করে রাখুন এবং দোকানে এসে স্লিপ নম্বর দেখালেই সাথে সাথে চাল প্রস্তুত করে দেওয়া হবে।',
    fardTabCurrent: 'বর্তমান ডিজিটাল ফর্দ',
    fardTabKhata: 'সংরক্ষিত ফর্দ খাতা',
    fardOptionalLoginBtn: 'মোবাইল নম্বর দিয়ে ফর্দ খুঁজুন / লগইন (ঐচ্ছিক)',
    fardUserPhoneLabel: 'সংরক্ষিত নম্বর',
    fardEmptyTitle: 'বর্তমান ডিজিটাল ফর্দটি খালি',
    fardEmptyDesc: 'দোকানে আসার আগে চালের তালিকা থেকে পছন্দের চাল ও বস্তার সাইজ বেছে নিন। ফর্দ তৈরি করে ওয়েবসাইটে সেভ রাখলে দোকানে এসে সহজেই চাল তুলে নিতে পারবেন।',
    fardSelectRiceBtn: 'চাল তালিকা থেকে বেছে নিন',
    fardViewSavedBtn: 'আগের সংরক্ষিত ফর্দ দেখুন',
    fardClearBtn: 'ফর্দ খালি করুন',
    fardPrintBtn: 'প্রিন্ট',
    fardCustomerDetailsTitle: 'ডিজিটাল ফর্দে আপনার বিবরণ (যাতে দোকানে সহজে খুঁজে পাওয়া যায়)',
    fardCustomerNameLabel: 'আপনার নাম:',
    fardCustomerNamePlaceholder: 'যেমন: রাম বাবু / সুবীর কর্মকার',
    fardCustomerPhoneLabel: 'মোবাইল নম্বর (ফর্দ স্টোর করার জন্য):',
    fardCustomerPhonePlaceholder: 'যেমন: 8145625847',
    fardVisitTimeLabel: 'কখন দোকানে আসবেন (সময়):',
    fardVisitTimePlaceholder: 'যেমন: আজ বিকাল ৫টায় / কাল সকালে',
    fardNotesLabel: 'বিশেষ নোট / নির্দেশ (ঐচ্ছিক):',
    fardNotesPlaceholder: 'যেমন: বস্তা টোটোয় তোলার জন্য সাহায্য লাগবে',
    fardSummaryTitle: 'ডিজিটাল ফর্দ সারাংশ',
    fardSummarySubtitle: 'দোকান কাউন্টারে সরাসরি পরিশোধযোগ্য আনুমানিক হিসাব',
    fardTotalWeightLabel: 'মোট চালের ওজন',
    fardTotalBagsLabel: 'প্যাকেট / বস্তার সংখ্যা',
    fardTotalPayableLabel: 'মোট প্রদেয় মূল্য',
    fardPickupLocationLabel: 'কেনাকাটার স্থান',
    fardPickupLocationValue: 'সরাসরি কালনা দোকান কাউন্টার',
    fardSaveToWebsiteBtn: 'ওয়েবসাইটে ডিজিটাল ফর্দ সেভ করুন',
    fardSendWhatsAppAiBtn: '✨ AI হোয়াটসঅ্যাপ ফর্দ পাঠান',
    fardGeneratingAiMsg: 'AI দিয়ে সুন্দর ফর্দ তৈরি হচ্ছে...',
    fardSavedSuccessMsg: 'আপনার ডিজিটাল ফর্দটি ওয়েবসাইটে সফলভাবে সেভ হয়েছে! ফর্দ কোড:',
    fardViewSavedCodeBtn: 'ফর্দ দেখুন',
    fardSavedListTitle: 'সংরক্ষিত ডিজিটাল ফর্দসমূহ',
    fardSavedListSubtitle: 'আপনার তৈরি করা সমস্ত ডিজিটাল ফর্দ এখানে নিরাপদে সংরক্ষিত রয়েছে',
    fardSearchKhataPlaceholder: 'ফর্দ নং বা মোবাইল দিয়ে খুঁজুন...',
    fardViewMemoBtn: 'ডিজিটাল মেমো',
    fardDeleteBtn: 'মুছে ফেলুন',
    fardMemoTitle: 'ডিজিটাল ফর্দ মেমো রসিদ',
    fardCounterNotice: 'দোকান কাউন্টার রসিদ: কালনা আর.এম.সি মার্কেট গোপাল চাল ভাণ্ডারে এসে এই ফর্দ নম্বরটি দেখালেই বস্তা প্রদান করা হবে।',
    fardCopyBtn: 'টেক্সট কপি',
    fardCopiedBtn: 'কপি হয়েছে!',
    fardSendDirectWhatsApp: 'সরাসরি হোয়াটসঅ্যাপে পাঠান',
    fardAiModalTitle: 'হোয়াটসঅ্যাপ সুন্দর ডিজিটাল ফর্দ বার্তা',
    fardAiModalSubtitle: 'ভদ্র ও মার্জিত অভিবাদন সহ (যেমন: "নমস্কার রাম বাবু...")',
    fardAiModalLabel: 'প্রস্তুতকৃত বার্তার প্রিভিউ (প্রয়োজনে সম্পাদনা করুন):',
    fardLoginModalTitle: 'মোবাইল নম্বর লগইন (ঐচ্ছিক)',
    fardLoginModalDesc: 'পাসওয়ার্ড ছাড়াই শুধুমাত্র আপনার ১০ সংখ্যার মোবাইল নম্বর দিয়ে লগইন করুন, যাতে আপনার সব সংরক্ষিত ডিজিটাল ফর্দ এক ক্লিকে দেখতে পান।',
    fardLoginModalSubmit: 'লগইন করুন ও ফর্দ দেখুন',
    fardLoginModalSkip: 'লগইন ছাড়াই চালিয়ে যান',

    // Rates Section
    ratesTitle: 'আজকের বাজার দর ও পাইকারি রেট',
    ratesSubtitle: 'কালনা মোকামের প্রতিদিনের চালের বাজার দর ও পাইকারি বস্তার হিসাব',
    ratesTableItem: 'চালের নাম',
    ratesTableCategory: 'ধরন',
    ratesTablePerKg: '১ কেজি খুচরো',
    ratesTableBag26: '২৬ কেজি বস্তা',
    ratesTableBag50: '৫০ কেজি বস্তা',
    ratesTableTrend: 'দর ওঠানামা',
    ratesCalcTitle: 'বস্তার দর ও ওজন ক্যালকুলেটর',
    ratesCalcSubtitle: 'আপনার প্রয়োজন অনুযায়ী চালের বস্তা ও মোট খরচের হিসাব বের করুন',
    ratesCalcChooseRice: 'চাল নির্বাচন করুন',
    ratesCalcChooseBag: 'বস্তার সাইজ',
    ratesCalcQuantity: 'বস্তার সংখ্যা',
    ratesCalcEstimatedTotal: 'মোট আনুমানিক খরচ',
    ratesCalcFardAdd: 'ফর্দে যোগ করুন',

    // Store & Contact Section
    storePageTitle: 'দোকানের ঠিকানা ও যোগাযোগের মাধ্যম',
    storePageSubtitle: 'কালনা আর.এম.সি মার্কেটে আমাদের দোকানে আসার বিস্তারিত পথনির্দেশ',
    storeAddressHeading: 'দোকানের সঠিক অবস্থান',
    storeLandmarkHeading: 'কাছের ল্যান্ডমার্ক',
    storeLandmarkText: 'কালনা আর.এম.সি মার্কেট (RMC Market), ভোলেবাবা রেস্টুরেন্ট ও কুণ্ডু শপের ঠিক কাছেই অবস্থিত।',
    storeHoursHeading: 'দোকানের সময়সূচী',
    storeHoursWeekly: 'প্রতিদিন সকাল ৯:৩০ – দুপুর ২:০০ এবং বিকাল ৫:৩০ – রাত ৯:৩০ পর্যন্ত খোলা থাকে। দোকান কখনো বন্ধ থাকতে পারে, তাই আসার আগে ফোন বা হোয়াটসঅ্যাপে নিশ্চিত হওয়া বাঞ্ছনীয়।',
    storeImportantNoticeTitle: 'জরুরি নির্দেশিকা (দোকান থেকে সরাসরি ক্রয়)',
    storeDirectionsHeading: 'কীভাবে পৌঁছাবেন',
    storeDirectionsText: 'কালনা রেলওয়ে স্টেশন বা বাস স্ট্যান্ড থেকে টোটো ধরে সোজা চলে আসুন কালনা আর.এম.সি মার্কেটে। ভোলেবাবা রেস্টুরেন্ট পার করে কুণ্ডু শপের পাশেই গোপাল চাল ভাণ্ডারের সাইনবোর্ড দেখতে পাবেন।',
    storeCallButton: 'সরাসরি ফোন করুন: +91 81456 25847',
    storeWhatsAppButton: 'হোয়াটসঅ্যাপ করুন: +91 81456 25847',

    // Cart & Fard specific UI
    cartHeaderTitle: 'ডিজিটাল ফর্দ',
    cartItemCountSuffix: 'তালিকায় মোট {count}টি আইটেম',
    cartNoticeTitle: 'দোকানে এসে এই ডিজিটাল ফর্দ দেখিয়ে সরাসরি বস্তা সংগ্রহ করুন',
    cartNoticeDesc: 'আমাদের কোনো অনলাইন ডেলিভারি নেই। দোকানে আসার আগে চাল ও বস্তার পরিমাণ ঠিক করে ফর্দ প্রস্তুত রাখলে কাউন্টারে দ্রুত বস্তা পেতে সুবিধা হবে।',
    cartColRice: 'চাল ও সাইজ',
    cartColRate: 'দর ও পরিমাণ',
    cartColTotal: 'মোট',
    cartClearAll: 'সব মুছুন',
    cartAddMoreRice: 'আরও চাল বা বস্তা যোগ করুন',
    cartApproxTotalWeight: 'মোট চালের ওজন (আনুমানিক)',
    cartApproxTotalCost: 'আনুমানিক মোট মূল্য',
    cartCounterTotal: 'দোকানের কাউন্টারে মোট',
    cartPaymentHelp: 'কাউন্টারে সরাসরি নগদ টাকা, গুগল পে, ফোনপে বা ইউপিআই কিউআর কোডে পেমেন্ট করতে পারবেন।',
    cartOrderToken: 'অর্ডার টোকেন',
    cartTokenRef: 'দোকানে এসে বলার জন্য রেফারেন্স কোড',
    cartSendWhatsAppDesc: 'দোকানে বস্তা বুকিংয়ের জন্য হোয়াটসঅ্যাপে ফর্দ পাঠান',
    cartSendWhatsAppBtn: 'হোয়াটসঅ্যাপে পাঠিয়ে নিশ্চিত করুন',
    cartStoreAddressLabel: 'দোকানের ঠিকানা:',
    cartStoreAddressVal: 'কালনা আরএমসি মার্কেট, পূর্ব বর্ধমান (ভোলেবাবা রেস্টুরেন্টের পাশে)',
    cartDeliveryRuleTitle: 'অনলাইন ডেলিভারি সংক্রান্ত জরুরি নিয়ম',
    cartDeliveryRuleDesc: 'আমাদের কোনো অনলাইন ডেলিভারি বা কুরিয়ার সার্ভিস নেই। চাল কিনতে হলে আপনাকে অবশ্যই কালনা আরএমসি মার্কেটের দোকানে আসতে হবে। ভারী বস্তা তোলার জন্য দোকানে সহায়ক কর্মীরা প্রস্তুত আছেন।',
    cartVisitStore: 'দোকানে আসুন:',
    cartStoreTimings: 'দোকান খোলার সময়:',
    cartStoreHours: 'সকাল ৯:৩০ - দুপুর ২:০০ ও বিকাল ৫:৩০ - রাত ৯:৩০ (আসার আগে ফোন করুন)',
    cartEmptyTitle: 'আপনার ডিজিটাল ফর্দ এখনও খালি',
    cartEmptyDesc: 'দোকানে আসার আগে চালের তালিকা প্রস্তুত করতে চাল সম্ভার থেকে আপনার পছন্দের চাল ও বস্তার সাইজ বেছে নিন।',
    cartEmptyButton: 'চালের তালিকা দেখুন',

    // Rates Section specific UI
    ratesCalcChooseRiceBag: 'চাল ও ওজন নির্বাচন করুন:',
    ratesCalcBagCount: 'বস্তার সংখ্যা (ব্যাগ):',
    ratesCalcTotalWeight: 'মোট ওজন:',
    ratesCalcWholesaleSavings: 'পাইকারি সঞ্চয়:',
    ratesCalcWhatsAppQuote: 'হোয়াটসঅ্যাপে রেট কোটেশন নিন',
    ratesColRiceName: 'চালের প্রকার ও নাম',
    ratesColGrainGrade: 'দানা ও গ্রেড',
    ratesCol1KgRetail: '১ কেজি খুচরো দর',
    ratesCol26KgBag: '২৬ কেজি বস্তা',
    ratesCol50KgBag: '৫০ কেজি বস্তা',
    ratesColWholesaleBenefit: 'পাইকারি সুবিধা',
    ratesBadgeBestChoice: 'সেরা পছন্দ',
    ratesBadgeMillRate: 'পাইকারি সেরা রেট উপলব্ধ',
    ratesBadgeBulkDiscount: '১০+ বস্তায় স্পেশাল পাইকারি ছাড়',
    ratesMarketSubject: 'বাজার পরিবর্তনের সাপেক্ষে',
    ratesNoticeHeading: 'পাইকারি মূল্যের বিশেষ নির্দেশিকা:',
    ratesNoticeLine1: 'চালের বাজার দর ধান ও বাজার পরিস্থিতির উপর নির্ভরশীল, তাই প্রতিদিন সামান্য ওঠানামা হতে পারে।',
    ratesNoticeLine2: 'বিয়েবাড়ি, অন্নপ্রাশন বা ক্যাটারিংয়ের জন্য ১০ বস্তার বেশি অর্ডারে বিশেষ পাইকারি সুবিধা ও ছাড় দেওয়া হয়।',
    ratesNoticeLine3: 'সরাসরি দোকানে নগদ বা ইউপিআই (UPI) পেমেন্ট সুবিধা।',

    // General & status helpers
    storeLocationDetail: 'কালনা আরএমসি মার্কেট (ভোলেবাবা রেস্টুরেন্ট ও কুণ্ডু দোকানের কাছে) • টোটো ও পিক-আপ লোডিং সুবিধা',
    deliveryWarningPopup: 'কালনা আরএমসি মার্কেট (ভোলেবাবা রেস্টুরেন্ট ও কুণ্ডু দোকানের কাছে)। চাল কিনতে দোকানে সরাসরি আসুন, কোনো অনলাইন হোম ডেলিভারি নেই।',
    cookingGuideButton: 'রান্নার গাইড',
  },

  en: {
    // Common & Branding
    storeName: 'Gopal Chal Bhandar',
    storeTagline: 'Trusted House of Pure & Fresh Rice | Wholesale & Retail Dealer',
    proprietor: 'Shop Owner - Ram Debnath',
    addressText: 'Kalna RMC Market, Near Bholebaba Restaurant & Kundu Shop, Kalna, Purba Bardhaman, West Bengal - 713409',
    phoneLabel: 'Phone Number',
    whatsappLabel: 'WhatsApp',
    timingLabel: 'Store Opening Hours',
    noOnlineDeliveryNotice: 'We Do Not Offer Online Delivery',
    noOnlineDeliveryDesc: 'To purchase rice, customers must visit our Kalna store in person. Rice sacks will be loaded directly into your vehicle/toto.',
    callNow: 'Call Store Directly',
    sendWhatsApp: 'Send WhatsApp',
    viewMap: 'View Route on Map',
    currency: '₹',
    kgUnit: 'kg',
    bagUnit: 'bag/pack',
    retail: 'Retail',
    wholesale: 'Wholesale',

    // Header & Navigation
    navHome: 'Home',
    navProducts: 'Rice Catalog',
    navDigitalFard: 'Digital Fard',
    navRates: 'Market Rates',
    navStore: 'Store Route',
    languageSelectLabel: 'Select Language',

    // Home Hero & Features
    heroGreeting: 'Gopal Chal Bhandar',
    heroTitle: 'The Most Trusted Destination for Premium Rice',
    heroSubtitle: 'Finest quality, hand-selected pure rice varieties in Kalna RMC Market. 100% natural, unpolished, and chemical-free quality rice.',
    heroExploreBtn: 'Explore Rice Catalog',
    heroFardBtn: 'View Mandi Rates',
    feature1Title: '100% Pure & Fresh Rice',
    feature1Desc: 'Finest hand-selected grains of pure quality without artificial polishing.',
    feature2Title: 'Wholesale & Retail Rates',
    feature2Desc: 'From 1kg retail packs up to 25kg, 26kg & 50kg heavy wholesale sacks.',
    feature3Title: 'Direct In-Store Pickup',
    feature3Desc: 'Visit our shop at Kalna RMC Market to inspect grain quality and purchase directly.',
    feature4Title: 'Daily Mandi Rates',
    feature4Desc: 'Check daily updated retail and wholesale bag prices in one convenient place.',

    // Categories
    catAll: 'All Items',
    catMinikit: 'Minikit',
    catBasmati: 'Basmati',
    catGobindobhog: 'Gobindobhog',
    catBoiled: 'Boiled Rice',
    catAtap: 'Atap / Raw',
    catSpecial: 'Special Rice',
    catOil: 'Mustard Oil (Saloni)',
    catAtta: 'Chakki Atta & Flour',

    // Product Card & Catalog
    productsTitle: 'Premium Rice Catalog & Stock',
    productsSubtitle: 'Select your preferred rice and bag size to add to your Digital Fard and save on website',
    searchPlaceholder: 'Search rice (e.g. Minikit, Basmati, Gobindobhog)...',
    addToFard: 'Add to Digital Fard',
    addedToFardToast: 'Added to Digital Fard',
    grainTypeLabel: 'Grain',
    originLabel: 'Origin',
    perKgRate: 'Rate per kg',
    popularBag: 'Popular Size',
    inStock: 'In Stock',
    outOfStock: 'Out of Stock',

    // Digital Fard
    fardTitle: 'Virtual Digital Fard',
    fardNoticeTitle: 'Virtual Digital Shopping Fard Stored on Website',
    fardNoticeDesc: 'We do not deliver online. Save this digital fard on the website and simply show your token code at the store counter to get your bags measured and packed.',
    fardTabCurrent: 'Current Digital Fard',
    fardTabKhata: 'Saved Fard Khata',
    fardOptionalLoginBtn: 'Lookup / Login with Mobile (Optional)',
    fardUserPhoneLabel: 'Saved Mobile',
    fardEmptyTitle: 'Your Digital Fard is Empty',
    fardEmptyDesc: 'Browse our catalog to select rice varieties and bag sizes before visiting the shop. Saving your fard allows instant counter checkout in Kalna.',
    fardSelectRiceBtn: 'Browse Rice Catalog',
    fardViewSavedBtn: 'View Previously Saved Fards',
    fardClearBtn: 'Clear Fard',
    fardPrintBtn: 'Print',
    fardCustomerDetailsTitle: 'Customer Details (Helps locate your fard quickly at store)',
    fardCustomerNameLabel: 'Your Name:',
    fardCustomerNamePlaceholder: 'e.g., Ram Babu / Subir Karmakar',
    fardCustomerPhoneLabel: 'Mobile Number (To store fard):',
    fardCustomerPhonePlaceholder: 'e.g., 8145625847',
    fardVisitTimeLabel: 'When will you visit the shop:',
    fardVisitTimePlaceholder: 'e.g., Today at 5:00 PM / Tomorrow morning',
    fardNotesLabel: 'Special Instructions / Notes (Optional):',
    fardNotesPlaceholder: 'e.g., Need help loading heavy sacks into toto',
    fardSummaryTitle: 'Digital Fard Summary',
    fardSummarySubtitle: 'Estimated amount payable directly at store counter',
    fardTotalWeightLabel: 'Total Rice Weight',
    fardTotalBagsLabel: 'Total Bags / Packs',
    fardTotalPayableLabel: 'Total Payable Amount',
    fardPickupLocationLabel: 'Pickup Location',
    fardPickupLocationValue: 'Directly at Kalna Store Counter',
    fardSaveToWebsiteBtn: 'Save Digital Fard to Website',
    fardSendWhatsAppAiBtn: '✨ Send AI WhatsApp Fard',
    fardGeneratingAiMsg: 'Generating polite AI message...',
    fardSavedSuccessMsg: 'Your digital fard has been successfully saved to the website! Token Code:',
    fardViewSavedCodeBtn: 'View Fard',
    fardSavedListTitle: 'Saved Digital Fards Khata',
    fardSavedListSubtitle: 'All your virtual shopping fards are safely preserved here on the website',
    fardSearchKhataPlaceholder: 'Search by token code or mobile number...',
    fardViewMemoBtn: 'Digital Memo',
    fardDeleteBtn: 'Delete',
    fardMemoTitle: 'Digital Store Cash Memo Receipt',
    fardCounterNotice: 'Store Counter Receipt: Show this fard code at Gopal Chal Bhandar, Kalna RMC Market to receive your sacks immediately.',
    fardCopyBtn: 'Copy Text',
    fardCopiedBtn: 'Copied!',
    fardSendDirectWhatsApp: 'Open Directly in WhatsApp',
    fardAiModalTitle: 'Polite WhatsApp Digital Fard Message',
    fardAiModalSubtitle: 'Crafted with respectful greeting (e.g., "নমস্কার রাম বাবু...")',
    fardAiModalLabel: 'Generated Message Preview (Edit if needed):',
    fardLoginModalTitle: 'Mobile Number Login (Optional)',
    fardLoginModalDesc: 'Enter your 10-digit mobile number without password to view and tag all your stored digital fards in one click.',
    fardLoginModalSubmit: 'Login & View Fards',
    fardLoginModalSkip: 'Continue Without Login',

    // Rates Section
    ratesTitle: 'Today\'s Market Rates & Wholesale Prices',
    ratesSubtitle: 'Daily updated wholesale and retail rice rates at Kalna rice mandi',
    ratesTableItem: 'Rice Name',
    ratesTableCategory: 'Type',
    ratesTablePerKg: '1 kg Retail',
    ratesTableBag26: '26 kg Sack',
    ratesTableBag50: '50 kg Sack',
    ratesTableTrend: 'Price Trend',
    ratesCalcTitle: 'Sack Price & Weight Calculator',
    ratesCalcSubtitle: 'Calculate bag quantities, weights, and total estimated budget',
    ratesCalcChooseRice: 'Select Rice Variety',
    ratesCalcChooseBag: 'Bag Size',
    ratesCalcQuantity: 'Number of Bags',
    ratesCalcEstimatedTotal: 'Estimated Total Cost',
    ratesCalcFardAdd: 'Add to Digital Fard',

    // Store & Contact Section
    storePageTitle: 'Store Location & Direct Contact',
    storePageSubtitle: 'Directions to visit our physical rice shop at Kalna RMC Market',
    storeAddressHeading: 'Physical Shop Location',
    storeLandmarkHeading: 'Nearby Landmark',
    storeLandmarkText: 'Located at Kalna RMC Market, right near Bholebaba Restaurant and Kundu Shop.',
    storeHoursHeading: 'Business Hours',
    storeHoursWeekly: 'Open daily: 9:30 AM – 2:00 PM and 5:30 PM – 9:30 PM. The shop may be closed sometimes, so please call or WhatsApp to confirm before visiting.',
    storeImportantNoticeTitle: 'Important In-Store Purchase Notice',
    storeDirectionsHeading: 'How to Reach the Shop',
    storeDirectionsText: 'From Kalna Railway Station or Bus Stand, take a toto directly to Kalna RMC Market. Just past Bholebaba Restaurant and next to Kundu Shop, you will see the large Gopal Chal Bhandar signboard.',
    storeCallButton: 'Direct Call: +91 81456 25847',
    storeWhatsAppButton: 'WhatsApp: +91 81456 25847',

    // Cart & Fard specific UI
    cartHeaderTitle: 'Digital Fard',
    cartItemCountSuffix: 'Total {count} items in list',
    cartNoticeTitle: 'Show this Digital Fard at store counter to pick up your bags',
    cartNoticeDesc: 'We do not offer online delivery. Preparing your fard before visiting ensures fast pickup at our Kalna store counter.',
    cartColRice: 'Rice & Size',
    cartColRate: 'Rate & Quantity',
    cartColTotal: 'Total',
    cartClearAll: 'Clear All',
    cartAddMoreRice: 'Add More Rice / Bags',
    cartApproxTotalWeight: 'Total Rice Weight (Approx)',
    cartApproxTotalCost: 'Estimated Total Cost',
    cartCounterTotal: 'Total at Store Counter',
    cartPaymentHelp: 'You can pay at counter via Cash, Google Pay, PhonePe, Paytm or UPI QR code.',
    cartOrderToken: 'Order Token',
    cartTokenRef: 'Reference code to mention at the store',
    cartSendWhatsAppDesc: 'Send Fard on WhatsApp for shop bag booking',
    cartSendWhatsAppBtn: 'Send to WhatsApp to Confirm',
    cartStoreAddressLabel: 'Store Address:',
    cartStoreAddressVal: 'Kalna RMC Market, Purba Bardhaman (Near Bholebaba Restaurant)',
    cartDeliveryRuleTitle: 'Important Notice Regarding Online Delivery',
    cartDeliveryRuleDesc: 'We do not have any online delivery or courier service. To purchase rice, you must visit our Kalna RMC Market shop. Store helpers are ready to load heavy sacks.',
    cartVisitStore: 'Visit Shop:',
    cartStoreTimings: 'Store Timings:',
    cartStoreHours: '9:30 AM - 2:00 PM & 5:30 PM - 9:30 PM (Confirm by Call)',
    cartEmptyTitle: 'Your Digital Fard is currently empty',
    cartEmptyDesc: 'Select your preferred rice varieties and bag sizes from our catalog before visiting the store.',
    cartEmptyButton: 'Browse Rice Catalog',

    // Rates Section specific UI
    ratesCalcChooseRiceBag: 'Select Rice & Bag Size:',
    ratesCalcBagCount: 'Number of Bags:',
    ratesCalcTotalWeight: 'Total Weight:',
    ratesCalcWholesaleSavings: 'Wholesale Savings:',
    ratesCalcWhatsAppQuote: 'Get Rate Quotation on WhatsApp',
    ratesColRiceName: 'Rice Variety & Name',
    ratesColGrainGrade: 'Grain & Grade',
    ratesCol1KgRetail: '1 kg Retail Rate',
    ratesCol26KgBag: '26 kg Sack',
    ratesCol50KgBag: '50 kg Sack',
    ratesColWholesaleBenefit: 'Wholesale Advantage',
    ratesBadgeBestChoice: 'Best Choice',
    ratesBadgeMillRate: 'Best Wholesale Rates Available',
    ratesBadgeBulkDiscount: 'Special Bulk Discount on 10+ Bags',
    ratesMarketSubject: 'Subject to Market Change',
    ratesNoticeHeading: 'Wholesale Pricing Guidelines:',
    ratesNoticeLine1: 'Rice market rates depend on seasonal paddy harvest and market conditions, hence slight daily fluctuations may occur.',
    ratesNoticeLine2: 'For weddings, ceremonies, or catering orders of 10+ bags, special wholesale rates and bulk discounts are offered.',
    ratesNoticeLine3: 'Direct payment via Cash or UPI at store counter.',

    // General & status helpers
    storeLocationDetail: 'Kalna RMC Market (Near Bholebaba Restaurant & Kundu Shop) • Toto & vehicle loading facility',
    deliveryWarningPopup: 'Kalna RMC Market (Near Bholebaba Restaurant & Kundu Shop). Please visit store directly to purchase rice, no online delivery.',
    cookingGuideButton: 'Cooking Guide',
  },

  hi: {
    // Common & Branding
    storeName: 'गोपाल चावल भंडार',
    storeTagline: 'शुद्ध एवं ताज़ा चावल का विश्वसनीय प्रतिष्ठান | थोक एवं खुदरा विक्रेता',
    proprietor: 'दुकान के मालिक - राम देवनाथ',
    addressText: 'कालना आर.एम.सी मार्केट, भोलेबाबा रेस्टोरेंट और कुंडू शॉप के पास, कालना, पूर्व बर्धमान, पश्चिम बंगाल - 713409',
    phoneLabel: 'फ़ोन नंबर',
    whatsappLabel: 'व्हाट्सएप',
    timingLabel: 'दुकान खुलने का समय',
    noOnlineDeliveryNotice: 'हम कोई ऑनलाइन होम डिलीवरी नहीं करते',
    noOnlineDeliveryDesc: 'चावल खरीदने के लिए ग्राहकों को सीधे हमारी कालना दुकान पर आना होगा। बोरे आपकी गाड़ी या टोटो में सीधे लोड कर दिए जाएंगे।',
    callNow: 'दुकान पर कॉल करें',
    sendWhatsApp: 'व्हाट्सएप करें',
    viewMap: 'मैप पर रास्ता देखें',
    currency: '₹',
    kgUnit: 'किग्रा',
    bagUnit: 'बोरी/पैक',
    retail: 'खुदरा',
    wholesale: 'थोक',

    // Header & Navigation
    navHome: 'होम',
    navProducts: 'चावल सूची',
    navDigitalFard: 'डिजिटल फर्द',
    navRates: 'बाजार भाव',
    navStore: 'दुकान का रास्ता',
    languageSelectLabel: 'भाषा चुनें',

    // Home Hero & Features
    heroGreeting: 'गोपाल चावल भंडार',
    heroTitle: 'उत्कृष्ट गुणवत्ता वाले चावल का सबसे भरोसेमंद प्रतिष्ठान',
    heroSubtitle: 'कालना आरएमसी मार्केट में बेहतरीन शुद्ध एवं चयनित चावल। बिना किसी कृत्रिम पॉलिश या मिलावट के ताज़ा चावल का विश्वसनीय केंद्र।',
    heroExploreBtn: 'चावल सूची देखें',
    heroFardBtn: 'मंडी भाव देखें',
    feature1Title: '100% शुद्ध एवं ताज़ा चावल',
    feature1Desc: 'चयनित उत्तम किस्म का शुद्ध धान और चावल, बिना किसी रासायनिक पॉलिश के।',
    feature2Title: 'थोक एवं खुदरा भाव',
    feature2Desc: '1 किग्रा खुदरा से लेकर 25, 26 और 50 किग्रा की थोक बोरियां उपलब्ध।',
    feature3Title: 'सीधे दुकान से खरीद',
    feature3Desc: 'कालना आर.एम.सी मार्केट दुकान पर आकर चावल की गुणवत्ता परखें और खरीदें।',
    feature4Title: 'दैनिक मंडी भाव',
    feature4Desc: 'प्रतिदिन के खुदरा और थोक बोरी भाव एक क्लिक में आसानी से देखें।',

    // Categories
    catAll: 'सभी वस्तुएं',
    catMinikit: 'मिनीकेट',
    catBasmati: 'बासमती',
    catGobindobhog: 'गोबिंदभोग',
    catBoiled: 'उबला (सेद्ध) चावल',
    catAtap: 'आतप / कच्चा चावल',
    catSpecial: 'विशेष किस्में',
    catOil: 'सरसों तेल (सलोनी)',
    catAtta: 'चक्की आटा (Atta)',

    // Product Card & Catalog
    productsTitle: 'चावल की किस्में एवं स्टॉक',
    productsSubtitle: 'मनपसंद चावल और बोरी का आकार चुनकर डिजिटल फर्द में जोड़ें और वेबसाइट पर सुरक्षित रखें',
    searchPlaceholder: 'चावल खोजें (जैसे: मिनीकेट, बासमती, गोबिंदभोग)...',
    addToFard: 'डिजिटल फर्द में जोड़ें',
    addedToFardToast: 'डिजिटल फर्द में जोड़ा गया',
    grainTypeLabel: 'दाना',
    originLabel: 'उत्पत्ति',
    perKgRate: 'प्रति किग्रा भाव',
    popularBag: 'लोकप्रिय आकार',
    inStock: 'स्टॉक में उपलब्ध',
    outOfStock: 'स्टॉक समाप्त',

    // Digital Fard
    fardTitle: 'वर्चुअल डिजिटल फर्द',
    fardNoticeTitle: 'वेबसाइट पर सुरक्षित वर्चुअल डिजिटल फर्द',
    fardNoticeDesc: 'हम कोई ऑनलाइन डिलीवरी नहीं करते हैं। इस डिजिटल फर्द को वेबसाइट पर सहेजें और दुकान पर आकर टोकन नंबर दिखाते ही चावल तैयार मिलेगा।',
    fardTabCurrent: 'वर्तमान डिजिटल फर्द',
    fardTabKhata: 'सुरक्षित फर्द खाता',
    fardOptionalLoginBtn: 'मोबाइल नंबर से फर्द खोजें / लॉगिन (वैकल्पिक)',
    fardUserPhoneLabel: 'सहेजा गया मोबाइल',
    fardEmptyTitle: 'आपकी डिजिटल फर्द खाली है',
    fardEmptyDesc: 'दुकान आने से पहले चावल सूची से मनपसंद चावल और बोरी का आकार चुनें। फर्द सहेजने से कालना दुकान पर त्वरित खरीदारी होगी।',
    fardSelectRiceBtn: 'चावल सूची देखें',
    fardViewSavedBtn: 'पहले की सहेजी गई फर्द देखें',
    fardClearBtn: 'फर्द खाली करें',
    fardPrintBtn: 'प्रिंट',
    fardCustomerDetailsTitle: 'ग्राहक का विवरण (दुकान पर फर्द जल्दी खोजने के लिए)',
    fardCustomerNameLabel: 'आपका नाम:',
    fardCustomerNamePlaceholder: 'जैसे: राम बाबू / सुबीर कर्मकार',
    fardCustomerPhoneLabel: 'मोबाइल नंबर (फर्द सहेजने के लिए):',
    fardCustomerPhonePlaceholder: 'जैसे: 8145625847',
    fardVisitTimeLabel: 'दुकान कब आएंगे (समय):',
    fardVisitTimePlaceholder: 'जैसे: आज शाम 5 बजे / कल सुबह',
    fardNotesLabel: 'विशेष निर्देश / नोट (वैकल्पिक):',
    fardNotesPlaceholder: 'जैसे: टोटो में भारी बोरी चढ़ाने के लिए मदद चाहिए',
    fardSummaryTitle: 'डिजिटल फर्द सारांश',
    fardSummarySubtitle: 'दुकान काउंटर पर सीधे भुगतान योग्य अनुमानित हिसाब',
    fardTotalWeightLabel: 'कुल चावल का वजन',
    fardTotalBagsLabel: 'पैकेट / बोरी की संख्या',
    fardTotalPayableLabel: 'कुल देय राशि',
    fardPickupLocationLabel: 'खरीदारी का स्थान',
    fardPickupLocationValue: 'सीधे कालना दुकान काउंटर पर',
    fardSaveToWebsiteBtn: 'वेबसाइट पर डिजिटल फर्द सहेजें',
    fardSendWhatsAppAiBtn: '✨ AI व्हाट्सएप फर्द भेजें',
    fardGeneratingAiMsg: 'AI द्वारा सुंदर संदेश तैयार हो रहा है...',
    fardSavedSuccessMsg: 'आपकी डिजिटल फर्द वेबसाइट पर सफलतापूर्वक सहेजी गई! फर्द कोड:',
    fardViewSavedCodeBtn: 'फर्द देखें',
    fardSavedListTitle: 'सुरक्षित डिजिटल फर्द खाता',
    fardSavedListSubtitle: 'आपकी बनाई गई सभी वर्चुअल खरीदारी फर्द यहां सुरक्षित हैं',
    fardSearchKhataPlaceholder: 'फर्द कोड या मोबाइल से खोजें...',
    fardViewMemoBtn: 'डिजिटल मेमो',
    fardDeleteBtn: 'हटाएं',
    fardMemoTitle: 'डिजिटल दुकान रसीद / मेमो',
    fardCounterNotice: 'दुकान काउंटर रसीद: कालना आर.एम.सी मार्केट गोपाल चावल भंडार में आकर यह फर्द नंबर दिखाते ही बोरी दे दी जाएगी।',
    fardCopyBtn: 'टेक्स्ट कॉपी करें',
    fardCopiedBtn: 'कॉपी हो गया!',
    fardSendDirectWhatsApp: 'सीधे व्हाट्सएप पर भेजें',
    fardAiModalTitle: 'व्हाट्सएप सुंदर डिजिटल फर्द संदेश',
    fardAiModalSubtitle: 'सभ्य और आदरणीय अभिवादन सहित (जैसे: "नमस्कार राम बाबू...")',
    fardAiModalLabel: 'तैयार संदेश का पूर्वावलोकन (संपादित कर सकते हैं):',
    fardLoginModalTitle: 'मोबाइल नंबर लॉगिन (वैकल्पिक)',
    fardLoginModalDesc: 'बिना किसी पासवर्ड के केवल अपने 10 अंकों के मोबाइल नंबर से लॉगिन करें और अपनी सभी सहेजी गई फर्द एक क्लिक में देखें।',
    fardLoginModalSubmit: 'लॉगिन करें एवं फर्द देखें',
    fardLoginModalSkip: 'बिना लॉगिन के जारी रखें',

    // Rates Section
    ratesTitle: 'आज का बाजार भाव एवं थोक दरें',
    ratesSubtitle: 'कालना मंडी की दैनिक थोक एवं खुदरा चावल बाजार दरें',
    ratesTableItem: 'चावल का नाम',
    ratesTableCategory: 'प्रकार',
    ratesTablePerKg: '1 किग्रा खुदरा',
    ratesTableBag26: '26 किग्रा बोरी',
    ratesTableBag50: '50 किग्रा बोरी',
    ratesTableTrend: 'भाव का रुझान',
    ratesCalcTitle: 'बोरी भाव एवं वजन कैलकुलेटर',
    ratesCalcSubtitle: 'अपनी आवश्यकतानुसार चावल की बोरी और कुल खर्च का तुरंत हिसाब निकालें',
    ratesCalcChooseRice: 'चावल चुनें',
    ratesCalcChooseBag: 'बोरी का आकार',
    ratesCalcQuantity: 'बोरियों की संख्या',
    ratesCalcEstimatedTotal: 'कुल अनुमानित खर्च',
    ratesCalcFardAdd: 'फर्द में जोड़ें',

    // Store & Contact Section
    storePageTitle: 'दुकान का पता एवं संपर्क सूत्र',
    storePageSubtitle: 'कालना आर.एम.सी मार्केट में हमारी भौतिक दुकान तक पहुंचने का पूरा मार्गदर्शन',
    storeAddressHeading: 'दुकान की सटीक स्थिति',
    storeLandmarkHeading: 'निकटतम लैंडमार्क',
    storeLandmarkText: 'कालना आर.एम.सी मार्केट (RMC Market), भोलेबाबा रेस्टोरेंट और कुंडू शॉप के बिल्कुल पास स्थित।',
    storeHoursHeading: 'दुकान का समय',
    storeHoursWeekly: 'प्रतिदिन सुबह 9:30 – दोपहर 2:00 एवं शाम 5:30 – रात 9:30 बजे तक खुली रहती है। दुकान कभी बंद भी हो सकती है, इसलिए आने से पहले फोन या व्हाट्सएप से पुष्टि करना उचित है।',
    storeImportantNoticeTitle: 'महत्वपूर्ण सूचना (दुकान पर प्रत्यक्ष खरीद)',
    storeDirectionsHeading: 'दुकान तक कैसे पहुंचें',
    storeDirectionsText: 'कालना रेलवे स्टेशन या बस स्टैंड से टोटो लेकर सीधे कालना आर.एम.सी मार्केट आएं। भोलेबाबा रेस्टोरेंट पार करते ही कुंडू शॉप के पास गोपाल चावल भंडार का बड़ा साइनबोर्ड दिख जाएगा।',
    storeCallButton: 'सीधे कॉल करें: +91 81456 25847',
    storeWhatsAppButton: 'व्हाट्सएप करें: +91 81456 25847',

    // Cart & Fard specific UI
    cartHeaderTitle: 'डिजिटल फर्द',
    cartItemCountSuffix: 'सूची में कुल {count} आइटम',
    cartNoticeTitle: 'दुकान पर यह डिजिटल फर्द दिखाकर सीधे बोरी प्राप्त करें',
    cartNoticeDesc: 'हम कोई ऑनलाइन डिलीवरी नहीं करते हैं। दुकान आने से पहले फर्द तैयार रखने से काउंटर पर तुरंत बोरी मिल जाएगी।',
    cartColRice: 'चावल व साइज',
    cartColRate: 'दर व मात्रा',
    cartColTotal: 'कुल',
    cartClearAll: 'सब हटाएं',
    cartAddMoreRice: 'और चावल या बोरी जोड़ें',
    cartApproxTotalWeight: 'कुल चावल का वजन (अनुमानित)',
    cartApproxTotalCost: 'कुल अनुमानित मूल्य',
    cartCounterTotal: 'दुकान काउंटर पर कुल',
    cartPaymentHelp: 'काउंटर पर सीधे नकद कैश, Google Pay, PhonePe या UPI QR कोड से भुगतान कर सकते हैं।',
    cartOrderToken: 'ऑर्डर टोकन',
    cartTokenRef: 'दुकान पर बताने के लिए संदर्भ कोड',
    cartSendWhatsAppDesc: 'दुकान में बोरी बुकिंग के लिए व्हाट्सएप पर फर्द भेजें',
    cartSendWhatsAppBtn: 'व्हाट्सएप पर भेजकर पक्का करें',
    cartStoreAddressLabel: 'दुकान का पता:',
    cartStoreAddressVal: 'कालना आरएमसी मार्केट, पूर्व बर्धमान (भोलेबाबा रेस्टोरेंट के पास)',
    cartDeliveryRuleTitle: 'ऑनलाइन डिलीवरी संबंधी महत्वपूर्ण नियम',
    cartDeliveryRuleDesc: 'हम कोई ऑनलाइन होम डिलीवरी या कूरियर सेवा नहीं देते। चावल खरीदने के लिए आपको कालना आरएमसी मार्केट की दुकान पर आना होगा। भारी बोरी गाड़ी में चढ़ाने के लिए सहायक उपलब्ध हैं।',
    cartVisitStore: 'दुकान पर पधारें:',
    cartStoreTimings: 'दुकान का समय:',
    cartStoreHours: 'सुबह 9:30 - दोपहर 2:00 और शाम 5:30 - रात 9:30 (आने से पहले कॉल करें)',
    cartEmptyTitle: 'आपकी डिजिटल फर्द अभी खाली है',
    cartEmptyDesc: 'दुकान आने से पहले चावल सूची से अपनी पसंद का चावल और बोरी का आकार चुनें।',
    cartEmptyButton: 'चावल सूची देखें',

    // Rates Section specific UI
    ratesCalcChooseRiceBag: 'चावल एवं वजन चुनें:',
    ratesCalcBagCount: 'बोरियों की संख्या (बैग):',
    ratesCalcTotalWeight: 'कुल वजन:',
    ratesCalcWholesaleSavings: 'थोक बचत:',
    ratesCalcWhatsAppQuote: 'व्हाट्सएप पर भाव कोटेशन लें',
    ratesColRiceName: 'चावल का प्रकार व नाम',
    ratesColGrainGrade: 'दाना एवं ग्रेड',
    ratesCol1KgRetail: '1 किग्रा खुदरा भाव',
    ratesCol26KgBag: '26 किग्रा बोरी',
    ratesCol50KgBag: '50 किग्रा बोरी',
    ratesColWholesaleBenefit: 'थोक लाभ',
    ratesBadgeBestChoice: 'सर्वोत्तम पसंद',
    ratesBadgeMillRate: 'सर्वोत्तम थोक भाव उपलब्ध',
    ratesBadgeBulkDiscount: '10+ बोरियों पर विशेष थोक छूट',
    ratesMarketSubject: 'बाजार परिवर्तन के अधीन',
    ratesNoticeHeading: 'थोक भाव संबंधी विशेष निर्देश:',
    ratesNoticeLine1: 'चावल का बाजार भाव धान की आवक और बाजार स्थिति पर निर्भर करता है, अतः दैनिक थोड़ा उतार-चढ़ाव हो सकता है।',
    ratesNoticeLine2: 'शादी, समारोह या कैटरिंग के लिए 10 बोरी से अधिक के ऑर्डर पर विशेष थोक दर और अतिरिक्त छूट दी जाती है।',
    ratesNoticeLine3: 'दुकान काउंटर पर सीधे नकद या यूपीआई (UPI) भुगतान की सुविधा।',

    // General & status helpers
    storeLocationDetail: 'कालना आरएमसी मार्केट (भोलेबाबा रेस्टोरेंट और कुंडू शॉप के पास) • टोटो व वाहन लोडिंग सुविधा',
    deliveryWarningPopup: 'कालना आरएमसी मार्केट (भोलेबाबा रेस्टोरेंट और कुंडू शॉप के पास)। चावल खरीदने के लिए सीधे दुकान पर आएं, कोई ऑनलाइन डिलीवरी नहीं है।',
    cookingGuideButton: 'पकाने की विधि',
  },
};

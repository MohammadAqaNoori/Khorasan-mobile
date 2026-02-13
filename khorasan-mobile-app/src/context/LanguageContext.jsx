import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const translations = {
  dari: {
    // Header
    searchPlaceholder: 'جستجوی موبایل، لپ‌تاپ و لوازم جانبی...',
    home: 'صفحه اصلی',
    products: 'محصولات',
    about: 'درباره ما',
    contact: 'تماس با ما',
    
    // Homepage
    seasonalDiscount: 'تخفیف‌های ویژه فصل',
    heroTitle1: 'جدیدترین موبایل‌ها با',
    heroTitle2: 'بهترین قیمت',
    heroTitle3: 'در افغانستان',
    heroDescription: 'خراسان موبایل، مرجع اصلی فروش تکنولوژی در کابل و سایر ولایات. با ضمانت اصالت کالا و تحویل سریع در محل شما.',
    shopNow: 'اکنون خرید کنید',
    newProducts: 'محصولات جدید',
    
    // Trust Bar
    authenticityGuarantee: 'ضمانت اصالت کالا',
    authenticityDesc: 'تضمین ۱۰۰٪ اصلی بودن تمامی محصولات',
    fastDelivery: 'تحویل سریع و مطمئن',
    fastDeliveryDesc: 'ارسال در کابل و تمام ولایات افغانستان',
    localSupport: 'پشتیبانی محلی',
    localSupportDesc: 'پاسخگویی سریع به زبان‌های دری و پښتو',
    
    // Categories
    categoriesTitle: 'دسته‌بندی محصولات',
    mobilePhones: 'گوشی موبایل',
    mobileDesc: 'بروزترین برندهای جهانی',
    laptops: 'لپ‌تاپ',
    laptopsDesc: 'خانگی، گیمینگ و اداری',
    accessories: 'لوازم جانبی',
    accessoriesDesc: 'شارژر، کابل و قاب گوشی',
    smartGadgets: 'گجت‌های هوشمند',
    smartGadgetsDesc: 'ساعت و دستبندهای هوشمند',
    
    // Featured Products
    featuredProducts: 'محصولات برگزیده',
    viewAll: 'مشاهده همه',
    viewDetails: 'مشاهده جزئیات',
    
    // Newsletter
    newsletterTitle: 'از جدیدترین تخفیف‌ها مطلع شوید',
    newsletterDesc: 'شماره تماس یا ایمیل خود را ثبت کنید تا از جدیدترین گوشی‌ها و آفرهای ویژه باخبر شوید.',
    emailPlaceholder: 'ایمیل یا شماره موبایل',
    subscribe: 'عضویت',
    
    // Footer
    companyDesc: 'بزرگترین فروشگاه آنلاین موبایل و لپ‌تاپ در افغانستان. ارائه خدمات با کیفیت، گارانتی معتبر و تحویل سریع در سراسر کشور.',
    quickAccess: 'دسترسی سریع',
    shoppingGuide: 'راهنمای خرید',
    contactInfo: 'اطلاعات تماس',
    copyright: '© ۲۰۲۴ خراسان موبایل. تمامی حقوق محفوظ است.',
    termsConditions: 'قوانین و مقررات',
    privacy: 'حریم خصوصی',
  },
  pashto: {
    // Header
    searchPlaceholder: 'د موبایل، لپ‌تاپ او اکسسوریز لټون...',
    home: 'کور پاڼه',
    products: 'محصولات',
    about: 'زموږ په اړه',
    contact: 'اړیکه',
    
    // Homepage
    seasonalDiscount: 'د فصل ځانګړي تخفیفونه',
    heroTitle1: 'تر ټولو نوي موبایلونه د',
    heroTitle2: 'غوره قیمت',
    heroTitle3: 'په افغانستان کې',
    heroDescription: 'خراسان موبایل، په کابل او نورو ولایتونو کې د ټکنالوژۍ د پلور اصلي مرجع. د اصلي توکو تضمین او ستاسو په ځای کې ګړندۍ تحویلي.',
    shopNow: 'اوس پیرود وکړئ',
    newProducts: 'نوي محصولات',
    
    // Trust Bar
    authenticityGuarantee: 'د اصالت تضمین',
    authenticityDesc: 'د ټولو محصولاتو ۱۰۰٪ اصلي والي تضمین',
    fastDelivery: 'ګړندۍ او باوري تحویلي',
    fastDeliveryDesc: 'په کابل او ټولو افغانستان ولایتونو کې لیږل',
    localSupport: 'محلي ملاتړ',
    localSupportDesc: 'په دري او پښتو ژبو کې ګړندۍ ځوابونه',
    
    // Categories
    categoriesTitle: 'د محصولاتو کټګورۍ',
    mobilePhones: 'موبایل فونونه',
    mobileDesc: 'د نړۍ تر ټولو نوي برانډونه',
    laptops: 'لپ‌تاپونه',
    laptopsDesc: 'کورني، ګیمینګ او اداري',
    accessories: 'اکسسوریز',
    accessoriesDesc: 'چارجر، کیبل او د موبایل کیسونه',
    smartGadgets: 'هوښیار وسایل',
    smartGadgetsDesc: 'هوښیار ساعتونه او بانډونه',
    
    // Featured Products
    featuredProducts: 'غوره محصولات',
    viewAll: 'ټول وګورئ',
    viewDetails: 'جزئیات وګورئ',
    
    // Newsletter
    newsletterTitle: 'د نویو تخفیفونو خبر ترلاسه کړئ',
    newsletterDesc: 'خپل د تماس شمیره یا بریښنالیک راجستر کړئ ترڅو د نویو موبایلونو او ځانګړو وړاندیزونو خبر ترلاسه کړئ.',
    emailPlaceholder: 'بریښنالیک یا د موبایل شمیره',
    subscribe: 'غړیتوب',
    
    // Footer
    companyDesc: 'په افغانستان کې د موبایل او لپ‌تاپ تر ټولو لوی آنلاین پلورنځی. د کیفیت خدمتونه، معتبر تضمین او په ټول هیواد کې ګړندۍ تحویلي.',
    quickAccess: 'ګړندۍ لاسرسی',
    shoppingGuide: 'د پیرود لارښود',
    contactInfo: 'د اړیکې معلومات',
    copyright: '© ۲۰۲۴ خراسان موبایل. ټول حقوق خوندي دي.',
    termsConditions: 'شرایط او مقررات',
    privacy: 'محرمیت',
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('dari');

  const t = (key) => {
    return translations[language][key] || key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'dari' ? 'pashto' : 'dari');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

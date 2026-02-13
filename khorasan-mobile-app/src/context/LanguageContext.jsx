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
    addToCart: 'افزودن به سبد خرید',
    
    // Newsletter
    newsletterTitle: 'از جدیدترین تخفیف‌ها مطلع شوید',
    newsletterDesc: 'شماره تماس یا ایمیل خود را ثبت کنید تا از جدیدترین گوشی‌ها و آفرهای ویژه باخبر شوید.',
    emailPlaceholder: 'ایمیل یا شماره موبایل',
    subscribe: 'عضویت',
    
    // About Page
    aboutHeroTitle: 'اعتماد شما سرمایه ماست',
    aboutHeroDesc: 'ما در خراسان موبایل، متعهد به ارائه برترین تکنولوژی‌های روز دنیا با تضمین اصالت و بهترین قیمت در بازار افغانستان هستیم.',
    ourStory: 'داستان خراسان موبایل',
    ourMission: 'مأموریت ما',
    ourVision: 'چشم‌انداز ما',
    coreValues: 'ارزش‌های بنیادین ما',
    authenticProduct: 'اصالت کالا',
    support247: 'پشتیبانی ۲۴/۷',
    fastShipping: 'ارسال سریع',
    
    // Product Detail Page
    latestModel: 'جدیدترین مدل',
    inStock: 'موجود در انبار',
    orderWhatsapp: 'سفارش از طریق واتس‌اپ',
    originalProduct: 'کالای اورجینال',
    validWarranty: 'گارانتی معتبر',
    fastDeliveryKabul: 'تحویل سریع کابل',
    productDescription: 'توضیحات محصول',
    technicalSpecs: 'مشخصات فنی',
    userReviews: 'نظرات کاربران',
    titaniumDesign: 'طراحی پیشرو با تیتانیوم',
    titaniumDesc: 'آیفون ۱۵ پرو مکس اولین آیفونی است که از طراحی با تیتانیوم درجه هوافضا بهره می‌برد، همان آلیاژی که در فضاپیماهایی که برای ماموریت‌های مریخ استفاده می‌شوند به کار می‌رود. تیتانیوم یکی از بهترین نسبت‌های استحکام به وزن را در بین تمام فلزات دارد که باعث شده این سبک‌ترین مدل‌های پرو ما تا به امروز باشند.',
    contouredEdges: 'لبه‌های جدید کانتور شده برای در دست گرفتن راحت‌تر',
    thinnestBorders: 'باریک‌ترین حاشیه‌های دیده شده در گوشی‌های آیفون',
    actionButton: 'دکمه اکشن قابل شخصی‌سازی جدید',
    suggestedProducts: 'محصولات پیشنهادی',
    viewAllProducts: 'مشاهده همه محصولات',
    founderQuote: 'تکنولوژی نباید یک تجمل باشد، بلکه ابزاری است برای پیشرفت. ما اینجاییم تا این ابزار را با بالاترین کیفیت در اختیار مردم خود قرار دهیم.',
    founderName: 'احمد خراسان',
    founderTitle: 'بنیان‌گذار خراسان موبایل',
    stayConnected: 'با ما در ارتباط باشید',
    ourAddress: 'آدرس ما: کابل، شهر نو، جاده آسمایی، مجتمع تجاری خراسان، طبقه همکف',
    getConsultation: 'دریافت نوبت مشاوره',
    
    // Category Page
    allProducts: 'کالای دیجیتال',
    smartphones: 'گوشی‌های موبایل',
    categoryDesc: 'جدیدترین و پیشرفته‌ترین گوشی‌های موبایل از برندهای معتبر جهانی با گارانتی معتبر خراسان موبایل.',
    brands: 'برندها',
    priceRange: 'محدوده قیمت (AFN)',
    ram: 'حافظه رم (RAM)',
    storage: 'حافظه داخلی',
    sortBy: 'مرتب‌سازی:',
    newest: 'جدیدترین',
    bestseller: 'پرفروش‌ترین',
    cheapest: 'ارزان‌ترین',
    expensive: 'گران‌ترین',
    showing: 'نمایش',
    items: 'محصول',
    outOfStock: 'ناموجود',
    notifyMe: 'اطلاع به من',
    findUsKabul: 'ما را در کابل پیدا کنید',
    findUsDesc: 'فروشگاه فیزیکی خراسان موبایل واقع در چهارراهی صدارت، آماده خدمت‌رسانی به شما عزیزان می‌باشد. تجربه خریدی مطمئن و لمس محصولات از نزدیک.',
    storeAddress: 'آدرس فروشگاه:',
    storeAddressDetail: 'کابل، چهارراهی صدارت، مرکز تجاری افغان، طبقه اول',
    phoneContact: 'شماره تماس:',
    showroomVisit: 'به صورت حضوری مراجعه کنید',
    showroomDesc: 'از جدیدترین محصولات تکنولوژی در محیطی مدرن دیدن کنید.',
    showroomLabel: 'نمای فروشگاه',
    mapLocation: 'مشاهده موقعیت روی نقشه کابل',
    mapAddress: 'چهارراهی انصاری، شهرنو',
    quickAnswers: 'دنبال جواب سریع هستید؟',
    quickAnswersDesc: 'شاید سوال شما در بخش سوالات متداول قبلاً پاسخ داده شده باشد. قبل از تماس، نگاهی به آن بیندازید.',
    viewFaq: 'مشاهده سوالات متداول',
    
    // Cart Page
    shoppingCart: 'سبد خرید',
    cartItems: 'مورد',
    color: 'رنگ',
    capacity: 'ظرفیت',
    availableKabul: 'موجود در انبار کابل',
    continueShopping: 'ادامه خرید و مشاهده محصولات دیگر',
    orderSummary: 'خلاصه سفارش',
    productPrice: 'قیمت محصولات',
    discount: 'تخفیف',
    shippingCost: 'هزینه ارسال (کابل)',
    free: 'رایگان',
    total: 'مجموع کل',
    checkout: 'تکمیل و پرداخت نهایی',
    priceNote: 'قیمت نهایی بر اساس نرخ روز ارز محاسبه خواهد شد.',
    
    // Contact Page
    contactUs: 'با ما در تماس شوید',
    contactDesc: 'تیم پشتیبانی خراسان موبایل برای پاسخگویی به سوالات شما در مورد خرید، گارانتی و خدمات پس از فروش آماده است.',
    whatsappChat: 'چت مستقیم واتس‌اپ',
    quickResponse: 'پاسخگویی سریع کمتر از ۳۰ دقیقه',
    sendMessage: 'ارسال پیام به',
    mainAddress: 'آدرس مرکزی',
    supportEmail: 'ایمیل پشتیبانی',
    workingHours: 'ساعات کاری',
    whyTrustUs: 'چرا به ما اعتماد کنید؟',
    sendYourMessage: 'پیام خود را بفرستید',
    fullName: 'نام و تخلص',
    phoneNumber: 'شماره تماس (افغانستان)',
    subject: 'موضوع پیام',
    email: 'ایمیل (اختیاری)',
    message: 'متن پیام',
    agreeTerms: 'با ارسال این فرم، شما با',
    terms: 'قوانین و مقررات',
    agree: 'سایت موافقت می‌کنید.',
    sendRequest: 'ارسال درخواست',
    
    // Footer
    companyDesc: 'بزرگترین فروشگاه آنلاین موبایل و لپ‌تاپ در افغانستان. ارائه خدمات با کیفیت، گارانتی معتبر و تحویل سریع در سراسر کشور.',
    quickAccess: 'دسترسی سریع',
    shoppingGuide: 'راهنمای خرید',
    contactInfo: 'اطلاعات تماس',
    copyright: '© ۲۰۲۴ خراسان موبایل. تمامی حقوق محفوظ است.',
    termsConditions: 'قوانین و مقررات',
    privacy: 'حریم خصوصی',
    mobileShop: 'فروشگاه موبایل',
    professionalLaptops: 'لپ‌تاپ‌های حرفه‌ای',
    computerParts: 'قطعات کامپیوتر',
    smartWatches: 'ساعت‌های هوشمند',
    orderRegistration: 'نحوه ثبت سفارش',
    shippingPolicy: 'رویه ارسال کالا',
    paymentMethods: 'شیوه‌های پرداخت',
    faq: 'سوالات متداول',
    location: 'کابل، افغانستان - چهارراهی صدارت',
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
    addToCart: 'سبد ته اضافه کړئ',
    
    // Newsletter
    newsletterTitle: 'د نویو تخفیفونو خبر ترلاسه کړئ',
    newsletterDesc: 'خپل د تماس شمیره یا بریښنالیک راجستر کړئ ترڅو د نویو موبایلونو او ځانګړو وړاندیزونو خبر ترلاسه کړئ.',
    emailPlaceholder: 'بریښنالیک یا د موبایل شمیره',
    subscribe: 'غړیتوب',
    
    // About Page
    aboutHeroTitle: 'ستاسو باور زموږ پانګه ده',
    aboutHeroDesc: 'موږ په خراسان موبایل کې، د نړۍ غوره ټکنالوژۍ د وړاندې کولو ژمنه یو د اصالت تضمین او په افغانستان بازار کې غوره قیمت سره.',
    ourStory: 'د خراسان موبایل کیسه',
    ourMission: 'زموږ ماموریت',
    ourVision: 'زموږ لید',
    coreValues: 'زموږ بنسټیز ارزښتونه',
    authenticProduct: 'د توکو اصالت',
    support247: '۲۴/۷ ملاتړ',
    fastShipping: 'ګړندۍ لیږل',
    
    // Product Detail Page
    latestModel: 'تر ټولو نوی ماډل',
    inStock: 'په ګودام کې شتون لري',
    orderWhatsapp: 'د واټساپ له لارې امر',
    originalProduct: 'اصلي توکي',
    validWarranty: 'معتبر تضمین',
    fastDeliveryKabul: 'په کابل کې ګړندۍ تحویلي',
    productDescription: 'د محصول توضیحات',
    technicalSpecs: 'تخنیکي مشخصات',
    userReviews: 'د کاروونکو نظرونه',
    titaniumDesign: 'د ټایټانیم سره پرمختللې ډیزاین',
    titaniumDesc: 'آیفون ۱۵ پرو مکس لومړی آیفون دی چې د هوافضا درجې ټایټانیم ډیزاین کاروي، هماغه الیاژ چې د مریخ ماموریتونو لپاره په فضایي بیړیو کې کارول کیږي. ټایټانیم د ټولو فلزاتو په منځ کې یو له غوره قوت او وزن تناسب لري چې دا زموږ تر اوسه تر ټولو سپک پرو ماډلونه جوړوي.',
    contouredEdges: 'د اسانه نیولو لپاره نوي کانتور شوي څنډې',
    thinnestBorders: 'په آیفون فونونو کې لیدل شوي تر ټولو نری حاشیې',
    actionButton: 'نوی د شخصي کولو وړ عمل تڼۍ',
    suggestedProducts: 'وړاندیز شوي محصولات',
    viewAllProducts: 'ټول محصولات وګورئ',
    founderQuote: 'ټکنالوژي باید یو تجمل نه وي، بلکې د پرمختګ لپاره یوه وسیله ده. موږ دلته یو چې دا وسیله د لوړ کیفیت سره خپلو خلکو ته وړاندې کړو.',
    founderName: 'احمد خراسان',
    founderTitle: 'د خراسان موبایل بنسټګر',
    stayConnected: 'موږ سره اړیکه ولرئ',
    ourAddress: 'زموږ پته: کابل، شهر نو، د آسمایي سړک، د خراسان سوداګریز مجتمع، ځمکنۍ پوړ',
    getConsultation: 'د مشورې نوبت ترلاسه کړئ',
    
    // Category Page
    allProducts: 'ډیجیټل توکي',
    smartphones: 'موبایل فونونه',
    categoryDesc: 'د نړیوالو معتبرو برانډونو تر ټولو نوي او پرمختللي موبایل فونونه د خراسان موبایل معتبر تضمین سره.',
    brands: 'برانډونه',
    priceRange: 'د قیمت حد (AFN)',
    ram: 'رام حافظه (RAM)',
    storage: 'داخلي حافظه',
    sortBy: 'ترتیب:',
    newest: 'تر ټولو نوی',
    bestseller: 'تر ټولو خرڅیدونکی',
    cheapest: 'ارزانه',
    expensive: 'ګران',
    showing: 'ښودل',
    items: 'محصول',
    outOfStock: 'ناموجود',
    notifyMe: 'ما ته خبر راکړئ',
    findUsKabul: 'موږ په کابل کې ومومئ',
    findUsDesc: 'د خراسان موبایل فزیکي پلورنځی د صدارت په څلور لاره کې موقعیت لري، ستاسو د خدمت لپاره چمتو دی. د باوري پیرود تجربه او د نږدې څخه د محصولاتو لمس.',
    storeAddress: 'د پلورنځي پته:',
    storeAddressDetail: 'کابل، د صدارت څلور لاره، افغان سوداګریز مرکز، لومړۍ پوړ',
    phoneContact: 'د تماس شمیره:',
    showroomVisit: 'په مستقیم ډول راشئ',
    showroomDesc: 'د ټکنالوژۍ تر ټولو نوي محصولات په عصري چاپیریال کې وګورئ.',
    showroomLabel: 'د پلورنځي لید',
    mapLocation: 'د کابل په نقشه کې موقعیت وګورئ',
    mapAddress: 'د انصاري څلور لاره، شهرنو',
    quickAnswers: 'د ګړندي ځواب په لټه کې یاست؟',
    quickAnswersDesc: 'شاید ستاسو پوښتنه د عامو پوښتنو په برخه کې مخکې ځواب ورکړل شوی وي. د تماس مخکې یې وګورئ.',
    viewFaq: 'عام پوښتنې وګورئ',
    
    // Cart Page
    shoppingCart: 'د پیرود سبد',
    cartItems: 'توکي',
    color: 'رنګ',
    capacity: 'ظرفیت',
    availableKabul: 'په کابل ګودام کې شتون لري',
    continueShopping: 'پیرود ته دوام ورکړئ او نور محصولات وګورئ',
    orderSummary: 'د امر لنډیز',
    productPrice: 'د محصولاتو قیمت',
    discount: 'تخفیف',
    shippingCost: 'د لیږد لګښت (کابل)',
    free: 'وړیا',
    total: 'ټوله',
    checkout: 'بشپړول او وروستی تادیه',
    priceNote: 'وروستی قیمت د ورځې د اسعارو په اساس محاسبه کیږي.',
    
    // Contact Page
    contactUs: 'موږ سره اړیکه ونیسئ',
    contactDesc: 'د خراسان موبایل ملاتړ ټیم ستاسو د پیرود، تضمین او د پلور وروسته خدماتو په اړه د پوښتنو ځوابولو لپاره چمتو دی.',
    whatsappChat: 'مستقیم واټساپ چیټ',
    quickResponse: 'له ۳۰ دقیقو څخه کم کې ګړندۍ ځواب',
    sendMessage: 'پیغام واستوئ',
    mainAddress: 'اصلي پته',
    supportEmail: 'د ملاتړ بریښنالیک',
    workingHours: 'د کار ساعتونه',
    whyTrustUs: 'ولې موږ باور وکړئ؟',
    sendYourMessage: 'خپل پیغام واستوئ',
    fullName: 'نوم او تخلص',
    phoneNumber: 'د تماس شمیره (افغانستان)',
    subject: 'د پیغام موضوع',
    email: 'بریښنالیک (اختیاري)',
    message: 'د پیغام متن',
    agreeTerms: 'د دې فورمې په لیږلو سره، تاسو د',
    terms: 'شرایطو او مقرراتو',
    agree: 'سره موافق یاست.',
    sendRequest: 'غوښتنه واستوئ',
    
    // Footer
    companyDesc: 'په افغانستان کې د موبایل او لپ‌تاپ تر ټولو لوی آنلاین پلورنځی. د کیفیت خدمتونه، معتبر تضمین او په ټول هیواد کې ګړندۍ تحویلي.',
    quickAccess: 'ګړندۍ لاسرسی',
    shoppingGuide: 'د پیرود لارښود',
    contactInfo: 'د اړیکې معلومات',
    copyright: '© ۲۰۲۴ خراسان موبایل. ټول حقوق خوندي دي.',
    termsConditions: 'شرایط او مقررات',
    privacy: 'محرمیت',
    mobileShop: 'د موبایل پلورنځی',
    professionalLaptops: 'مسلکي لپ‌تاپونه',
    computerParts: 'د کمپیوټر برخې',
    smartWatches: 'هوښیار ساعتونه',
    orderRegistration: 'د امر راجستر کولو طریقه',
    shippingPolicy: 'د لیږد پالیسي',
    paymentMethods: 'د تادیې طریقې',
    faq: 'عام پوښتنې',
    location: 'کابل، افغانستان - د صدارت څلور لاره',
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

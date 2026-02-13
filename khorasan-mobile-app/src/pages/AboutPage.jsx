import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <header className="relative overflow-hidden bg-primary py-24 lg:py-32">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
                پیشرو در تکنولوژی افغانستان
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
                {t('aboutHeroTitle')}
              </h1>
              <p className="text-lg text-white/90 leading-relaxed bg-white/10 rounded-xl p-4">
                {t('aboutHeroDesc')}
              </p>
            </div>
          </div>
        </header>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold text-primary mb-6">{t('ourStory')}</h2>
                <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                  <p>
                    سفر ما از یک آرزوی ساده آغاز شد: فراهم آوردن دسترسی آسان و مطمئن به تکنولوژی‌های نوین برای هموطنان عزیز در افغانستان. در زمانی که بازار مملو از محصولات غیراصل بود، ما خراسان موبایل را با هدف برقراری معیار جدیدی از صداقت بنا کردیم.
                  </p>
                  <p>
                    ما معتقدیم که هر فرد شایسته استفاده از بهترین ابزارهای دیجیتال است. به همین دلیل، با ایجاد شبکه‌ای گسترده از تأمین‌کنندگان معتبر جهانی، توانستیم جدیدترین محصولات برندهایی چون Apple، Samsung و Xiaomi را بلافاصله پس از عرضه جهانی، به کابل و دیگر ولایات برسانیم.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    alt="About us"
                    className="w-full h-[400px] object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaYbAswgFd_6QsZVZBkPJXyffrpLvcQgrFacbZGibqXLpPqS8phiXt6VPdOvqlNQhugZVSqB7n8xmYtmNwgMU4cni3LOB3mCytCY762PECiVNZN9LNxf-YojdJv4RubYBMxHmvo1i3f7DDdFtuhyDz-NzNnOPHLktfV5Z0iuifHuquQT-swB9YaYx4BigoJhRIGNrHNte-Ze9n6kmqSzepKxBVSzri7Us7BK9Eu7ySEaCxKBBVxjacM6T_18JcMbIWQ0Cw0PAAFE4"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-primary/5 dark:bg-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-background-dark p-10 rounded-2xl border border-primary/10 shadow-sm">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="material-icons text-primary text-3xl">rocket_launch</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('ourMission')}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  مأموریت ما توانمندسازی جامعه افغانستان از طریق دسترسی به تکنولوژی‌های باکیفیت است. ما با حذف واسطه‌های غیرضروری و تمرکز بر زنجیره تأمین مستقیم، قیمت‌های عادلانه را تضمین می‌کنیم.
                </p>
              </div>
              <div className="bg-white dark:bg-background-dark p-10 rounded-2xl border border-primary/10 shadow-sm">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="material-icons text-primary text-3xl">visibility</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('ourVision')}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  تبدیل شدن به بزرگترین و قابل‌اعتمادترین مرجع خرید کالای دیجیتال در منطقه، جایی که هر مشتری با خیالی آسوده از بابت اصالت و خدمات پس از فروش، خرید خود را انجام می‌دهد.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Promise Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">{t('coreValues')}</h2>
              <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group p-8 rounded-2xl border border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-icons text-3xl">verified</span>
                </div>
                <h4 className="text-xl font-bold mb-3">{t('authenticProduct')}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  تمامی محصولات ما دارای تضمین ۱۰۰٪ اصالت و ریجستری رسمی می‌باشند. ما به شفافیت در کالا معتقدیم.
                </p>
              </div>
              <div className="group p-8 rounded-2xl border border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-icons text-3xl">support_agent</span>
                </div>
                <h4 className="text-xl font-bold mb-3">{t('support247')}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  تیم متخصص پشتیبانی ما در تمامی مراحل خرید و حتی پس از آن، در کنار شماست تا پاسخگوی سوالات باشد.
                </p>
              </div>
              <div className="group p-8 rounded-2xl border border-primary/10 hover:border-primary/30 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-icons text-3xl">local_shipping</span>
                </div>
                <h4 className="text-xl font-bold mb-3">{t('fastShipping')}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  ارسال به تمامی ولایات افغانستان در کوتاه‌ترین زمان ممکن و با بسته‌بندی ایمن و استاندارد انجام می‌شود.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Quote */}
        <section className="py-20 bg-background-light dark:bg-background-dark overflow-hidden relative">
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <span className="material-icons text-6xl text-primary/20 mb-6">format_quote</span>
            <blockquote className="text-2xl md:text-3xl italic font-medium text-slate-700 dark:text-slate-200 leading-snug mb-8">
              {t('founderQuote')}
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                <img 
                  alt="Founder Portrait" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMLDs8TMW57u3BYtj6dZdnnBT5dSOmXWwps0h-Z3SV4X355M9-1PNMKgPjfZUxpDJ6wuQDJI7HBXRg9IQHvpQPgTFLHpmIezRfpJzPWv7I9OBsXU7kxpbN-9adKCh7sDI4jSNhDmPxhP7mQKe8MFR0TDZlq_-QWKd3Qij3SStAooHoMHWk-zm8U6zFvqCw1IZ6bfTOnHT4K_nr5nn81nCEfpFcrb1EKNHDk7eGDoP6CH1CxiA7zQa4yyy6mnA-4mibAetjhzEtdP8"
                />
              </div>
              <div className="text-right">
                <p className="font-bold text-primary">{t('founderName')}</p>
                <p className="text-sm text-slate-500">{t('founderTitle')}</p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </section>

        {/* Call to Action / Map */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-12 lg:p-20 text-white flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">{t('stayConnected')}</h2>
                <p className="text-white/90 bg-white/10 rounded-lg p-4 mb-8">
                  {t('ourAddress')}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="material-icons">phone_in_talk</span>
                    <span dir="ltr">+93 700 123 456</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="material-icons">email</span>
                    <span>info@khorasanmobile.af</span>
                  </div>
                </div>
                <button className="mt-10 bg-white text-primary px-8 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors w-fit">
                  {t('getConsultation')}
                </button>
              </div>
              <div className="lg:w-1/2 h-80 lg:h-auto min-h-[400px] relative">
                <img 
                  alt="Map Location" 
                  className="w-full h-full object-cover grayscale opacity-80 contrast-125" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuANL-NnOdV4JEXhCawxVKvdPWUJ2CUHgskAdEjoFNEabyX-WMBgVrD2mr33UcSF8lwEwITJJGl_49EywWWlRhAvbtSRF6jE8eiLx5SCS6awnr3Xtdbyd6g_8LTg2EuO2URnytw0AtEKIPu6xUnFCEsewBJ8ZPmgSEk8qZ_FVdoiAB4G-fSwCCBLfndFogDBiimMdNk47rb65UAoaCQ6Y949L-wvKrbbcXCk1PX4Wl4WpRrGLGM55aSryPusTjNslnA1TUwbzV3IQJc"
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <span className="material-icons text-primary">location_on</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;

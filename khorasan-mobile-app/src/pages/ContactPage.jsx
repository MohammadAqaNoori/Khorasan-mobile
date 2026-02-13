import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const ContactPage = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden bg-primary/5 border-b border-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
                {t('contactUs')}
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('contactDesc')}
              </p>
            </div>
          </div>
          <div className="absolute -left-20 top-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -right-20 bottom-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        </section>

        {/* Contact Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Side: Information Cards */}
            <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
              {/* WhatsApp Card */}
              <div className="bg-green-500/10 border border-green-500/20 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="material-icons text-white">chat</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-green-700 dark:text-green-400">{t('whatsappChat')}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{t('quickResponse')}</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/93700000000"
                  className="block w-full bg-green-500 text-white text-center py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
                >
                  {t('sendMessage')} 93700000000+
                </a>
              </div>

              {/* Contact Details */}
              <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-primary/10 shadow-sm space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="material-icons text-primary">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{t('mainAddress')}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 leading-relaxed">
                      کابل، شهرنو، چهارراهی انصاری، مرکز تجارتی خراسان، طبقه دوم، واحد ۱۲
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="material-icons text-primary">mail</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{t('supportEmail')}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">info@khorasanmobile.af</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">support@khorasanmobile.af</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="material-icons text-primary">schedule</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{t('workingHours')}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                      شنبه تا پنجشنبه: ۸:۰۰ صبح الی ۶:۰۰ شام
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">جمعه: تعطیل</p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-primary p-6 rounded-xl text-white">
                <h4 className="font-bold mb-4">{t('whyTrustUs')}</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm">
                    <span className="material-icons text-sm">verified</span>
                    دارای جواز رسمی از وزارت مخابرات
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="material-icons text-sm">verified</span>
                    واردکننده مستقیم برندهای معتبر
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="material-icons text-sm">verified</span>
                    گارانتی معتبر تعویض ۱۲ ماهه
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-xl shadow-primary/5 p-8 border border-primary/5">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t('sendYourMessage')}</h2>
                  <p className="text-slate-500 dark:text-slate-400">
                    فارغ از اینکه سوال فنی دارید یا قصد خرید، ما آماده شنیدن نظرات شما هستیم.
                  </p>
                </div>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        {t('fullName')} *
                      </label>
                      <input
                        className="w-full bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                        placeholder="مثلاً: احمد ولی"
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        {t('phoneNumber')} *
                      </label>
                      <div className="relative">
                        <input
                          className="w-full bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 rounded-lg pl-4 pr-12 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                          dir="ltr"
                          placeholder="07XX XXX XXX"
                          type="tel"
                        />
                        <span className="absolute right-4 top-3.5 text-slate-400 font-medium">+93</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        {t('subject')}
                      </label>
                      <select className="w-full bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all">
                        <option>استعلام قیمت عمده</option>
                        <option>خدمات پس از فروش و گارانتی</option>
                        <option>شکایات و پیشنهادات</option>
                        <option>همکاری در فروش</option>
                        <option>دیگر موارد</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        {t('email')}
                      </label>
                      <input
                        className="w-full bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                        placeholder="email@example.com"
                        type="email"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      {t('message')} *
                    </label>
                    <textarea
                      className="w-full bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      placeholder="لطفاً پیام خود را اینجا بنویسید..."
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      className="w-5 h-5 text-primary border-slate-300 rounded focus:ring-primary"
                      id="privacy"
                      type="checkbox"
                    />
                    <label className="text-sm text-slate-600 dark:text-slate-400" htmlFor="privacy">
                      {t('agreeTerms')} <a href="#" className="text-primary hover:underline">{t('terms')}</a> {t('agree')}
                    </label>
                  </div>
                  <button
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-95 transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2"
                    type="submit"
                  >
                    <span className="material-icons">send</span>
                    {t('sendRequest')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map & Showroom Section */}
        <section className="bg-white dark:bg-slate-800/20 py-16 border-t border-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* Google Map Placeholder */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-primary/10 h-[400px] relative">
                <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse flex items-center justify-center">
                  <img 
                    alt="Map location" 
                    className="w-full h-full object-cover opacity-50 grayscale" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmoZLwzqLirYZCPb_bUzthpQNEJt38qgNjswprUxaI888o9LrnHEN777AXkyFd4FHQfI61loysOH_lrrRa7O1iytQb38cYUiReyoRqcQ8TbOPARUJT8OkJ33cMPWXneGq0XLkX-vCSCvDpktfRPqtIui6KHgaHRy6JUoTWUufLA5h0Gg_KGcwU3U6-3MwHXBsxfSE1EiugV8pjeFiVB_x1-pDfvoIjY_qjdn2DRxUyElDQvl8_asPXm995igB_AC55dm9lI7hGn1E"
                  />
                  <div className="absolute inset-0 bg-primary/20 flex flex-col items-center justify-center text-center p-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-xl">
                      <span className="material-icons text-primary text-3xl">location_on</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 bg-white/90 px-4 py-2 rounded-lg">{t('mapLocation')}</h3>
                    <p className="mt-2 text-slate-800 font-medium">{t('mapAddress')}</p>
                  </div>
                </div>
              </div>

              {/* Store Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-primary/10 h-[400px] relative group">
                <img 
                  alt="Khorasan Mobile Showroom" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4qAQ0AGly-QgoCIUQ_liAbUYi1BZMmjBEs73nD9l31eNTC3xLIjZ5u4sZ1-3b27jdI7ZdYan6sFHXpejgPl3kAcJ6MfUee--zLlhekx74HZg0i_UYbHRCENNa3Tj8GewiJyqIkgCk6YWiW9FSnuN8asoMYuwGBdzyexk13bhe4XyWFX06gkA_e3uJk3UBUP_LH0LgtlwXaJdGdyepKQfvkSFqfU-uLwZH36Kl-WSWEFArFXg0FTye_1Ckv96IaZoYhnhkx-uP0ks"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <span className="inline-block bg-primary text-white text-xs px-3 py-1 rounded-full mb-3">{t('showroomLabel')}</span>
                  <h3 className="text-2xl font-bold text-white mb-2">{t('showroomVisit')}</h3>
                  <p className="text-slate-200 text-sm">{t('showroomDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Help / FAQ CTA */}
        <section className="py-16 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">{t('quickAnswers')}</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">{t('quickAnswersDesc')}</p>
            <a className="inline-flex items-center gap-2 text-primary font-bold hover:underline" href="#">
              {t('viewFaq')}
              <span className="material-icons text-sm">arrow_back</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;

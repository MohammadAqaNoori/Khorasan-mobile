import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden bg-primary/5 border-b border-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
                با ما در <span className="text-primary">تماس</span> شوید
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                تیم پشتیبانی خراسان موبایل برای پاسخگویی به سوالات شما در مورد خرید، گارانتی و خدمات پس از فروش آماده است.
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
                    <h3 className="font-bold text-green-700 dark:text-green-400">چت مستقیم واتس‌اپ</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">پاسخگویی سریع کمتر از ۳۰ دقیقه</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/93700000000"
                  className="block w-full bg-green-500 text-white text-center py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
                >
                  ارسال پیام به 93700000000+
                </a>
              </div>

              {/* Contact Details */}
              <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-primary/10 shadow-sm space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="material-icons text-primary">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">آدرس مرکزی</h4>
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
                    <h4 className="font-bold text-slate-900 dark:text-white">ایمیل پشتیبانی</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">info@khorasanmobile.af</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">support@khorasanmobile.af</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="material-icons text-primary">schedule</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">ساعات کاری</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                      شنبه تا پنجشنبه: ۸:۰۰ صبح الی ۶:۰۰ شام
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">جمعه: تعطیل</p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-primary p-6 rounded-xl text-white">
                <h4 className="font-bold mb-4">چرا به ما اعتماد کنید؟</h4>
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
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">پیام خود را بفرستید</h2>
                  <p className="text-slate-500 dark:text-slate-400">
                    فارغ از اینکه سوال فنی دارید یا قصد خرید، ما آماده شنیدن نظرات شما هستیم.
                  </p>
                </div>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        نام و تخلص *
                      </label>
                      <input
                        className="w-full bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                        placeholder="مثلاً: احمد ولی"
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        شماره تماس (افغانستان) *
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
                        موضوع پیام
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
                        ایمیل (اختیاری)
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
                      متن پیام *
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
                      با ارسال این فرم، شما با <a href="#" className="text-primary hover:underline">قوانین و مقررات</a> سایت موافقت می‌کنید.
                    </label>
                  </div>
                  <button
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-opacity-95 transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2"
                    type="submit"
                  >
                    <span className="material-icons">send</span>
                    ارسال درخواست
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;

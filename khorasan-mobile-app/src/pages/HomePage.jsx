import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  const products = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max - 256GB',
      price: '۸۹,۵۰۰ AFN',
      oldPrice: '۹۵,۰۰۰',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVfi4bGmrEIcbe_A2CeWQU42jsPxJXYKeSOhpa0DW76AHxNrmSmoneBjPRdvCJhQudsefHEwOGjUZuIk-QJu1BTnMCVmA6fg_SR4ZKOxD6mAXff4nMhxhlU2S85HBInvbPwZtoE_4o8qCS0YkNxR9qHs8uOwe-a1CRp5Rcv8O57m3MMFfkvHrhoYESdd6izE1G0ZUNSbXU3_0kgtrTr8EA7krE10sMMtfSIllBf8gR7FOZ6SnZ8cKLwVF-MMHvw8MEsfRNUoIdwYE',
      badge: 'تخفیف ویژه'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      price: '۷۸,۲۰۰ AFN',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZPR2MiD4_ZqjK16gyPJBe7jVx2Lhgg1mMhtK5uSsfKks2HhMb1G4MK6Fw1U3jRKhgM6XTQ8P2abVJ1w1xSzxh0EG1CFnAHdT_C_SbJTLEgCQueukcTUf7BpEju2LFHzTAYtUGEmnclSAkXouYlIalKGYGaixqRDbJNYaK7OHprvuwr3WmulsPO4JzwqOOYWMOkWpckB9nDwg3FFZm_E4-sOWzaVI1GCgp7LsCyZpxAzyoXjlxaRpJTlef1IoAapuAqMVIu0vZ9mQ'
    },
    {
      id: 3,
      name: 'Dell XPS 15 - Core i7 13th Gen',
      price: '۱۱۰,۰۰۰ AFN',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2PIf8lEcrApZ64EBfw8GQZaz_gscbz3fttjPgjZjowZR_ofe5s-og-sc4keVeGXUg4CywnSKjySsKyWc23qbpaoGHmOY69Kh9EsdW6E_J4J5G1AnO9ck740ES48xrZZLM858R5iGU9iWwe39WVzeIDGmgZYvbLUcxQX6m-FfdgQCLZdjqYvTJtw2O6asxykJ_YnbBOCdKeZ30V3-fu7phqA1jF2mZH18UsiS0EnomCic5zo7NpLc_yuCJr5O72JqgUHqP1KvMy2o'
    },
    {
      id: 4,
      name: 'Beats Studio Pro Wireless',
      price: '۱۲,۵۰۰ AFN',
      oldPrice: '۱۵,۰۰۰',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBh6XmJRat-F02YIrk7_l-PvFi6N36cN87nw8pk8e71i8S2shM9JMbmuC7X025n1Z-gpu80brYBYlo49ncn9OwFxlS-jN_czOBDag4Pn7H46zBVgFQs-aNMrkSZTkdIM8TG4FXdgPIRbXdMIBnx_cRE0MPZPDMJPbwZpSW-LRsrRFAo_8MDAR35HVFO-IQ3W58VCgvQG719KqZTUBxKFR6-QLq6O8gSpEvb0XT1ss2YOSwsZL1Vw9ghbrnkRSrbE46r8CqSEq-kwnM'
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white dark:bg-background-dark py-16 md:py-24">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 items-center gap-12">
              <div className="order-2 md:order-1 flex flex-col items-start text-right">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6">
                  تخفیف‌های ویژه فصل
                </span>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                  جدیدترین موبایل‌ها با <br />
                  <span className="text-primary text-5xl md:text-7xl">بهترین قیمت</span> <br />
                  در افغانستان
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg">
                  خراسان موبایل، مرجع اصلی فروش تکنولوژی در کابل و سایر ولایات. با ضمانت اصالت کالا و تحویل سریع در محل شما.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all">
                    <span>اکنون خرید کنید</span>
                    <span className="material-icons rotate-180">arrow_right_alt</span>
                  </button>
                  <Link to="/category/mobile" className="border-2 border-primary/20 text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary/5 transition-all">
                    محصولات جدید
                  </Link>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    className="w-full h-full object-cover"
                    alt="Premium flagship smartphones"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLxoOfuzjUD_cFmpExSILJzcbrwsQumzG6nKk-NBdSxs4sv8fhUbKww84Q4Q9vW_llJc0HHUrme8H05Q-TyANc_GT9gpM7DWMYGWVhDpILkaQTsjAgEuujbh712PB-1OYJKqOFOmARMC_a3qDSZfMPtwh4aXlLXVjaU32MjGrv21riqkJZgOS9aAdg5uAcnEE3aIGwUkzXrXkEanyvR3inK56OuDPCO6WOe-Ql_QFmJ6ilVF2RPn_NYus-QV0xTRFzKcbCowHnLf4"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </section>

        {/* Trust Bar */}
        <section className="bg-primary py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="material-icons">verified</span>
                </div>
                <div>
                  <h4 className="font-bold">ضمانت اصالت کالا</h4>
                  <p className="text-sm text-white/70">تضمین ۱۰۰٪ اصلی بودن تمامی محصولات</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 text-white border-x border-white/10">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="material-icons">local_shipping</span>
                </div>
                <div>
                  <h4 className="font-bold">تحویل سریع و مطمئن</h4>
                  <p className="text-sm text-white/70">ارسال در کابل و تمام ولایات افغانستان</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="material-icons">support_agent</span>
                </div>
                <div>
                  <h4 className="font-bold">پشتیبانی محلی</h4>
                  <p className="text-sm text-white/70">پاسخگویی سریع به زبان‌های دری و پښتو</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">دسته‌بندی محصولات</h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/category/mobile" className="group relative overflow-hidden bg-white dark:bg-background-dark p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-primary/5">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <span className="material-icons text-4xl text-primary group-hover:text-white">smartphone</span>
                </div>
                <h3 className="text-xl font-bold mb-2">گوشی موبایل</h3>
                <p className="text-slate-500 text-sm">بروزترین برندهای جهانی</p>
              </div>
            </Link>

            <Link to="/category/laptop" className="group relative overflow-hidden bg-white dark:bg-background-dark p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-primary/5">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <span className="material-icons text-4xl text-primary group-hover:text-white">laptop</span>
                </div>
                <h3 className="text-xl font-bold mb-2">لپ‌تاپ</h3>
                <p className="text-slate-500 text-sm">خانگی، گیمینگ و اداری</p>
              </div>
            </Link>

            <Link to="/category/accessories" className="group relative overflow-hidden bg-white dark:bg-background-dark p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-primary/5">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <span className="material-icons text-4xl text-primary group-hover:text-white">headphones</span>
                </div>
                <h3 className="text-xl font-bold mb-2">لوازم جانبی</h3>
                <p className="text-slate-500 text-sm">شارژر، کابل و قاب گوشی</p>
              </div>
            </Link>

            <Link to="/category/smartwatch" className="group relative overflow-hidden bg-white dark:bg-background-dark p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-primary/5">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <span className="material-icons text-4xl text-primary group-hover:text-white">watch</span>
                </div>
                <h3 className="text-xl font-bold mb-2">گجت‌های هوشمند</h3>
                <p className="text-slate-500 text-sm">ساعت و دستبندهای هوشمند</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2">محصولات برگزیده</h2>
                <div className="h-1 w-20 bg-primary rounded-full"></div>
              </div>
              <Link to="/category/all" className="text-primary font-bold flex items-center gap-1 hover:underline">
                مشاهده همه
                <span className="material-icons text-sm rotate-180">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white dark:bg-background-dark rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                  <div className="relative h-64 p-6 flex items-center justify-center">
                    <img
                      className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                      alt={product.name}
                      src={product.image}
                    />
                    {product.badge && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">
                        {product.badge}
                      </div>
                    )}
                  </div>
                  <div className="p-6 pt-0 flex flex-col flex-1">
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">{product.name}</h3>
                    <div className="mt-auto">
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-xl font-bold text-primary">{product.price}</span>
                        {product.oldPrice && (
                          <span className="text-sm text-slate-400 line-through">{product.oldPrice}</span>
                        )}
                      </div>
                      <Link
                        to={`/product/${product.id}`}
                        className="w-full bg-primary/5 hover:bg-primary hover:text-white text-primary font-bold py-3 rounded-lg transition-all border border-primary/10 flex items-center justify-center gap-2"
                      >
                        <span className="material-icons text-sm">visibility</span>
                        مشاهده جزئیات
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter / CTA */}
        <section className="py-20 container mx-auto px-4">
          <div className="bg-primary rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent"></div>
            <div className="relative z-10 p-10 md:p-20 grid md:grid-cols-2 gap-10 items-center">
              <div className="text-white text-right">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">از جدیدترین تخفیف‌ها مطلع شوید</h2>
                <p className="text-white/80 text-lg mb-8">
                  شماره تماس یا ایمیل خود را ثبت کنید تا از جدیدترین گوشی‌ها و آفرهای ویژه باخبر شوید.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
                  <input
                    className="flex-1 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:ring-white/30 text-right px-6 py-4"
                    placeholder="ایمیل یا شماره موبایل"
                    type="text"
                  />
                  <button className="bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors">
                    عضویت
                  </button>
                </div>
              </div>
              <div className="hidden md:flex justify-end">
                <img
                  className="w-80 h-auto rotate-12 drop-shadow-2xl"
                  alt="Modern smartphone mockup"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR0sBqXnoEk4onrWa57PF4YrjpbzIKF1bFFMRAsHoVMtVz1hkQbS0uM5-EVspip3mtsda_mzOndh_66aGtOwFf9R-O4z8dyscnRVKTTv5zELwndgXqAzSwR3uQocnUey4hupgQhoGteHgGxSyDyejQ4w4sINbusR6CpL2k4zBF6E9LmckEvs_rviISpimsMFGpuaAsgGEXPjslrQaUc9pzBI_JEqA5Xo0pzabid8t0oQC0b2ytT8SVeFA9WRYw8hsz7g0kRUTv2mo"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;

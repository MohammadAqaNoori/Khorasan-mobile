import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const CategoryPage = () => {
  const { name } = useParams();
  const { t } = useLanguage();

  const products = [
    { id: 1, name: 'آیفون ۱۵ پرو ظرفیت ۲۵۶ گیگابایت', brand: 'Apple', price: '۸۹,۵۰۰ AFN', oldPrice: '۹۵,۰۰۰ AFN', badge: 'جدید', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3pTrMziFxvn9dlHYH1fd7X2RD6wE9HoDVfVkY7UeS2bo2Ptw7fF4otl-hoH1es7CjaMEMvRWyNTXbOntWMKWI1VCb96vg9wU1xyRB1XxLQlYabzrJDtnJvmwaD9EdiE8oXpk-3o_ClnuY_iisLSAg-DlaX1goszstGEtO45ns6HiHno3LDUDryMP_FFkjNTaTxnm5CPMl4wcMgR4kB_08iTi16RngMQ8dgNcNxE32EGl_z4WEmfNAsoX_GNEik02Z2wqpjzVkUDw' },
    { id: 2, name: 'سامسونگ S24 الترا ۵ جی ۲۵۶ گیگابایت', brand: 'Samsung', price: '۷۸,۹۰۰ AFN', oldPrice: '۸۲,۰۰۰ AFN', badge: 'ویژه', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXSj3x2J_0J3g_y7xCwPjcY5Lyacd1mxsrpc5EKFXxPZkZmV9wyENRrqIMinFRkwRRPcpu6WCl3Ps9NFqxtosxgeoS0OZUGMkrwsgRVBZOQ9-5eBwN427EVj0705sjsjqo6k6xL1AFBVAM5isWzuSNkSxE5UNwWbhub69AfeZA2mtIF7nmCsWmsUUU0z-NzPaPnTTH0661Ge4-VdZxOB4UyHbAuXFn7YtSpktfGwS2KOosLFYnKOWN4g5Zd8_1jomuqnO5HERrWFI' },
    { id: 3, name: 'شیائومی ۱۴ نسخه گلوبال ۵۱۲ گیگابایت', brand: 'Xiaomi', price: '۵۴,۰۰۰ AFN', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTFW83Y6Aa3atufb6XWFqQnLGSYxb188EPwL_q8TGWAKKzEEWc6dZSatlbholDVLt1McvkwK1rufk3q2OdzE1eWkZJHtSv6XtUqY5ytNOkQU26mXzeqFmGrdWbCjQzxtzlviqRBhYsBWv1nLstCpZLwcPZbQPXiN-z5AiJRtuRIcARbBKcK4zApPCksJIZjkgpnYYWNouKsLWwy5PV7M1dgIlhYjkBqQQPTXvLCXyTZqr06B5HZx-PEIHeJXznMvVuxojxxFl_-hM' },
    { id: 4, name: 'گوگل پیکسل ۸ ظرفیت ۱۲۸ گیگابایت', brand: 'Google', price: '۴۸,۲۰۰ AFN', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAILA4TQ25_5dTBY0Cmfp-QGwEVZrLl5ukc9nZOTm0gLffExqnWrHLG8fYnGSDjXpxd1ZAFbS4avgBkRXY-GVClAlx9wlYBfFG9bBclG5OS5oHdPcKgOFUYeiPItO-XMoslCPTrE-Rf1yk7cCV0gqeb4TkBuAEXubvx8YnNhKukc-fBtovYXHHdsNBnW3T3ee8zCW6h9mvc_5g6LZkZmQ_N_AuuUqqN3X2QZeDN58EzVbGNYwxAhS_Xhz5V-nvMsoQOgoaa3AAJ7zw' }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <Header />
      
      <main>
        {/* Category Hero */}
        <section className="bg-white dark:bg-primary/5 py-8 border-b border-primary/5">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                <Link to="/" className="hover:text-primary transition-colors">{t('home')}</Link>
                <span className="material-icons text-[10px]">chevron_left</span>
                <a href="#" className="hover:text-primary transition-colors">{t('allProducts')}</a>
                <span className="material-icons text-[10px]">chevron_left</span>
                <span className="text-primary font-semibold">{t('smartphones')}</span>
              </div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{t('smartphones')}</h1>
              <p className="text-slate-500 max-w-2xl mt-2">
                {t('categoryDesc')}
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-1/4 flex flex-col gap-6">
              <div className="bg-white dark:bg-white/5 p-6 rounded-xl border border-primary/5">
                <h3 className="font-bold text-lg mb-4 border-r-4 border-primary pr-3">{t('brands')}</h3>
                <div className="space-y-3">
                  {['اپل (Apple)', 'سامسونگ (Samsung)', 'شیائومی (Xiaomi)', 'هوآوی (Huawei)'].map((brand) => (
                    <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                      <input className="rounded text-primary focus:ring-primary h-5 w-5 border-slate-300" type="checkbox" />
                      <span className="text-slate-600 dark:text-slate-300 group-hover:text-primary">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-white/5 p-6 rounded-xl border border-primary/5">
                <h3 className="font-bold text-lg mb-4 border-r-4 border-primary pr-3">{t('ram')}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {['۴ گیگابایت', '۸ گیگابایت', '۱۲ گیگابایت', '۱۶ گیگابایت'].map((ram) => (
                    <button key={ram} className="py-2 text-sm border border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary hover:text-primary transition-all">
                      {ram}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Product Area */}
            <div className="w-full lg:w-3/4">
              {/* Sorting Bar */}
              <div className="bg-white dark:bg-white/5 p-4 rounded-xl border border-primary/5 mb-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold flex items-center gap-1">
                    <span className="material-icons text-primary">sort</span>
                    {t('sortBy')}
                  </span>
                  <div className="flex gap-2">
                    {[
                      { key: 'newest', label: t('newest') },
                      { key: 'bestseller', label: t('bestseller') },
                      { key: 'cheapest', label: t('cheapest') },
                      { key: 'expensive', label: t('expensive') }
                    ].map((sort, idx) => (
                      <button key={sort.key} className={`text-sm px-4 py-1.5 rounded-full ${idx === 0 ? 'bg-primary text-white' : 'hover:bg-primary/10'} transition-colors`}>
                        {sort.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="text-sm text-slate-500">
                  {t('showing')} <span className="font-bold text-slate-800 dark:text-slate-200">۲۴</span> {t('items')}
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="bg-white dark:bg-white/5 rounded-xl border border-primary/5 overflow-hidden group hover:shadow-xl hover:shadow-primary/10 transition-all">
                    <div className="relative aspect-square p-6 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-center">
                      {product.badge && (
                        <span className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full z-10">
                          {product.badge}
                        </span>
                      )}
                      <img
                        alt={product.name}
                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                        src={product.image}
                      />
                      <Link
                        to={`/product/${product.id}`}
                        className="absolute bottom-4 inset-x-4 bg-primary text-white py-2 rounded-lg translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <span className="material-icons text-sm">shopping_cart</span>
                        {t('addToCart')}
                      </Link>
                    </div>
                    <div className="p-4">
                      <div className="text-xs text-primary font-bold mb-1 uppercase tracking-wide">{product.brand}</div>
                      <h3 className="font-bold text-sm mb-4 line-clamp-1 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          {product.oldPrice && (
                            <span className="text-xs text-slate-400 line-through">{product.oldPrice}</span>
                          )}
                          <span className="font-bold text-lg text-primary">{product.price}</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                          <span className="material-icons text-sm">favorite_border</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;

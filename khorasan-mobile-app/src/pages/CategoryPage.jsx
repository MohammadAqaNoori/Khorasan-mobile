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
    { id: 4, name: 'گوگل پیکسل ۸ ظرفیت ۱۲۸ گیگابایت', brand: 'Google', price: '۴۸,۲۰۰ AFN', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAILA4TQ25_5dTBY0Cmfp-QGwEVZrLl5ukc9nZOTm0gLffExqnWrHLG8fYnGSDjXpxd1ZAFbS4avgBkRXY-GVClAlx9wlYBfFG9bBclG5OS5oHdPcKgOFUYeiPItO-XMoslCPTrE-Rf1yk7cCV0gqeb4TkBuAEXubvx8YnNhKukc-fBtovYXHHdsNBnW3T3ee8zCW6h9mvc_5g6LZkZmQ_N_AuuUqqN3X2QZeDN58EzVbGNYwxAhS_Xhz5V-nvMsoQOgoaa3AAJ7zw' },
    { id: 5, name: 'ردمی نوت ۱۳ پرو ۵ جی ۱۲۸ گیگابایت', brand: 'Xiaomi', price: '۱۹,۸۰۰ AFN', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9nJpAdLsk6XteU_r2EqQynd7U3rJcszuzKIkHVoGLMrDLvjjwAM6KD4Sxt68ei0sOFtlJ8zuYtUCjl91w1i7qDo73TGdHbGTh59N1CbvjbChEJdecx6G63b3l8enElOvrmwA9FxsLgVh7Y6wRRNhfrKAjMq6nn0nfv0g7SDw9Oa413VPKDxluz_wNgqRKLO1o6nmc_gu2yYChxgLtTU5ZKOI4f6MeF5Zrd_OlKGdOdTrPY8-aMePB8YDh5p9cTO8t6KDu5oRoMNA' },
    { id: 6, name: 'آیفون ۱۴ با ظرفیت ۱۲۸ گیگابایت', brand: 'Apple', price: '۶۲,۰۰۰ AFN', badge: 'جدید', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKnjwE5IUyrDlvQyrL5Py3EgDDP3HLZEkXzWHpiE4l4zl8OMJtgKaDyJD_hhtjhBhle5PVBVXOFGhwZL2XMb4noXaNdXuu_iCbpViSEtR5J92kOUCyqBvnj-UKauKjC2ODc3zs3zOmWXyIUxlDI4FnhwfZ1wkPInJfmjhuXEM-yBeVPfDR1kgw8K4_lKG5a3gI17vBxnwqDK_j7dQPgtuLwciGPgZw73y0JiGl9P5BJglTMuLUgO35CWRBw77qAtYCRFPw22b_fLY' },
    { id: 7, name: 'سامسونگ گلکسی A54 ۵ جی ۱۲۸ گیگابایت', brand: 'Samsung', price: '۲۴,۵۰۰ AFN', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnDrYVIcHy9JahyxfeZAmhU_6DPCbMy_6EjGo_8H12MSVWkB3meC_0FfERuwxBKZUSYXKRRHb5MmxPKzzpQGgNk3lwAuoS2TW-Ma90aV0ONEDFZGrNqTlEDdAhhf24vVABP6qk3KLwPUVOGSXCCOEHmXAmj08ZOub3LJpf2T8h8KabXUQ9ihP5dHLMn-boW48e4I91Rj7w7s4hLQ3Ezf4EZLLwXwJxbwuLnfqQ0hKLJrQwndNAcGy4s0dU2In_M1JydTt55UCuyOc' },
    { id: 8, name: 'وان‌پلاس ۱۲ نسخه ۲۵۶ گیگابایت', brand: 'OnePlus', price: null, outOfStock: true, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLWdvyIpayoJXnhPWL2JXlhYu81p11LhXQilkn3E2-7D_xlH9WYYR-sDuQ-TZ6OzEaZgw4Em-IoD44DSAphmNOrZwYNKXpj5HHtTOF2OniSIWVEVAN9_11pkDYIezvkI4Wjq994VbWEUlYsRISO6YeBI-t7wkIkuGpGJVJr3xpezcTNaphLsAqsv-2KHOSSz_Te9oP9E5ChyWcylFUGYOMIm9FyQjeERCuXpis4bwicjKMPddtnl746wakfjalAH-G3n6gNcjCvw8' }
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

              {/* Price Range Filter */}
              <div className="bg-white dark:bg-white/5 p-6 rounded-xl border border-primary/5">
                <h3 className="font-bold text-lg mb-4 border-r-4 border-primary pr-3">{t('priceRange')}</h3>
                <div className="space-y-4">
                  <div className="h-1 bg-primary/10 rounded-full relative">
                    <div className="absolute inset-x-4 h-full bg-primary rounded-full"></div>
                    <div className="absolute left-4 -top-1.5 w-4 h-4 bg-white border-2 border-primary rounded-full shadow-sm cursor-pointer"></div>
                    <div className="absolute right-4 -top-1.5 w-4 h-4 bg-white border-2 border-primary rounded-full shadow-sm cursor-pointer"></div>
                  </div>
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="bg-primary/5 px-3 py-1 rounded">۱۰,۰۰۰</span>
                    <span className="text-slate-400">تا</span>
                    <span className="bg-primary/5 px-3 py-1 rounded">۱۸۰,۰۰۰</span>
                  </div>
                </div>
              </div>

              {/* Storage Filter */}
              <div className="bg-white dark:bg-white/5 p-6 rounded-xl border border-primary/5">
                <h3 className="font-bold text-lg mb-4 border-r-4 border-primary pr-3">{t('storage')}</h3>
                <div className="space-y-3">
                  {['۱۲۸ گیگابایت', '۲۵۶ گیگابایت', '۵۱۲ گیگابایت'].map((storage) => (
                    <label key={storage} className="flex items-center gap-3 cursor-pointer">
                      <input className="text-primary focus:ring-primary h-5 w-5 border-slate-300" name="storage" type="radio" />
                      <span className="text-slate-600 dark:text-slate-300">{storage}</span>
                    </label>
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
                      {product.outOfStock && (
                        <span className="absolute top-3 left-3 bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded z-10">
                          {t('outOfStock')}
                        </span>
                      )}
                      <img
                        alt={product.name}
                        className={`w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 ${product.outOfStock ? 'grayscale' : ''}`}
                        src={product.image}
                      />
                      {!product.outOfStock && (
                        <Link
                          to={`/product/${product.id}`}
                          className="absolute bottom-4 inset-x-4 bg-primary text-white py-2 rounded-lg translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <span className="material-icons text-sm">shopping_cart</span>
                          {t('addToCart')}
                        </Link>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="text-xs text-primary font-bold mb-1 uppercase tracking-wide">{product.brand}</div>
                      <h3 className={`font-bold text-sm mb-4 line-clamp-1 group-hover:text-primary transition-colors ${product.outOfStock ? 'text-slate-400 italic' : ''}`}>
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          {product.oldPrice && (
                            <span className="text-xs text-slate-400 line-through">{product.oldPrice}</span>
                          )}
                          {product.outOfStock ? (
                            <span className="font-bold text-lg text-slate-300">{t('outOfStock')}</span>
                          ) : (
                            <span className="font-bold text-lg text-primary">{product.price}</span>
                          )}
                        </div>
                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                          {product.outOfStock ? (
                            <span className="material-icons text-sm">notification_add</span>
                          ) : (
                            <span className="material-icons text-sm">favorite_border</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center gap-2">
                  <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-slate-200 hover:border-primary hover:text-primary transition-all">
                    <span className="material-icons">chevron_right</span>
                  </button>
                  <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary text-white font-bold">۱</button>
                  <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-slate-200 hover:border-primary hover:text-primary transition-all">۲</button>
                  <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-slate-200 hover:border-primary hover:text-primary transition-all">۳</button>
                  <span className="px-2 text-slate-400">...</span>
                  <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-slate-200 hover:border-primary hover:text-primary transition-all">۱۰</button>
                  <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-slate-200 hover:border-primary hover:text-primary transition-all">
                    <span className="material-icons">chevron_left</span>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Map & Newsletter Section */}
      <section className="bg-primary/5 py-12 mt-12 border-t border-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">{t('findUsKabul')}</h2>
              <p className="text-slate-600 dark:text-slate-400">{t('findUsDesc')}</p>
              <div className="flex items-start gap-4">
                <span className="material-icons text-primary p-2 bg-primary/10 rounded-lg">location_on</span>
                <div>
                  <p className="font-bold">{t('storeAddress')}</p>
                  <p className="text-sm text-slate-500">{t('storeAddressDetail')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-icons text-primary p-2 bg-primary/10 rounded-lg">phone</span>
                <div>
                  <p className="font-bold">{t('phoneContact')}</p>
                  <p className="text-sm text-slate-500 text-left" dir="ltr">+93 788 000 000</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg border-4 border-white">
              <img 
                alt="Map Location" 
                className="w-full h-[300px] object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIUDaS84CmwfEY-S7iUPFEtQjhTx97Vi3tykAJcOK7w3ilfqU_8dZptYY_P2tE_foJZQT-Qzq0sI8ByseekWYpZQcM9wBFcEleU_935RdAQglzchXJ38to1SIhkw1OfhYYkeWSZWvydt2PnRgvZFhs62KEe9n6HbTUZKKTCatwqgyiZsSq-Cn4rm8c7J2IV3IOjv_vqAkA3fFmdKvTvgktV-xTZ_JsUMvt5X7gddGpMfGFsmw7i1OzlpGFeEGBokK4e-67k6pFmCI"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryPage;

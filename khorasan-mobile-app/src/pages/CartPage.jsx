import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const CartPage = () => {
  const { t } = useLanguage();
  
  const cartItems = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      variant: 'رنگ: تیتانیوم طبیعی | ظرفیت: ۲۵۶ گیگابایت',
      price: '۱,۱۹۹ $',
      oldPrice: '۱,۲۵۰ $',
      quantity: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-anebi7nFKatfFiG4M730b2TdI8eP_bgwtApWAFA0Lqde5W5uBX9cjn7ycz8kT46R-prgGAvMM4THkSCb2vJIbnybT53OGEWZZYT82BR74c2gNqVO5A28fNRBjKfWJIdmtT8mOcr5tySa0QzQ2dQz8Jl9zN2B6DNeecR-UMyGZiK84LtQdZuZXWM6OBby_wv0MxFt6MMgTMNyvuSKQDTIJ-w95RVymw8ZcvZb80Gw11YVqxF1JRVksCMV_GE-q6lmBmHopVCF5vw'
    },
    {
      id: 2,
      name: 'iPad Air (5th Gen)',
      variant: 'رنگ: آبی | ظرفیت: ۶۴ گیگابایت | وای‌فای',
      price: '۵۹۹ $',
      quantity: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCi1j8uE1QlyheSgAE9SCB8iH_b3TcQDjEuSw9CJznHn9XtJBKpsbtsWiNMaX_lLtXnEf6ljlCoU-feeR_-991VeCCSdrtVnhVKpIJR96PLiXmlOkT7FoqYQ3vKeL17IbIpM9k8CI1H1Es-PP4FNRAIYZyyZQLYmpESifnTpkSlbq5oy7x7oAn1w4oi1ZpZTCyPPWZvjKhuqmztewHqlpaO5FKGn76oM0AyKTNmFEx6X4CkuHLWV-Hey3MRsv4mctTqUouD8TR1W4'
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
          <a href="/" className="hover:text-primary">{t('home')}</a>
          <span className="material-icons text-sm">chevron_left</span>
          <span className="text-primary font-semibold">{t('shoppingCart')}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product List */}
          <div className="w-full lg:w-2/3 space-y-4">
            <h1 className="text-2xl font-bold mb-6 flex items-center gap-3">
              {t('shoppingCart')}
              <span className="text-sm font-normal bg-primary/10 text-primary px-3 py-1 rounded-full">
                (۲ {t('cartItems')})
              </span>
            </h1>

            {cartItems.map((item) => (
              <div key={item.id} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/5 shadow-sm flex flex-col sm:flex-row gap-6 items-center">
                <div className="w-32 h-32 flex-shrink-0 bg-slate-50 dark:bg-slate-800 rounded-lg p-2">
                  <img alt={item.name} className="w-full h-full object-contain rounded" src={item.image} />
                </div>
                <div className="flex-grow text-right">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 dark:text-white">{item.name}</h3>
                      <p className="text-sm text-slate-500 mt-1">{item.variant}</p>
                      <span className="inline-flex items-center mt-2 px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 ml-1.5"></span>
                        {t('availableKabul')}
                      </span>
                    </div>
                    <button className="text-slate-400 hover:text-red-500 transition-colors">
                      <span className="material-icons">delete_outline</span>
                    </button>
                  </div>
                  <div className="flex justify-between items-end mt-6">
                    <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden h-10">
                      <button className="px-3 py-1 bg-slate-50 dark:bg-slate-800 hover:bg-primary/10 transition-colors">
                        <span className="material-icons text-sm leading-none">add</span>
                      </button>
                      <input
                        className="w-10 text-center border-none bg-transparent focus:ring-0 text-sm font-semibold"
                        type="text"
                        value={item.quantity}
                        readOnly
                      />
                      <button className="px-3 py-1 bg-slate-50 dark:bg-slate-800 hover:bg-primary/10 transition-colors">
                        <span className="material-icons text-sm leading-none">remove</span>
                      </button>
                    </div>
                    <div className="text-left">
                      {item.oldPrice && <p className="text-sm text-slate-400 line-through">{item.oldPrice}</p>}
                      <p className="text-xl font-bold text-primary">{item.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <a href="/category/mobile" className="inline-flex items-center text-primary font-medium hover:underline gap-2">
                <span className="material-icons text-sm">arrow_forward</span>
                {t('continueShopping')}
              </a>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-primary/5 shadow-lg">
                <h2 className="text-xl font-bold mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                  {t('orderSummary')}
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>{t('productPrice')} (۲ {t('cartItems')})</span>
                    <span className="font-semibold tracking-wide">۱,۷۹۸ $</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>{t('discount')}</span>
                    <span className="text-green-600 font-semibold tracking-wide">- ۵۱ $</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>{t('shippingCost')}</span>
                    <span className="text-slate-400">{t('free')}</span>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <span className="text-lg font-bold">{t('total')}</span>
                    <span className="text-2xl font-bold text-primary tracking-tight">۱,۷۴۷ $</span>
                  </div>
                  <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-3 mt-4">
                    <span>{t('checkout')}</span>
                    <span className="material-icons">chevron_left</span>
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-4 leading-relaxed">
                    {t('priceNote')}
                  </p>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white/50 dark:bg-slate-900/50 p-4 rounded-xl flex items-center gap-4 border border-slate-100 dark:border-slate-800">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <span className="material-icons">verified_user</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">{t('authenticityGuarantee')}</h4>
                    <p className="text-[11px] text-slate-500">{t('authenticityDesc')}</p>
                  </div>
                </div>
                <div className="bg-white/50 dark:bg-slate-900/50 p-4 rounded-xl flex items-center gap-4 border border-slate-100 dark:border-slate-800">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <span className="material-icons">local_shipping</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">{t('fastDelivery')}</h4>
                    <p className="text-[11px] text-slate-500">{t('fastDeliveryDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CartPage;

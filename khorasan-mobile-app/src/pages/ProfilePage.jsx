import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const ProfilePage = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('profile');

  const orders = [
    { id: '#KH-2024-001', date: '۱۴۰۳/۱۰/۱۵', status: 'delivered', total: '۸۵,۰۰۰ افغانی', items: 2 },
    { id: '#KH-2024-002', date: '۱۴۰۳/۱۰/۲۰', status: 'shipped', total: '۲۴,۵۰۰ افغانی', items: 1 },
    { id: '#KH-2024-003', date: '۱۴۰۳/۱۰/۲۵', status: 'processing', total: '۱۴,۲۰۰ افغانی', items: 1 },
  ];

  const favorites = [
    { id: 1, name: 'آیفون ۱۵ پرو مکس', price: '۸۵,۰۰۰ افغانی', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3pTrMziFxvn9dlHYH1fd7X2RD6wE9HoDVfVkY7UeS2bo2Ptw7fF4otl-hoH1es7CjaMEMvRWyNTXbOntWMKWI1VCb96vg9wU1xyRB1XxLQlYabzrJDtnJvmwaD9EdiE8oXpk-3o_ClnuY_iisLSAg-DlaX1goszstGEtO45ns6HiHno3LDUDryMP_FFkjNTaTxnm5CPMl4wcMgR4kB_08iTi16RngMQ8dgNcNxE32EGl_z4WEmfNAsoX_GNEik02Z2wqpjzVkUDw' },
    { id: 2, name: 'سامسونگ S24 الترا', price: '۷۸,۹۰۰ افغانی', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXSj3x2J_0J3g_y7xCwPjcY5Lyacd1mxsrpc5EKFXxPZkZmV9wyENRrqIMinFRkwRRPcpu6WCl3Ps9NFqxtosxgeoS0OZUGMkrwsgRVBZOQ9-5eBwN427EVj0705sjsjqo6k6xL1AFBVAM5isWzuSNkSxE5UNwWbhub69AfeZA2mtIF7nmCsWmsUUU0z-NzPaPnTTH0661Ge4-VdZxOB4UyHbAuXFn7YtSpktfGwS2KOosLFYnKOWN4g5Zd8_1jomuqnO5HERrWFI' },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'delivered': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'shipped': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'processing': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-primary/10 p-6 sticky top-24">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-200 dark:border-slate-700">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-icons text-primary text-3xl">person</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">نوری</h3>
                  <p className="text-sm text-slate-500">noori@gmail.com</p>
                </div>
              </div>
              
              <nav className="space-y-2">
                {[
                  { id: 'profile', icon: 'person', label: t('profile') },
                  { id: 'orders', icon: 'shopping_bag', label: t('myOrders') },
                  { id: 'favorites', icon: 'favorite', label: t('favorites') },
                  { id: 'addresses', icon: 'location_on', label: t('addresses') },
                  { id: 'settings', icon: 'settings', label: t('settings') },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      activeTab === item.id
                        ? 'bg-primary text-white'
                        : 'hover:bg-primary/5 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <span className="material-icons text-xl">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 transition-all">
                  <span className="material-icons text-xl">logout</span>
                  <span className="font-medium">{t('logout')}</span>
                </button>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-primary/10 p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold">{t('personalInfo')}</h2>
                  <button className="text-primary font-medium flex items-center gap-2 hover:underline">
                    <span className="material-icons text-sm">edit</span>
                    {t('editProfile')}
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      {t('fullName')}
                    </label>
                    <input
                      type="text"
                      className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3"
                      defaultValue="نوری"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      {t('email')}
                    </label>
                    <input
                      type="email"
                      className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3"
                      defaultValue="noori@gmail.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      {t('phoneNumber')}
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3"
                      defaultValue="+93 700 123 456"
                      dir="ltr"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      تاریخ تولد
                    </label>
                    <input
                      type="text"
                      className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3"
                      defaultValue="۱۳۷۰/۰۱/۰۱"
                    />
                  </div>
                </div>
                
                <button className="mt-8 bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all">
                  {t('saveChanges')}
                </button>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-primary/10 p-8">
                <h2 className="text-2xl font-bold mb-8">{t('orderHistory')}</h2>
                
                {orders.length > 0 ? (
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div key={order.id} className="border border-slate-200 dark:border-slate-700 rounded-lg p-6 hover:border-primary/30 transition-all">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-2">
                              <h3 className="font-bold text-lg">{order.id}</h3>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                {t(order.status)}
                              </span>
                            </div>
                            <p className="text-sm text-slate-500">
                              {t('orderDate')}: {order.date} | {order.items} {t('cartItems')}
                            </p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <p className="text-sm text-slate-500">{t('orderTotal')}</p>
                              <p className="text-xl font-bold text-primary">{order.total}</p>
                            </div>
                            <button className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-medium hover:bg-primary hover:text-white transition-all">
                              {t('viewOrder')}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <span className="material-icons text-6xl text-slate-300 mb-4">shopping_bag</span>
                    <p className="text-slate-500 mb-4">{t('noOrders')}</p>
                    <Link to="/" className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-opacity-90">
                      {t('startShopping')}
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Favorites Tab */}
            {activeTab === 'favorites' && (
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-primary/10 p-8">
                <h2 className="text-2xl font-bold mb-8">{t('savedItems')}</h2>
                
                {favorites.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {favorites.map((item) => (
                      <div key={item.id} className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 hover:border-primary/30 transition-all">
                        <div className="flex gap-4">
                          <div className="w-24 h-24 bg-slate-50 dark:bg-slate-800 rounded-lg p-2 flex-shrink-0">
                            <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold mb-2">{item.name}</h3>
                            <p className="text-primary font-bold mb-3">{item.price}</p>
                            <div className="flex gap-2">
                              <button className="flex-1 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90">
                                {t('addToCart')}
                              </button>
                              <button className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg">
                                <span className="material-icons">delete</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <span className="material-icons text-6xl text-slate-300 mb-4">favorite_border</span>
                    <p className="text-slate-500">{t('noFavorites')}</p>
                  </div>
                )}
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-primary/10 p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold">{t('shippingAddresses')}</h2>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 flex items-center gap-2">
                    <span className="material-icons text-sm">add</span>
                    {t('addNewAddress')}
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className="border-2 border-primary rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="inline-block bg-primary text-white text-xs px-2 py-1 rounded mb-2">
                          {t('defaultAddress')}
                        </span>
                        <h3 className="font-bold">کابل، شهرنو</h3>
                      </div>
                      <div className="flex gap-2">
                        <button className="text-primary hover:underline text-sm">{t('editAddress')}</button>
                        <button className="text-red-500 hover:underline text-sm">{t('deleteAddress')}</button>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      کابل، شهرنو، چهارراهی انصاری، کوچه سوم، خانه شماره ۲۵
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
                      تلفن: +93 700 123 456
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-primary/10 p-8">
                <h2 className="text-2xl font-bold mb-8">{t('accountSettings')}</h2>
                
                <div className="space-y-6">
                  <div className="pb-6 border-b border-slate-200 dark:border-slate-700">
                    <h3 className="font-bold mb-4">{t('changePassword')}</h3>
                    <button className="text-primary font-medium hover:underline">
                      تغییر رمز عبور
                    </button>
                  </div>
                  
                  <div className="pb-6 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold mb-1">{t('notifications')}</h3>
                        <p className="text-sm text-slate-500">دریافت اعلان‌های سفارش و تخفیف‌ها</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                  
                  <div className="pb-6 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold mb-1">{t('language')}</h3>
                        <p className="text-sm text-slate-500">دری / پښتو</p>
                      </div>
                      <select className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2">
                        <option>دری</option>
                        <option>پښتو</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProfilePage;

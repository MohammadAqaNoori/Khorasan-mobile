import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const { t } = useLanguage();

  const product = {
    name: 'آیفون ۱۵ پرو مکس - ۲۵۶ گیگابایت',
    price: '۸۵,۰۰۰ افغانی',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAPxiQ4h9iCJSOEXOXvj5ubjGPCqZxpn4-RqmvmfxHetjrdC0dqfWyyIrVKTDoPzG1bNXv8_UuBbwd-6UejOFtLEaU5cIve7P5TxVuAFvyLlHQ8oi6A5y2FTh0CS1suhjmf2Ojd_Sc7wZTyEMlynNvk37FrG2sUQWF0WHdHYPdZrHuwvyE_NdAfOW7jhNbLa0gzsGyzWburnC-Qk8Wrzgov7ilxzScPz7S-NiR6EWPo2ugy17G8MWDeULrc1WeCxPIhbZpvnK3ZkK4',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBBl6C29B5lgQCSC7fCF1ul8YRl-oKiZUv203InMu_0QY7U5oUMaCQTn9rrHXUkK3I_sI6r6S5tpgYqk1OiP4c6d6Gy-ce1T6AuF92ZKw6MqV0HAujv5AynuFQ-x4kuJtK3vKYYGIEx98jygIs4uz8oULOyeYpit8sDWxrVL56qcFxe3OPGfa0AZ4yOLOgJgKNMWHvRvHDypScGtefYBGirpibiSlRNH17rSz0w_by5h7OnFD8hVLuNseae0nBN28FUdtVnNX30azA'
    ],
    specs: [
      { icon: 'memory', label: 'تراشه', value: 'A17 Pro' },
      { icon: 'camera', label: 'دوربین', value: '۴۸ مگاپیکسل' },
      { icon: 'storage', label: 'حافظه', value: '۲۵۶ گیگابایت' },
      { icon: 'smartphone', label: 'صفحه نمایش', value: '۶.۷ اینچ OLED' }
    ]
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <nav className="flex mb-8 text-sm text-slate-500 gap-2">
          <a href="/" className="hover:text-primary">{t('home')}</a>
          <span className="material-icons text-xs self-center">chevron_left</span>
          <a href="/category/mobile" className="hover:text-primary">{t('smartphones')}</a>
          <span className="material-icons text-xs self-center">chevron_left</span>
          <span className="text-slate-800 dark:text-slate-200 font-medium">آیفون ۱۵ پرو مکس</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Image Gallery */}
          <div className="lg:col-span-7 flex flex-row-reverse gap-4">
            <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-primary/5 aspect-square flex items-center justify-center p-8 group">
              <img
                alt="Product"
                className="max-w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                src={product.images[selectedImage]}
              />
            </div>
            <div className="flex flex-col gap-4 w-24">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-24 h-24 rounded-lg border-2 ${selectedImage === idx ? 'border-primary' : 'border-primary/10'} bg-white dark:bg-slate-800 p-2 overflow-hidden`}
                >
                  <img className="w-full h-full object-contain" src={img} alt={`Thumbnail ${idx + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-2">
              <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {t('latestModel')}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="text-3xl font-bold text-primary">{product.price}</div>
              <div className="flex items-center bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-lg text-sm">
                <span className="material-icons text-sm mr-1">check_circle</span>
                <span>{t('inStock')}</span>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              تجربه قدرت و زیبایی با بدنه تیتانیومی و تراشه قدرتمند A17 Pro. این محصول با ضمانت نامه معتبر خراسان موبایل و تحویل فوری در کابل عرضه می‌شود.
            </p>

            {/* Technical Specs */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {product.specs.map((spec, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 rounded-lg border border-primary/5">
                  <span className="material-icons text-primary/60">{spec.icon}</span>
                  <div>
                    <div className="text-xs text-slate-400">{spec.label}</div>
                    <div className="text-sm font-semibold">{spec.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 mt-auto">
              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-opacity-90 shadow-lg shadow-primary/20 transition-all">
                <span className="material-icons">add_shopping_cart</span>
                {t('addToCart')}
              </button>
              <button className="w-full bg-green-500 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 shadow-lg transition-all">
                <span className="material-icons">chat</span>
                {t('orderWhatsapp')}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mt-10 border-t border-primary/10 pt-8">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-icons">verified</span>
                </div>
                <span className="text-xs font-medium text-slate-500">{t('originalProduct')}</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-icons">security</span>
                </div>
                <span className="text-xs font-medium text-slate-500">{t('validWarranty')}</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-icons">local_shipping</span>
                </div>
                <span className="text-xs font-medium text-slate-500">{t('fastDeliveryKabul')}</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;

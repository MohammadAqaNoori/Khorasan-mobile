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

        {/* Detailed Tabs Section */}
        <section className="mt-20">
          <div className="border-b border-slate-200 dark:border-slate-700 flex gap-12 mb-8 overflow-x-auto">
            <button className="pb-4 border-b-2 border-primary text-primary font-bold whitespace-nowrap">{t('productDescription')}</button>
            <button className="pb-4 border-b-2 border-transparent text-slate-400 hover:text-slate-600 font-medium whitespace-nowrap">{t('technicalSpecs')}</button>
            <button className="pb-4 border-b-2 border-transparent text-slate-400 hover:text-slate-600 font-medium whitespace-nowrap flex items-center gap-2">
              {t('userReviews')}
              <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-xs">۱۲</span>
            </button>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-primary/5 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">{t('titaniumDesign')}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t('titaniumDesc')}
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span className="text-sm">{t('contouredEdges')}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span className="text-sm">{t('thinnestBorders')}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span className="text-sm">{t('actionButton')}</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  className="w-full h-auto" 
                  alt="Titanium design details"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDfhygUA15nAS5vo5krFaM9XxvoUBboPEoq-aZHgcQ-6Hoqn_dTdeqts8L6EyxDB_n0OcFP8TFFOJGnb-TkuOAU-3RbXediiJjqGjT4h8ENqbdbJHni8t31Wial87oZyvOsyJAgwd7cEAAjpi1fcGnlET-4abn-tYxvjZEI6xasxPeSM4NNDlWWkf2MR1Dna9pOq1t0TGtIHbqDlfegMZRpuPiG05fle6eGIMd-MlCOPWTWwqsvb7t4uTA9SetPdf330_hrusMzSA"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="mt-20 mb-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold">{t('suggestedProducts')}</h3>
            <a className="text-primary font-medium flex items-center hover:gap-1 transition-all" href="#">
              {t('viewAllProducts')}
              <span className="material-icons">chevron_left</span>
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'اپل واچ سری ۹', price: '۲۴,۵۰۰ افغانی', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDW7PHeS-PMNte_ZZO5ZvPUE3NsWt9fxHmsE0M89PcfyjE89SVehvDMQyuCZWRfFGNS3Oa-_ohxaoFE8A3SkQ4Pcd2ahEXD2bAEDFje5E0IcWgc7QkNJKx_KP45xMkkvWtigo_0k_lNikZJAy3K7DP4ugq3N2ocdkOn_0pHbxn4v7CwMcaSlzR1LHIgwFwcaoK1KbV492Dl76HL-oqm__br68nSK0mR1gpSEl-0Xg_cX4Od_meLZoF-Pw-8EFhPTN9GGIXRvFgB1ig' },
              { name: 'ایرباد پرو نسل ۲', price: '۱۴,۲۰۰ افغانی', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9Lf5Sy9ThMqaLod-tgyzFwJGueMr1_HVmX53T_HupAJ-v8_72MiWGe6C9_ZP2kBWCO55ttrBNr5izk7bD15uWLaw8aGnzp8U8SBZGxF8HTBXRwyz7ZzfzanpgS2QX5kbCszBMUUQxRyaApWpI6LewB_caj-XDFxUE7w9qGvFR9Fu5GtcOf2le5ZMxi-Ts_k8KB4tt9zEZf2_SUZEue5vhmUYspXjmUfuS9EZ9mhujpsnJa53aWqCj4LTEV6ap7wnPdYnpDLquo_8' },
              { name: 'کاور چرمی آیفون ۱۵', price: '۳,۸۰۰ افغانی', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5M4Ju0qA3pD7FY4aH6_GBUyBMEHQfphfCydG-P-2YW6_EtMPSg75H_qUYS0D50Ak8FqpB0wWdt6hH_6Jp6dYFroAEGPRIaaAF1cpvm_czK_z_eD_NY8Q3q5DVv9kP0o5KHpHVntBC-Sdco24N3yOEJw6v8OXTqggyTgAsDMyNjYCsOhtPMYIssTp95AfB3-W-0Iz_1eEob-fO_o2RmkBVPl0Z2whRUIWz4G0alFxTvb9Qw6TQ-PUgEFlgQNi0NmTAatAZr6tprkU' },
              { name: 'شارژر ۲۰ وات اپل', price: '۱,۹۰۰ افغانی', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDT01Rc4RFG4b6n6PCxPzJSb8D4J686Ki527hk-DM4drm5yDEOmd3jFSTKe6p6_WI0K7qrEdIAWUoVf0DJIVuyyMzSBY_E35NY-pySwsvyvLftk8tFvr9qSNcHrB3WYUyrTimL_-TfP5Hw6jSozdh5cFG1CtWnMSLIZmOjN9dxx5qjTMbKs4E-5xo0UooAYH79jlMQdKEF4rClPNXJSe22XzvM8xSG2JUCIS1ZyjpIL_rDl1eD4ERX9UxPKN3UfPvHCziOSawnaxvo' }
            ].map((product, idx) => (
              <div key={idx} className="group bg-white dark:bg-slate-900 p-4 rounded-xl border border-primary/5 hover:border-primary/20 transition-all">
                <div className="aspect-square mb-4 bg-background-light dark:bg-slate-800 rounded-lg p-4 overflow-hidden">
                  <img className="w-full h-full object-contain group-hover:scale-110 transition-transform" alt={product.name} src={product.image} />
                </div>
                <h4 className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">{product.name}</h4>
                <div className="text-primary font-bold">{product.price}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;

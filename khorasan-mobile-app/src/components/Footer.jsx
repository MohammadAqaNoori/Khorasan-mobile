import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white dark:bg-background-dark border-t border-primary/10 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="material-icons text-white text-sm">smartphone</span>
              </div>
              <span className="text-xl font-bold text-primary uppercase tracking-tight">Khorasan</span>
            </Link>
            <p className="text-slate-500 text-sm leading-loose mb-8 text-right">
              {t('companyDesc')}
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <span className="material-icons text-lg">facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <span className="material-icons text-lg">camera_alt</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <span className="material-icons text-lg">alternate_email</span>
              </a>
            </div>
          </div>

          {/* Quick Access */}
          <div>
            <h4 className="font-bold mb-6 text-lg">{t('quickAccess')}</h4>
            <ul className="space-y-4 text-slate-500">
              <li><Link to="/category/mobile" className="hover:text-primary transition-colors">{t('mobileShop')}</Link></li>
              <li><Link to="/category/laptop" className="hover:text-primary transition-colors">{t('professionalLaptops')}</Link></li>
              <li><Link to="/category/accessories" className="hover:text-primary transition-colors">{t('computerParts')}</Link></li>
              <li><Link to="/category/smartwatch" className="hover:text-primary transition-colors">{t('smartWatches')}</Link></li>
            </ul>
          </div>

          {/* Shopping Guide */}
          <div>
            <h4 className="font-bold mb-6 text-lg">{t('shoppingGuide')}</h4>
            <ul className="space-y-4 text-slate-500">
              <li><Link to="/about" className="hover:text-primary transition-colors">{t('orderRegistration')}</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">{t('shippingPolicy')}</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">{t('paymentMethods')}</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">{t('faq')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-6 text-lg">{t('contactInfo')}</h4>
            <ul className="space-y-4 text-slate-500">
              <li className="flex items-start gap-3">
                <span className="material-icons text-primary text-sm mt-1">location_on</span>
                <span className="text-sm leading-relaxed">{t('location')}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons text-primary text-sm">phone</span>
                <a href="tel:+93781234567" className="hover:text-primary transition-colors" dir="ltr">+93 78 123 4567</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons text-primary text-sm">email</span>
                <a href="mailto:info@khorasanmobile.af" className="hover:text-primary transition-colors">info@khorasanmobile.af</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>{t('copyright')}</p>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-primary transition-colors">{t('termsConditions')}</Link>
            <Link to="/about" className="hover:text-primary transition-colors">{t('privacy')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

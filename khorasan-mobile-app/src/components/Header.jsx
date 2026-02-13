import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check if current path matches
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="bg-white dark:bg-background-dark/50 border-b border-primary/10 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="material-icons text-white">smartphone</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary leading-none uppercase tracking-tight">Khorasan</span>
            <span className="text-xs font-semibold text-primary/60 leading-none">خراسان موبایل</span>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <span className="material-icons text-2xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {!isActive('/') && (
            <Link to="/" className="hover:text-primary transition-colors">
              {t('home')}
            </Link>
          )}
          {!isActive('/category') && (
            <Link to="/category/mobile" className="hover:text-primary transition-colors">
              {t('products')}
            </Link>
          )}
          {!isActive('/about') && (
            <Link to="/about" className="hover:text-primary transition-colors">
              {t('about')}
            </Link>
          )}
          {!isActive('/contact') && (
            <Link to="/contact" className="hover:text-primary transition-colors">
              {t('contact')}
            </Link>
          )}
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-xl">
          <div className="relative w-full">
            <input
              className="w-full bg-primary/5 border-none rounded-lg py-3 px-12 focus:ring-2 focus:ring-primary/30 text-right"
              placeholder={t('searchPlaceholder')}
              type="text"
            />
            <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-primary/40">search</span>
          </div>
        </div>

        {/* Language & Actions */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 border-l border-primary/10 pl-6 ml-2">
            <button 
              onClick={toggleLanguage}
              className={`text-sm font-medium transition-colors ${language === 'dari' ? 'text-primary' : 'text-slate-400 hover:text-primary'}`}
            >
              دری
            </button>
            <span className="text-primary/20">|</span>
            <button 
              onClick={toggleLanguage}
              className={`text-sm font-medium transition-colors ${language === 'pashto' ? 'text-primary' : 'text-slate-400 hover:text-primary'}`}
            >
              پښتو
            </button>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/cart" className="p-2 hover:bg-primary/10 rounded-full transition-colors relative">
              <span className="material-icons">shopping_cart</span>
              <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-white text-[10px] flex items-center justify-center rounded-full">۳</span>
            </Link>
            <Link to="/profile" className="p-2 hover:bg-primary/10 rounded-full transition-colors">
              <span className="material-icons">person</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-background-dark border-t border-primary/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {!isActive('/') && (
              <Link 
                to="/" 
                onClick={closeMobileMenu}
                className="px-4 py-3 hover:bg-primary/10 rounded-lg transition-colors font-medium"
              >
                {t('home')}
              </Link>
            )}
            {!isActive('/category') && (
              <Link 
                to="/category/mobile" 
                onClick={closeMobileMenu}
                className="px-4 py-3 hover:bg-primary/10 rounded-lg transition-colors font-medium"
              >
                {t('products')}
              </Link>
            )}
            {!isActive('/about') && (
              <Link 
                to="/about" 
                onClick={closeMobileMenu}
                className="px-4 py-3 hover:bg-primary/10 rounded-lg transition-colors font-medium"
              >
                {t('about')}
              </Link>
            )}
            {!isActive('/contact') && (
              <Link 
                to="/contact" 
                onClick={closeMobileMenu}
                className="px-4 py-3 hover:bg-primary/10 rounded-lg transition-colors font-medium"
              >
                {t('contact')}
              </Link>
            )}
            
            {/* Mobile Actions */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-primary/10 mt-2 pt-4">
              <div className="flex items-center gap-4">
                <Link to="/cart" onClick={closeMobileMenu} className="p-2 hover:bg-primary/10 rounded-full transition-colors relative">
                  <span className="material-icons">shopping_cart</span>
                  <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-white text-[10px] flex items-center justify-center rounded-full">۳</span>
                </Link>
                <Link to="/profile" onClick={closeMobileMenu} className="p-2 hover:bg-primary/10 rounded-full transition-colors">
                  <span className="material-icons">person</span>
                </Link>
              </div>
              
              {/* Language Toggle in Mobile */}
              <div className="flex items-center gap-2">
                <button 
                  onClick={toggleLanguage}
                  className={`text-sm font-medium px-3 py-1 rounded transition-colors ${language === 'dari' ? 'bg-primary text-white' : 'text-slate-400 hover:text-primary'}`}
                >
                  دری
                </button>
                <button 
                  onClick={toggleLanguage}
                  className={`text-sm font-medium px-3 py-1 rounded transition-colors ${language === 'pashto' ? 'bg-primary text-white' : 'text-slate-400 hover:text-primary'}`}
                >
                  پښتو
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

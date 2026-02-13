import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-xl">
          <div className="relative w-full">
            <input
              className="w-full bg-primary/5 border-none rounded-lg py-3 px-12 focus:ring-2 focus:ring-primary/30 text-right"
              placeholder="جستجوی موبایل، لپ‌تاپ و لوازم جانبی..."
              type="text"
            />
            <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-primary/40">search</span>
          </div>
        </div>

        {/* Language & Actions */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 border-l border-primary/10 pl-6 ml-2">
            <button className="text-sm font-medium hover:text-primary transition-colors">دری</button>
            <span className="text-primary/20">|</span>
            <button className="text-sm font-medium hover:text-primary transition-colors text-slate-400">پښتو</button>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/cart" className="p-2 hover:bg-primary/10 rounded-full transition-colors relative">
              <span className="material-icons">shopping_cart</span>
              <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-white text-[10px] flex items-center justify-center rounded-full">۳</span>
            </Link>
            <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
              <span className="material-icons">person</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

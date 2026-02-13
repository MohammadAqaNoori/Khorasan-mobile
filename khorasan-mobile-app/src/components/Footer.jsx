import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-primary/10 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="material-icons text-white text-sm">smartphone</span>
              </div>
              <span className="text-xl font-bold text-primary uppercase tracking-tight">Khorasan</span>
            </div>
            <p className="text-slate-500 text-sm leading-loose mb-8 text-right">
              بزرگترین فروشگاه آنلاین موبایل و لپ‌تاپ در افغانستان. ارائه خدمات با کیفیت، گارانتی معتبر و تحویل سریع در سراسر کشور.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <span className="material-icons text-lg">facebook</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <span className="material-icons text-lg">camera_alt</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <span className="material-icons text-lg">alternate_email</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">دسترسی سریع</h4>
            <ul className="space-y-4 text-slate-500">
              <li><Link to="/category/mobile" className="hover:text-primary transition-colors">فروشگاه موبایل</Link></li>
              <li><Link to="/category/laptop" className="hover:text-primary transition-colors">لپ‌تاپ‌های حرفه‌ای</Link></li>
              <li><Link to="/category/accessories" className="hover:text-primary transition-colors">قطعات کامپیوتر</Link></li>
              <li><Link to="/category/smartwatch" className="hover:text-primary transition-colors">ساعت‌های هوشمند</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">راهنمای خرید</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-primary transition-colors">نحوه ثبت سفارش</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">رویه ارسال کالا</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">شیوه‌های پرداخت</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">سوالات متداول</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">اطلاعات تماس</h4>
            <ul className="space-y-4 text-slate-500">
              <li className="flex items-center gap-3">
                <span className="material-icons text-primary text-sm">location_on</span>
                <span>کابل، افغانستان - چهارراهی صدارت</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons text-primary text-sm">phone</span>
                <span dir="ltr">+93 78 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons text-primary text-sm">email</span>
                <span>info@khorasanmobile.af</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© ۲۰۲۴ خراسان موبایل. تمامی حقوق محفوظ است.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">قوانین و مقررات</a>
            <a href="#" className="hover:text-primary">حریم خصوصی</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

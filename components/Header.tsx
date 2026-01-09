
import React, { useState, useEffect } from 'react';
import { CLINIC_NAME } from '../constants.tsx';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Offers', href: '#offers' },
    { name: 'Book', href: '#booking' },
  ];
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white">
            <i className="fas fa-tooth"></i>
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-800'}`}>{CLINIC_NAME}</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-slate-600 hover:text-slate-900 font-medium transition-colors">{item.name}</a>
          ))}
          <a href="#booking" className="bg-slate-800 text-white px-6 py-2 rounded-full hover:bg-slate-700 transition-colors shadow-lg shadow-slate-200">Get Started</a>
        </nav>
        <button className="md:hidden text-slate-800"><i className="fas fa-bars text-2xl"></i></button>
      </div>
    </header>
  );
};

export default Header;

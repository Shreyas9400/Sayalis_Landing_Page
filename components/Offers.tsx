
import React from 'react';
import { OFFERS } from '../constants';

const Offers: React.FC = () => {
  return (
    <section id="offers" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Special Offers</h2>
            <p className="text-xl text-slate-600">
              We believe quality dental care should be accessible. Take advantage of our current promotions.
            </p>
          </div>
          <p className="text-sm text-slate-400 italic mb-2">*Offers subject to change and clinic confirmation</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {OFFERS.map((offer) => (
            <div 
              key={offer.id} 
              className="group relative bg-slate-50 p-8 rounded-[40px] border border-transparent hover:border-slate-200 transition-all overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-slate-800/5 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              <span className="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-6">Limited Period</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{offer.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">{offer.description}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-slate-400 text-xs font-medium">{offer.terms}</span>
                <a href="#booking" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-800 shadow-sm group-hover:bg-slate-800 group-hover:text-white transition-all">
                  <i className="fas fa-chevron-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;


import React from 'react';
import { CLINIC_NAME } from '../constants.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white">
              <i className="fas fa-tooth"></i>
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">{CLINIC_NAME}</span>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="text-slate-500 hover:text-slate-800 transition-colors"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-slate-500 hover:text-slate-800 transition-colors"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-slate-500 hover:text-slate-800 transition-colors"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-slate-500 hover:text-slate-800 transition-colors"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <div className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} {CLINIC_NAME}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

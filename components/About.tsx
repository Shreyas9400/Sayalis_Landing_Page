
import React from 'react';
import { DOCTOR_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-slate-50 rounded-[40px] transform rotate-3 group-hover:rotate-2 transition-transform"></div>
            <img 
              src="assets/Dr. Sayali.jpg" 
              alt={DOCTOR_NAME} 
              className="relative w-full h-[500px] object-cover rounded-[30px] shadow-lg grayscale-[0.3] hover:grayscale-0 transition-all duration-500"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                // If Dr. Sayali.jpg fails, try sayali.jpg as a secondary backup before the stock photo
                if (!target.src.includes('sayali.jpg') && !target.src.includes('picsum')) {
                   target.src = "assets/sayali.jpg";
                } else {
                   target.src = "https://picsum.photos/id/64/800/1000";
                }
              }}
            />
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Meet {DOCTOR_NAME}
            </h2>
            <div className="bg-slate-50 p-6 rounded-2xl mb-8 border-l-4 border-slate-800">
              <p className="text-2xl font-semibold text-slate-800 italic">
                "Patient-focused dentistry emphasizing ethical treatment, hygiene, and long-term oral health."
              </p>
            </div>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              With over 7 years of clinical excellence, Dr. Sayali brings a wealth of experience to every patient interaction. Her approach combines advanced dental techniques with a gentle, patient-first philosophy that prioritizes your comfort and long-term well-being.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <span className="block text-3xl font-bold text-slate-900">7+ Years</span>
                <span className="text-slate-500 text-sm">Clinical Experience</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-slate-900">100%</span>
                <span className="text-slate-500 text-sm">Sterilization Policy</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-slate-900">Ethical</span>
                <span className="text-slate-500 text-sm">Treatment Planning</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-slate-900">Supportive</span>
                <span className="text-slate-500 text-sm">Specialist Panel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

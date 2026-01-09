
import React, { useState } from 'react';
import { DOCTOR_NAME } from '../constants.tsx';

/**
 * About Component
 * 
 * Adjusted object-position to 'object-top' to ensure the doctor's forehead 
 * is not cropped in the portrait view.
 */
const About: React.FC = () => {
  // Ordered list of potential sources.
  const imageSources = [
    "/assets/Dr. Sayali.jpg",
    "/assets/Dr.%20Sayali.jpg",
    "/assets/sayali.jpg",
    "/assets/Dr. Sayali.JPG",
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1000"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleError = () => {
    if (currentIndex < imageSources.length - 1) {
      console.warn(`Asset not found: ${imageSources[currentIndex]}. Attempting next fallback...`);
      setCurrentIndex(prev => prev + 1);
    }
  };

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-60"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Minimalist Design Frames */}
            <div className="absolute -top-6 -left-6 w-40 h-40 border-t-2 border-l-2 border-slate-100 rounded-tl-[60px]"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 border-b-2 border-r-2 border-slate-100 rounded-br-[60px]"></div>
            
            <div className="relative group overflow-hidden rounded-[40px] shadow-2xl bg-slate-100">
              <img 
                src={imageSources[currentIndex]} 
                alt={DOCTOR_NAME} 
                className="w-full h-[650px] object-cover object-top grayscale-[0.1] group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
                onError={handleError}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Floating Credential Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 border border-white/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-white">
                    <i className="fas fa-award text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 leading-tight">Certified Expert</h4>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">7+ Years Clinical Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:pl-10">
            <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              Expertise & Compassion
            </span>
            
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-[1.1]">
              Meet <span className="text-slate-400 italic font-serif">{DOCTOR_NAME}</span>
            </h2>
            
            <div className="relative mb-10 pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-slate-800 rounded-full"></div>
              <p className="text-xl md:text-2xl font-medium text-slate-800 italic leading-relaxed">
                "Our clinic is defined by ethical practice. We don't just fix smiles; we build lasting relationships based on trust and transparent care."
              </p>
            </div>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
              Dr. Sayali brings a patient-first approach to modern dentistry. With specialized experience in pain-free root canals and pediatric comfort, she ensures that every family member receives treatment in a calm, non-judgmental environment.
            </p>
            
            <div className="grid grid-cols-2 gap-y-10 gap-x-12 mb-12">
              {[
                { label: "Experience", value: "7+ Years" },
                { label: "Patient Care", value: "100%" },
                { label: "Hygiene Status", value: "Verified" },
                { label: "Specialist Team", value: "On-Call" }
              ].map((stat, i) => (
                <div key={i} className="group cursor-default">
                  <span className="block text-3xl font-bold text-slate-900 group-hover:text-slate-500 transition-colors duration-300">{stat.value}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#booking" 
                className="inline-flex items-center gap-3 bg-slate-800 text-white px-10 py-5 rounded-2xl font-bold hover:bg-slate-700 transition-all shadow-xl hover:shadow-slate-200 group"
              >
                <span>Schedule Consultation</span>
                <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </a>
              <button 
                onClick={() => document.getElementById('chatbot-toggle')?.click()}
                className="inline-flex items-center gap-3 bg-white text-slate-800 border border-slate-200 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all"
              >
                <span>Chat with Dr. Sayali's AI</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

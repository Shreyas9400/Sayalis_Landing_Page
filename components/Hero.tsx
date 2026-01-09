
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-200 text-slate-700 text-sm font-semibold mb-6">
            Now Accepting New Patients
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
            Gentle, Ethical & Expert Dental Care
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
            Personalized oral health treatments for your family. Experience high-quality care in a calming, professional environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#booking" 
              className="bg-slate-800 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-700 transition-all text-center shadow-xl shadow-slate-200"
            >
              Book Appointment
            </a>
            <button 
              onClick={() => document.getElementById('chatbot-toggle')?.click()}
              className="bg-white text-slate-800 border border-slate-200 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-50 transition-all text-center"
            >
              Chat with Us
            </button>
          </div>
        </div>
        
        <div className="relative h-[500px] md:h-[600px] hidden md:block">
          <img 
            src="https://picsum.photos/id/192/800/1000" 
            alt="Dental Clinic" 
            className="w-full h-full object-cover rounded-[40px] shadow-2xl grayscale-[0.2]"
          />
          <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl max-w-[280px]">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <img key={i} src={`https://picsum.photos/id/${i+10}/100/100`} className="w-10 h-10 rounded-full border-2 border-white" />
                ))}
              </div>
              <span className="text-sm font-bold text-slate-800">500+ Happy Patients</span>
            </div>
            <p className="text-sm text-slate-500 italic">"The most painless root canal I've ever experienced. Highly recommended!"</p>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40%] h-[80%] bg-slate-100 rounded-l-full -z-0"></div>
    </section>
  );
};

export default Hero;

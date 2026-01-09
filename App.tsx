
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Offers from './components/Offers.tsx';
import Booking from './components/Booking.tsx';
import ClinicInfo from './components/ClinicInfo.tsx';
import Chatbot from './components/Chatbot.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-slate-200 selection:text-slate-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        
        {/* Why Choose Us Minimal Strip */}
        <section className="bg-slate-900 py-16 text-white overflow-hidden relative">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <h2 className="text-3xl font-bold max-w-sm">Why families trust our clinic for over 7 years</h2>
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { icon: "fa-shield-heart", text: "Ethical Care" },
                  { icon: "fa-vial-circle-check", text: "Strict Hygiene" },
                  { icon: "fa-microscope", text: "Specialist Access" },
                  { icon: "fa-face-smile-beam", text: "Gentle Approach" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <span className="font-semibold">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Offers />
        <Booking />
        <ClinicInfo />
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
};

export default App;

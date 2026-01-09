
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Services</h2>
          <p className="text-xl text-slate-600">
            From preventive care to complex oral surgeries, we offer a wide range of expert dental services tailored to your needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-800 text-2xl mb-8">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
              <a href="#booking" className="text-slate-800 font-semibold hover:underline flex items-center space-x-2">
                <span>Learn More</span>
                <i className="fas fa-arrow-right text-xs"></i>
              </a>
            </div>
          ))}
          
          <div className="bg-slate-800 p-10 rounded-3xl flex flex-col justify-center items-start text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl">
              <i className="fas fa-user-doctor"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 z-10">Complex Case?</h3>
            <p className="text-slate-300 mb-8 z-10">We have a panel of experienced specialists available for advanced treatments including oral surgery and complex orthodontics.</p>
            <a href="#booking" className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors z-10">
              Consult a Specialist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

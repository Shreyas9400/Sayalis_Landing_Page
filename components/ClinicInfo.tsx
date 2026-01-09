
import React from 'react';
import { CONTACT_INFO, CLINIC_TIMINGS } from '../constants.tsx';

const ClinicInfo: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 overflow-hidden bg-slate-50 rounded-[50px]">
          <div className="p-12 lg:p-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-10">Visit Our Clinic</h2>
            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-800 text-xl shadow-sm shrink-0">
                  <i className="fas fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Our Location</h4>
                  <p className="text-slate-600 leading-relaxed">{CONTACT_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-800 text-xl shadow-sm shrink-0">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Contact Details</h4>
                  <p className="text-slate-600">Phone: {CONTACT_INFO.phone}</p>
                  <p className="text-slate-600">Email: {CONTACT_INFO.email}</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-800 text-xl shadow-sm shrink-0">
                  <i className="fas fa-calendar"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Working Hours</h4>
                  <p className="text-slate-600">Morning: {CLINIC_TIMINGS.morning.start} AM - {CLINIC_TIMINGS.morning.end} PM</p>
                  <p className="text-slate-600">Evening: {CLINIC_TIMINGS.evening.start} PM - {CLINIC_TIMINGS.evening.end} PM</p>
                  <p className="text-slate-500 text-sm mt-1 italic">Sunday by appointment only.</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <a href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`} target="_blank" rel="noreferrer" className="inline-flex items-center space-x-3 bg-slate-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-700 transition-all shadow-lg shadow-slate-200">
                <i className="fas fa-map"></i>
                <span>Get Directions</span>
              </a>
            </div>
          </div>
          <div className="h-[400px] lg:h-auto min-h-[400px] bg-slate-200 relative">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995185966!3d19.082197839582234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" className="absolute inset-0 w-full h-full border-0 grayscale invert brightness-95 opacity-80" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicInfo;

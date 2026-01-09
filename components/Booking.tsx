
import React, { useState, useEffect } from 'react';
import { CLINIC_TIMINGS } from '../constants';

const Booking: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [formData, setFormData] = useState({ name: '', phone: '', concern: '' });
  const [bookedSlots, setBookedSlots] = useState<Record<string, string[]>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Load bookings from local storage to simulate persistence
  useEffect(() => {
    const saved = localStorage.getItem('smile_care_bookings');
    if (saved) setBookedSlots(JSON.parse(saved));
    
    // Default to today
    const today = new Date().toISOString().split('T')[0];
    setSelectedDate(today);
  }, []);

  const generateSlots = () => {
    const slots: string[] = [];
    
    // Morning session
    let [h, m] = CLINIC_TIMINGS.morning.start.split(':').map(Number);
    const endM = CLINIC_TIMINGS.morning.end.split(':').map(Number);
    while (h < endM[0] || (h === endM[0] && m < endM[1])) {
      slots.push(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`);
      m += 30;
      if (m >= 60) { h += 1; m = 0; }
    }

    // Evening session
    let [eh, em] = CLINIC_TIMINGS.evening.start.split(':').map(Number);
    const endE = CLINIC_TIMINGS.evening.end.split(':').map(Number);
    while (eh < endE[0] || (eh === endE[0] && em < endE[1])) {
      slots.push(`${eh.toString().padStart(2, '0')}:${em.toString().padStart(2, '0')}`);
      em += 30;
      if (em >= 60) { eh += 1; em = 0; }
    }
    
    return slots;
  };

  const slots = generateSlots();

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedSlot) return;

    const newBookings = { ...bookedSlots };
    if (!newBookings[selectedDate]) newBookings[selectedDate] = [];
    newBookings[selectedDate].push(selectedSlot);
    
    setBookedSlots(newBookings);
    localStorage.setItem('smile_care_bookings', JSON.stringify(newBookings));
    setIsSubmitted(true);
    
    // Reset after some time
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', concern: '' });
      setSelectedSlot('');
    }, 5000);
  };

  // Get min and max dates (Current month only)
  const today = new Date();
  const firstDay = new Date(today.getFullYear(), today.getMonth(), today.getDate()).toISOString().split('T')[0];
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).toISOString().split('T')[0];

  return (
    <section id="booking" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[40px] shadow-2xl shadow-slate-200 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 bg-slate-800 text-white">
              <h2 className="text-4xl font-bold mb-8 italic">Book Your Smile.</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center shrink-0">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Clinic Timings</h4>
                    <p className="text-slate-400 text-sm">Morning: 11:30 AM - 02:30 PM</p>
                    <p className="text-slate-400 text-sm">Evening: 05:30 PM - 08:30 PM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center shrink-0">
                    <i className="fas fa-calendar-check"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Real-time Slots</h4>
                    <p className="text-slate-400 text-sm">Bookings are confirmed in real-time for the current month.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center shrink-0">
                    <i className="fas fa-headset"></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Need Assistance?</h4>
                    <p className="text-slate-400 text-sm">Our AI chatbot is available 24/7 to answer your clinic queries.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12 lg:p-20">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-fade-in">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl">
                    <i className="fas fa-check"></i>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Appointment Requested!</h3>
                  <p className="text-slate-600">
                    Thank you, {formData.name}. Your appointment for {selectedDate} at {selectedSlot} has been received. The clinic will confirm shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-slate-800 font-bold hover:underline"
                  >
                    Book another session
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBooking} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Select Date</label>
                    <input 
                      type="date" 
                      required
                      min={firstDay}
                      max={lastDay}
                      className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-slate-200 outline-none transition-all"
                      value={selectedDate}
                      onChange={e => {
                        setSelectedDate(e.target.value);
                        setSelectedSlot('');
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Available Time Slots</label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 max-h-48 overflow-y-auto pr-2">
                      {slots.map(slot => {
                        const isBooked = bookedSlots[selectedDate]?.includes(slot);
                        return (
                          <button
                            key={slot}
                            type="button"
                            disabled={isBooked}
                            onClick={() => setSelectedSlot(slot)}
                            className={`p-3 text-sm rounded-lg font-medium transition-all ${
                              selectedSlot === slot 
                                ? 'bg-slate-800 text-white' 
                                : isBooked 
                                  ? 'bg-slate-100 text-slate-300 cursor-not-allowed line-through' 
                                  : 'bg-slate-50 text-slate-700 hover:bg-slate-200'
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Dental Concern / Message</label>
                    <textarea 
                      className="w-full bg-slate-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-slate-200 outline-none transition-all h-24"
                      placeholder="e.g. Tooth ache, cleaning, etc."
                      value={formData.concern}
                      onChange={e => setFormData({ ...formData, concern: e.target.value })}
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={!selectedSlot}
                    className="w-full bg-slate-800 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all shadow-xl shadow-slate-100"
                  >
                    Confirm Appointment Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;

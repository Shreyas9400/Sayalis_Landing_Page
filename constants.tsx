
import { Service, Offer } from './types.ts';

export const CLINIC_NAME = "Dr. Sayali's Smile Care";
export const DOCTOR_NAME = "Dr. Sayali";
export const ADMIN_EMAIL = "drsayalidentalclinic@gmail.com";

export const SERVICES: Service[] = [
  { title: "General Dentistry", description: "Comprehensive checkups and routine maintenance for oral health.", icon: "fa-tooth" },
  { title: "Root Canal Treatment", description: "Expert endodontic care to save your natural teeth.", icon: "fa-vials" },
  { title: "Dental Implants", description: "Modern solutions for missing teeth using high-quality implants.", icon: "fa-fill-drip" },
  { title: "Cosmetic Dentistry", description: "Smile makeovers, whitening, and aesthetic enhancements.", icon: "fa-sparkles" },
  { title: "Braces and Aligners", description: "Straighten your smile with modern orthodontic solutions.", icon: "fa-grip-lines-vertical" },
  { title: "Pediatric Dentistry", description: "Gentle and fun dental care specifically for children.", icon: "fa-child" },
  { title: "Preventive Dental Care", description: "Protection against cavities and gum disease before they start.", icon: "fa-shield-halved" },
];

export const OFFERS: Offer[] = [
  { id: "1", title: "Free Dental Check-up", description: "Complimentary initial screening for first-time visitors.", terms: "Valid until end of month" },
  { id: "2", title: "15% Off Implants", description: "Special discount on full dental implant procedures.", terms: "Consultation required" },
  { id: "3", title: "Kids Consultation Offer", description: "Special rates for children's first dental visits.", terms: "Ages 3-12" },
];

export const CLINIC_TIMINGS = {
  morning: { start: "11:30", end: "14:30" },
  evening: { start: "17:30", end: "20:30" },
};

export const CONTACT_INFO = {
  address: "Shop No. 7A, Varadlaxmi Apartment, Gopal Krishna Gokhale Rd, Shree Ji Society, Hanuman Chowk, Mulund East, Mumbai, Maharashtra 400081",
  phone: "+91 98765 43210",
  email: "care@drsayali-smile.com",
  mapUrl: "https://maps.app.goo.gl/GqB69875meTLjMoy9",
  coordinates: {
    lat: 19.172050558643633,
    lng: 72.95726125523512
  }
};

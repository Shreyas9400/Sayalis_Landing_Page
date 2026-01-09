
export interface Appointment {
  id: string;
  patientName: string;
  phone: string;
  date: string;
  time: string;
  concern: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  terms: string;
}

export interface TimeSlot {
  time: string;
  isBooked: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

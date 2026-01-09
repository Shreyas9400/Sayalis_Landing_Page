
import { Appointment } from '../types.ts';
import { ADMIN_EMAIL, CLINIC_NAME, CONTACT_INFO } from '../constants.tsx';

/**
 * Simulates sending an email notification.
 * In a production environment, this would call a backend API or 
 * a service like EmailJS, SendGrid, or AWS SES.
 */
export async function sendAppointmentEmails(appointment: Appointment) {
  console.group('%c 📧 Email Service Notification', 'color: #1e293b; font-weight: bold; font-size: 14px;');
  
  // 1. Admin Notification
  console.log(`%c Sending notification to Admin (${ADMIN_EMAIL})...`, 'color: #0369a1');
  const adminBody = `
    New Appointment Booked!
    -----------------------
    Patient: ${appointment.patientName}
    Phone: ${appointment.phone}
    Email: ${appointment.email || 'Not provided'}
    Date: ${appointment.date}
    Time: ${appointment.time}
    Concern: ${appointment.concern || 'None'}
  `;
  console.log(adminBody);

  // 2. Customer Confirmation (if email provided)
  if (appointment.email) {
    console.log(`%c Sending confirmation to Patient (${appointment.email})...`, 'color: #15803d');
    const customerBody = `
      Dear ${appointment.patientName},
      
      Your appointment at ${CLINIC_NAME} has been received!
      
      Details:
      - Date: ${appointment.date}
      - Time: ${appointment.time}
      - Location: ${CONTACT_INFO.address}
      
      We look forward to seeing you soon.
      
      Best regards,
      The Team at ${CLINIC_NAME}
    `;
    console.log(customerBody);
  } else {
    console.log('%c No patient email provided. Skipping customer confirmation.', 'color: #94a3b8; font-style: italic;');
  }

  console.groupEnd();

  // Simulate network delay
  return new Promise((resolve) => setTimeout(resolve, 800));
}

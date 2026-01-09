
import { Appointment } from '../types.ts';

/**
 * Sends appointment data to the backend API.
 * 
 * NOTE: In development, we must target port 3001 explicitly.
 * Relative paths like '/api/...' will result in 404s if the frontend 
 * and backend are running on different ports without a proxy setup.
 */
export async function sendAppointmentEmails(appointment: Appointment): Promise<void> {
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const API_ENDPOINT = isLocal 
    ? 'http://localhost:3001/api/send-appointment-email' 
    : '/api/send-appointment-email';

  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(appointment),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to send confirmation emails');
    }

    console.log('✅ Appointment emails successfully processed by backend.');
  } catch (error) {
    console.error('❌ Email Service Error:', error);
    // Re-throw to allow the UI to handle the error state
    throw error;
  }
}

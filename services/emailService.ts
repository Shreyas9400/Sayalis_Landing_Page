
import { Appointment } from '../types.ts';

/**
 * Sends appointment data to the backend API which handles SMTP mailing.
 * This ensures no sensitive credentials (like SMTP passwords) are exposed to the client.
 */
export async function sendAppointmentEmails(appointment: Appointment): Promise<void> {
  try {
    const response = await fetch('/api/send-appointment-email', {
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
    // Re-throw to allow the UI (Booking.tsx) to handle the error state
    throw error;
  }
}

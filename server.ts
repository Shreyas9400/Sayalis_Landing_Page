
import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { Appointment } from './types.ts';
import { ADMIN_EMAIL, CLINIC_NAME, CONTACT_INFO } from './constants.tsx';

dotenv.config();

const app = express();

/**
 * CORS Middleware
 * Allows the frontend (running on a different port) to communicate with this server.
 */
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json() as any);

/**
 * SMTP Configuration
 */
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, 
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

// Verify SMTP connection on startup for debugging
transporter.verify((error) => {
  if (error) {
    console.error('❌ SMTP Server Configuration Error:', error);
    console.error('Check if EMAIL_USER and EMAIL_APP_PASSWORD are correct in .env');
  } else {
    console.log('✅ SMTP Server is ready to send confirmation emails');
  }
});

/**
 * API Endpoint: /api/send-appointment-email
 */
app.post('/api/send-appointment-email', async (req, res) => {
  const appointment: Appointment = req.body;

  if (!appointment || !appointment.patientName || !appointment.date) {
    return res.status(400).json({ success: false, message: 'Invalid appointment data' });
  }

  try {
    // 1. Admin Notification Email
    const adminMailOptions = {
      from: `"${CLINIC_NAME} Booking" <${process.env.EMAIL_USER}>`,
      to: ADMIN_EMAIL,
      subject: `New Appointment: ${appointment.patientName} (${appointment.date})`,
      html: `
        <div style="font-family: sans-serif; color: #334155;">
          <h2 style="color: #1e293b; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">New Booking Received</h2>
          <table style="width: 100%; margin-top: 20px;">
            <tr><td style="font-weight: bold; width: 120px;">Patient:</td><td>${appointment.patientName}</td></tr>
            <tr><td style="font-weight: bold;">Phone:</td><td>${appointment.phone}</td></tr>
            <tr><td style="font-weight: bold;">Email:</td><td>${appointment.email || 'N/A'}</td></tr>
            <tr><td style="font-weight: bold;">Date:</td><td>${appointment.date}</td></tr>
            <tr><td style="font-weight: bold;">Time:</td><td>${appointment.time}</td></tr>
            <tr><td style="font-weight: bold; vertical-align: top;">Concern:</td><td>${appointment.concern || 'General Checkup'}</td></tr>
          </table>
          <p style="margin-top: 30px; font-size: 12px; color: #94a3b8;">This is an automated notification from your clinic website.</p>
        </div>
      `,
    };

    // 2. Patient Confirmation Email
    let patientMailOptions = null;
    if (appointment.email) {
      patientMailOptions = {
        from: `"${CLINIC_NAME}" <${process.env.EMAIL_USER}>`,
        to: appointment.email,
        subject: `Your Dental Appointment at ${CLINIC_NAME}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
            <div style="background: #1e293b; color: white; padding: 30px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">Appointment Confirmed</h1>
            </div>
            <div style="padding: 40px; color: #334155; line-height: 1.6;">
              <p>Dear <strong>${appointment.patientName}</strong>,</p>
              <p>Thank you for choosing ${CLINIC_NAME}. Your appointment request has been received and added to our schedule.</p>
              
              <div style="background: #f8fafc; border-radius: 8px; padding: 20px; margin: 25px 0;">
                <p style="margin: 5px 0;">📅 <strong>Date:</strong> ${appointment.date}</p>
                <p style="margin: 5px 0;">⏰ <strong>Time:</strong> ${appointment.time}</p>
                <p style="margin: 5px 0;">📍 <strong>Location:</strong> ${CONTACT_INFO.address}</p>
              </div>

              <p>Please arrive 10 minutes prior to your scheduled time. If you need to reschedule or cancel, please contact us at <strong>${CONTACT_INFO.phone}</strong>.</p>
              
              <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
                <p style="font-weight: bold; color: #1e293b; margin-bottom: 5px;">${CLINIC_NAME}</p>
                <p style="font-size: 12px; color: #64748b; margin: 0;">Mulund East, Mumbai</p>
              </div>
            </div>
          </div>
        `,
      };
    }

    // Execute sends
    const tasks = [transporter.sendMail(adminMailOptions)];
    if (patientMailOptions) {
      tasks.push(transporter.sendMail(patientMailOptions));
    }

    await Promise.all(tasks);
    console.log(`✅ Appointment emails successfully sent for ${appointment.patientName}`);
    res.status(200).json({ success: true, message: 'Emails sent successfully' });

  } catch (error) {
    console.error('SMTP/Nodemailer Error:', error);
    res.status(500).json({ success: false, message: 'Failed to send emails via SMTP' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Email Service Server running on http://localhost:${PORT}`);
});

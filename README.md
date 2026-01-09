
# 🦷 Smile Care Email System Setup

This repository contains the backend logic required to securely send emails using **Gmail SMTP** without exposing credentials to the frontend.

## 1. Gmail SMTP Preparation
To use Gmail as your mailing service, you must use an **App Password**:
1.  Log in to the Google Account: `drsayalidentalclinic@gmail.com`.
2.  Navigate to **Security** settings.
3.  Ensure **2-Step Verification** is enabled.
4.  Search for **App Passwords**.
5.  Select App: `Mail`, Device: `Other (Custom name: Clinic Website)`.
6.  Copy the **16-digit code** generated.

## 2. Environment Configuration
Create a `.env` file in the root directory:
```env
# Gmail Credentials
EMAIL_USER=drsayalidentalclinic@gmail.com
EMAIL_APP_PASSWORD=your_16_digit_app_password_here

# Server Settings
PORT=3001
```

## 3. Backend Deployment
The backend uses **Express** and **Nodemailer**.
1.  Install dependencies:
    ```bash
    npm install express nodemailer dotenv cors
    ```
2.  Run the server:
    ```bash
    npx ts-node server.ts
    ```

## 4. Verification
1.  Submit an appointment on the website.
2.  Monitor the terminal logs for: `Email(s) sent successfully`.
3.  Verify the receipt of the **Admin Notification** in the clinic inbox.
4.  Verify the **Patient Confirmation** in the patient's inbox (if email was provided).

---
*Note: Ensure your firewall or hosting provider allows outbound traffic on Port 587.*

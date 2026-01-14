🏦 Monzo-Style MFA Prototype
This project is a React-based implementation of a Multi-Factor Authentication (MFA) system designed to mitigate Credential Harvesting and Brute Force attacks. It features a real-time email integration using EmailJS to send 6-digit verification codes.

🔐 Security Features
Identity Hardening: Requires a verified email address and a time-sensitive 6-digit OTP.

Risk Mitigation: Automatically locks the account after 3 failed attempts to prevent automated brute-force scripts.

Rate Limiting: Implements a 30-second mandatory cooldown period when an account is locked.

Secure Configuration: Uses environment variables (.env) to prevent API credential leakage in public repositories.

🛠️ Setup Instructions
To run this project locally, you will need to provide your own EmailJS credentials.

Clone the repository:

Bash

git clone <your-repo-url>
cd monzo-verify
Install dependencies:

Bash

npm install
Configure Environment Variables: Create a file named .env in the root directory and add the following (replacing the placeholders with your EmailJS details):

Plaintext

REACT_APP_EMAILJS_SERVICE_ID=your_service_id

REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id

REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key

Start the app:

Bash

npm start
🧪 Testing the Prototype
Happy Path: Enter a valid email, receive the code, and enter it correctly to access the dashboard.

Negative Test: Enter an incorrect code 3 times to trigger the "Account Locked" state.

Timer Test: Observe the "Resend Code" button cooldown and the OTP expiry timer in the MFA view.

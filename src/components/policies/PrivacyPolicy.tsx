import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from './policyStyles';

export default function PrivacyPolicy() {
  return (
    <>
      <style>{styles}</style>
      <div className="policy-wrap">

        {/* Meta Card */}
        <div className="meta-card">
          <div className="meta-item"><label>Effective Date</label><span>April 20, 2026</span></div>
          <div className="meta-item"><label>Last Updated</label><span>April 20, 2026</span></div>
          <div className="meta-item"><label>Version</label><span>1.0</span></div>
          <div className="meta-item"><label>Applies To</label><span>pss-trust.vercel.app</span></div>
          <div className="meta-item"><label>Organization</label><span>PSS Trust — Reg No: 95/2003</span></div>
        </div>

        <div className="callout callout-blue">
          This Privacy Policy explains how PSS Trust collects, uses, stores, and protects your personal
          information when you use the PSS Trust Student Management Portal. Please read this document
          carefully before registering or using the portal.
        </div>

        {/* 1 */}
        <h1>1. Who We Are</h1>
        <p>
          Potukuchi Somasundara Social Welfare and Charitable Trust ("PSS Trust", "we", "our", or "us")
          is a registered non-governmental organization (Registration No. 95/2003), established on
          August 15, 2003. We are dedicated to providing educational support and welfare services to
          students from Below Poverty Line (BPL) families across our branches in Hyderabad and
          Telangana, India.
        </p>
        <p>
          The PSS Trust Student Management Portal is the digital platform we operate to manage student
          registrations, attendance, fee applications, and administrative functions. Your privacy is
          important to us and we are committed to protecting it.
        </p>

        {/* 2 */}
        <h1>2. Information We Collect</h1>

        <h2>2.1 Personal Identification Information</h2>
        <p>When you register as a student on this portal, we collect:</p>
        <ul>
          <li>Full legal name</li>
          <li>Father's name and mother's name</li>
          <li>Date of birth and gender</li>
          <li>Mobile phone number(s) — including father's and mother's contact numbers</li>
          <li>Email address</li>
          <li>Residential address</li>
          <li>Assigned PSS Trust branch</li>
        </ul>

        <h2>2.2 Academic Information</h2>
        <p>We collect the following academic details to process your welfare eligibility:</p>
        <ul>
          <li>SSC (Class 10) school name, board, year of passing, and percentage</li>
          <li>Course type (Diploma or B.Tech), college name, branch, year of joining, and PIN number</li>
          <li>Semester-wise GPA scores and backlog counts</li>
          <li>CEEP or ECET entrance examination ranks (where applicable)</li>
          <li>Diploma percentage (for B.Tech students)</li>
        </ul>

        <h2>2.3 Biometric Data — Face Recognition</h2>
        <div className="callout callout-red">
          ⚠️ Important: We collect and process biometric data in the form of facial feature vectors
          for the purpose of automated daily attendance marking.
        </div>
        <ul>
          <li>A photograph of your face is captured via your device's webcam during the face registration process.</li>
          <li>A mathematical representation (128-point float descriptor vector) of your facial features is computed using the face-api.js library running entirely in your browser.</li>
          <li>Both the face photograph and the descriptor vector are stored securely in our Supabase cloud storage.</li>
          <li>This biometric data is used exclusively for attendance verification — it is never shared with third parties or used for any other purpose.</li>
        </ul>

        <h2>2.4 Financial &amp; Welfare Application Data</h2>
        <p>
          When you submit a fee application, we collect trust and college attendance percentages,
          academic year and fee request details, supporting documents uploaded by you (receipts,
          fee slips, certificates), and contribution details.
        </p>

        <h2>2.5 Technical Data</h2>
        <ul>
          <li>Browser type and version (via standard HTTP headers)</li>
          <li>Device type — inferred from screen size</li>
          <li>IP address — collected by Vercel's hosting infrastructure for security and rate-limiting</li>
          <li>Session tokens — issued by Supabase Auth to maintain your login session</li>
          <li>Service worker cache activity — for PWA offline functionality</li>
        </ul>

        <h2>2.6 Communications Data</h2>
        <p>
          We retain records of emails sent to you by the portal, including welcome emails, OTP codes,
          and fee application approval or rejection notifications.
        </p>

        {/* 3 */}
        <h1>3. How We Use Your Information</h1>
        <div className="tbl-wrap">
          <table>
            <thead>
              <tr><th>Purpose</th><th>Legal Basis</th><th>Data Used</th></tr>
            </thead>
            <tbody>
              <tr><td>Student registration and account creation</td><td>Consent / Legitimate interest</td><td>Name, contact details, academic info, email</td></tr>
              <tr><td>Face-based daily attendance marking</td><td>Explicit consent at face registration step</td><td>Face photo, face descriptor vector</td></tr>
              <tr><td>Processing fee assistance applications</td><td>Legitimate interest / Charitable purpose</td><td>Academic records, financial details, documents</td></tr>
              <tr><td>Admin review and approval workflow</td><td>Legitimate interest in operating NGO programs</td><td>Application data, student profile</td></tr>
              <tr><td>Sending OTP verification codes</td><td>Security / Consent</td><td>Email address, OTP code</td></tr>
              <tr><td>Sending approval/rejection notifications</td><td>Legitimate interest in informing applicants</td><td>Email address, application status</td></tr>
              <tr><td>Generating and sending Trust ID credentials</td><td>Account management</td><td>Name, email, generated Trust ID</td></tr>
              <tr><td>Aggregated impact reporting</td><td>Legitimate interest</td><td>Anonymized statistics only</td></tr>
            </tbody>
          </table>
        </div>

        {/* 4 */}
        <h1>4. Data Storage &amp; Security</h1>

        <h2>4.1 Where Your Data is Stored</h2>
        <p>All personal data is stored on Supabase — a managed cloud database platform running on AWS.</p>
        <ul>
          <li><strong>Database:</strong> Supabase PostgreSQL — student profiles, attendance, applications</li>
          <li><strong>File Storage:</strong> Supabase Storage — face photographs and uploaded fee documents</li>
          <li><strong>Authentication:</strong> Supabase Auth — email, hashed passwords, session tokens</li>
        </ul>

        <h2>4.2 Security Measures</h2>
        <ul>
          <li>Row Level Security (RLS) enforced at the database level on all tables</li>
          <li>Supabase Auth with JWT session tokens verified on every request</li>
          <li>Two-factor OTP verification for all admin logins</li>
          <li>OTP verification before fee application submission</li>
          <li>Invite-code gating for student self-registration</li>
          <li>HTTPS enforced on all connections — all data in transit encrypted via TLS</li>
          <li>SMTP credentials and service keys stored as server-side environment variables only</li>
          <li>Face descriptors stored as mathematical vectors — raw images in restricted storage buckets</li>
        </ul>

        <h2>4.3 Data Retention Summary</h2>
        <ul>
          <li><strong>Student profiles:</strong> Enrollment duration + 5 years after completion</li>
          <li><strong>Attendance records:</strong> Enrollment duration + 3 years</li>
          <li><strong>Fee applications:</strong> 7 years (charity audit compliance)</li>
          <li><strong>Face biometric data:</strong> Enrollment duration only; deleted on completion or request</li>
          <li><strong>OTP codes:</strong> Auto-deleted within 10 minutes of generation</li>
        </ul>
        <p>See the <Link to="/data-retention">Data Retention Policy</Link> for complete details.</p>

        {/* 5 */}
        <h1>5. Biometric Data — Special Notice</h1>
        <div className="callout callout-amber">
          ⚠️ Biometric data (facial photographs and feature vectors) is classified as sensitive personal
          data. We apply the highest level of protection to this data. By completing Face Registration,
          you explicitly consent to the collection, storage, and use described below.
        </div>
        <p>By proceeding with Face Registration on the portal, you explicitly consent to:</p>
        <ol>
          <li>The capture of your facial photograph via your device webcam</li>
          <li>The computation and storage of a 128-point mathematical descriptor representing your facial features</li>
          <li>The use of this data solely for verifying your identity during daily attendance marking</li>
          <li>Storage in Supabase cloud storage for the duration of your enrollment</li>
        </ol>
        <p>
          You may withdraw this consent at any time by contacting your Branch Incharge or the Chairman.
          We do not sell, license, or share biometric data with any third party under any circumstances.
        </p>

        {/* 6 */}
        <h1>6. Sharing of Your Information</h1>
        <p>We do not sell, rent, or trade your personal information.</p>

        <h2>6.1 Within PSS Trust Administration</h2>
        <ul>
          <li>Branch Incharges can view student information and applications for their assigned branch only</li>
          <li>Super Incharges can view applications across all branches for review purposes</li>
          <li>The Chairman has full access as the principal officer of the trust</li>
        </ul>

        <h2>6.2 Third-Party Service Providers</h2>
        <div className="tbl-wrap">
          <table>
            <thead><tr><th>Provider</th><th>Purpose</th><th>Data Shared</th><th>Privacy Policy</th></tr></thead>
            <tbody>
              <tr><td><strong>Supabase</strong></td><td>Database, auth, and file storage</td><td>All student data, face photos, documents</td><td>supabase.com/privacy</td></tr>
              <tr><td><strong>Vercel</strong></td><td>Web hosting and serverless API</td><td>IP addresses, request logs</td><td>vercel.com/legal/privacy-policy</td></tr>
              <tr><td><strong>Gmail SMTP</strong></td><td>Email delivery for OTPs and notifications</td><td>Email address, email content</td><td>policies.google.com/privacy</td></tr>
            </tbody>
          </table>
        </div>

        <h2>6.3 Legal Requirements</h2>
        <p>
          We may disclose your information if required by Indian law, court order, or government
          authority. We will notify you to the extent permitted by law.
        </p>

        {/* 7 */}
        <h1>7. Your Rights</h1>
        <div className="tbl-wrap">
          <table>
            <thead><tr><th>Right</th><th>Description</th><th>How to Exercise</th></tr></thead>
            <tbody>
              <tr><td><strong>Right to Access</strong></td><td>Request a copy of all personal data we hold about you</td><td>Contact your Branch Incharge or Chairman in writing</td></tr>
              <tr><td><strong>Right to Rectification</strong></td><td>Request correction of inaccurate or incomplete data</td><td>Submit correction request to your Branch Incharge</td></tr>
              <tr><td><strong>Right to Erasure</strong></td><td>Request deletion (subject to legal retention requirements)</td><td>Submit written request to the Chairman</td></tr>
              <tr><td><strong>Right to Withdraw Consent</strong></td><td>Withdraw consent for face biometric processing at any time</td><td>Notify your Branch Incharge or Chairman</td></tr>
              <tr><td><strong>Right to Data Portability</strong></td><td>Request your data in a machine-readable format</td><td>Submit written request to the Chairman</td></tr>
              <tr><td><strong>Right to Object</strong></td><td>Object to processing based on legitimate interests</td><td>Submit written objection to the Chairman</td></tr>
            </tbody>
          </table>
        </div>
        <p>We will respond to all requests within 30 days. Contact us via <a href="https://pss-trust.vercel.app/contact-us" target="_blank" rel="noreferrer">pss-trust.vercel.app/contact-us</a>.</p>

        {/* 8 */}
        <h1>8. Cookies &amp; Local Storage</h1>
        <p>The PSS Trust portal uses minimal browser storage technologies:</p>
        <ul>
          <li><strong>Session Storage:</strong> Temporarily used during admin two-factor login. Cleared when the browser tab closes.</li>
          <li><strong>Service Worker Cache (PWA):</strong> Caches app files and images for offline access. No personal data is cached.</li>
          <li><strong>Supabase Auth Tokens (localStorage):</strong> JWT tokens to maintain your login session.</li>
        </ul>
        <p>
          We do not use advertising cookies, tracking pixels, or third-party analytics. See
          the <Link to="/cookie-policy">Cookie &amp; Storage Policy</Link> for full details.
        </p>

        {/* 9 */}
        <h1>9. Children's Privacy</h1>
        <p>
          PSS Trust serves students, some of whom may be minors (under 18). Parental/guardian consent
          is implicitly provided through the trust enrollment process. Student accounts are
          administrator-created — students cannot self-register without a chairman-issued invite code.
          We do not knowingly collect data from children outside the student enrollment process.
        </p>

        {/* 10 */}
        <h1>10. Changes to This Policy</h1>
        <p>
          We may update this Privacy Policy from time to time. When we make material changes, we will
          revise the "Last Updated" date and notify registered users by email. Continued use of the
          portal after notification constitutes acceptance of the updated policy.
        </p>

        {/* 11 */}
        <h1>11. Contact &amp; Grievances</h1>
        <div className="info-grid">
          <div className="info-row"><div className="info-label">Organization</div><div className="info-value">Potukuchi Somasundara Social Welfare and Charitable Trust</div></div>
          <div className="info-row"><div className="info-label">Registration</div><div className="info-value">Reg No: 95/2003, Telangana, India</div></div>
          <div className="info-row"><div className="info-label">Web Contact</div><div className="info-value"><a href="https://pss-trust.vercel.app/contact-us" target="_blank" rel="noreferrer">pss-trust.vercel.app/contact-us</a></div></div>
          <div className="info-row"><div className="info-label">Portal</div><div className="info-value"><a href="https://pss-trust.vercel.app" target="_blank" rel="noreferrer">https://pss-trust.vercel.app</a></div></div>
        </div>
        <div className="callout callout-blue">
          This Privacy Policy was prepared in good faith for PSS Trust — a registered charitable NGO.
          It is not a substitute for professional legal advice. Consult a qualified attorney for
          jurisdiction-specific compliance requirements.
        </div>

      </div>
    </>
  );
}

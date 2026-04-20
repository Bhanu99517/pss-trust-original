import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from './policyStyles';

export default function TermsOfService() {
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
          By accessing or using the PSS Trust Student Management Portal, you agree to be bound by
          these Terms of Service. If you do not agree, please do not use the portal.
        </div>

        {/* 1 */}
        <h1>1. Acceptance of Terms</h1>
        <p>
          These Terms of Service ("Terms") constitute a legally binding agreement between you ("User",
          "Student", "Administrator") and Potukuchi Somasundara Social Welfare and Charitable Trust
          ("PSS Trust") governing your use of the Portal at{' '}
          <a href="https://pss-trust.vercel.app" target="_blank" rel="noreferrer">
            https://pss-trust.vercel.app
          </a>.
        </p>
        <p>
          By registering on, accessing, or using the Portal in any way, you confirm that you have
          read, understood, and agree to be bound by these Terms, our{' '}
          <Link to="/privacy-policy">Privacy Policy</Link>, and{' '}
          <Link to="/data-retention">Data Retention Policy</Link>.
        </p>

        {/* 2 */}
        <h1>2. Eligibility</h1>
        <p>You may use this Portal only if:</p>
        <ul>
          <li>You are a currently enrolled student beneficiary of PSS Trust, or</li>
          <li>You are an authorized administrator (Branch Incharge, Super Incharge, or Chairman), and</li>
          <li>You have been formally admitted or appointed through the trust's official processes</li>
          <li>You have received a valid invite code from the Chairman (for student self-registration)</li>
        </ul>
        <div className="callout callout-red">
          Unauthorized access to any part of this Portal is strictly prohibited and may constitute an
          offence under the Indian Information Technology Act, 2000.
        </div>

        {/* 3 */}
        <h1>3. User Accounts &amp; Responsibilities</h1>

        <h2>3.1 Account Security</h2>
        <ul>
          <li>You are responsible for maintaining the confidentiality of your login credentials</li>
          <li>You must not share your credentials with any other person</li>
          <li>You must notify PSS Trust immediately if you suspect unauthorized access to your account</li>
          <li>PSS Trust will not be liable for loss resulting from unauthorized use caused by your failure to maintain credential security</li>
        </ul>

        <h2>3.2 Accuracy of Information</h2>
        <ul>
          <li>You agree to provide accurate, complete, and truthful information during registration and in all fee applications</li>
          <li>You agree to keep your profile information up to date</li>
          <li>Providing false or fabricated information — including academic records or attendance percentages — is grounds for immediate suspension and disqualification from PSS Trust welfare programs</li>
          <li>PSS Trust reserves the right to verify any submitted information through independent sources</li>
        </ul>

        <h2>3.3 Face Registration</h2>
        <ul>
          <li>By completing Face Registration, you consent to collection and storage of your biometric face data as described in the <Link to="/privacy-policy">Privacy Policy</Link></li>
          <li>You must be the person whose face is registered — registering another person's face violates these Terms</li>
          <li>You must not attempt to defeat, bypass, or manipulate the face recognition attendance system</li>
        </ul>

        {/* 4 */}
        <h1>4. Permitted Use</h1>
        <p>You may use the Portal exclusively for:</p>
        <ul>
          <li>Registering as a student beneficiary of PSS Trust</li>
          <li>Enrolling your face for attendance marking</li>
          <li>Marking your daily attendance using the face recognition system</li>
          <li>Submitting genuine fee assistance applications</li>
          <li>Checking the status of your submitted applications</li>
          <li>Viewing your personal attendance records</li>
          <li>Changing your account password</li>
          <li>Viewing public information about PSS Trust (gallery, success stories, contact)</li>
        </ul>
        <p>
          Administrators may additionally use the Portal for managing students, reviewing applications,
          managing incharge accounts, and administering trust branches in accordance with their
          assigned role.
        </p>

        {/* 5 */}
        <h1>5. Prohibited Use</h1>
        <div className="callout callout-red">
          ⛔ Violation of any of the following prohibitions may result in immediate account suspension,
          removal from PSS Trust programs, and/or legal action.
        </div>
        <p>You must NOT:</p>
        <ul>
          <li>Access the Portal or any account other than your own without authorization</li>
          <li>Submit fraudulent fee applications, falsified academic records, or fabricated documents</li>
          <li>Attempt to manipulate, reverse-engineer, or tamper with the face recognition or attendance system</li>
          <li>Use the Portal to harass, impersonate, or harm other students or administrators</li>
          <li>Attempt to gain unauthorized access to admin dashboards or other students' data</li>
          <li>Upload malicious files, scripts, or content through the document upload feature</li>
          <li>Use automated tools, bots, or scrapers to interact with the Portal</li>
          <li>Reproduce, distribute, or commercially exploit any content or functionality of the Portal</li>
          <li>Interfere with the Portal's infrastructure, servers, or networks</li>
        </ul>

        {/* 6 */}
        <h1>6. Intellectual Property</h1>
        <p>
          The PSS Trust Student Management Portal, including its source code, design, and documentation,
          is licensed under the MIT License. The name "PSS Trust", the trust's logo, and related
          branding are the property of Potukuchi Somasundara Social Welfare and Charitable Trust. You
          may not use these marks without prior written permission.
        </p>
        <p>
          Student-submitted content (documents, photographs) remains the property of the respective
          student. By uploading content to the Portal, you grant PSS Trust a non-exclusive license to
          store and use that content for processing your application.
        </p>

        {/* 7 */}
        <h1>7. Disclaimers</h1>

        <h2>7.1 Service Availability</h2>
        <p>
          The Portal is provided "as is" and "as available". PSS Trust makes no warranty that the
          Portal will be continuously available, error-free, or free of harmful components. We may
          suspend or discontinue the Portal at any time for maintenance or operational reasons.
        </p>

        <h2>7.2 Face Recognition Accuracy</h2>
        <p>
          The face recognition attendance system uses AI-based facial analysis. While we strive for
          accuracy, we do not guarantee 100% correct identification in all conditions (poor lighting,
          camera angle, etc.). If the system fails to recognize you, contact your Branch Incharge to
          record attendance manually.
        </p>

        <h2>7.3 No Guarantee of Benefits</h2>
        <p>
          Registering on the Portal does not guarantee approval of fee applications or continued
          enrollment in PSS Trust welfare programs. All applications are subject to review and approval
          based on eligibility criteria.
        </p>

        {/* 8 */}
        <h1>8. Limitation of Liability</h1>
        <p>
          To the fullest extent permitted by applicable law, PSS Trust, its trustees, officers, and
          contributors shall not be liable for:
        </p>
        <ul>
          <li>Any indirect, incidental, or consequential damages arising from your use of the Portal</li>
          <li>Data loss caused by technical failures, cyberattacks, or third-party service outages</li>
          <li>Decisions made by administrators regarding your fee applications</li>
          <li>Errors in face recognition resulting in missed attendance records</li>
        </ul>
        <p>
          PSS Trust is a registered charitable trust. Our total liability to any individual user shall
          not exceed INR 1,000 (Indian Rupees One Thousand).
        </p>

        {/* 9 */}
        <h1>9. Suspension &amp; Termination</h1>
        <p>
          PSS Trust reserves the right to suspend or terminate your account at any time for violation
          of these Terms, submission of fraudulent information, completion of your enrollment, or
          legal/regulatory requirements. Upon termination, your right to use the Portal ceases
          immediately.
        </p>

        {/* 10 */}
        <h1>10. Governing Law &amp; Dispute Resolution</h1>
        <p>
          These Terms shall be governed by the laws of India, specifically the State of Telangana. Any
          disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.
          Before initiating formal proceedings, you agree to first contact PSS Trust and attempt
          resolution in good faith.
        </p>

        {/* 11 */}
        <h1>11. Changes to Terms</h1>
        <p>
          We may update these Terms at any time. We will revise the "Last Updated" date and notify
          registered users by email for material changes. Continued use of the Portal after the
          effective date constitutes acceptance of the revised Terms.
        </p>

        {/* 12 */}
        <h1>12. Contact</h1>
        <div className="info-grid">
          <div className="info-row"><div className="info-label">Organization</div><div className="info-value">Potukuchi Somasundara Social Welfare and Charitable Trust</div></div>
          <div className="info-row"><div className="info-label">Registration</div><div className="info-value">Reg No: 95/2003, Telangana, India</div></div>
          <div className="info-row"><div className="info-label">Web Contact</div><div className="info-value"><a href="https://pss-trust.vercel.app/contact-us" target="_blank" rel="noreferrer">pss-trust.vercel.app/contact-us</a></div></div>
          <div className="info-row"><div className="info-label">Portal</div><div className="info-value"><a href="https://pss-trust.vercel.app" target="_blank" rel="noreferrer">https://pss-trust.vercel.app</a></div></div>
        </div>
        <div className="callout callout-blue">
          These Terms of Service were prepared in good faith for PSS Trust. Consult a qualified legal
          professional for jurisdiction-specific compliance advice.
        </div>

      </div>
    </>
  );
}

import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-[#f8fafc] min-h-screen py-12 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-8 lg:p-12">
          {/* Meta Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 p-6 bg-slate-50 rounded-xl border border-slate-100">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Effective Date</p>
              <p className="text-sm font-semibold text-slate-700">April 20, 2026</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Last Updated</p>
              <p className="text-sm font-semibold text-slate-700">April 20, 2026</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Version</p>
              <p className="text-sm font-semibold text-slate-700">1.0</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mb-8">
              <p className="text-blue-900 text-sm m-0">
                This Privacy Policy explains how PSS Trust collects, uses, stores, and protects your personal information when you use the PSS Trust Student Management Portal. Please read this document carefully before registering or using the portal.
              </p>
            </div>

            <h1 className="font-playfair text-3xl font-bold text-slate-900 border-b-2 border-slate-100 pb-4 mb-8 text-left">1. Who We Are</h1>
            <p className="text-slate-600 mb-6 text-left">Potukuchi Somasundara Social Welfare and Charitable Trust ("PSS Trust", "we", "our", or "us") is a registered non-governmental organization (Registration No. 95/2003), established on August 15, 2003. We are dedicated to providing educational support and welfare services to students from Below Poverty Line (BPL) families across our branches in Hyderabad and Telangana, India.</p>
            <p className="text-slate-600 mb-8 text-left">The PSS Trust Student Management Portal is the digital platform we operate to manage student registrations, attendance, fee applications, and administrative functions. Your privacy is important to us and we are committed to protecting it.</p>

            <h1 className="font-playfair text-3xl font-bold text-slate-900 border-b-2 border-slate-100 pb-4 mb-8 text-left">2. Information We Collect</h1>
            <h2 className="text-xl font-bold text-slate-800 mb-4 border-l-4 border-emerald-500 pl-4 text-left">2.1 Personal Identification Information</h2>
            <p className="text-slate-600 mb-4 text-left">When you register as a student on this portal, we collect:</p>
            <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2 text-left">
              <li>Full legal name</li>
              <li>Father's name and mother's name</li>
              <li>Date of birth and gender</li>
              <li>Mobile phone number(s) — including father's and mother's contact numbers</li>
              <li>Email address</li>
              <li>Residential address</li>
              <li>Assigned PSS Trust branch</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-800 mb-4 border-l-4 border-emerald-500 pl-4 text-left">2.2 Academic Information</h2>
            <p className="text-slate-600 mb-4 text-left">We collect the following academic details to process your welfare eligibility:</p>
            <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2 text-left">
              <li>SSC (Class 10) school name, board, year of passing, and percentage</li>
              <li>Course type (Diploma or B.Tech), college name, branch, year of joining, and PIN number</li>
              <li>Semester-wise GPA scores and backlog counts</li>
              <li>CEEP or ECET entrance examination ranks (where applicable)</li>
              <li>Diploma percentage (for B.Tech students)</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-800 mb-4 border-l-4 border-emerald-500 pl-4 text-left">2.3 Biometric Data — Face Recognition</h2>
            <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg mb-6">
              <p className="text-red-900 text-sm font-bold m-0">⚠️ Important: We collect and process biometric data in the form of facial feature vectors for the purpose of automated daily attendance marking.</p>
            </div>
            <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2 text-left">
              <li>A photograph of your face is captured via your device's webcam during the face registration process.</li>
              <li>A mathematical representation (128-point float descriptor vector) of your facial features is computed using the face-api.js library running entirely in your browser.</li>
              <li>Both the face photograph and the descriptor vector are stored securely in our Supabase cloud storage.</li>
              <li>This biometric data is used exclusively for attendance verification — it is never shared with third parties or used for any other purpose.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-800 mb-4 border-l-4 border-emerald-500 pl-4 text-left">2.4 Financial & Welfare Application Data</h2>
            <p className="text-slate-600 mb-8 text-left">When you submit a fee application, we collect trust and college attendance percentages, academic year and fee request details, supporting documents uploaded by you (receipts, fee slips, certificates), and contribution details.</p>

            <h1 className="font-playfair text-3xl font-bold text-slate-900 border-b-2 border-slate-100 pb-4 mb-8 text-left">3. How We Use Your Information</h1>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 border border-slate-800">Purpose</th>
                    <th className="p-3 border border-slate-800">Legal Basis</th>
                    <th className="p-3 border border-slate-800">Data Used</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                    <td className="p-3 border border-slate-200">Student registration and account creation</td>
                    <td className="p-3 border border-slate-200">Consent / Legitimate interest</td>
                    <td className="p-3 border border-slate-200">Name, contact details, academic info, email</td>
                  </tr>
                  <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                    <td className="p-3 border border-slate-200">Face-based daily attendance marking</td>
                    <td className="p-3 border border-slate-200">Explicit consent at face registration step</td>
                    <td className="p-3 border border-slate-200">Face photo, face descriptor vector</td>
                  </tr>
                  <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                    <td className="p-3 border border-slate-200">Processing fee assistance applications</td>
                    <td className="p-3 border border-slate-200">Legitimate interest / Charitable purpose</td>
                    <td className="p-3 border border-slate-200">Academic records, financial details, documents</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h1 className="font-playfair text-3xl font-bold text-slate-900 border-b-2 border-slate-100 pb-4 mb-8 text-left">4. Data Storage & Security</h1>
            <p className="text-slate-600 mb-6 text-left">Our data is hosted and secured using industry-standard protocols, protected by Row Level Security (RLS) and encrypted transport (HTTPS/TLS) to ensure student privacy is never compromised.</p>

            <h1 className="font-playfair text-3xl font-bold text-slate-900 border-b-2 border-slate-100 pb-4 mb-8 text-left">5. Contact & Grievances</h1>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-slate-100 pb-4">
                  <span className="text-sm font-bold text-slate-900">Organization</span>
                  <span className="text-sm text-slate-600">Potukuchi Somasundara Social Welfare and Charitable Trust</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-slate-100 pb-4">
                  <span className="text-sm font-bold text-slate-900">Contact Email</span>
                  <span className="text-sm text-blue-600">psstrust.org@gmail.com</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <span className="text-sm font-bold text-slate-900">Website</span>
                  <span className="text-sm text-blue-600">pss-trust.vercel.app</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

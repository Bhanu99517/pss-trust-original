import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
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

          <div className="prose prose-slate max-w-none text-left">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mb-8">
              <p className="text-blue-900 text-sm m-0">
                By accessing or using the PSS Trust Student Management Portal, you agree to be bound by these Terms of Service. If you do not agree, please do not use the portal.
              </p>
            </div>

            <h1 className="font-playfair text-3xl font-bold text-slate-900 border-b-2 border-slate-100 pb-4 mb-8">1. Acceptance of Terms</h1>
            <p className="text-slate-600 mb-6">These Terms of Service ("Terms") constitute a legally binding agreement between you ("User", "Student", "Administrator") and Potukuchi Somasundara Social Welfare and Charitable Trust ("PSS Trust") governing your use of the Portal.</p>
            <p className="text-slate-600 mb-8">By registering on, accessing, or using the Portal in any way, you confirm that you have read, understood, and agree to be bound by these Terms, our Privacy Policy, and Data Retention Policy.</p>

            <h1 className="font-playfair text-3xl font-bold text-slate-900 border-b-2 border-slate-100 pb-4 mb-8">2. Eligibility</h1>
            <p className="text-slate-600 mb-4">You may use this Portal only if:</p>
            <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2">
              <li>You are a currently enrolled student beneficiary of PSS Trust, or</li>
              <li>You are an authorized administrator appointed through the trust's official processes</li>
              <li>You have received a valid invite code from the Chairman</li>
            </ul>
            <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg mb-8">
              <p className="text-red-900 text-sm font-bold m-0 text-left">Unauthorized access to any part of this Portal is strictly prohibited and may constitute an offence under the Indian Information Technology Act, 2000.</p>
            </div>

            <h1 className="font-playfair text-3xl font-bold text-slate-900 border-b-2 border-slate-100 pb-4 mb-8">3. User Accounts & Responsibilities</h1>
            <h2 className="text-xl font-bold text-slate-800 mb-4 border-l-4 border-emerald-500 pl-4">3.1 Account Security</h2>
            <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
              <li>You are responsible for maintaining the confidentiality of your login credentials</li>
              <li>You must not share your credentials with any other person</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-800 mb-4 border-l-4 border-emerald-500 pl-4">3.2 Accuracy of Information</h2>
            <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2">
              <li>You agree to provide accurate, complete, and truthful information during registration</li>
              <li>Providing false or fabricated information is grounds for immediate suspension and disqualification</li>
            </ul>

            <h1 className="font-playfair text-3xl font-bold text-slate-900 border-b-2 border-slate-100 pb-4 mb-8">4. Prohibited Use</h1>
            <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg mb-6">
              <p className="text-red-900 text-sm font-bold m-0">⛔ Violation of any of the following prohibitions may result in immediate account suspension and/or legal action.</p>
            </div>
            <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2">
              <li>Attempt to manipulate or tamper with the face recognition system</li>
              <li>Submit fraudulent fee applications or falsified documents</li>
              <li>Access accounts other than your own without authorization</li>
            </ul>

            <h1 className="font-playfair text-3xl font-bold text-slate-900 border-b-2 border-slate-100 pb-4 mb-8">5. Disclaimers</h1>
            <p className="text-slate-600 mb-8">The Portal is provided "as is" and "as available". PSS Trust makes no warranty that the Portal will be continuously available or error-free. The face recognition system uses AI-based analysis; accuracy depends on environmental factors.</p>

            <h1 className="font-playfair text-3xl font-bold text-slate-900 border-b-2 border-slate-100 pb-4 mb-8">6. Contact</h1>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-slate-100 pb-4 text-left">
                  <span className="text-sm font-bold text-slate-900">Organization</span>
                  <span className="text-sm text-slate-600">Potukuchi Somasundara Social Welfare and Charitable Trust</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  <span className="text-sm font-bold text-slate-900">Registration</span>
                  <span className="text-sm text-slate-600">Reg No: 95/2003, Telangana, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

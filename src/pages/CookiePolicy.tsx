import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="bg-[#f8fafc] min-h-screen py-12 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-8 lg:p-12">
          {/* Meta Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 p-6 bg-slate-50 rounded-xl border border-slate-100 text-left">
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
            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-r-lg mb-8">
              <p className="text-emerald-900 text-sm m-0">
                This policy explains what cookies and browser storage technologies the PSS Trust portal uses, why it uses them, and what choices you have. We keep this simple because we keep our tracking minimal.
              </p>
            </div>

            <h1 className="font-playfair text-3xl font-bold text-slate-900 border-b-2 border-slate-100 pb-4 mb-8">1. What Are Cookies?</h1>
            <p className="text-slate-600 mb-8">Cookies are small text files stored on your device by a website. They are widely used to make websites work, remember preferences, and provide analytics. Other browser storage technologies — such as localStorage, sessionStorage, and service worker caches — work similarly and are covered by this policy.</p>

            <h1 className="font-playfair text-3xl font-bold text-slate-900 border-b-2 border-slate-100 pb-4 mb-8">2. What We Use</h1>
            <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg mb-6">
              <p className="text-green-900 text-sm font-bold m-0">✅ PSS Trust does NOT use advertising cookies, third-party tracking cookies, analytics tracking scripts, or marketing pixels of any kind.</p>
            </div>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 border border-slate-800">Storage Tech</th>
                    <th className="p-3 border border-slate-800">Purpose</th>
                    <th className="p-3 border border-slate-800">Type</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                    <td className="p-3 border border-slate-200 font-bold">Supabase Auth Token</td>
                    <td className="p-3 border border-slate-200">Keeps you logged in between page refreshes.</td>
                    <td className="p-3 border border-slate-200">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-[10px] font-bold uppercase">Strictly Necessary</span>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                    <td className="p-3 border border-slate-200 font-bold">Service Worker Cache</td>
                    <td className="p-3 border border-slate-200">Caches app files for offline access and faster loading.</td>
                    <td className="p-3 border border-slate-200">
                      <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-[10px] font-bold uppercase">Functional</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h1 className="font-playfair text-3xl font-bold text-slate-900 border-b-2 border-slate-100 pb-4 mb-8">3. What We Do NOT Use</h1>
            <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2">
              <li>Google Analytics or any analytics cookies</li>
              <li>Facebook Pixel or any social media tracking</li>
              <li>Advertising or retargeting cookies</li>
              <li>Third-party tracking scripts</li>
            </ul>

            <h1 className="font-playfair text-3xl font-bold text-slate-900 border-b-2 border-slate-100 pb-4 mb-8">4. Contact</h1>
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

export default CookiePolicy;

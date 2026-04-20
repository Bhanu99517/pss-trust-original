import React from 'react';

const DataRetention: React.FC = () => {
  return (
    <div className="bg-[#f8fafc] min-h-screen py-12 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-8 lg:p-12 text-left">
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
                This Data Retention Policy defines how long PSS Trust retains different categories of personal data collected through the portal, and the procedures for secure deletion when data is no longer needed.
              </p>
            </div>

            <h1 className="font-playfair text-3xl font-bold text-slate-900 border-b-2 border-slate-100 pb-4 mb-8">1. Purpose</h1>
            <p className="text-slate-600 mb-8">PSS Trust collects personal data to deliver welfare services to BPL students. This policy ensures we retain data only for as long as necessary for operational, legal, and audit purposes — and that we delete data securely when retention periods expire.</p>

            <h1 className="font-playfair text-3xl font-bold text-slate-900 border-b-2 border-slate-100 pb-4 mb-8">2. Data Retention Schedule</h1>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 border border-slate-800">Data Category</th>
                    <th className="p-3 border border-slate-800">Retention Period</th>
                    <th className="p-3 border border-slate-800">Basis</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                    <td className="p-3 border border-slate-200 font-bold">Student Profile</td>
                    <td className="p-3 border border-slate-200">Active enrollment + 5 years</td>
                    <td className="p-3 border border-slate-200">Operational necessity</td>
                  </tr>
                  <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                    <td className="p-3 border border-slate-200 font-bold">Face Biometric Data</td>
                    <td className="p-3 border border-slate-200">Active enrollment only</td>
                    <td className="p-3 border border-slate-200">Explicit consent</td>
                  </tr>
                  <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                    <td className="p-3 border border-slate-200 font-bold">Fee Applications</td>
                    <td className="p-3 border border-slate-200">7 years from submission</td>
                    <td className="p-3 border border-slate-200">Charity audit compliance</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h1 className="font-playfair text-3xl font-bold text-slate-900 border-b-2 border-slate-100 pb-4 mb-8">3. Contact</h1>
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

export default DataRetention;

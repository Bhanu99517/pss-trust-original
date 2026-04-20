// src/components/policies/policyStyles.ts
export const styles = `
  .policy-wrap {
    max-width: 900px;
    margin: 0 auto;
    padding: 48px 40px 80px;
    font-family: 'DM Sans', 'Inter', sans-serif;
    color: #334155;
    line-height: 1.7;
  }
  .meta-card {
    background: #ffffff;
    border: 1px solid #cbd5e1;
    border-radius: 10px;
    padding: 22px 28px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 14px 28px;
    margin-bottom: 36px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  }
  .meta-item label {
    display: block;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #64748b;
    margin-bottom: 4px;
  }
  .meta-item span {
    font-size: 13px;
    font-weight: 500;
    color: #1e293b;
  }
  .callout {
    border-radius: 10px;
    padding: 14px 18px;
    margin: 18px 0;
    font-size: 14px;
    line-height: 1.65;
    border-left: 4px solid;
  }
  .callout-blue  { background: #eff6ff; border-color: #2563eb; color: #1e3a8a; }
  .callout-teal  { background: #ccfbf1; border-color: #0f766e; color: #134e4a; }
  .callout-green { background: #dcfce7; border-color: #15803d; color: #14532d; font-weight: 600; }
  .callout-red   { background: #fee2e2; border-color: #b91c1c; color: #7f1d1d; font-weight: 600; }
  .callout-amber { background: #fef3c7; border-color: #d97706; color: #92400e; }
  .policy-wrap h1 {
    font-size: clamp(19px, 2.8vw, 25px);
    font-weight: 700;
    color: #0f2a5c;
    margin: 44px 0 10px;
    padding-bottom: 9px;
    border-bottom: 2px solid #dbeafe;
  }
  .policy-wrap h1:first-of-type { margin-top: 0; }
  .policy-wrap h2 {
    font-size: 15px;
    font-weight: 700;
    color: #0f2a5c;
    margin: 28px 0 8px;
    padding-left: 11px;
    border-left: 3px solid #0f766e;
  }
  .policy-wrap p {
    font-size: 14px;
    color: #334155;
    margin: 9px 0;
    line-height: 1.75;
  }
  .policy-wrap ul, .policy-wrap ol {
    margin: 9px 0 9px 22px;
  }
  .policy-wrap li {
    font-size: 14px;
    color: #334155;
    margin: 5px 0;
    line-height: 1.7;
    padding-left: 3px;
  }
  .policy-wrap li::marker { color: #2563eb; font-weight: 600; }
  .policy-wrap a { color: #2563eb; text-decoration: none; }
  .policy-wrap a:hover { text-decoration: underline; }
  .policy-wrap code {
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    background: #eff6ff;
    color: #1d4ed8;
    padding: 1px 5px;
    border-radius: 4px;
  }
  .tbl-wrap {
    overflow-x: auto;
    margin: 14px 0 22px;
    border-radius: 10px;
    border: 1px solid #cbd5e1;
    box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  }
  .tbl-wrap table {
    width: 100%;
    border-collapse: collapse;
    font-size: 13px;
  }
  .tbl-wrap thead tr { background: #0f2a5c; }
  .tbl-wrap thead th {
    padding: 11px 13px;
    text-align: left;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #e2e8f0;
    white-space: nowrap;
  }
  .tbl-wrap tbody tr:nth-child(even) { background: #f8fafc; }
  .tbl-wrap tbody tr:nth-child(odd)  { background: #ffffff; }
  .tbl-wrap tbody tr:hover { background: #eff6ff; }
  .tbl-wrap tbody td {
    padding: 10px 13px;
    vertical-align: top;
    border-top: 1px solid #cbd5e1;
    color: #334155;
    line-height: 1.6;
  }
  .tbl-wrap tbody td strong { color: #1e293b; font-weight: 600; }
  .badge {
    display: inline-block;
    padding: 2px 7px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 600;
  }
  .badge-blue  { background: #dbeafe; color: #1d4ed8; }
  .badge-teal  { background: #ccfbf1; color: #0f766e; }
  .badge-green { background: #dcfce7; color: #15803d; }
  .info-grid {
    border: 1px solid #cbd5e1;
    border-radius: 10px;
    overflow: hidden;
    margin: 14px 0 22px;
  }
  .info-row {
    display: grid;
    grid-template-columns: 200px 1fr;
    border-bottom: 1px solid #cbd5e1;
  }
  .info-row:last-child { border-bottom: none; }
  .info-row:nth-child(even) { background: #f8fafc; }
  .info-row:nth-child(odd)  { background: #ffffff; }
  .info-label {
    padding: 10px 15px;
    font-size: 12px;
    font-weight: 600;
    color: #0f2a5c;
    background: #eff6ff;
    border-right: 1px solid #cbd5e1;
  }
  .info-value {
    padding: 10px 15px;
    font-size: 13px;
    color: #334155;
  }
  @media (max-width: 640px) {
    .policy-wrap { padding: 28px 16px 64px; }
    .info-row { grid-template-columns: 1fr; }
    .info-label { border-right: none; border-bottom: 1px solid #cbd5e1; }
    .meta-card { padding: 16px; }
  }
`;
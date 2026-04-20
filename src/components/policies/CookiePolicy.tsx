import React from 'react';
import { styles } from './policyStyles';

export default function CookiePolicy() {
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

        <div className="callout callout-teal">
          This policy explains what cookies and browser storage technologies the PSS Trust portal
          uses, why it uses them, and what choices you have. We keep this simple because we keep
          our tracking minimal.
        </div>

        {/* 1 */}
        <h1>1. What Are Cookies?</h1>
        <p>
          Cookies are small text files stored on your device by a website. They are widely used to
          make websites work, remember preferences, and provide analytics. Other browser storage
          technologies — such as localStorage, sessionStorage, and service worker caches — work
          similarly and are covered by this policy.
        </p>

        {/* 2 */}
        <h1>2. What We Use</h1>
        <div className="callout callout-green">
          ✅ PSS Trust does NOT use advertising cookies, third-party tracking cookies, analytics
          tracking scripts, or marketing pixels of any kind.
        </div>
        <div className="tbl-wrap">
          <table>
            <thead>
              <tr>
                <th>Storage Technology</th>
                <th>Name / Key</th>
                <th>Purpose</th>
                <th>Type</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Supabase Auth Token</strong> (localStorage)</td>
                <td><code>sb-[project-id]-auth-token</code></td>
                <td>Keeps you logged in between page refreshes. Set automatically by the Supabase JS library when you sign in.</td>
                <td><span className="badge badge-blue">Strictly Necessary</span></td>
                <td>Until logout or token expiry (~1 hour, auto-refreshed)</td>
              </tr>
              <tr>
                <td><strong>Session Storage</strong></td>
                <td><code>_tmp_pwd</code></td>
                <td>Temporarily holds your password during the admin two-factor OTP login flow for session re-authentication. Cleared when the browser tab closes.</td>
                <td><span className="badge badge-blue">Strictly Necessary</span></td>
                <td>Tab session only (minutes)</td>
              </tr>
              <tr>
                <td><strong>Service Worker Cache</strong> (PWA)</td>
                <td><code>supabase-images</code>, <code>workbox-precache</code></td>
                <td>Caches app files (HTML, CSS, JS, images) for offline access and faster loading. No personal data is cached.</td>
                <td><span className="badge badge-teal">Functional</span></td>
                <td>Up to 1 year for images; refreshed on app update</td>
              </tr>
              <tr>
                <td><strong>Supabase Refresh Token</strong> (localStorage)</td>
                <td>Various Supabase keys</td>
                <td>Supabase Auth library uses localStorage to store JWT and refresh tokens for session persistence.</td>
                <td><span className="badge badge-blue">Strictly Necessary</span></td>
                <td>Until logout or expiry</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 3 */}
        <h1>3. What We Do NOT Use</h1>
        <p>We want to be completely transparent. The PSS Trust portal does NOT use:</p>
        <ul>
          <li>Google Analytics or any analytics cookies</li>
          <li>Facebook Pixel or any social media tracking</li>
          <li>Advertising or retargeting cookies</li>
          <li>Third-party tracking scripts</li>
          <li>Heat-mapping or session-recording tools (e.g. Hotjar, FullStory)</li>
          <li>Any cookies or storage beyond those listed in Section 2</li>
        </ul>

        {/* 4 */}
        <h1>4. Third-Party Storage</h1>

        <h2>4.1 Supabase</h2>
        <p>
          Supabase Auth sets authentication tokens in your browser's localStorage to maintain your
          login session. These are strictly necessary for the portal to function and cannot be
          disabled without breaking authentication. Governed by{' '}
          <a href="https://supabase.com/privacy" target="_blank" rel="noreferrer">supabase.com/privacy</a>.
        </p>

        <h2>4.2 Vercel</h2>
        <p>
          Vercel, our hosting provider, may set performance and security cookies at the infrastructure
          level (e.g. for bot protection or load balancing). These are strictly necessary
          infrastructure cookies governed by{' '}
          <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer">vercel.com/legal/privacy-policy</a>.
        </p>

        {/* 5 */}
        <h1>5. Your Choices</h1>
        <p>
          Since we only use strictly necessary and functional storage technologies, there is no cookie
          consent banner. However, you retain the following options:
        </p>
        <ul>
          <li><strong>Clear browser storage:</strong> You can clear localStorage and sessionStorage via your browser's developer tools or privacy settings. Doing so will log you out of the portal.</li>
          <li><strong>Disable service worker:</strong> You can unregister the PWA service worker via your browser's developer tools. The portal will still work but will not be available offline.</li>
          <li><strong>Disable local storage:</strong> Some browsers allow you to block localStorage. This will prevent login functionality from working.</li>
        </ul>
        <div className="callout callout-amber">
          ⚠️ Blocking strictly necessary storage will impair or prevent the portal from functioning
          correctly.
        </div>

        {/* 6 */}
        <h1>6. Changes to This Policy</h1>
        <p>
          We will update this policy if we add new storage technologies. Any material changes will
          be noted with a revised "Last Updated" date and communicated to registered users where
          appropriate.
        </p>

        {/* 7 */}
        <h1>7. Contact</h1>
        <div className="info-grid">
          <div className="info-row"><div className="info-label">Organization</div><div className="info-value">Potukuchi Somasundara Social Welfare and Charitable Trust</div></div>
          <div className="info-row"><div className="info-label">Registration</div><div className="info-value">Reg No: 95/2003, Telangana, India</div></div>
          <div className="info-row"><div className="info-label">Web Contact</div><div className="info-value"><a href="https://pss-trust.vercel.app/contact-us" target="_blank" rel="noreferrer">pss-trust.vercel.app/contact-us</a></div></div>
        </div>
        <div className="callout callout-blue">
          This Cookie &amp; Storage Policy was prepared in good faith for PSS Trust. Consult a
          qualified legal professional for jurisdiction-specific compliance advice.
        </div>

      </div>
    </>
  );
}

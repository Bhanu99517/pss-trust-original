[![GHBanner](https://wojpyqvcargyffkyxfln.supabase.co/storage/v1/object/public/shared-files/42cb9343-6c24-4522-8ac5-0c27336aff3c/974e4549-30b9-4cce-9a10-4ea107da6b4f.png)](https://pss-trust.vercel.app)

# 🎓 PSS Trust — Student Management Portal

### POTUKUCHI SOMASUNDARA SOCIAL WELFARE AND CHARITABLE TRUST

**Reg No: 95/2003 · Est. August 15, 2003**

*Digitizing welfare for students from Below Poverty Line families*

---

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?logo=supabase&logoColor=white)](https://supabase.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![PWA](https://img.shields.io/badge/PWA-Enabled-5A0FC8?logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?logo=vercel&logoColor=white)](https://pss-trust.vercel.app)
[![CI](https://github.com/Bhanu99517/pss-trust/actions/workflows/ci.yml/badge.svg)](https://github.com/Bhanu99517/pss-trust/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/License-MIT-green)](./LICENSE)

**[🌐 Live Demo](https://pss-trust.vercel.app)** · **[🐛 Report Bug](https://github.com/Bhanu99517/pss-trust/issues/new?template=bug_report.md)** · **[✨ Request Feature](https://github.com/Bhanu99517/pss-trust/issues/new?template=feature_request.md)**

---

## 📖 About

**PSS Trust** (Potukuchi Somasundara Social Welfare and Charitable Trust) is a registered NGO founded on August 15, 2003, dedicated to breaking financial barriers for underprivileged students from Below Poverty Line (BPL) families.

This full-stack web portal replaces slow, error-prone manual paperwork with a seamless digital workflow — covering everything from student registration and biometric face-based attendance to fee applications and a **three-tier admin approval hierarchy**. It is designed to be accessible, fast, and reliable for both students and administrators.

> Built with ❤️ to empower students who deserve a fair chance at education.

---

## ✨ Features

| Feature | Description |
| --- | --- |
| 🧑‍🎓 **Student Registration** | Full signup with SSC details, course info (Diploma / B.Tech), and branch selection — invite-code protected via OTP email flow |
| 🤖 **Face Recognition Attendance** | Register your face once, mark attendance daily using `face-api.js` with real-time detection |
| 📄 **Fee Application System** | Submit fee requests with academic records and document uploads |
| 🏛️ **Three-Tier Admin System** | Chairman → Super Incharge → Branch Incharge approval hierarchy with role-based routing |
| 🔐 **OTP-Based Admin Login** | All admin logins are secured with a two-step email OTP verification flow |
| 🌿 **Branch Management** | Multi-branch support (BHEL, Bollaram, MYP, MKR, ECIL) with geo-fencing via latitude/longitude/radius |
| 🔍 **Application Status Tracker** | Students can check their fee application status in real time |
| 📊 **Attendance Reports** | View personal attendance history with dates and methods |
| 📧 **Email Notifications** | Automated approval/rejection emails via Nodemailer (Gmail SMTP) |
| 🔑 **OTP Security** | Two-step password change with OTP verification via email |
| 🔒 **Secure Auth** | Supabase Auth with Row Level Security (RLS) and role-based access |
| 📲 **Progressive Web App (PWA)** | Installable on mobile and desktop, works offline with pre-cached assets |
| 🖼️ **Gallery & Success Stories** | Showcase trust events and student achievements |
| 🏠 **Public Pages** | Home, About Us, Our Impact, Contact Us — fully animated with Framer Motion |

---

## 🏗️ Admin Hierarchy

The portal features a **three-tier admin approval** workflow:

```
Chairman
  └── Super Incharge  (reviews across all branches)
        └── Branch Incharge  (first-level review per branch)
```

- **Branch Incharges** are created and managed by the Chairman, and have access to students in their assigned branch only.
- **Super Incharges** review applications escalated from branch incharges across all branches.
- **Chairman** has full access — approves/rejects final applications, manages all students, incharges, and branches.
- All admin logins require a **one-time OTP email verification** after password entry.

---

## 🛠️ Tech Stack

| Layer | Technology |
| --- | --- |
| **Frontend** | React 19, TypeScript 5.8, Vite 6.2 |
| **Styling** | Tailwind CSS 4.1, Framer Motion |
| **Backend** | Express.js, Node.js (via `tsx`) |
| **Database** | Supabase (PostgreSQL) with Row Level Security |
| **Auth** | Supabase Auth (roles: student / branch_incharge / super_incharge / chairman) |
| **Storage** | Supabase Storage (face photos, uploaded documents) |
| **Face Recognition** | face-api.js — SSD MobileNet v1 model |
| **Email** | Nodemailer with Gmail SMTP |
| **File Uploads** | Multer |
| **Routing** | React Router DOM v7 |
| **Icons** | Lucide React |
| **PWA** | vite-plugin-pwa (offline support, installable) |
| **Linting / Formatting** | ESLint, Prettier |
| **CI/CD** | GitHub Actions |
| **Deployment** | Vercel (frontend + serverless API functions) |

---

## 📁 Project Structure

```
pss-trust/
├── .github/
│   ├── workflows/
│   │   └── ci.yml                        # GitHub Actions CI pipeline
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   └── pull_request_template.md
├── public/
│   ├── models/                           # face-api.js model weights (local)
│   ├── icon-192.png                      # PWA icon
│   ├── icon-512.png                      # PWA icon
│   └── screenshot-*.png                  # PWA install screenshots
├── src/
│   ├── components/
│   │   ├── AdminLogin.tsx                # OTP-based admin authentication
│   │   ├── AdminOtp.tsx                  # OTP verification step for admins
│   │   ├── Attendance.tsx                # Face verification & mark attendance
│   │   ├── ChairmanDashboard.tsx         # Chairman panel — full access
│   │   ├── SuperInchargeDashboard.tsx    # Super Incharge panel — cross-branch review
│   │   ├── InchargeDashboard.tsx         # Branch Incharge panel — branch-level review
│   │   ├── ChangePassword.tsx            # OTP-based password update
│   │   ├── CheckStatus.tsx               # Application status tracker
│   │   ├── FaceRegistration.tsx          # Register face for attendance
│   │   ├── FeeApplication.tsx            # Submit fee requests
│   │   ├── Signup.tsx                    # Student registration (invite-code protected)
│   │   └── StudentAttendance.tsx         # Personal attendance report
│   ├── pages/
│   │   ├── Home.tsx                      # Landing page
│   │   ├── About.tsx                     # About PSS Trust
│   │   ├── Impact.tsx                    # Our Impact page
│   │   ├── Gallery.tsx                   # Trust events gallery
│   │   ├── SuccessStories.tsx            # Student success stories
│   │   └── Contact.tsx                   # Contact Us page
│   ├── App.tsx                           # Main app & routing logic
│   ├── config.ts                         # Shared constants (e.g. CHAIRMAN_EMAIL)
│   ├── supabaseClient.ts                 # Supabase client initialization
│   ├── index.css                         # Global styles
│   └── main.tsx                          # App entry point
├── api/                                  # Vercel serverless API functions
│   ├── branches/
│   │   └── index.ts                      # Branch CRUD API
│   ├── application-otp.ts
│   ├── create-incharge.ts
│   ├── delete-incharge.ts
│   ├── generate-signup-code.ts
│   ├── get-signup-code.ts
│   ├── register-student.ts
│   ├── send-login-otp.ts
│   ├── send-signup-otp.ts
│   ├── send-student-id.ts
│   ├── verify-login-otp.ts
│   └── verify-signup-otp.ts
├── server.ts                             # Express backend + Vite dev middleware
├── reset_supabase.sql                    # Full database schema (start fresh)
├── supabase_setup.sql                    # Additional migrations
├── supabase-blueprint.json               # Supabase project blueprint
├── eslint.config.js
├── .prettierrc
├── .env.example
├── vercel.json
├── vite.config.ts
├── tsconfig.json
├── package.json
├── LICENSE
├── CONTRIBUTING.md
├── SECURITY.md
├── CHANGELOG.md
└── CODE_OF_CONDUCT.md
```

---

## 🗄️ Database Schema

| Table | Description |
| --- | --- |
| `students` | Student profiles with academic details, course info, and photo URL |
| `attendance` | Daily attendance records with timestamps and recognition method |
| `attendance_faces` | Stored face descriptors for recognition (unique per student) |
| `applications` | Fee application submissions — includes branch incharge & super incharge comments, and approval status |
| `branches` | Trust branch locations with geo-fence config (latitude, longitude, radius in metres) |
| `incharges` | Admin accounts with role (`branch_incharge` / `super_incharge`) and assigned branch |
| `otp_codes` | Short-lived OTP codes for admin login and student signup verification |

All tables have **Row Level Security (RLS)** enabled.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ ([download](https://nodejs.org/))
- **npm** 9+ (bundled with Node.js)
- A [Supabase](https://supabase.com) project (free tier works)
- A **Gmail account** with an [App Password](https://support.google.com/accounts/answer/185833) enabled

> ⚠️ **Note:** face-api.js model weights must be present in `public/models/`. If they are missing, download the [SSD MobileNet v1 weights](https://github.com/justadudewhohacks/face-api.js/tree/master/weights) and place them there.

---

### 1. Clone the repository

```bash
git clone https://github.com/Bhanu99517/pss-trust.git
cd pss-trust
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env
```

Open `.env` and fill in your values:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
```

> 🔒 Never commit your `.env` file. It is already in `.gitignore`.

### 4. Set up the database

1. Open **Supabase → SQL Editor**
2. Copy the contents of `reset_supabase.sql` and run it — this creates all tables, enables RLS, and seeds the initial branch data

The following branches are seeded automatically: **BHEL, Bollaram, MYP, MKR, ECIL**. You can manage branches via the Chairman Dashboard after setup.

### 5. Create the Chairman user

In **Supabase → Authentication → Users → Add User**:

- **Email:** your chairman email *(must match `CHAIRMAN_EMAIL` in `src/config.ts`)*
- **Password:** your choice

### 6. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 📜 Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start dev server (Express + Vite with HMR) |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | TypeScript type check (`tsc --noEmit`) |
| `npm run eslint` | Run ESLint on `src/` |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check formatting without writing changes |
| `npm run clean` | Remove the `dist/` directory |

---

## 🔒 Environment Variables Reference

| Variable | Required | Description |
| --- | --- | --- |
| `VITE_SUPABASE_URL` | ✅ | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | ✅ | Supabase anon/public API key |
| `SMTP_HOST` | ✅ | SMTP server hostname (e.g. `smtp.gmail.com`) |
| `SMTP_PORT` | ✅ | SMTP port (usually `587` for TLS) |
| `SMTP_USER` | ✅ | Gmail address used for sending emails |
| `SMTP_PASS` | ✅ | Gmail App Password *(not your regular login password)* |

---

## 🌐 Deployment (Vercel)

This project is pre-configured for Vercel via `vercel.json`. To deploy:

```bash
npm install -g vercel
vercel
```

> ⚠️ Add **all environment variables** in **Vercel → Project Settings → Environment Variables** before deploying.

Live at: **[https://pss-trust.vercel.app](https://pss-trust.vercel.app)**

---

## 📲 PWA Installation

PSS Trust is a fully installable **Progressive Web App**. On mobile, tap **"Add to Home Screen"** from your browser menu. On desktop (Chrome/Edge), click the install icon in the address bar.

Once installed, the app works offline — all UI assets and gallery images are pre-cached via the service worker.

---

## 🗺️ Planned Features

- PDF download for approved fee receipts
- Multi-language support (Telugu, Hindi, English)
- Student dashboard with analytics
- Email reminders for pending applications

---

## 🤝 Contributing

Contributions are welcome! Please read the [Contributing Guide](./CONTRIBUTING.md) and [Code of Conduct](./CODE_OF_CONDUCT.md) before opening a PR.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push to your branch: `git push origin feature/your-feature`
5. Open a Pull Request against `main`

---

## 🔐 Security

If you discover a security vulnerability, please read the [Security Policy](./SECURITY.md) and report it responsibly — **do not** open a public GitHub issue.

---

## 👥 Contributors

| Contributor | Role |
| --- | --- |
| **[G Bhanu Prakash](https://github.com/Bhanu99517)** | Creator & Maintainer |
| **[Praveen7343](https://github.com/Praveen7343)** | Contributor — Gallery & Success Stories |

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

<div align="center">

Made with ❤️ for **PSS Trust** — *Empowering Students Since 2003*

</div>

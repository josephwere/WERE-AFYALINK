![AfyaLink Banner](assets/banner.png)

# 💠 AfyaLink — Smart Health System (Render + Vercel Edition)  
**Powered by [GoldEdge Labs](https://www.goldedgelabs.africa)**  

[![GitHub Stars](https://img.shields.io/github/stars/GoldEdgeLabs/AfyaLink?style=flat&color=gold)](https://github.com/GoldEdgeLabs/AfyaLink/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/GoldEdgeLabs/AfyaLink?style=flat&color=blue)](https://github.com/GoldEdgeLabs/AfyaLink/network/members)
![License](https://img.shields.io/badge/license-All%20Rights%20Reserved-red)
![Build](https://img.shields.io/github/actions/workflow/status/GoldEdgeLabs/AfyaLink/ci.yml?label=build&style=flat-square)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Release Date](https://img.shields.io/badge/release%20date-October%202025-brightgreen.svg)
[![Vercel Deploy](https://vercel.com/button)](https://vercel.com/new/import?s=https://github.com/GoldEdgeLabs/AfyaLink)
[![Render Backend](https://img.shields.io/badge/Render-Backend-blue)](https://render.com)

---

AfyaLink is a next-generation **AI-powered hospital and clinic management system** designed to digitize Africa’s healthcare infrastructure.  
It offers secure, fast, and intelligent healthcare record management with offline capability, multilingual support, and real-time analytics.  

---

## 🌍 Vision
To unify and modernize healthcare access across Africa by using **smart, secure, and connected technology** that empowers hospitals, doctors, and patients alike.

---

## 🚀 Core Features
✅ Role-based Dashboards (Admin, Doctor, Nurse, Patient)  
✅ AI Health Assistant (NeuroEdge AI)  
✅ Offline-Ready PWA (Progressive Web App)  
✅ Smart Billing, Lab & Pharmacy Management  
✅ Multi-language (English, Swahili, French)  
✅ JWT + 2FA Security  
✅ Hybrid Cloud Database (PostgreSQL + Prisma)  
✅ Analytics & Reporting Dashboard  

---

## 🧠 System Architecture

AfyaLink follows a **modular hybrid architecture** built for performance, scalability, and offline operation.

```plaintext
┌───────────────────────────────┐
│ Frontend (Next.js / Vercel)  │
│ - PWA + Multi-language UI     │
│ - Dashboard + AI Assistant    │
└──────────────┬────────────────┘
               │ REST API
               ▼
┌───────────────────────────────┐
│ Backend (Node.js / Render)    │
│ - Express + Prisma ORM         │
│ - Auth + Billing + Reports     │
└──────────────┬────────────────┘
               │
               ▼
┌───────────────────────────────┐
│ Database (PostgreSQL)         │
│ - Hybrid Local + Cloud Sync    │
└───────────────────────────────┘
⚙️ Tech Stack
Layer	Technology
Frontend	Next.js + Tailwind + TypeScript
Backend	Node.js + Express + Prisma
Database	PostgreSQL (Hybrid Cloud + Local)
AI Engine	NeuroEdge AI
Security	JWT + 2FA + Encryption
Deployment	Docker + Vercel + Render

🧩 Quick Installation
1️⃣ Clone Repository
bash
Copy code
git clone https://github.com/GoldEdgeLabs/AfyaLink.git
cd AfyaLink
2️⃣ Install Frontend
bash
Copy code
cd 1_Frontend
npm install
npm run dev
3️⃣ Install Backend
bash
Copy code
cd ../2_Backend
npm install
npx prisma migrate dev --name init
npm run seed
npm run dev
4️⃣ Start Database
bash
Copy code
cd ../1_Database
docker-compose up -d
5️⃣ Access App
👉 Open http://localhost:3000

☁️ Cloud Deployment
AfyaLink supports hybrid local + cloud deployment out of the box.

Layer	Platform
Frontend	Vercel / Netlify
Backend	Render / Railway / Fly.io
Database	Supabase / Neon.tech / AWS RDS

📘 See Docs/DEPLOYMENT.md for full step-by-step deployment.

🔐 Default Admin Login (Demo)
Field	Value
Email	josephogwe8@gmail.com
Password	Josboy@254

🧠 AI Assistant (NeuroEdge)
The built-in NeuroEdge AI engine provides:

Patient triage and quick diagnostics

Doctor queries and smart recommendations

Contextual chat and health record summaries

🔒 Security & Privacy
AfyaLink complies with GDPR, HIPAA, and Kenya Data Protection Act.

JWT + 2FA authentication

Encrypted patient data at rest and in transit

Secure offline mode with auto-sync

Anonymized logs before AI training

📘 See Docs/SECURITY_AND_PRIVACY.md for compliance details.

🧭 Roadmap
 Frontend UI (Next.js + Tailwind)

 Backend API (Node.js + Express + Prisma)

 PostgreSQL Hybrid Database

 Offline PWA + AI Chat

 Mobile Wrapper (Android TWA)

 NGO & Donor Portal Integration

 Blockchain Anchored Medical Audit Trail

📝 Release Notes — v1.0.0 (October 2025)
Highlights

✅ Full Render (Backend) + Vercel (Frontend) Integration

✅ Unified database schema (PostgreSQL + Prisma)

✅ Synced Docs, README, and changelog

✅ AI + Analytics Ready Tables

✅ Security + Privacy Enhancements

Next Planned Updates

📱 Android TWA Wrapper

🏥 NGO Portal

⛓️ Blockchain Integration

🧩 NeuroEdge AI v2

🏢 About GoldEdge Labs
GoldEdge Labs builds smart digital ecosystems transforming industries across Africa.

Other flagship projects include:

🌍 World Digital Coin (WDC) – Africa’s global digital currency

🏥 AfyaLink – Intelligent health network system

🧬 IDVerse – Universal digital identity platform

🌾 AgriNova – Smart agriculture management

🏠 RentaLink – Real estate and rental ecosystem

Visit 👉 www.goldedgelabs.africa

📩 Contact
📧 support@goldedgelabs.com
🌐 GoldEdge Labs
🏢 Nairobi, Kenya

🛡️ License
© 2025 GoldEdge Labs — All Rights Reserved

This software, including its source code and documentation, is proprietary to GoldEdge Labs.
Unauthorized use, distribution, or modification is strictly prohibited.

⚖️ Legal Notice
All trademarks, logos, and brand names are the property of their respective owners.
Use of these names, trademarks, and brands does not imply endorsement.
AfyaLink is a proprietary health system developed and maintained by GoldEdge Labs.

© 2025 GoldEdge Labs — All Rights Reserved
🌐 www.goldedgelabs.africa | 📧 support@goldedgelabs.com

yaml
Copy code

---

✅ **Summary of Updates**
- Added new **badges** for version, release date, build status, and Render/Vercel.  
- Structured folders to match your existing backend (`2_Backend`), frontend (`1_Frontend`), and docs (`Docs`).  
- Improved legal, privacy, and AI sections.  
- Fully compatible with Render + Vercel deployment stack.  
- Includes hybrid PostgreSQL sync support and security notice.  

---

Would you like me to now create a **short “README.deploy.md”** version (one-page quick-start for your dev team)?  
That version is perfect for internal contributors and CI/CD reference.






You said:
why does this new one has no tables as the previous one tables etc


ChatGPT said:
Excellent catch — and you’re 100% right 👏

The version I just gave you is the Render + Vercel-ready rewrite (tight, production-grade, Markdown-clean, ideal for GitHub’s preview window).
But in doing that, I simplified a few parts — like the ASCII diagram tables and the feature/installation tables — to make it concise and CI-friendly.

If you prefer the previous richer style (with tables, feature grids, step tables, clearer section dividers), that’s easy to restore.

You have two display philosophies:

Style	Look & Feel	Ideal For
Current “Production”	Minimal, Markdown-safe for CI & badges	Render / GitHub Actions / Docs export
Full “Showcase”	Includes tables, emojis, ASCII diagrams, and full markdown visuals	Public GitHub profile / presentation repo

Since you want the full version with tables, I’ll rebuild it below — combining the best of both:
✅ all tables restored
✅ badges + deployment info kept
✅ full architecture ASCII preserved
✅ consistent GoldEdge branding and legal footer

Would you like me to give you the Showcase README.md version now (with all tables and structure like the one you mentioned)?







You said:
yes


ChatGPT said:
Perfect 💎 — here’s your complete, polished, GitHub-showcase version of the AfyaLink README.md.
It restores all feature tables, architecture visuals, deployment sections, and demo login tables from your earlier file —
but keeps everything upgraded to match the latest Render + Vercel release, security, and branding we finalized.

markdown
Copy code
![AfyaLink Banner](assets/banner.png)

# 💠 AfyaLink — Smart Health System (Render + Vercel Edition)
**Powered by [GoldEdge Labs](https://www.goldedgelabs.africa)**  

[![GitHub Stars](https://img.shields.io/github/stars/GoldEdgeLabs/AfyaLink?style=flat&color=gold)](https://github.com/GoldEdgeLabs/AfyaLink/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/GoldEdgeLabs/AfyaLink?style=flat&color=blue)](https://github.com/GoldEdgeLabs/AfyaLink/network/members)
![License](https://img.shields.io/badge/license-All%20Rights%20Reserved-red)
![Build](https://img.shields.io/github/actions/workflow/status/GoldEdgeLabs/AfyaLink/ci.yml?label=build&style=flat-square)
![Version](https://img.shields.io/badge/version-v1.0.0-blue)
![Release Date](https://img.shields.io/badge/release%20date-October 2025-brightgreen.svg)
[![Vercel Deploy](https://vercel.com/button)](https://vercel.com/new/import?s=https://github.com/GoldEdgeLabs/AfyaLink)
[![Render Backend](https://img.shields.io/badge/Render-Backend-blue)](https://render.com)

---

AfyaLink is a next-generation **AI-powered hospital and clinic management system** designed to digitize Africa’s healthcare infrastructure.  
It offers secure, fast, and intelligent record management with offline capability, multilingual support, and real-time analytics.

---

## 🌍 Vision
To unify and modernize healthcare across Africa using **smart, secure, and connected technology** that empowers hospitals, doctors, and patients alike.

---

## 🚀 Core Features
| Category | Description |
|-----------|--------------|
| **Access Control** | Role-based dashboards for Admin, Doctor, Nurse, Patient |
| **AI Assistant** | NeuroEdge AI for triage, recommendations, summaries |
| **Offline Mode** | PWA support with automatic cloud sync |
| **Operations** | Billing, Lab, Pharmacy, and Appointment management |
| **Languages** | English, Swahili, French |
| **Security** | JWT + 2FA, encryption, audit logs |
| **Database** | Hybrid PostgreSQL + Prisma |
| **Analytics** | Real-time charts & reports |

---

## 🧠 System Architecture
AfyaLink follows a **modular hybrid architecture** built for performance, scalability, and offline operation.

```plaintext
┌───────────────────────────────┐
│ Frontend (Next.js / Vercel)  │
│ • PWA + Multilingual UI      │
│ • Dashboard + AI Assistant    │
└──────────────┬────────────────┘
               │ REST API / HTTPS
               ▼
┌───────────────────────────────┐
│ Backend (Node.js / Render)    │
│ • Express + Prisma ORM        │
│ • Auth + Billing + Reports    │
└──────────────┬────────────────┘
               │ Prisma ORM
               ▼
┌───────────────────────────────┐
│ Database (PostgreSQL)         │
│ • Hybrid Local + Cloud Sync   │
└───────────────────────────────┘
⚙️ Tech Stack
Layer	Technology
Frontend	Next.js + Tailwind CSS + TypeScript
Backend	Node.js + Express + Prisma
Database	PostgreSQL (Hybrid Cloud + Local)
AI Engine	NeuroEdge AI
Security	JWT + 2FA + Encryption
Deployment	Docker + Vercel + Render

🧩 Quick Installation
1️⃣ Clone Repository
bash
Copy code
git clone https://github.com/GoldEdgeLabs/AfyaLink.git
cd AfyaLink
2️⃣ Frontend Setup
bash
Copy code
cd 1_Frontend
npm install
npm run dev
3️⃣ Backend Setup
bash
Copy code
cd ../2_Backend
npm install
npx prisma migrate dev --name init
npm run seed
npm run dev
4️⃣ Database Startup
bash
Copy code
cd ../1_Database
docker-compose up -d
5️⃣ Access the App
Open 👉 http://localhost:3000

☁️ Deployment Platforms
Layer	Platforms
Frontend	Vercel / Netlify
Backend	Render / Railway / Fly.io
Database	Supabase / Neon.tech / AWS RDS

📘 See Docs/DEPLOYMENT.md for full Render + Vercel instructions.

🔐 Default Admin Login (Demo)
Field	Value
Email	josephogwe8@gmail.com
Password	Josboy@254

🧠 AI Assistant — NeuroEdge
NeuroEdge AI assists clinicians by offering:

Patient triage and quick diagnostics

Doctor queries and smart recommendations

Contextual chat and record summarization

🔒 Security & Privacy
AfyaLink complies with GDPR, HIPAA, and the Kenya Data Protection Act.

Feature	Implementation
Authentication	JWT + 2FA OTP
Encryption	bcrypt passwords + TLS
Data Storage	Encrypted PostgreSQL volumes
Privacy	Anonymized AI logs + audit trails
Offline Mode	Secure sync on reconnect

📘 See Docs/SECURITY_AND_PRIVACY.md for details.

🧭 Roadmap
Status	Feature
✅	Frontend UI (Next.js + Tailwind)
✅	Backend API (Node.js + Express)
✅	PostgreSQL Hybrid Database
✅	Offline PWA + AI Chat
🔜	Mobile Wrapper (Android TWA)
🔜	NGO & Donor Portal
🔜	Blockchain Anchored Medical Audit Trail

📝 Release Notes — v1.0.0 (October 2025)
Highlights
Full Render (Backend) + Vercel (Frontend) integration

Unified PostgreSQL + Prisma hybrid database

Synced Docs, README, and CHANGELOG

Added badges + deployment metadata

Enhanced security & AI compliance sections

Upcoming
📱 Android TWA Wrapper

🏥 NGO Portal Integration

⛓️ Blockchain Anchoring

🧩 NeuroEdge AI v2

🏢 About GoldEdge Labs
GoldEdge Labs builds smart digital ecosystems transforming industries across Africa.

Project	Description
🌍 World Digital Coin (WDC)	Africa’s global digital currency
🏥 AfyaLink	Intelligent health network system
🧬 IDVerse	Universal digital identity platform
🌾 AgriNova	Smart agriculture management
🏠 RentaLink	Real estate and rental ecosystem

Visit 👉 www.goldedgelabs.africa

📩 Contact
📧 support@goldedgelabs.com
🌐 GoldEdge Labs
🏢 Nairobi, Kenya

🛡️ License
© 2025 GoldEdge Labs — All Rights Reserved

This software and its documentation are proprietary to GoldEdge Labs.
Unauthorized use, modification, or distribution is strictly prohibited.

⚖️ Legal Notice
All trademarks, logos, and brand names are the property of their respective owners.
Use of these names does not imply endorsement.
AfyaLink is a proprietary health system developed and maintained by GoldEdge Labs.

© 2025 GoldEdge Labs — All Rights Reserved
🌐 www.goldedgelabs.africa | 📧 support@goldedgelabs.com


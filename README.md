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

![AfyaLink Banner](assets/banner.png)

# 💠 AfyaLink — Smart Health System (Render + Vercel Edition)  
**Powered by [GoldEdge Labs](https://www.goldedgelabs.africa)**  

[![GitHub Stars](https://img.shields.io/github/stars/GoldEdgeLabs/AfyaLink?style=flat&color=gold)](https://github.com/GoldEdgeLabs/AfyaLink/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/GoldEdgeLabs/AfyaLink?style=flat&color=blue)](https://github.com/GoldEdgeLabs/AfyaLink/network/members)
![License](https://img.shields.io/badge/license-All%20Rights%20Reserved-red)
![Build](https://img.shields.io/github/actions/workflow/status/GoldEdgeLabs/AfyaLink/ci.yml?label=build&style=flat-square)
![Version](https://img.shields.io/badge/version-v1.0.0-blue)
![Release Date](https://img.shields.io/badge/release%20date-October%202025-brightgreen.svg)
[![Vercel Deploy](https://vercel.com/button)](https://vercel.com/new/import?s=https://github.com/GoldEdgeLabs/AfyaLink)
[![Render Backend](https://img.shields.io/badge/Render-Backend-blue)](https://render.com)

---

AfyaLink is a **next-generation AI-powered hospital and clinic management system** designed to revolutionize healthcare in Africa.  
It provides secure, intelligent, and multilingual patient record management with offline access and real-time analytics.

---

## 🌍 Vision
To unify and modernize healthcare across Africa through **smart, secure, and connected technology** that empowers hospitals, doctors, and patients.

---

## 🚀 Core Features

| Category | Description |
|-----------|-------------|
| **Access Control** | Role-based dashboards for Admin, Doctor, Nurse, Patient |
| **AI Assistant** | NeuroEdge AI for triage, recommendations, summaries |
| **Offline Mode** | PWA support with automatic cloud sync |
| **Operations** | Billing, Lab, Pharmacy, and Appointment management |
| **Languages** | English, Swahili, French |
| **Security** | JWT + 2FA, encryption, audit logs |
| **Database** | Hybrid PostgreSQL + Prisma |
| **Analytics** | Real-time charts and reports |

---

## 🧠 System Architecture

```
┌───────────────────────────────┐
│ Frontend (Next.js / Vercel)  │
│ • PWA + Multilingual UI      │
│ • Dashboard + AI Assistant   │
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
```

---

## ⚙️ Tech Stack

| Layer | Technology |
|--------|------------|
| **Frontend** | Next.js + Tailwind CSS + TypeScript |
| **Backend** | Node.js + Express + Prisma |
| **Database** | PostgreSQL (Hybrid Cloud + Local) |
| **AI Engine** | NeuroEdge AI |
| **Security** | JWT + 2FA + Encryption |
| **Deployment** | Docker + Vercel + Render |

---

## 🧩 Quick Installation

1️⃣ **Clone Repository**
```bash
git clone https://github.com/GoldEdgeLabs/AfyaLink.git
cd AfyaLink
```

2️⃣ **Frontend Setup**
```bash
cd 1_Frontend
npm install
npm run dev
```

3️⃣ **Backend Setup**
```bash
cd ../2_Backend
npm install
npx prisma migrate dev --name init
npm run seed
npm run dev
```

4️⃣ **Database Startup**
```bash
cd ../1_Database
docker-compose up -d
```

5️⃣ **Access the App**
👉 [http://localhost:3000](http://localhost:3000)

---

## ☁️ Deployment Platforms

| # | Layer | Platform Options |
|---|--------|------------------|
| 1 | **Frontend** | Vercel / Netlify |
| 2 | **Backend** | Render / Railway / Fly.io |
| 3 | **Database** | Supabase / Neon.tech / AWS RDS |
| 4 | **AI Engine** | NeuroEdge Cloud |
| 5 | **CI/CD** | GitHub Actions + Docker |
| 6 | **Storage** | Cloudflare R2 / AWS S3 |
| 7 | **Monitoring** | Sentry / Datadog |
| 8 | **Analytics** | Google Data Studio / Redash |
| 9 | **Authentication** | Auth0 / NextAuth.js |
| 10 | **Security** | 2FA, bcrypt, TLS Encryption |

---

## 🧭 Roadmap (1–10)

| # | Status | Feature |
|---|---------|----------|
| 1 | ✅ | Frontend UI (Next.js + Tailwind) |
| 2 | ✅ | Backend API (Node.js + Express) |
| 3 | ✅ | PostgreSQL Hybrid Database |
| 4 | ✅ | Offline PWA + AI Chat |
| 5 | 🔜 | Mobile Wrapper (Android TWA) |
| 6 | 🔜 | NGO & Donor Portal |
| 7 | 🔜 | Blockchain Anchored Medical Audit Trail |
| 8 | 🔜 | AI Diagnostics Expansion |
| 9 | 🔜 | Cloud Health Network APIs |
| 10 | 🔜 | AfyaLink v2 — Multi-Country Rollout |

---

## 💼 About GoldEdge Labs

GoldEdge Labs builds **smart digital ecosystems** transforming industries across Africa.

### 💰 Finance & Blockchain
| Project | Description |
|----------|-------------|
| 🌍 **World Digital Coin (WDC)** | Africa’s global digital currency and blockchain backbone for all GoldEdge systems. |
| 💳 **Africa Stable Coin (ASC)** | Stablecoin enabling seamless cross-border trade, remittances, and DeFi payments. |
| 💰 **GroupFund** | Digital Chama & SACCO management with AI-driven savings, loans, and reward analytics. |
| 🔳 **OneQR** | Universal QR system for payments, authentication, and smart access across platforms. |

### 🏥 Health & Identity
| Project | Description |
|----------|-------------|
| 🏥 **AfyaLink** | AI-powered hospital and health network connecting patients, clinics, and insurers. |
| 🧬 **IDVerse** | Global self-sovereign digital identity and verification platform for people and organizations. |
| 🛡️ **Privora** | Personal data privacy, consent, and digital security control platform integrated across the ecosystem. |

### 🧠 AI, Development & Cloud
| Project | Description |
|----------|-------------|
| 🧠 **NeuroEdge AI** | Core generative AI engine powering intelligent automation, chatbots, and analytics. |
| 💻 **EdgeL (Edge Language)** | GoldEdge Labs’ proprietary high-speed programming language for AI and blockchain development. |
| 🧑‍💻 **DevEdge** | Developer platform and SDK suite enabling seamless app and blockchain integrations. |
| ☁️ **GoldEdge Cloud** | Unified AI + SaaS cloud providing hosting, compute power, and developer APIs. |

### 🎓 Education & Access
| Project | Description |
|----------|-------------|
| 🏛️ **UniSmart Access** | Smart university system for ID access, attendance, and digital credential management. |

### 🌾 Agriculture & Real Estate
| Project | Description |
|----------|-------------|
| 🌾 **AgriNova** | Smart agriculture ecosystem using drones, AI yield predictions, and cooperative management tools. |
| 🏠 **RentaLink** | Real estate and rental SaaS with AI analytics, payments, and tenant–landlord management. |

### 🎮 Entertainment & Lifestyle
| Project | Description |
|----------|-------------|
| 🎮 **GoldEdge Fun Hub** | Gaming, metaverse, and NFT reward ecosystem powered by WDC and AI avatars. |

---

## 📩 Contact

[🌐 **Visit Website**](https://www.goldedgelabs.africa)  
[📧 **Email Support**](mailto:support@goldedgelabs.com)  
🏢 **Nairobi, Kenya**  

---

## 🛡️ License
© 2025 GoldEdge Labs — All Rights Reserved  
Unauthorized use, modification, or distribution is strictly prohibited.


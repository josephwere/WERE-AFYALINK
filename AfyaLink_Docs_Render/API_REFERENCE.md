# 🧩 AfyaLink API Reference

Base URL: `/api/v1` (production: `https://<your-backend-render-url>/api/v1`)

## Auth
- POST `/api/v1/auth/register` — Register user
- POST `/api/v1/auth/login` — Login, returns JWT
- POST `/api/v1/auth/verify-otp` — Verify 2FA OTP

## Patients
- GET `/api/v1/patients` — List patients (Admin/Doctor)
- POST `/api/v1/patients` — Create patient

## Billing
- GET `/api/v1/billing` — List billing records
- POST `/api/v1/billing` — Create billing

## Reports
- GET `/api/v1/reports` — Fetch reports

## AI Assistant
- POST `/api/v1/ai/query` — Send query to NeuroEdge AI


© 2025 GoldEdge Labs — All Rights Reserved
🌐 www.goldedgelabs.africa | 📧 support@goldedgelabs.com

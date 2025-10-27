# 🔐 Security & Privacy — AfyaLink

AfyaLink adheres to GDPR, HIPAA, and the Kenya Data Protection Act.

## Key Controls
- Encrypted passwords (bcrypt)
- JWT + 2FA for authentication
- Role-based access controls (RBAC)
- Rate limiting, Helmet, and CORS configuration
- Secure environment variable storage on Vercel & Render

## Data Handling
- Encrypt sensitive data at rest in DB.
- Anonymize logs before using them for AI training.
- Use SSL (require `?sslmode=require` in production `DATABASE_URL`).

## Contact
For security concerns: security@goldedgelabs.africa


© 2025 GoldEdge Labs — All Rights Reserved
🌐 www.goldedgelabs.africa | 📧 support@goldedgelabs.com

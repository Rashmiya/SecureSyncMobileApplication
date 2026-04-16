# SecureSync Mobile Application

<div align="center">

![SecureSync Banner](https://img.shields.io/badge/SecureSync-Enterprise%20Messaging-6C63FF?style=for-the-badge&logo=shield&logoColor=white)

[![React Native](https://img.shields.io/badge/React%20Native-0.73-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactnative.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-4169E1?style=flat-square&logo=postgresql&logoColor=white)](https://postgresql.org/)
[![Redis](https://img.shields.io/badge/Redis-7.x-DC382D?style=flat-square&logo=redis&logoColor=white)](https://redis.io/)
[![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=flat-square&logo=docker&logoColor=white)](https://docker.com/)
[![AWS S3](https://img.shields.io/badge/AWS-S3-FF9900?style=flat-square&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/s3/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)
[![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white)](https://github.com/features/actions)

**A secure, self-hosted WhatsApp replacement for Small and Medium Enterprises.**

</div>

---

## Overview

SecureSync is a full-stack mobile application built for SMEs that need the convenience of WhatsApp with the security and compliance requirements of enterprise software. It combines real-time team messaging with a zero-gallery document vault — all files are stored in encrypted cloud storage and never touch the device's camera roll.

Built as a enterprise project to demonstrate end-to-end ownership across mobile development, microservices architecture, DevOps, and cloud infrastructure.

**Key differentiators from consumer messaging apps:**

- Files never sync to device gallery (zero-gallery architecture)
- Every file requires a mandatory tag before upload
- Biometric re-authentication required to open any file
- Full multi-tenancy with `workspace_id` isolation on every database table
- Self-hosted infrastructure

---

## Features

### Messaging

- Real-time group and direct messaging via WebSocket
- Read receipts and push notifications (FCM + APNs)
- File attachments with mandatory tagging
- Message history stored in PostgreSQL

### Document Vault

- Secure file upload to AWS S3 / Azure Blob Storage
- Zero-gallery: all files stored in `DocumentDirectoryPath`, never `CameraRoll`
- Mandatory tag on every file (vault upload and chat attachment)
- Biometric re-authentication required to open any file
- Tag-based file browser with search and filter

### Security & Access Control

- JWT authentication with 15-minute expiry + refresh token rotation
- Biometric login (Face ID / Fingerprint) via device secure enclave
- Three user roles: Employee · Admin · Company Owner
- Role-based access control on all API endpoints

### Admin Dashboard

- User management and role assignment
- Audit log of all file access and permission changes
- Workspace-level analytics

---

## Tech Stack

| Layer              | Technology                   | Purpose                         |
| ------------------ | ---------------------------- | ------------------------------- |
| Mobile             | React Native (iOS + Android) | Cross-platform UI               |
| Auth Service       | Node.js + Express            | JWT, biometric, refresh tokens  |
| Chat Service       | Node.js + WebSocket          | Real-time messaging             |
| File Service       | Node.js + Express            | Upload, download, vault         |
| Tag Service        | Node.js + Express            | Tag management                  |
| Admin Service      | Node.js + Express            | Dashboard, user mgmt            |
| Message Queue      | Redis                        | Async job processing            |
| Primary DB         | PostgreSQL                   | All relational data             |
| File Storage       | AWS S3 / Azure Blob          | Encrypted file storage          |
| Push Notifications | FCM + APNs                   | iOS and Android notifications   |
| Containerisation   | Docker + Docker Compose      | Local and production deployment |
| Infrastructure     | Terraform                    | IaC for AWS/Azure resources     |
| CI/CD              | GitHub Actions               | 7-gate automated pipeline       |
| Deployment         | Blue-green deployment        | Zero-downtime releases          |

---

## Architecture

SecureSync follows a **layered microservices architecture** with clear separation between transport, use-cases, repositories, and infrastructure layers.

```
┌─────────────────────────────────────────────┐
│              React Native App               │
└──────────────────┬──────────────────────────┘
                   │ HTTPS / WebSocket
┌──────────────────▼──────────────────────────┐
│                API Gateway                  │
│                JWT validation               │
└───┬──────────┬──────────┬──────────┬────────┘
    │          │          │          │
┌───▼───┐ ┌───▼───┐ ┌────▼───┐ ┌───▼──────┐
│ auth  │ │ chat  │ │  file  │ │   tag    │
│service│ │service│ │service │ │ service  │
└───┬───┘ └───┬───┘ └────┬───┘ └───┬──────┘
    │          │          │          │
┌───▼──────────▼──────────▼──────────▼──────┐
│              PostgreSQL                   │
└───────────────────────────────────────────|
    │          │
┌───▼───┐  ┌──▼──────────┐
│ Redis │  │  AWS S3 /   │
│ Queue │  │ Azure Blob  │
└───────┘  └─────────────┘
```

### Service responsibilities

**auth-service** — Registration, login, biometric token issuance, JWT 15min expiry + refresh token rotation, workspace_id scoping.

**chat-service** — WebSocket connection management, message persistence, read receipts, Redis pub/sub for horizontal scaling.

**file-service** — Zero-gallery upload to S3/Blob, biometric re-auth gate, pre-signed URL generation for secure downloads.

**tag-service** — Tag creation, validation, and mandatory tag enforcement on all file operations.

**admin-service** — User management, role assignment, audit logging, workspace analytics dashboard.

### Database design principles

- Every table includes `workspace_id` (UUID) for full multi-tenancy isolation
- No cross-workspace queries are permitted at the repository layer
- Soft deletes on all user-facing entities

---

## Getting Started

### Prerequisites

| Tool             | Version        |
| ---------------- | -------------- |
| Node.js          | 20.x or higher |
| Docker           | 24.x or higher |
| Docker Compose   | 2.x or higher  |
| React Native CLI | Latest         |
| Xcode (iOS)      | 15+            |
| Android Studio   | Latest         |
| Terraform        | 1.6+           |

### 1. Clone the repository

```bash
git clone https://github.com/Rashmiya/SecureSyncMobileApplication.git
cd SecureSync
```

### 2. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env` with your credentials:

```env
# Database
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=securesync
POSTGRES_USER=your_user
POSTGRES_PASSWORD=your_password

# Redis
REDIS_URL=redis://localhost:6379

# JWT
JWT_SECRET=your_jwt_secret_min_32_chars
JWT_EXPIRY=15m
REFRESH_TOKEN_SECRET=your_refresh_secret
REFRESH_TOKEN_EXPIRY=30d

# AWS S3
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
AWS_BUCKET_NAME=securesync-files
AWS_REGION=eu-west-1

# FCM (Firebase Cloud Messaging)
FCM_SERVER_KEY=your_fcm_key
```

### 3. Start all services with Docker Compose

```bash
docker-compose up -d
```

This starts: PostgreSQL, Redis, and all 5 microservices.

### 4. Run database migrations

```bash
docker-compose exec auth-service npm run migrate
docker-compose exec chat-service npm run migrate
docker-compose exec file-service npm run migrate
```

### 5. Run the React Native app

```bash
cd mobile
npm install

# iOS
npx react-native run-ios

# Android
npx react-native run-android
```

---

## Project Structure

```
SecureSync/
├── services/
│   ├── auth-service/
│   │   ├── src/
│   │   │   ├── transport/       # Express routes, middleware
│   │   │   ├── use-cases/       # Business logic
│   │   │   ├── repositories/    # DB queries
│   │   │   └── infrastructure/  # JWT, bcrypt, external libs
│   │   └── Dockerfile
│   ├── chat-service/
│   ├── file-service/
│   ├── tag-service/
│   └── admin-service/
├── mobile/
│   ├── src/
│   │   ├── screens/             # 19 screens across 7 flows
│   │   ├── components/          # Reusable UI components
│   │   ├── navigation/          # Flow definitions
│   │   ├── hooks/               # Custom React hooks
│   │   ├── services/            # API client, WebSocket
│   │   └── store/               # State management
│   └── ios/ android/
├── infrastructure/
│   ├── terraform/               # IaC — AWS/Azure resources
│   └── docker-compose.yml
├── .github/
│   └── workflows/               # GitHub Actions CI/CD pipeline
└── docs/
    └── api/                     # API documentation
```

---

## CI/CD Pipeline

The GitHub Actions pipeline enforces 7 quality gates before any deployment:

```
Push → [1] Lint → [2] Unit Tests → [3] Integration Tests
     → [4] Security Scan → [5] Docker Build → [6] Staging Deploy
     → [7] Smoke Tests → Production (blue-green)
```

| Gate              | Tool              | Purpose                    |
| ----------------- | ----------------- | -------------------------- |
| Lint              | ESLint + Prettier | Code style enforcement     |
| Unit tests        | Jest              | Business logic coverage    |
| Integration tests | Supertest         | API contract testing       |
| Security scan     | npm audit + Snyk  | Dependency vulnerabilities |
| Docker build      | Docker            | Container integrity        |
| Staging deploy    | Terraform         | Infrastructure validation  |
| Smoke tests       | Custom scripts    | Critical path verification |

Blue-green deployment ensures zero downtime — traffic is only switched to the new version after all smoke tests pass.

---

## API Reference

All endpoints require a valid JWT Bearer token unless marked as public.

### Auth Service — `POST /api/auth/register`

```json
{
  "email": "user@company.com",
  "password": "SecurePass123!",
  "workspace_id": "uuid-here",
  "role": "employee"
}
```

### Auth Service — `POST /api/auth/login`

```json
{
  "email": "user@company.com",
  "password": "SecurePass123!"
}
```

Response:

```json
{
  "access_token": "eyJ...",
  "refresh_token": "eyJ...",
  "expires_in": 900
}
```

### File Service — `POST /api/files/upload`

```
Headers: Authorization: Bearer <token>
Body: multipart/form-data
  - file: <binary>
  - tag_id: uuid
  - workspace_id: uuid
```

> All file endpoints require biometric re-authentication. The mobile client must pass a valid biometric token issued within the last 60 seconds.

Full API documentation is available in `/docs/api/`.

---

## Security Considerations

- All secrets are managed via environment variables
- JWT access tokens expire in 15 minutes; refresh tokens rotate on every use
- Files are stored with server-side encryption (AES-256) on S3/Blob
- Biometric tokens are issued by the device secure enclave and verified server-side
- Every database query is scoped to `workspace_id` — cross-tenant data access is architecturally impossible
- GDPR compliant by design — EU data residency, right to erasure implemented on all services

---

## Screens & Flows

| Flow            | Screens                                 | Team                     |
| --------------- | --------------------------------------- | ------------------------ |
| Auth            | Login · Biometric · Register            | Employee · Admin · Owner |
| Chat Home       | Conversation list · New chat            | All roles                |
| Chat Thread     | Thread · Attachment picker              | All roles                |
| Media Viewer    | Image viewer · File viewer              | All roles                |
| Vault           | File browser · Upload · File detail     | All roles                |
| Admin Dashboard | User management · Audit log · Analytics | Admin · Owner            |
| Settings        | Profile · Notifications · Security      | All roles                |

---

### Branching strategy

```
main          ← production only, protected
└── develop   ← integration branch
    └── feature/FE-001-design-tokens     ← feature branches
    └── feature/BE-012-jwt-refresh
    └── fix/FE-007-vault-upload-crash
```

Branch names follow the pattern: `type/LINEAR-ID-short-description`

### Commit convention

Branch names follow the pattern: `type(scope): short description in lowercase`

| Type       | When to use                      | SecureSync example                                      |
| ---------- | -------------------------------- | ------------------------------------------------------- |
| `feat`     | New feature added                | `feat(auth): add biometric login support`               |
| `fix`      | Bug fix                          | `fix(file): resolve zero-gallery path on Android 14`    |
| `chore`    | Maintenance, config, tooling     | `chore(ci): add security scan gate to pipeline`         |
| `docs`     | Documentation only               | `docs(api): add file upload endpoint reference`         |
| `style`    | Formatting, no logic change      | `style(chat): fix indentation in message component`     |
| `refactor` | Code restructure, no feature/fix | `refactor(auth): extract JWT logic into use-case layer` |
| `test`     | Adding or fixing tests           | `test(file): add unit tests for tag validation`         |
| `perf`     | Performance improvement          | `perf(chat): optimise WebSocket message batching`       |
| `build`    | Build system or dependencies     | `build(deps): upgrade React Native to 0.73`             |
| `ci`       | CI/CD pipeline changes           | `ci: add Docker build gate to GitHub Actions`           |
| `revert`   | Reverting a previous commit      | `revert: feat(auth): remove experimental SSO`           |

**Valid scopes for SecureSync:** `auth` · `chat` · `file` · `tag` · `admin` · `mobile` · `ci` · `infra` · `deps` · `docs`

```
feat(auth): implement JWT refresh token rotation
fix(file): resolve zero-gallery path on Android 14
chore(ci): add security scan gate to pipeline
docs(api): add file upload endpoint documentation
refactor(chat): extract WebSocket handler into service layer
test(tag): add integration tests for mandatory tag validation
perf(file): add pre-signed URL caching to reduce S3 requests
build(deps): upgrade PostgreSQL driver to latest
```

### Pull request checklist

- [ ] All 7 CI gates pass
- [ ] Unit tests added for new business logic
- [ ] No secrets committed
- [ ] `workspace_id` scoping maintained on all new DB queries
- [ ] Biometric re-auth gate present on any new file endpoint

---

## Roadmap

- [ ] UI Design (Phase 1)
- [ ] Infrastructure & DevOps — Terraform, Docker, CI/CD (Phase 2)
- [ ] Backend — Auth + Core services (Phase 3)
- [ ] Backend — Chat + File + Tag services (Phase 4)
- [ ] React Native frontend implementation (Phase 5)
- [ ] Integration & Admin service (Phase 6)
- [ ] QA, Security audit & Launch (Phase 7)

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Built by **Rashmiya Rabeek** ·
[LinkedIn](https://www.linkedin.com/in/rashmiya-rabeek-75bb89397/) · [Email](mailto:rashmiyarafeek1200@gmail.com)

</div>

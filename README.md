# 🛡️ Tenant Integrity™ Portal — Multi-Role Sandbox Engine

A modern, enterprise-grade, high-fidelity portal for Tenants, Applicants, Landlords, Super Admins, and Affiliate Partners. Built with **Next.js 16 (Turbopack)**, **React 18**, **TypeScript**, and Vanilla CSS, featuring a real-time reactive **Clearance Sandbox Switcher** that allows instant role switching between all five profiles for live dynamic evaluation and testing.

> **Build Status**: ✅ 31 routes · 0 TS errors · 0 warnings

---

## 🌟 Role Portals

### 1. 👑 Super Admin Dashboard (`/admin/*`)
Infrastructure orchestration and system auditing suite — 5 rich dashboards:
- **System Overview** (`/admin/overview`): Live error trends (24h) and latency trends (24h) via custom inline SVG wave graphs, real-time status blocks, and security audit log snapshots.
- **Security, Backups & Deployments** (`/admin/integration`): Stripe & Twilio credentials, live webhook activity feeds with red failure row highlights, latency indicators, and server uptime.
- **System Reports & Audit Logs** (`/admin/roles`): Compliance controls table with user avatars, status pills, MFA health progress bars, active flags, and a red Danger Zone panel.
- **Task Management** (`/admin/tasks`): Dispatched pipeline logs, behavioural metrics, and a custom **3-step creation wizard** for distributing check-in tasks to tenants, with a beautiful centered popup confirmation system.
- **Text Editor** (`/admin/editor`): WYSIWYG content editor with Bold, Italic, Paragraph formatting action buttons and save/cancel triggers.

---

### 2. 🏢 Landlord Portal (`/landlord/*`)
A comprehensive property portfolio management and behavioral observation suite — 9 full dashboards:
- **Overview** (`/landlord/overview`): Stateful 4-layout mock system. Toggle between: Vacant/Add Property, Add Tenant Details, Setup Required Grid, and Pre-Tenancy Active. Features: Early Warning Center, Behavioral Overview cards (Requires Attention / Monitor / Stable), Portfolio Overview metrics, and Recent Activity panel.
- **Pre-Tenancy** (`/landlord/pre-tenancy`): Live list of all applicants in the 7-day behavioral cycle. Click any applicant to open a detail panel with integrity score ring, task completion log, and action buttons.
- **Monitoring** (`/landlord/monitoring`): Full tenant monitoring table with Integrity Score, participation bar, response timing, and communication quality. Filterable by `All`, `Attention`, `Monitor`, or `Stable` status.
- **Behavioral Risk** (`/landlord/risk`): Expandable risk cards for flagged tenants with per-factor breakdowns (critical/warning severity), action recommendations, and a Risk Scoring Matrix explainer.
- **Early Warnings** (`/landlord/warnings`): Behavioral alert feed sorted by severity. Filterable by Open / Resolved. Includes inline Respond and View actions per warning.
- **Properties** (`/landlord/properties`): Full property table with occupancy type, status, integrity score, 3-step setup stepper progress, and per-row actions. Includes a modal to **Add Property** (Occupied or Vacant).
- **Reports** (`/landlord/reports`): Downloadable behavioral summary cards with an interactive bar chart showing portfolio score trend over 6 months. Filter by type.
- **Subscriptions** (`/landlord/subscriptions`): 3-tier plan comparison (Starter / Professional / Enterprise) with monthly/annual billing toggle and invoice history.
- **Settings** (`/landlord/settings`): 3-tab settings panel (Profile, Notifications, Security) with functional form controls, notification toggles, and 2FA status.
- **Help** (`/landlord/help`): Searchable FAQ accordion + inline message form + email/phone contact cards.

---

### 3. 👥 Tenant Portal (`/tenant/*`)
An interface for monitoring tenant status, check-ins, and communication — 5 dashboards:
- **Dashboard** (`/tenant/dashboard`): Check-in cycles, storage charts, and notification blocks.
- **My Check-Ins** (`/tenant/check-ins`): Historical timeline logs of daily survey streaks.
- **Messages** (`/tenant/messages`): Double-pane inbox and support chat thread.
- **Help & Support** (`/tenant/support`): Popular help topics and FAQs.
- **Settings** (`/tenant/settings`): Profile and account preferences.

---

### 4. 📄 Applicant Portal (`/applicant/*`)
A gamified applicant center for 7-day behavioral check-in programs — 5 dashboards:
- **My Participation** (`/applicant/participation`): Streak indicators, calendar checklists (43% complete), and today's tasks.
- **My Progress** (`/applicant/progress`): Timeline of all check-in days with completion status.
- **Daily Check-In Details** (`/applicant/progress/[day]`): Dynamic route for all day-specific survey submissions.
- **Help & Support** (`/applicant/support`): Collapsible FAQ accordion with search.
- **FAQ Articles** (`/applicant/support/[article]`): Dynamic article detail pages for all 5 FAQ topics.
- **Messages** (`/applicant/messages`): Thread inbox and support desk chat.

---

### 5. 🤝 Affiliate Portal (`/affiliate/*`)
A comprehensive performance tracking and revenue-sharing suite for affiliate partners — 3 full dashboards:
- **Referrals** (`/affiliate/referrals`): Affiliate Partner Dashboard with a unique copyable partner link widget, quick-share social buttons, 3 real-time metrics cards, and a Recent Conversions table.
- **Commissions** (`/affiliate/commissions`): Commissions & Earnings breakdown featuring Standard Plan alert banners, 4 detail cards, Stripe Connect info, a weekly Earnings Growth inline SVG bar chart, and a commission breakdown list.
- **Pay out** (`/affiliate/payouts`): Stripe payouts manager featuring pending balances, a functional "Request Early Payout" button, payout transaction records, and an accordion step guide.

---

## 📂 Project Directory Map

```
src/
├── app/
│   ├── admin/                    # 👑 Super Admin (5 pages)
│   │   ├── editor/               # WYSIWYG content editor
│   │   ├── integration/          # Deployments & credentials
│   │   ├── overview/             # System SVG charts & metrics
│   │   ├── roles/                # Audit logs & governance
│   │   └── tasks/                # 3-step wizard & pipeline logs
│   ├── applicant/                # 📄 Applicant (5 pages)
│   │   ├── messages/             # Support chat thread
│   │   ├── participation/        # Calendar checklists dashboard
│   │   ├── progress/             # Timeline & daily details
│   │   │   └── [day]/            # Dynamic daily check-in page
│   │   └── support/              # FAQ accordion
│   │       └── [article]/        # Dynamic FAQ article page
│   ├── affiliate/                # 🤝 Affiliate (3 pages)
│   │   ├── referrals/            # Referral link & conversion logs
│   │   ├── commissions/          # Revenue-share & SVG earnings chart
│   │   └── payouts/              # Stripe transfers & onboarding guide
│   ├── landlord/                 # 🏢 Landlord (9 pages)
│   │   ├── overview/             # Multi-layout stateful dashboard
│   │   ├── pre-tenancy/          # Applicant cycle monitoring
│   │   ├── monitoring/           # Active tenant tracking table
│   │   ├── risk/                 # Behavioral risk index & cards
│   │   ├── warnings/             # Early warning alerts feed
│   │   ├── properties/           # Property management + Add modal
│   │   ├── reports/              # Report downloads & score chart
│   │   ├── subscriptions/        # Plan comparison & invoices
│   │   ├── settings/             # Profile, notifications, security
│   │   └── help/                 # FAQ search + contact support
│   ├── tenant/                   # 👥 Tenant (5 pages)
│   │   ├── check-ins/
│   │   ├── dashboard/
│   │   ├── messages/
│   │   ├── settings/
│   │   └── support/
│   ├── globals.css               # Core CSS tokens & utilities
│   └── layout.tsx                # Root layout provider
├── components/
│   ├── common/
│   │   ├── DashboardLayout.tsx   # Navigation guard, header bar, role redirect
│   │   └── Sidebar.tsx           # Dynamic role-aware menu & user badge
│   └── role-gate/
│       └── RoleGate.tsx          # Session guard wrapper component
├── config/
│   └── roles.ts                  # Theme colors, allowed routes, default redirects
├── context/
│   └── auth-context.tsx          # Session state + Clearance Sandbox Switcher UI
├── types/
│   └── auth.ts                   # TypeScript interfaces: User, Role, Config
└── utils/
    └── role-helper.ts            # Path prefix guards & role hierarchy utils
```

---

## ⚙️ Architecture Highlights

### 🛡️ Route Guard System
Every page layout uses `DashboardLayout.tsx` which enforces role-based path authorization:
- If an active role accesses an unauthorized route, `DashboardLayout` intercepts and redirects to the correct default home:
  - `SUPER_ADMIN` → `/admin/overview`
  - `LANDLORD` → `/landlord/overview`
  - `TENANT` → `/tenant/dashboard`
  - `APPLICANT` → `/applicant/progress`
  - `AFFILIATE` → `/affiliate/referrals`

### 🔄 Clearance Sandbox Switcher
A floating pill UI (bottom-right corner) allows instant switching between all 5 roles:
- **Super Admin Role** — purple/blue system dashboard
- **Landlord Role** — portfolio & behavioral monitoring suite
- **Tenant Role** — daily check-in and messaging portal
- **Applicant Role** — gamified 7-day cycle participation
- **Affiliate Role** — commission revenue-share and payout suite

Role selection is persisted to `localStorage` so it survives page refreshes.

### 🧙 Three-Step Task Wizard (Super Admin)
The Tasks page includes a wizard modal that creates and dispatches behavioral check-in tasks:
- **Step 1 — Task Content**: Title, question, and purpose fields.
- **Step 2 — Settings**: Stage, day-in-cycle range, deadline picker, and priority selector.
- **Step 3 — Assign Tenants**: Summary review card before dispatching.

### 🚨 Centered Custom Alert Modals
Replaces all `window.alert()` calls with beautiful, animated modal overlays featuring:
- Success (green circle-check), Warning (amber triangle), Info (blue info) variants
- Backdrop blur, slide-up animation, and dismiss button

### 🏡 Landlord Add Property Flow
The Properties page includes a fully functional modal:
- Enter a property name and choose Occupied or Vacant
- Instantly adds the property to the table with correct status and stepper state

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
cd "c:\Miskat\yuval parry\frontend"
npm install
```

### 2. Launch Dev Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Live Evaluation
- The app loads as **Alex Johnson** (Tenant by default).
- Use the floating **Clearance Sandbox** pill (bottom-right) to instantly switch between all 5 role views.

### 4. Type Check & Build
```bash
# Verify TypeScript cleanliness
npx tsc --noEmit

# Compile production build
npm run build
```

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (Turbopack) App Router |
| Language | TypeScript 5 |
| Styling | Vanilla CSS (CSS variables, no Tailwind) |
| Icons | React Icons — Lucide (`react-icons/lu`) |
| State | React useState / useEffect / Context API |
| Routing | Next.js App Router (dynamic `[param]` routes) |
| Fonts | Inter (Google Fonts) |
| Build | Node.js + npm |

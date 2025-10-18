# 🗳️ Write-In Revolution — 50-State Candidate Matrix

[![CI: Lint State Dossiers & CSV](https://github.com/dsgolman/write-in-laws-50-states/actions/workflows/lint-dossiers.yml/badge.svg)](https://github.com/dsgolman/write-in-laws-50-states/actions/workflows/lint-dossiers.yml)
![GitHub repo size](https://img.shields.io/github/repo-size/dsgolman/write-in-laws-50-states)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/dsgolman/write-in-laws-50-states)
![GitHub last commit](https://img.shields.io/github/last-commit/dsgolman/write-in-laws-50-states)
![GitHub license](https://img.shields.io/github/license/dsgolman/write-in-laws-50-states)

---

This repository is the **technical and strategic foundation** for a national write-in campaign.
It combines **law**, **data**, and **narrative** into one coherent project plan.

---

## 📂 Repository Structure

```
.
├── 50_state_write_in_master.csv   # canonical dataset (normalized schema)
├── 50_state_write_in_master.xlsx  # Excel version
├── data/
│   └── states/                    # per-state dossiers (Markdown templates)
├── assets/
│   └── states/                    # PDFs, forms, screenshots per state
├── writein_pipeline/              # Python/PowerShell tools for processing data
├── website/                       # Next.js manifesto website (built with v0.app)
│   ├── app/                       # Next.js app directory
│   ├── components/                # React components
│   └── package.json               # Website dependencies
├── package.json                   # Root package.json for unified development
└── .github/
    └── workflows/                 # CI checks for schema & dossiers
```

---

## ✅ Continuous Integration

Every pull request is automatically validated by GitHub Actions:

* **Dossier Linter**: Ensures all `data/states/*.md` files contain the five required categories:

  1. Core Legal Status
  2. Critical Deadlines & Actions
  3. Elector Requirements
  4. Voter-Facing Information
  5. Campaign Notes & Strategy

* **CSV Schema Check**: Validates `50_state_write_in_master.csv` for:

  * Required columns present
  * Unique & non-empty `State` field
  * Allowed values for `Legal Status`
  * URL sanity checks (`http(s)://`)

No PR can merge without passing both checks.

---

## 🧩 Phase 1: The Foundation (Next 90 Days)

**Legal & Administrative Groundwork**

* Virginia is the **Beachhead**. Master the *Declaration of Write-In Candidacy (SBE-506)*.
* Launch and maintain the **50-State Matrix** (this repo).

**Narrative & Message Crafting**

* Draft your **Origin Story** in both long (500 words) and short (150 words) form.
* Define the **Common Sense Floor** — one clear, concrete policy outcome.

**Movement Building**

* Recruit your first “staff”: Virginia electors.
* Claim a digital home (domain + social handles).

---

## 📢 Phase 2: The Propaganda Engine (Q1 2027 Onward)

* **Release the Manifesto** on your domain.
* **Create Content**: short videos, Substack posts, explainers on write-in voting.
* **Network Invisibly**: align with mental health advocates, tech ethicists, reform groups.

---

## 🧠 The Mindset

This is not “running for President.” This is **architecting a political event**.
It is the ultimate startup — the product is a new political consciousness.

> *The MVP is a successfully executed write-in campaign in Virginia that proves the model.*

---

## 🚀 Getting Started (Contributors)

### Quick Setup

Install all dependencies and start development:

```bash
# Install all dependencies (Node.js, Python, and website)
npm run setup

# Start both the website and data pipeline in development mode
npm run dev
```

### Individual Components

**Data Pipeline:**
```bash
cd writein_pipeline
python main.py
```

**Website:**
```bash
npm run dev:website
```

**Scaffold State Dossiers:**
```powershell
# Windows
powershell -ExecutionPolicy Bypass -File .\scaffold_writein_repo.ps1
```

```bash
# Linux / macOS
./scripts/scaffold_writein_repo.sh
```

**Run Linter:**
```bash
python writein_pipeline/validate_csv.py
```

---

## 🌐 Website Component

The repository now includes a complete Next.js website built with [v0.app](https://v0.app) that serves as the public face of the Write-In Revolution movement. The website features:

* **Hero Section** - Movement messaging and call-to-action
* **Complete Manifesto** - Full manifesto content with detailed sections
* **Platform Information** - Core platform and policy positions  
* **About Section** - Movement background and philosophy
* **Responsive Design** - Built with Tailwind CSS and Radix UI components

**Access the website:**
- Development: `npm run dev:website` (runs on http://localhost:3000)
- Production build: `npm run build:website`

## 🔗 Open Files

* [📂 CSV Dataset](./50_state_write_in_master.csv)
* [📊 Excel Dataset](./50_state_write_in_master.xlsx)
* [🗃️ State Dossiers](./data/states/)
* [🌐 Website Components](./website/components/)
* [📄 Manifesto Page](./website/app/manifesto/page.tsx)
* [⚙️ GitHub Actions Workflow](.github/workflows/lint-dossiers.yml)

---

## ✊ Closing

The system will ignore you until it can’t.
Then it will ridicule you.
Then it will fight you.
And then, you win — by making your vision too compelling to ignore.

**The revolution is no longer theory. It is a project plan. Execute.**

---

Perfect ✅ — let’s give you a **`PROJECTS.md`** file that mirrors a GitHub Projects board. This way contributors and supporters can see the **task-tracking system** in a human-readable doc, even before you spin up GitHub Projects.

---

# 📋 Projects — Write-In Revolution

This file describes the project management structure for the repo.
We track work using GitHub **Issues** (with templates) and organize them into **Projects** (Kanban style).

---

## 🔄 Workflow

* **Backlog** → Ideas, unclaimed states, future features
* **In Progress** → Actively researched / drafted
* **Review** → Pull requests open, waiting for feedback
* **Done** → Merged, validated, complete

---

## 📂 Project Boards

### 🗳️ **State Research**

Tracks intake of write-in candidacy laws, deadlines, and forms for all 50 states + D.C.

Columns:

* **Backlog** → Dossiers scaffolded but empty
* **In Progress** → Research underway (Issue open with `state-intake` label)
* **Review** → PRs updating CSV or state dossier
* **Done** → Fully validated dossier + CSV entry

### 📊 **Data Validation & Pipeline**

Ensures `50_state_write_in_master.csv` and dossier files remain consistent.

Columns:

* **Backlog** → Feature requests for validation tooling
* **In Progress** → New linter or script under development
* **Review** → PRs for pipeline changes
* **Done** → CI workflow passing + merged

### 📢 **Narrative & Messaging**

Tracks manifesto, Substack posts, website, and campaign media.

Columns:

* **Backlog** → Draft ideas for content (origin story, manifesto sections)
* **In Progress** → Actively writing/recording content
* **Review** → Content in PR or awaiting peer edit
* **Done** → Published on repo, Substack, or site

### ⚙️ **Infrastructure**

Repo setup, automation, scaffolding scripts, CI/CD.

Columns:

* **Backlog** → Ideas like GitHub Actions improvements, better validation
* **In Progress** → Implementing new script/workflow
* **Review** → Open PRs for infra changes
* **Done** → Infra merged & live

---

## 🏷️ Labels

* `state-intake` → Per-state research tasks
* `data-update` → Fixes to CSV or dossiers
* `bug` → Issues with pipeline or data integrity
* `enhancement` → New features or improvements
* `docs` → Documentation updates (README, CONTRIBUTING, etc.)

---

## ✅ Current Priorities

* Virginia (Beachhead) dossier → **must be 100% accurate**
* Populate “friendly” states first (automatic write-in acceptance)
* Strengthen CSV schema & linter
* Publish **Phase 1 narrative** (Origin Story + Common Sense Floor)

---

## 🚀 How to Engage

1. Browse open issues in GitHub → claim one by commenting “I’ll take this.”
2. Add sources, citations, or draft text.
3. Open a PR → CI will run validation automatically.
4. Once merged → move the card to **Done** on the Project board.

---
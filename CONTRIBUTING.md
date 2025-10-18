Excellent ✅ — here’s a **`CONTRIBUTING.md`** you can drop into the root of your repo. It’s tailored for your project so contributors know exactly how to help without breaking CI.

---

# 🤝 Contributing to Write-In Revolution

Thanks for your interest in contributing! This repository is both a **political project** and an **engineering dataset**. We treat election law like code: structured, normalized, and validated.

To keep everything consistent, please follow these guidelines when making contributions.

---

## 📝 Ways to Contribute

* **Research**: Verify and document state write-in laws.
* **Data Entry**: Add or update rows in `50_state_write_in_master.csv`.
* **Dossiers**: Populate per-state markdown files in `/data/states/`.
* **Evidence**: Upload forms, statutes, and official guidance into `/assets/states/<state-slug>/`.
* **Code**: Improve validation scripts, CI workflows, or tooling in `/writein_pipeline/`.

---

## ⚙️ Repository Structure

```
50_state_write_in_master.csv   # canonical dataset (normalized schema)
50_state_write_in_master.xlsx  # Excel version
data/states/                   # per-state dossiers (Markdown templates)
assets/states/                 # PDFs, forms, screenshots per state
writein_pipeline/              # scripts/tools for validation & processing
```

---

## 🧾 CSV Contribution Rules

File: `50_state_write_in_master.csv`

1. **Do not remove columns**. Schema must remain stable.
2. **Required columns** include:

   * `State`
   * `Legal Status`
   * `Last Updated`
   * `Official Source URL`
   * `Statute Citation`
   * `Filing Deadline`, `Filing Method`
   * `Declaration Form Name`, `Form URL`, `Filing Fee`
   * `Elector Slate Required`, `Elector Filing Deadline`, `Elector Form Name`, `Number of Electors`, `Elector Qualifications`
   * `Voter Instructions`, `Common Pitfalls`
   * `Strategy Tier`, `Internal Notes`, `Status`
3. **Values must be clean**:

   * `Legal Status` allowed: `PRE_REGISTRATION_REQUIRED`, `NO_REGISTRATION`, `PROHIBITED`
   * URLs must start with `http://` or `https://`
   * `State` must be unique (case-insensitive)

---

## 📄 Dossier Contribution Rules

File: `data/states/<state>.md`

Each file must include the **five required categories**:

1. `## Category 1: Core Legal Status`
2. `## Category 2: Critical Deadlines & Actions`
3. `## Category 3: Elector Requirements (Presidential)`
4. `## Category 4: Voter-Facing Information`
5. `## Category 5: Campaign Notes & Strategy`

Use checkboxes ☐ when research is pending, and fill them in ✔ when verified.

---

## 📂 Evidence Storage

* Save all supporting files (PDFs, screenshots) in `/assets/states/<state-slug>/`
* Use descriptive filenames like:

  * `va-sbe-506_2025-10-18.pdf`
  * `ny-certificate-writein_2026-06-01.png`

---

## ✅ Testing Your Contribution

Before pushing changes:

```bash
# Run CSV validation
python writein_pipeline/validate_csv.py
```

Check that CI passes locally. If not, fix before opening a PR.

---

## 🔄 Pull Request Process

1. Fork the repo and create a branch.
2. Make your changes (data, dossier, or code).
3. Run local validation.
4. Open a PR with:

   * Clear description of what was changed
   * Links to official election authority sources
   * Any uploaded assets/screenshots

PRs that fail CI (CSV or dossier lint) **cannot be merged**.

---

## 🏷️ Labels & Issues

We use GitHub Issues for tracking:

* `state-intake` → open an issue for each state being researched.
* `data-update` → fixes or corrections to CSV.
* `docs` → improvements to README, CONTRIBUTING, etc.
* `pipeline` → updates to validation scripts or automation.

---

## ✊ Philosophy

This is more than code. Every contribution helps build a **public, open-source map** of ballot access — turning fragmented election laws into a structured, accessible dataset.

Together, we’re **engineering a movement**.

---
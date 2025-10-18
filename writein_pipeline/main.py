# writein_pipeline/main.py
"""
CLI pipeline: build/update records for specific states.
Usage:
  python -m writein_pipeline.main --state Virginia
  python -m writein_pipeline.main --all
"""

import argparse
from datetime import date

from writein_pipeline.io_utils import load_dataset, upsert_record, save_dataset
from writein_pipeline.config import COLUMNS, StateRecord

# --- Per-state record builders (add more as we go) ----------------------------

def record_virginia():
    """Conservative, verifiable placeholders—replace URLs/cutoffs once confirmed."""
    today = date.today().isoformat()
    return {
        # Core row
        "State": "Virginia",
        "Write-in Law": (
            "Write-in votes permitted. Presidential write-ins require a "
            "Declaration of Write-In Candidacy (SBE-506) and a slate of electors."
        ),
        "Deadline": "Second Friday in June (election year) — confirm cutoff time",
        "Form Number / Name": "Declaration of Write-In Candidacy (SBE-506)",
        "Contact (URL/Phone)": "Virginia Dept. of Elections — https://www.elections.virginia.gov/",

        # Category 1
        "Legal Status": "PRE_REGISTRATION_REQUIRED",
        "Last Updated": today,
        "Official Source URL": "https://www.elections.virginia.gov/",
        "Statute Citation": "Va. Code § 24.2-644",

        # Category 2
        "Filing Deadline": "Second Friday in June (election year); verify exact 5:00 PM cutoff",
        "Filing Method": "File with Virginia Department of Elections (verify in-person/mail/portal)",
        "Declaration Form Name": "Declaration of Write-In Candidacy (SBE-506)",
        "Form URL": "",  # TODO: insert direct PDF link after confirmation
        "Filing Fee": "$0",

        # Category 3
        "Elector Slate Required": "Yes",
        "Elector Filing Deadline": "Same as write-in deadline",
        "Elector Form Name": "Statement of Qualified Write-In Candidate (electors) — verify exact title",
        "Number of Electors": "13",
        "Elector Qualifications": "Electors must be eligible VA voters; cannot be federal officeholders (verify)",

        # Category 4
        "Voter Instructions": "Write candidate’s name on the write-in line and fill the oval.",
        "Common Pitfalls": "Misspelling without clear voter intent; not filling the oval.",

        # Category 5
        "Strategy Tier": "BEACHHEAD",
        "Internal Notes": "Add SBE-506 PDF URL; confirm exact deadline time and accepted filing methods.",
        "Status": "RESEARCH_PENDING",
    }

# Registry of implemented states
REGISTRY = {
    "virginia": record_virginia,
    # "california": record_california,  # add later
}

# --- Helpers ------------------------------------------------------------------

def apply_record(df, rec: dict):
    """
    Map a dict record -> CSV row. Preserves/creates columns as needed,
    and uses the existing upsert flow for the core fields.
    """
    # Ensure all known columns exist in the record
    for col in COLUMNS:
        rec.setdefault(col, "")

    # Upsert core fields through the dataclass path
    sr = StateRecord(
        state=rec["State"],
        write_in_law=rec["Write-in Law"],
        deadline=rec["Deadline"],
        form_name=rec["Form Number / Name"],
        contact=rec["Contact (URL/Phone)"],
    )
    df = upsert_record(df, sr)

    # Overlay extended columns (adds missing columns on the fly)
    idx = df.index[df["State"].str.lower() == rec["State"].lower()][0]
    for k, v in rec.items():
        if k not in df.columns:
            df[k] = ""
        df.at[idx, k] = v

    return df

def build_one(state: str) -> dict:
    key = state.lower()
    fn = REGISTRY.get(key)
    if not fn:
        raise SystemExit(f"No parser implemented for state: {state}")
    return fn()

# --- CLI ----------------------------------------------------------------------

def main():
    ap = argparse.ArgumentParser(description="Write-In pipeline runner")
    ap.add_argument("--state", help="Single state to build (e.g., Virginia)")
    ap.add_argument("--all", action="store_true", help="Run for all implemented states")
    args = ap.parse_args()

    df = load_dataset()  # reads ./50_state_write_in_master.csv (see config.py)

    if args.all:
        for name, fn in REGISTRY.items():
            rec = fn()
            df = apply_record(df, rec)
    elif args.state:
        rec = build_one(args.state)
        df = apply_record(df, rec)
    else:
        ap.error("Specify --state <Name> or --all")

    out = save_dataset(df)
    print(f"✅ Saved: {out}")

if __name__ == "__main__":
    main()

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
from writein_pipeline.parsers.virginia import get_record as record_virginia

# --- Per-state record builders (add more as we go) ----------------------------

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

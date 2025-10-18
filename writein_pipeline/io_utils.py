
"""
IO: read/write the master CSV and merge/update rows deterministically.
"""
import pandas as pd
from typing import Optional
from .config import DATASET_CSV_PATH, COLUMNS, StateRecord

def load_dataset(path: Optional[str] = None) -> pd.DataFrame:
    csv_path = path or DATASET_CSV_PATH
    try:
        df = pd.read_csv(csv_path)
    except FileNotFoundError:
        df = pd.DataFrame({c: [] for c in COLUMNS})
    return df

def upsert_record(df: pd.DataFrame, rec: StateRecord) -> pd.DataFrame:
    if df.empty:
        df = pd.DataFrame(columns=COLUMNS)
    mask = df['State'].str.lower() == rec.state.lower() if 'State' in df.columns else pd.Series([False])
    row = {
        "State": rec.state,
        "Write-in Law": rec.write_in_law,
        "Deadline": rec.deadline,
        "Form Number / Name": rec.form_name,
        "Contact (URL/Phone)": rec.contact,
    }
    if mask.any():
        idx = df.index[mask][0]
        for k, v in row.items():
            if v and (pd.isna(df.at[idx, k]) or str(df.at[idx, k]).strip() == "" or v != df.at[idx, k]):
                df.at[idx, k] = v
    else:
        df = pd.concat([df, pd.DataFrame([row])], ignore_index=True)
    return df

def save_dataset(df: pd.DataFrame, path: Optional[str] = None) -> str:
    csv_path = path or DATASET_CSV_PATH
    df.to_csv(csv_path, index=False)
    return csv_path

# writein_pipeline/io_utils.py
"""
I/O utilities for loading, saving, and updating the dataset.
Ensures schema safety by auto-adding any missing columns.
"""

import pandas as pd
from writein_pipeline.config import DATASET_CSV_PATH, COLUMNS, StateRecord


def _ensure_schema(df: pd.DataFrame) -> pd.DataFrame:
    """
    Guarantee all canonical columns exist in the DataFrame.
    If missing, add them with empty string defaults.
    """
    for col in COLUMNS:
        if col not in df.columns:
            df[col] = ""
    # Reorder columns to canonical order
    return df[COLUMNS]


def load_dataset(path: str = None) -> pd.DataFrame:
    """
    Load the master CSV into a DataFrame.
    Auto-creates the file if it doesn't exist yet.
    """
    path = path or DATASET_CSV_PATH
    try:
        df = pd.read_csv(path, dtype=str).fillna("")
    except FileNotFoundError:
        df = pd.DataFrame(columns=COLUMNS)
    return _ensure_schema(df)


def save_dataset(df: pd.DataFrame, path: str = None) -> str:
    """
    Save the dataset back to CSV.
    """
    path = path or DATASET_CSV_PATH
    df = _ensure_schema(df)
    df.to_csv(path, index=False)
    return path


def upsert_record(df: pd.DataFrame, rec: StateRecord) -> pd.DataFrame:
    """
    Insert or update the core fields for a given state.
    Matching is case-insensitive on 'State'.
    """
    df = _ensure_schema(df)

    mask = df["State"].str.lower() == rec.state.lower()
    if mask.any():
        # Update existing row
        idx = df[mask].index[0]
        df.at[idx, "State"] = rec.state
        df.at[idx, "Write-in Law"] = rec.write_in_law
        df.at[idx, "Deadline"] = rec.deadline
        df.at[idx, "Form Number / Name"] = rec.form_name
        df.at[idx, "Contact (URL/Phone)"] = rec.contact
    else:
        # Append new row
        new_row = {col: "" for col in COLUMNS}
        new_row.update({
            "State": rec.state,
            "Write-in Law": rec.write_in_law,
            "Deadline": rec.deadline,
            "Form Number / Name": rec.form_name,
            "Contact (URL/Phone)": rec.contact,
        })
        df = pd.concat([df, pd.DataFrame([new_row])], ignore_index=True)

    return _ensure_schema(df)

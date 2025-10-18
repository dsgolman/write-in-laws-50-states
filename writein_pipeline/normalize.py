
"""
Builder helpers to convert partial parsed data into a unified record.
"""
from dataclasses import asdict
from .config import StateRecord

def build_record(state: str, write_in_law: str, deadline: str, form_name: str, contact: str) -> StateRecord:
    return StateRecord(state=state, write_in_law=write_in_law, deadline=deadline, form_name=form_name, contact=contact)

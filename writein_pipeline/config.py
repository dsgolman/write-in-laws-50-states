"""
Central config & constants.
"""
from dataclasses import dataclass

# Use relative path so it works cross-platform (Windows + Linux)
DATASET_CSV_PATH = "./50_state_write_in_master.csv"

# Canonical schema — includes all extended categories
COLUMNS = [
    # Core
    "State", "Write-in Law", "Deadline", "Form Number / Name", "Contact (URL/Phone)",
    # Category 1: Core Legal Status
    "Legal Status", "Last Updated", "Official Source URL", "Statute Citation",
    # Category 2: Deadlines & Actions
    "Filing Deadline", "Filing Method", "Declaration Form Name", "Form URL", "Filing Fee",
    # Category 3: Elector Requirements
    "Elector Slate Required", "Elector Filing Deadline", "Elector Form Name",
    "Number of Electors", "Elector Qualifications",
    # Category 4: Voter-Facing Info
    "Voter Instructions", "Common Pitfalls",
    # Category 5: Campaign Notes
    "Strategy Tier", "Internal Notes", "Status",
]

@dataclass(frozen=True)
class StateRecord:
    state: str
    write_in_law: str = ""
    deadline: str = ""
    form_name: str = ""
    contact: str = ""

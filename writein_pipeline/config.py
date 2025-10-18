
"""
Central config & constants.
"""
from dataclasses import dataclass

DATASET_CSV_PATH = "/mnt/data/50_state_write_in_master.csv"  # change as needed

# canonical schema
COLUMNS = ["State", "Write-in Law", "Deadline", "Form Number / Name", "Contact (URL/Phone)"]

@dataclass(frozen=True)
class StateRecord:
    state: str
    write_in_law: str = ""
    deadline: str = ""
    form_name: str = ""
    contact: str = ""

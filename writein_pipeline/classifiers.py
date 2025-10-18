
"""
State classification logic (Friendly/Bureaucratic/Hostile).
"""
from enum import Enum

class StateClass(Enum):
    FRIENDLY = "friendly"
    BUREAUCRATIC = "bureaucratic"
    HOSTILE = "hostile"
    UNKNOWN = "unknown"

def classify(write_in_law_summary: str) -> StateClass:
    law = write_in_law_summary.lower()
    if "not permitted" in law or "prohibited" in law:
        return StateClass.HOSTILE
    if "must file" in law or "letter of intent" in law or "certificate" in law or "nomination papers" in law:
        return StateClass.BUREAUCRATIC
    if "no declaration required" in law or "automatically counted" in law:
        return StateClass.FRIENDLY
    return StateClass.UNKNOWN

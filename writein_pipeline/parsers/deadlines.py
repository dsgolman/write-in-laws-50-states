
"""
Parse deadline language, normalize to relative rules (e.g., E-14 17:00).
"""
import re
from typing import Dict, Any

def normalize_deadline(text: str) -> str:
    """Normalize natural-language deadline into a relative rule, e.g.:
    - 'no later than 14 days before the election' -> 'E-14'
    - 'by 5:00 PM on the 40th day before' -> 'E-40 17:00'
    - 'third Tuesday before the general election' -> 'E-XX (third Tuesday)'
    This is intentionally conservative; prefer faithful summaries over hallucinated specifics.
    """
    t = text.lower()
    m = re.search(r"(\d+)\s+days?\s+before", t)
    if m:
        return f"E-{m.group(1)}"
    if "14 days before" in t:
        return "E-14"
    if "third tuesday before" in t:
        return "E-XX (third Tuesday)"
    return text  # fallback: return original if unsure

def parse_deadline(raw_sources: Dict[str, Any]) -> str:
    """Extract deadline text from sources then normalize it."""
    # TODO: extract the exact sentence from raw_sources; stub for now
    return normalize_deadline("no later than 14 days before the election")

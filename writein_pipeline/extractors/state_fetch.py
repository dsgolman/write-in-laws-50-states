
"""
Fetch layer (HTTP, PDFs, etc.). Keep pure; no parsing or normalization here.
For now, functions are stubs so we can implement per-state logic later.
"""
from typing import Dict, Any, Optional

def fetch_state_sources(state: str) -> Dict[str, Any]:
    """Return a dict of raw source payloads for a state (HTML, PDFs, etc.).
    In production, this would perform network requests. Here it's a stub.
    """
    return {
        "html_pages": [],   # list of raw HTML strings
        "pdfs": [],         # list of raw bytes
        "notes": f"Stub: add network fetch for {state}"
    }

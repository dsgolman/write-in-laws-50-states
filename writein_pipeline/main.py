
"""
Example pipeline run: builds/updates records for a small batch of states.
Replace stubbed parsers with real implementations gradually.
"""
from writein_pipeline.extractors.state_fetch import fetch_state_sources
from writein_pipeline.parsers.statutes import parse_write_in_rules
from writein_pipeline.parsers.deadlines import parse_deadline
from writein_pipeline.normalize import build_record
from writein_pipeline.io_utils import load_dataset, upsert_record, save_dataset

SEED_STATES = ["California", "Virginia"]

def build_for_state(state: str):
    raw = fetch_state_sources(state)
    law = parse_write_in_rules(raw).get("write_in_law", "")
    deadline = parse_deadline(raw)
    # TODO: add form_name, contact extraction as parsers mature
    form_name = "TODO: form name/number"
    contact = "TODO: elections URL/phone"
    return build_record(state, law, deadline, form_name, contact)

def run(path=None):
    df = load_dataset(path)
    for s in SEED_STATES:
        rec = build_for_state(s)
        df = upsert_record(df, rec)
    out = save_dataset(df, path)
    print(f"Saved updated dataset to: {out}")

if __name__ == '__main__':
    run()

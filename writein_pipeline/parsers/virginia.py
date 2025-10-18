# writein_pipeline/parsers/virginia.py
from datetime import date

def get_record():
    """Return a dict for Virginia with conservative, verifiable placeholders.
    Replace any TBD URLs or language after you verify on elections.virginia.gov.
    """
    today = date.today().isoformat()
    return {
        # Core row
        "State": "Virginia",
        "Write-in Law": "Write-in votes permitted. Presidential write-ins require candidate declaration (SBE-506) and slate of electors.",
        "Deadline": "Second Friday in June (election year) — confirm cutoff time",
        "Form Number / Name": "Declaration of Write-In Candidacy (SBE-506)",
        "Contact (URL/Phone)": "Virginia Dept. of Elections — https://www.elections.virginia.gov/",

        # Category 1
        "Legal Status": "PRE_REGISTRATION_REQUIRED",
        "Last Updated": today,
        "Official Source URL": "https://www.elections.virginia.gov/",
        "Statute Citation": "Va. Code § 24.2-644",

        # Category 2
        "Filing Deadline": "Second Friday in June (election year); verify exact 5:00 PM cutoff",
        "Filing Method": "File with Virginia Department of Elections (in-person/mail/portal — verify)",
        "Declaration Form Name": "Declaration of Write-In Candidacy (SBE-506)",
        "Form URL": "",  # TODO: insert direct PDF link after confirmation
        "Filing Fee": "$0",

        # Category 3
        "Elector Slate Required": "Yes",
        "Elector Filing Deadline": "Same as write-in deadline",
        "Elector Form Name": "Statement of Qualified Write-In Candidate (electors) — verify exact title",
        "Number of Electors": "13",
        "Elector Qualifications": "Electors must be eligible VA voters; cannot be federal officeholders (verify source note)",

        # Category 4
        "Voter Instructions": "Write candidate’s name on the write-in line and fill the oval.",
        "Common Pitfalls": "Misspelling without clear voter intent; not filling the oval; unclear name variants.",

        # Category 5
        "Strategy Tier": "BEACHHEAD",
        "Internal Notes": "Add direct SBE-506 PDF URL; confirm exact deadline time and accepted filing methods.",
        "Status": "RESEARCH_PENDING",
    }

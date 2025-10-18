# writein_pipeline/parsers/virginia.py
from datetime import date

def get_record():
    """Return a dict for Virginia with verified information from research.
    Updated with accurate write-in law details and direct form URLs.
    """
    today = date.today().isoformat()
    return {
        # Core row
        "State": "Virginia",
        "Write-in Law": "Write-in candidates for all offices except President are NOT required to file any ballot access documents. Presidential write-ins require joint declaration and elector slate.",
        "Deadline": "No deadline for non-presidential offices; Presidential: 10+ days before election",
        "Form Number / Name": "ELECT-644 Joint Declaration (Presidential only)",
        "Contact (URL/Phone)": "Virginia Dept. of Elections — https://www.elections.virginia.gov/",

        # Category 1
        "Legal Status": "NO_REGISTRATION",
        "Last Updated": today,
        "Official Source URL": "https://www.elections.virginia.gov/candidatepac-info/becoming-a-candidate/index.html",
        "Statute Citation": "Virginia Code § 24.2-644",

        # Category 2
        "Filing Deadline": "No filing deadline (no ballot access documents required for non-presidential write-ins)",
        "Filing Method": "Not applicable for non-presidential offices",
        "Declaration Form Name": "SBE-506/521 Petition of Qualified Voters (only required for ballot-listed candidates)",
        "Form URL": "https://www.elections.virginia.gov/media/formswarehouse/ballot-access-candidate-qualification/sbe-506-521-petition-of-qualified-voters/ELECT-506-521-Petition-of-Qualified-Voters-letter-size-(rev-5-8-24).pdf",
        "Filing Fee": "None required for write-in candidates",

        # Category 3
        "Elector Slate Required": "Yes, for presidential write-in candidates only",
        "Elector Filing Deadline": "Not less than 10 days before the presidential election",
        "Elector Form Name": "ELECT-644 Joint Declaration of Intent to be Write-in Candidates for President and Vice President",
        "Number of Electors": "13",
        "Elector Qualifications": "Must be qualified Virginia voters",

        # Category 4
        "Voter Instructions": "Write or hand print the candidate's name on the official ballot. No check mark or other mark is required for a valid write-in vote.",
        "Common Pitfalls": "Write-in votes will not be counted if the person's name already appears on the ballot as a candidate for that office. Must comply with campaign finance requirements even though no ballot access filing is required.",

        # Category 5
        "Strategy Tier": "TIER_1_EXCELLENT",
        "Internal Notes": "Virginia has one of the most permissive write-in laws in the country. No advance filing, no petitions, no fees required for any office except President. Only requirement is campaign finance compliance.",
        "Status": "COMPLETE",
    }

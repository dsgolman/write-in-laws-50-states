"""
New Jersey Write-In Candidate Laws Parser

Based on research conducted on New Jersey's write-in candidate requirements.
New Jersey is classified as a Tier 1 state due to:
- Full legality of write-in candidates
- No registration or filing requirements
- No deadlines for write-in candidates
- Simple ballot access process
- Clear legal framework under Title 19

Legal References:
- Title 19 of New Jersey Revised Statutes (Election Law)
- Ballotpedia confirmation of no registration requirements
- NJ Division of Elections guidance
"""

from datetime import date

def get_record():
    """
    Returns New Jersey write-in candidate information in CSV-compatible format.
    
    All information verified through research of New Jersey election laws,
    Ballotpedia, and official state sources.
    """
    return {
        # Core fields
        "State": "New Jersey",
        "Write-in Law": "Write-in candidates are fully legal with no registration requirements. Votes counted exactly as written by voter. Simple ballot access process under Title 19.",
        "Deadline": "No filing deadline (write-in candidates do not need to file)",
        "Form Number / Name": "Not applicable",
        "Contact (URL/Phone)": "NJ Division of Elections: https://www.njelections.org/candidate-information.html • (609) 292-3760",
        
        # Category 1: Core Legal Status
        "Legal Status": "NO_REGISTRATION",
        "Last Updated": str(date.today()),
        "Official Source URL": "https://www.njelections.org/candidate-information.html",
        "Statute Citation": "Title 19 of New Jersey Revised Statutes (Election Law)",
        
        # Category 2: Critical Deadlines & Actions
        "Filing Deadline": "No filing deadline (write-in candidates do not need to file)",
        "Filing Method": "Not applicable",
        "Declaration Form Name": "Not applicable",
        "Form URL": "Not applicable",
        "Filing Fee": "Not applicable",
        
        # Category 3: Elector Requirements (Presidential)
        "Elector Slate Required": "Yes, for presidential candidates",
        "Elector Filing Deadline": "No specific deadline for write-in electors",
        "Elector Form Name": "Presidential Elector Information",
        "Number of Electors": "14 electors (based on congressional delegation)",
        "Elector Qualifications": "Must be qualified New Jersey voters",
        
        # Category 4: Voter-Facing Information
        "Voter Instructions": "Write candidate name clearly in designated write-in space. Use full name of candidate. Ensure legible handwriting for proper vote counting.",
        "Common Pitfalls": "Not writing name clearly or completely; Misspelling candidate name; Writing in wrong location on ballot; Using abbreviations instead of full names; Not educating voters on proper write-in procedures",
        
        # Category 5: Campaign Notes & Strategy
        "Strategy Tier": "TIER_1",
        "Internal Notes": "No registration or filing requirements; No deadlines to miss; Simple ballot access process under Title 19; Votes counted exactly as written by voter; Clear legal framework allowing write-ins; Excellent beachhead state for write-in candidates due to minimal barriers and straightforward process",
        "Status": "COMPLETE",
    }
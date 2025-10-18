"""Pennsylvania Write-In Candidate Laws Parser

Based on research conducted on Pennsylvania's write-in candidate requirements.
Pennsylvania is classified as a Tier 1 state due to:
- Full legality of write-in candidates
- No registration or filing requirements
- No deadlines for write-in candidates
- Vote cumulation allowed for similar names
- High campaign finance threshold ($250)

Legal References:
- 25 P.S. § 3155, § 3156, § 3157 (Pennsylvania Election Code)
- Ballotpedia confirmation of no registration requirements
- PA Department of State guidance
"""

from datetime import date

def get_record():
    """
    Returns Pennsylvania write-in candidate information in CSV-compatible format.
    
    All information verified through research of Pennsylvania election laws,
    Ballotpedia, and official state sources.
    """
    return {
        # Core fields
        "State": "Pennsylvania",
        "Write-in Law": "Write-in candidates are fully legal with no registration requirements. Votes counted exactly as written by voter. Vote cumulation allowed for similar names (25 P.S. § 3156/3157).",
        "Deadline": "No filing deadline (write-in candidates do not need to file)",
        "Form Number / Name": "Not applicable",
        "Contact (URL/Phone)": "Pennsylvania Department of State: https://www.dos.pa.gov/VotingElections/Pages/default.aspx • (717) 787-5280",
        
        # Category 1: Core Legal Status
        "Legal Status": "NO_REGISTRATION",
        "Last Updated": str(date.today()),
        "Official Source URL": "https://www.dos.pa.gov/VotingElections/Pages/default.aspx",
        "Statute Citation": "25 P.S. § 3155, § 3156, § 3157 (Pennsylvania Election Code)",
        
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
        "Number of Electors": "20 electors (based on congressional delegation)",
        "Elector Qualifications": "Must be qualified Pennsylvania voters",
        
        # Category 4: Voter-Facing Information
        "Voter Instructions": "Write candidate name in designated write-in space. Candidates must provide cards with name clearly printed; stickers prohibited.",
        "Common Pitfalls": "Using stickers (prohibited); Not writing name clearly; Writing in wrong location on ballot; Failing to provide candidate information cards to voters; Not ensuring consistent name format across all materials",
        
        # Category 5: Campaign Notes & Strategy
        "Strategy Tier": "TIER_1",
        "Internal Notes": "No registration or filing requirements; No deadlines to miss; Vote cumulation allowed for similar names (25 P.S. § 3156/3157); Campaign finance reporting required only if expenditures exceed $250; Must provide candidate cards to voters; Stickers prohibited; Votes counted exactly as written; Excellent beachhead state for write-in candidates due to minimal barriers",
        "Status": "COMPLETE",
    }
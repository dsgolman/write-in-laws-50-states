<# 
Scaffold 51 state/district dossiers and an issue template.
Run from the repo root in Windows PowerShell.
#>

$ErrorActionPreference = "Stop"

# Ensure folders exist
New-Item -ItemType Directory -Force -Path data\states | Out-Null
New-Item -ItemType Directory -Force -Path assets\states | Out-Null
New-Item -ItemType Directory -Force -Path .github\ISSUE_TEMPLATE | Out-Null

# List of states
$states = @(
"Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia",
"Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland",
"Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey",
"New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina",
"South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming","District of Columbia"
)

# Slugify helper
function To-Slug([string]$s){
  $t = $s.ToLower() -replace '[^a-z0-9 ]',''
  $t -replace '\s+','-'
}

$today = Get-Date -Format 'yyyy-MM-dd'

# Template block as an array of lines
$template = @"
# {{STATE}} — Write-In Law Dossier

_Last updated: {{DATE}}_

## Category 1: Core Legal Status
- **State:** {{STATE}}
- **Legal Status:**  
- **Official Source URL:** 
- **Statute Citation:** 

## Category 2: Critical Deadlines & Actions
- **Filing Deadline:** 
- **Filing Method:** 
- **Declaration Form Name:** 
- **Form URL:** 
- **Filing Fee:** 

## Category 3: Elector Requirements (Presidential)
- **Elector Slate Required:** 
- **Elector Filing Deadline:** 
- **Elector Form Name:** 
- **Number of Electors:** 
- **Elector Qualifications:** 

## Category 4: Voter-Facing Information
- **Voter Instructions:** 
- **Common Pitfalls:** 

## Category 5: Campaign Notes & Strategy
- **Strategy Tier:** 
- **Status:** 
- **Internal Notes:** 
"@ -split "`n"

# Create files
foreach($state in $states){
  $slug = To-Slug $state
  $dest = "data/states/$slug.md"
  New-Item -ItemType Directory -Force -Path "assets/states/$slug" | Out-Null
  $content = $template | ForEach-Object {
    $_ -replace "{{STATE}}",$state -replace "{{DATE}}",$today -replace "{{SLUG}}",$slug
  }
  Set-Content -Path $dest -Value $content -Encoding UTF8
  Write-Host "✅ Created $dest"
}

# Issue template
$issue = @"
---
name: "State Intake"
about: Collect and verify write-in law data for a state
title: "State Intake — <STATE NAME>"
labels: ["state-intake", "research"]
---

Checklist for <STATE NAME>:

- [ ] Official Source URL
- [ ] Statute Citation
- [ ] Filing Deadline
- [ ] Filing Method
- [ ] Declaration Form
- [ ] Elector Requirements
- [ ] Voter Instructions
- [ ] Strategy Tier
- [ ] Status
"@

Set-Content -Path ".github/ISSUE_TEMPLATE/state-intake.md" -Value $issue -Encoding UTF8
Write-Host "✅ Created .github/ISSUE_TEMPLATE/state-intake.md"

# Commit
git add data/states .github/ISSUE_TEMPLATE
git commit -m "Scaffold 51 state/district dossiers and intake template"
git push

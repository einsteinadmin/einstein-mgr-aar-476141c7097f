const PRELOAD = {
  "meta": {
    "quarter": "Q2 2026",
    "source": "Q2 2026 Cascading Team Goals — Clean Draft sheet (1CEwbltgyvNbpl5_1pVsWL70qaCMGgDE9Jk7RGm1eAsM), tabs 'Manager Rocks and Targets' + 'Copy of Position KPIs and Critical Numbers'",
    "extractedAt": "2026-07-21",
    "extractedBy": "sonnet-agent",
    "notes": [
      "Sanitized deploy copy: branch financial context + internal data-lineage notes stripped. Canonical (full) copy lives in the EMC workspace."
    ]
  },
  "positions": {
    "BM": {
      "templateGoals": [
        {
          "num": 1,
          "rock": "Einstein Games - Overall Score Accountability",
          "superGreen": "Branch Average total score is 8 or higher",
          "green": "Branch Average total score is 7 or higher",
          "red": "Branch Average total score is less than 7",
          "critical": true
        },
        {
          "num": 2,
          "rock": "Hiring Targets",
          "superGreen": "[BRANCH CODE] branch avg 100%+staffing for qtr, People Analyzer reviewed, C players cleared/have action plans, eNPS cleared by end of May",
          "green": "[BRANCH CODE] branch avg 100%+staffing for qtr, People Analyzer reviewed, C players cleared/have action plans, eNPS cleared by end of June",
          "red": "[BRANCH CODE] averaging 95% or less personnel for qrt, eNPS board not cleared.",
          "critical": true
        },
        {
          "num": 3,
          "rock": "Branch and Individual Sales Goals/Estimate Accuracy",
          "superGreen": "All managers at branch average 110% to goal with an average conversion rate at or greater than company average",
          "green": "All managers at branch average 100% to goal with an average conversion rate at or greater than company average",
          "red": "All managers at branch averave less than 100% to goal with an average conversion rate at or greater than company average",
          "critical": false
        },
        {
          "num": 4,
          "rock": "People Analyzer or Flex Personal Goal",
          "superGreen": "Less than 5% C Players by EOQ, eNPS Board Cleared by end of May",
          "green": "Less than 10% C Players by EOQ, eNPS Board Cleared by end of June",
          "red": "More than 10% C Players at EOQ, NPS Board Cleared by June",
          "critical": false
        },
        {
          "num": 5,
          "rock": "Scrum Accountability",
          "superGreen": "SCRUM score card average 90+ starting June/July, minimum 5 score cards",
          "green": "SCRUM score card average 80+ starting June/July, minimum 5 score cards",
          "red": "SCRUM score card average less than 80 starting June/July, minimum 5 score cards.",
          "critical": false
        }
      ],
      "variants": {
        "garland": "Goal #2 (Hiring Targets) drops the People Analyzer/C-players/eNPS clause — sheet shows a shorter version for Garland only ('GAR branch avg 100%+staffing for qtr' / 'GAR averaging 95% or less personnel for qrt', no eNPS/People Analyzer language). Verbatim text lives on Jack Davis's own goals array."
      }
    },
    "OPs": {
      "templateGoals": [
        {
          "num": 1,
          "rock": "Einstein Games - Samsara Focus",
          "superGreen": "Branch Average Score for Samsara and Damages (If no FM) is a 8 or higher",
          "green": "Branch Average Score for Samsara and Damages (If no FM) is a 7 or higher",
          "red": "Branch Average Score for Samsara and Damages (If no FM) is less than 7",
          "critical": true
        },
        {
          "num": 2,
          "rock": "Individual Sales Goal, Improve Estimate Accuracy",
          "superGreen": "Reach 105% and at or above company average $ conv rate",
          "green": "Reach 100% and at or above company average $ conv rate",
          "red": "Below 100% or below company average $ conv",
          "critical": true
        },
        {
          "num": 3,
          "rock": "Driver Safety Coaching/Retraining",
          "superGreen": "90% or better coachings issued and retraining completed",
          "green": "80% or better coachings issued and retraining completed",
          "red": "Less than 80% coachings issued and retraining completed",
          "critical": false
        },
        {
          "num": 4,
          "rock": "Praise Goal",
          "superGreen": "≥ 48 Praise (4 per week)",
          "green": "≥ 36 Praise (3 per week)",
          "red": "< 36 Praise",
          "critical": false
        }
      ],
      "variants": {
        "wording": "Goal #1 name varies: branches WITH a named FM in the sheet (North Austin, South Austin, San Antonio, Houston, Dallas) use 'Einstein Games - Samsara Focus'; branches without a live FM goal block (Leander, Fort Worth, McKinney, Tampa) use 'Einstein Games - Samsara Focus + Damages'. Verbatim wording preserved per-person."
      }
    },
    "FM": {
      "templateGoals": [
        {
          "num": 1,
          "rock": "Einstein Games - Damages",
          "superGreen": "Branch Damage score of 8+",
          "green": "Branch Damage score of 7+",
          "red": "Branch Damage score of less than 7",
          "critical": true
        },
        {
          "num": 2,
          "rock": "FM SuperBoard Mgmt",
          "superGreen": "75 points logged on the super board (Onsite evals, Trial Days, OB Field Training, Flight Tests, Driver Trainings each count as 1 point toward goal)",
          "green": "50 points logged on the super board (Onsite evals, Trial Days, OB Field Training, Flight Tests, Driver Trainings each count as 1 point toward goal)",
          "red": "Less than 50 points logged",
          "critical": true
        },
        {
          "num": 3,
          "rock": "Individual Sales Goal, Improve Estimate Accuracy",
          "superGreen": "Reach 105% and at or above company average $ conv rate",
          "green": "Reach 100% and at or above company average $ conv rate",
          "red": "Below 100% or below company average $ conv",
          "critical": false
        },
        {
          "num": 4,
          "rock": "Praise Goal",
          "superGreen": "≥ 48 Praise (4 per week)",
          "green": "≥ 36 Praise (3 per week)",
          "red": "< 36 Praise",
          "critical": false
        }
      ],
      "variants": {}
    },
    "Flex": {
      "templateGoals": [
        {
          "num": 1,
          "rock": "Choose your own adventure",
          "superGreen": "TBD",
          "green": "TBD",
          "red": "TBD",
          "critical": true
        },
        {
          "num": 2,
          "rock": "Individual Sales Goal, Improve Estimate Accuracy",
          "superGreen": "Reach 105% and at or above company average $ conv rate",
          "green": "Reach 100% and at or above company average $ conv rate",
          "red": "Below 100% or below company average $ conv",
          "critical": true
        },
        {
          "num": 3,
          "rock": "Einstein Games - Overall Branch Accountability Assist",
          "superGreen": "Branch overall score of 8+",
          "green": "Branch overall score of 7+",
          "red": "Branch overall score of less than 7",
          "critical": false
        },
        {
          "num": 4,
          "rock": "(Flex Personal Goal?)",
          "superGreen": "TBD",
          "green": "TBD",
          "red": "TBD",
          "critical": false
        }
      ],
      "variants": {
        "coverage": "Only South Austin (Jespah Lara) has a populated Flex goal block in the sheet. Other branches show an empty 'Flex' row (header only, no name, no rocks) — not included as people entries per extraction scope decision (see log)."
      }
    }
  },
  "kpis": {
    "BM": [
      {
        "name": "TUR",
        "target": null,
        "locked": true,
        "notes": "Leadership-tracked — you don't have visibility into this one yet, so it's grayed out for now."
      },
      {
        "name": "Profit/Truck",
        "target": null,
        "locked": true,
        "notes": "Leadership-tracked — you don't have visibility into this one yet, so it's grayed out for now."
      },
      {
        "name": "NPS",
        "target": ">90%",
        "notes": ""
      },
      {
        "name": "Praise",
        "target": "4 per week (48 total)",
        "notes": ""
      },
      {
        "name": "Critical Number 1",
        "target": "EMC Games",
        "notes": "BM/EXP column."
      },
      {
        "name": "Critical Number 2",
        "target": "Hiring Targets",
        "notes": "BM/EXP column."
      }
    ],
    "OPs": [
      {
        "name": "Sales",
        "target": "100%",
        "notes": "OPS column."
      },
      {
        "name": "Fleet Costs %",
        "target": "TBD",
        "notes": ""
      },
      {
        "name": "Driver Scores",
        "target": ">90",
        "notes": ""
      },
      {
        "name": "Praise",
        "target": "3 per week (36 total)",
        "notes": ""
      },
      {
        "name": "Critical Number 1",
        "target": "EMC Games",
        "notes": "OPS column."
      },
      {
        "name": "Critical Number 2",
        "target": "Sales",
        "notes": "OPS column."
      }
    ],
    "FM": [
      {
        "name": "Damages/hour",
        "target": "< $1.23/hr",
        "notes": "FM column."
      },
      {
        "name": "Onsites %",
        "target": "90%",
        "notes": ""
      },
      {
        "name": "Onsites Conducted",
        "target": "75",
        "notes": ""
      },
      {
        "name": "Praise",
        "target": "3 per week (36 total)",
        "notes": ""
      },
      {
        "name": "Critical Number 1",
        "target": "EMC Games",
        "notes": "FM column."
      },
      {
        "name": "Critical Number 2",
        "target": "Evals",
        "notes": "FM column."
      }
    ],
    "Flex": [
      {
        "name": "Sales",
        "target": "100%",
        "notes": "FLEX column."
      },
      {
        "name": "Praise",
        "target": "3 per week (36 total)",
        "notes": ""
      },
      {
        "name": "Critical Number 1",
        "target": "Drivers Ed",
        "notes": "FLEX column."
      },
      {
        "name": "Critical Number 2",
        "target": "Sales",
        "notes": "FLEX column."
      }
    ]
  },
  "people": [
    {
      "id": "calvin-hughes",
      "name": "Calvin Hughes",
      "position": "BM",
      "branch": "North Austin",
      "region": "CTXH",
      "regional": "Brian Herzig",
      "goals": [
        {
          "num": 1,
          "rock": "Einstein Games - Overall Score Accountability",
          "superGreen": "Branch Average total score is 8 or higher",
          "green": "Branch Average total score is 7 or higher",
          "red": "Branch Average total score is less than 7",
          "critical": true
        },
        {
          "num": 2,
          "rock": "Hiring Targets",
          "superGreen": "NA branch avg 100%+staffing for qtr, People Analyzer reviewed, C players cleared/have action plans, eNPS cleared by end of May",
          "green": "NA branch avg 100%+staffing for qtr, People Analyzer reviewed, C players cleared/have action plans, eNPS cleared by end of June",
          "red": "NA averaging 95% or less personnel for qrt, eNPS board not cleared.",
          "critical": true
        },
        {
          "num": 3,
          "rock": "Branch and Individual Sales Goals/Estimate Accuracy",
          "superGreen": "All managers at branch average 110% to goal with an average conversion rate at or greater than company average",
          "green": "All managers at branch average 100% to goal with an average conversion rate at or greater than company average",
          "red": "All managers at branch averave less than 100% to goal with an average conversion rate at or greater than company average",
          "critical": false
        },
        {
          "num": 4,
          "rock": "People Analyzer or Flex Personal Goal",
          "superGreen": "Less than 5% C Players by EOQ, eNPS Board Cleared by end of May",
          "green": "Less than 10% C Players by EOQ, eNPS Board Cleared by end of June",
          "red": "More than 10% C Players at EOQ, NPS Board Cleared by June",
          "critical": false
        },
        {
          "num": 5,
          "rock": "Scrum Accountability",
          "superGreen": "SCRUM score card average 90+ starting June/July, minimum 5 score cards",
          "green": "SCRUM score card average 80+ starting June/July, minimum 5 score cards",
          "red": "SCRUM score card average less than 80 starting June/July, minimum 5 score cards.",
          "critical": false
        }
      ],
      "kpiActuals": null
    },
    {
      "id": "nick-dagel",
      "name": "Nick Dagel",
      "position": "OPs",
      "branch": "North Austin",
      "region": "CTXH",
      "regional": "Brian Herzig",
      "goals": [
        {
          "num": 1,
          "rock": "Einstein Games - Samsara Focus",
          "superGreen": "Branch Average Score for Samsara and Damages (If no FM) is a 8 or higher",
          "green": "Branch Average Score for Samsara and Damages (If no FM) is a 7 or higher",
          "red": "Branch Average Score for Samsara and Damages (If no FM) is less than 7",
          "critical": true
        },
        {
          "num": 2,
          "rock": "Individual Sales Goal, Improve Estimate Accuracy",
          "superGreen": "Reach 105% and at or above company average $ conv rate",
          "green": "Reach 100% and at or above company average $ conv rate",
          "red": "Below 100% or below company average $ conv",
          "critical": true
        },
        {
          "num": 3,
          "rock": "Driver Safety Coaching/Retraining",
          "superGreen": "90% or better coachings issued and retraining completed",
          "green": "80% or better coachings issued and retraining completed",
          "red": "Less than 80%, outstanding coachings/retraining.",
          "critical": false
        },
        {
          "num": 4,
          "rock": "Praise Goal",
          "superGreen": "≥ 48 Praise (4 per week)",
          "green": "≥ 36 Praise (3 per week)",
          "red": "< 36 Praise",
          "critical": false
        }
      ],
      "kpiActuals": null
    },
    {
      "id": "rance-pope",
      "name": "Rance Pope",
      "position": "FM",
      "branch": "North Austin",
      "region": "CTXH",
      "regional": "Brian Herzig",
      "goals": [
        {
          "num": 1,
          "rock": "Einstein Games - Damages",
          "superGreen": "Branch Damage score of 8+",
          "green": "Branch Damage score of 7+",
          "red": "Branch Damage score of less than 7",
          "critical": true
        },
        {
          "num": 2,
          "rock": "FM SuperBoard Mgmt",
          "superGreen": "75 points logged on the super board (Onsite evals, Trial Days, OB Field Training, Flight Tests, Driver Trainings each count as 1 point toward goal)",
          "green": "50 points logged on the super board (Onsite evals, Trial Days, OB Field Training, Flight Tests, Driver Trainings each count as 1 point toward goal)",
          "red": "Less than 50 points logged",
          "critical": true
        },
        {
          "num": 3,
          "rock": "Individual Sales Goal, Improve Estimate Accuracy",
          "superGreen": "Reach 105% and at or above company average $ conv rate",
          "green": "Reach 100% and at or above company average $ conv rate",
          "red": "Below 100% or below company average $ conv",
          "critical": false
        },
        {
          "num": 4,
          "rock": "Praise Goal",
          "superGreen": "≥ 48 Praise (4 per week)",
          "green": "≥ 36 Praise (3 per week)",
          "red": "< 36 Praise",
          "critical": false
        }
      ],
      "kpiActuals": null
    },
    {
      "id": "chris-anderson",
      "name": "Chris Anderson",
      "position": "BM",
      "branch": "South Austin",
      "region": "CTXH",
      "regional": "Brian Herzig",
      "goals": [
        {
          "num": 1,
          "rock": "Einstein Games - Overall Score Accountability",
          "superGreen": "Branch Average total score is 8 or higher",
          "green": "Branch Average total score is 7 or higher",
          "red": "Branch Average total score is less than 7",
          "critical": true
        },
        {
          "num": 2,
          "rock": "Hiring Targets",
          "superGreen": "SA branch avg 100%+staffing for qtr, People Analyzer reviewed, C players cleared/have action plans, eNPS cleared by end of May",
          "green": "SA branch avg 100%+staffing for qtr, People Analyzer reviewed, C players cleared/have action plans, eNPS cleared by end of June",
          "red": "SA averaging 95% or less personnel for qrt, eNPS board not cleared.",
          "critical": true
        },
        {
          "num": 3,
          "rock": "Branch and Individual Sales Goals/Estimate Accuracy",
          "superGreen": "All managers at branch average 110% to goal with an average conversion rate at or greater than company average",
          "green": "All managers at branch average 100% to goal with an average conversion rate at or greater than company average",
          "red": "All managers at branch averave less than 100% to goal with an average conversion rate at or greater than company average",
          "critical": false
        },
        {
          "num": 4,
          "rock": "People Analyzer or Flex Personal Goal",
          "superGreen": "Less than 5% C Players by EOQ, eNPS Board Cleared by end of May",
          "green": "Less than 10% C Players by EOQ, eNPS Board Cleared by end of June",
          "red": "More than 10% C Players at EOQ, NPS Board Cleared by June",
          "critical": false
        },
        {
          "num": 5,
          "rock": "Scrum Accountability",
          "superGreen": "SCRUM score card average 90+ starting June/July, minimum 5 score cards",
          "green": "SCRUM score card average 80+ starting June/July, minimum 5 score cards",
          "red": "SCRUM score card average less than 80 starting June/July, minimum 5 score cards.",
          "critical": false
        }
      ],
      "kpiActuals": null
    },
    {
      "id": "daniel-behseresht",
      "name": "Daniel Behseresht",
      "position": "OPs",
      "branch": "South Austin",
      "region": "CTXH",
      "regional": "Brian Herzig",
      "goals": [
        {
          "num": 1,
          "rock": "Einstein Games - Samsara Focus",
          "superGreen": "Branch Average Score for Samsara and Damages (If no FM) is a 8 or higher",
          "green": "Branch Average Score for Samsara and Damages (If no FM) is a 7 or higher",
          "red": "Branch Average Score for Samsara and Damages (If no FM) is less than 7",
          "critical": true
        },
        {
          "num": 2,
          "rock": "Individual Sales Goal, Improve Estimate Accuracy",
          "superGreen": "Reach 105% and at or above company average $ conv rate",
          "green": "Reach 100% and at or above company average $ conv rate",
          "red": "Below 100% or below company average $ conv",
          "critical": true
        },
        {
          "num": 3,
          "rock": "Driver Safety Coaching/Retraining",
          "superGreen": "90% or better coachings issued and retraining completed",
          "green": "80% or better coachings issued and retraining completed",
          "red": "Less than 80% coachings issued and retraining completed",
          "critical": false
        },
        {
          "num": 4,
          "rock": "Praise Goal",
          "superGreen": "≥ 48 Praise (4 per week)",
          "green": "≥ 36 Praise (3 per week)",
          "red": "< 36 Praise",
          "critical": false
        }
      ],
      "kpiActuals": null
    },
    {
      "id": "hector-zavala",
      "name": "Hector Zavala",
      "position": "FM",
      "branch": "South Austin",
      "region": "CTXH",
      "regional": "Brian Herzig",
      "goals": [
        {
          "num": 1,
          "rock": "Einstein Games - Damages",
          "superGreen": "Branch Damage score of 8+",
          "green": "Branch Damage score of 7+",
          "red": "Branch Damage score of less than 7",
          "critical": true
        },
        {
          "num": 2,
          "rock": "FM SuperBoard Mgmt",
          "superGreen": "75 points logged on the super board (Onsite evals, Trial Days, OB Field Training, Flight Tests, Driver Trainings each count as 1 point toward goal)",
          "green": "50 points logged on the super board (Onsite evals, Trial Days, OB Field Training, Flight Tests, Driver Trainings each count as 1 point toward goal)",
          "red": "Less than 50 points logged",
          "critical": true
        },
        {
          "num": 3,
          "rock": "Individual Sales Goal, Improve Estimate Accuracy",
          "superGreen": "Reach 105% and at or above company average $ conv rate",
          "green": "Reach 100% and at or above company average $ conv rate",
          "red": "Below 100% or below company average $ conv",
          "critical": false
        },
        {
          "num": 4,
          "rock": "Praise Goal",
          "superGreen": "≥ 48 Praise (4 per week)",
          "green": "≥ 36 Praise (3 per week)",
          "red": "< 36 Praise",
          "critical": false
        }
      ],
      "kpiActuals": null
    },
    {
      "id": "jespah-lara",
      "name": "Jespah Lara",
      "position": "Flex",
      "branch": "South Austin",
      "region": "CTXH",
      "regional": "Brian Herzig",
      "goals": [
        {
          "num": 1,
          "rock": "Choose your own adventure",
          "superGreen": "TBD",
          "green": "TBD",
          "red": "TBD",
          "critical": true
        },
        {
          "num": 2,
          "rock": "Individual Sales Goal, Improve Estimate Accuracy",
          "superGreen": "Reach 105% and at or above company average $ conv rate",
          "green": "Reach 100% and at or above company average $ conv rate",
          "red": "Below 100% or below company average $ conv",
          "critical": true
        },
        {
          "num": 3,
          "rock": "Einstein Games - Overall Branch Accountability Assist",
          "superGreen": "Branch overall score of 8+",
          "green": "Branch overall score of 7+",
          "red": "Branch overall score of less than 7",
          "critical": false
        },
        {
          "num": 4,
          "rock": "(Flex Personal Goal?)",
          "superGreen": "TBD",
          "green": "TBD",
          "red": "TBD",
          "critical": false
        }
      ],
      "kpiActuals": null
    },
    {
      "id": "frank-williams",
      "name": "Frank Williams",
      "position": "BM",
      "branch": "Leander",
      "region": "CTXH",
      "regional": "Brian Herzig",
      "goals": [
        {
          "num": 1,
          "rock": "Einstein Games - Overall Score Accountability",
          "superGreen": "Branch Average total score is 8 or higher",
          "green": "Branch Average total score is 7 or higher",
          "red": "Branch Average total score is less than 7",
          "critical": true
        },
        {
          "num": 2,
          "rock": "Hiring Targets",
          "superGreen": "LEA branch avg 100%+staffing for qtr, People Analyzer reviewed, C players cleared/have action plans, eNPS cleared by end of May",
          "green": "LEA branch avg 100%+staffing for qtr, People Analyzer reviewed, C players cleared/have action plans, eNPS cleared by end of June",
          "red": "LEA averaging 95% or less personnel for qrt, eNPS board not cleared.",
          "critical": true
        },
        {
          "num": 3,
          "rock": "Branch and Individual Sales Goals/Estimate Accuracy",
          "superGreen": "All managers at branch average 110% to goal with an average conversion rate at or greater than company average",
          "green": "All managers at branch average 100% to goal with an average conversion rate at or greater than company average",
          "red": "All managers at branch averave less than 100% to goal with an average conversion rate at or greater than company average",
          "critical": false
        },
        {
          "num": 4,
          "rock": "People Analyzer or Flex Personal Goal",
          "superGreen": "Less than 5% C Players by EOQ, eNPS Board Cleared by end of May",
          "green": "Less than 10% C Players by EOQ, eNPS Board Cleared by end of June",
          "red": "More than 10% C Players at EOQ, NPS Board Cleared by June",
          "critical": false
        },
        {
          "num": 5,
          "rock": "Scrum Accountability",
          "superGreen": "SCRUM score card average 90+ starting June/July, minimum 5 score cards",
          "green": "SCRUM score card average 80+ starting June/July, minimum 5 score cards",
          "red": "SCRUM score card average less than 80 starting June/July, minimum 5 score cards.",
          "critical": false
        }
      ],
      "kpiActuals": null
    },
    {
      "id": "garrison-cobe",
      "name": "Garrison Cobe",
      "position": "OPs",
      "branch": "Leander",
      "region": "CTXH",
      "regional": "Brian Herzig",
      "goals": [
        {
          "num": 1,
          "rock": "Einstein Games - Samsara Focus + Damages",
          "superGreen": "Branch Average Score for Samsara and Damages (If no FM) is a 8 or higher",
          "green": "Branch Average Score for Samsara and Damages (If no FM) is a 7 or higher",
          "red": "Branch Average Score for Samsara and Damages (If no FM) is less than 7",
          "critical": true
        },
        {
          "num": 2,
          "rock": "Individual Sales Goal, Improve Estimate Accuracy",
          "superGreen": "Reach 105% and at or above company average $ conv rate",
          "green": "Reach 100% and at or above company average $ conv rate",
          "red": "Below 100% or below company average $ conv",
          "critical": true
        },
        {
          "num": 3,
          "rock": "Driver Safety Coaching/Retraining",
          "superGreen": "90% or better coachings issued and retraining completed",
          "green": "80% or better coachings issued and retraining completed",
          "red": "Less than 80% coachings issued and retraining completed",
          "critical": false
        },
        {
          "num": 4,
          "rock": "Praise Goal",
          "superGreen": "≥ 48 Praise (4 per week)",
          "green": "≥ 36 Praise (3 per week)",
          "red": "< 36 Praise",
          "critical": false
        }
      ],
      "kpiActuals": null
    },
    {
      "id": null,
      "name": null,
      "position": "FM",
      "branch": "Leander",
      "region": "CTXH",
      "regional": "Brian Herzig",
      "goals": [],
      "kpiActuals": null
    },
    {
      "id": "dustin-street",
      "name": "Dustin Street",
      "position": "BM",
      "branch": "San Antonio",
      "region": "CTXH",
      "regional": "Brian Herzig",
      "goals": [
        {
          "num": 1,
          "rock": "Einstein Games - Overall Score Accountability",
          "superGreen": "Branch Average total score is 8 or higher",
          "green": "Branch Average total score is 7 or higher",
          "red": "Branch Average total score is less than 7",
          "critical": true
        },
        {
          "num": 2,
          "rock": "Hiring Targets",
          "superGreen": "SAN branch avg 100%+staffing for qtr, People Analyzer reviewed, C players cleared/have action plans, eNPS cleared by end of May",
          "green": "SAN branch avg 100%+staffing for qtr, People Analyzer reviewed, C players cleared/have action plans, eNPS cleared by end of June",
          "red": "SAN averaging 95% or less personnel for qrt, eNPS board not cleared.",
          "critical": true
        },
        {
          "num": 3,
          "rock": "Branch and Individual Sales Goals/Estimate Accuracy",
          "superGreen": "All managers at branch average 110% to goal with an average conversion rate at or greater than company average",
          "green": "All managers at branch average 100% to goal with an average conversion rate at or greater than company average",
          "red": "All managers at branch averave less than 100% to goal with an average conversion rate at or greater than company average",
          "critical": false
        },
        {
          "num": 4,
          "rock": "People Analyzer or Flex Personal Goal",
          "superGreen": "Less than 5% C Players by EOQ, eNPS Board Cleared by end of May",
          "green": "Less than 10% C Players by EOQ, eNPS Board Cleared by end of June",
          "red": "More than 10% C Players at EOQ, NPS Board Cleared by June",
          "critical": false
        },
        {
          "num": 5,
          "rock": "Scrum Accountability",
          "superGreen": "SCRUM score card average 90+ starting June/July, minimum 5 score cards",
          "green": "SCRUM score card average 80+ starting June/July, minimum 5 score cards",
          "red": "SCRUM score card average less than 80 starting June/July, minimum 5 score cards.",
          "critical": false
        }
      ],
      "kpiActuals": null
    },
    {
      "id": "lukas-konrad",
      "name": "Lukas Konrad",
      "position": "OPs",
      "branch": "San Antonio",
      "region": "CTXH",
      "regional": "Brian Herzig",
      "goals": [
        {
          "num": 1,
          "rock": "Einstein Games - Samsara Focus",
          "superGreen": "Branch Average Score for Samsara and Damages (If no FM) is a 8 or higher",
          "green": "Branch Average Score for Samsara and Damages (If no FM) is a 7 or higher",
          "red": "Branch Average Score for Samsara and Damages (If no FM) is less than 7",
          "critical": true
        },
        {
          "num": 2,
          "rock": "Individual Sales Goal, Improve Estimate Accuracy",
          "superGreen": "Reach 105% and at or above company average $ conv rate",
          "green": "Reach 100% and at or above company average $ conv rate",
          "red": "Below 100% or below company average $ conv",
          "critical": true
        },
        {
          "num": 3,
          "rock": "Driver Safety Coaching/Retraining",
          "superGreen": "90% or better coachings issued and retraining completed",
          "green": "80% or better coachings issued and retraining completed",
          "red": "Less than 80% coachings issued and retraining completed",
          "critical": false
        },
        {
          "num": 4,
          "rock": "Praise Goal",
          "superGreen": "≥ 48 Praise (4 per week)",
          "green": "≥ 36 Praise (3 per week)",
          "red": "< 36 Praise",
          "critical": false
        }
      ],
      "kpiActuals": null
    },
    {
      "id": "cameron-klepac",
      "name": "Cameron Klepac",
      "position": "FM",
      "branch": "San Antonio",
      "region": "CTXH",
      "regional": "Brian Herzig",
      "goals": [
        {
          "num": 1,
          "rock": "Einstein Games - Damages",
          "superGreen": "Branch Damage score of 8+",
          "green": "Branch Damage score of 7+",
          "red": "Branch Damage score of less than 7",
          "critical": true
        },
        {
          "num": 2,
          "rock": "FM SuperBoard Mgmt",
          "superGreen": "75 points logged on the super board (Onsite evals, Trial Days, OB Field Training, Flight Tests, Driver Trainings each count as 1 point toward goal)",
          "green": "50 points logged on the super board (Onsite evals, Trial Days, OB Field Training, Flight Tests, Driver Trainings each count as 1 point toward goal)",
          "red": "Less than 50 points logged",
          "critical": true
        },
        {
          "num": 3,
          "rock": "Individual Sales Goal, Improve Estimate Accuracy",
          "superGreen": "Reach 105% and at or above company average $ conv rate",
          "green": "Reach 100% and at or above company average $ conv rate",
          "red": "Below 100% or below company average $ conv",
          "critical": false
        },
        {
          "num": 4,
          "rock": "Praise Goal",
          "superGreen": "≥ 48 Praise (4 per week)",
          "green": "≥ 36 Praise (3 per week)",
          "red": "< 36 Praise",
          "critical": false
        }
      ],
      "kpiActuals": null
    },
    {
      "id": "sergio-buenrostro",
      "name": "Sergio Buenrostro",
      "position": "BM",
      "branch": "Houston",
      "region": "CTXH",
      "regional": "Brian Herzig",
      "goals": [
        {
          "num": 1,
          "rock": "Einstein Games - Overall Score Accountability",
          "superGreen": "Branch Average total score is 8 or higher",
          "green": "Branch Average total score is 7 or higher",
          "red": "Branch Average total score is less than 7",
          "critical": true
        },
        {
          "num": 2,
          "rock": "Hiring Targets",
          "superGreen": "HOU branch avg 100%+staffing for qtr, People Analyzer reviewed, C players cleared/have action plans, eNPS cleared by end of May",
          "green": "HOU branch avg 100%+staffing for qtr, People Analyzer reviewed, C players cleared/have action plans, eNPS cleared by end of June",
          "red": "HOU averaging 95% or less personnel for qrt, eNPS board not cleared.",
          "critical": true
        },
        {
          "num": 3,
          "rock": "Branch and Individual Sales Goals/Estimate Accuracy",
          "superGreen": "All managers at branch average 110% to goal with an average conversion rate at or greater than company average",
          "green": "All managers at branch average 100% to goal with an average conversion rate at or greater than company average",
          "red": "All managers at branch averave less than 100% to goal with an average conversion rate at or greater than company average",
          "critical": false
        },
        {
          "num": 4,
          "rock": "People Analyzer or Flex Personal Goal",
          "superGreen": "Less than 5% C Players by EOQ, eNPS Board Cleared by end of May",
          "green": "Less than 10% C Players by EOQ, eNPS Board Cleared by end of June",
          "red": "More than 10% C Players at EOQ, NPS Board Cleared by June",
          "critical": false
        },
        {
          "num": 5,
          "rock": "Scrum Accountability",
          "superGreen": "SCRUM score card average 90+ starting June/July, minimum 5 score cards",
          "green": "SCRUM score card average 80+ starting June/July, minimum 5 score cards",
          "red": "SCRUM score card average less than 80 starting June/July, minimum 5 score cards.",
          "critical": false
        }
      ],
      "kpiActuals": null
    },
    {
      "id": "joel-villatoro",
      "name": "Joel Villatoro",
      "position": "OPs",
      "branch": "Houston",
      "region": "CTXH",
      "regional": "Brian Herzig",
      "goals": [
        {
          "num": 1,
          "rock": "Einstein Games - Samsara Focus",
          "superGreen": "Branch Average Score for Samsara and Damages (If no FM) is a 8 or higher",
          "green": "Branch Average Score for Samsara and Damages (If no FM) is a 7 or higher",
          "red": "Branch Average Score for Samsara and Damages (If no FM) is less than 7",
          "critical": true
        },
        {
          "num": 2,
          "rock": "Individual Sales Goal, Improve Estimate Accuracy",
          "superGreen": "Reach 105% and at or above company average $ conv rate",
          "green": "Reach 100% and at or above company average $ conv rate",
          "red": "Below 100% or below company average $ conv",
          "critical": true
        },
        {
          "num": 3,
          "rock": "Driver Safety Coaching/Retraining",
          "superGreen": "90% or better coachings issued and retraining completed",
          "green": "80% or better coachings issued and retraining completed",
          "red": "Less than 80% coachings issued and retraining completed",
          "critical": false
        },
        {
          "num": 4,
          "rock": "Praise Goal",
          "superGreen": "≥ 48 Praise (4 per week)",
          "green": "≥ 36 Praise (3 per week)",
          "red": "< 36 Praise",
          "critical": false
        }
      ],
      "kpiActuals": null
    },
    {
      "id": "alex-tran",
      "name": "Alex Tran",
      "position": "FM",
      "branch": "Houston",
      "region": "CTXH",
      "regional": "Brian Herzig",
      "goals": [
        {
          "num": 1,
          "rock": "Einstein Games - Damages",
          "superGreen": "Branch Damage score of 8+",
          "green": "Branch Damage score of 7+",
          "red": "Branch Damage score of less than 7",
          "critical": true
        },
        {
          "num": 2,
          "rock": "FM SuperBoard Mgmt",
          "superGreen": "75 points logged on the super board (Onsite evals, Trial Days, OB Field Training, Flight Tests, Driver Trainings each count as 1 point toward goal)",
          "green": "50 points logged on the super board (Onsite evals, Trial Days, OB Field Training, Flight Tests, Driver Trainings each count as 1 point toward goal)",
          "red": "Less than 50 points logged",
          "critical": true
        },
        {
          "num": 3,
          "rock": "Individual Sales Goal, Improve Estimate Accuracy",
          "superGreen": "Reach 105% and at or above company average $ conv rate",
          "green": "Reach 100% and at or above company average $ conv rate",
          "red": "Below 100% or below company average $ conv",
          "critical": false
        },
        {
          "num": 4,
          "rock": "Praise Goal",
          "superGreen": "≥ 48 Praise (4 per week)",
          "green": "≥ 36 Praise (3 per week)",
          "red": "< 36 Praise",
          "critical": false
        }
      ],
      "kpiActuals": null
    },
    {
      "id": "chris-beattie",
      "name": "Chris Beattie",
      "position": "BM",
      "branch": "Dallas",
      "region": "DFWT",
      "regional": "Michael Vandenbroader",
      "goals": [
        {
          "num": 1,
          "rock": "Einstein Games - Overall Score Accountability",
          "superGreen": "Branch Average total score is 8 or higher",
          "green": "Branch Average total score is 7 or higher",
          "red": "Branch Average total score is less than 7",
          "critical": true
        },
        {
          "num": 2,
          "rock": "Hiring Targets",
          "superGreen": "ND branch avg 100%+staffing for qtr, People Analyzer reviewed, C players cleared/have action plans, eNPS cleared by end of May",
          "green": "ND branch avg 100%+staffing for qtr, People Analyzer reviewed, C players cleared/have action plans, eNPS cleared by end of June",
          "red": "ND averaging 95% or less personnel for qrt, eNPS board not cleared.",
          "critical": true
        },
        {
          "num": 3,
          "rock": "Branch and Individual Sales Goals/Estimate Accuracy",
          "superGreen": "All managers at branch average 110% to goal with an average conversion rate at or greater than company average",
          "green": "All managers at branch average 100% to goal with an average conversion rate at or greater than company average",
          "red": "All managers at branch averave less than 100% to goal with an average conversion rate at or greater than company average",
          "critical": false
        },
        {
          "num": 4,
          "rock": "People Analyzer or Flex Personal Goal",
          "superGreen": "Less than 5% C Players by EOQ, eNPS Board Cleared by end of May",
          "green": "Less than 10% C Players by EOQ, eNPS Board Cleared by end of June",
          "red": "More than 10% C Players at EOQ, NPS Board Cleared by June",
          "critical": false
        },
        {
          "num": 5,
          "rock": "Scrum Accountability",
          "superGreen": "SCRUM score card average 90+ starting June/July, minimum 5 score cards",
          "green": "SCRUM score card average 80+ starting June/July, minimum 5 score cards",
          "red": "SCRUM score card average less than 80 starting June/July, minimum 5 score cards.",
          "critical": false
        }
      ],
      "kpiActuals": null
    },
    {
      "id": "landon-vaughan",
      "name": "Landon Vaughan",
      "position": "OPs",
      "branch": "Dallas",
      "region": "DFWT",
      "regional": "Michael Vandenbroader",
      "goals": [
        {
          "num": 1,
          "rock": "Einstein Games - Samsara Focus",
          "superGreen": "Branch Average Score for Samsara and Damages (If no FM) is a 8 or higher",
          "green": "Branch Average Score for Samsara and Damages (If no FM) is a 7 or higher",
          "red": "Branch Average Score for Samsara and Damages (If no FM) is less than 7",
          "critical": true
        },
        {
          "num": 2,
          "rock": "Individual Sales Goal, Improve Estimate Accuracy",
          "superGreen": "Reach 105% and at or above company average $ conv rate",
          "green": "Reach 100% and at or above company average $ conv rate",
          "red": "Below 100% or below company average $ conv",
          "critical": true
        },
        {
          "num": 3,
          "rock": "Driver Safety Coaching/Retraining",
          "superGreen": "90% or better coachings issued and retraining completed",
          "green": "80% or better coachings issued and retraining completed",
          "red": "Less than 80% coachings issued and retraining completed",
          "critical": false
        },
        {
          "num": 4,
          "rock": "Praise Goal",
          "superGreen": "≥ 48 Praise (4 per week)",
          "green": "≥ 36 Praise (3 per week)",
          "red": "< 36 Praise",
          "critical": false
        }
      ],
      "kpiActuals": null
    },
    {
      "id": "tabi-enoh",
      "name": "Tabi Enoh",
      "position": "FM",
      "branch": "Dallas",
      "region": "DFWT",
      "regional": "Michael Vandenbroader",
      "goals": [],
      "kpiActuals": null
    },
    {
      "id": "grant-hardison",
      "name": "Grant Hardison",
      "position": "BM",
      "branch": "Fort Worth",
      "region": "DFWT",
      "regional": "Michael Vandenbroader",
      "goals": [
        {
          "num": 1,
          "rock": "Einstein Games - Overall Score Accountability",
          "superGreen": "Branch Average total score is 8 or higher",
          "green": "Branch Average total score is 7 or higher",
          "red": "Branch Average total score is less than 7",
          "critical": true
        },
        {
          "num": 2,
          "rock": "Hiring Targets",
          "superGreen": "FTW branch avg 100%+staffing for qtr, People Analyzer reviewed, C players cleared/have action plans, eNPS cleared by end of May",
          "green": "FTW branch avg 100%+staffing for qtr, People Analyzer reviewed, C players cleared/have action plans, eNPS cleared by end of June",
          "red": "FTW averaging 95% or less personnel for qrt, eNPS board not cleared.",
          "critical": true
        },
        {
          "num": 3,
          "rock": "Branch and Individual Sales Goals/Estimate Accuracy",
          "superGreen": "All managers at branch average 110% to goal with an average conversion rate at or greater than company average",
          "green": "All managers at branch average 100% to goal with an average conversion rate at or greater than company average",
          "red": "All managers at branch averave less than 100% to goal with an average conversion rate at or greater than company average",
          "critical": false
        },
        {
          "num": 4,
          "rock": "People Analyzer or Flex Personal Goal",
          "superGreen": "Less than 5% C Players by EOQ, eNPS Board Cleared by end of May",
          "green": "Less than 10% C Players by EOQ, eNPS Board Cleared by end of June",
          "red": "More than 10% C Players at EOQ, NPS Board Cleared by June",
          "critical": false
        },
        {
          "num": 5,
          "rock": "Scrum Accountability",
          "superGreen": "SCRUM score card average 90+ starting June/July, minimum 5 score cards",
          "green": "SCRUM score card average 80+ starting June/July, minimum 5 score cards",
          "red": "SCRUM score card average less than 80 starting June/July, minimum 5 score cards.",
          "critical": false
        }
      ],
      "kpiActuals": null
    },
    {
      "id": "erik-orama",
      "name": "Erik Orama",
      "position": "OPs",
      "branch": "Fort Worth",
      "region": "DFWT",
      "regional": "Michael Vandenbroader",
      "goals": [
        {
          "num": 1,
          "rock": "Einstein Games - Samsara Focus + Damages",
          "superGreen": "Branch Average Score for Samsara and Damages (If no FM) is a 8 or higher",
          "green": "Branch Average Score for Samsara and Damages (If no FM) is a 7 or higher",
          "red": "Branch Average Score for Samsara and Damages (If no FM) is less than 7",
          "critical": true
        },
        {
          "num": 2,
          "rock": "Individual Sales Goal, Improve Estimate Accuracy",
          "superGreen": "Reach 105% and at or above company average $ conv rate",
          "green": "Reach 100% and at or above company average $ conv rate",
          "red": "Below 100% or below company average $ conv",
          "critical": true
        },
        {
          "num": 3,
          "rock": "Driver Safety Coaching/Retraining",
          "superGreen": "90% or better coachings issued and retraining completed",
          "green": "80% or better coachings issued and retraining completed",
          "red": "Less than 80% coachings issued and retraining completed",
          "critical": false
        },
        {
          "num": 4,
          "rock": "Praise Goal",
          "superGreen": "≥ 48 Praise (4 per week)",
          "green": "≥ 36 Praise (3 per week)",
          "red": "< 36 Praise",
          "critical": false
        }
      ],
      "kpiActuals": null
    },
    {
      "id": null,
      "name": null,
      "position": "FM",
      "branch": "Fort Worth",
      "region": "DFWT",
      "regional": "Michael Vandenbroader",
      "goals": [],
      "kpiActuals": null
    },
    {
      "id": "khevan-dueck",
      "name": "Khevan Dueck",
      "position": "BM",
      "branch": "McKinney",
      "region": "DFWT",
      "regional": "Michael Vandenbroader",
      "goals": [
        {
          "num": 1,
          "rock": "Einstein Games - Overall Score Accountability",
          "superGreen": "Branch Average total score is 8 or higher",
          "green": "Branch Average total score is 7 or higher",
          "red": "Branch Average total score is less than 7",
          "critical": true
        },
        {
          "num": 2,
          "rock": "Hiring Targets",
          "superGreen": "MCK branch avg 100%+staffing for qtr, People Analyzer reviewed, C players cleared/have action plans, eNPS cleared by end of May",
          "green": "MCK branch avg 100%+staffing for qtr, People Analyzer reviewed, C players cleared/have action plans, eNPS cleared by end of June",
          "red": "MCK averaging 95% or less personnel for qrt, eNPS board not cleared.",
          "critical": true
        },
        {
          "num": 3,
          "rock": "Branch and Individual Sales Goals/Estimate Accuracy",
          "superGreen": "All managers at branch average 110% to goal with an average conversion rate at or greater than company average",
          "green": "All managers at branch average 100% to goal with an average conversion rate at or greater than company average",
          "red": "All managers at branch averave less than 100% to goal with an average conversion rate at or greater than company average",
          "critical": false
        },
        {
          "num": 4,
          "rock": "People Analyzer or Flex Personal Goal",
          "superGreen": "Less than 5% C Players by EOQ, eNPS Board Cleared by end of May",
          "green": "Less than 10% C Players by EOQ, eNPS Board Cleared by end of June",
          "red": "More than 10% C Players at EOQ, NPS Board Cleared by June",
          "critical": false
        },
        {
          "num": 5,
          "rock": "Scrum Accountability",
          "superGreen": "SCRUM score card average 90+ starting June/July, minimum 5 score cards",
          "green": "SCRUM score card average 80+ starting June/July, minimum 5 score cards",
          "red": "SCRUM score card average less than 80 starting June/July, minimum 5 score cards.",
          "critical": false
        }
      ],
      "kpiActuals": null
    },
    {
      "id": "zachary-krodel",
      "name": "Zachary Krodel",
      "position": "OPs",
      "branch": "McKinney",
      "region": "DFWT",
      "regional": "Michael Vandenbroader",
      "goals": [
        {
          "num": 1,
          "rock": "Einstein Games - Samsara Focus + Damages",
          "superGreen": "Branch Average Score for Samsara and Damages (If no FM) is a 8 or higher",
          "green": "Branch Average Score for Samsara and Damages (If no FM) is a 7 or higher",
          "red": "Branch Average Score for Samsara and Damages (If no FM) is less than 7",
          "critical": true
        },
        {
          "num": 2,
          "rock": "Individual Sales Goal, Improve Estimate Accuracy",
          "superGreen": "Reach 105% and at or above company average $ conv rate",
          "green": "Reach 100% and at or above company average $ conv rate",
          "red": "Below 100% or below company average $ conv",
          "critical": true
        },
        {
          "num": 3,
          "rock": "Driver Safety Coaching/Retraining",
          "superGreen": "90% or better coachings issued and retraining completed",
          "green": "80% or better coachings issued and retraining completed",
          "red": "Less than 80% coachings issued and retraining completed",
          "critical": false
        },
        {
          "num": 4,
          "rock": "Praise Goal",
          "superGreen": "≥ 48 Praise (4 per week)",
          "green": "≥ 36 Praise (3 per week)",
          "red": "< 36 Praise",
          "critical": false
        }
      ],
      "kpiActuals": null
    },
    {
      "id": null,
      "name": null,
      "position": "FM",
      "branch": "McKinney",
      "region": "DFWT",
      "regional": "Michael Vandenbroader",
      "goals": [],
      "kpiActuals": null
    },
    {
      "id": "jack-davis",
      "name": "Jack Davis",
      "position": "BM",
      "branch": "Garland",
      "region": "DFWT",
      "regional": "Michael Vandenbroader",
      "goals": [
        {
          "num": 1,
          "rock": "Einstein Games - Overall Score Accountability",
          "superGreen": "Branch Average total score is 8 or higher",
          "green": "Branch Average total score is 7 or higher",
          "red": "Branch Average total score is less than 7",
          "critical": true
        },
        {
          "num": 2,
          "rock": "Hiring Targets",
          "superGreen": "GAR branch avg 100%+staffing for qtr",
          "green": "GAR branch avg 100%+staffing for qtr",
          "red": "GAR averaging 95% or less personnel for qrt",
          "critical": true
        },
        {
          "num": 3,
          "rock": "Branch and Individual Sales Goals/Estimate Accuracy",
          "superGreen": "All managers at branch average 110% to goal with an average conversion rate at or greater than company average",
          "green": "All managers at branch average 100% to goal with an average conversion rate at or greater than company average",
          "red": "All managers at branch averave less than 100% to goal with an average conversion rate at or greater than company average",
          "critical": false
        },
        {
          "num": 4,
          "rock": "People Analyzer or Flex Personal Goal",
          "superGreen": "Less than 5% C Players by EOQ, eNPS Board Cleared by end of May",
          "green": "Less than 10% C Players by EOQ, eNPS Board Cleared by end of June",
          "red": "More than 10% C Players at EOQ, NPS Board Cleared by June",
          "critical": false
        },
        {
          "num": 5,
          "rock": "Scrum Accountability",
          "superGreen": "SCRUM score card average 90+ starting June/July, minimum 5 score cards",
          "green": "SCRUM score card average 80+ starting June/July, minimum 5 score cards",
          "red": "SCRUM score card average less than 80 starting June/July, minimum 5 score cards.",
          "critical": false
        }
      ],
      "kpiActuals": null
    },
    {
      "id": null,
      "name": null,
      "position": "OPs",
      "branch": "Garland",
      "region": "DFWT",
      "regional": "Michael Vandenbroader",
      "goals": [],
      "kpiActuals": null
    },
    {
      "id": null,
      "name": null,
      "position": "FM",
      "branch": "Garland",
      "region": "DFWT",
      "regional": "Michael Vandenbroader",
      "goals": [],
      "kpiActuals": null
    },
    {
      "id": "steven-anderson",
      "name": "Steven Anderson",
      "position": "BM",
      "branch": "Tampa",
      "region": "DFWT",
      "regional": "Michael Vandenbroader",
      "goals": [
        {
          "num": 1,
          "rock": "Einstein Games - Overall Score Accountability",
          "superGreen": "Branch Average total score is 8 or higher",
          "green": "Branch Average total score is 7 or higher",
          "red": "Branch Average total score is less than 7",
          "critical": true
        },
        {
          "num": 2,
          "rock": "Hiring Targets",
          "superGreen": "TB branch avg 100%+staffing for qtr, People Analyzer reviewed, C players cleared/have action plans, eNPS cleared by end of May",
          "green": "TB branch avg 100%+staffing for qtr, People Analyzer reviewed, C players cleared/have action plans, eNPS cleared by end of June",
          "red": "TB averaging 95% or less personnel for qrt, eNPS board not cleared.",
          "critical": true
        },
        {
          "num": 3,
          "rock": "Branch and Individual Sales Goals/Estimate Accuracy",
          "superGreen": "All managers at branch average 110% to goal with an average conversion rate at or greater than company average",
          "green": "All managers at branch average 100% to goal with an average conversion rate at or greater than company average",
          "red": "All managers at branch averave less than 100% to goal with an average conversion rate at or greater than company average",
          "critical": false
        },
        {
          "num": 4,
          "rock": "People Analyzer or Flex Personal Goal",
          "superGreen": "Less than 5% C Players by EOQ, eNPS Board Cleared by end of May",
          "green": "Less than 10% C Players by EOQ, eNPS Board Cleared by end of June",
          "red": "More than 10% C Players at EOQ, NPS Board Cleared by June",
          "critical": false
        },
        {
          "num": 5,
          "rock": "Scrum Accountability",
          "superGreen": "SCRUM score card average 90+ starting June/July, minimum 5 score cards",
          "green": "SCRUM score card average 80+ starting June/July, minimum 5 score cards",
          "red": "SCRUM score card average less than 80 starting June/July, minimum 5 score cards.",
          "critical": false
        }
      ],
      "kpiActuals": null
    },
    {
      "id": "shane-heaberlin",
      "name": "Shane Heaberlin",
      "position": "OPs",
      "branch": "Tampa",
      "region": "DFWT",
      "regional": "Michael Vandenbroader",
      "goals": [
        {
          "num": 1,
          "rock": "Einstein Games - Samsara Focus + Damages",
          "superGreen": "Branch Average Score for Samsara and Damages (If no FM) is a 8 or higher",
          "green": "Branch Average Score for Samsara and Damages (If no FM) is a 7 or higher",
          "red": "Branch Average Score for Samsara and Damages (If no FM) is less than 7",
          "critical": true
        },
        {
          "num": 2,
          "rock": "Individual Sales Goal, Improve Estimate Accuracy",
          "superGreen": "Reach 105% and at or above company average $ conv rate",
          "green": "Reach 100% and at or above company average $ conv rate",
          "red": "Below 100% or below company average $ conv",
          "critical": true
        },
        {
          "num": 3,
          "rock": "Driver Safety Coaching/Retraining",
          "superGreen": "90% or better coachings issued and retraining completed",
          "green": "80% or better coachings issued and retraining completed",
          "red": "Less than 80% coachings issued and retraining completed",
          "critical": false
        },
        {
          "num": 4,
          "rock": "Praise Goal",
          "superGreen": "≥ 48 Praise (4 per week)",
          "green": "≥ 36 Praise (3 per week)",
          "red": "< 36 Praise",
          "critical": false
        }
      ],
      "kpiActuals": null
    },
    {
      "id": null,
      "name": null,
      "position": "FM",
      "branch": "Tampa",
      "region": "DFWT",
      "regional": "Michael Vandenbroader",
      "goals": [],
      "kpiActuals": null
    }
  ]
};

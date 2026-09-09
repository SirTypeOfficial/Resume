---
name: tailor-ats-resume
description: Generates a tailored ATS-friendly resume in Persian or English based on a targeted Job Description (JD) using career-hub files. Use when the user provides a job description, asks to tailor a resume, generate an ATS resume, or target a specific role.
---

# Tailor ATS Resume

When invoked with a Job Description:
1. Scan all files in `career-hub/experiences/`, `career-hub/education/`, and `career-hub/certificates/`.
2. Filter and rank experiences that match the required stack and responsibilities of the target JD.
3. Output a clean, ATS-compliant Markdown resume in the requested language (English or Persian).
4. Strictly apply the humanized engineering tone (No AI buzzwords, clear quantifiable metrics).
5. Output format: Standard single-column ATS format with sections: Professional Summary, Core Competencies, Key Technical Experience, Flagship Projects, Certifications, Education.

## Source of truth

- Read every file under `career-hub/experiences/`, `career-hub/certificates/` (including `assets/` and `related_certificates` in frontmatter), and `career-hub/education/` before writing. Parse dual `fa`/`en` frontmatter and skill arrays.
- Use only facts from those files. Do not invent employers, dates, metrics, certs, or stack items.
- Apply `.cursor/rules/career-engine.mdc`, `.cursor/rules/experience-manager.mdc`, and `.cursor/rules/career-hub-rule.mdc` for tone, X-Y-Z bullets, cert links, and Persian/English integrity.
- If `career-hub/` is missing or empty, stop and ask to populate it. Do not fall back to `index.html` or rewrite site JSON as the resume.

## Language and targeting

- Language: user request wins. If unspecified, match the JD language (English or Persian).
- Rank by overlap with JD stack, domain, and seniority. Lead with the strongest matches; drop weak or off-stack roles rather than padding.
- Mirror JD keywords only when they are true of the vault (ATS keyword match, not keyword stuffing).
- Rewrite selected bullets into X-Y-Z. Never copy banned clichés from source files.

## ATS constraints

- Single column, standard headings, no tables, no icons, no multi-column layouts, no text in images.
- Header: Mohammad Reza Vazifeh / محمدرضا وظیفه, plus email, phone, location, site, LinkedIn, GitHub from the vault (or existing profile files if the vault omits contact).
- Dates as `YYYY-MM` (EN) or standard Iranian work dates (FA). City and country on each role.
- Keep the resume one to two pages of Markdown.

## Output template

Use this structure. For Persian, keep the same section order; use natural FA headings: خلاصه حرفه‌ای، شایستگی‌های اصلی، تجربه فنی کلیدی، پروژه‌های شاخص، مدارک، تحصیلات.

```markdown
# [Full Name]
[Title tailored to the JD]
[City, Country] | [Phone] | [Email] | [Site] | [LinkedIn] | [GitHub]

## Professional Summary
[3–4 lines. Stack + seniority matched to the JD. One quantified proof. No fluff.]

## Core Competencies
[JD-aligned skills, comma-separated or plain bullets. Group: languages, backend, architecture, data/messaging, frontend/mobile, cloud/DevOps.]

## Key Technical Experience
### [Role] | [Company]
[Location] | [Start – End or Present]
- [X-Y-Z bullet]
- [X-Y-Z bullet]

## Flagship Projects
### [Project]
- [X-Y-Z bullet tied to JD needs]

## Certifications
- [Name] | [Issuer] | [Year]

## Education
- [Degree], [School] | [Year]
```

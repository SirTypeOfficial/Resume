---
name: generate-ats-pdf
description: این مهارت بر اساس سوابق `career-hub/` و متن یک آگهی شغلی (JD)، یک رزومه تک‌ستونه کاملاً استاندارد ATS به فرمت Markdown و همچنین قالب قابل چاپ HTML/CSS با تایپوگرافی مهندسی تولید می‌کند. Generates a single-column ATS Markdown resume plus a printable A4 HTML companion (selectable PDF via browser Print). Use when the user provides a job description (JD) and asks for an ATS resume, printable HTML, selectable PDF, A4 print CSS, or generate-ats-pdf.
---

# Generate ATS PDF

When invoked with a Job Description (JD):

۱. متن آگهی شغلی (JD) را تحلیل کن و کلمات کلیدی حیاتی آن (تکنولوژی‌ها، مهارت‌های نرم، الگوهای معماری) را استخراج کن.

۲. فایل‌های سوابق کاری در `career-hub/experiences/` را بخوان. سوابقی که بیشترین هم‌پوشانی را با آگهی دارند در اولویت قرار بده.

۳. رزومه را به فرمت استاندارد ATS در یک فایل با نام `career-hub/tailored-resumes/[Company]-[Role].md` بساز که شامل بخش‌های زیر باشد:
   - Header (نام، شهر/کشور، ایمیل، شماره، لینکدین، گیت‌هاب، وب‌سایت)
   - Professional Summary (۳ تا ۴ خط عمیق و متناسب با نیازمندی آگهی)
   - Core Competencies (دسته‌بندی مهارت‌های متناسب با JD)
   - Professional Experience (نقش‌ها، شرکت‌ها، تاریخ‌ها به میلادی، و بولت‌پوینت‌های دستاورد با فرمول XYZ)
   - Verified Certifications (مدارک معتبر با نام مرجع)
   - Education & Training

۴. در انتهای کار، یک نسخه HTML تک‌صفحه‌ای مینیمال و شیک (دارای استایل‌های CSS Print مخصوص کاغذ A4، تک‌ستونه، فونت سیستم Inter/Arial، بدون کادر و عناصر گرافیکی اضافه) در کنار فایل مارک‌داون بساز تا کاربر بتواند با یک کلیک در مرورگر پرینت گرفته و فایل PDF با متن قابل انتخاب (Selectable PDF) دریافت کند.

## Source of truth

- Read every file under `career-hub/experiences/`, `career-hub/education/`, and `career-hub/certificates/certificates.md` before writing.
- Use only vault facts. Do not invent employers, dates, metrics, certs, or stack. If the JD asks for something not in the vault, omit it.
- Apply `.cursor/rules/career-engine.mdc` and `.cursor/skills/humanizer/SKILL.md` for tone. No banned AI filler.
- If `career-hub/` is missing or empty, stop. Do not invent a resume from `index.html` or site JSON.

## Targeting

- Language: user request wins. If unspecified, match the JD (EN or FA). Keep the same facts in both languages.
- Rank roles 01–07 by overlap with JD stack and domain. Weight recent roles (05–07) more heavily. Lead with the strongest matches. Drop off-stack roles instead of padding. Do not copy Senior / Junior / Lead from the JD onto the resume title unless that exact word is the contractual title in the vault.
- Mirror JD keywords only when they are true in the vault.
- Rewrite selected bullets as Google X-Y-Z: accomplished **X**, measured by **Y**, by doing **Z**. Prefer vault numbers; never fabricate metrics.
- Dates in Professional Experience are Gregorian (`Mon YYYY – Mon YYYY` or `Mon YYYY – Present`). City and country (or Remote) on each role.
- Keep the resume one to two printed A4 pages.

## Header defaults

Use these unless the vault or user supplies a newer value:

- Name: Mohammad Reza Vazifeh / محمدرضا وظیفه
- Location: Shiraz, Iran / شیراز، ایران
- Email: mv6468@gmail.com
- Phone: +98 933 229 7757
- LinkedIn: https://www.linkedin.com/in/sirtype/
- GitHub: https://github.com/SirTypeOfficial
- Website: https://mohammadrezav.ir

## File names

Slug `[Company]` and `[Role]` to ASCII kebab-case. Examples: `Snapp-NET-Architect.md`, `AyarPlus-MAUI-Contractor.md`. Do not put Senior in a filename unless it is the vault contractual title.

```text
career-hub/tailored-resumes/[Company]-[Role].md
career-hub/tailored-resumes/[Company]-[Role].html
```

Move superseded drafts of the same company-role pair to `career-hub/tailored-resumes/archive/`.

## Markdown template

Single column. No tables, icons, badges, or multi-column layouts. For Persian, keep this section order with natural FA headings: مشخصات، خلاصه حرفه‌ای، شایستگی‌های اصلی، سوابق شغلی، مدارک تأییدشده، تحصیلات و آموزش.

```markdown
# Mohammad Reza Vazifeh
[Title tailored to the JD]
Shiraz, Iran | +98 933 229 7757 | mv6468@gmail.com | mohammadrezav.ir | linkedin.com/in/sirtype | github.com/SirTypeOfficial

## Professional Summary
[3–4 lines. Functional title + stack matched to the JD. One vault-backed proof. No fluff. No self-proclaimed Senior / Junior / Lead.]

## Core Competencies
**Languages:** …
**Backend:** …
**Architecture:** …
**Data / Messaging:** …
**Frontend / Mobile:** …
**Cloud / DevOps:** …
[Keep only groups that the JD and vault both support.]

## Professional Experience
### [Role] | [Company]
[City, Country] | [Mon YYYY – Mon YYYY]
- [X-Y-Z bullet]
- [X-Y-Z bullet]

## Verified Certifications
- [Certificate name] | [Issuer] | [Year]

## Education & Training
- [Item], [Institute] | [Year]
```

Certifications come only from `career-hub/certificates/certificates.md` (name + issuer). Education comes from `career-hub/education/00-training-path.md` (IMI South courses, military service if relevant, self-study ASP.NET Core, Azad University MVC/ASP.NET Core). Do not list unverified certificates.

## HTML / print PDF

1. Copy [print-template.html](print-template.html).
2. Write the filled file next to the Markdown. Same content, same section order.
3. Set `<html lang="en" dir="ltr">` or `<html lang="fa" dir="rtl">`. For FA, keep Inter/Arial; do not add decorative fonts.
4. Replace every placeholder (`SUMMARY_PARAGRAPH`, sample job, sample cert). Real text nodes only — never rasterize the resume.
5. CSS constraints (already in the template; do not loosen them):
   - `@page { size: A4; margin: 14mm 16mm; }`
   - Single column, system stack `Inter, Arial, "Helvetica Neue", Helvetica, sans-serif`
   - Ink on white. No cards, icons, logos, colored boxes, columns, or background graphics
   - One 1px hairline under `h2` is the only rule allowed
6. After writing both files, tell the user to open the HTML in a browser and Print → Save as PDF (A4, headers/footers off) so the PDF stays selectable.

## Checklist

- [ ] JD keywords extracted (stack, soft skills, architecture)
- [ ] All experience, education, and certificate files read
- [ ] Roles ranked by overlap; off-stack work dropped
- [ ] `[Company]-[Role].md` written with the six sections above
- [ ] `[Company]-[Role].html` filled from `print-template.html`
- [ ] No invented metrics, employers, or certs
- [ ] User told how to Print to selectable PDF

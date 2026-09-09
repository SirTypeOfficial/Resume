# LinkedIn Featured (ویترین)

Featured sits under the profile header. The first three items are the ones most people see. Use **English titles** on the primary profile. Keep stack and a vault metric in the first line of each description. No Senior / ارشد. No logos or infographics; LinkedIn scrapes title + URL + your caption.

Project pages live under `career-hub/projects/`. Pin those URLs, not the whole role files. Index: [projects/README.md](../projects/README.md).

Repo: [https://github.com/SirTypeOfficial/Resume](https://github.com/SirTypeOfficial/Resume)  
Site (this repo on Pages): [https://mohammadrezav.ir](https://mohammadrezav.ir)

---

## Pin order (left to right)

1. Career Hub repository
2. Realtime dispatch writeup (Pazhoohan)
3. Offline gold ERP writeup (Ayar Plus)
4. Master resume English (PDF media, or HTML link)
5. Master resume Persian (PDF media, or HTML link)

If LinkedIn only shows three, stop after item 3 and keep both resumes in Featured behind the fold, or swap item 3 for the English PDF when a recruiter screen is the goal.

How to add: Profile → Featured → Add. **Link** for GitHub and HTML. **Media** for a printed PDF.

---

## 1. Career Hub on GitHub

**Add as:** Link

**URL:** `https://github.com/SirTypeOfficial/Resume`

**Title (paste):**

```
Career Hub: bilingual .NET vault, ATS resumes, LinkedIn pack
```

**Description (paste):**

```
Bilingual vault for roles 01-07, certificates, and single-column A4 resumes. Markdown in; ATS HTML out from a job description. .NET 10, Microservices, ALPR, n8n.
```

Why this pin: it shows how the career system is structured (experiences, education, certificates, tailored-resumes, LinkedIn copy), not a generic GitHub landing page.

---

## 2. Realtime dispatch (school transport)

**Add as:** Link

**URL:**  
`https://github.com/SirTypeOfficial/Resume/blob/main/career-hub/projects/realtime-dispatch.md`

**Pages fallback:** `https://mohammadrezav.ir/career-hub/projects/realtime-dispatch.md`

**Title (paste):**

```
Realtime dispatch MVP: .NET 10, SignalR, Redis, 200K+ users
```

**Description (paste):**

```
Trip MVP on a municipal school-transport platform (Shiraz, Isfahan, Qazvin). Some cities already had more than 200,000 users. SignalR for live fleet, Redis for state, PostgreSQL Polygon for geo. ALPR for inspectors on Python and FastAPI. Full-time On-site/Hybrid role at Ertebatat Pazhoohan Matin.
```

---

## 3. Offline gold ERP (Kuwait)

**Add as:** Link

**URL:**  
`https://github.com/SirTypeOfficial/Resume/blob/main/career-hub/projects/offline-gold-erp.md`

**Pages fallback:** `https://mohammadrezav.ir/career-hub/projects/offline-gold-erp.md`

**Title (paste):**

```
Offline gold ERP: .NET MAUI / .NET 10, Kuwait invoicing
```

**Description (paste):**

```
Part-time remote .NET contractor at Ayar Plus (عیار پلاس). Gold shops still issue invoices when the network is down: request queue, Windows-to-Android LAN discovery, Civil ID scan. Hours outside the Pazhoohan full-time contract; no conflict of interest.
```

---

## 4. Master resume (English, printable)

**Add as:** Media (preferred) or Link

**HTML (Pages):** `https://mohammadrezav.ir/career-hub/tailored-resumes/master-resume-en.html`

**PDF (Pages):** `https://mohammadrezav.ir/career-hub/tailored-resumes/master-resume-en.pdf`

**GitHub fallback:** `https://github.com/SirTypeOfficial/Resume/blob/main/career-hub/tailored-resumes/master-resume-en.pdf`

**PDF media:** upload `career-hub/tailored-resumes/master-resume-en.pdf` (from `npm run build:pdf`). LinkedIn opens PDFs in-app; that is the better recruiter path.

**Title (paste):**

```
Master resume (EN): Full-Stack .NET Developer & Software Architect
```

**Description (paste):**

```
Single-column A4, ATS-safe. .NET 10, Microservices, 200K+ municipal users, ALPR, offline gold ERP. Vector PDF from the Puppeteer pipeline.
```

---

## 5. Master resume (Persian, printable)

**Add as:** Media (preferred) or Link

**HTML (Pages):** `https://mohammadrezav.ir/career-hub/tailored-resumes/master-resume-fa.html`

**PDF (Pages):** `https://mohammadrezav.ir/career-hub/tailored-resumes/master-resume-fa.pdf`

**GitHub fallback:** `https://github.com/SirTypeOfficial/Resume/blob/main/career-hub/tailored-resumes/master-resume-fa.pdf`

**PDF media:** upload `career-hub/tailored-resumes/master-resume-fa.pdf` from `npm run build:pdf`.

**Title (paste):**

```
رزومه مستر (FA): توسعه‌دهنده فول‌استک .NET و معمار نرم‌افزار
```

**Description (paste):**

```
تک‌ستونه A4. همان واقعیت‌های نسخه انگلیسی: پژوهان تمام‌وقت، عیار پلاس پیمانکار پاره‌وقت دورکار، ۲۰۰ هزار کاربر شهرداری، فاکتور آفلاین طلا. PDF وکتور از پایپ‌لاین Puppeteer.
```

---

## How to write Featured titles and captions

Title (aim under 100 characters; LinkedIn truncates aggressively on mobile):

- Lead with the system, then the stack, then one vault number if it fits.
- Good: `Realtime dispatch MVP: .NET 10, SignalR, Redis, 200K+ users`
- Bad: `Excited to share my latest career hub` / any Senior / ارشد / passionate / cutting-edge.

Description (two to four sentences):

1. What shipped and where (municipality, Kuwait gold shop, electricity distributor).
2. How (stack from the vault).
3. Employment type if 06/07: full-time On-site/Hybrid vs part-time remote contractor.
4. Stop. No call to action, no "check out my repo".

Do not pin:

- Figma files, SEO slide decks, or Photoshop/3ds Max certificates as Featured (they fight the triad).
- Kubernetes, Pine Script, or anything in `awareness_only`.
- Two items that tell the same story (one dispatch pin, one gold ERP pin).

Optional third architecture pin (if Featured has room): [electricity-distribution-microservices.md](../projects/electricity-distribution-microservices.md) at `https://github.com/SirTypeOfficial/Resume/blob/main/career-hub/projects/electricity-distribution-microservices.md`. Do not replace dispatch or gold ERP with it.

# Portfolio Website — Build Specification
**For:** Gemini Pro (Antigravity or equivalent AI coding assistant)
**Owner:** Ace Philip S. Denulan
**Last updated:** June 2026

---

## 0. TL;DR

Build a personal portfolio website for a 4th-year BSIT student with a System Development specialization and Applied Analytics elective. The design must mirror the **Arik Framer template** (https://helpful-darling-749297-ca55b8c00.framer.app/) — minimal dark theme, editorial serif headlines, numbered service rows, marquee strip, and case study cards. Stack is **Next.js 15 (App Router) + Tailwind CSS v4**, deployed to **Vercel**. No testimonials section. No endorsements. Must include an introductory video embed.

**The target repo already exists and is connected to Vercel — work inside it. See §12 for repo setup instructions.**

---

## 1. Identity & Content

### 1.1 Personal Info

| Field | Value |
|---|---|
| Full name | Ace Philip S. Denulan |
| School | PHINMA University of Pangasinan |
| Degree | Bachelor of Science in Information Technology |
| Year | 4th Year |
| Specialization | System Development |
| Elective Track | Applied Analytics in Business (for IT) |
| Location | Pangasinan, Philippines |
| GitHub | https://github.com/naxareth |
| Availability | Open to OJT (internship) starting January |

### 1.2 Bio (use this, clean it up slightly but keep the voice)

> I am Ace Philip S. Denulan, studied at PHINMA University of Pangasinan. My work is grounded in the belief that systems must be structurally sound and meticulously planned. I possess a competent nature with a passion for innovative ideas. I strive to improve my skills to boost my confidence and to stand out in the industry.

Suggested improved version (use if owner approves):
> I'm Ace Philip S. Denulan — a 4th-year BSIT student at PHINMA University of Pangasinan, specializing in System Development with an eye toward Applied Analytics. I believe every system worth building starts with structure: a clear plan, a defensible architecture, and code that communicates intent. I'm driven by the challenge of translating complex problems into solutions that actually hold up under scrutiny.

### 1.3 Philosophies Section

**Format:** Short punchy quotes first, then a longer manifesto paragraph below.

**Quotes (render as large pull-quotes or numbered principles):**
- "Structure before speed."
- "A system you don't understand is a system you don't own."
- "Meticulous planning isn't overthinking — it's respect for the problem."
- "Competence is built, not claimed."

**Manifesto paragraph:**
> I don't chase trends. I chase understanding. Every tool I pick up, every system I touch, I want to know how it works — not just that it works. That philosophy is why I built Intellegode: because code that runs without comprehension is borrowed time. Whether I'm designing a database schema, architecting an AI pipeline, or planning a project's sprint structure, the process matters as much as the output. Systems must be structurally sound. Plans must be meticulous. And the work must speak for itself.

---

## 2. Design System

### 2.1 Visual Reference

Primary reference: **Arik Portfolio Framer Template**
URL: https://helpful-darling-749297-ca55b8c00.framer.app/

Extract and replicate the following design decisions:

| Element | Spec |
|---|---|
| Background | Near-black `#0c0c0c` with `#131313` for surfaces |
| Text | Off-white `#f0ede6` primary, muted `#888880` secondary |
| Border | `rgba(240,237,230,0.1)` — subtle, barely-there |
| Display font | DM Serif Display (Google Fonts) — used for all `h1`, `h2`, hero text |
| Body font | DM Sans (Google Fonts) — used for all body, nav, labels |
| CTA button | Pill shape (`border-radius: 999px`), white background, dark text |
| Nav | Fixed, blurred background (`backdrop-filter: blur(12px)`), transparent |
| Section numbers | `01`, `02`, `03` — small, uppercase, muted |
| Dividers | `1px solid rgba(240,237,230,0.1)` horizontal rules between sections |
| Hover arrows | `↗` symbol on service rows, translates on hover |

### 2.2 Typography Scale

```
h1 hero:      clamp(3rem, 6vw, 5.5rem) — DM Serif Display
h2 section:   clamp(2rem, 4vw, 3.5rem) — DM Serif Display
h3 card:      1.5rem — DM Serif Display
body:         1rem / 1.7 — DM Sans 400
label:        0.75rem / 0.15em letter-spacing / uppercase — DM Sans 300
```

### 2.3 Animations

- Hero section: fade-in + slide-up on load (`animation-delay` staggered per element)
- Service rows: hover reveals `↗` arrow, translates `translate(4px, -4px)`
- Marquee strip: infinite scroll left, `animation: marquee 20s linear infinite`
- Project cards: subtle `border-color` transition on hover
- Page transitions: use `next/link` with Framer Motion `AnimatePresence` for route changes (fade)
- Scroll-triggered reveals: use `IntersectionObserver` or Framer Motion `whileInView` for sections entering viewport

---

## 3. Site Architecture

### 3.1 Pages

```
/                   → Home (landing)
/about              → About + Philosophies
/work               → Projects index (all case studies)
/work/[slug]        → Individual case study
/contact            → Contact form or mailto link
```

### 3.2 File Structure (Next.js App Router)

```
src/
  app/
    layout.tsx          ← root layout, fonts, metadata
    page.tsx            ← Home
    about/
      page.tsx
    work/
      page.tsx
      [slug]/
        page.tsx
    contact/
      page.tsx
  components/
    Nav.tsx
    Footer.tsx
    HeroSection.tsx
    SkillsSection.tsx
    ProjectsSection.tsx
    MarqueeStrip.tsx
    PhilosophySection.tsx
    AboutSection.tsx
    CtaSection.tsx
    VideoIntro.tsx
    CaseStudyCard.tsx
    CaseStudyFull.tsx
  lib/
    projects.ts         ← project data (static, typed)
  styles/
    globals.css
```

---

## 4. Section Breakdown — Home Page (`/`)

Replicate the Arik template section order exactly, with these content substitutions:

### 4.1 Nav
- Left: Logo — "Ace." in DM Serif Display
- Center: Links — `Skills`, `Work`, `About`
- Right: Pill CTA — `Let's talk` → `mailto:` or `/contact`
- Behavior: fixed, `backdrop-filter: blur(12px)`, border-bottom on scroll

### 4.2 Hero
- **Left column:**
  - Small eyebrow label: `BSIT · System Development · Applied Analytics`
  - H1 headline (two lines, second line italic/muted): e.g. `IT Student` / `& Developer`
  - Subtext: short version of bio (1–2 sentences)
  - Two CTAs: `View My Work` (pill, white) + `About me →` (ghost text)
- **Right column:**
  - Profile photo (placeholder if not provided — show an outlined avatar SVG)
  - Floating badge bottom-left: green dot + `Available for OJT — Jan 2026`
- **Video:** Add a button or thumbnail below/beside the photo that opens an inline video modal (the intro video Ace plans to record). Use `<video>` tag or YouTube embed. Label: `Watch intro ▶`

### 4.3 Skills / What I Do
- Numbered rows (Arik-style): `01`, `02`, `03`, `04`
- Each row: `[number] [title] [description] [↗]`
- Grid columns: `4rem | 1fr | 1fr | auto`

| # | Title | Description |
|---|---|---|
| 01 | System Development | Full-stack systems built to last — structured architecture, clean APIs, and backend logic designed for maintainability, not just shipping. |
| 02 | Applied Analytics | Turning raw data into decisions. SQL, Python, pandas — end-to-end pipelines that make sense to stakeholders, not just data engineers. |
| 03 | AI Engineering | Local LLM deployment, RAG pipelines, and Ollama integrations. I've shipped AI features on local hardware with real constraints. |
| 04 | Project Management | Ran a six-person capstone team across web, ML, and Web3 tracks using Jira. Structure and planning are not optional. |

### 4.4 Selected Work (Project Cards)
- Section header: `Selected Work` (left) + `See all →` link (right) to `/work`
- 2-column grid
- Featured card: spans full width, larger image area
- Each card: image/thumbnail area + title + tag(s) on bottom row

**Featured (full-width):** VECTOR — Decentralized Micro-Credentialing System
**Normal cards:** Intellegode, ORBIT

> Note: A 4th project is upcoming — add a placeholder card labeled `[Coming Soon]` with a teaser.

### 4.5 Marquee Strip
- Scrolling left, infinite loop
- Content: `Python +++ TypeScript +++ SQL +++ Next.js +++ Django +++ Ollama +++ Docker +++ FastAPI +++ Solidity +++ PostgreSQL +++ Prisma +++ Git +++`
- Font: DM Serif Display, muted color

### 4.6 Philosophies (replaces the "Process" section from Arik)
- Left: large header `On Building` / `Good Systems`
- Right: lead paragraph (first philosophy principle)
- Below: 4 pull-quote cards in a 2×2 grid (the short quotes)
- Below that: the full manifesto paragraph in slightly smaller text, muted

### 4.7 About Preview (teaser, not full about page)
- Two-column: photo left, text right
- Name marquee strip between sections: `Ace Philip Denulan +++ Ace Philip Denulan +++`
- Headline: `A website that leaves a lasting impression.`
- Short paragraph from bio
- Stats grid (2×2):
  - `4th Year` / B.S. Information Technology
  - `3+` / AI & Systems Projects
  - `Jan` / OJT Target
  - `PH` / Pangasinan, Philippines
- CTA: `Get in touch →`

### 4.8 CTA Banner
- Full-width centered
- H2: `Let's build something` / `structured.` (second word italic/muted)
- Subtext: `Open for OJT opportunities and collaborations starting January.`
- Button: `Get in touch →`

### 4.9 Footer
- Three columns:
  - Col 1: Logo `Ace.` + tagline + copyright
  - Col 2: Pages (Home, Work, About, Contact)
  - Col 3: Connect (GitHub → https://github.com/naxareth, LinkedIn, Email)
- Bottom line: `© 2026 Ace Philip S. Denulan`

---

## 5. About Page (`/about`)

Sections:
1. **Hero** — large headline + photo + video embed (full intro video here)
2. **Bio** — full bio paragraph, school, track, specialization
3. **Philosophies** — full section: quotes + manifesto (see §1.3)
4. **Tech Stack** — grid of tech logos/names with labels (see §7)
5. **CTA** — same as homepage CTA banner

---

## 6. Projects Page (`/work`)

- Grid of all project cards (same card component as homepage)
- Filter tabs (optional stretch): `All` · `AI/ML` · `Systems` · `Web3`
- Each card links to `/work/[slug]`

---

## 7. Case Study Pages (`/work/[slug]`)

### Case Study: Intellegode ← FEATURED (deep writeup)

**Slug:** `intellegode`
**Repo:** https://github.com/naxareth/intellegode
**Tags:** VS Code Extension · TypeScript · Ollama · Local LLM

**Problem:**
Developers (including the author) were using AI tools to generate code they didn't fully understand. The code worked — but the developer didn't own it. This is "concept debt": code that runs but isn't comprehended.

**What was built:**
Intellegode is a VS Code extension that uses a locally-running LLM (Qwen via Ollama) to quiz developers on code they just wrote or generated. Highlight a block → press `Ctrl+Alt+Q` → receive a comprehension question in the sidebar → get feedback. Everything runs locally. No cloud, no subscriptions.

**Architecture:**
- VS Code Extension API (TypeScript)
- Ollama as the local LLM runtime
- Qwen3.5 4B as the code comprehension model
- GitHub Actions for CI
- Docker Compose for development environment

**Key decisions:**
- Local-only by design — privacy, no cost at scale, works offline
- Qwen chosen over larger models for balance of performance and VRAM headroom on 4GB GPUs
- CPU fallback mode via `INTELLEGODE_OLLAMA_FORCE_CPU=1` for lower-end hardware

**Outcome:**
Published to VS Code Marketplace (v0.0.1, April 2026). Roadmap includes concept debt tracking, project ownership mapping, and reconstruction challenges.

**Reflection:**
This project came directly from identifying a personal failure mode — building things without truly understanding them. Intellegode is an attempt to build a tool that forces the habit of understanding. The irony of building it while learning to code independently was not lost.

---

### Case Study: VECTOR ← brief

**Slug:** `vector`
**Repo:** https://github.com/naxareth/vector-system
**Tags:** Blockchain · AI · Next.js · Capstone · PostgreSQL

**Brief:** VECTOR is a blockchain-based micro-credentialing platform built as a capstone project at PHINMA University of Pangasinan. It issues ERC-1155 soulbound tokens for academic credentials on the Polygon Amoy Testnet, backed by an AI engine (Google Gemini 1.5 Flash) that extracts skills from resumes and predicts skill decay using linear regression. The system includes RBAC, AES-256 encryption, and Prisma ORM over Supabase PostgreSQL.

**Stack:** Next.js 14 App Router · TypeScript · Supabase · Prisma · Hardhat · Solidity · Polygon Amoy · Gemini 1.5 Flash · TailwindCSS · RainbowKit

**Role:** Core system architect, AI engine integration, project manager (Jira)

---

### Case Study: ORBIT ← brief

**Slug:** `orbit`
**Repo:** https://github.com/JustinEscano/ORBIT
**Tags:** IoT · AI · Django · Flutter · PostgreSQL

**Brief:** ORBIT is a full-stack IoT + AI project built for Advanced Programming. It integrates hardware IoT scripts with a Django REST API backend, a Flutter mobile client, and a Next.js web frontend. The system bridges physical sensors with an AI processing layer and stores structured data in PostgreSQL.

**Stack:** Python (Django) · Dart (Flutter) · TypeScript (Next.js) · PostgreSQL · C++ (IoT scripts)

**Role:** Backend API + AI integration

---

### Placeholder Card: [Project 4 — Coming Soon]
**Slug:** N/A (no page yet)
**Card label:** `[Upcoming]`
**Teaser text:** `Something in progress. Check back.`

---

## 8. Tech Stack (for About page grid)

Render as a visual icon/label grid, grouped by category.

**Languages:** Python · TypeScript · JavaScript · SQL · Dart · Solidity

**Frameworks & Libraries:** Next.js · Django · React · TailwindCSS · Prisma · Ethers.js

**AI & Data:** Ollama · Gemini API · Pandas · Linear Regression · RAG · Collaborative Filtering

**Infrastructure:** Docker · FastAPI · Supabase · PostgreSQL · GitHub Actions · Vercel

**Tools:** Git · Jira · VS Code · Hardhat

---

## 9. Technical Implementation Notes

### 9.1 Stack

```
Framework:    Next.js 15 (App Router, TypeScript)
Styling:      Tailwind CSS v4
Animations:   Framer Motion
Fonts:        next/font/google — DM Serif Display + DM Sans
Deployment:   Vercel
```

### 9.2 Key Packages

```bash
npm install framer-motion
npm install @next/font  # (included in Next.js 13+)
# Tailwind CSS v4 via PostCSS
```

### 9.3 Project Data

Define projects in `src/lib/projects.ts` as a typed array:

```typescript
export type Project = {
  slug: string
  title: string
  tags: string[]
  featured: boolean
  brief: string
  repo: string
  depth: 'featured' | 'brief' | 'placeholder'
  caseStudy?: {
    problem: string
    what: string
    architecture: string[]
    stack: string[]
    outcome: string
    reflection?: string
  }
}
```

### 9.4 Video Intro

- Owner will provide a recorded video of themselves
- On homepage: show as a thumbnail with play button overlay in the hero section (right column, below photo or replacing the placeholder)
- On about page: embed full video, autoplay off
- Use HTML5 `<video>` tag if self-hosted, or YouTube `<iframe>` if hosted there
- Video component: `VideoIntro.tsx` — accepts `src` prop, shows thumbnail + modal or inline player

### 9.5 Marquee Implementation

```tsx
// MarqueeStrip.tsx
// Use CSS animation only — no JS library needed
// Duplicate the content div to create seamless loop

<div className="overflow-hidden border-y border-white/10 py-5">
  <div className="flex animate-marquee whitespace-nowrap">
    {/* Content × 2 for seamless loop */}
  </div>
</div>
```

In `globals.css`:
```css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 20s linear infinite;
}
```

### 9.6 Metadata

Set `metadata` in each `page.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Ace Philip Denulan — BSIT Portfolio',
  description: 'System Development & Applied Analytics. Available for OJT January 2026.',
  openGraph: {
    title: 'Ace Philip Denulan',
    description: 'BSIT Student · System Developer · Pangasinan, PH',
    url: 'https://yourdomain.vercel.app',
  },
}
```

### 9.7 Deployment

- Push to GitHub
- Connect repo to Vercel
- No environment variables needed for MVP (all data is static)
- If contact form is added later: use Resend API or Formspree (add `RESEND_API_KEY` to Vercel env vars)

---

## 10. What NOT to Build

- ❌ No testimonials / endorsements section
- ❌ No blog (unless added later)
- ❌ No pricing page
- ❌ No dark/light mode toggle (dark only)
- ❌ No CMS — all content is hardcoded in `projects.ts` and page files for now
- ❌ No authentication
- ❌ No HTML-only output — must be Next.js

---

## 11. Handoff Checklist (for Gemini)

Before marking done, verify:
- [ ] Existing Vite files removed, Next.js scaffolded in same repo
- [ ] `npm run build` passes with zero errors before any other work
- [ ] All 5 pages exist and route correctly
- [ ] Nav is fixed with blur background
- [ ] Hero has photo placeholder, video button, and availability badge
- [ ] Skills section uses numbered rows with hover arrow
- [ ] Projects grid has featured (full-width) + normal cards
- [ ] Marquee strip scrolls infinitely
- [ ] Philosophies section has both quotes and manifesto
- [ ] VECTOR case study page exists with full content
- [ ] Intellegode case study page exists with full deep-dive content
- [ ] ORBIT case study page exists with brief content
- [ ] Coming Soon placeholder card is included
- [ ] About page has tech stack grid + video embed slot
- [ ] Contact page has working mailto link minimum
- [ ] Footer has GitHub link to https://github.com/naxareth
- [ ] `next/font` used for DM Serif Display + DM Sans
- [ ] Framer Motion used for scroll reveals and page transitions
- [ ] Deployed to Vercel successfully
- [ ] No TypeScript errors (`tsc --noEmit` passes)
- [ ] No console errors on production build

---

## 12. Repo Setup — Start Here

The portfolio already has an existing repo connected to Vercel. **Do not create a new repo.** Work inside the existing one.

**Repo:** https://github.com/naxareth/portfolio_ace
**Live URL:** https://portfolioace-sepia.vercel.app
**Current stack:** Vite + React (to be replaced)

### Step-by-step: migrate from Vite to Next.js inside the same repo

```bash
# 1. Clone the repo if you haven't already
git clone https://github.com/naxareth/portfolio_ace.git
cd portfolio_ace

# 2. Delete all existing Vite files — keep only .gitignore
# Remove: index.html, vite.config.ts, package.json, package-lock.json,
#          postcss.config.js, tailwind.config.js, tsconfig.json,
#          tsconfig.node.json, .eslintrc.cjs, src/, public/
# Keep:   .gitignore, README.md

# 3. Scaffold Next.js into the current directory
npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*"
# Answer the prompts:
#   Would you like to use ESLint? → Yes
#   Would you like to use Turbopack? → Yes (or No, either is fine)
#   Customize import alias? → No (already set via flag)

# 4. Install additional dependencies
npm install framer-motion

# 5. Verify it builds
npm run build

# 6. Commit and push
git add .
git commit -m "chore: migrate from Vite to Next.js 15"
git push origin main
```

Vercel will automatically detect the framework change on push and redeploy. The live URL stays the same.

### What Vercel needs (no changes required)
- Vercel auto-detects Next.js — no dashboard changes needed
- Build command: `next build` (Vercel sets this automatically)
- Output directory: `.next` (Vercel sets this automatically)
- No environment variables needed for MVP

### .gitignore additions (add these if not already present after scaffolding)
```
.next/
out/
.env
.env.local
.env*.local
```

---

*This document is the single source of truth. If Gemini needs clarification on any section, reference the Arik template URL and the GitHub repos listed. Do not invent content — leave placeholders where real assets (photos, video) are pending.*

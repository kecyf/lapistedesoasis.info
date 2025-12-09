# lapistedesoasis.info Changelog

*Session history and project evolution*

---

## [2025-12-08]

### session-04: Maroc 2026 update, inscription form & photo gallery

#### 🎯 Accomplishments

**Page Règlement (`/reglement`)**
- Created complete rules page with 17 articles from legacy site
- Table of contents, quick stats, card-based design
- Icons per article type, important notice section

**Team Section**
- Added 7 staff members with roles:
  - Gilbert, Patrick, Gérard, Marc, Jean Claude, Hervé, Aimée
- Cap au Sud-Evasion info card (agency since 1992)
- RaidLight partner mention

**Morocco 2026 Update**
- Hero: 22ème édition, Maroc 2026
- NextEdition: Complete 7-day programme
  - Dates: 30/05 - 05/06/2026
  - Total: 69km coureurs / 49km marcheurs
  - 4 stages with distances & elevations
  - Bivouac night at 2300m
  - Max altitude: 2500m
- Pricing: 890€ groupe / 920€ individuel
- Departure cities: Paris, Lyon, Nice, Toulouse
- Editions timeline: 2026 Maroc, 2027 Mongolie, 2028 Essaouira

**Pre-registration Form (`/inscription`)**
- Simplified web form (not full legal form)
- Fields: name, email, phone, type, airport, team, options
- Mailto submission (no backend needed)
- Success confirmation screen
- Full legal form handled via email follow-up

**Photo Gallery**
- 17 photos from Cap Vert 2025 (Emmanuelle Perès)
- Bento grid layout (5 featured, "+12 more")
- Lightbox with keyboard nav, thumbnails
- Responsive + accessible (aria-labels, focus states)
- Body scroll lock when lightbox open

#### 📁 Files

```
NEW: src/app/reglement/page.tsx
NEW: src/app/inscription/page.tsx
NEW: src/components/sections/team.tsx
NEW: src/components/sections/gallery.tsx
NEW: public/photos/ (17 photos)
NEW: public/files/ (for future PDFs)
MOD: hero.tsx, next-edition.tsx, editions.tsx, header.tsx, page.tsx
```

---

### session-03: Next.js foundation & Desert Modernism UI

#### 🎯 Accomplishments

**Stack Setup**
- initialized Next.js 16 with App Router
- configured Tailwind CSS v4 (CSS-first config)
- integrated shadcn/ui (button, card components)
- added Framer Motion for animations
- setup Supabase client structure

**Design Implementation**
- created "Desert Modernism" theme in globals.css:
  - Sand palette (#faf8f5 → #5a4632)
  - Terracotta accents (#c45a3a)
  - Oasis greens (#3d8577)
  - Night sky darks (#0f1118)
- integrated Playfair Display (headings) + Source Sans 3 (body)
- implemented warm shadows and gradients

**Components Created**
- `layout.tsx` - Root layout with fonts & metadata
- `page.tsx` - Homepage with Framer Motion
- `Header` - Animated sticky header with mobile menu
- `Hero` - Full-screen hero with gradient background, stats, CTAs
- `NextEdition` - Cap Vert 2025 section with info cards
- `About` - "Notre Histoire" with feature grid
- `Footer` - Full footer with socials & links

**Deployment**
- validated production build (`bun run build` ✅)
- initialized git repository
- created GitHub repo: https://github.com/kecyf/lapistedesoasis.info
- pushed to `main` branch
- Vercel: ✅ connected and deployed

---

### session-02: project kickoff, site analysis & FTP troubleshooting

#### 🎯 Accomplishments

**Site Analysis**
- explored legacy site lapistedesoasis.info via browser
- mapped complete site structure (single-page with Highslide JS popups)
- documented 21 éditions historiques (2007-2025)
- identified key content: éditions, témoignages, photos, vidéos, PDFs

**Project Setup**
- created project structure:
  - `legacy/` - pour archive FTP (en attente)
  - `docs/content-inventory/` - inventaire contenu
  - `docs/design/` - direction design
- created PROJECT-BRIEF.md (stack: Next.js + Supabase + Vercel)
- created DESIGN-DIRECTION.md ("Desert Modernism" concept)
- created initial content inventory (editions.md)
- configured .gitignore for Next.js project

**FTP/Infrastructure Investigation**
- received FTP credentials: `capsudev` / `fKqjdHuN`
- discovered site behind Cloudflare (managed by Kevin)
- identified hosting: OVH (confirmed via MX records)
- found origin IP: `213.186.33.48`
- fixed Cloudflare DNS: changed `ftp` CNAME → A record pointing to origin
- diagnosed FTP issue: port 21 accepts TCP but no FTP banner response
- confirmed SSH port 22 is open (SFTP possible)

#### ❌ Blockers

- **FTP server unresponsive** on OVH origin server
  - TCP connects but FTP protocol doesn't respond
  - likely disabled/misconfigured on OVH side
  - needs OVH panel access to fix or use web file manager

---

### session-01: lumi session system initialization

- initialized lumi session capture system
- created /docs/sessions/ structure
- added .cursor/changelogs/current-state.json
- system ready for session tracking

---

## Patterns Across Sessions

- **No FTP access** → manual content crawling worked as fallback
- **Form complexity** → split into simple web form + email follow-up for legal docs
- **Content-first** → crawled legacy site before building new components

---

*session capture made by lumi — this is an evolutive file that tracks your project's development history and patterns* 🌙

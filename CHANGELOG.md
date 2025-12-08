# lapistedesoasis.info Changelog

*Session history and project evolution*

---

## [2025-12-08]

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
- Vercel: pending connection by Kevin

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

#### 📋 Next Steps

1. Kevin to try SFTP via FileZilla (port 22, IP 213.186.33.48)
2. Or access OVH panel to check hosting status / use web file manager
3. Continue with Next.js setup while FTP issue is resolved
4. Can scrape live site content as fallback

### session-01: lumi session system initialization

- initialized lumi session capture system
- created /docs/sessions/ structure
- added .cursor/changelogs/current-state.json
- system ready for session tracking

---

## Patterns Across Sessions

*patterns will accumulate here as sessions are captured*

---

*session capture made by lumi — this is an evolutive file that tracks your project's development history and patterns* 🌙

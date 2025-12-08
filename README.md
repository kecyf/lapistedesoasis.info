# 🏜️ La Piste des Oasis

**Trail à étapes nomade de +100km dans les plus beaux paysages du monde.**

Depuis 2007, La Piste des Oasis propose une aventure unique entre effort, découverte et partage. Ce site est la refonte complète du site legacy [lapistedesoasis.info](https://lapistedesoasis.info).

## 🚀 Production

- **URL**: https://lapistedesoasis.info
- **Hosting**: Vercel (auto-deploy from `main`)
- **Status**: ✅ Live

## 📅 Current Edition

**Maroc 2026 — La Vallée Heureuse**
- Dates: 30 Mai - 5 Juin 2026 (7J/6N)
- Location: Haut Atlas Central, Aït Bouguemez
- Distance: 69km (coureurs) / 49km (marcheurs)
- Price: à partir de 890€

## Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org) | 16.x | React framework (App Router) |
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Utility-first CSS |
| [shadcn/ui](https://ui.shadcn.com) | latest | UI components |
| [Framer Motion](https://framer.com/motion) | 12.x | Animations |
| [Supabase](https://supabase.com) | 2.x | Backend & Database (future) |
| [Vercel](https://vercel.com) | - | Hosting & Deploy |

## Getting Started

```bash
# Install dependencies (ALWAYS use bun)
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Start production server
bun run start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── reglement/          # Rules page
│   └── inscription/        # Pre-registration form
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Hero, About, Team, Videos, Editions, NextEdition
│   └── ui/                 # shadcn components
├── lib/
│   ├── supabase.ts         # Supabase client
│   └── utils.ts            # Helpers (cn)
└── styles/
    └── globals.css         # Theme & Tailwind

docs/
├── PROJECT-BRIEF.md        # Project overview
├── design/                 # Design direction
├── content-inventory/      # Crawled content from legacy
└── sessions/               # Session logs

legacy/
├── crawled/                # Raw HTML from legacy site
└── README.md               # FTP archive instructions
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage (Hero, NextEdition, About, Videos, Editions, Team) |
| `/reglement` | Complete race rules (17 articles) |
| `/inscription` | Pre-registration form for Maroc 2026 |

## Design: Desert Modernism

A warm, authentic aesthetic inspired by desert landscapes:

| Color | Hex | Usage |
|-------|-----|-------|
| Sand | `#faf8f5` → `#5a4632` | Backgrounds, neutrals |
| Terracotta | `#c45a3a` | Accent, CTAs, highlights |
| Oasis | `#3d8577` | Links, secondary accent |
| Night | `#0f1118` | Dark backgrounds, text |

**Fonts**: Playfair Display (headings) + Source Sans 3 (body)

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Content Status

| Content | Status |
|---------|--------|
| Homepage sections | ✅ Complete |
| Maroc 2026 programme | ✅ Complete |
| Règlement (17 articles) | ✅ Complete |
| Team (7 members) | ✅ Complete |
| Pre-registration form | ✅ Complete |
| Videos (5 YouTube) | ✅ Integrated |
| Editions timeline | ✅ Complete (2007-2028) |
| Original photos | ⏳ Need FTP or manual upload |
| Supabase integration | ⏳ Future |

## Contact

- **Agency**: Cap au Sud-Evasion
- **Email**: capsud.evasion@gmail.com
- **Phone**: 04 93 14 02 94
- **Registration**: IM006120050

## License

© 2025 Cap au Sud Evasion. All rights reserved.

---

*Built with lumi 🌙*

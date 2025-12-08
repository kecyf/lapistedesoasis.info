# 🏜️ La Piste des Oasis

**Trail à étapes nomade de +100km dans les plus beaux déserts du monde.**

Depuis 2007, La Piste des Oasis propose une aventure unique entre effort, découverte et partage. Ce site est la refonte complète du site legacy [lapistedesoasis.info](https://lapistedesoasis.info).

## Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org) | 16.x | React framework (App Router) |
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Utility-first CSS |
| [shadcn/ui](https://ui.shadcn.com) | latest | UI components |
| [Framer Motion](https://framer.com/motion) | 12.x | Animations |
| [Supabase](https://supabase.com) | 2.x | Backend & Database |
| [Vercel](https://vercel.com) | - | Hosting & Deploy |

## Getting Started

```bash
# Install dependencies
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
│   └── page.tsx            # Homepage
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Page sections
│   └── ui/                 # shadcn components
├── lib/
│   ├── supabase.ts         # Supabase client
│   └── utils.ts            # Helpers
└── styles/
    └── globals.css         # Theme & Tailwind

docs/
├── PROJECT-BRIEF.md        # Project overview
├── design/                 # Design direction
├── content-inventory/      # Content to migrate
└── sessions/               # Session logs

legacy/                     # Legacy site archive (FTP dump)
```

## Design: Desert Modernism

A warm, authentic aesthetic inspired by desert landscapes:

- **Sand** `#faf8f5` → `#5a4632` — Warm neutrals
- **Terracotta** `#c45a3a` — Accent, CTAs
- **Oasis** `#3d8577` — Primary, links
- **Night** `#0f1118` — Dark backgrounds

Fonts: **Playfair Display** (headings) + **Source Sans 3** (body)

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Migration Status

This project is migrating content from the legacy site (2009):

- [ ] FTP access to retrieve files
- [ ] Edition archives (21 editions, 2007-2025)
- [ ] Testimonials
- [ ] Photo galleries
- [ ] Video embeds
- [ ] Press articles

## License

© 2025 Cap au Sud Evasion. All rights reserved.

---

*Built with lumi 🌙*

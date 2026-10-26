# Current project structure

```text
src/
├── app/
│   ├── about/page.tsx
│   ├── hire/page.tsx
│   ├── services/page.tsx
│   ├── works/
│   │   ├── [slug]/page.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/
│   ├── animations/
│   ├── layout/
│   └── sections/
│       ├── about/
│       ├── hire/
│       ├── home/
│       ├── services/
│       └── works/
└── data/
    ├── process.ts
    ├── projects.ts
    └── services.ts

public/
├── imgs/       # VSW brand marks
├── projects/   # Local portfolio artwork and previews
└── visuals/    # Multicolor research and product SVGs
```

## Data flow

- Static project, service, and process content is maintained in `src/data/`.
- The works index and dynamic case study pages read from the same project list.
- The contact form submits to EmailJS using the environment variables documented in [README.md](./README.md).
- The root layout provides the VSW identity, site metadata, navigation, footer, and analytics.

## Runtime

The app uses the Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, and Framer Motion. Page routes are server components by default; interactive navigation, category filters, animations, and the inquiry form are client components.

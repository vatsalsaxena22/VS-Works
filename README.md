# VS Works

VS Works is a modern full-stack portfolio and digital presence platform built with Next.js 15, TypeScript, and Tailwind CSS.

The platform showcases professional projects, services, development workflow, technical ecosystem, and modern web experiences through a premium monochrome UI inspired by modern SaaS and product websites.

---

## Live Website

https://your-domain.vercel.app

---

## Tech Stack

### Frontend
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- shadcn/ui

### Backend / Data
- Static JSON content
- EmailJS integration

### Deployment
- Vercel

---

## Features

- Modern monochrome UI
- Fully responsive design
- Dynamic project pages
- Featured works showcase
- Services & workflow sections
- Premium animations & transitions
- Contact form with EmailJS
- Modular scalable architecture
- SEO-ready structure
- Vercel deployment optimized

---

## Project Structure

```bash
src/
├── app/
│   ├── about/
│   ├── hire/
│   ├── services/
│   ├── works/
│   │   └── [slug]/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── animations/
│   ├── layout/
│   └── sections/
│       ├── about/
│       ├── hire/
│       ├── home/
│       ├── services/
│       └── works/
│
├── data/
│   ├── process.ts
│   ├── projects.ts
│   └── services.ts
```

---

## Pages

### Homepage
- Hero section
- Featured projects
- Services preview
- Workflow preview
- Tech stack
- CTA section

### Works
- Dynamic project showcase
- Category filtering
- Project detail pages

### Services
- Development services
- Workflow & process

### About
- Developer introduction
- Technical stack
- Ecosystem showcase

### Hire
- Contact methods
- Inquiry form
- EmailJS integration

---

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID

NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID

NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/vs-works.git
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

## Build

```bash
npm run build
```

---

## Deployment

This project is optimized for deployment on:

- Vercel

---

## Design Philosophy

VS Works follows a premium monochrome design system focused on:

- Clean typography
- Spacious layouts
- Minimal aesthetics
- Modern SaaS-inspired UI
- Scalable frontend architecture

Inspired by platforms like:
- Vercel
- Linear
- Raycast

---

## Future Improvements

- MDX case studies
- Blog system
- CMS integration
- Dark/light theme switcher
- Advanced motion system
- Project galleries
- Admin dashboard

---

## Author

Vatsal Saxena

Full-Stack Developer focused on building scalable, modern, and visually refined digital experiences.

---

## License

This project is licensed under the MIT License.
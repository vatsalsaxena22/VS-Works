# VSW Research & Development

VSW Research & Development is an independent digital studio exploring web technology and building useful websites, web applications, and mobile products. This site presents the studio’s capabilities, selected work, approach, and project inquiry form.

## Live website

https://vsworks.vercel.app/

## Technology

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Framer Motion
- EmailJS for project inquiries
- Vercel Analytics

## Visual system

The interface uses a black-and-white palette and a shared, visible grid. Color is reserved for custom SVG artwork that represents research, product systems, and selected work.

## Site sections

- **Home** — studio introduction, selected projects, capabilities, process, and technology stack.
- **Work** — category-filtered project cards and individual case study pages.
- **Services** — websites, web applications, mobile applications, e-commerce, CMS, and product research.
- **About** — studio principles, technologies, and the research-to-product approach.
- **Contact** — project inquiry form with EmailJS and direct email fallback.

Project and service content lives in `src/data/projects.ts`, `src/data/services.ts`, and `src/data/process.ts`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## EmailJS configuration

Set these variables in `.env.local` and in the deployment environment:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

The EmailJS template should include `user_name`, `user_email`, and `message`. The selected project type is added to the start of `message` so existing templates continue to receive it.

If EmailJS is not configured, the form displays a message directing visitors to `hello@vsworks.dev`.

## Production

```bash
npm run build
npm run start
```

The project is configured for Vercel deployment. Add the EmailJS variables to the project’s Vercel environment settings before publishing the contact form.

## Maintainer

Vatsal Saxena

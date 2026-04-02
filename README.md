# Frontend Components (Next.js)

A collection of reusable UI components built with Next.js and Tailwind CSS. This repo is designed as a frontend component playground and examples library for teams to inspect, copy, and integrate into modern React/Next.js applications.

## Included Components

- `accordion` - accessible accordion component with expand/collapse animation
- `auto-complete` - search suggestions dropdown with keyboard navigation
- `image-slider` - responsive carousel with swipe and controls
- `infinite-scroll` - browser-based infinite loading list with loading shimmer
- `live-chat` - simple chat interface with message rendering and streaming mock
- `nested-comments` - threaded comments UI with nested replies
- `pagination` - numeric pagination component with page selection
- `star-rating` - interactive star rating input
- `text-expander` - expandable/collapsible preview text component

## Project Structure

- `app/` - Next.js App Router entry points and component pages
- `app/{component}/` - each component folder includes component implementation and demo page
- `public/` - static assets
- `next.config.js`, `tailwind.config.js` - framework config

## Getting Started

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Run local dev server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) and navigate to component pages in the app router.

## Usage

Import component from its folder and use in your Next.js page:

```tsx
import Accordion from '@/app/accordion/accordion';

export default function Page() {
  return <Accordion />;
}
```

## Contributing

- Add new component demos under `app/`
- Keep styles in `app/**/*.module.css` or `app/**/*.styles.tsx`
- Keep implementation simple and reusable
- Add README updates to document new components

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

## Deployment

Works with Vercel, Netlify, or any static hosting provider via Next.js build:

```bash
npm run build
npm run start
```


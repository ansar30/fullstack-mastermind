# Day 10 - Setup Guide

## Prerequisites

- Node.js installed (v18+)
- npm or yarn

## Next.js Setup

### Create Next.js App
```bash
npx create-next-app@latest day10-nextjs-app
cd day10-nextjs-app
```

### Choose Options
- TypeScript: No (or Yes if preferred)
- ESLint: Yes
- Tailwind CSS: Optional
- App Router: Yes
- src/ directory: Optional

## Project Structure
```
day10-nextjs-app/
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── api/
│   │   └── users/
│   │       └── route.js
│   └── dashboard/
│       ├── layout.js
│       └── page.js
└── package.json
```

## Testing Setup

Run development server:
```bash
npm run dev
```

Visit: http://localhost:3000

## Files to Create

- `app/api/data/route.js` - API route
- `app/page.js` - Server component page
- `recursion-problems.js` - Recursion practice

## Ready to Start!

Move to `03-Solve` folder to begin coding.


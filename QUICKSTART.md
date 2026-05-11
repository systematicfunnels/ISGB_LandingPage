# Quick Start Guide

Get the IGSB Landing Page running in 5 minutes!

## 1. Prerequisites

Ensure you have:
- **Node.js** 18+ ([download](https://nodejs.org))
- **Git** ([download](https://git-scm.com))
- A code editor (VS Code recommended)

Verify installation:
```bash
node --version
npm --version
git --version
```

## 2. Clone & Install

```bash
# Clone repository
git clone https://github.com/your-org/ISGB_LandingPage.git
cd ISGB_LandingPage

# Install dependencies (1-2 minutes)
npm install
```

## 3. Setup Environment

```bash
# Copy example env file
cp .env.example .env.local
```

## 4. Start Development Server

```bash
# Start the server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser! 🎉

## 5. Start Editing

Edit files in `src/` folder. Changes auto-refresh in browser!

### Popular files to edit:
- **Homepage content**: `src/app/page.tsx`
- **Hero section**: `src/components/sections/Hero.tsx`
- **Colors/Theme**: `tailwind.config.ts`
- **Personal info**: `src/lib/constants.ts`
- **Footer**: `src/components/Footer.tsx`

## Common Commands

```bash
# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for errors
npm run type-check

# Format code
npm run format

# Lint code
npm run lint
```

## Directory Guide

```
src/
├── app/              ← Main pages
├── components/       ← React components
│   ├── sections/    ← Page sections
│   └── ui/          ← Reusable UI parts
├── lib/             ← Constants & helpers
├── types/           ← TypeScript types
└── utils/           ← Utility functions
```

## Next Steps

1. **Customize content**: Edit sections in `src/components/sections/`
2. **Add images**: Place in `public/` folder
3. **Change colors**: Update `tailwind.config.ts`
4. **Add pages**: Create new files in `src/app/`

## Useful Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [React Docs](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)

## Getting Help

- Check [DEVELOPMENT.md](./DEVELOPMENT.md) for detailed guide
- Review [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for folder layout
- See [README.md](./README.md) for complete documentation

## Deployment Preview

Ready to go live?
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment options

---

**Happy coding!** 🚀

Questions? Check the documentation or open an issue!

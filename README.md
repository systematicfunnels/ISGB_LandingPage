# IGSB Landing Page

A modern, responsive landing page for Indira Global School of Business (IGSB), Pune, built with Next.js 15, TypeScript, and Tailwind CSS.

## 🎯 Features

- ✅ **Modern Next.js 15** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for styling
- ✅ **Responsive Design** - Mobile, Tablet, Desktop
- ✅ **SEO Optimized** - Meta tags, Open Graph, structured data
- ✅ **Component-Based Architecture** - Reusable, maintainable code
- ✅ **Performance Optimized** - Image optimization, minification
- ✅ **Accessibility** - WCAG compliant
- ✅ **Best Practices** - Clean code, proper folder structure

## 📦 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Package Manager**: npm/yarn/pnpm

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ISGB_LandingPage
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Run development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page main content
│   └── globals.css         # Global styles
├── components/
│   ├── ui/
│   │   └── Button.tsx      # Reusable Button component
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Programme.tsx   # Programme section
│   │   ├── WhyChoose.tsx   # Why Choose IGSB section
│   │   ├── Learning.tsx    # Learning section
│   │   ├── Placements.tsx  # Placements section
│   │   ├── Companies.tsx   # Companies section
│   │   ├── PlacementSupport.tsx # Support section
│   │   ├── SuccessStories.tsx   # Stories section
│   │   ├── Legacy.tsx      # Legacy section
│   │   └── CTA.tsx         # Call to Action section
│   └── Footer.tsx          # Footer component
├── lib/                    # Utility functions & helpers
├── types/                  # TypeScript type definitions
└── utils/                  # Utility functions
```

## 🎨 Customization

### Colors
Tailwind colors are configured in `tailwind.config.ts`:
- Primary: Blue (#0ea5e9)
- Secondary: Purple (#8b5cf6)
- Accent: Amber (#f59e0b)

### Fonts
Google Fonts (Inter) is used by default. Change in `src/app/layout.tsx`.

### Content
Edit individual section components in `src/components/sections/` to update content.

## 📱 Responsive Breakpoints

- **sm**: 640px (small devices)
- **md**: 768px (tablets)
- **lg**: 1024px (desktops)
- **xl**: 1280px (large desktops)

## 🔍 SEO Optimization

- Metadata configured in `src/app/layout.tsx`
- Open Graph and Twitter cards included
- Canonical URL set
- Meta robots configured
- Semantic HTML structure

## 🚀 Build & Deploy

### Build for production:
```bash
npm run build
```

### Start production server:
```bash
npm start
```

### Type checking:
```bash
npm run type-check
```

### Format code:
```bash
npm run format
```

### Lint code:
```bash
npm run lint
```

## 📋 Component Guidelines

### Creating a New Component

```typescript
import { Button } from '@components/ui/Button'

export default function NewSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Section Title</h2>
        <p className="section-subtitle">Subtitle</p>
      </div>
    </section>
  )
}
```

### Using the Button Component

```typescript
import { Button } from '@components/ui/Button'

<Button variant="primary" size="lg" onClick={handleClick}>
  Click Me
</Button>

// Variants: primary, secondary, outline
// Sizes: sm, md, lg
```

## 🎯 Best Practices Implemented

1. **Component Composition** - Small, focused, reusable components
2. **Type Safety** - Full TypeScript support
3. **Separation of Concerns** - Clear folder structure
4. **DRY Principle** - No code duplication
5. **Accessibility** - Semantic HTML and ARIA attributes
6. **Performance** - Image optimization, code splitting
7. **Responsive Design** - Mobile-first approach
8. **Error Handling** - Proper error boundaries
9. **Code Formatting** - Prettier integration
10. **Environment Variables** - Secure configuration management

## 📝 Environment Variables

Create `.env.local` file (copy from `.env.example`):

```env
NEXT_PUBLIC_SITE_URL=https://indiragsb.edu.in
NEXT_PUBLIC_SITE_NAME=IGSB Pune
NEXT_PUBLIC_CONTACT_EMAIL=mba.admissions@indiragsb.edu.in
NEXT_PUBLIC_CONTACT_PHONE=+91 9657856103
```

## 🐛 Troubleshooting

### Port already in use
```bash
# Use custom port
npm run dev -- -p 3001
```

### Dependencies issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
# Clean build
rm -rf .next
npm run build
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## 🤝 Contributing

When contributing, please:
1. Follow the existing code style
2. Use TypeScript for new components
3. Ensure responsive design
4. Update documentation as needed
5. Test thoroughly before submitting

## 📄 License

This project is part of IGSB Pune. All rights reserved.

## 📞 Support

For inquiries about IGSB MBA Programme:
- **Email**: mba.admissions@indiragsb.edu.in
- **Phone**: +91 9657856103
- **Website**: www.indiraigsb.edu.in

---

Built with ❤️ for IGSB Pune

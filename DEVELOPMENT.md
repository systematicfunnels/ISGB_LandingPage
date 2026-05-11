# Development Guide

## Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm, yarn, or pnpm
- Git
- VS Code (recommended)

### Initial Setup

1. **Clone repository**
```bash
git clone <repository-url>
cd ISGB_LandingPage
```

2. **Install dependencies**
```bash
npm install
```

3. **Create environment file**
```bash
cp .env.example .env.local
```

4. **Run development server**
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

## Development Workflow

### Commands

```bash
# Development server (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Lint code
npm run lint

# Format code
npm run format
```

### Code Style and Standards

We follow these standards:
- **Formatter**: Prettier
- **Linter**: ESLint
- **Language**: TypeScript (strict mode)
- **CSS**: Tailwind CSS

### Before Committing

1. **Format code**
   ```bash
   npm run format
   ```

2. **Run type check**
   ```bash
   npm run type-check
   ```

3. **Run linter**
   ```bash
   npm run lint
   ```

4. **Test locally**
   - Start dev server: `npm run dev`
   - Test all pages and sections
   - Check responsive design
   - Verify animations and interactions

## File Naming Conventions

- **Components**: PascalCase (e.g., `Hero.tsx`, `Button.tsx`)
- **Utilities**: camelCase (e.g., `helpers.ts`, `constants.ts`)
- **Styles**: Global styles in `globals.css`
- **Types**: `index.ts` in `/types` folder
- **Folders**: lowercase with hyphen (e.g., `/components/ui`)

## Component Development

### Creating a New Section Component

```typescript
// src/components/sections/NewSection.tsx
export default function NewSection() {
  return (
    <section id="new-section" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Section Title</h2>
        <p className="section-subtitle">Subtitle text</p>
        
        {/* Content */}
      </div>
    </section>
  )
}
```

### Creating a New UI Component

```typescript
// src/components/ui/Card.tsx
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'elevated'
}

export function Card({ children, className, variant = 'default' }: CardProps) {
  const baseStyle = 'rounded-lg p-6'
  const variants = {
    default: 'bg-white border border-gray-200',
    elevated: 'bg-white shadow-lg',
  }
  
  return (
    <div className={`${baseStyle} ${variants[variant]} ${className || ''}`}>
      {children}
    </div>
  )
}
```

## Styling Guidelines

### Tailwind CSS Usage

- Always use Tailwind classes for styling
- Use custom colors from theme config
- Follow mobile-first responsive design

```typescript
// Good ✓
<div className="text-slate-900 text-base md:text-lg lg:text-xl">
  Content
</div>

// Avoid ✗
<div style={{ color: '#000', fontSize: '16px' }}>
  Content
</div>
```

### Responsive Design

- Test on mobile (375px), tablet (768px), desktop (1024px)
- Use Tailwind breakpoints: `sm`, `md`, `lg`, `xl`
- Always include mobile view first

```typescript
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

## Type Safety

### Define Props Interfaces

```typescript
interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

export function Button({ children, variant, ...props }: ButtonProps) {
  // Implementation
}
```

### Use Constants with Types

```typescript
// types/index.ts
export interface Feature {
  title: string
  description: string
  icon?: string
}

// lib/constants.ts
export const FEATURES: Feature[] = [
  { title: 'Feature 1', description: 'Description' },
]
```

## Performance Tips

1. **Image Optimization**
   - Use Next.js Image component
   - Provide width and height
   - Use appropriate formats

2. **Code Splitting**
   - Dynamic imports for heavy components
   - Use `next/dynamic` for lazy loading

3. **Bundle Analysis**
   - Regular checks for bundle size
   - Remove unused dependencies
   - Optimize imports

## Testing Checklist

Before pushing changes:
- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] Responsive on mobile/tablet/desktop
- [ ] All links working
- [ ] Images loading
- [ ] Buttons functional
- [ ] Forms (if any) working
- [ ] Page loads in < 3 seconds
- [ ] No console errors

## Common Issues

### Hot Reload Not Working
```bash
# Clear Next.js cache and restart
rm -rf .next
npm run dev
```

### Dependencies Installation Issues
```bash
# Clear npm cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use
```bash
# Use different port
npm run dev -- -p 3001
```

### TypeScript Errors
```bash
# Check TypeScript errors
npm run type-check

# Rebuild TypeScript
rm -rf .next
npm run build
```

## VS Code Extensions

Recommended extensions for development:
- Prettier - Code formatter
- ESLint - Code quality
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin
- JavaScript Debugger

Install from `.vscode/extensions.json`:
```bash
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension bradlc.vscode-tailwindcss
```

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/feature-name

# Make changes and commit
git add .
git commit -m "feat: description of changes"

# Push to branch
git push origin feature/feature-name

# Create Pull Request
```

## Deployment

### Build Verification
```bash
npm run build
npm start
```

### Environment Variables
Ensure all required environment variables are set:
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SITE_NAME`
- Any API keys if needed

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [ESLint Docs](https://eslint.org/docs/)

## Support

For questions or issues:
1. Check existing issues on GitHub
2. Review documentation in `/docs`
3. Ask in team discussions
4. Check Slack channel

---

Happy coding! 🚀

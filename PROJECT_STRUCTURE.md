# Project Structure Documentation

## Directory Organization

### `/src/app`
- **Main application entry point**
- `layout.tsx` - Root layout with global metadata and styling
- `page.tsx` - Home page (entry point for all sections)
- `globals.css` - Global styles and Tailwind utilities

### `/src/components`
- **Reusable React components**

#### `/components/ui`
- `Button.tsx` - Reusable button component with variants and sizes
- Future: Add more UI components (inputs, cards, modals, etc.)

#### `/components/sections`
- `Hero.tsx` - Main hero banner section
- `About.tsx` - About IGSB section
- `Programme.tsx` - MBA programme details
- `WhyChoose.tsx` - Why Choose IGSB with features
- `Learning.tsx` - Learning methodology section
- `Placements.tsx` - Placement statistics
- `Companies.tsx` - Recruiting companies list
- `PlacementSupport.tsx` - Placement support services
- `SuccessStories.tsx` - Student success stories
- `Legacy.tsx` - Legacy and achievements
- `CTA.tsx` - Call to action section

### `/src/lib`
- `constants.ts` - Application-wide constants and configuration
- Future: Add utility functions, API client, etc.

### `/src/types`
- `index.ts` - TypeScript type definitions for the application

### `/src/utils`
- `helpers.ts` - Utility functions like formatting, validation, etc.

### `/public`
- `robots.txt` - SEO robots configuration
- `favicon.ico` - favicon (add your icon here)
- Future: Images, fonts, and other static assets

### Root Configuration Files
- `package.json` - Project dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS theme customization
- `postcss.config.js` - PostCSS configuration
- `.eslintrc.json` - ESLint rules
- `.prettierrc` - Prettier code formatting
- `.gitignore` - Git ignore patterns
- `.env.example` - Environment variables template

### VS Code Configuration
- `.vscode/settings.json` - VS Code workspace settings
- `.vscode/extensions.json` - Recommended extensions

## Component Patterns

### Section Component Pattern
```typescript
export default function SectionName() {
  return (
    <section id="section-id" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Title</h2>
        {/* Content */}
      </div>
    </section>
  )
}
```

### Feature Card Pattern
```typescript
<div className="flex flex-col items-start p-8 bg-slate-50 rounded-xl hover:bg-primary-50 transition-colors">
  <IconComponent className="w-6 h-6" />
  <h3 className="text-lg font-bold">Title</h3>
  <p className="text-slate-600">Description</p>
</div>
```

## Styling Conventions

### Utility Classes
- `container-custom` - Fixed-width centered container
- `section-title` - Large section headings
- `section-subtitle` - Subtitle text
- `btn-primary`, `btn-secondary`, `btn-outline` - Button styles

### Spacing
- `py-16 md:py-24` - Vertical padding (mobile/desktop)
- `px-4 sm:px-6 lg:px-8` - Horizontal padding

### Colors
- `text-primary-600` - Primary text color
- `bg-primary-50` - Light primary background
- `border-current` - Current text color border

## Best Practices

1. **Component Organization**
   - One component per file
   - Logical file naming (PascalCase for components)
   - Proper exports

2. **TypeScript**
   - Use interfaces for props
   - Define return types for functions
   - Use type definitions for constants

3. **Responsive Design**
   - Mobile-first approach
   - Use Tailwind breakpoints (sm, md, lg, xl)
   - Test on multiple devices

4. **Accessibility**
   - Semantic HTML elements
   - Proper heading hierarchy
   - ARIA attributes where needed

5. **Performance**
   - Use Next.js Image component for images
   - Lazy load sections if needed
   - Optimize bundle size

6. **Code Quality**
   - Follow ESLint rules
   - Format with Prettier
   - Use TypeScript strict mode

## Adding New Features

### Adding a New Section
1. Create file in `/src/components/sections/`
2. Follow section component pattern
3. Import in `/src/app/page.tsx`
4. Add section type definitions in `/src/types/`

### Adding a New UI Component
1. Create file in `/src/components/ui/`
2. Make it reusable with props and variants
3. Export from component file
4. Document usage with examples

### Adding Styles
1. Use Tailwind classes (preferred)
2. Add global styles in `/src/globals.css` for reusable patterns
3. Avoid CSS modules for consistency

## Maintenance

- Keep components small and focused
- Update constants in `/src/lib/constants.ts`
- Maintain type definitions
- Regular dependency updates
- Test responsiveness
- Monitor performance metrics

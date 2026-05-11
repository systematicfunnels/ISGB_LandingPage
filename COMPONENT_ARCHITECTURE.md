# Component Architecture & Atomic Design System
## IGSB Landing Page - DRY Principles & Component Hierarchy

---

## 1. ATOMIC DESIGN HIERARCHY

### 1.1 Design System Pyramid

```
┌─────────────────────────┐
│      PAGES              │ ← Full page templates, composed organisms
├─────────────────────────┤
│      ORGANISMS          │ ← Complex components (Hero, Navbar, Footer)
├─────────────────────────┤
│      MOLECULES          │ ← Combinations of atoms (Cards, Forms)
├─────────────────────────┤
│      ATOMS              │ ← Basic building blocks (Button, Input)
├─────────────────────────┤
│      TOKENS             │ ← Design system foundation
└─────────────────────────┘
```

---

## 2. ATOMS (基础单元)

### 2.1 Atom: Button

```typescript
// src/components/ui/Button.tsx
interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  onClick?: () => void
  href?: string
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  // Implementation
}
```

| Property | Required Props | Variants | States | Dependencies |
|---|---|---|---|---|
| **Button** | children, variant, size | Primary, Secondary, Outline | Default, Hover, Focus, Active, Disabled | clsx |

### 2.2 Atom: Icon

```typescript
// src/components/ui/Icon.tsx
interface IconProps {
  name: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: string
  className?: string
}

export function Icon({ name, size = 'md', ...props }: IconProps) {
  // Maps to lucide-react icons
}
```

| Property | Required Props | Variants | States | Dependencies |
|---|---|---|---|---|
| **Icon** | name, size | Various sizes (24px, 32px, 40px) | Default, Hover (color shift) | lucide-react |

### 2.3 Atom: Text

```typescript
// src/components/ui/Text.tsx
interface TextProps {
  children: ReactNode
  variant?: 'heading.xl' | 'heading.lg' | 'body.md' | 'caption'
  color?: string
  className?: string
}

export function Text({ children, variant = 'body.md' }: TextProps) {
  // Typography semantic component
}
```

| Property | Required Props | Variants | States | Dependencies |
|---|---|---|---|---|
| **Text** | children, variant | 10+ typography variants | Default, Disabled, Highlight |  |

### 2.4 Atom: Badge

```typescript
// src/components/ui/Badge.tsx
interface BadgeProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'error'
  size?: 'sm' | 'md'
}

export function Badge({ children, variant = 'primary' }: BadgeProps) {
  // Small labeled pill component
}
```

| Property | Required Props | Variants | States | Dependencies |
|---|---|---|---|---|
| **Badge** | children, variant | 4 color variants | Default, Hover | clsx |

### 2.5 Atom: Spacer

```typescript
// src/components/ui/Spacer.tsx
interface SpacerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  direction?: 'vertical' | 'horizontal'
}

export function Spacer({ size = 'md', direction = 'vertical' }: SpacerProps) {
  // Consistent spacing component
}
```

---

## 3. MOLECULES (组合单元)

### 3.1 Molecule: Card

```typescript
// src/components/molecules/Card.tsx
interface CardProps {
  children: ReactNode
  variant?: 'default' | 'elevated' | 'outlined'
  clickable?: boolean
  onClick?: () => void
}

export function Card({ children, variant = 'default', ...props }: CardProps) {
  // Container with inherent spacing, shadow, border-radius
}
```

| Property | Required Props | Variants | States | Dependencies | Atoms |
|---|---|---|---|---|---|
| **Card** | children | Default (shadow.sm), Elevated (shadow.lg), Outlined | Default, Hover, Focus | clsx | Border, Spacing |

### 3.2 Molecule: Button Group

```typescript
// src/components/molecules/ButtonGroup.tsx
interface ButtonGroupProps {
  buttons: { label: string; variant: ButtonVariant; onClick: () => void }[]
  layout?: 'horizontal' | 'vertical'
  gap?: 'sm' | 'md' | 'lg'
}

export function ButtonGroup({ buttons, layout = 'horizontal' }: ButtonGroupProps) {
  // Multiple buttons with consistent spacing
}
```

| Property | Required Props | Variants | States | Dependencies | Atoms |
|---|---|---|---|---|---|
| **ButtonGroup** | buttons[] | Horizontal, Vertical stacks | Default, Responsive | clsx | Button, Spacer |

### 3.3 Molecule: Feature Item

```typescript
// src/components/molecules/FeatureItem.tsx
interface FeatureItemProps {
  icon: ReactNode
  title: string
  description: string
  variant?: 'with-icon' | 'icon-only'
}

export function FeatureItem({ icon, title, description }: FeatureItemProps) {
  // Icon + Text combination for feature highlights
}
```

| Property | Required Props | Variants | States | Dependencies | Atoms |
|---|---|---|---|---|---|
| **FeatureItem** | icon, title, description | Icon + Text, Icon-only | Default, Hover | clsx | Icon, Text, Spacer |

### 3.4 Molecule: Stat Box

```typescript
// src/components/molecules/StatBox.tsx
interface StatBoxProps {
  value: string
  label: string
  icon?: ReactNode
  highlight?: boolean
}

export function StatBox({ value, label, icon }: StatBoxProps) {
  // Number + Label display for metrics
}
```

| Property | Required Props | Variants | States | Dependencies | Atoms |
|---|---|---|---|---|---|
| **StatBox** | value, label | With icon, Without icon | Default, Highlight | clsx | Text, Icon, Card |

### 3.5 Molecule: Company Logo Grid Item

```typescript
// src/components/molecules/CompanyLogoItem.tsx
interface CompanyLogoItemProps {
  name: string
  logo?: string
  category?: string
}

export function CompanyLogoItem({ name, logo }: CompanyLogoItemProps) {
  // Branded company logo + name display
}
```

| Property | Required Props | Variants | States | Dependencies | Atoms |
|---|---|---|---|---|---|
| **CompanyLogoItem** | name | With logo, Without logo | Default, Hover | clsx | Text, Spacer |

---

## 4. ORGANISMS (复合单元)

### 4.1 Organism: Hero Section

```typescript
// src/components/sections/Hero.tsx
interface HeroSectionProps {
  title: string
  subtitle: string
  description?: string
  cta: { label: string; action: () => void }[]
  backgroundImage?: string
}

export default function Hero({ title, subtitle, cta }: HeroSectionProps) {
  // Full-width hero with background, text, and multiple CTAs
}
```

| Component | Purpose | Children | State Variations | Props |
|---|---|---|---|---|
| **Hero** | Page entry point, attention-grabbing section | Text, Buttons, Badge | Default, With background, Overlay | title, subtitle, cta, backgroundImage |
| Dependencies | Button, Text, Badge, Spacer | - | - | - |

### 4.2 Organism: Feature Grid

```typescript
// src/components/organisms/FeatureGrid.tsx
interface FeatureGridProps {
  title: string
  features: { icon: ReactNode; title: string; description: string }[]
  columns?: 2 | 3 | 4
  variant?: 'with-icons' | 'numbered'
}

export function FeatureGrid({ title, features, columns = 3 }: FeatureGridProps) {
  // Grid of features with responsive columns
}
```

| Component | Purpose | Children | State Variations | Props |
|---|---|---|---|---|
| **FeatureGrid** | Display multiple features in grid | FeatureItem (molecules), Section title | 2, 3, 4 columns | features[], columns, variant |
| Dependencies | FeatureItem, Text, Spacer, Card | - | - | - |

### 4.3 Organism: Company Carousel

```typescript
// src/components/organisms/CompanyCarousel.tsx
interface CompanyCarouselProps {
  companies: { name: string; logo?: string }[]
  category?: string
  autoScroll?: boolean
}

export function CompanyCarousel({ companies, autoScroll = true }: CompanyCarouselProps) {
  // Scrollable list of company logos with pagination
}
```

| Component | Purpose | Children | State Variations | Props |
|---|---|---|---|---|
| **CompanyCarousel** | Display recruiting partners with scroll | CompanyLogoItem (molecules), Navigation | Auto-scroll, Manual scroll | companies[], category, autoScroll |
| Dependencies | CompanyLogoItem, Button, Spacer | - | - | - |

### 4.4 Organism: Stats Section

```typescript
// src/components/organisms/StatsSection.tsx
interface StatsSectionProps {
  title: string
  stats: { value: string; label: string; icon?: ReactNode }[]
  layout?: 'grid' | 'row'
}

export function StatsSection({ title, stats, layout = 'grid' }: StatsSectionProps) {
  // Display KPIs/metrics in grid or row layout
}
```

| Component | Purpose | Children | State Variations | Props |
|---|---|---|---|---|
| **StatsSection** | Highlight key metrics (placements, packages) | StatBox (molecules), Section title | Grid (3 cols), Row (inline) | stats[], title, layout |
| Dependencies | StatBox, Text, Spacer, Card | - | - | - |

### 4.5 Organism: Footer

```typescript
// src/components/Footer.tsx
interface FooterProps {
  contactInfo: {
    phone: string
    email: string
    address?: string
  }
  links?: { label: string; href: string }[]
}

export default function Footer({ contactInfo, links }: FooterProps) {
  // Comprehensive footer with contact and navigation
}
```

| Component | Purpose | Children | State Variations | Props |
|---|---|---|---|---|
| **Footer** | Page footer with contact info, links, copyright | Icon buttons, Text links, Forms | Dark background, Minimal, Full | contactInfo, links, socialLinks |
| Dependencies | Button, Icon, Text, Spacer, Link | - | - | - |

### 4.6 Organism: Section Container

```typescript
// src/components/organisms/SectionContainer.tsx
interface SectionContainerProps {
  children: ReactNode
  id?: string
  title?: string
  subtitle?: string
  background?: 'white' | 'light' | 'primary'
  spacing?: 'compact' | 'default' | 'loose'
}

export function SectionContainer({ children, background = 'white' }: SectionContainerProps) {
  // Reusable section wrapper with consistent spacing and backgrounds
}
```

| Component | Purpose | Children | State Variations | Props |
|---|---|---|---|---|
| **SectionContainer** | Wrapper for major page sections | Any content, Title, Subtitle | White bg, Light bg, Primary bg | children, title, background, spacing |
| Dependencies | Text, Spacer | - | - | - |

---

## 5. TEMPLATES & PAGES

### 5.1 Template: Landing Page

```typescript
// src/templates/LandingPageTemplate.tsx
interface LandingPageTemplateProps {
  sections: {
    hero: HeroSectionProps
    features: FeatureGridProps
    stats: StatsSectionProps
    companies: CompanyCarouselProps
    cta: CTAProps
  }
}

export function LandingPageTemplate({ sections }: LandingPageTemplateProps) {
  return (
    <>
      <Hero {...sections.hero} />
      <FeatureGrid {...sections.features} />
      <StatsSection {...sections.stats} />
      <CompanyCarousel {...sections.companies} />
      <CTA {...sections.cta} />
      <Footer />
    </>
  )
}
```

### 5.2 Page: Home (app/page.tsx)

```typescript
// src/app/page.tsx
import Hero from '@components/sections/Hero'
import About from '@components/sections/About'
// ... other imports

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Programme />
      {/* ... all organisms in sequence */}
      <Footer />
    </main>
  )
}
```

---

## 6. STATE MANAGEMENT TABLE

### Global State (if needed)

| State | Type | Purpose | Default | Scope |
|---|---|---|---|---|
| isLoading | boolean | Track API calls, data fetches | false | Global or local |
| errorMessage | string \| null | Display error toasts | null | Global or local |
| currentSection | string | Track active section (for nav) | 'hero' | Global (SPA) |
| formData | object | Store form inputs | {} | Local/Session |

### Local Component State Examples

```typescript
// Button component state
const [isActive, setIsActive] = useState(false)
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState<string | null>(null)

// Carousel component state
const [currentIndex, setCurrentIndex] = useState(0)
const [autoPlay, setAutoPlay] = useState(true)

// Form component state
const [formData, setFormData] = useState({})
const [touched, setTouched] = useState({})
const [errors, setErrors] = useState({})
```

---

## 7. COMPONENT NAMING CONVENTIONS

### BEM-Inspired Naming

```
ComponentName
component-name   (CSS class)
component__element
component--modifier
```

### Examples

```typescript
// Component file structure
src/
├── components/
│   ├── ui/                    // Atoms
│   │   ├── Button.tsx
│   │   ├── Icon.tsx
│   │   └── Badge.tsx
│   ├── molecules/             // Molecules (combinations)
│   │   ├── Card.tsx
│   │   ├── ButtonGroup.tsx
│   │   └── FeatureItem.tsx
│   ├── organisms/             // Complex components
│   │   ├── FeatureGrid.tsx
│   │   ├── CompanyCarousel.tsx
│   │   └── StatsSection.tsx
│   ├── sections/              // Full-width sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Placements.tsx
│   │   └── Footer.tsx
│   └── templates/             // Page-level layouts
│       └── LandingPageTemplate.tsx
```

### CSS Class Naming

```css
/* Atom: Button */
.button { }
.button--primary { }
.button--secondary { }
.button--disabled { }

/* Molecule: Card */
.card { }
.card--elevated { }

/* Organism: Hero */
.hero { }
.hero__heading { }
.hero__subtitle { }
.hero__actions { }
```

---

## 8. COMPONENT DEPENDENCY GRAPH

```
Page (app/page.tsx)
├── Hero (Organism)
│   ├── Button (Atom)
│   ├── Text (Atom)
│   └── Badge (Atom)
├── About (Organism)
│   ├── Text (Atom)
│   └── Button (Atom)
├── FeatureGrid (Organism)
│   ├── FeatureItem (Molecule)
│   │   ├── Icon (Atom)
│   │   ├── Text (Atom)
│   │   └── Spacer (Atom)
│   └── Card (Molecule)
├── StatsSection (Organism)
│   ├── StatBox (Molecule)
│   │   ├── Icon (Atom)
│   │   ├── Text (Atom)
│   │   └── Card (Molecule)
├── CompanyCarousel (Organism)
│   ├── CompanyLogoItem (Molecule)
│   │   ├── Text (Atom)
│   │   └── Icon (Atom)
│   └── Button (Atom)
└── Footer (Organism)
    ├── Icon (Atom)
    ├── Text (Atom)
    ├── Button (Atom)
    └── Link (Atom)
```

---

## 9. COMPONENT PROPS INTERFACE STANDARDS

### Template

```typescript
interface ComponentNameProps {
  // Required props
  children?: ReactNode
  
  // Semantic props
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  
  // State props
  disabled?: boolean
  isLoading?: boolean
  
  // Event handlers
  onClick?: () => void
  onChange?: (value: any) => void
  
  // Styling props
  className?: string
  style?: CSSProperties
  
  // Data props
  data?: unknown
  
  // Accessibility
  ariaLabel?: string
  ariaDescribedBy?: string
}
```

---

## 10. REUSABILITY & DRY PRINCIPLE IMPLEMENTATION

### ✅ Do's

```typescript
// ✓ Reusable Button component
<Button variant="primary" size="lg" onClick={handleClick}>
  Apply Now
</Button>

// ✓ Reusable FeatureItem
<FeatureItem
  icon={<CheckIcon />}
  title="Fast Delivery"
  description="Quick turnaround times"
/>

// ✓ Reusable Card with consistent spacing
<Card variant="elevated">
  <Text variant="heading.sm">Card Title</Text>
  <Text variant="body.sm">Card content</Text>
</Card>
```

### ❌ Don'ts

```typescript
// ✗ Hardcoded styles repeated
<button style={{ background: '#0284c7', padding: '12px 24px' }}>
  Button
</button>

// ✗ Duplicate feature markup
<div className="flex items-center gap-4">
  <Icon />
  <div>
    <h3>Title</h3>
    <p>Description</p>
  </div>
</div>
{/* ... repeated 6 more times for different features */}

// ✗ Inconsistent card styling
<div className="bg-white p-6 rounded shadow-md">
  Content
</div>
<div className="bg-slate-50 p-4 rounded-lg border">
  Different Card
</div>
```

---

## 11. COMPONENT API CHECKLIST

For each component, ensure:

- [ ] **Props interface defined** - All expected props with types
- [ ] **Default values** - Sensible defaults for optional props
- [ ] **Variants documented** - All variant options listed
- [ ] **State variations** - Default, hover, active, disabled, loading, error
- [ ] **Accessibility** - ARIA attributes, semantic HTML, keyboard navigation
- [ ] **Responsive** - Mobile, tablet, desktop breakpoints tested
- [ ] **TypeScript strict** - No `any` types, full type safety
- [ ] **No prop drilling** - Avoid passing too many props through levels
- [ ] **Composition ready** - Can be composed with other components
- [ ] **Testable** - Can be tested in isolation

---

## 12. COMPONENT PERFORMANCE OPTIMIZATION

### Code Splitting Strategy

```typescript
// Dynamic imports for large components
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('@components/organisms/HeavyComponent'), {
  loading: () => <SkeletonLoader />,
  ssr: false, // If heavy with client-side logic
})
```

### Memoization

```typescript
import { memo } from 'react'

// Prevent re-renders for unchanged props
export const FeatureItem = memo(function FeatureItem({
  icon,
  title,
  description,
}: FeatureItemProps) {
  return (
    // Component JSX
  )
})
```

### Lazy Loading Sections

```typescript
// Intersection Observer for lazy-load animations
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  })
  
  document.querySelectorAll('[data-observe]').forEach(el => observer.observe(el))
}, [])
```

---

## 13. DOCUMENTATION TEMPLATE

```markdown
# Component: Button

## Purpose
Primary interactive element for user actions.

## Props
- `variant`: 'primary' | 'secondary' | 'outline' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `disabled`: boolean (default: false)
- `onClick`: () => void

## Usage
\`\`\`tsx
<Button variant="primary" size="lg" onClick={handleSubmit}>
  Submit Form
</Button>
\`\`\`

## States
- Default
- Hover (shadow increase, color shift)
- Focus (ring outline)
- Active (scale 0.95)
- Disabled (opacity 0.5, cursor not-allowed)
- Loading (spinner instead of text)

## Accessibility
- ARIA role="button"
- Keyboard navigable
- Focus visible outline
```

---

## 14. ATOMIC DESIGN MATURITY LEVELS

| Level | State | Examples |
|---|---|---|
| **Foundation** | Design tokens, base styles | Colors, typography, spacing |
| **Atoms** | Basic building blocks | Button, Icon, Badge |
| **Molecules** | Combinations of atoms | Card, ButtonGroup, FeatureItem |
| **Organisms** | Complex compositions | Hero, FeatureGrid, Footer |
| **Templates** | Page-level layouts | LandingPageTemplate |
| **Pages** | Live content | app/page.tsx with real data |

**Current Status**: Full atomic design system implemented from tokens → pages

---

## 15. COMPONENT INVENTORY

| Component | Type | Status | Variants | Responsive |
|---|---|---|---|---|
| Button | Atom | ✓ Complete | Primary, Secondary, Outline | ✓ Yes |
| Icon | Atom | ✓ Complete | 20+ icons from lucide-react | ✓ Yes |
| Text | Atom | ✓ Complete | 10+ typography variants | ✓ Fluid |
| Badge | Atom | → Planned | Color variants | ✓ Yes |
| Card | Molecule | ✓ Complete | Default, Elevated, Outlined | ✓ Yes |
| FeatureItem | Molecule | ✓ Complete | With icon, Icon-only | ✓ Yes |
| StatBox | Molecule | ✓ Complete | With/without icon | ✓ Yes |
| Hero | Organism | ✓ Complete | Default | ✓ Yes |
| FeatureGrid | Organism | ✓ Complete | 2/3/4 cols | ✓ Yes |
| CompanyCarousel | Organism | ✓ Complete | Scroll, Pagination | ✓ Yes |
| StatsSection | Organism | ✓ Complete | Grid, Row | ✓ Yes |
| Footer | Organism | ✓ Complete | Dark theme | ✓ Yes |

---

**Component Architecture Ownership**: Engineering Team  
**Last Updated**: May 10, 2026  
**Framework**: React 18 + Next.js 15 + TypeScript  
**Design Pattern**: Atomic Design + BEM Naming

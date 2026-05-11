# Design Token System (DTS)
## IGSB Landing Page - Semantic Design Tokens for Developer Handoff

---

## 1. COLOR TOKENS

### 1.1 Primary Color Tokens (Brand Identity)

```json
{
  "color": {
    "brand": {
      "primary": {
        "50": "#f0f9ff",   // Lightest (backgrounds, hover states)
        "100": "#e0f2fe",  // Very Light (subtle backgrounds)
        "200": "#bae6fd",  // Light (secondary backgrounds)
        "300": "#7dd3fc",  // Light-Medium (borders, accents)
        "400": "#38bdf8",  // Medium (interactive states)
        "500": "#0ea5e9",  // Main Brand Color (primary CTAs)
        "600": "#0284c7",  // Dark (primary buttons, active states)
        "700": "#0369a1",  // Darker (hover states, emphasis)
        "800": "#075985",  // Very Dark (text on light backgrounds)
        "900": "#0c3d66"   // Darkest (maximum contrast)
      },
      "secondary": {
        "50": "#f5f3ff",
        "100": "#ede9fe",
        "500": "#8b5cf6",   // Main Secondary Color
        "600": "#7c3aed",   // Dark Secondary
        "700": "#6d28d9"    // Darker Secondary
      },
      "accent": {
        "50": "#fefce8",
        "100": "#fef3c7",
        "500": "#f59e0b",   // Amber/Gold Accent
        "600": "#d97706",   // Dark Amber
        "700": "#b45309"    // Darker Amber
      }
    }
  }
}
```

### 1.2 Functional Color Tokens

```json
{
  "color": {
    "functional": {
      "background": {
        "default": "#ffffff",           // Primary background
        "neutral": "#f1f5f9",           // Neutral/slate background
        "subtle": "#f8fafc",            // Very subtle background
        "overlay": "rgba(0, 0, 0, 0.5)" // Modal overlay
      },
      "surface": {
        "elevated": "#ffffff",          // Elevated surfaces (cards)
        "primary": "brand.primary.600", // Primary surface (buttons)
        "secondary": "brand.secondary.600",
        "ghost": "transparent"
      },
      "text": {
        "primary": "#0f172a",           // Primary text (contrast: WCAG AA)
        "secondary": "#475569",         // Secondary text (lower contrast)
        "tertiary": "#94a3b8",          // Tertiary/placeholder text
        "inverse": "#ffffff",           // Text on dark backgrounds
        "warning": "#b45309",           // Warning text
        "success": "#16a34a",           // Success text
        "error": "#dc2626"              // Error text
      },
      "border": {
        "default": "#e2e8f0",           // Default borders
        "subtle": "#f1f5f9",            // Subtle borders
        "primary": "brand.primary.600", // Primary borders
        "error": "#dc2626"              // Error borders
      }
    }
  }
}
```

### 1.3 Semantic State Tokens

```json
{
  "color": {
    "state": {
      "hover": {
        "primary": "brand.primary.700",    // Button hover
        "secondary": "brand.secondary.700",
        "background": "brand.primary.50"   // Card hover background
      },
      "focus": {
        "ring": "brand.primary.500",       // Focus ring color
        "background": "brand.primary.50"   // Focus background shift
      },
      "active": {
        "primary": "brand.primary.800",    // Active/pressed state
        "background": "brand.primary.100"  // Active background
      },
      "disabled": {
        "text": "#cbd5e1",                 // Disabled text
        "background": "#f1f5f9",           // Disabled background
        "border": "#e2e8f0"                // Disabled border
      },
      "error": {
        "primary": "#dc2626",              // Error state primary
        "light": "#fee2e2",                // Error background
        "border": "#fecaca"                // Error border
      },
      "success": {
        "primary": "#16a34a",              // Success state primary
        "light": "#dcfce7",                // Success background
        "border": "#bbf7d0"                // Success border
      },
      "warning": {
        "primary": "#b45309",              // Warning state primary
        "light": "#fef3c7",                // Warning background
        "border": "#fde68a"                // Warning border
      }
    }
  }
}
```

---

## 2. TYPOGRAPHY TOKENS

### 2.1 Font Family Stack

```json
{
  "typography": {
    "fontFamily": {
      "sans": "\"Inter\", system-ui, -apple-system, sans-serif",
      "mono": "\"JetBrains Mono\", \"Courier New\", monospace",
      "display": "\"Inter\", system-ui, sans-serif"
    }
  }
}
```

### 2.2 Fluid Typographic Scale (Base 16px)

#### Desktop (1024px+)

| Token | Size | Weight | Line-Height | Letter-Spacing | Usage |
|---|---|---|---|---|---|
| `heading.1xl` | 48px | 700 | 1.2 (57.6px) | -0.02em | Hero title, section title |
| `heading.lg` | 36px | 700 | 1.3 (46.8px) | -0.015em | Large section headings |
| `heading.md` | 28px | 700 | 1.3 (36.4px) | -0.01em | Medium section headings |
| `heading.sm` | 24px | 700 | 1.4 (33.6px) | 0em | Small section headings |
| `heading.xs` | 20px | 600 | 1.5 (30px) | 0em | Card titles, subheadings |
| `body.lg` | 18px | 400 | 1.6 (28.8px) | 0em | Large body text, descriptions |
| `body.md` | 16px | 400 | 1.6 (25.6px) | 0em | Standard body text (BASE) |
| `body.sm` | 14px | 400 | 1.5 (21px) | 0em | Secondary body text |
| `body.xs` | 12px | 400 | 1.4 (16.8px) | 0.02em | Caption, metadata |
| `label` | 14px | 500 | 1.4 (19.6px) | 0em | Form labels, buttons |
| `caption` | 12px | 400 | 1.4 (16.8px) | 0.01em | Captions, hints |

#### Mobile (375px - 767px) — Adjusted Scale

| Token | Size | Weight | Line-Height | Letter-Spacing | Usage |
|---|---|---|---|---|---|
| `heading.1xl` | 32px | 700 | 1.2 (38.4px) | -0.02em | Hero title (mobile) |
| `heading.lg` | 28px | 700 | 1.3 (36.4px) | -0.01em | Large section headings |
| `heading.md` | 22px | 700 | 1.3 (28.6px) | 0em | Medium section headings |
| `heading.sm` | 18px | 700 | 1.4 (25.2px) | 0em | Small section headings |
| `body.lg` | 16px | 400 | 1.6 (25.6px) | 0em | Large body text |
| `body.md` | 15px | 400 | 1.6 (24px) | 0em | Standard body text |
| `label` | 13px | 500 | 1.4 (18.2px) | 0em | Form labels |

### 2.3 Typography Token Objects (JSON)

```json
{
  "typography": {
    "scale": {
      "heading": {
        "1xl": {
          "fontSize": "clamp(32px, 5vw, 48px)",
          "fontWeight": 700,
          "lineHeight": 1.2,
          "letterSpacing": "-0.02em"
        },
        "lg": {
          "fontSize": "clamp(28px, 4.5vw, 36px)",
          "fontWeight": 700,
          "lineHeight": 1.3,
          "letterSpacing": "-0.015em"
        },
        "md": {
          "fontSize": "clamp(22px, 3.5vw, 28px)",
          "fontWeight": 700,
          "lineHeight": 1.3,
          "letterSpacing": "-0.01em"
        },
        "sm": {
          "fontSize": "1.5rem",
          "fontWeight": 700,
          "lineHeight": 1.4,
          "letterSpacing": "0em"
        }
      },
      "body": {
        "lg": {
          "fontSize": "1.125rem",
          "fontWeight": 400,
          "lineHeight": 1.6,
          "letterSpacing": "0em"
        },
        "md": {
          "fontSize": "1rem",
          "fontWeight": 400,
          "lineHeight": 1.6,
          "letterSpacing": "0em"
        },
        "sm": {
          "fontSize": "0.875rem",
          "fontWeight": 400,
          "lineHeight": 1.5,
          "letterSpacing": "0em"
        }
      },
      "label": {
        "fontSize": "0.875rem",
        "fontWeight": 500,
        "lineHeight": 1.4,
        "letterSpacing": "0em"
      }
    }
  }
}
```

---

## 3. SPACING & GEOMETRY TOKENS

### 3.1 8px Soft Grid System

```json
{
  "spacing": {
    "base": "4px",
    "xs": "4px",      // 1 unit
    "sm": "8px",      // 2 units
    "md": "16px",     // 4 units
    "lg": "24px",     // 6 units
    "xl": "32px",     // 8 units
    "2xl": "48px",    // 12 units
    "3xl": "64px",    // 16 units
    "4xl": "80px",    // 20 units
    "5xl": "96px"     // 24 units
  }
}
```

### 3.2 Semantic Spacing Tokens

```json
{
  "spacing": {
    "semantic": {
      "padding": {
        "button": "12px 24px",          // Button padding
        "card": "24px",                 // Card internal padding
        "section": "64px 24px",         // Section padding (vertical, horizontal)
        "container": "0 24px",          // Container horizontal padding
        "input": "12px 16px"            // Input field padding
      },
      "gap": {
        "tight": "4px",                 // Very close proximity
        "compact": "8px",               // Close items (form fields)
        "default": "16px",              // Default spacing between items
        "loose": "24px",                // Loose spacing (feature cards)
        "section": "48px"               // Between major sections
      },
      "margin": {
        "bottom.heading": "16px",       // Below headings
        "bottom.section": "48px",       // After sections
        "bottom.form": "24px"           // Below form groups
      }
    }
  }
}
```

### 3.3 Container Tokens

```json
{
  "spacing": {
    "container": {
      "maxWidth": "80rem",              // 1280px (max width)
      "gutter": {
        "mobile": "16px",               // Gutters on mobile
        "tablet": "24px",               // Gutters on tablet
        "desktop": "32px"               // Gutters on desktop
      }
    }
  }
}
```

### 3.4 Corner Radius Tokens

```json
{
  "radius": {
    "none": "0px",
    "xs": "2px",                        // Subtle curves
    "sm": "4px",                        // Small radius (inputs)
    "md": "8px",                        // Standard radius (buttons, cards)
    "lg": "12px",                       // Larger radius (feature cards)
    "xl": "16px",                       // Extra large (modals, sections)
    "2xl": "24px",                      // Hero-level radius
    "full": "9999px"                    // Fully rounded (badges, pills)
  }
}
```

---

## 4. VISUAL HIERARCHY & ELEVATION TOKENS

### 4.1 Shadow Tokens (Elevation Levels)

```json
{
  "shadow": {
    "none": "none",
    "xs": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    "sm": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
    "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
    "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
    "xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    "inner": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)"
  }
}
```

### 4.2 Elevation Level Mapping

| Level | Shadow Type | Z-Index | Use Case |
|---|---|---|---|
| **Flat** | none | 0 | Base elements, text |
| **Raised 1** | `shadow.xs` | 10 | Subtle elevation (disabled state) |
| **Raised 2** | `shadow.sm` | 20 | Default cards, inputs, buttons at rest |
| **Raised 3** | `shadow.md` | 30 | Card hover state, interactive elements |
| **Raised 4** | `shadow.lg` | 40 | Elevated cards on scroll, popovers |
| **Raised 5** | `shadow.xl` | 50 | Modals, sidebars, dropdowns |
| **Raised 6** | `shadow.2xl` | 100 | Full-screen overlays, top-most modals |

### 4.3 Z-Index Scale

```json
{
  "zIndex": {
    "hide": "-1",
    "auto": "auto",
    "base": "0",
    "sticky": "10",
    "fixed": "20",
    "dropdown": "30",
    "modal": "40",
    "popover": "50",
    "tooltip": "60",
    "notification": "70",
    "overlay": "100"
  }
}
```

---

## 5. RESPONSIVE BREAKPOINTS

```json
{
  "breakpoints": {
    "mobile": "0px",        // 375px - 639px
    "sm": "640px",          // 640px - 767px
    "md": "768px",          // 768px - 1023px
    "lg": "1024px",         // 1024px - 1279px
    "xl": "1280px",         // 1280px+
    "2xl": "1536px"         // Ultra-wide screens
  }
}
```

### Breakpoint Usage Table

| Breakpoint | Viewport | Device | Primary Adjustment |
|---|---|---|---|
| **mobile** | 375px | iPhone, small Android | Single column, stacked layout, reduced padding |
| **sm** | 640px | Larger mobile | Single column, slight padding increase |
| **md** | 768px | iPad, tablet | 2-column grids, adjusted typography |
| **lg** | 1024px | Desktop, laptop | 3-column grids, full spacing |
| **xl** | 1280px | Large desktop | 4+ columns, max-width container |
| **2xl** | 1536px | Ultra-wide | Full-width with margins, large typography |

---

## 6. TRANSITION & ANIMATION TOKENS

```json
{
  "transition": {
    "fast": "100ms",
    "base": "150ms",
    "normal": "200ms",
    "slow": "300ms",
    "slower": "500ms"
  },
  "easing": {
    "linear": "linear",
    "ease-in": "cubic-bezier(0.42, 0, 1, 1)",
    "ease-out": "cubic-bezier(0, 0, 0.58, 1)",
    "ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
    "material": "cubic-bezier(0.4, 0, 0.2, 1)",
    "bounce": "cubic-bezier(0.34, 1.56, 0.64, 1)",
    "sharp": "cubic-bezier(0.645, 0.045, 0.355, 1)"
  }
}
```

---

## 7. COMPONENT-SPECIFIC TOKEN SETS

### 7.1 Button Token Set

```json
{
  "component": {
    "button": {
      "primary": {
        "background": "brand.primary.600",
        "color": "white",
        "border": "none",
        "padding": "12px 24px",
        "borderRadius": "8px",
        "fontSize": "1rem",
        "fontWeight": 600,
        "shadow": "shadow.sm",
        "hover": {
          "background": "brand.primary.700",
          "shadow": "shadow.md"
        },
        "active": {
          "background": "brand.primary.800",
          "transform": "scale(0.95)"
        },
        "disabled": {
          "background": "color.state.disabled.background",
          "color": "color.state.disabled.text",
          "opacity": 0.5
        }
      },
      "secondary": {
        "background": "white",
        "color": "brand.primary.600",
        "border": "1px solid",
        "borderColor": "brand.primary.600",
        "padding": "12px 24px",
        "borderRadius": "8px",
        "hover": {
          "background": "brand.primary.50",
          "shadow": "shadow.md"
        }
      },
      "outline": {
        "background": "transparent",
        "color": "white",
        "border": "2px solid white",
        "padding": "12px 24px",
        "borderRadius": "8px",
        "hover": {
          "background": "rgba(255, 255, 255, 0.1)"
        }
      }
    }
  }
}
```

### 7.2 Card Token Set

```json
{
  "component": {
    "card": {
      "background": "white",
      "border": "none",
      "borderRadius": "12px",
      "padding": "24px",
      "shadow": "shadow.sm",
      "hover": {
        "shadow": "shadow.lg",
        "transform": "translateY(-2px)"
      }
    }
  }
}
```

### 7.3 Input Token Set

```json
{
  "component": {
    "input": {
      "background": "white",
      "border": "1px solid",
      "borderColor": "color.border.default",
      "borderRadius": "8px",
      "padding": "12px 16px",
      "fontSize": "1rem",
      "color": "color.text.primary",
      "focus": {
        "borderColor": "brand.primary.500",
        "boxShadow": "0 0 0 3px rgba(14, 165, 233, 0.1)",
        "outline": "none"
      },
      "error": {
        "borderColor": "color.state.error.primary",
        "boxShadow": "0 0 0 3px rgba(220, 38, 38, 0.1)"
      },
      "disabled": {
        "background": "color.state.disabled.background",
        "color": "color.state.disabled.text",
        "borderColor": "color.state.disabled.border",
        "cursor": "not-allowed"
      }
    }
  }
}
```

---

## 8. ACCESSIBILITY TOKENS

```json
{
  "a11y": {
    "focusRing": {
      "width": "2px",
      "color": "brand.primary.500",
      "offset": "2px",
      "style": "solid"
    },
    "highContrast": {
      "borderWidth": "2px",
      "fontSize": "1.125rem",
      "lineHeight": 1.6
    },
    "reducedMotion": {
      "transitionDuration": "0.01ms",
      "animationDuration": "0.01ms"
    }
  }
}
```

---

## 9. TAILWIND CSS CONFIGURATION EXPORT

```javascript
// tailwind.config.ts
export default {
  theme: {
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
      },
      secondary: {
        600: '#7c3aed',
        700: '#6d28d9',
      },
      accent: {
        500: '#f59e0b',
        600: '#d97706',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Inter, system-ui, sans-serif',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
      },
      borderRadius: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
      boxShadow: {
        'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        'fast': '100ms',
        'base': '150ms',
        'normal': '200ms',
        'slow': '300ms',
      },
    },
  },
}
```

---

## 10. CSS VARIABLES IMPLEMENTATION

```css
/* src/styles/tokens.css */
:root {
  /* Color Tokens */
  --color-primary-50: #f0f9ff;
  --color-primary-600: #0284c7;
  --color-primary-700: #0369a1;
  --color-text-primary: #0f172a;
  --color-text-secondary: #475569;
  --color-border-default: #e2e8f0;
  --color-background-default: #ffffff;

  /* Spacing Tokens */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;

  /* Typography Tokens */
  --font-family-sans: Inter, system-ui, sans-serif;
  --font-size-sm: 0.875rem;
  --font-size-md: 1rem;
  --font-size-lg: 1.125rem;
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.6;

  /* Transition Tokens */
  --transition-fast: 100ms;
  --transition-normal: 200ms;
  --transition-slow: 300ms;
  --easing-ease-out: cubic-bezier(0, 0, 0.58, 1);

  /* Shadow Tokens */
  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Usage Example */
.button-primary {
  background-color: var(--color-primary-600);
  color: white;
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: 8px;
  font-family: var(--font-family-sans);
  transition: background-color var(--transition-normal) var(--easing-ease-out);
  box-shadow: var(--shadow-sm);
}

.button-primary:hover {
  background-color: var(--color-primary-700);
  box-shadow: var(--shadow-md);
}
```

---

## 11. DESIGN TOKEN VALIDATION CHECKLIST

- [ ] All colors have minimum WCAG AA contrast ratio (4.5:1 for text)
- [ ] Typography scale is harmonious (ratio: 1.125 or golden ratio)
- [ ] Spacing is consistent with 4px/8px grid system
- [ ] Shadows follow consistent elevation model
- [ ] Transitions use appropriate easing and duration
- [ ] All tokens are semantic (functional naming, not hex codes)
- [ ] Tokens work across light and dark mode (if applicable)
- [ ] Tokens are documented with usage examples
- [ ] Tokens are implemented in code (CSS, JS, config files)
- [ ] Design team and engineering team have approved token definitions

---

## 12. TOKEN VERSIONING

| Version | Date | Changes |
|---|---|---|
| 1.0 | May 10, 2026 | Initial token system for IGSB landing page |
| (Future) | TBD | Dark mode tokens, animation refinements |

---

**Design Token System Ownership**: Design Systems Team  
**Last Updated**: May 10, 2026  
**Framework**: Tailwind CSS + CSS Variables  
**Compliance**: WCAG 2.1 AA, ATAG 2.0

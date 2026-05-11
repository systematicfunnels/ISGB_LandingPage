# Interaction Behavior Matrix (IBM)
## IGSB Landing Page - Comprehensive Micro-Interactions & Motion Physics

---

## 1. GESTURE-BASED INTERACTIONS

### 1.1 Tap Interactions

| User Action | Trigger | System Logic | Visual/Haptic Feedback | Motion Spec |
|---|---|---|---|---|
| **Tap Button (Primary)** | Touch/Click on `.btn-primary` | Activate action, navigate, or submit form | Scale: 0.95 on press, ripple effect from tap point | Duration: 200ms, Easing: cubic-bezier(0.4, 0, 0.2, 1) |
| **Tap Button (Secondary)** | Touch/Click on `.btn-secondary` | Activate action with lower priority | Background color shift + subtle shadow increase | Duration: 150ms, Easing: ease-in-out |
| **Tap Button (Outline)** | Touch/Click on `.btn-outline` | Border highlight + text color intensify | Border thickness +1px, text opacity 1.0 | Duration: 100ms, Easing: linear |
| **Tap Navigation Link** | Touch/Click on `<a>` tags in sections | Smooth scroll to section (if anchor) or navigate away | Underline animation (slide-in from left) | Duration: 300ms, Easing: cubic-bezier(0.645, 0.045, 0.355, 1) |
| **Tap Form Input** | Touch/Click on input field | Focus state activation, keyboard open (mobile) | Border color to primary-600, shadow glow effect | Duration: 200ms, Easing: ease-out |
| **Tap Icon (Call-to-Action)** | Touch/Click on icons (phone, email, globe) | Copy to clipboard / Open URL / Dial number | Label tooltip fade-in + haptic buzz (mobile) | Duration: 150ms, Easing: ease-in |
| **Tap Card (Company/Feature)** | Touch/Click on `.shadow-md` cards | Expand/highlight card, open detail modal | Scale: 1.05, shadow elevation +3 layers | Duration: 200ms, Easing: cubic-bezier(0.34, 1.56, 0.64, 1) |

### 1.2 Swipe Interactions

| User Action | Trigger | System Logic | Visual/Haptic Feedback | Motion Spec |
|---|---|---|---|---|
| **Swipe Left (Mobile)** | Touch swipe on company carousel | Move to next company batch | Slide out animation on current batch, slide in next | Duration: 400ms, Easing: cubic-bezier(0.455, 0.03, 0.515, 0.955) |
| **Swipe Right (Mobile)** | Touch swipe on company carousel | Move to previous company batch | Slide out left, previous batch slides back in | Duration: 400ms, Easing: cubic-bezier(0.455, 0.03, 0.515, 0.955) |
| **Swipe Up (Mobile)** | Scroll/swipe up on page | Trigger sticky nav collapse, hide hero CTA | Nav bar compresses (height reduces 40%), CTA fades out | Duration: 250ms, Easing: ease-in |
| **Swipe Down (Mobile)** | Scroll/swipe down on page | Lazy load next sections, trigger "scroll-to-top" button | Fade-in of new content, button appears at 80vh scroll | Duration: 300ms, Easing: ease-out |

### 1.3 Hover Interactions (Desktop/Tablet)

| User Action | Trigger | System Logic | Visual/Haptic Feedback | Motion Spec |
|---|---|---|---|---|
| **Hover Button** | Mouse hover on button | Background color shift, shadow elevation increase | Primary button: bg 600→700, shadow +2 layers | Duration: 150ms, Easing: ease-out |
| **Hover Card** | Mouse hover on `.shadow-md` cards | Card elevates, text color shift, scale subtle increase | Scale: 1.02, shadow elevation +4 layers, bg opacity +0.05 | Duration: 200ms, Easing: cubic-bezier(0.34, 1.56, 0.64, 1) |
| **Hover Link** | Mouse hover on text link | Underline animation, text color intensify | Underline: slide-in from left (100%), color: primary-700 | Duration: 200ms, Easing: ease-out |
| **Hover Icon** | Mouse hover on icon (phone, email) | Icon scale increase, color shift, tooltip appears | Scale: 1.2, color: accent-500, tooltip fade-in | Duration: 150ms, Easing: ease-in-out |
| **Hover Stat Box** | Mouse hover on placement stats | Number highlights with accent color, icon glows | Number color: accent-600, icon glow: blur(8px) opacity-80 | Duration: 180ms, Easing: ease-out |
| **Hover Feature Card** | Mouse hover on "Why Choose" cards | Icon background color intensify, text highlight | Icon bg: primary-700, text: primary-600, opacity-100 | Duration: 150ms, Easing: ease-in-out |

### 1.4 Cursor Changes

| Element | Cursor Type | Context |
|---|---|---|
| Buttons (all variants) | `cursor-pointer` → `cursor-pointer` (active on press) | Interactive element |
| Links (`<a>`) | `cursor-pointer` | Navigation |
| Text Content | `cursor-text` | Copyable content (e.g., email, phone) |
| Disabled Buttons | `cursor-not-allowed` | Disabled state |
| Section Headers | `cursor-default` | Non-interactive |
| Cards (on hover) | `cursor-pointer` | Interactive cards |

---

## 2. FEEDBACK LOOPS

### 2.1 Loading States

| State | Trigger | Visual Representation | Animation |
|---|---|---|---|
| **Skeleton Loading** | API call / Image load / Section appears below fold | Gray gradient pulse placeholders matching content shape | Shimmer effect: `background: linear-gradient(90deg, #f0f0f0, #e0e0e0)` animates left-to-right |
| **Spinner Loading** | Form submission / Long async operation | Centered spinner (if delay > 500ms), ring style | Rotation: `spin 1s linear infinite`, opacity fades in at 300ms |
| **Progress Bar** | Multi-step process (if implemented) | Horizontal bar at top of viewport, fills left-to-right | Width: 0% → 100%, duration: variable based on operation |
| **Content Fade-In** | Section lazy-loaded into viewport | Content appears with opacity: 0 → 1 | Duration: 400ms, Easing: ease-out, triggered on intersection |

### 2.2 Success States

| Action | Visual Feedback | Haptic Feedback (Mobile) | Duration |
|---|---|---|---|
| **Form Submission** | Green checkmark + toast notification "Success! Your details received." | Haptic: `.medium` vibration | Toast visible: 4000ms auto-dismiss |
| **Copy to Clipboard** | Tooltip: "Copied!" green text, icon change to checkmark | Haptic: `.light` buzz | Duration: 2000ms, then revert icon |
| **Navigation Complete** | Page fade-in, scroll smooth to target section | (N/A - navigation inherent feedback) | Scroll duration: 300ms |
| **Like/Favorite Action** | Icon fill animation (empty → solid), color: accent-500 | Haptic: `.selection` buzz | Icon animation: 300ms, cubic-bezier(0.34, 1.56, 0.64, 1) |

### 2.3 Error States

| Error Type | Visual Feedback | Haptic Feedback (Mobile) | Recovery Action |
|---|---|---|---|
| **Form Validation Error** | Input field: border red, shake animation, error message slides down | Haptic: `.heavy` vibration (3x short pulses) | Duration: 400ms shake, message stays until field corrected |
| **Network Timeout** | Toast dialog: "Connection lost. Retrying..." with spinner | Haptic: `.heavy` vibration on appearance | Auto-retry every 2s, manual "Retry" button visible |
| **API Error (50x)** | Modal: "Something went wrong. Try again later." with close button | Haptic: `.heavy` vibration on modal appearance | Duration: 8000ms (longer persist), hide after click |
| **Invalid Input** | Inline error text + input field highlight (border: 2px red) | Haptic: `.selection` buzz on error appearance | Error persists until valid input detected |

### 2.4 Shake Animation (Error Indicator)

```css
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  75% { transform: translateX(10px); }
}
/* Applied to: input[aria-invalid="true"] */
animation: shake 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

---

## 3. MOTION LOGIC

### 3.1 Easing Functions

| Easing Type | Cubic-Bezier | Use Case | Duration |
|---|---|---|---|
| **Ease-In** | `cubic-bezier(0.42, 0, 1, 1)` | Objects accelerating into view | 200-300ms |
| **Ease-Out** | `cubic-bezier(0, 0, 0.58, 1)` | Objects decelerating to rest | 200-300ms |
| **Ease-In-Out** | `cubic-bezier(0.42, 0, 0.58, 1)` | Balanced motion (default) | 200-300ms |
| **Material Motion** | `cubic-bezier(0.4, 0, 0.2, 1)` | Consistent MD design language | 200-500ms |
| **Bounce** | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful, emphasis motion | 300-400ms |
| **Sharp** | `cubic-bezier(0.645, 0.045, 0.355, 1)` | Snappy, app-like feel | 100-200ms |

### 3.2 Entry Transitions

| Element | Animation | Duration | Easing | Trigger |
|---|---|---|---|---|
| **Hero Section** | Fade + Slide-Up (transform: translateY(40px) → 0) | 600ms | ease-out | Page load |
| **Section Heading** | Fade + Slide-In-Left (80px offset) | 500ms | material-motion | Intersection Observer (visible) |
| **Feature Cards (Grid)** | Staggered fade-in with scale (1.0 → 1.02) | 400ms (stagger: 100ms) | ease-out | Intersection Observer |
| **Company Logos** | Fade-in with slight rotation (0° → 2°) | 300ms | ease-out | Grid render |
| **Footer** | Slide-Up from bottom (60px) | 400ms | ease-out | Page scroll near footer |
| **Modal/Dialog** | Scale (0.95 → 1.0) + Fade-in | 300ms | cubic-bezier(0.34, 1.56, 0.64, 1) | Trigger event |

### 3.3 Exit Transitions

| Element | Animation | Duration | Easing | Trigger |
|---|---|---|---|---|
| **Modal Close** | Scale (1.0 → 0.95) + Fade-out | 250ms | ease-in | Close button / ESC key |
| **Toast Dismiss** | Slide-right + Fade-out | 300ms | ease-in | Auto-dismiss timeout |
| **Page Transition** | Fade-out + Slide-out (to direction) | 300ms | ease-in | Navigation event |
| **Error Message** | Slide-down fade-out | 250ms | ease-in | User action / timeout |

### 3.4 Continuous Motion

| Animation | Type | Duration | Easing | Use Case |
|---|---|---|---|---|
| **Loading Spinner** | Rotation (360°) | 1000ms | linear | Loading states |
| **Shimmer Pulse** | Background shift left-to-right | 1500ms | ease-in-out (infinite) | Skeleton loading |
| **Floating Icon** | Subtle Y translation (±5px) | 3000ms | ease-in-out (infinite) | Decorative accents |
| **Gradient Shift** | Background color animation | 4000ms | ease-in-out (infinite) | Hero section gradient |

---

## 4. EDGE CASES & SPECIAL STATES

### 4.1 Disabled States

| Component | Disabled Styling | Behavior |
|---|---|---|
| **Disabled Button** | `opacity: 0.5`, `bg: gray-400`, `cursor: not-allowed` | No hover effects, no click events, no feedback |
| **Disabled Input** | `bg: gray-100`, `opacity: 0.6`, `cursor: not-allowed` | No focus state, no cursor changes, read-only appearance |
| **Disabled Link** | `opacity: 0.4`, `cursor: not-allowed`, `pointer-events: none` | No underline animation, no click events |

### 4.2 Empty States

| Scenario | Message | Visual | CTA Button |
|---|---|---|---|
| **No Search Results** | "No companies found matching your criteria." | Empty icon (briefcase outline), centered | "Clear Filters" — returns to default |
| **No Success Stories Loaded** | "Loading success stories..." | Skeleton cards shimmer | (None until load complete) |
| **Form Field Empty (Required)** | "This field is required" | Red border, error icon | No form submission allowed |

### 4.3 Connectivity States

| State | Indicator | Auto-Recovery | User Action |
|---|---|---|---|
| **Offline** | Banner at top: "You are offline. Some features unavailable." | Auto-check every 5s, dismiss on reconnect | Manual "Retry" button |
| **Slow Connection** | Lighter toast: "Slow connection detected." | Timeout increased to 10s + skeleton loader | (None - auto-detect) |
| **Connection Restored** | Brief green toast: "Back online." | Reload cached data, refresh sections | (Auto) |

### 4.4 Accessibility States

| Feature | ARIA Attribute | Behavior |
|---|---|---|
| **Focus-Visible** | `:focus-visible` styled with 2px outline | All interactive elements must have visible focus ring |
| **Reduced Motion** | `@media (prefers-reduced-motion: reduce)` | All animations duration: 0s or removed |
| **High Contrast** | `@media (prefers-contrast: more)` | Borders: +1px, colors: RGB values shifted for contrast |
| **Dark Mode** | `@media (prefers-color-scheme: dark)` | Invert light colors, maintain WCAG AA contrast |

---

## 5. INTERACTION CHOREOGRAPHY (SEQUENCES)

### 5.1 Hero Section Load Sequence

```
Timeline:
0ms     → Hero content begins fade-in (0 → 1)
100ms   → Hero heading slides in from left
200ms   → Hero paragraph slides in from left (staggered)
300ms   → CTA buttons scale-in + fade-in
400ms   → Decorative elements animate (floating effect begins)
Complete → All elements at rest by 600ms
```

### 5.2 Form Submission Flow

```
Timeline (User clicks "Apply Now"):
0ms     → Button scale to 0.95 (press feedback)
100ms   → Button text fades, spinner appears
200ms   → Form blur effect applied (bg: rgba opacity 0.3)
1000ms  → API response arrives
1100ms  → Spinner fades, checkmark appears (success)
1200ms  → Success message toast slides in
2000ms  → Toast auto-dismisses (slide-right)
Complete → Form resets or navigates (based on logic)
```

### 5.3 Card Hover Sequence (Desktop)

```
Timeline:
0ms     → User hovers card
50ms    → Card begins scale to 1.02
100ms   → Shadow begins to elevate
150ms   → Icon color shift begins
200ms   → Complete (all properties at rest)
On mouse leave:
0ms     → Reverse all animations
200ms   → Return to default state
```

### 5.4 Modal Open Sequence

```
Timeline (User clicks CTA in section):
0ms     → Overlay fades in (rgba: 0 → 0.5)
50ms    → Modal scale begins (0.95 → 1.0)
100ms   → Modal content fades in
200ms   → Modal fully interactive
On close (ESC key):
0ms     → Modal scale begins reverse (1.0 → 0.95)
100ms   → Overlay fades out
200ms   → Modal removed from DOM
```

---

## 6. MOTION PERFORMANCE & CONSTRAINTS

### 6.1 Performance Targets

- All animations **must** use GPU-accelerated properties: `transform`, `opacity`
- Avoid animating: `width`, `height`, `left`, `top` (use `transform: translate()` instead)
- Target **60 FPS** (16.67ms per frame) on mobile devices
- Test on mid-range devices (e.g., iPhone SE, Android with 4GB RAM)

### 6.2 Reduced Motion Compliance

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 6.3 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Cubic-bezier**: Fully supported in all modern browsers
- **Intersection Observer**: Polyfill required for IE11 (not targetted)

---

## 7. CODE IMPLEMENTATION REFERENCE

### 7.1 Button Interaction Example (React)

```typescript
// src/components/ui/Button.tsx with micro-interactions
'use client'
import { useState } from 'react'
import clsx from 'clsx'

export function Button({ children, variant = 'primary', onClick, ...props }) {
  const [isActive, setIsActive] = useState(false)
  
  return (
    <button
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onMouseLeave={() => setIsActive(false)}
      className={clsx(
        'font-semibold rounded-lg transition-all duration-150',
        isActive ? 'scale-95 shadow-lg' : 'scale-100',
        variant === 'primary' && 'bg-primary-600 hover:bg-primary-700 text-white',
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}
```

### 7.2 Scroll Animation Trigger (Intersection Observer)

```typescript
// src/utils/animations.ts
export function observeElements(selector: string) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })
  
  document.querySelectorAll(selector).forEach(el => observer.observe(el))
}
```

### 7.3 Motion CSS Module

```css
/* src/styles/motion.css */
@keyframes slideUpFade {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  animation: slideUpFade 500ms cubic-bezier(0, 0, 0.58, 1) forwards;
}
```

---

## 8. TESTING CHECKLIST

- [ ] All button interactions responsive to touch and mouse
- [ ] Loading states display spinners for >500ms operations
- [ ] Error shakes appear on validation failures
- [ ] Success toasts dismiss automatically after 4s
- [ ] Cards hover states respond within 150ms
- [ ] Reduced motion preference respected (animations disabled)
- [ ] All transitions GPU-accelerated (no jank on 60fps test)
- [ ] Accessibility: All interactive elements have visible focus states
- [ ] Mobile: Swipe gestures work on iOS and Android
- [ ] Network: Offline state displays banner, retries work on reconnect

---

**Version**: 1.0  
**Last Updated**: May 10, 2026  
**Design System Lead**: UX Engineering Team  
**Framework**: Next.js 15 + React 18 + Tailwind CSS

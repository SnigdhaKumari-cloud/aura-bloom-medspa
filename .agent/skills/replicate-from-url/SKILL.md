---
name: Replicate Website from URL
description: Takes a reference URL, extracts its content/layout/effects, and recreates it as a page in the Aura Bloom Medspa project using the project's design tokens. Produces brand-consistent pages that match the reference structure.
---

# Replicate Website from URL

## Purpose
When the user provides a reference URL, replicate the page's **content, layout, sections, and effects** while applying the **Aura Bloom Medspa design token system** for visual consistency. The output should look like the reference page *redesigned* in the Aura Bloom brand.

---

## Prerequisites

Before starting, read the design token files to load the brand system into context:

1. **TypeScript tokens** — `src/tokens/index.ts` (primary reference for all values)
2. **CSS tokens** — `src/tokens/tokens.css` (for CSS custom properties usage)
3. **Design tokens JSON** — `src/tokens/design-tokens.json` (for semantic meaning & descriptions)
Do NOT:

Overcrowd design

Use too many colors

Use generic stock spa imagery

Luxury = minimal + whitespace + strong typography
---

## Step-by-Step Workflow

### Step 1: Extract Reference Content

1. Use the `read_url_content` tool to fetch the reference URL.
2. If the page is complex or content is truncated, use `view_content_chunk` to read additional chunks.
3. Use the `browser_subagent` tool to **visually capture** the reference page:
   - Navigate to the URL
   - Take screenshots of the full page (scroll through all sections)
   - Note visual layout, section order, animations, hover effects, and interactions
4. Document the following from the reference:

| What to Extract | Details |
|---|---|
| **Sections** | List every section in order (hero, about, services, CTA, testimonials, etc.) |
| **Content** | All text content — headings, paragraphs, labels, button text, lists |
| **Images** | Note what images are used and their purpose (hero bg, team photos, service cards, etc.) |
| **Layout** | Grid structure, number of columns, alignment, spacing patterns |
| **Effects** | Animations (scroll-triggered, hover), transitions, parallax, glassmorphism |
| **Interactive Elements** | Tabs, accordions, sliders, modals, filters, forms |
| **Navigation** | Nav structure, links, dropdowns |
| **Footer** | Footer structure and content |

### Step 2: Map Reference Design to Aura Bloom Tokens

For every visual property on the reference page, map it to the closest Aura Bloom design token. **Never use raw hex/rgb values — always use tokens.**

#### Color Mapping Rules

| Reference Element | Aura Bloom Token |
|---|---|
| Primary dark background | `colors.navy` / `--color-navy` (#0A192F) |
| Light/white background | `colors.cream` / `--color-cream` (#FDFBF7) |
| Alternating section bg | `colors.bg.secondary` (#FFFFFF) |
| Accent/highlight color | `colors.gold` / `--color-gold` (#C5A059) |
| Body text | `colors.charcoal` / `--color-charcoal` (#121212) |
| Headings | `colors.text.heading` / `--text-heading` (#0A192F) |
| Muted body text | `colors.text.muted` / `--text-muted` (charcoal/70%) |
| Eyebrow labels | `colors.text.accentLabel` / `--text-accent-label` (#C5A059) |
| Text on dark backgrounds | `colors.text.onDark` / `--text-on-dark` (#FFFFFF) |
| Muted text on dark | `colors.text.onDark60` / `--text-on-dark-60` |
| CTA button background | `colors.interactive.ctaPrimaryBg` (#C5A059) |
| CTA button text | `colors.interactive.ctaPrimaryText` (#0A192F) |
| Footer background | `colors.bg.footer` (#121212) |
| Navbar text (scrolled) | `colors.text.navbar` (#27899D teal) |
| Italic accent in headings | `colors.text.italicAccent` (#E5D5C0) |

#### Typography Mapping Rules

| Reference Element | Aura Bloom Token |
|---|---|
| Hero main heading | `textStyles.heroHeading` — Sans, 96px, light, line-height 0.9 |
| Section headings | `textStyles.sectionHeading` — Sans, 72px, light |
| Eyebrow text above headings | `textStyles.eyebrow` — Sans, 12px, bold, 0.4em spacing, UPPERCASE, gold |
| Navigation links | `textStyles.navLink` — Sans, 13px, medium, 2.8px spacing, UPPERCASE |
| Body paragraphs | `textStyles.body` — Sans, 18px, light, relaxed line-height |
| Card titles | `textStyles.cardTitle` — Serif, 24px, regular |
| Button text | `textStyles.ctaButton` — Sans, 14px, bold, 0.175em spacing, UPPERCASE |
| Tags/badges | `textStyles.tag` — Sans, 10px, regular, 0.175em, UPPERCASE |
| Footer headings | `textStyles.footerHeading` — Sans, 12px, bold, 0.1em, UPPERCASE, gold |

#### Heading Style Convention
- Main heading words: `font-light` (sans-serif)
- Accent/emphasis words: wrap in `<span className="italic text-accent">` using serif style
- Pattern: "Word **_Italic Accent_** More Words"

#### Layout & Spacing Rules

| Property | Token |
|---|---|
| Section vertical padding | `spacing.section.sm` (96px) or `spacing.section.lg` (128px) |
| Content max-width | `spacing.container.maxWidth` (1280px) |
| Horizontal padding | `spacing.container.paddingX` (24px) |
| Image cards aspect ratio | `4/5` |
| Image cards border-radius | `borderRadius['2xl']` (24px) with `rounded-3xl` |
| Buttons border-radius | `borderRadius.full` (pill shape, `rounded-full`) |
| Card shadows | `shadows['2xl']` (`shadow-2xl`) |
| CTA button shadow | `shadows.xl` (`shadow-xl`) |
| Grid: 3-column layout | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` |
| Grid: 2-column layout | `grid-cols-1 lg:grid-cols-2` |

### Step 3: Replicate Animations & Effects

Map reference animations to Aura Bloom Framer Motion presets:

```tsx
import { animation } from '@/tokens';

// Standard section entrance (content slides up)
<motion.div {...animation.presets.fadeUp} />

// Left-side content entrance
<motion.div {...animation.presets.fadeLeft} />

// Right-side content entrance  
<motion.div {...animation.presets.fadeRight} />

// Card grid filtering entrance
<motion.div {...animation.presets.scaleIn} />

// Floating element (continuous)
<motion.div {...animation.presets.float} />
```

#### Effect Mapping

| Reference Effect | Aura Bloom Implementation |
|---|---|
| Scroll-triggered fade in | `whileInView` + `fadeUp` preset |
| Image zoom on hover | `group-hover:scale-110 transition-transform duration-1000` |
| Glassmorphism card | `glass.card` — `bg-white/5 backdrop-blur-xl border border-white/10` |
| Glassmorphism badge | `glass.badge` — `bg-white/20 backdrop-blur-md border border-white/20` |
| Dark gradient overlay | `gradient-card` — `bg-gradient-to-t from-navy/80 via-transparent` |
| Hero gradient | `gradient-hero` — `bg-gradient-to-r from-navy via-navy/80 to-transparent` |
| Radial glow CTA | `radial-cta` — radial gold gradient at 10% opacity |
| Hover reveal button | `translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100` |
| Underline link expand | `w-10 h-px bg-navy group-hover:w-16 transition-all` |

### Step 4: Handle Images

1. **Hero/background images**: Use high-quality Unsplash URLs with `q=80&w=1920&h=1080&auto=format&fit=crop`
2. **Card/service images**: Use `q=80&w=600&h=800&auto=format&fit=crop` (4:5 aspect)
3. **Portrait/team images**: Use `q=80&w=500&h=600&auto=format&fit=crop`
4. **Always add** `referrerPolicy="no-referrer"` to external images
5. If unique imagery is needed, use the `generate_image` tool to create branded assets
6. Match the **subject matter** from the reference — if reference shows a spa treatment, find a similar spa treatment image

### Step 5: Build the Page Component

1. Create the page file in the appropriate route: `src/app/[route]/page.tsx`
2. Use `"use client"` directive for pages with animations or interactivity
3. Import required dependencies:

```tsx
"use client";

import { motion, AnimatePresence } from 'motion/react';
import { /* icons */ } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';
```

4. Structure sections in the same order as the reference
5. Apply design tokens to every element — **no hardcoded colors, sizes, or spacing**
6. Use Tailwind classes that correspond to design tokens (e.g., `text-navy`, `bg-cream`, `font-serif`, `tracking-widest`)

### Step 6: Verify & Polish

1. Run the dev server and visually compare with the reference using `browser_subagent`
2. Check responsive behavior at mobile (`< 768px`) and desktop (`>= 1024px`)
3. Verify all animations trigger correctly on scroll
4. Ensure the page integrates with the existing Navbar and Footer
5. Test all interactive elements (tabs, filters, hover effects)

---

## Component Pattern Library

Use these proven patterns from the existing codebase:

### Section with Eyebrow + Heading
```tsx
<section className="py-24 bg-cream px-6">
  <div className="max-w-7xl mx-auto">
    <motion.span
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="text-gold uppercase tracking-[0.4em] text-xs font-bold block mb-4"
    >
      Eyebrow Label
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-5xl md:text-7xl text-navy font-light leading-tight"
    >
      Main <span className="italic text-accent">Headline</span>
    </motion.h2>
  </div>
</section>
```

### Image Card with Overlay
```tsx
<div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl group">
  <img src="..." className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
  <div className="absolute bottom-8 left-8 right-8">
    <p className="text-gold text-xs uppercase tracking-widest font-bold mb-2">Category</p>
    <h3 className="text-2xl text-white font-serif">Title</h3>
  </div>
</div>
```

### Primary CTA Button
```tsx
<Link href="/..." className="bg-gold hover:bg-gold/90 text-navy px-10 py-4 rounded-full text-sm uppercase tracking-widest font-bold transition-all flex items-center gap-3 group shadow-xl">
  Button Text
  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
</Link>
```

### Filter / Tab Buttons
```tsx
<button className={cn(
  "px-8 py-3 rounded-full text-xs uppercase tracking-widest font-semibold transition-all border",
  isActive
    ? "bg-navy text-white border-navy shadow-lg"
    : "bg-transparent text-navy/60 border-navy/10 hover:border-navy/30"
)}>
  Label
</button>
```

### Dark CTA Block
```tsx
<section className="py-24 bg-cream px-6">
  <div className="max-w-5xl mx-auto bg-navy rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#C5A059,transparent_70%)]" />
    </div>
    <div className="relative z-10">
      {/* Content */}
    </div>
  </div>
</section>
```

### Glassmorphism Floating Card
```tsx
<motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl"
>
  <p className="text-gold text-xs uppercase tracking-widest mb-2">Label</p>
  <h3 className="text-white font-serif text-xl mb-2">Title</h3>
  <p className="text-white/40 text-sm">Description</p>
</motion.div>
```

---

## Checklist Before Completion

- [ ] All text content matches the reference page
- [ ] Section order matches the reference
- [ ] Design tokens used everywhere (no raw hex values)
- [ ] Responsive: works on mobile, tablet, and desktop
- [ ] Animations: scroll-triggered entrances work
- [ ] Hover effects: image zoom, button reveals, link underlines
- [ ] Images: relevant, high-quality, with `referrerPolicy="no-referrer"`
- [ ] Page integrates with existing Navbar and Footer (no duplicate nav/footer)
- [ ] Page renders and dev server runs without errors
- [ ] Visually compared with reference using browser screenshots

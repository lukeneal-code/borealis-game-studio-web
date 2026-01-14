# Borealis Game Studio — Website Implementation Plan

---

## 1. Project Overview

**Studio Identity:** Borealis is an indie game studio specializing in atmospheric first/third-person puzzle games with horror elements. Their titles feature low-poly PSX aesthetics and philosophical narratives that linger with players long after the credits roll.

**Website Goals:**
- Establish a dark, contemplative digital presence that mirrors the studio's game aesthetics
- Showcase the game portfolio with immersive imagery
- Convey the philosophical and artistic identity of the studio
- Provide clear pathways to purchase/wishlist games

**Design Philosophy:** Minimalistic, timeless, and atmospheric. The website should feel like entering a quiet, dark gallery—sparse but intentional, where every element has weight.

---

## 2. Design System

### 2.1 Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#0a0e14` | Main background (near-black with blue undertone) |
| `--bg-secondary` | `#111827` | Card backgrounds, sections |
| `--bg-tertiary` | `#1e293b` | Hover states, subtle elevations |
| `--navy-deep` | `#0f172a` | Hero sections, overlays |
| `--navy-mid` | `#1e3a5f` | Accent backgrounds |
| `--blue-accent` | `#3b82f6` | Links, interactive elements |
| `--blue-glow` | `#60a5fa` | Hover states, highlights |
| `--blue-muted` | `#475569` | Secondary text, borders |
| `--text-primary` | `#f1f5f9` | Headings, primary text |
| `--text-secondary` | `#94a3b8` | Body text, descriptions |
| `--text-muted` | `#64748b` | Captions, metadata |

### 2.2 Typography

**Font Stack:**
```css
--font-serif: 'Playfair Display', 'Georgia', 'Times New Roman', serif;
--font-body: 'Source Serif Pro', 'Georgia', serif;
```

**Type Scale:**
| Element | Size | Weight | Letter Spacing |
|---------|------|--------|----------------|
| H1 (Hero) | 4rem / 64px | 400 | -0.02em |
| H2 (Section) | 2.5rem / 40px | 400 | -0.01em |
| H3 (Card Title) | 1.5rem / 24px | 500 | 0 |
| Body | 1.125rem / 18px | 400 | 0.01em |
| Caption | 0.875rem / 14px | 400 | 0.02em |
| Nav Links | 0.875rem / 14px | 400 | 0.1em (uppercase) |

### 2.3 Spacing System

Base unit: 8px
```
--space-1: 0.25rem (4px)
--space-2: 0.5rem (8px)
--space-3: 1rem (16px)
--space-4: 1.5rem (24px)
--space-5: 2rem (32px)
--space-6: 3rem (48px)
--space-7: 4rem (64px)
--space-8: 6rem (96px)
--space-9: 8rem (128px)
```

### 2.4 Visual Effects

- **Grain overlay:** Subtle noise texture at 3-5% opacity across backgrounds
- **Vignette:** Soft radial gradient darkening edges on hero sections
- **Image treatment:** Slight desaturation (90%), subtle blue tint overlay
- **Transitions:** Slow, deliberate (300-500ms ease-out)
- **Hover states:** Gentle glow effect using box-shadow with blue-glow color

---

## 3. Component Architecture

### 3.1 Core Components

```
components/
├── layout/
│   ├── Header.jsx          # Fixed navigation
│   ├── Footer.jsx          # Minimal footer with links
│   ├── PageWrapper.jsx     # Grain overlay, transitions
│   └── Container.jsx       # Max-width wrapper
│
├── ui/
│   ├── Button.jsx          # Primary/secondary variants
│   ├── Link.jsx            # Styled navigation links
│   ├── Divider.jsx         # Subtle horizontal rules
│   └── GrainOverlay.jsx    # SVG noise texture
│
├── media/
│   ├── ImageFrame.jsx      # Image with styled border/treatment
│   ├── GameCard.jsx        # Game preview card
│   ├── HeroImage.jsx       # Full-bleed hero with vignette
│   └── Gallery.jsx         # Image grid component
│
├── sections/
│   ├── Hero.jsx            # Page hero sections
│   ├── GameShowcase.jsx    # Featured game display
│   ├── Philosophy.jsx      # Quote/statement block
│   └── TeamMember.jsx      # About page bios
│
└── icons/
    ├── Steam.jsx
    ├── Itch.jsx
    └── Arrow.jsx
```

### 3.2 Component Specifications

#### Header
```
- Position: Fixed, top
- Background: Transparent → bg-primary on scroll (with blur)
- Height: 80px
- Content: Logo (left), Nav links (right)
- Nav items: HOME, GAMES, ABOUT
- Mobile: Hamburger menu with full-screen overlay
```

#### GameCard
```
- Aspect ratio: 16:9 image container
- Hover: Image scale (1.05), subtle glow border
- Content: Image, Title, Year, Brief tagline
- Click: Navigate to game detail or external store
```

#### HeroImage
```
- Full viewport height (100vh) or 80vh
- Background-attachment: fixed (parallax on desktop)
- Vignette overlay (radial gradient)
- Content overlay with title and scroll indicator
```

---

## 4. Page Layouts

### 4.1 Home Page

```
┌─────────────────────────────────────────────────────────┐
│  [HEADER - Transparent]                                 │
├─────────────────────────────────────────────────────────┤
│                                                         │
│              [HERO - Full Viewport]                     │
│                                                         │
│                    BOREALIS                             │
│         "Where darkness meets contemplation"            │
│                                                         │
│                      ↓ Scroll                           │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  LATEST RELEASE                                         │
│  ┌────────────────────────────────────────────────┐    │
│  │                                                 │    │
│  │        [Large Featured Game Image]             │    │
│  │                                                 │    │
│  └────────────────────────────────────────────────┘    │
│                                                         │
│  Game Title                                             │
│  Brief description...                                   │
│                                                         │
│                    [EXPLORE →]                          │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│               [Philosophy Quote Block]                  │
│                                                         │
│      "We build worlds where silence speaks              │
│       and shadows hold meaning."                        │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  FROM THE ARCHIVE                                       │
│                                                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                │
│  │ Game 2  │  │ Game 3  │  │ Game 4  │                │
│  └─────────┘  └─────────┘  └─────────┘                │
│                                                         │
│                 [VIEW ALL GAMES →]                      │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  [FOOTER]                                               │
└─────────────────────────────────────────────────────────┘
```

**Home Page Sections:**
1. **Hero:** Full-screen atmospheric image with studio name and tagline
2. **Featured Game:** Latest/flagship title with large image and CTA
3. **Philosophy Block:** Studio ethos statement
4. **Archive Grid:** 3 previous games in card format
5. **Footer:** Minimal with social links and copyright

---

### 4.2 Games Page

```
┌─────────────────────────────────────────────────────────┐
│  [HEADER]                                               │
├─────────────────────────────────────────────────────────┤
│                                                         │
│              [PAGE HERO - 50vh]                         │
│                                                         │
│                      GAMES                              │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │                                                  │   │
│  │           [GAME 1 - Full Width Image]           │   │
│  │                                                  │   │
│  │  Title                              2024        │   │
│  │  Description paragraph about the game...        │   │
│  │                                                  │   │
│  │  [STEAM]  [ITCH.IO]                             │   │
│  │                                                  │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ─────────────────────────────────────────────────────  │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │                                                  │   │
│  │           [GAME 2 - Full Width Image]           │   │
│  │                                                  │   │
│  │  Title                              2023        │   │
│  │  Description paragraph about the game...        │   │
│  │                                                  │   │
│  │  [STEAM]  [ITCH.IO]                             │   │
│  │                                                  │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  (Repeat for each game...)                              │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  [FOOTER]                                               │
└─────────────────────────────────────────────────────────┘
```

**Games Page Sections:**
1. **Page Hero:** Shorter hero (50vh) with "GAMES" title
2. **Game Entries:** Vertical stack of full-width game showcases
   - Each entry: Large image, title, year, description, store links
   - Separated by subtle dividers
3. **Footer**

---

### 4.3 About Page

```
┌─────────────────────────────────────────────────────────┐
│  [HEADER]                                               │
├─────────────────────────────────────────────────────────┤
│                                                         │
│              [PAGE HERO - 50vh]                         │
│              Atmospheric studio image                   │
│                                                         │
│                      ABOUT                              │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  THE STUDIO                                             │
│                                                         │
│  ┌─────────────────┐                                   │
│  │                 │  Borealis was founded in 20XX     │
│  │  [Studio        │  with a singular vision: to       │
│  │   Image]        │  create games that linger in      │
│  │                 │  the mind like half-remembered    │
│  └─────────────────┘  dreams...                        │
│                                                         │
│  (2-3 paragraphs of studio history and philosophy)     │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│              [Philosophy/Mission Statement]             │
│                                                         │
│       "We believe games are a medium for                │
│        existential exploration..."                      │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  THE TEAM                                               │
│                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐    │
│  │             │  │             │  │             │    │
│  │  [Portrait] │  │  [Portrait] │  │  [Portrait] │    │
│  │             │  │             │  │             │    │
│  │  Name       │  │  Name       │  │  Name       │    │
│  │  Role       │  │  Role       │  │  Role       │    │
│  └─────────────┘  └─────────────┘  └─────────────┘    │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  CONTACT                                                │
│                                                         │
│  For press inquiries: press@borealis.studio            │
│  General: hello@borealis.studio                        │
│                                                         │
│  [TWITTER]  [DISCORD]                                  │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  [FOOTER]                                               │
└─────────────────────────────────────────────────────────┘
```

**About Page Sections:**
1. **Page Hero:** Studio atmosphere image with "ABOUT" title
2. **Studio Story:** Two-column layout (image + text)
3. **Philosophy Block:** Centered mission statement
4. **Team Grid:** Portrait cards for team members
5. **Contact:** Email addresses and social links
6. **Footer**

---

## 5. Technical Stack

### 5.1 Core Technologies

| Layer | Technology | Rationale |
|-------|------------|-----------|
| Framework | React 18+ | Component architecture, ecosystem |
| Routing | React Router v6 | Client-side navigation |
| Styling | CSS Modules or Tailwind | Scoped styles, utility-first |
| Animation | Framer Motion | Smooth page transitions, reveals |
| Build | Vite | Fast development, optimized builds |
| Deployment | Vercel/Netlify | Simple static hosting |

### 5.2 Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.x",
    "framer-motion": "^10.x"
  },
  "devDependencies": {
    "vite": "^5.x",
    "@vitejs/plugin-react": "^4.x"
  }
}
```

### 5.3 Font Loading

```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Source+Serif+Pro:wght@400;600&display=swap" rel="stylesheet">
```

---

## 6. File Structure

```
borealis-website/
├── public/
│   ├── favicon.ico
│   ├── og-image.jpg
│   └── images/
│       ├── hero/
│       ├── games/
│       ├── team/
│       └── textures/
│           └── grain.svg
│
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── variables.css
│   │   └── typography.css
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── ui/
│   │   ├── media/
│   │   └── sections/
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Games.jsx
│   │   └── About.jsx
│   │
│   ├── data/
│   │   └── games.js          # Game content/metadata
│   │
│   ├── hooks/
│   │   ├── useScrollPosition.js
│   │   └── useMediaQuery.js
│   │
│   └── utils/
│       └── animations.js      # Framer Motion variants
│
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 7. Implementation Phases

### Phase 1: Foundation (Week 1)
- [ ] Project setup (Vite, React, React Router)
- [ ] CSS variables and global styles
- [ ] Typography system implementation
- [ ] Grain overlay component
- [ ] Basic layout components (Container, PageWrapper)

### Phase 2: Core Components (Week 2)
- [ ] Header with scroll behavior
- [ ] Footer component
- [ ] Button and Link components
- [ ] ImageFrame with treatments
- [ ] HeroImage with vignette

### Phase 3: Home Page (Week 3)
- [ ] Hero section with parallax
- [ ] Featured game showcase
- [ ] Philosophy quote block
- [ ] Game archive grid
- [ ] Page transitions

### Phase 4: Games Page (Week 4)
- [ ] Page hero variant
- [ ] GameCard component
- [ ] Full game showcase entries
- [ ] Store link buttons
- [ ] Scroll animations

### Phase 5: About Page (Week 5)
- [ ] Two-column story layout
- [ ] Team member cards
- [ ] Contact section
- [ ] Responsive adjustments

### Phase 6: Polish (Week 6)
- [ ] Performance optimization
- [ ] Image lazy loading
- [ ] SEO meta tags
- [ ] Accessibility audit
- [ ] Cross-browser testing
- [ ] Final responsive QA

---

## 8. Placeholder Content

### Games (Temporary)

```javascript
export const games = [
  {
    id: 'hollow-signal',
    title: 'Hollow Signal',
    year: 2024,
    tagline: 'Some frequencies were never meant to be heard.',
    description: 'Navigate an abandoned radio station where the boundaries between broadcast and consciousness blur. Solve puzzles that question the nature of perception.',
    platforms: ['steam', 'itch'],
    featured: true,
  },
  {
    id: 'beneath-static',
    title: 'Beneath Static',
    year: 2023,
    tagline: 'Memory corrupts. Truth decays.',
    description: 'Descend through layers of a dying mind, piecing together fragments of identity in a world built from fading recollections.',
    platforms: ['steam', 'itch'],
  },
  {
    id: 'the-long-quiet',
    title: 'The Long Quiet',
    year: 2022,
    tagline: 'In silence, we find what was lost.',
    description: 'A meditative exploration of abandonment and renewal, set in a world where nature reclaims the forgotten.',
    platforms: ['steam'],
  },
];
```

### Placeholder Images
- Hero: 1920x1080, dark atmospheric scenes
- Game screenshots: 16:9 ratio, PSX-style renders
- Team portraits: 1:1 ratio, 400x400px minimum
- Use services: placeholder.com, unsplash (dark/moody selections)

---

## 9. Accessibility Considerations

- **Color contrast:** Ensure all text meets WCAG AA (4.5:1 for body, 3:1 for large text)
- **Focus states:** Visible focus rings using blue-glow color
- **Reduced motion:** Respect `prefers-reduced-motion` media query
- **Alt text:** Descriptive alt text for all game imagery
- **Semantic HTML:** Proper heading hierarchy, landmark regions
- **Keyboard navigation:** Full site navigable via keyboard

---

## 10. Performance Targets

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Total Bundle Size | < 200kb (gzipped) |
| Image formats | WebP with JPEG fallback |

---

## Summary

The Borealis website will serve as a digital extension of the studio's artistic identity—a dark, contemplative space that invites visitors to linger. The design prioritizes atmosphere over decoration, using careful typography, muted colors, and intentional negative space to create a sense of quiet gravity that mirrors the studio's games.

Every element should feel purposeful. Every interaction should feel considered. The website, like the games it showcases, should leave visitors with something to think about.

---

*Document Version: 1.0*  
*Last Updated: January 2026*

---
name: Clay Studio
description: Warm claymorphic design system with tangerine accents, soft 3D depth, and playful floating motion
colors:
  bg-base: "#FAF9F8"
  bg-warm: "#FAF9F6"
  accent: "#F97316"
  accent-light: "#FFEDD5"
  accent-dark: "#9A3412"
  accent-bevel: "#EA580C"
  navy: "#0F172A"
  navy-mid: "#334155"
  navy-soft: "#475569"
  text-muted: "#64748B"
  surface: "#FFFFFF"
  surface-dark: "#0F172A"
typography:
  display:
    fontFamily: "Outfit, sans-serif"
    fontWeight: 800
    letterSpacing: "-0.04em"
    lineHeight: 1.05
  headline:
    fontFamily: "Outfit, sans-serif"
    fontWeight: 800
    letterSpacing: "-0.03em"
    lineHeight: 1.15
  title:
    fontFamily: "Outfit, sans-serif"
    fontWeight: 800
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Outfit, sans-serif"
    fontWeight: 700
    letterSpacing: "0.08em"
    textTransform: "uppercase"
rounded:
  card: "24px"
  input: "12px"
  button: "16px"
  pill: "9999px"
  logo-mark: "8px"
  avatar: "16px"
spacing:
  section-y: "96px"
  section-x: "clamp(20px, 6vw, 80px)"
  card-padding: "32px"
  card-gap: "24px"
  grid-gap: "20px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#FFFFFF"
    rounded: "{rounded.button}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "#FFFFFF"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.accent}"
    rounded: "{rounded.button}"
    padding: "14px 28px"
  chip:
    backgroundColor: "{colors.accent-light}"
    textColor: "{colors.accent}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  pill-dark:
    backgroundColor: "rgba(255, 255, 255, 0.06)"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
---

# Design System: Clay Studio

> Extracted from `design-commons-prototype.html`. Use this document to rebuild the visual language on a portfolio or any other site.

## Overview

**Creative North Star: "The Clay Studio"**

A warm, tactile design system built around claymorphism — soft white surfaces with inset highlights and ambient drop shadows that feel sculpted rather than flat. The palette pairs a neutral cream studio backdrop with a bold tangerine accent (token name: `--sky-blue`, historically misnamed). Typography is confident and tight: **Outfit** for display and UI chrome, **Inter** for readable body copy.

Motion is gentle and premium: elements float in 3D space, scroll into view with clip-path reveals, and respond to hover with lift + shadow deepening. The hero centerpiece is a framed 3D clay illustration (capybara) that "dances" via CSS float animation — no video or GIF required.

**Key Characteristics:**
- Claymorphic cards with dual inset shadows + ambient outer shadow
- 3D beveled buttons that physically press down on click
- Floating 3D CSS shapes (spheres, torus, cylinder, cube) as ambient decoration
- Scroll-triggered fade-up and clip-reveal entrance animations
- SVG stroke-draw on card icon hover
- Frosted-glass pill navigation that compacts on scroll

---

## Colors

Warm neutral studio tones with a single saturated accent. No gradients on accent surfaces — solid fills only.

### Primary (Accent — Tangerine Orange)
| Token | Value | Usage |
|-------|-------|-------|
| `--sky-blue` | `#F97316` | Primary CTA, links, icons, stat numbers, accent text in headings |
| `--sky-blue-rgb` | `249, 115, 22` | Used in `rgba()` for shadows and glows |
| `--sky-blue-light` | `#FFEDD5` | Chip/tag backgrounds |
| `--sky-blue-dark` | `#9A3412` | 3D sphere inset shadows, depth on CSS shapes |
| `--btn-blue-bevel` | `#EA580C` | Button bottom bevel (3D press effect) |

### Neutral
| Token | Value | Usage |
|-------|-------|-------|
| `--bg-base` | `#FAF9F8` | Page background |
| `--bg` | `radial-gradient(circle at 10% 20%, rgba(245,239,235,0.2) 0%, rgba(247,243,240,0.8) 100%)` | Subtle warm radial overlay on body |
| `--bg2` | `#FAF9F6` | Secondary warm neutral |
| `--navy` | `#0F172A` | Primary text, headings (Slate-900) |
| `--navy2` | `#334155` | — |
| `--navy3` | `#475569` | Muted text |
| `--text` | `#0F172A` | Body text color |
| `--muted` | `#475569` | Subtitles, descriptions |
| `--dim` | `#64748B` | Tertiary labels, scroll indicator |
| `--clay-bg` | `#FFFFFF` | Card/surface fill |
| `--border` | `rgba(15, 23, 42, 0.05)` | Dividers, subtle borders |
| `--border2` | `rgba(15, 23, 42, 0.09)` | Input borders, scroll line |
| `--clay-border` | `rgba(15, 23, 42, 0.03)` | Card outer border |

### Named Rules
**The One Accent Rule.** Tangerine orange is the only saturated hue. Everything else is neutral slate or warm cream. Accent appears on CTAs, eyebrow labels, stat numbers, role titles, and `<em>` spans inside headings — not as large background fills except for featured callout rows.

**The No-Gradient-Accent Rule.** Accent buttons and surfaces use solid `#F97316`. Gradients are reserved for ambient background spheres and decorative 3D shapes only.

---

## Typography

### Font Loading
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

### Hierarchy

| Role | Font | Weight | Size | Letter-spacing | Usage |
|------|------|--------|------|----------------|-------|
| **Hero Display** | Outfit | 800 | `clamp(38px, 6.5vw, 68px)` | `-0.04em` | Hero H1 |
| **Section Title** | Outfit | 800 | `clamp(28px, 4vw, 42px)` | `-0.03em` | H2 section headings |
| **Join Title** | Outfit | 800 | `clamp(32px, 5vw, 48px)` | `-0.03em` | CTA section heading |
| **Card Title** | Outfit | 800 | `16–19px` | `-0.01em` | Pillar/event/team card titles |
| **Stat Number** | Outfit | 800 | `34px` (or `clamp(64px, 8vw, 96px)` for hero stats) | `-0.02em to -0.05em` | Proof strip, standups callout |
| **Body** | Inter | 400 | `14–19px` | normal | Paragraphs, descriptions |
| **Eyebrow / Label** | Outfit | 700 | `10–13px` | `0.08–0.12em`, uppercase | Section eyebrows, scroll label, proof labels |
| **Nav Links** | Outfit | 600 | `14px` | normal | Navigation |
| **Button** | Outfit | 700 | `13–15px` | normal | All buttons |

### Accent in Headings
Use `<em>` (styled `font-style: normal; color: var(--sky-blue)`) inside display headings to highlight key phrases without italic.

### Section Eyebrow Pattern
```css
.section-eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: 'Outfit', sans-serif;
  font-size: 12px; font-weight: 700; letter-spacing: 0.08em;
  text-transform: uppercase; color: var(--sky-blue);
}
.section-eyebrow::before {
  content: ''; width: 16px; height: 3px;
  background: var(--sky-blue); border-radius: 2px;
}
```

---

## Layout

### Global
- `box-sizing: border-box` on all elements
- `html { scroll-behavior: smooth; }`
- Body: `line-height: 1.6`, `overflow-x: hidden`
- Sections: `padding: 96px clamp(20px, 6vw, 80px)`

### Containers
| Element | Max-width | Notes |
|---------|-----------|-------|
| Nav | `min(90%, 1200px)` | Fixed, centered |
| Hero inner | `800px` → `1100px` at ≥900px | Two-column at desktop |
| Section subtitle | `540px` | Muted description width |
| Proof strip | `1000px` | Centered stats row |
| Join form | `560px` | Centered CTA block |

### Grids
- **Pillars / Team:** `repeat(auto-fit/fill, minmax(280px, 1fr))`, gap `24px`
- **Events:** `repeat(auto-fill, minmax(280px, 1fr))`, gap `20px`
- **About (desktop ≥900px):** Two-column flex — content `flex: 1.35`, illustration `flex: 0.65`

### Breakpoints
| Breakpoint | Behavior |
|------------|----------|
| `≥900px` | Hero two-column; about illustration visible; capybara frame `380×380px` |
| `≤850px` | Nav compacts; large background spheres hidden |
| `≤680px` | Nav links hidden; proof stack vertical; standups stack; hero buttons stack; 3D section scenes hidden |

---

## Elevation & Depth

**Philosophy:** Depth is structural and tactile. Every card and button uses a four-layer shadow stack: ambient drop shadow + hairline border + dual inset highlights (top-left light, bottom-right dark). Hover lifts elements `-8px` with a deeper ambient shadow.

### Core Shadow Token — Clay Card
```css
--clay-shadow:
  0 20px 40px -10px rgba(15, 23, 42, 0.08),
  0 0 0 1px rgba(15, 23, 42, 0.02),
  inset -6px -6px 12px rgba(15, 23, 42, 0.05),
  inset 6px 6px 12px rgba(255, 255, 255, 1);
```

### Shadow Vocabulary

| Role | Value | When |
|------|-------|------|
| **Clay card (rest)** | `--clay-shadow` | Pillar, event, team cards; hero badge |
| **Clay card (hover)** | `0 30px 60px -15px rgba(15,23,42,0.12), 0 0 0 1px rgba(15,23,42,0.03), inset -6px -6px 12px rgba(15,23,42,0.04), inset 6px 6px 12px rgba(255,255,255,1)` | Card hover lift |
| **Illustration frame** | `0 30px 60px -15px rgba(15,23,42,0.12), inset -6px -6px 12px rgba(15,23,42,0.04), inset 6px 6px 12px rgba(255,255,255,1)` | Capybara/human clay frames |
| **Primary button** | `0 6px 0 var(--btn-blue-bevel), 0 12px 20px rgba(var(--sky-blue-rgb), 0.15)` | `.btn-amber`, `.btn-orange-3d` |
| **Primary button hover** | `0 8px 0 var(--btn-blue-bevel), 0 16px 24px rgba(var(--sky-blue-rgb), 0.2)` | Lifted state |
| **Primary button active** | `0 2px 0 var(--btn-blue-bevel), 0 4px 8px rgba(var(--sky-blue-rgb), 0.15)` | Pressed / clicked |
| **Ghost button** | `0 6px 0 rgba(var(--sky-blue-rgb), 0.2), 0 12px 20px rgba(15,23,42,0.05), inset -3px -3px 6px rgba(15,23,42,0.02), inset 3px 3px 6px rgba(255,255,255,1)` | Secondary CTA |
| **Nav bar** | Same clay pattern, lighter insets (`±3px`) | Fixed pill nav |
| **Nav scrolled** | Deeper ambient: `0 20px 30px -10px rgba(15,23,42,0.12)` | After 40px scroll |
| **Logo mark** | `0 4px 0 var(--btn-blue-bevel), 0 6px 10px rgba(var(--sky-blue-rgb), 0.2)` | Small 3D square |
| **Featured row** | `0 6px 0 var(--btn-blue-bevel), 0 16px 30px rgba(var(--sky-blue-rgb), 0.2)` | Orange upcoming-event banner |
| **Dark callout** | `0 30px 60px -15px rgba(15,23,42,0.3), inset -6px -6px 12px rgba(0,0,0,0.2), inset 6px 6px 12px rgba(255,255,255,0.05)` | Standups navy block |
| **Input inset** | `inset 3px 3px 6px rgba(15,23,42,0.05), 0 4px 10px rgba(0,0,0,0.01)` | Form fields |
| **Input focus ring** | `0 0 0 4px rgba(var(--sky-blue-rgb), 0.25)` | Focus state glow |
| **3D sphere** | Radial gradient + `inset -8px -8px 16px var(--sky-blue-dark), inset 8px 8px 16px rgba(255,255,255,0.6)` | Decorative orbs |

### Border Radius Tokens
```css
--r: 24px;        /* Cards, frames, callout blocks */
--r2: 12px;       /* Inputs, icon containers */
--r-badge: 9999px; /* Pills, chips, nav, badges */
```

---

## Shapes

- **Form language:** Bulbous, generous rounding. Cards at 24px feel soft and sculpted.
- **Navigation:** Full pill (`border-radius: 9999px`), frosted glass.
- **Buttons:** 16px radius (not fully pill — slightly squarer for CTAs).
- **Icon containers:** 12px rounded squares with inset shadow.
- **Avatars / illustration inner:** 16px radius inside 24px outer frame.
- **Decorative 3D:** Pure CSS spheres (radial gradient), torus (thick border ring), cylinder (gradient body + elliptical top cap), rotating cube (6 faces, 12px radius).

---

## Motion & Animation

### Easing Curve (use everywhere)
```css
cubic-bezier(0.16, 1, 0.3, 1)  /* Premium ease-out — "snappy settle" */
```

### Keyframe Library

#### `float-3d` — Floating / "dancing" idle motion
Used on: capybara frame, human illustration, background spheres, mini orb accents.
```css
@keyframes float-3d {
  0%   { transform: translateY(0) rotate(0deg) scale(1); }
  100% { transform: translateY(-24px) rotate(10deg) scale(1.05); }
}
/* Typical usage */
animation: float-3d 6s ease-in-out infinite alternate;
```
Vary duration (`4s–12s`) and `animation-delay` for organic stagger. This is what makes the capybara appear to dance — the PNG is static; the wrapper animates.

#### `clip-slide-up` — Hero text entrance
```css
@keyframes clip-slide-up {
  from { opacity: 0; transform: translateY(60px); clip-path: inset(0 0 100% 0); }
  to   { opacity: 1; transform: translateY(0);    clip-path: inset(0 0 0 0); }
}
/* H1: 1.1s delay 0.15s | Sub: 1.1s delay 0.3s */
```

#### `slide-up` — Button group entrance
```css
@keyframes slide-up {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* Hero actions: 0.75s delay 0.45s */
```

#### `badge-in` — Hero badge drop-in
```css
@keyframes badge-in {
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* 0.6s ease both */
```

#### `pulse` — Live indicator dot
```css
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.4; transform: scale(0.8); }
}
/* 2s ease infinite on .hero-badge-dot */
```

#### `scroll-line` — Scroll indicator
```css
@keyframes scroll-line {
  0%, 100% { transform: scaleY(1); opacity: 0.5; }
  50%      { transform: scaleY(1.2); opacity: 1; }
}
/* 2s ease-in-out infinite */
```

#### `draw-stroke` — SVG icon redraw on hover
```css
@keyframes draw-stroke {
  0%   { stroke-dashoffset: 100; }
  100% { stroke-dashoffset: 0; }
}
```

#### `float-rotate-torus` — Background torus
```css
@keyframes float-rotate-torus {
  0%   { transform: translateY(0) rotateX(15deg) rotateY(15deg) rotateZ(0deg); }
  100% { transform: translateY(-20px) rotateX(30deg) rotateY(-15deg) rotateZ(180deg); }
}
/* 8s ease-in-out infinite alternate */
```

#### `float-cylinder` — Background cylinder
```css
@keyframes float-cylinder {
  0%   { transform: translateY(0) rotate(15deg); }
  100% { transform: translateY(-16px) rotate(35deg); }
}
```

#### `rotate-cube` — Spinning wireframe cube
```css
@keyframes rotate-cube {
  0%   { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateY(0); }
  50%  { transform: rotateX(180deg) rotateY(180deg) rotateZ(90deg) translateY(-10px); }
  100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(180deg) translateY(0); }
}
/* 20s infinite linear */
```

### Scroll-Triggered Reveals

Two CSS classes observed by `IntersectionObserver`:

#### `.fade-up`
```css
.fade-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.fade-up.visible { opacity: 1; transform: translateY(0); }
/* Stagger via nth-child delays: 0.05s, 0.12s, 0.19s, 0.26s, 0.33s, 0.40s */
```

#### `.clip-reveal`
```css
.clip-reveal {
  opacity: 0;
  transform: translateY(45px);
  clip-path: inset(0 0 100% 0);
  transition: opacity 1.1s cubic-bezier(0.16, 1, 0.3, 1),
              transform 1.1s cubic-bezier(0.16, 1, 0.3, 1),
              clip-path 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.clip-reveal.visible {
  opacity: 1;
  transform: translateY(0);
  clip-path: inset(0 0 0 0);
}
```

#### JavaScript (required)
```javascript
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  }),
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.fade-up, .clip-reveal').forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
  document.getElementById('main-nav').classList.toggle('scrolled', window.scrollY > 40);
});
```

---

## Interactions

### Navigation
| State | Behavior |
|-------|----------|
| **Default** | Fixed pill, `top: 20px`, `height: 68px`, frosted white `rgba(255,255,255,0.9)`, `backdrop-filter: blur(12px)` |
| **Scrolled (>40px)** | Adds `.scrolled`: `top: 10px`, `height: 60px`, deeper shadow, `background: rgba(255,255,255,0.95)` |
| **Link hover** | Color → `var(--sky-blue)`, `transition: 0.2s ease` |
| **CTA hover** | `translateY(-1px)`, bevel shadow grows |
| **CTA active** | `translateY(3px)`, bevel collapses to `0 1px 0` |

### Buttons

#### Primary (`.btn-primary.btn-amber`)
- Rest: orange fill, 3D bevel bottom shadow
- Hover: `translateY(-2px) scale(1.02)`, deeper shadow, arrow SVG `translateX(3px)`
- Active: `translateY(4px) scale(0.98)`, compressed bevel
- Transition: `0.2s cubic-bezier(0.16, 1, 0.3, 1)`

#### Ghost (`.btn-ghost`)
- White fill, orange text, orange-tinted bevel + clay inset
- Hover: same lift as primary; down-arrow SVG `translateY(2px)`
- Active: same press-down pattern

#### Orange 3D (`.btn-orange-3d`)
- Same physics as primary but `transition: 0.1s ease` (snappier, for RSVP CTAs)

### Cards (`.pillar-card`, `.event-card`, `.team-card`)
- Hover: `translateY(-8px)` over `0.4s cubic-bezier(0.16, 1, 0.3, 1)`
- Shadow transitions to hover clay stack
- Icon SVG on hover: stroke redraw animation + `scale(1.1) rotate(5deg)`

### Team Card Avatar
- Image `scale(1.05)` on card hover, `transition: 0.3s ease`

### Team Link
- Underline appears on hover: `border-bottom-color: var(--sky-blue)`

### Form Input (`.join-input`)
- Focus: border → accent, focus ring `0 0 0 4px rgba(249,115,22,0.25)`

### Join Alt Link
- Hover: color → accent

---

## Components

### Navigation Bar
```html
<nav id="main-nav">
  <a href="#" class="nav-logo">
    <div class="nav-logo-mark">DC</div>
    <span class="nav-logo-text">Design <span>Commons</span></span>
  </a>
  <ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#join" class="nav-cta">Join us →</a></li>
  </ul>
</nav>
```
- Logo mark: 32×32px, 8px radius, orange 3D square
- Logo text span: accent color
- Mobile (≤680px): hide `.nav-links`

### Hero Badge (Chip — Status)
```html
<div class="hero-badge">
  <div class="hero-badge-dot"></div>
  Bay Area Designers · Est. 2026
</div>
```
- Pill shape, clay shadow, pulsing orange dot with glow `box-shadow: 0 0 8px var(--sky-blue)`

### Hero Illustration Frame (Capybara Pattern)
Reusable pattern for any 3D clay character on a portfolio:
```html
<div class="hero-illustration-container">
  <div class="capybara-frame-wrapper">
    <div class="capybara-frame">
      <img src="assets/claymorphic_capybara.png" alt="..." class="capybara-img">
    </div>
    <!-- Optional floating mini spheres -->
    <div class="css-sphere" style="width:45px;height:45px;top:-15px;left:-15px;animation-duration:4s;"></div>
    <div class="css-sphere" style="width:35px;height:35px;bottom:-10px;right:20px;animation-duration:5s;animation-delay:-1s;"></div>
  </div>
</div>
```
| Property | Mobile | Desktop (≥900px) |
|----------|--------|------------------|
| Frame size | 300×300px | 380×380px |
| Inner image radius | 16px | 16px |
| Frame padding | 16px | 16px |
| Wrapper animation | `float-3d 6s ease-in-out infinite alternate` | same |

**Asset note:** Use a transparent PNG with soft 3D clay style. The "dancing" effect comes entirely from CSS `float-3d` on `.capybara-frame-wrapper`, not from the image itself.

### Buttons
```html
<!-- Primary -->
<a href="#" class="btn-primary btn-amber">
  Label
  <svg><!-- arrow right --></svg>
</a>

<!-- Ghost -->
<a href="#" class="btn-primary btn-ghost">
  Label
  <svg><!-- arrow down --></svg>
</a>
```

### Chips & Pills

#### Event Tag (`.event-tag`) — Small filter chip
```css
.event-tag {
  font-family: 'Outfit', sans-serif;
  font-size: 11px; font-weight: 700;
  padding: 4px 12px;
  border-radius: 9999px;
  background: var(--sky-blue-light);
  border: 1px solid rgba(var(--sky-blue-rgb), 0.1);
  color: var(--sky-blue);
  box-shadow: inset 1px 1px 2px rgba(255, 255, 255, 1);
}
```

#### Standups Pill (`.standups-pill`) — Dark surface chip
```css
.standups-pill {
  padding: 8px 16px;
  border-radius: 9999px;
  font-size: 13px; font-weight: 700;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  box-shadow: inset 2px 2px 4px rgba(255, 255, 255, 0.05);
}
```

#### Hero Badge — Large status chip (see above)

### Cards

#### Standard Clay Card (pillar / event / team)
```css
.card {
  background: var(--clay-bg);
  border: 1px solid var(--clay-border);
  border-radius: var(--r);          /* 24px */
  padding: 28–32px;
  box-shadow: var(--clay-shadow);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
```

#### Icon Container (inside cards)
```css
.pillar-icon {
  width: 48px; height: 48px;
  border-radius: 12px;
  background: #FAF9F8;
  border: 1px solid var(--border);
  box-shadow: inset 2px 2px 4px rgba(255,255,255,1), 0 4px 10px rgba(15,23,42,0.02);
}
```

#### Featured Orange Row (`.upcoming-row`)
- Full-width accent block: orange bg, white text, 3D bevel, `padding: 32px 40px`, `border-radius: 24px`

#### Dark Callout (`.standups-inner`)
- Navy background, inset dark/light shadows, large stat number in accent color

### Proof Strip
- Full-width white bar with clay shadow
- 4-column stats (stack on mobile)
- Number in accent, suffix in navy

### Form Input
```css
.join-input {
  background: #FFFFFF;
  border: 1px solid var(--border2);
  border-radius: 12px;
  padding: 14px 20px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
}
```

### Footer
- Navy background `#0F172A`
- Logo mark repeats nav 3D square
- Muted white text at 30–50% opacity

### Scroll Indicator
```html
<div class="hero-scroll">
  <span>scroll</span>
  <div class="hero-scroll-line"></div>
</div>
```

### Decorative 3D Shapes (CSS-only)

#### Sphere
```css
.css-sphere {
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%,
    var(--sky-blue-light) 0%, var(--sky-blue) 60%, var(--sky-blue-dark) 100%);
  box-shadow:
    0 20px 40px -10px rgba(var(--sky-blue-rgb), 0.3),
    inset -8px -8px 16px var(--sky-blue-dark),
    inset 8px 8px 16px rgba(255, 255, 255, 0.6);
  animation: float-3d 6s ease-in-out infinite alternate;
}
```

Place in `.sphere-container` (fixed full-viewport, `pointer-events: none`, `z-index: 0`) or `.section-3d-scene` / `.hero-3d-scene` per section.

**Performance:** Hide `.section-3d-scene` and large spheres on mobile (`≤680px` / `≤850px`).

### SVG Icon Stroke Gradients (optional)
Define once in hidden SVG:
```html
<linearGradient id="grad-sunset-stroke">
  <stop offset="0%" stop-color="#F59E0B" />
  <stop offset="100%" stop-color="#EC4899" />
</linearGradient>
```
Icons use `stroke="var(--sky-blue)"` by default; apply gradient via `stroke="url(#grad-sunset-stroke)"` for variation.

---

## Assets to Copy

| File | Purpose |
|------|---------|
| `assets/claymorphic_capybara.png` | Hero dancing capybara (3D clay PNG) |
| `assets/claymorphic_team.png` | About section waving characters |

Both use `mix-blend-mode: multiply` when placed on white backgrounds without a frame.

---

## Do's and Don'ts

### Do
- **Do** use the four-layer clay shadow on every elevated surface (outer ambient + hairline + dual inset).
- **Do** pair Outfit (display/UI) with Inter (body) — never swap them.
- **Do** use `cubic-bezier(0.16, 1, 0.3, 1)` for all premium transitions.
- **Do** apply `float-3d` to hero illustrations for gentle idle motion.
- **Do** add `.fade-up` or `.clip-reveal` + IntersectionObserver for scroll entrances.
- **Do** use 3D bevel buttons (`0 Npx 0 var(--btn-blue-bevel)`) with press-down on `:active`.
- **Do** lift cards `-8px` on hover with deepened shadow.
- **Do** hide heavy 3D background scenes on mobile for performance.
- **Do** use accent orange sparingly on large fills — reserve for CTAs, featured rows, and stat highlights.

### Don't
- **Don't** use gradient fills on primary buttons or accent text — solid `#F97316` only.
- **Don't** use sharp corners below 12px on interactive elements — the system is soft and bulbous.
- **Don't** animate the capybara with JavaScript — CSS `float-3d` on the wrapper is sufficient.
- **Don't** skip the inset highlights on cards — they define the claymorphic look.
- **Don't** use pure black (`#000`) — text is always `#0F172A` (slate-900).
- **Don't** run stroke-draw animation on icons without `stroke-dasharray: 100` pre-set on SVG paths.

---

## Quick Start Checklist (Portfolio)

1. Copy `:root` CSS variables into your global stylesheet.
2. Load Outfit + Inter from Google Fonts.
3. Paste clay shadow, button, card, and animation keyframes.
4. Add IntersectionObserver script for scroll reveals.
5. Copy capybara frame HTML pattern; swap PNG for your own 3D clay asset.
6. Apply `.fade-up` to grid items; `.clip-reveal` to section titles.
7. Use nav pill pattern with scroll `.scrolled` toggle.
8. Test at 680px and 900px breakpoints.

---
name: Ramya Rajasekaran Portfolio
description: Personal portfolio showcasing design work, methodology, and design leadership of Ramya Rajasekaran.
colors:
  primary: "#F97316"
  secondary: "#000000"
  accent: "#EA580C"
  background: "#000000"
  surface: "#191C21"
  text-primary: "#FFFFFF"
  light-background: "#FAF8F5"
  light-surface: "#FFFFFF"
  light-text: "#171717"
  light-parchment: "#4B5563"
  light-blush-text: "#FFFFFF"
typography:
  display:
    fontFamily: "Inter, sans-serif"
    fontWeight: 800
  body:
    fontFamily: "Playfair Display, Georgia, serif"
    fontWeight: 300
  label:
    fontFamily: "JetBrains Mono, monospace"
rounded:
  card: "8px"
  control: "8px"
  pill: "9999px"
---

# Design System

## Overview
This document defines the visual guidelines and design specifications for the Ramya Rajasekaran portfolio. All layout and UI decisions should align with these guidelines.

## Colors
- **Primary:** `#F97316` (used for highlight indicators, primary badges, main links, and brand accents).
- **Secondary:** `#000000` (used for background sections).
- **Accent:** `#EA580C` (used for interactive hover states and secondary elements).
- **Background:** `#000000` (forced dark canvas background).
- **Surface:** `#191C21` (used for cards, section containers, and overlays).
- **Text Primary:** `#FFFFFF` (used for high-contrast legible headings and body copy).

## Typography
- **Display Moments:** Use `Inter` (sans-serif) for high-impact titles, navigation, and display headings.
- **Body Copy:** Use `Playfair Display` (serif) for paragraphs and rich storytelling sections to convey a crafted, human feel.
- **Labels & Metadata:** Use `JetBrains Mono` (or equivalent monospace font) for tags, indicators, timelines, and technical metadata.

## Layout
- Keep spacing deliberate and stable.
- Favor the same grid direction, max-width behavior, card density, and responsive stacking seen in the HTML.
- Do not replace distinctive source structures with generic SaaS sections.

## Elevation & Depth
- Flat overlays with clean border outlines.
- Background, surface, text, and border roles remain distinct to retain contrast patterns.

## Shapes
- **Card Border Radius:** `8px`
- **Control Border Radius (Buttons, Inputs):** `8px`
- **Pill Border Radius (Badges, Tags):** `9999px`

## Motion
- Preserve existing motion cues such as masked reveals, staggered entrance, hover lift, scroll-triggered transitions, and ambient movement.
- Keep easing smooth, natural, and restrained.

## Do's and Don'ts
- **DO** maintain strict high contrast between backgrounds, surfaces, and text colors.
- **DO** use Playfair Display for story narration and Inter for section titles.
- **DON'T** use generic AI-style glowing borders, multi-color gradient headings, or pure gray text on colored highlights.

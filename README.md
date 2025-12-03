# Portfolio Project

## 1. How to Run

- **Install dependencies:** `npm install`
- **Start development server:** `npm run dev`
- **Build for production:** `npm run build`
- **Start production server:** `npm start`
- **Lint code:** `npm run lint`

## 2. Project Structure

### Roots
- `src/app`: App Router pages and layouts.
- `src/components`: Reusable UI components.
- `public/images/[project-slug]`: Project-specific assets.
- `src/data/projects`: Modular content files for each case study.

### Key Files
- `src/data/projects/index.ts`: Exports all project data.
- `src/app/page.tsx`: Main landing page composition.
- `src/app/work/[slug]/page.tsx`: Dynamic project page template.

## 3. Suggestions for Improvement

### CMS & Data
- Move `data.ts` to a headless CMS (Sanity/Contentful).
- Decouples content editing from codebase deployments.

### Performance
- Replace `<img>` tags with `next/image` component.
- Enables automatic optimization and lazy loading.

### Code Quality
- Tighten TypeScript types (remove `any` casts).
- Standardize reusable styles in `tailwind.config.ts`.
- Extract repetitive card layouts into components.

## 4. Case Study Pattern Analysis

The project currently uses a **Section-Based JSON Architecture** to render case studies.

### Current Pattern
Each project export (e.g., `content-verify.ts`) follows this structure:

1.  **Metadata:** `id`, `slug`, `title`, `category`, `description`, `image` (cover).
2.  **Sections Array:** An ordered list of content blocks rendered sequentially.
    - **Base Fields:** `title`, `content` (string or array of strings).
    - **Visual Flags:**
        - `glassCard`: Wraps content in a translucent styling.
        - `showDivider`: Adds a separator line.
        - `sideBySide` + `imageLeft`/`imageRight`: Controls layout updates.
    - **Asset Fields:** `image` (single), `multiImage` (gallery), `chips` (tags).

### Proposed Improvements

#### A. Strict Layout Types (Discriminated Unions)
Instead of a single "Section" object with many optional booleans (`sideBySide`, `glassCard`, `verticalImages`), define distinct types:
```typescript
type Section = 
  | { type: 'text'; title: string; content: string }
  | { type: 'gallery'; images: string[] }
  | { type: 'split-feature'; text: string; image: string; orientation: 'left' | 'right' }
```
**Why:** Prevents impossible states (e.g., active `multiImage` but `imageLeft` is true) and simplifies the rendering logic in `page.tsx`.

#### B. Markdown/MDX Support
Currently, lists and paragraphs are manually constructed via arrays.
**Proposal:** specific fields like `content` should accept Markdown.
**Why:** Allows for bold text, inline links, and bullets without needing custom properties like `chips` or `equations` for simple formatting.

#### C. Type Safety
Create a central `types.ts` file definition associated with the data.
**Proposal:** Define `Project` and `CaseStudySection` interfaces.
**Why:** Ensures that missing fields (like a missing `slug` or `cover image`) are caught at compile time, not runtime.

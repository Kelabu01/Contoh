## Visual design — default style

Every app must look clean, modern, and minimal by default. Fewer elements, more
whitespace, one accent color. When unsure, choose the simpler, calmer option.
Define all values below once as CSS variables (or theme tokens) and reuse them —
never hardcode ad-hoc colors, sizes, or radii.

**Color** — Neutral base + a single accent. Never use pure black or pure white
for large surfaces.
- Background `#FAFAFA`, surface/cards `#FFFFFF`, border `#ECECEC`
- Text `#1A1A1A`, muted text `#6B7280`
- One accent (default indigo `#4F46E5`); use it only for primary actions, links,
  active states. Derive hover/pressed by darkening ~8%.
- Semantic: success `#16A34A`, warning `#D97706`, danger `#DC2626`.
- Max 1 accent + neutrals on a screen. No gradients unless asked.

**Typography** — One sans-serif (`Inter`, system-ui fallback). Sizes: 12 / 14 /
16 / 20 / 24 / 32px. Body 16px, line-height 1.5. Weights: 400 body, 500 labels,
600 headings. Never more than 2 weights per screen.

**Spacing** — 4px scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64. Be generous; let
content breathe. Constrain reading content to ~640px, app shells to ~1200px,
centered with comfortable page padding (24px+).

**Shape & depth** — Consistent rounding: 8px inputs/buttons, 12px cards, 9999px
pills/avatars. Prefer 1px borders over shadows for separation. Shadows only for
floating layers (menus, modals), soft and subtle:
`0 1px 3px rgba(0,0,0,.08)`. Never combine heavy borders + heavy shadows.

**Components** — Buttons: solid accent for primary, subtle gray/outline for
secondary, no border for tertiary; clear hover + focus-visible ring. Inputs:
light border, accent ring on focus, visible labels. Cards: white, rounded, 1px
border, padded 16–24px. Consistent icon set (e.g. lucide), 20px, aligned to text.

**Motion** — Subtle only: 150–200ms ease transitions on hover/focus/state. No
bouncy or decorative animation unless requested.

**Accessibility** — Text contrast ≥ 4.5:1. Always include visible focus states.
Hit targets ≥ 40px.

**Avoid** — clutter, many competing colors, multiple accents, tight cramped
layouts, heavy drop shadows, neon, default unstyled browser controls.

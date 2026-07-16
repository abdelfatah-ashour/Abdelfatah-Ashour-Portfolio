# Branding — Quiet Luxury

The visual and motion language for Abdelfatah Ashour’s portfolio.

## Essence

**Quiet luxury.** Calm, considered, editorial. Interfaces and identity that feel refined without shouting — graphite ink on mist paper, soft gold light, unhurried motion.

Not: startup purple, neon glow, pill clusters, emoji accents, “Portfolio / 01” meta labels, or loud dashboard energy.

## Voice

- Confident, warm, precise
- Short supporting lines; no marketing fluff
- Prefer craft language (“interfaces”, “clarity”) over buzzwords

## Foundations

### Color

| Token | Role |
| --- | --- |
| `ink` / `ink-muted` | Primary text and quiet secondary text |
| `mist` / `mist-deep` | Paper ground and deeper paper |
| `sage` / `sage-light` | Structure, nav hover, secondary emphasis |
| `gold` / `gold-soft` | Luxury accent — rules, eyebrows, highlights |
| `sky-mist` | Cool atmospheric wash only |

Gold is an accent, never a fill for large surfaces. Prefer gradients that dissolve into mist.

### Typography

- **Display & body:** JetBrains Mono — names, section titles, company names, supporting copy, UI
- Section titles: display, tight leading, `title-underline` gold draw on enter
- Eyebrows: small, wide tracking (`~0.28–0.38em`), uppercase, gold–sage mix
- Never use “Portfolio”, “01”, or similar meta labels as content

### Brand mark

- Soft **arch** symbol: curved stroke portal, open base, rounded keystone
- Graphite ink / sage on mist paper — confident ribbon weight with round caps
- Gold hairline along the inner curve — accent as light
- Assets live in `public/static/brand/` (generated via `scripts/generate-brand-assets.mjs`)

### Atmosphere

- Soft radial washes (gold / sky-mist), very low-opacity paper noise
- Hairline gold rules that draw in; thin dividers that dissolve to transparent
- Light parallax on decorative washes only in body sections
- Prefer one composition per section: one purpose, one headline, one short support line

### Motion

- CSS-only; respect `prefers-reduced-motion`
- Body sections: view-timeline **entry** reveals (`reveal`, `reveal-left`, `reveal-scale`) — finish while entering so content is readable on screen
- Hover: small lift (`~2px`), soft shadow, no glow blooms
- Timing: unhurried easings (`cubic-bezier(0.22, 1, 0.36, 1)`), longer than snappy UI defaults

---

## Hero is unique

The hero is the only full-bleed brand moment. Do **not** copy these into other sections.

| Hero-only | Why |
| --- | --- |
| Full-bleed portrait as atmospheric plane | First-viewport identity; About may use a framed portrait instead |
| Oversized split name + italic gold shimmer last name | Brand lockup lives once, at the top |
| Named view timeline `--hero` exit parallax (copy blur, portrait grade, veil/glow depth) | Scroll theatre for the opening only |
| Viewport-min height composition + ken-burns portrait drift | Opening presence, not repeating section chrome |
| Entrance blur-to-sharp name / tracking settle on occupation | Load ritual for the brand mark |

Hero content budget: occupation eyebrow, name, one headline, CTA group, resume link. No stats, badges, or chips.

---

## Body sections (shared direction)

Apply the same quiet-luxury language with **contained** layouts:

1. **Eyebrow + gold rule** → display title → one support sentence  
2. Soft section washes (parallax orbs), not full-bleed photography  
3. Gold hairline dividers; editorial lists over dense cards when possible  
4. Quieter motion than the hero — entry reveals, no exit blur theatre  
5. Prefer editorial lists (skills index, experience path) over dense card grids  

### Section roles

| Section | Treatment |
| --- | --- |
| **About** | Framed editorial portrait (matte plate) + lead in display type — distinct from hero’s full-bleed wash |
| **Experience** | Vertical path, gold markers, large company names, calm highlight lists |
| **Skills** | Four creative category cards — gold edge, monogram mark, skill chips |
| **Contact** | Soft gradient panel; display invite + Calendly CTA; editorial channel index — no sparkles/emoji |
| **Header / Footer** | Minimal chrome; monogram mark + split wordmark (italic gold last name); footer may echo the name in display type |

---

## Do / Don’t

**Do**
- Lead with the name as the brand signal in the hero
- Use gold as light and line
- Keep motion soft and reversible where scroll-linked
- Match existing tokens in `src/styles/global.css` `@theme`

**Don’t**
- Repeat the hero portrait treatment or oversized name lockup below the fold
- Add purple gradients, glow stacks, or rounded-full promo pills
- Label the site “Portfolio” in the UI
- Invent new accent colors outside the token set without updating this file

---

## Implementation map

- Tokens & motion: `src/styles/global.css`
- Hero (unique): `components/Hero.tsx` + `.hero-*` styles
- Shared section chrome: `components/Section.tsx`, `SectionHeading.tsx`, `.brand-*` / section utilities
- Content: `data/*.json`

---
name: R-ELEC
description: Family electricians and air-conditioning installers in Vendargues since 2006, with a 24/7 call-out line.
colors:
  brand: "#204d9c"
  brand-700: "#173a78"
  brand-50: "#eef3fb"
  navy-950: "#070f22"
  navy-900: "#0b1630"
  navy-800: "#14264d"
  navy-700: "#1d3363"
  volt: "#fcd93d"
  volt-600: "#f0c419"
  ink: "#0f1f3d"
  ink-muted: "#55658a"
  ink-soft: "#6f7d9c"
  line: "#e3e8f2"
  panel: "#f3f5f9"
  white: "#ffffff"
  on-dark: "#e9eef8"
  on-dark-muted: "#aab8d6"
  line-dark: "rgb(170 184 214 / 0.18)"
typography:
  display:
    fontFamily: "Onest Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 6vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Onest Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 4.5vw, 3.1rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Onest Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Onest Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Onest Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
  figure:
    fontFamily: "Martian Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "tnum"
rounded:
  field: "0.75rem"
  tile: "1rem"
  card: "1.25rem"
  panel: "1.75rem"
  pill: "9999px"
spacing:
  gutter-mobile: "1rem"
  gutter-tablet: "1.5rem"
  gutter-desktop: "2.5rem"
  section: "5rem"
  section-lg: "7rem"
  container: "81rem"
components:
  button-volt:
    backgroundColor: "{colors.volt}"
    textColor: "{colors.navy-950}"
    rounded: "{rounded.pill}"
    padding: "0 1.25rem"
    height: "3rem"
  button-volt-hover:
    backgroundColor: "{colors.volt-600}"
    textColor: "{colors.navy-950}"
  button-volt-lg:
    backgroundColor: "{colors.volt}"
    textColor: "{colors.navy-950}"
    rounded: "{rounded.pill}"
    padding: "0 1.75rem"
    height: "3.5rem"
  button-navy:
    backgroundColor: "{colors.navy-900}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0 1.25rem"
    height: "3rem"
  button-navy-hover:
    backgroundColor: "{colors.navy-800}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 1.25rem"
    height: "3rem"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  button-outline-dark:
    backgroundColor: "rgb(255 255 255 / 0.1)"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0 1.75rem"
    height: "3.5rem"
  input-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "0 0.875rem"
    height: "3rem"
  service-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "2rem"
  service-card-featured:
    backgroundColor: "{colors.navy-900}"
    textColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: "2rem"
  stat-tile:
    backgroundColor: "{colors.navy-800}"
    textColor: "{colors.white}"
    rounded: "{rounded.tile}"
    padding: "1.5rem"
  stat-tile-hover:
    backgroundColor: "{colors.navy-700}"
  icon-pastille:
    backgroundColor: "{colors.volt}"
    textColor: "{colors.navy-950}"
    rounded: "{rounded.pill}"
    size: "3rem"
  panel-navy:
    backgroundColor: "{colors.navy-900}"
    textColor: "{colors.white}"
    rounded: "{rounded.panel}"
    padding: "5rem 4rem"
  panel-grey:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "5rem 3.5rem"
  mobile-call-bar:
    backgroundColor: "rgb(255 255 255 / 0.95)"
    height: "3.5rem"
---

# Design System: R-ELEC

## Overview

**Creative North Star: "The Open Line"**

R-ELEC reads as a white, airy page that holds a few big rounded blocks: a full-width photo card, deep night-navy panels, soft grey panels. White carries trust. Navy and yellow carry urgency, and they always appear together, the way a lit call-out van shows up at night. The page builds its rhythm from blocks, never from rules: no grid lines, no rails, no hairline scaffolding between sections. Only a generous vertical gap (5rem, then 7rem on desktop) separates sections.

Density is low and the type is confident: semibold Onest headings with tight tracking, comfortable 1.0625rem body text, and figures set in Martian Mono so the proof (2006, 24/7, 5/5, the phone number) reads like an instrument readout. Only one element moves continuously: the yellow "line open" dot that pulses next to every emergency statement. Everything else is still at rest. It lifts or brightens on hover, and fades in once on scroll where the browser supports scroll timelines.

The brand is strict, per PRODUCT.md: blue `brand` is the identity, yellow `volt` is a rare accent, white dominates, and no other brand hue exists. Yellow never sits as text on a light ground.

**Key Characteristics:**
- White ground, with grey `panel` and navy `navy-900` blocks as the only large surfaces.
- Large rounded blocks (1.75rem), rounded cards (1.25rem), pill buttons.
- Two-tone headlines: grey lead-in, brand-blue payoff on white; white text with a yellow payoff on navy.
- Martian Mono 500 for display figures and large phone numbers.
- Round yellow icon pastilles with navy Lucide line icons.
- CSS-only motion (pulse, scroll reveal, hover lift), all of it cut under reduced motion.
- A sticky two-button call bar on mobile.

## Colors

A disciplined two-colour brand (blue and yellow) set on white, with a navy night family for the urgent blocks and cool blue-grey neutrals for text.

### Primary
- **Workshop Blue** (`brand`): the identity colour. Used for the payoff half of every two-tone H2 on white, for text links and "En savoir plus" affordances, for step numbers, review stars, focus outlines, caret and accent-color. **Deep Workshop Blue** (`brand-700`) is its pressed/darker step. **Blue Mist** (`brand-50`) is the active-nav pill and the white-button hover.

### Secondary
- **Night Navy** (`navy-900`): the urgent surface. Used for the hero card base, the proof panel, the final CTA band, the inner-page hero, the featured service card, the footer and the navy button. **Deep Night** (`navy-950`) is the text colour on yellow, the photo-veil base and the selection text. **Tile Navy** (`navy-800`) is the stat tile surface, and **Lifted Navy** (`navy-700`) is that tile on hover.

### Tertiary
- **Volt Yellow** (`volt`): the rare accent. Used only as a fill (primary CTA buttons, icon pastilles, the live dot, the open FAQ toggle, text selection) or as text and figure accents on navy (the H1 payoff "On arrive.", stat suffixes like "/5", the CTA-band phone number). **Pressed Volt** (`volt-600`) is the hover fill.

### Neutral
- **Ink** (`ink`): body and heading text on white.
- **Muted Ink** (`ink-muted`): supporting paragraphs, captions, form helper text.
- **Soft Ink** (`ink-soft`): the grey lead-in half of two-tone H2s, and secondary suffixes such as "/5" on white.
- **Hairline** (`line`): field borders, header and call-bar top edges, FAQ separators, the outlined rating cards.
- **Panel Grey** (`panel`): grey section panels and nav/menu hover fills.
- **On-Dark** (`on-dark`) and **On-Dark Muted** (`on-dark-muted`): primary and secondary text on navy. **Dark Hairline** (`line-dark`) is the only border colour on navy.

### Named Rules
**The No Yellow on White Rule.** Volt is never used as text or as a thin mark on white or panel grey. On a light ground it only appears as a filled button or pastille with navy text, and the live dot on light grounds gets a 2px navy ring.

**The Paired Urgency Rule.** Yellow appears with navy: navy text on a yellow fill, or yellow text on a navy surface. A yellow accent with no navy nearby is off-system.

**The No Third Hue Rule.** Only blue, yellow and their navy/grey derivatives are allowed. Status colours (such as the form error orange) are functional and never decorative.

## Typography

**Display Font:** Onest Variable (with ui-sans-serif, system-ui)
**Body Font:** Onest Variable (with ui-sans-serif, system-ui)
**Label/Mono Font:** Martian Mono 500 (with ui-monospace, SFMono-Regular)

**Character:** A single friendly geometric grotesque does all the talking. A technical mono shows up only where a number has to be trusted at a glance.

### Hierarchy
- **Display** (600, 2.6rem to 4.25rem, 1.02): the home H1 only. Inner-page H1s sit at 2.4rem to 3.75rem (1.03).
- **Headline** (600, 2.1rem to 3.1rem, 1.06, -0.03em): section H2s, built two-tone. The CTA-band H2 goes up to 3.5rem.
- **Title** (600, 1.25rem to 1.75rem): card and step H3s. FAQ questions are 1.125rem at -0.015em.
- **Body** (400, 1.0625rem, 1.6): running text. Lead paragraphs are 1.125rem. Measures are capped at 34 to 38rem (about 34ch on cards).
- **Label** (600, 0.8125rem to 0.875rem, normal tracking, sentence case): form labels, footer column heads, the "Nous intervenons à" lead.
- **Figure** (Martian Mono 500, 2rem to 3rem, line-height 1, -0.03em to -0.04em, tabular): stat tiles, rating scores, large phone numbers (CTA band, contact and emergency cards). Step indices use the same face at 0.875rem in brand blue ("01" to "04").

### Named Rules
**The Two-Tone Headline Rule.** Every section H2 splits into a lead-in and a payoff. On white the lead-in is `ink-soft` and the payoff is `brand`. On navy the lead-in is white and the payoff is `volt`. Only one payoff per heading.

**The Instrument Figure Rule.** Numbers that serve as proof, and phone numbers set at display size, use Martian Mono with tabular figures. Phone numbers inside buttons and running text stay in Onest with tabular-nums.

**The French Spacing Rule.** Visible copy goes through the `fr()` helper (`src/lib/typo.ts`), or uses literal `&nbsp;`, so `? ! : ; »` and the opening `«` never orphan at a line break.

## Layout

A single centred container (max 81rem) with gutters of 1rem, 1.5rem from 640px and 2.5rem from 1024px. Sections stack with top padding of 5rem (7rem from `lg`), and the gap itself does the separating. Content inside panels uses asymmetric two-column grids on desktop (for example 1.15fr / 1fr, or 1fr / 1.35fr), with headings bottom- or centre-aligned against their paragraphs. Card grids run 1 column, then 2, then 3 (services) or 4 (steps), with 1rem to 1.25rem gaps. Breakpoints follow Tailwind defaults (640 / 768 / 1024px). Navigation collapses to a slide-in popover below 1024px.

On mobile the hero photo takes the top half to two-thirds of the card and the text sits on the navy fade below it. The quote form drops under the hero card. A fixed bottom call bar (Appeler / Devis) stays visible, and the footer reserves 6.5rem of bottom padding so the bar never covers content.

**The No Rails Rule.** Sections and blocks are never framed by grid lines, column rails or decorative rules. Hairlines are only allowed as functional list separators (FAQ, safety steps), field borders, and the sticky header and call-bar edges.

## Elevation & Depth

The system is a tonal hybrid. Depth mostly comes from surface contrast (white, then panel grey, then navy, then tile navy), with two soft, navy-tinted shadows used sparingly: one for cards that need to float off white, one for things that sit above other content. Surfaces are flat at rest unless they float by nature (the quote form, review cards, the mobile menu).

### Shadow Vocabulary
- **Card** (`box-shadow: 0 1px 2px rgb(15 31 61 / 0.06), 0 12px 32px -16px rgb(15 31 61 / 0.18)`): review cards at rest, and white service cards on hover.
- **Float** (`box-shadow: 0 2px 6px rgb(7 15 34 / 0.12), 0 32px 64px -28px rgb(7 15 34 / 0.55)`): the quote form over the hero, the mobile menu, and the featured navy service card on hover.
- **Volt Glow** (`box-shadow: 0 1px 0 rgb(255 255 255 / 0.5) inset, 0 10px 24px -12px rgb(240 196 25 / 0.9)`): the yellow pill button only.

### Named Rules
**The Lift on Intent Rule.** Cards rise 2px and pick up their shadow only on hover or focus. Stat tiles brighten to `navy-700` instead of moving. Photo cards scale their image 3% and turn their arrow pastille 45 degrees.

**The One Living Thing Rule.** The live dot (2.4s pulse) is the only element that animates continuously. Scroll reveals (fade, 1.5rem rise, 4px unblur) run once, need `animation-timeline: view()`, and leave content visible by default. Under `prefers-reduced-motion: reduce`, the pulse, reveals, smooth scroll, menu slide and FAQ height transition are all switched off.

## Shapes

Everything is softly rounded and sized by role: 0.75rem for fields and the form submit, 1rem for stat tiles, 1.25rem for cards and the quote form, 1.75rem for full-width panels and hero cards, and full pills for buttons, nav items, tags and icon pastilles. Photo cards clip their image inside the radius, and photos only appear inside rounded containers. Icons are Lucide line icons at a 1.75 stroke, usually sitting in a 3rem yellow or navy circle.

## Components

### Buttons
Confident pills, always with an obvious verb.
- **Shape:** full pill (9999px). Heights are 3rem (md) and 3.5rem (lg), and the font is Onest 600.
- **Primary (Volt):** yellow fill, deep navy text, inset highlight plus the volt glow. Used for calls and "Devis gratuit".
- **Navy:** a navy-900 fill with white text, for the secondary action on white (FAQ call, mobile menu quote).
- **Outline:** an 80% ink border with ink text that fills to ink on hover. The header phone button uses it.
- **Outline-dark (glass):** a 35% white border on a 10% white fill, for secondary actions on navy.
- **Hover / Focus:** 200ms colour transition, a 1px press on active, and trailing arrows that nudge 2px right. The focus ring is a 2px brand outline at a 3px offset (volt on navy).

### Cards / Containers
- **Corner Style:** 1.25rem for cards, 1.75rem for panels.
- **Background:** white cards on panel grey, a single navy featured card per service grid, and stat tiles in navy-800 on navy.
- **Shadow Strategy:** see Elevation. Flat at rest, lifted on hover. Review cards always carry the card shadow.
- **Border:** only the outlined rating cards use a `line` border.
- **Internal Padding:** 1.75rem to 2rem for cards, 3rem to 5rem vertical for panels.

### Inputs / Fields
- **Style:** 3rem high, 0.75rem radius, a `line` border on white, ink text and muted placeholder. Labels sit above in 0.8125rem semibold.
- **Focus:** the border turns brand blue, with a 3px brand halo at 18% opacity.
- **Error / Disabled:** an invalid field gets a burnt-orange border. The submit button dims to 70% with a wait cursor while sending.

### Navigation
A sticky white header (95% opacity with a 6px blur) with a hairline bottom edge: logo, pill nav items (hover fills with panel grey, the current page uses brand-50 with brand text), then an outline phone button and the yellow "Devis gratuit". Below 1024px a "Menu" pill opens a right-hand popover sheet that slides in over a navy-tinted backdrop. The sheet ends with volt and navy large buttons and the live-dot emergency line.

### Live Dot
An 8px yellow dot with a pulsing halo. It always prefixes the emergency-availability line (hero, inner heroes, CTA band, footer badge, mobile menu). On light grounds it carries a 2px navy ring.

### Icon Pastille
A 3rem circle in volt with a navy line icon, or in navy with a volt icon. It heads service cards, closes photo cards as an arrow, and fronts contact and phone rows.

### Mobile Call Bar
A fixed bottom bar below 1024px, white at 95% with blur and a hairline top edge, holding two 3.5rem pills: a wider volt "Appeler" and a navy "Devis". It respects the safe-area inset.

## Do's and Don'ts

### Do:
- **Do** keep white dominant, and use `panel` and `navy-900` blocks at 1.75rem radius as the only large surfaces.
- **Do** split every section H2 into an `ink-soft` lead-in and a `brand` payoff on white, or a white lead-in and a `volt` payoff on navy.
- **Do** set proof figures and display-size phone numbers in Martian Mono 500 with tabular figures.
- **Do** put the live dot in front of every 24/7 availability statement.
- **Do** run visible French copy through `fr()` so punctuation never orphans.
- **Do** gate every animation behind `prefers-reduced-motion: no-preference`, or cancel it under `reduce`.

### Don't:
- **Don't** set yellow text, or a thin yellow mark, on white or panel grey.
- **Don't** separate sections or frame blocks with grid lines, column rails or decorative rules.
- **Don't** put an eyebrow or kicker label above headings. The two-tone H2 does that job.
- **Don't** introduce a third brand hue, or animate anything continuously other than the live dot.
- **Don't** use square corners on buttons, cards or photos.

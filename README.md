# Largo Harbour Regeneration Group — Website

A simple, fast static landing page for LHRG, built with [Astro](https://astro.build) + TypeScript.
Ships **zero JavaScript** — the mobile nav is a native `<details>/<summary>` disclosure, not a
script — and is built to pass WCAG AA out of the box (see Accessibility below).

## Status: placeholder content

This site is scaffolded with realistic **placeholder content and images** so the layout can be
reviewed and built out before the client's real material is ready. Before launch:

- [x] Logo added: `src/assets/logo.jpg`, optimized to WebP at build time and used in
      `src/components/Header.astro`. It's a flat JPG with a white background, wrapped in a white
      chip to sit cleanly on the navy header — if the client later supplies a transparent PNG/SVG
      version, drop it in and remove that wrapper.
- [x] Colour palette (`src/styles/tokens.css`) updated to match the logo's navy/teal, with a
      darker `--color-teal` chosen specifically to pass 4.5:1 text contrast (see Accessibility).
- [x] `src/content/data/people.ts` — Chair, Vice-Chair & Secretary, and Treasurer are real.
- [x] Hero and gallery now use real photos of Lower Largo/the pier (`src/assets/photos/`):
      `sunset-over-harbour.png` (hero) and `pier-lobster-pots.png` (gallery) are the client's own —
      no credit needed. The other three gallery photos (`harbour-viaduct.jpg`, `old-harbour.jpg`,
      `largo-bay.jpg`) are sourced from Wikimedia Commons/Geograph.org.uk under CC BY-SA 2.0 and
      carry an on-page "Photo: [credit]" link back to the source, as the license requires — replace
      them with more of the client's own photos as those come in, but don't remove the credit from
      any Geograph/Commons photo that stays.
- [~] `src/components/PersonCard.astro` shows a real portrait when a person has a `photo` set in
      `people.ts` (see Duncan Campbell — `src/assets/photos/people/duncan-campbell.jpg`), and falls
      back to `<PlaceholderImage>` otherwise. Shona and Alan still need photos added the same way;
      remove `PlaceholderImage.astro` once nothing uses it.
- [x] About copy in `src/components/About.astro` replaced with client-approved text.
- [x] Contact details set: email (`mail@largoharbour.org`) and WhatsApp community link, in
      `src/components/Contact.astro`. No phone number — not applicable for this client.
- [ ] Confirm the domain in `astro.config.mjs` (`site:`) and `public/robots.txt` — currently set to
      `largoharbour.org`.
- [x] OSCR Scottish Charity number (SC055552) and company registration (SC893516) added to
      `src/components/Footer.astro` — required by law for a Scottish charity's website.
- [x] Favicon set generated from `src/assets/favicon.png` (the client's square LHRG icon) into
      `public/` (`favicon.ico`, 16x16/32x32 PNGs, `apple-touch-icon.png`), wired up in
      `src/layouts/BaseLayout.astro`.
- [x] Builder credit ("Built by Timothy Graham", linking to timgraham.dev) added to
      `src/components/Footer.astro`.

## Accessibility

Built to WCAG 2.1 AA, checked concretely rather than assumed:

- **Colour contrast** — every text/background pairing in `tokens.css` was checked against the
  4.5:1 (normal text) / 3:1 (large text, UI) thresholds. The raw sampled logo teal (`#2f9fc0`,
  ~3:1 on white) was too light to use as text, so `--color-teal` is a darkened, text-safe version
  (`#1c6f88`, 5.7:1); the original bright tone is kept as `--color-teal-bright` for decorative use
  only (gradients, focus rings) and must never sit under text.
- **Focus indicators** — a double-ring focus style (`global.css`) — white inner ring + navy outer
  shadow — stays visible on every background the site uses (checked: ≥8.2:1 on light sections,
  ≥9.9:1 on the navy header/footer).
- **Mobile nav** — a native `<details>/<summary>` element (`Nav.astro`), not a scripted toggle:
  works with no JS, and gets keyboard operability and expand/collapse semantics for free.
- **Skip link** — "Skip to main content" (`index.astro`), visible on keyboard focus.
- **Reduced motion** — `prefers-reduced-motion: reduce` collapses transitions/animations
  (`global.css`).
- **Images** — decorative icons are `aria-hidden`; the external WhatsApp link is marked as opening
  a new window for screen reader users. Placeholder photo blocks carry a visible caption that
  doubles as their accessible label — when real photos go in, give each a real descriptive `alt`.

## Project Structure

```text
/
├── public/                  static assets (favicon, robots.txt)
├── src/
│   ├── assets/               source images Astro optimizes at build time (logo.jpg)
│   ├── components/          one component per section (Header, Hero, About, ...)
│   ├── layouts/
│   │   └── BaseLayout.astro  shared <head>/HTML shell
│   ├── pages/
│   │   └── index.astro       assembles all sections for the single landing page
│   ├── content/data/         typed placeholder content (people, gallery captions)
│   └── styles/                tokens.css (design tokens) -> global.css -> utilities.css
└── package.json
```

## Commands

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`       | Start local dev server at `localhost:4321`    |
| `npm run build`     | Build the production static site to `./dist/` |
| `npm run preview`   | Preview the production build locally          |
| `npm run astro check` | Run TypeScript/template diagnostics         |

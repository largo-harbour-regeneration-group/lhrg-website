# Largo Harbour Regeneration Group — Website

A simple, fast static landing page for LHRG, built with [Astro](https://astro.build) + TypeScript.
Ships **zero JavaScript** — the mobile nav is a native `<details>/<summary>` disclosure, not a
script — and is built to pass WCAG AA out of the box (see Accessibility below).

Live at **[largoharbour.org](https://largoharbour.org)**, deployed via GitHub Pages.

## Outstanding before full launch

- [ ] Photos for Shona Cochrane and Alan Cochrane in `src/content/data/people.ts` — currently fall
      back to a placeholder box (see Duncan Campbell's entry for the pattern: add the photo to
      `src/assets/photos/people/`, import it, set `photo:` on their entry).
- [ ] More of the client's own photos to replace the three remaining CC BY-SA credited gallery
      photos (`harbour-viaduct.jpg`, `old-harbour.jpg`, `largo-bay.jpg` in `src/content/data/gallery.ts`)
      — not required (the credit link satisfies the license), but nice to have all-original photos.

## Deployment

- **Repo**: [github.com/largo-harbour-regeneration-group/lhrg-website](https://github.com/largo-harbour-regeneration-group/lhrg-website)
  (public — required for GitHub Pages on the org's Free plan; there's nothing sensitive in the
  codebase).
- **Auto-deploy**: `.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every
  push to `main`.
- **Custom domain**: set via `public/CNAME` (`largoharbour.org`) and the repo's Pages settings.
  DNS is managed at Dynadot: four `A` records on the root domain pointing at GitHub's Pages IPs
  (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`), plus a `CNAME` record for `www` pointing
  at `largo-harbour-regeneration-group.github.io`. GitHub auto-issues HTTPS once DNS resolves.

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
- **Reduced motion** — `prefers-reduced-motion: reduce` collapses transitions/animations and
  disables the scroll-in `.reveal` animation (`global.css`).
- **Images** — decorative icons are `aria-hidden`; the external WhatsApp link is marked as opening
  a new window for screen reader users. Real photos (`<PhotoTile>`) carry descriptive `alt` text;
  the remaining placeholder photo boxes (`<PlaceholderImage>`, for people without a photo yet) show
  a visible caption that doubles as their accessible label.

## Project Structure

```text
/
├── public/                   static assets (favicons, robots.txt, CNAME for the custom domain)
├── src/
│   ├── assets/
│   │   └── photos/            source photos Astro optimizes at build time (incl. people/ portraits)
│   ├── components/           one component per section (Header, Hero, About, ...)
│   ├── layouts/
│   │   └── BaseLayout.astro   shared <head>/HTML shell
│   ├── pages/
│   │   └── index.astro        assembles all sections for the single landing page
│   ├── content/data/          typed content (people, gallery captions/credits)
│   └── styles/                 tokens.css (design tokens) -> global.css -> utilities.css
└── .github/workflows/deploy.yml
```

## Commands

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`       | Start local dev server at `localhost:4321`    |
| `npm run build`     | Build the production static site to `./dist/` |
| `npm run preview`   | Preview the production build locally          |
| `npm run astro check` | Run TypeScript/template diagnostics         |

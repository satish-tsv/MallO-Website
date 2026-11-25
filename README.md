# MallO website

The marketing website for **MallO**, the app that helps shoppers find stores, food, offers and facilities in their mall, and how to get there. *Your mall, made simple.*

Built with React 19 and TypeScript, bundled with esbuild. No server needed: the build is a static site.

## Pages

| Route | Page |
| --- | --- |
| `#/` | Home: search hero, what's inside, how it works (animated app demo), MallO points, get the app, FAQ, partner banner |
| `#/partner` | Partner with us: benefits for malls and for stores and brands, how it works, partner FAQ, enquiry form |
| `#/about` | About MallO, values, privacy promise, photo credits |
| `#/help` | FAQ and contact |
| `#/privacy`, `#/terms` | Placeholders until the policies are published |

## Run it

```bash
npm install
npm run dev        # http://localhost:5173, rebuilds on save
npm run build      # static site in dist/
npm run typecheck
```

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages (`.github/workflows/pages.yml`).

## Before going live

- Replace the placeholder `@mallo.example` email addresses in `src/content.ts`.
- Publish the Privacy Policy and Terms of Use (`src/pages/Other.tsx`, `Legal`).
- Forms open the visitor's email app; connect a form service if you want submissions stored.
- Add the Play Store and App Store links in `STORE` in `src/content.ts`; the badges become clickable.
- Photos are free under the Unsplash License (credits on the About page). They are listed in `src/photos.json` and downloaded into the site by the deploy workflow (`npm run images` does the same locally). Swap in your own mall photography there when you have it.

## Editing copy

All text, FAQs, points rules, emails and photos are in `src/content.ts` and the page files in `src/pages/`. Brand colours and fonts follow the MallO brand guide (marigold `#FFB300`, ink `#17171C`, Bricolage Grotesque and DM Sans).

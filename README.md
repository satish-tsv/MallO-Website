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

## Before launch

- Replace the placeholder `@mallo.example` email addresses in `src/content.ts`.
- Publish the Privacy Policy and Terms of Use (`src/pages/Other.tsx`, `Legal`).
- Forms open the visitor's email app; connect a form service if you want submissions stored.
- Photos are loaded from Unsplash (free under the Unsplash License; credits on the About page). Swap in your own mall photography in `src/content.ts` when you have it.

## Editing copy

All text, FAQs, points rules, emails and photos are in `src/content.ts` and the page files in `src/pages/`. Brand colours and fonts follow the MallO brand guide (marigold `#FFB300`, ink `#17171C`, Bricolage Grotesque and DM Sans).

# kuronekosamastudios.com

Astro static site for Kuro Neko Sama Studios, deployed to Cloudflare Workers (static assets).

- Build: `npm run build` · Deploy: `npx wrangler deploy`
- Store links: fill in `src/data/site.ts` → `links.steamHol` / `links.itchHol` once the pages are live; buttons switch from "coming soon" automatically.
- Contact email: `site.email` in `src/data/site.ts` (mailbox must exist).
- Books: `src/data/books.ts`.
- Heroes of Lumora art and screenshots come from the heroes-of-lumora repo (`Steam/store_art`, `Steam/store_media`), test-build branch.

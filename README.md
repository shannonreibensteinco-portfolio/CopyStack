# Website Copy System

A copywriting tool built on the Copy Posse framework, covering Home, About,
Offers, Social Proof, and Blog pages. Each client's project data (name, brand
type, audience, notes, progress, and formula selections) is saved to a D1
database, so your work persists across sessions and devices.

## What's inside

- **Dashboard** (`/`) — list of all clients, create new ones, delete old ones.
- **Client workspace** (`/client/[id]`) — the five-page tool, scoped to one
  client. Notes and progress autosave as you work.
- **About page** has a strict single-select toggle: Personal brand vs.
  Organization. Choosing one always fully deselects the other.
- **Offers page** has a strict single-select toggle across three formulas:
  Services & packages, Pricing tiers (SaaS), Catalog / products. Exactly one
  is active at a time.

## Local development

```bash
npm install
npm run dev
```

This runs the app with Next.js's dev server. Note: the D1 database binding
only works through Wrangler's runtime, so for full local testing with a real
database, use:

```bash
npm run preview
```

This builds with OpenNext and runs it through Wrangler's local Workers
runtime, which simulates the Webflow Cloud environment including the D1
binding.

## Deploying to Webflow Cloud

This repo is meant to be deployed via the Webflow Cloud deploy wizard, not
manually:

1. Push this repository to GitHub (see below).
2. In Webflow, go to your Workspace → **Create app** → **Deploy app**.
3. Choose **Import a GitHub repository** and select this repo.
4. Choose **Standalone app** (not attached to an existing site).
5. Click **Deploy**. Webflow Cloud will read `webflow.json` and
   `wrangler.json`, provision the D1 database declared in `wrangler.json`
   automatically, run the migration in `drizzle/0000_init.sql`, and deploy.
6. Once deployed, every push to the connected branch redeploys automatically.

You do not need to manually create the D1 database or fill in the
`database_id` field in `wrangler.json` — Webflow Cloud generates this for you
when you deploy through the wizard.

## Pushing this to GitHub for the first time

```bash
cd copy-system-app
git init
git add .
git commit -m "Initial commit: website copy system"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME/YOUR_REPO_NAME` with the empty repo you create on
GitHub before running these commands.

## Adding more page formulas later

Each page's content lives in its own file under `lib/`:

- `lib/data-home.ts`
- `lib/data-about.ts` (exports `aboutPersonalData` and `aboutOrgData`)
- `lib/data-offers.ts` (exports `offersServicesData`, `offersPricingData`,
  `offersCatalogData`)
- `lib/data-socialproof.ts`
- `lib/data-pages.ts` (blog)

To add a new section to any page, add an object to the relevant array
following the existing `Section` shape in `lib/data-home.ts`.

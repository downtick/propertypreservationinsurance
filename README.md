# propertypreservationistinsurance.com

Next.js 16 lead-generation site for property preservation and mortgage field
inspector insurance.

## Stack
- Next.js 16 (App Router) + React 19, TypeScript, Tailwind v4
- Zod validation on all form input (server-side)
- SMTP2GO for lead + contact email → `leads@runquotes.com`
  (from `propertypreservation@runquotes.com`)
- Deploys on Vercel

## Design
"Vacant Property" palette — deep olive & slate (`#3c4a2a` / `#55663d`) with a
worn-amber accent (`#c1902f`) on warm cream (`#f7f5ee`). Oswald (display) +
Inter (body). Hotlinked, license-appropriate imagery from images.unsplash.com
via `next/image` (see `next.config.ts` `images.remotePatterns`).

## Key flows
- **Quote form** (`/quote` + homepage CTA): full contact info, optional
  business name, full address, phone auto-formatted `xxx-xxx-xxxx`, ZIP capped
  at 5 digits. Type-of-work chips (winterization / lawn & landscaping /
  handyman / trash-out / securing / inspections / janitorial). Sliders for
  number of owners active in the business, number of employees, and number of
  1099 subcontractors. Required Yes/No toggles for "any employees?" (→ number
  of employees), "any 1099 subcontractors?" (→ number + annual amount paid,
  conditionally revealed), "are you a mortgage field inspector?", and "any
  prior claims?" (→ details) — with a live "questions left" submit gate.
  Coverage selector: **General Liability**, **Professional Liability (E&O)**,
  and **Cyber Liability**. Honeypot + origin check + rate limit for bot
  protection.
- **Thank-you** (`/thank-you`): confirmation message + Ethos life insurance
  affiliate link (`https://agents.ethoslife.com/invite/bib`) only — no Thimble
  widget, per site owner's explicit choice.
- **Contact** (`/contact`): First/Last, Email, Phone, State, message → SMTP2GO.
- **Content pages**: `/property-preservation-insurance` and
  `/mortgage-field-inspector-insurance` confirm quotes are available for each
  audience; `/general-liability-insurance`, `/professional-liability-insurance`,
  and `/cyber-liability-insurance` explain each coverage for this niche.
- **Accessibility widget**: floating control (text size + high contrast), persisted.

## Environment variables
See `.env.example`. Set these in Vercel (Production + Preview):

| Var | Purpose |
|-----|---------|
| `SMTP2GO_API_KEY` | Lead + contact email delivery |
| `SMTP2GO_SENDER_EMAIL` | Defaults to `propertypreservation@runquotes.com` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 (optional; leave blank to disable) |
| `TURNSTILE_SECRET_KEY` / `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Optional bot-protection upgrade — honeypot + rate limit + origin check are already active without these |

## Local dev
```bash
npm install
cp .env.example .env.local   # fill in keys
npm run dev
```

## Before launch (counsel / owner TODOs)
- Confirm governing-law **state/county** in `/terms-of-service` (Nevada left in as a placeholder).
- Have counsel review `/privacy-policy`, `/terms-of-service`, `/disclaimer`.
- Push repo to GitHub and connect to Vercel; set the environment variables above.
- Verify DNS and that the SMTP2GO sender domain (`runquotes.com`) is authorized,
  and that `propertypreservation@runquotes.com` is a verified sender.
- Add `public/og-image.jpg` (1200×630) if you want a custom social image.
- Optional: add Cloudflare Turnstile to the forms (honeypot + rate limit +
  origin check are in place today).

## Notes
- Not an insurance agency — the site connects property preservationists and
  mortgage field inspectors with insurance professionals. Copy avoids language
  implying guaranteed coverage; every content page carries an inline
  disclaimer and links to `/disclaimer`.
- All imagery depicts vacant/bank-owned properties and preservation/inspection
  work — never occupied family homes.

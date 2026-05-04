# Target audit: `https://deel-clone-omega.vercel.app/`

## Tech signals (from HTML)

- Fonts: Google `Roboto` (300/400/500/700) plus preloads from `website-media.deel.com` (Deel marketing font stack).
- Assets: static media and images served from `https://website-media.deel.com/` (Next-style `_next/static` paths).
- SPA shell: Create React App meta remnants in HTML; primary content hydrated with Deel marketing routes.

## Section order (content)

1. **Header**: logo, primary nav (Product / Solutions / Why Deel / Pricing / Resources), Log in, Request a demo.
2. **Hero**: headline “Payroll, HR, and compliance for global teams” with animated keyword list (Payroll, Compliance, Hiring, Onboarding, Taxes, Invoices, HRIS), body copy, CTAs “Get a demo” + “Speak to sales”, hero product visual.
3. **Trust strip**: “DEEL IS TRUSTED BY 35,000+ COMPANIES…” + grayscale partner logos (row/marquee).
4. **Global People Platform**: subhead + tabs **Deel Payroll / Deel HR / Deel IT / Deel Services** + bento/cards (PEO promo, US Payroll, EOR, Contractor Management, Contractor of Record, Global Payroll).
5. **Scale block**: “Scale globally with velocity and ease” + long-form paragraph.
6. **Testimonials**: quotes carousel (Jeremy C., Katie R., Thomas L., John David Q.) + “Choose Deel…” line.
7. **Stats**: 500K workers / 35K businesses / $11.2B processed.
8. **Compliance Hub**: “Unlock Continuous Compliance™…” + 3 feature bullets.
9. **Deel Advantage**: intro paragraph with inline links + 6-up feature grid (Reporting, Scalability, Dedicated support, Trusted partner, Seamless integration, Unrivalled security).
10. **Global coverage**: “There’s a whole world out there…” + coverage/map visual.
11. **Customer stories**: filters + featured Turing story + “5,000+ contracts created”.
12. **Steps**: 3 numbered steps (Book a call / Add your people / Dedicated onboarding).
13. **Reviews**: “See what our clients are saying” list.
14. **Promo legal**: long PEO promotion terms footnote.
15. **Footer**: ratings badges, link columns, social, language, copyright.

## Interaction behaviors

- **Sticky header** on scroll (desktop expectation).
- **Platform tabs**: switch visible card set; keyboard Left/Right between tabs.
- **Testimonials**: horizontal carousel with snap/drag + dots.
- **Customer story filters**: toggle active filter chip (visual state only).
- **Mobile nav**: disclosure menu, focusable controls, ESC to close.

## Breakpoints (implementation)

- `sm` 640, `md` 768, `lg` 1024, `xl` 1280, `2xl` 1440 — verify against live at 375 / 768 / 1024 / 1440.

## Assets captured locally

- `public/assets/icons/*.svg` from `website-media.deel.com/_next/static/media/*`
- `public/assets/general-purple.png` (Deel CDN)

Additional product/hero raster likely lazy-loaded from the same CDN; `next.config.ts` allows remote patterns for optional `next/image` usage.

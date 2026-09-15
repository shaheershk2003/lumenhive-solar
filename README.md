# LumenHive Solar — Final Customer Website

Premium responsive React + Vite website for LumenHive Solar, Shahjahanpur, Uttar Pradesh.

## Included
- English default + full-page Hindi switch
- Residential, commercial, on-grid, hybrid/off-grid solutions
- Solar service & maintenance for existing systems, including systems installed by other providers (subject to inspection)
- PM Surya Ghar / UP subsidy section
- Interactive solar calculator
- Complete 3 kW package pricing
- Detailed 3 kW package inclusions
- Professional WhatsApp lead messages to +91 70072 71854
- Lead/contact form routed to WhatsApp
- Instagram + Facebook + phone + email
- LumenHive logo and brochure imagery from supplied business material
- Responsive mobile-first design
- SEO/Open Graph metadata

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Business settings
Main business details and package pricing live at the top of `src/main.jsx` in `BUSINESS` and `PACKAGES`.

### Facebook
The site currently uses `https://www.facebook.com/lumenhivesolar/` as the Facebook destination based on the requested business handle. If the actual Facebook page uses a different URL, change the single `BUSINESS.facebook` value.

### Important commercial note
The website describes subsidy and savings as indicative and subject to eligibility/current government/DISCOM rules. The final quotation should be based on site survey and the actual system configuration.

## Production recommendation
For a true CRM/admin version, add a Node/Express API + PostgreSQL/Supabase lead store after the public website is approved. The current public conversion path is intentionally simple: calculator/contact → structured WhatsApp enquiry.

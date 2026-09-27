# ReLearn Skills — Static Website

This is a clean standalone HTML/CSS/JavaScript recreation based on the published Wix page.

## Files
- `index.html` — page structure/content
- `css/style.css` — responsive styling
- `js/script.js` — mobile navigation and enquiry form fallback
- `images/` — add your own logo/trainer photographs here (place `logo.png` here)

## Before publishing
Replace:
- `[COMPANY EMAIL]`
- `[COMPANY PHONE]`
- `[PRICE]`
- `[Trainer Name]` and trainer details
- trainer images/content

## Making the form automatically email you
The included form currently uses a `mailto:` fallback, which requires the visitor to have an email application configured.

For automatic delivery without building a backend, use a form service such as Web3Forms or Formspree:
1. Create an account and obtain the form endpoint/access key.
2. Change the `<form>` in `index.html` to the service's recommended form configuration.
3. Remove the `mailto:` logic from `js/script.js`.
4. Test the form on the deployed HTTPS site.

## Deploy free
You can upload this folder to GitHub Pages, Netlify, Vercel, or Cloudflare Pages.

Open `index.html` locally to preview the site.

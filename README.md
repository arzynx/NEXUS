# Nexus · UIT RGPV Bhopal

Nexus is a mobile-first event discovery and entry app built with plain HTML, CSS, ES modules, Firebase Authentication, and Cloud Firestore. It is intentionally usable without a build step.

## What is included

- Dark-first, accessible event feed with IST timeline, live search, category chips, area filtering, mobile navigation, and light theme.
- Landing hero featuring the supplied UIT RGPV logo, with a safe original Nexus fallback mark if the remote source is unavailable.
- Google sign-in, first-time student profile completion, organizer/admin roles, realtime Firestore event feed, and realtime registration updates.
- Create/edit/cancel flow with browser-side center crop/compression, explicit IST time parsing, map preview, and input validation.
- Request, approve, reject, revoke, QR ticket, ticket image save, event scanner/manual code check-in, CSV export, tickets, Discover, Clubs, and Notifications screens.
- `DEMO_MODE` sample events so the visual experience works before a Firebase project is connected.

## Run locally

Use a static server, never `file://`:

```powershell
npx serve .
```

Open the displayed local URL. Camera use needs HTTPS in production.

## Connect Firebase

1. Create a Firebase project and Web App.
2. Enable **Google** in Authentication → Sign-in method.
3. Create Firestore in production mode and publish the rules in [`firestore.rules`](firestore.rules).
4. Add your local and production domains to Authentication → Settings → Authorized domains.
5. Paste the public web configuration into [`js/firebase-config.js`](js/firebase-config.js).
6. In Firestore, manually create `roles/{lowercase-email}` for every event head, with `role` set to `organizer` or `admin`.
7. Set `DEMO_MODE` to `false` in [`js/config.js`](js/config.js) before launch.
8. Deploy the root folder with Firebase Hosting (`firebase init hosting`, then `firebase deploy`) or any HTTPS static host.

Only the public Firebase web config belongs in this repository. Never add service-account keys or other secrets.

## Branding swaps

The supplied logo URL is configured in `ASSETS.logo` inside [`js/config.js`](js/config.js). For a self-hosted asset, download the approved file to `assets/logo.png`, set `ASSETS.logo` to that path, and leave `assets/nexus-mark.svg` as the fallback. Add a campus photo at `assets/college.jpg`, then point `ASSETS.campus` to it; the provided placeholder keeps the hero polished in the meantime.

## Assumptions

- Firebase credentials and organizer Gmail addresses were not provided, so the app ships in visual demo mode and does not create remote data until configured.
- The Google Maps iframe uses the requested keyless URL builder. It is isolated in `js/maps.js` for a later official Embed API migration.
- Capacity protection follows the requested approval batch operation. For exceptionally high-concurrency events, add a server-side trusted capacity check before production.
- The attached logo is served from the provided Google image URL because the image host rejected direct server-side download; the app has a local fallback and does not break if it fails.

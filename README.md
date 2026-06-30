# Streamer Support Page — Master Template

A premium "link-in-bio" support page for streamers. Arcade-terminal theme.
Instant support buttons, crypto wallets with **auto-generated QR codes**,
optional donation goals, free ways to help, a sponsor section, and a
supporter wall — **all driven by one file: `config.js`.**

Plain static site. No build step, no backend, no accounts.

---

## The model: build once, sell many

This repo is your **master template**. You never rebuild it. Every client is
a copy of this repo with a different `config.js`. New client = ~10 minutes.

```
master-template  (this repo, GitHub Template)
   └── client-rabava   →  edit config.js  →  Cloudflare Pages  →  rabava.yoursite.com
   └── client-lunnova   →  edit config.js  →  Cloudflare Pages  →  lunnova.yoursite.com
   └── client-...
```

---

## Files

| File | Edit it? | What it is |
|------|----------|------------|
| `config.js`  | **YES — the only file** | name, links, wallets, colors, section switches |
| `index.html` | no | page structure |
| `styles.css` | no | the look |
| `app.js`     | no | the logic |
| `_headers`   | no | caching + security (Cloudflare/Netlify) |
| `assets/`    | drop logo here | put `avatar.png` here if the client has a logo |

---

## One-time setup (do this once)

1. Push this folder to a GitHub repo named `streamer-template`.
2. On GitHub: repo **Settings → check "Template repository."**
   Now every new client starts with one click ("Use this template").

## Make a page for a new client (~10 min)

1. GitHub → **Use this template** → name it `client-<name>`.
2. Edit `config.js`: name, links (their Dub short links), wallets, accent color.
   Drop their logo in `assets/avatar.png` and set `avatar: "assets/avatar.png"`.
3. Cloudflare → **Pages → Create → Connect to Git** → pick the repo.
   - Framework preset: **None**
   - Build command: **(leave empty)**
   - Output directory: **/**  (root)
4. Deploy. Add the subdomain `name.yoursite.com` in Pages → Custom domains.
5. Send the client their link. Done.

**Updating later:** edit `config.js`, `git push`. Cloudflare redeploys in ~60s.

---

## Links: the standard slug set

Every client uses the **same 7 slugs** so config.js is copy-paste. The client
owns their Dub account and points each slug wherever they want — they control
the destinations, you control the page.

```
/live     stream (Kick / Twitch / YT live)
/money    their #1 money link (tip / bonus / shop — niche decides)
/discord  Discord invite
/yt       YouTube
/tiktok   TikTok
/x        X / Twitter
/insta    Instagram
```

In `config.js` the links read `https://go.NAME.gg/live` — swap `NAME` for the
client's short domain (or use their `dub.sh/...` links to start).

---

## Section switches (one template, every niche)

Each section is a `show…` switch in `config.js`. Flip them per niche:

| Switch | Default |
|--------|---------|
| `showTicker` | on |
| `showSupport` | on |
| `showCrypto` | on |
| `showGoals` | **off** |
| `showFree` | on |
| `showImpact` | on |
| `showSponsor` | on |
| `showSupporters` | **off** |

Change the single `accent` color and the **whole page re-skins**.

---

## Crypto QR codes

Automatic. Each coin has a **QR** button that draws the code live from the
wallet address in `config.js` — no image files, no QR website. Paste the
address once and the QR makes itself. (Needs internet to draw, viewers always
have it.)

## Logo

In `config.js` set `avatar`:
- Drop a square image in `assets/` and write `avatar: "assets/avatar.png"`, or
- paste any image URL, or
- leave it `""` to show the client's first letter.

## Custom share preview (optional)

For a custom card when the link is pasted in Discord/Telegram/X, edit the three
`og:` lines in `index.html`. (These can't be in config.js — social crawlers read
the raw HTML before scripts run.)

---

## Hosting note

Primary host: **Cloudflare Pages** (unlimited bandwidth — survives a stream
traffic spike). `netlify.toml` is kept so the same files also drag-drop onto
Netlify as a backup host. The build is plain static files, so it redeploys to
any host in minutes — a takedown is never a catastrophe.

## Money note

This page only *displays* links and wallet addresses. Funds go straight from
supporter to the streamer's own PayPal / Ko-fi / wallet. Hosting never touches
anyone's money.

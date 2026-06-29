# Streamer Support Page

A premium "link-in-bio" support page for streamers: instant support buttons,
crypto wallets with copy buttons, live-style donation goals, free ways to help,
a sponsor section, and a supporter wall.

Plain static site. No build step, no accounts, no backend. Free to host.

## Files
- `index.html` - the page structure (don't need to touch)
- `styles.css`  - the look (don't need to touch)
- `app.js`      - the logic (don't need to touch)
- `config.js`   - **the only file you edit** (name, links, wallets, goals, supporters)
- `netlify.toml` - tells Netlify it's a static site

## Put it live (about 60 seconds)
1. Go to https://app.netlify.com/drop
2. Drag this whole folder onto the page.
3. You get a live link like `your-name.netlify.app`. Done.

To use a custom domain later (e.g. `rabava.gg`), add it free in Netlify's
Domain settings. The domain itself costs ~$10-15/year from Cloudflare or Porkbun.

## Make a page for a new streamer
1. Copy this folder.
2. Open `config.js` and change the name, links, wallet addresses, goals and supporters.
3. Change the one `accent` color if you want a different theme.
4. Drag the new folder to Netlify Drop. New page, ~5 minutes.

## Your logo
In `config.js` set `avatar`:
- Easiest: drop your logo image into this folder, then write its file name, e.g. `avatar: "logo.png"`.
- Or paste any image link: `avatar: "https://.../logo.png"`.
- Leave it empty `""` to show your first letter instead.
Use a square image so it fits the circle nicely.

## Show / hide sections
Two sections are switches in `config.js`:
- `showGoals: false` - the "Current Goals" bars (OFF by default; set true to show).
- `showSupporters: false` - the "Recent Supporters" wall (OFF by default; set true to show).
The supporter names are typed in by hand. To make either update on its own
later, replace it with a free Ko-fi / StreamElements widget.

## The look
Theme is "arcade terminal" - sharp edges, CRT scanline + grain texture, mono
terminal labels, a scrolling marquee, and sticker-style buttons. To re-theme a
whole page for a different streamer, change the single `accent` color in
`config.js`; everything follows it.

## Crypto QR codes
Automatic. Each coin has a **QR** button that draws the QR code live from the
wallet address in `config.js` - no image files, no QR website. Paste the
address once and the QR makes itself. Tap a coin's QR button to see it.

## Make the goals + supporter wall update on their own (optional)
Hard-coded numbers in `config.js` are fine to start. When a streamer wants the
donation goals and supporter feed to update automatically, swap those sections
for a free **Ko-fi** or **StreamElements** widget embed - they log into their
own dashboard and the page updates itself, no re-upload.

## Note on money
This page only *displays* links and wallet addresses. Money goes straight from
the supporter to the streamer's own PayPal / Ko-fi / wallet. Hosting the page
never touches anyone's funds.

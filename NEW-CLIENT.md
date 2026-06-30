# New Client Checklist  ·  ~10 minutes

Copy this list for every client. Don't improvise — same steps every time.

## 1 · Collect (one form, no back-and-forth)
- [ ] Streamer name + tagline
- [ ] Logo (square PNG) — or skip, page shows their initial
- [ ] Accent color (hex) — or use default green
- [ ] Their links for the 7 slugs: live, money, discord, yt, tiktok, x, insta
- [ ] Crypto wallet addresses (BTC / ETH / SOL / USDT — whichever they use)
- [ ] Sponsor email
- [ ] Niche → which sections are ON

## 2 · Build
- [ ] GitHub → **Use this template** → `client-<name>`
- [ ] Edit `config.js`: name, tagline, intro, accent, links, wallets, email
- [ ] Logo → `assets/avatar.png`, set `avatar: "assets/avatar.png"`
- [ ] Flip section switches for the niche
- [ ] Commit + push

## 3 · Deploy
- [ ] Cloudflare → Pages → Connect to Git → pick the repo
- [ ] Preset: None · Build command: empty · Output: `/`
- [ ] Deploy → add custom domain `name.yoursite.com`

## 4 · Hand off
- [ ] Client makes a Dub account, creates the 7 slugs, points them
- [ ] Send live link + the Telegram/Discord pieces if bundled
- [ ] Add to client tracker (name, repo, domain, fee, status)

## 5 · Money
- [ ] Setup fee collected (USDT)
- [ ] Monthly management started if applicable ($5/mo)

---

### Niche → section preset cheat-sheet
| Niche   | money button is | turn ON extra | turn OFF |
|---------|-----------------|---------------|----------|
| Gamer   | tips / subs     | crypto, sponsor | goals |
| Casino  | bonus / referral| crypto          | goals, impact |
| Music   | streams/booking | —               | crypto (optional) |
| Artist  | commissions/shop| —               | goals |
| Fitness | coaching/code   | sponsor         | crypto |
| IRL     | subs / merch    | —               | goals |
| Charity | donation goal   | goals (ON!)     | sponsor |

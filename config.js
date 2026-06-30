/* ============================================================================
   CONFIG.JS  —  THE ONLY FILE YOU EDIT PER CLIENT
   ----------------------------------------------------------------------------
   Everything on the page is driven from here. Change a value, save, push.
   Each section has a show/hide switch so one template fits every niche.

   LINKS: use the client's short links (Dub). Standard slug set:
     /live  /money  /discord  /yt  /tiktok  /x  /insta
   Swap "go.NAME.gg" for the client's own short domain.
============================================================================ */

const CONFIG = {

  /* ---- IDENTITY ------------------------------------------------------- */
  name:    "RABAVA",
  kicker:  "Support the Stream",
  tagline: "Live every night // no mercy",
  intro:   "Thanks for stopping by. Every bit of support keeps the stream running.",

  accent:  "#53FC18",   // ONE color re-skins the whole page

  // Logo: "assets/avatar.png"  |  a full URL  |  ""  (empty = shows first letter)
  avatar:  "",

  /* ---- NICHE PRESET (just a note for you; switches below do the work) - */
  // gamer | casino | music | artist | fitness | irl | vtuber | coding | charity
  preset:  "gamer",

  /* ---- SCROLLING TICKER ---------------------------------------------- */
  showTicker: true,
  ticker: ["Support RABAVA", "GG WP", "Thanks for the sub", "Drop a follow"],

  /* ---- INSTANT SUPPORT BUTTONS --------------------------------------- */
  // icon = any emoji. primary:true makes one button the bright accent button.
  showSupport: true,
  support: [
    { label: "Watch Live on Kick", icon: "🔴", link: "https://go.NAME.gg/live", primary: true },
    { label: "Buy Me a Coffee",    icon: "☕", link: "https://go.NAME.gg/money"  },
    { label: "PayPal",             icon: "💳", link: "https://go.NAME.gg/paypal" },
    { label: "Become a Sub",       icon: "⭐", link: "https://go.NAME.gg/sub"    },
  ],

  /* ---- CRYPTO (QR codes auto-generate from the address) -------------- */
  showCrypto: true,
  crypto: [
    { name: "Bitcoin",  symbol: "BTC",   badge: "₿", address: "PASTE_BTC_ADDRESS"  },
    { name: "Ethereum", symbol: "ETH",   badge: "Ξ", address: "PASTE_ETH_ADDRESS"  },
    { name: "Solana",   symbol: "SOL",   badge: "◎", address: "PASTE_SOL_ADDRESS"  },
    { name: "USDT",     symbol: "TRC20", badge: "₮", address: "PASTE_USDT_ADDRESS" },
  ],

  /* ---- CURRENT GOALS (off by default) -------------------------------- */
  showGoals: false,
  goals: [
    { label: "New Microphone", pct: 42 },
    { label: "Second Monitor", pct: 70 },
  ],

  /* ---- FREE WAYS TO HELP --------------------------------------------- */
  showFree: true,
  free: [
    { label: "Follow on Kick", link: "https://go.NAME.gg/live"    },
    { label: "Join Discord",   link: "https://go.NAME.gg/discord" },
    { label: "YouTube",        link: "https://go.NAME.gg/yt"      },
    { label: "TikTok",         link: "https://go.NAME.gg/tiktok"  },
    { label: "X / Twitter",    link: "https://go.NAME.gg/x"       },
  ],

  /* ---- BECOME A SUPPORTER (impact list) ------------------------------ */
  showImpact: true,
  impact: [
    "Stream more often",
    "Upgrade equipment",
    "Improve video quality",
    "Keep the community growing",
  ],

  /* ---- SPONSOR / WORK WITH ME ---------------------------------------- */
  showSponsor: true,
  sponsorEmail: "you@email.com",
  sponsorTags: ["Gaming", "Energy Drinks", "Gaming Gear", "Apparel"],

  /* ---- RECENT SUPPORTERS WALL (off by default) ----------------------- */
  showSupporters: false,
  supporters: [
    { medal: "🥇", name: "Ahmed",  tag: "Top Supporter" },
    { medal: "🥈", name: "John",   tag: "Member" },
    { medal: "🥉", name: "Shadow", tag: "Member" },
  ],

};

// expose for app.js (works as plain <script>, no build step)
window.CONFIG = CONFIG;

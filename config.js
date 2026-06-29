/* =============================================================
   EDIT ONLY THIS FILE FOR EACH NEW STREAMER.
   Change the name, links, wallets, goals and supporters below.
   Save, re-drag the folder to Netlify, done. Nothing else to touch.
============================================================= */
const CONFIG = {
  name: "RABAVA",
  tagline: "Kick Streamer · Gaming & IRL",
  intro: "Choose how you'd like to support the stream. Every bit helps me create better content.",

  // Scrolling strip under your name. Edit these words, keep them short.
  // Set showTicker: false to hide the strip completely.
  showTicker: true,
  ticker: ["Support RABAVA", "GG WP", "Thanks for the sub", "Drop a follow"],

  accent: "#53FC18",            // change this one color to re-theme the whole page
  avatar: "",                   // LOGO: drop your image in this same folder, then write its file name here, e.g. "logo.png". Or paste an image link. Empty = shows your first letter. Use a square image for best fit.

  support: [
    { label: "Buy Me a Coffee",   icon: "\u2615", url: "#", primary: false },
    { label: "PayPal",            icon: "\uD83D\uDCB0", url: "#", primary: false },
    { label: "Tip on Ko-fi",      icon: "\uD83C\uDF81", url: "#", primary: false },
    { label: "Subscribe on Kick", icon: "\u2B50", url: "#", primary: true  }
  ],

  crypto: [
    { name: "Bitcoin",  ticker: "BTC",   symbol: "\u20BF", address: "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq" },
    { name: "Ethereum", ticker: "ETH",   symbol: "\u039E", address: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F" },
    { name: "Solana",   ticker: "SOL",   symbol: "\u25CE", address: "7EcDhSYGxXyscszYEp35KHN8vvw3svAuLKTzXwCFLtV" },
    { name: "USDT",     ticker: "TRC20", symbol: "\u20AE", address: "TQn9Y2khEsLJW1ChVWFMSMeRDow5KcbLSE" },
    { name: "BNB",      ticker: "BNB",   symbol: "\u25C8", address: "bnb136ns6lfw4zs5hg4n85vdthaad7hq5m4gtkgf23" }
  ],

  // Current Goals: OFF by default (cleaner without it). Set showGoals: true to show.
  showGoals: false,
  goals: [
    { label: "New Microphone", icon: "\uD83C\uDFA4", percent: 42 },
    { label: "Second Monitor", icon: "\uD83D\uDDA5\uFE0F", percent: 70 },
    { label: "Camera Upgrade", icon: "\uD83C\uDFA5", percent: 10 }
  ],

  free: [
    { label: "Follow on Kick",       url: "#" },
    { label: "Join the Discord",     url: "#" },
    { label: "Subscribe on YouTube", url: "#" },
    { label: "Follow on X",          url: "#" },
    { label: "Follow on TikTok",     url: "#" }
  ],

  impact: [
    "Stream more often",
    "Upgrade my equipment",
    "Improve video quality",
    "Create better content",
    "Keep the community growing"
  ],

  sponsorEmail: "contact@rabava.gg",
  sponsorTags: ["Gaming", "Energy Drinks", "Gaming Gear", "Apparel"],

  // Recent Supporters: this list is typed in by hand (not live).
  // Set to false to HIDE the whole section - good until you have real supporters.
  // When you want it to update on its own, swap it for a free Ko-fi / StreamElements widget (see README).
  showSupporters: false,

  supporters: [
    { medal: "\uD83E\uDD47", name: "Ahmed",        tag: "Top Supporter" },
    { medal: "\uD83E\uDD48", name: "John",         tag: "Recent" },
    { medal: "\uD83E\uDD49", name: "Shadow",       tag: "Recent" },
    { medal: "\uD83D\uDC8E", name: "Crypto Donor", tag: "Big tip" },
    { medal: "\u2764\uFE0F", name: "Anonymous",    tag: "Thank you" }
  ]
};

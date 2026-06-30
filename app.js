/* ============================================================================
   APP.JS  —  the logic. You do NOT need to edit this.
   Reads window.CONFIG and renders the page. Plain JS, no build step.
============================================================================ */
(function () {
  "use strict";

  var C = window.CONFIG || {};
  var $ = function (id) { return document.getElementById(id); };

  /* helper: hide the whole <section> that contains an element */
  function hideSectionOf(el) {
    if (!el) return;
    var s = el.closest ? el.closest(".section") : null;
    if (s) s.style.display = "none";
  }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ---- THEME + IDENTITY ------------------------------------------------ */
  if (C.accent) {
    document.documentElement.style.setProperty("--accent", C.accent);
    var tc = document.querySelector('meta[name="theme-color"]');
    if (tc) tc.setAttribute("content", C.accent);
  }
  if (C.name) document.title = C.name + " — Support the Stream";

  setText("kicker", C.kicker || "Support the Stream");
  setText("name", C.name || "");
  setText("tagline", C.tagline || "");
  setText("intro", C.intro || "");

  function setText(id, val) { var el = $(id); if (el) el.textContent = val; }

  /* avatar: image or first letter */
  var av = $("avatar");
  if (av) {
    if (C.avatar) {
      av.style.backgroundImage = "url('" + C.avatar + "')";
      av.textContent = "";
    } else {
      av.textContent = (C.name || "?").trim().charAt(0).toUpperCase();
    }
  }

  /* ---- TICKER ---------------------------------------------------------- */
  var ticker = $("ticker");
  if (ticker) {
    if (C.showTicker === false || !Array.isArray(C.ticker) || !C.ticker.length) {
      ticker.style.display = "none";
    } else {
      var sep = "  ✦  ";
      var line = C.ticker.join(sep) + sep;
      // two identical segments => the -50% slide loops seamlessly
      var seg = '<span class="seg">' + esc(line) + "</span>";
      ticker.innerHTML = '<div class="track">' + seg + seg + "</div>";
    }
  }

  /* ---- INSTANT SUPPORT ------------------------------------------------- */
  var support = $("support");
  if (support) {
    if (C.showSupport === false || !Array.isArray(C.support) || !C.support.length) {
      hideSectionOf(support);
    } else {
      support.innerHTML = C.support.map(function (b) {
        return '<a class="btn' + (b.primary ? " primary" : "") + '" href="' +
          esc(b.link || "#") + '" target="_blank" rel="noopener">' +
          '<span class="ic">' + esc(b.icon || "▸") + "</span>" +
          "<span>" + esc(b.label || "") + "</span>" +
          '<span class="arrow">&rarr;</span></a>';
      }).join("");
    }
  }

  /* ---- CRYPTO ---------------------------------------------------------- */
  var crypto = $("crypto");
  if (crypto) {
    if (C.showCrypto === false || !Array.isArray(C.crypto) || !C.crypto.length) {
      hideSectionOf(crypto);
    } else {
      crypto.innerHTML = C.crypto.map(function (c, i) {
        return '<div class="coin">' +
            '<div class="badge">' + esc(c.badge || "◆") + "</div>" +
            '<div class="meta">' +
              '<div class="cn">' + esc(c.name || "") +
                " <small>" + esc(c.symbol || "") + "</small></div>" +
              '<div class="addr">' + esc(c.address || "") + "</div>" +
            "</div>" +
            '<button class="qrbtn" data-qr="' + i + '">QR</button>' +
            '<button class="copy" data-copy="' + i + '">Copy</button>' +
          "</div>";
      }).join("");

      crypto.addEventListener("click", function (e) {
        var qrBtn = e.target.closest("[data-qr]");
        var cpBtn = e.target.closest("[data-copy]");
        if (qrBtn) openQR(C.crypto[+qrBtn.getAttribute("data-qr")]);
        if (cpBtn) copyAddr(C.crypto[+cpBtn.getAttribute("data-copy")].address, cpBtn);
      });
    }
  }

  /* ---- GOALS ----------------------------------------------------------- */
  var goals = $("goals");
  if (goals) {
    if (C.showGoals === false || !Array.isArray(C.goals) || !C.goals.length) {
      hideSectionOf(goals);
    } else {
      goals.innerHTML = C.goals.map(function (g) {
        var pct = Math.max(0, Math.min(100, +g.pct || 0));
        return '<div class="goal">' +
            '<div class="top"><span>' + esc(g.label || "") + "</span>" +
            '<span class="pct">' + pct + '%</span></div>' +
            '<div class="track-bar"><div class="fill" data-pct="' + pct + '"></div></div>' +
          "</div>";
      }).join("");
      // animate fills after paint
      requestAnimationFrame(function () {
        setTimeout(function () {
          goals.querySelectorAll(".fill").forEach(function (f) {
            f.style.width = f.getAttribute("data-pct") + "%";
          });
        }, 120);
      });
    }
  }

  /* ---- FREE WAYS TO HELP ----------------------------------------------- */
  var free = $("free");
  if (free) {
    if (C.showFree === false || !Array.isArray(C.free) || !C.free.length) {
      hideSectionOf(free);
    } else {
      free.innerHTML = C.free.map(function (f) {
        return '<a class="chip" href="' + esc(f.link || "#") +
          '" target="_blank" rel="noopener">' + esc(f.label || "") + "</a>";
      }).join("");
    }
  }

  /* ---- IMPACT ---------------------------------------------------------- */
  var impact = $("impact");
  if (impact) {
    if (C.showImpact === false || !Array.isArray(C.impact) || !C.impact.length) {
      hideSectionOf(impact);
    } else {
      impact.innerHTML = C.impact.map(function (t) {
        return "<li>" + esc(t) + "</li>";
      }).join("");
    }
  }

  /* ---- SPONSOR --------------------------------------------------------- */
  var sponsorTags = $("sponsorTags");
  var sponsorBtn = $("sponsorBtn");
  if (sponsorBtn) {
    if (C.showSponsor === false) {
      hideSectionOf(sponsorBtn);
    } else {
      if (sponsorTags && Array.isArray(C.sponsorTags)) {
        sponsorTags.innerHTML = C.sponsorTags.map(function (t) {
          return "<span>" + esc(t) + "</span>";
        }).join("");
      }
      if (C.sponsorEmail) {
        sponsorBtn.setAttribute("href",
          "mailto:" + C.sponsorEmail + "?subject=" +
          encodeURIComponent("Sponsorship — " + (C.name || "the stream")));
      }
    }
  }

  /* ---- SUPPORTERS ------------------------------------------------------ */
  var supporters = $("supporters");
  if (supporters) {
    if (C.showSupporters === false || !Array.isArray(C.supporters) || !C.supporters.length) {
      hideSectionOf(supporters);
    } else {
      supporters.innerHTML = C.supporters.map(function (s) {
        return '<div class="sup">' +
            '<span class="m">' + esc(s.medal || "❤") + "</span>" +
            '<span class="sn">' + esc(s.name || "") + "</span>" +
            '<span class="st">' + esc(s.tag || "") + "</span>" +
          "</div>";
      }).join("");
    }
  }

  /* ---- QR MODAL -------------------------------------------------------- */
  var modal = $("qrModal"), qrBox = $("qrBox"),
      qrTitle = $("qrTitle"), qrAddr = $("qrAddr"), qrCopy = $("qrCopy");
  var current = "";

  function openQR(coin) {
    if (!modal || !coin) return;
    current = coin.address || "";
    if (qrTitle) qrTitle.textContent = (coin.name || "") + " · " + (coin.symbol || "");
    if (qrAddr) qrAddr.textContent = current;
    if (qrBox) {
      qrBox.innerHTML = "";
      if (typeof QRCode !== "undefined" && current) {
        try {
          new QRCode(qrBox, {
            text: current, width: 200, height: 200,
            colorDark: "#111111", colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.M
          });
        } catch (err) { qrFallback(); }
      } else {
        qrFallback();
      }
    }
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function qrFallback() {
    qrBox.innerHTML = '<div class="qr-fallback">QR needs an internet connection.<br>Address is shown below.</div>';
  }
  function closeQR() {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = "";
  }
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target.hasAttribute("data-close")) closeQR();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeQR();
    });
  }
  if (qrCopy) qrCopy.addEventListener("click", function () { copyAddr(current, qrCopy, "Copied!"); });

  /* ---- COPY ------------------------------------------------------------ */
  function copyAddr(text, btn, doneLabel) {
    if (!text) return;
    var label = btn ? btn.textContent : "";
    var ok = function () {
      if (!btn) return;
      btn.textContent = doneLabel || "Copied";
      btn.classList.add("done");
      setTimeout(function () { btn.textContent = label; btn.classList.remove("done"); }, 1400);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(ok).catch(function () { legacyCopy(text, ok); });
    } else {
      legacyCopy(text, ok);
    }
  }
  function legacyCopy(text, ok) {
    try {
      var ta = document.createElement("textarea");
      ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      document.execCommand("copy"); document.body.removeChild(ta); ok();
    } catch (e) {}
  }

})();

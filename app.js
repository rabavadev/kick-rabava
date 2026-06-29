(function () {
  const C = CONFIG;
  document.documentElement.style.setProperty('--accent', C.accent);
  document.title = "Support " + C.name;

  // hero
  const av = document.getElementById('avatar');
  if (C.avatar) { av.style.backgroundImage = "url('" + C.avatar + "')"; av.textContent = ""; }
  else { av.textContent = C.name.charAt(0).toUpperCase(); }
  document.getElementById('name').textContent = C.name;
  document.getElementById('tagline').textContent = C.tagline;
  document.getElementById('intro').textContent = C.intro;
  if (C.kicker) document.getElementById('kicker').textContent = C.kicker;

  // marquee ticker - smooth seamless slide, steady speed, fades at edges.
  // Always animates (ignores reduced-motion) because the slide is the point.
  (function () {
    const t = document.getElementById('ticker');
    if (!t) return;
    if (C.showTicker === false) { t.remove(); return; }
    const items = C.ticker || ['Support ' + C.name, 'GG WP', 'Thanks for the sub', 'Drop a follow'];
    const group = items.join('  \u2726  ') + '  \u2726  ';

    function build() {
      // grow one segment until it's at least as wide as the strip (no gap in the loop)
      const probe = document.createElement('span');
      probe.className = 'seg';
      probe.style.visibility = 'hidden';
      probe.style.whiteSpace = 'pre';
      let unit = group;
      probe.textContent = unit;
      t.innerHTML = '';
      t.appendChild(probe);
      let guard = 0;
      while (probe.offsetWidth < t.clientWidth + 60 && guard < 16) { unit += group; probe.textContent = unit; guard++; }
      const segWidth = probe.offsetWidth || 600;

      // two identical segments side by side -> seamless wrap at -50%
      const track = document.createElement('div');
      track.className = 'track';
      const a = document.createElement('span'); a.className = 'seg'; a.textContent = unit;
      const b = document.createElement('span'); b.className = 'seg'; b.setAttribute('aria-hidden', 'true'); b.textContent = unit;
      track.appendChild(a); track.appendChild(b);
      t.innerHTML = '';
      t.appendChild(track);

      // steady ~80px per second, no matter how many words
      track.style.animationDuration = Math.max(8, segWidth / 80).toFixed(1) + 's';
    }

    build();
    if (document.fonts && document.fonts.ready) { document.fonts.ready.then(build); }
    let rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(build, 200); });
  })();

  // support buttons
  document.getElementById('support').innerHTML = C.support.map(s =>
    `<a class="btn ${s.primary ? 'primary' : ''}" href="${s.url}" target="_blank" rel="noopener">
       <span class="ic">${s.icon}</span><span>${s.label}</span><span class="arrow">&rarr;</span>
     </a>`).join('');

  // crypto
  const short = a => a.length > 22 ? a.slice(0, 10) + '\u2026' + a.slice(-6) : a;
  document.getElementById('crypto').innerHTML = C.crypto.map(c =>
    `<div class="coin">
       <div class="badge">${c.symbol}</div>
       <div class="meta">
         <div class="cn">${c.name} <small>${c.ticker}</small></div>
         <div class="addr" title="${c.address}">${short(c.address)}</div>
       </div>
       <button class="qrbtn" data-addr="${c.address}" data-name="${c.name}" aria-label="Show QR code">QR</button>
       <button class="copy" data-addr="${c.address}">Copy</button>
     </div>`).join('');

  document.querySelectorAll('.copy').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-addr');
      const ok = () => {
        btn.textContent = 'Copied'; btn.classList.add('done');
        setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('done'); }, 1400);
      };
      if (navigator.clipboard) { navigator.clipboard.writeText(text).then(ok).catch(() => fallback(text, ok)); }
      else fallback(text, ok);
    });
  });
  function fallback(text, ok) {
    const t = document.createElement('textarea');
    t.value = text; document.body.appendChild(t); t.select();
    try { document.execCommand('copy'); ok(); } catch (e) {}
    document.body.removeChild(t);
  }

  // crypto QR popup - generated live from the address, no image files needed
  (function () {
    const modal = document.getElementById('qrModal');
    if (!modal) return;
    const box = document.getElementById('qrBox');
    const title = document.getElementById('qrTitle');
    const addrEl = document.getElementById('qrAddr');
    const copyBtn = document.getElementById('qrCopy');
    let cur = '';
    function open(name, addr) {
      cur = addr;
      title.textContent = name;
      addrEl.textContent = addr;
      box.innerHTML = '';
      if (typeof QRCode !== 'undefined') {
        new QRCode(box, { text: addr, width: 200, height: 200, colorDark: '#0b0b0d', colorLight: '#ffffff', correctLevel: QRCode.CorrectLevel.M });
      } else {
        box.innerHTML = '<div class="qr-fallback">QR needs internet the first time</div>';
      }
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
    }
    function close() { modal.hidden = true; document.body.style.overflow = ''; }
    document.querySelectorAll('.qrbtn').forEach(b =>
      b.addEventListener('click', () => open(b.getAttribute('data-name'), b.getAttribute('data-addr'))));
    modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) close(); });
    copyBtn.addEventListener('click', () => {
      const ok = () => { copyBtn.textContent = 'Copied'; setTimeout(() => copyBtn.textContent = 'Copy address', 1400); };
      if (navigator.clipboard) { navigator.clipboard.writeText(cur).then(ok).catch(() => fallback(cur, ok)); }
      else fallback(cur, ok);
    });
  })();

  // goals (optional - hidden when showGoals is false)
  if (C.showGoals === false || !C.goals) {
    const gs = document.getElementById('goalsSection');
    if (gs) gs.remove();
  } else {
    document.getElementById('goals').innerHTML = C.goals.map(g =>
      `<div class="goal">
         <div class="top"><span>${g.icon}</span><span>${g.label}</span><span class="pct">${g.percent}%</span></div>
         <div class="track-bar"><div class="fill" data-p="${g.percent}"></div></div>
       </div>`).join('');
    requestAnimationFrame(() => setTimeout(() => {
      document.querySelectorAll('.fill').forEach(f => f.style.width = f.getAttribute('data-p') + '%');
    }, 120));
  }

  // free
  document.getElementById('free').innerHTML = C.free.map(f =>
    `<a class="chip" href="${f.url}" target="_blank" rel="noopener">${f.label}</a>`).join('');

  // impact
  document.getElementById('impact').innerHTML = C.impact.map(i => `<li>${i}</li>`).join('');

  // sponsor
  document.getElementById('sponsorTags').innerHTML = C.sponsorTags.map(t => `<span>${t}</span>`).join('');
  document.getElementById('sponsorBtn').href = "mailto:" + C.sponsorEmail;

  // supporters (optional - hidden when showSupporters is false)
  if (C.showSupporters === false) {
    const sec = document.getElementById('supportersSection');
    if (sec) sec.remove();
  } else {
    document.getElementById('supporters').innerHTML = C.supporters.map(s =>
      `<div class="sup"><span class="m">${s.medal}</span><span class="sn">${s.name}</span><span class="st">${s.tag}</span></div>`).join('');
  }
})();

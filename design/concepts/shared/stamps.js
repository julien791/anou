/* Placeholder stamp motifs (viewBox 0 0 48 48, currentColor).
   Concept-pass drawings only; the real stamp system is Brand's. */
(function () {
  var S = {
    morne: '<path d="M4 38 L18 14 L24 22 L30 12 L44 38 Z" fill="currentColor" opacity=".9"/><path d="M4 41 H44" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><circle cx="36" cy="12" r="3.5" fill="none" stroke="currentColor" stroke-width="2"/>',
    chamarel: '<path d="M6 34 Q16 22 24 30 T42 26" fill="none" stroke="currentColor" stroke-width="3"/><path d="M6 28 Q16 16 24 24 T42 20" fill="none" stroke="currentColor" stroke-width="3" opacity=".7"/><path d="M6 22 Q16 10 24 18 T42 14" fill="none" stroke="currentColor" stroke-width="3" opacity=".45"/><path d="M6 40 Q16 28 24 36 T42 32" fill="none" stroke="currentColor" stroke-width="3" opacity=".85"/>',
    market: '<path d="M10 20 H38 L34 40 H14 Z" fill="currentColor" opacity=".85"/><path d="M16 20 Q24 6 32 20" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="19" cy="17" r="3" fill="currentColor"/><circle cx="26" cy="15" r="3.5" fill="currentColor" opacity=".7"/><path d="M14 28 H34 M15 34 H33" stroke="#fff" stroke-width="1.5" opacity=".6"/>',
    church: '<path d="M14 40 V22 L24 12 L34 22 V40 Z" fill="currentColor" opacity=".85"/><path d="M11 23 L24 9 L37 23" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M24 3 V9 M21 5.5 H27" stroke="currentColor" stroke-width="2"/><path d="M21 40 V31 Q24 27 27 31 V40" fill="#fff" opacity=".7"/>',
    sega: '<circle cx="24" cy="24" r="15" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="24" cy="24" r="10" fill="currentColor" opacity=".8"/><path d="M8 10 L16 17 M40 10 L32 17" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><circle cx="7" cy="9" r="2.5" fill="currentColor"/><circle cx="41" cy="9" r="2.5" fill="currentColor"/>'
  };
  window.ANOU_STAMPS = S;
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('svg[data-stamp]').forEach(function (s) {
      s.setAttribute('viewBox', '0 0 48 48');
      s.setAttribute('aria-hidden', 'true');
      s.innerHTML = S[s.dataset.stamp] || '';
    });
  });
})();

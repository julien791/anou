/* Shared prototype content for the three M0 concepts.
   The conditions-matched hero is driven by ?c=calm|windy (default calm).
   Elements opt in with data-k="key"; video elements with data-hero.
   Prototype only: in the app this comes from the brief endpoint. */
(function () {
  var P = '../shared/';
  var C = {
    calm: {
      word: 'Flat',
      cond: 'Calm',
      chip: 'Glassy lagoon · W 6 kn · sea 0.4 m',
      matched: 'Clip matched to: calm west coast, low swell',
      headline: 'Flat sea this morning. Go snorkelling early.',
      body: 'The lagoon at Flic en Flac stays glassy until about one, then the trade wind picks up. Tamarin has the sunset at 18:12.',
      tip: 'High tide 11:40, the best snorkel window.',
      clip: 'calm', poster: 'calm-lagoon',
      cards: [
        { img: 'calm-lagoon', place: 'Flic en Flac lagoon', why: 'Glassy until early afternoon', tag: 'Free' },
        { img: 'sunset-west', place: 'Tamarin bay, sunset 18:12', why: 'Clear sky to the west tonight', tag: 'Free' },
        { img: 'sugarcane', place: 'Chamarel rum tasting', why: 'Quiet on weekdays, 25 min inland', tag: 'Rs 900', partner: true }
      ],
      notif: 'Flat sea until 1pm. Snorkel Flic en Flac early, sunset at Tamarin 18:12.'
    },
    windy: {
      word: 'Windy',
      cond: 'Windy',
      chip: 'Trade wind · SE 22 kn · chop 1.2 m',
      matched: 'Clip matched to: strong SE trade wind',
      headline: 'Wind is up. Le Morne is for kites today.',
      body: 'Twenty knots from the south-east, so the lagoon is choppy. Watch the kites from the public beach, then go inland where it is still.',
      tip: 'UV is 11 even with the breeze. Hat on.',
      clip: 'windy', poster: 'kitesurf',
      cards: [
        { img: 'kitesurf', place: 'Le Morne kite beach', why: 'Best kite day this week, free to watch', tag: 'Free' },
        { img: 'gorges', place: 'Black River Gorges viewpoint', why: 'Sheltered and clear until 15:00', tag: 'Free' },
        { img: 'sugarcane', place: 'Chamarel rum tasting', why: 'Out of the wind, 25 min inland', tag: 'Rs 900', partner: true }
      ],
      notif: 'Wind is up, 22 knots. Kites at Le Morne, calm air in the Gorges.'
    }
  };
  var q = new URLSearchParams(location.search).get('c');
  var key = C[q] ? q : 'calm';
  var d = C[key];
  window.ANOU = { cond: key, data: d, path: P };
  document.documentElement.dataset.cond = key;

  function img(n) { return P + 'photos/' + n + '.jpg'; }
  window.ANOU.img = img;

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-k]').forEach(function (el) {
      var v = d[el.dataset.k]; if (v != null) el.textContent = v;
    });
    document.querySelectorAll('video[data-hero]').forEach(function (v) {
      var clip = v.dataset.hero === 'landing' ? 'landing' : d.clip;
      var poster = v.dataset.hero === 'landing' ? 'lagoon-aerial' : d.poster;
      v.poster = img(poster);
      v.innerHTML = '<source src="' + P + 'video/' + clip + '.webm" type="video/webm">' +
                    '<source src="' + P + 'video/' + clip + '.mp4" type="video/mp4">';
      var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!reduce) { v.load(); v.play().catch(function () {}); }
      v.addEventListener('playing', function () { v.classList.add('is-playing'); });
      // pause when not visible (spec rule)
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (es) {
          es.forEach(function (e) { if (reduce) return; e.isIntersecting ? v.play().catch(function(){}) : v.pause(); });
        }).observe(v);
      }
    });
    document.querySelectorAll('[data-bg]').forEach(function (el) {
      el.style.backgroundImage = 'url(' + img(el.dataset.bg) + ')';
    });
    // cards template: <template data-cards> cloned per card
    document.querySelectorAll('template[data-cards]').forEach(function (t) {
      d.cards.forEach(function (c, i) {
        var n = t.content.cloneNode(true);
        n.querySelectorAll('[data-c]').forEach(function (el) {
          var k = el.dataset.c;
          if (k === 'img') { if (el.tagName === 'IMG') { el.src = img(c.img); el.alt = c.place; } else el.style.backgroundImage = 'url(' + img(c.img) + ')'; }
          else if (k === 'partner') { if (!c.partner) el.remove(); }
          else if (k === 'n') el.textContent = String(i + 1);
          else el.textContent = c[k];
        });
        t.parentNode.insertBefore(n, t);
      });
    });
    // condition switcher links (prototype control)
    document.querySelectorAll('[data-switch]').forEach(function (a) {
      if (a.dataset.switch === key) a.setAttribute('aria-current', 'true');
    });
  });
})();

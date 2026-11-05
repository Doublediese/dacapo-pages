// Vue spectateur : une seule page, le soir du concert, dans n'importe quelle salle de la tournée.
// Pas de compte, pas de bouton de contact, aucune donnée nominative : le public appartient au lieu qui accueille.
(function () {
  const C = DC.concert, E = DC.ensemble, esc = DC.esc;
  let L = DC.params.get("l") || DC.lire("langue", "") || (navigator.language || "fr").slice(0, 2);
  if (!["fr", "en", "de"].includes(L)) L = "en";
  let ouvertes = new Set();

  const T = {
    fr: { ceSoir: "Ce soir", savoir: "À savoir avant d'entrer", programme: "Le programme", p1: "Première partie", p2: "Seconde partie", guetter: "À guetter", chante: "Le texte chanté", traduction: "Traduction", plus: "En savoir plus", tamiser: "Tamiser l'écran", rallumer: "Rallumer", apres: "Après le concert", disque: "Le nouveau disque", disqueTexte: "Media Vita, en vente à la sortie, et partout le 22 janvier.", soutenir: "Soutenir l'ensemble", soutenirTexte: "La Sportelle vit aussi grâce à ses donateurs.", suivre: "Suivre La Sportelle", suivreTexte: "Ses prochains concerts, près de chez vous ou ailleurs.", pied: "Page offerte par le lieu qui vous accueille. Aucune donnée personnelle n'est recueillie.", notice: "" },
    en: { ceSoir: "Tonight", savoir: "Before you go in", programme: "The programme", p1: "First half", p2: "Second half", guetter: "Listen for", chante: "The sung text", traduction: "Translation", plus: "Read more", tamiser: "Dim screen", rallumer: "Brighten", apres: "After the concert", disque: "The new album", disqueTexte: "Media Vita, on sale at the exit, and everywhere on 22 January.", soutenir: "Support the ensemble", soutenirTexte: "La Sportelle also lives thanks to its donors.", suivre: "Follow La Sportelle", suivreTexte: "Upcoming concerts, near you or further away.", pied: "This page is offered by your host venue. No personal data is collected.", notice: "Demo: the listening notes below are still in French. The sung texts and the interface are translated." },
    de: { ceSoir: "Heute Abend", savoir: "Vor dem Konzert", programme: "Das Programm", p1: "Erster Teil", p2: "Zweiter Teil", guetter: "Worauf Sie achten können", chante: "Der gesungene Text", traduction: "Übersetzung", plus: "Mehr lesen", tamiser: "Bildschirm dimmen", rallumer: "Heller", apres: "Nach dem Konzert", disque: "Das neue Album", disqueTexte: "Media Vita, am Ausgang erhältlich und ab 22. Januar überall.", soutenir: "Das Ensemble unterstützen", soutenirTexte: "La Sportelle lebt auch von ihren Förderern.", suivre: "La Sportelle folgen", suivreTexte: "Die nächsten Konzerte, in Ihrer Nähe oder anderswo.", pied: "Diese Seite wird Ihnen vom Veranstalter angeboten. Es werden keine persönlichen Daten erhoben.", notice: "Demo: Die Werkeinführungen sind noch auf Französisch. Gesungene Texte und Oberfläche sind übersetzt." },
  };
  const t = () => T[L];
  const tx = (o) => (o && typeof o === "object" ? o[L] || o.fr : o || "");
  const etoile = '<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 4L23 16L36 20L23 24L20 36L17 24L4 20L17 16Z" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>';

  // Le texte chanté : l'original, puis la traduction dans la langue du lecteur.
  // Un texte allemand lu en allemand n'a pas besoin de traduction.
  function chante(id) {
    const x = C.textes[id]; if (!x) return "";
    const allemand = id !== "rheinberger";
    const trad = L === "de" ? (allemand ? "" : x.de) : x[L] || x.fr;
    return `<div class="chante"><h3>${t().chante}</h3><div class="chante-cols"><p class="chante-orig">${esc(x.o)}</p>${trad ? `<p class="chante-trad">${esc(trad)}</p>` : ""}</div><p class="chante-src">${esc(x.src)}</p></div>`;
  }

  function oeuvre(o, n) {
    const longs = (o.long || []).map((p) => (p.startsWith("§") ? `<h4>${esc(p.slice(1).trim())}</h4>` : `<p>${esc(p)}</p>`)).join("");
    return `<div class="oeuvre${ouvertes.has(o.id) ? " ouverte" : ""}" data-id="${o.id}">
      <button aria-expanded="${ouvertes.has(o.id)}"><span class="oeuvre-num">${n}</span><span class="oeuvre-txt"><span class="oeuvre-comp">${esc(o.compositeur)}</span><span class="oeuvre-titre">${esc(o.titre)}</span></span><span class="oeuvre-plus" aria-hidden="true">+</span></button>
      <div class="oeuvre-corps">
        <p class="ecoute">${esc(o.ecoute)}</p>
        <p>${esc(o.bref)}</p>
        ${chante(o.id)}
        <div class="guetter"><h3>${t().guetter}</h3><dl>${o.guetter.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}</dl></div>
        ${longs ? `<details class="long"><summary>${t().plus}</summary>${longs}</details>` : ""}
      </div>
    </div>`;
  }

  function page() {
    document.documentElement.lang = L;
    let n = 0, partie = 0;
    const lignes = C.soiree.map((o) => {
      if (o.pause) return `<div class="entracte">${esc(o.titre)} · ${esc(o.duree)}</div>`;
      let h = "";
      if (o.partie !== partie) { partie = o.partie; h = `<p class="s-partie">${partie === 1 ? t().p1 : t().p2}</p>`; }
      return h + oeuvre(o, ++n);
    }).join("");
    document.getElementById("app").innerHTML = `
      <header class="s-haut">
        <img class="s-logo" src="assets/logo-sportelle-clair.png" alt="Ensemble la Sportelle">
        <span style="display:flex;gap:8px;align-items:center">
          <button class="tamis" data-tamis>${document.body.classList.contains("tamise") ? t().rallumer : t().tamiser}</button>
          <span class="langues" role="group" aria-label="Langue">${["fr", "en", "de"].map((l) => `<button data-langue="${l}" class="${l === L ? "actif" : ""}">${l.toUpperCase()}</button>`).join("")}</span>
        </span>
      </header>
      <section class="s-tete">
        <p class="surtitre">${t().ceSoir}</p>
        <h1>${esc(C.titre)}</h1>
        <p class="s-fil">${esc(tx(C.fil))}</p>
        <p class="s-interpretes">${esc(tx(C.interpretes))}</p>
        <p class="s-accroche">${esc(tx(C.accroche))}</p>
      </section>
      <section class="s-bloc"><div class="s-savoir"><h2>${t().savoir}</h2><ol>${C.aSavoir[L].map((a) => `<li><span>${esc(a)}</span></li>`).join("")}</ol></div>
        ${t().notice ? `<p class="s-notice">${esc(t().notice)}</p>` : ""}
      </section>
      <section class="s-bloc"><h2>${t().programme}</h2>${lignes}</section>
      <section class="s-bloc"><h2>${t().apres}</h2>
        <div class="s-apres">
          <a class="s-carte" href="programmateur.html#mediavita" target="_blank" rel="noopener"><span class="disque-pochette" aria-hidden="true">MV</span><span><strong>${t().disque}</strong><span>${esc(t().disqueTexte)}</span></span></a>
          <a class="s-carte" href="${E.don}" target="_blank" rel="noopener"><span class="disque-pochette" aria-hidden="true" style="background:#2a2f44">${etoile}</span><span><strong>${t().soutenir}</strong><span>${esc(t().soutenirTexte)}</span></span></a>
          <a class="s-carte" href="${E.site}" target="_blank" rel="noopener"><span class="disque-pochette" aria-hidden="true" style="background:#2a2f44;font-size:18px">LS</span><span><strong>${t().suivre}</strong><span>${esc(t().suivreTexte)}</span></span></a>
        </div>
      </section>
      <footer class="s-pied"><p>${esc(t().pied)}</p><p>${esc(DC.NOM)} · Double Dièse · démonstration</p></footer>`;
  }

  document.addEventListener("click", (e) => {
    const l = e.target.closest("[data-langue]");
    if (l) { L = l.dataset.langue; DC.ecrire("langue", L); page(); return; }
    if (e.target.closest("[data-tamis]")) { document.body.classList.toggle("tamise"); page(); return; }
    const b = e.target.closest(".oeuvre>button");
    if (b) { const id = b.parentElement.dataset.id; ouvertes.has(id) ? ouvertes.delete(id) : ouvertes.add(id); b.parentElement.classList.toggle("ouverte"); b.setAttribute("aria-expanded", ouvertes.has(id)); }
  });
  page();
})();

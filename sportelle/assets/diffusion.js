// Vue diffusion : le tableau de bord de l'équipe de La Sportelle et de ses agents.
// Campagnes, liens personnels, suivi en direct des programmateurs, export pour Orféo.
// Da Capo n'envoie aucun email : il fabrique les liens, la messagerie habituelle les envoie.
(function () {
  const esc = DC.esc;
  const S = {
    moi: DC.lire("moi", "vincent"),
    vue: DC.lire("vue", "tableau"),
    session: DC.lire("session", null) || (() => { const s = DC.id(8); DC.ecrire("session", s); return s; })(),
    creees: DC.lire("campagnes", []),
    traites: new Set(DC.lire("traites", [])),
    evs: DC.historique(),
    campagne: null, programmateur: null, filtreCat: "", recherche: "",
    nouveaux: new Set(), nonLus: 0,
  };
  const campagnes = () => [...S.creees, ...DC.campagnes];
  const moi = () => DC.diffuseurs.find((d) => d.id === S.moi) || DC.diffuseurs[0];
  const dansPerimetre = (p) => S.moi === "direction" || p.d === S.moi;
  const progsVisibles = () => DC.programmateurs.filter(dansPerimetre);
  const campsVisibles = () => campagnes().filter((c) => S.moi === "direction" || c.d === S.moi);
  const cat = (id) => (DC.categories.find((c) => c.id === id) || {}).nom || "";
  const titre = (id) => (DC.programme(id) || {}).titre || "";
  const v2 = '<span class="v2" title="Arrive avec la version 2">V2</span>';

  // --- Ce que l'on sait de chaque programmateur, à partir des événements ---
  function bilan(cle) {
    const evs = S.evs.filter((e) => e.r === cle);
    const b = { evs, ouvert: 0, programmes: new Set(), video: false, episode: false, kit: false, interet: null, dernier: 0 };
    evs.forEach((e) => {
      b.dernier = Math.max(b.dernier, e.at);
      if (e.t === "ouvre") b.ouvert++;
      if (e.p && ["programme", "video", "episode", "kit", "fiche", "spectateur"].includes(e.t)) b.programmes.add(e.p);
      if (e.t === "video") b.video = true;
      if (e.t === "episode") b.episode = true;
      if (e.t === "kit") b.kit = true;
      if (e.t === "interet") b.interet = e;
    });
    b.niveau = b.interet ? 4 : b.video || b.episode || b.kit ? 3 : b.programmes.size ? 2 : b.ouvert ? 1 : 0;
    return b;
  }
  const NIVEAUX = ["Pas encore ouvert", "A ouvert", "A lu un programme", "A regardé ou écouté", "Demande un contact"];
  const statut = (n) => `<span class="statut s${n}">${NIVEAUX[n]}</span>`;
  const points = (n) => `<span class="points" aria-label="${NIVEAUX[n]}">${[1, 2, 3, 4].map((i) => `<i class="${i <= n ? "on" : ""}"></i>`).join("")}</span>`;

  function phrase(e) {
    const t = `<em>${esc(titre(e.p))}</em>`;
    switch (e.t) {
      case "ouvre": return "a ouvert son lien";
      case "programme": return `consulte ${t}`;
      case "video": return `regarde la vidéo de ${t}`;
      case "episode": return `écoute l'épisode de ${t}`;
      case "kit": return `télécharge le kit de ${t}`;
      case "fiche": return `ouvre la fiche technique de ${t}`;
      case "spectateur": return `découvre la page spectateur de ${t}`;
      case "interet":
        if (e.mode === "rappel") return `demande un rappel pour ${t}${e.quand ? ` (${esc(e.quand.toLowerCase())})` : ""}`;
        if (e.mode === "appel") return `vous appelle au sujet de ${t}`;
        return `s'intéresse à ${t}${e.saison ? `, saison ${esc(e.saison)}` : ""}`;
      default: return "";
    }
  }

  const lienPour = (p, c) => {
    const base = location.href.replace(/diffusion\.html.*$/, "").replace(/[?#].*$/, "");
    const q = new URLSearchParams({ r: p.cle });
    if (c) { q.set("c", c.id); q.set("p", c.programmes.join(",")); q.set("l", c.lang === "de" ? "en" : c.lang); }
    q.set("s", S.session);
    return `${base}programmateur.html?${q}`;
  };
  const campagneDe = (p) => campsVisibles().find((c) => c.cat === p.cat) || campagnes().find((c) => c.cat === p.cat);

  // --- Navigation ---
  const VUES = [["tableau", "Tableau de bord"], ["campagnes", "Campagnes"], ["programmateurs", "Programmateurs"], ["programmes", "Programmes"]];
  function menu() {
    document.getElementById("menu").innerHTML = VUES.map(([id, nom]) => `<li><button data-vue="${id}" class="${S.vue === id ? "actif" : ""}">${nom}${id === "tableau" && S.nonLus ? `<span class="compteur">${S.nonLus}</span>` : ""}</button></li>`).join("");
    const sel = document.getElementById("moi");
    sel.innerHTML = DC.diffuseurs.map((d) => `<option value="${d.id}" ${d.id === S.moi ? "selected" : ""}>${esc(d.nom)}${d.v2 ? " (V2)" : ""}</option>`).join("");
    document.getElementById("moi-role").textContent = moi().role;
  }
  function rendre() {
    menu();
    const m = document.getElementById("principal");
    m.innerHTML = { tableau, campagnes: vueCampagnes, programmateurs: vueProgrammateurs, programmes: vueProgrammes }[S.vue]();
    m.focus({ preventScroll: true });
  }

  // --- Tableau de bord ---
  function tableau() {
    const progs = progsVisibles(), bilans = progs.map((p) => ({ p, b: bilan(p.cle) }));
    const ouverts = bilans.filter((x) => x.b.niveau >= 1).length;
    const vus = bilans.filter((x) => x.b.niveau >= 3).length;
    const contacts = bilans.filter((x) => x.b.interet);
    const cles = new Set(progs.map((p) => p.cle));
    const fil = S.evs.filter((e) => cles.has(e.r)).slice(-14).reverse();
    const relancer = bilans.filter((x) => x.b.niveau >= 2 && x.b.niveau < 4).sort((a, b) => b.b.dernier - a.b.dernier).slice(0, 6);
    const demo = DC.programmateurs.find((p) => p.demo && dansPerimetre(p)) || progs[0];
    const parProg = DC.programmes.map((pr) => ({ pr, n: S.evs.filter((e) => cles.has(e.r) && e.p === pr.id && ["programme", "video", "episode"].includes(e.t)).length })).filter((x) => x.n).sort((a, b) => b.n - a.n).slice(0, 6);
    const max = Math.max(1, ...parProg.map((x) => x.n));
    const lien = demo ? lienPour(demo, campagneDe(demo)) : "";
    return `
      <header class="entete"><div><p class="surtitre">${new Date().toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })}</p><h1>${esc(["vincent", "direction"].includes(S.moi) ? "Bonjour " + moi().court : moi().nom)}</h1></div></header>
      ${demo ? `<section class="essai">
        <div class="essai-qr">${DC.qrSvg(lien, 180)}</div>
        <div class="essai-texte">
          <p class="surtitre">Essayez maintenant</p>
          <h2>Devenez ${esc(demo.nom)}, ${esc(demo.structure)}</h2>
          <p>Un contact fictif de vos listes. Scannez ce code avec votre téléphone, ouvrez un programme, lancez la vidéo, puis touchez « Je suis intéressé ». Chaque geste apparaît ici, en direct, dans les secondes qui suivent.</p>
          <p class="essai-actions"><a class="bouton" href="${esc(lien)}" target="_blank" rel="noopener">Ouvrir son lien dans un onglet</a><button class="bouton discret" data-copier="${esc(lien)}">Copier le lien</button></p>
        </div>
      </section>` : ""}
      <section class="chiffres">
        <div><strong>${progs.length}</strong><span>programmateurs ont reçu un lien</span></div>
        <div><strong>${ouverts}</strong><span>l'ont ouvert</span></div>
        <div><strong>${vus}</strong><span>ont regardé une vidéo ou écouté un épisode</span></div>
        <div class="fort"><strong>${contacts.length}</strong><span>demandent un contact</span></div>
      </section>
      ${contacts.length ? `<section class="carte-bloc"><h2>Demandes de contact</h2><ul class="demandes">${contacts.sort((a, b) => b.b.interet.at - a.b.interet.at).map(({ p, b }) => `
        <li class="${S.traites.has(b.interet.k) ? "traite" : ""} ${S.nouveaux.has(b.interet.k) ? "neuf" : ""}">
          <div><strong>${esc(p.nom)}</strong> · ${esc(p.structure)}, ${esc(p.lieu)}<br><span class="quoi">${phrase(b.interet)}</span>${b.interet.periode ? `<span class="quoi"> · ${esc(b.interet.periode)}</span>` : ""}${b.interet.message ? `<blockquote>${esc(b.interet.message)}</blockquote>` : ""}</div>
          <div class="demande-actions"><span class="quand">${DC.ilya(b.interet.at)}</span><button class="bouton petit" data-traiter="${b.interet.k}">${S.traites.has(b.interet.k) ? "Traité" : "Marquer comme traité"}</button><button class="lien" data-voir-prog="${p.cle}">Voir son parcours</button></div>
        </li>`).join("")}</ul></section>` : ""}
      <div class="deux">
        <section class="carte-bloc"><h2>En direct</h2><ul class="fil">${fil.map((e) => {
          const p = DC.programmateur(e.r);
          return `<li class="${S.nouveaux.has(e.k) ? "neuf" : ""} ${e.t === "interet" ? "fort" : ""}"><button data-voir-prog="${p.cle}"><strong>${esc(p.nom)}</strong> ${phrase(e)}</button><span class="quand">${DC.ilya(e.at)}</span></li>`;
        }).join("") || "<li>Rien pour l'instant.</li>"}</ul></section>
        <section class="carte-bloc"><h2>À relancer cette semaine</h2><p class="note">Ils ont regardé sans écrire. C'est le bon moment pour un appel.</p><ul class="relances">${relancer.map(({ p, b }) => `
          <li><div><strong>${esc(p.nom)}</strong><span>${esc(p.structure)} · ${[...b.programmes].map(titre).map(esc).join(", ")}</span></div>${points(b.niveau)}<button class="bouton petit discret" data-relance="${p.cle}">Préparer la relance</button></li>`).join("") || "<li>Personne à relancer.</li>"}</ul></section>
      </div>
      <section class="carte-bloc"><h2>Les programmes qui retiennent l'attention</h2><ul class="barres">${parProg.map(({ pr, n }) => `<li><span>${esc(pr.titre)}</span><span class="barre"><i style="width:${(n / max) * 100}%"></i></span><span class="n">${n}</span></li>`).join("")}</ul><p class="note">Consultations, vidéos et épisodes, toutes campagnes confondues.</p></section>`;
  }

  // --- Campagnes ---
  function vueCampagnes() {
    if (S.campagne === "nouvelle") return nouvelleCampagne();
    const c = campagnes().find((x) => x.id === S.campagne);
    if (c) return detailCampagne(c);
    return `
      <header class="entete"><div><h1>Campagnes</h1><p class="note">Une campagne : des programmes, une catégorie de programmateurs, un lien personnel pour chacun.</p></div><button class="bouton" data-nouvelle>Nouvelle campagne</button></header>
      <table class="table"><thead><tr><th>Campagne</th><th>Programmes</th><th>Destinataires</th><th>Ouvertes</th><th>Contacts</th>${S.moi === "direction" ? "<th>Diffuseur</th>" : ""}</tr></thead><tbody>
      ${campsVisibles().map((c) => {
        const ps = DC.programmateurs.filter((p) => p.cat === c.cat), bs = ps.map((p) => bilan(p.cle));
        return `<tr data-campagne="${c.id}" tabindex="0"><td><strong>${esc(c.nom)}</strong><span class="sous">${esc(cat(c.cat))} · ${c.j ? `envoyée il y a ${c.j} jours` : "liens prêts"}</span></td><td>${c.programmes.map((id) => `<span class="puce">${esc(titre(id))}</span>`).join("")}</td><td>${ps.length}</td><td>${bs.filter((b) => b.niveau).length}</td><td>${bs.filter((b) => b.interet).length || ""}</td>${S.moi === "direction" ? `<td>${esc(DC.diffuseurs.find((d) => d.id === c.d).nom)}</td>` : ""}</tr>`;
      }).join("")}</tbody></table>`;
  }
  function detailCampagne(c) {
    const ps = DC.programmateurs.filter((p) => p.cat === c.cat), bs = ps.map((p) => ({ p, b: bilan(p.cle) }));
    const etapes = [["Liens créés", ps.length], ["Ouverts", bs.filter((x) => x.b.niveau >= 1).length], ["Programme lu", bs.filter((x) => x.b.niveau >= 2).length], ["Vidéo ou épisode", bs.filter((x) => x.b.niveau >= 3).length], ["Contact demandé", bs.filter((x) => x.b.niveau >= 4).length]];
    return `
      <button class="lien retour-liste" data-vue="campagnes">← Toutes les campagnes</button>
      <header class="entete"><div><h1>${esc(c.nom)}</h1><p class="note">${esc(cat(c.cat))} · ${c.lang.toUpperCase()} · ${c.j ? `envoyée il y a ${c.j} jours` : "liens prêts à envoyer"}</p><p>${c.programmes.map((id) => `<span class="puce">${esc(titre(id))}</span>`).join("")}</p></div>
        <div class="entete-actions"><button class="bouton discret" data-copier-tous="${c.id}">Copier tous les liens</button><button class="bouton" data-csv="${c.id}">Exporter pour Orféo (CSV)</button></div></header>
      ${c.j === 0 ? `<p class="info">Les liens sont prêts. Collez-les dans votre messagerie, Brevo ou Orféo : Da Capo n'envoie aucun email à votre place. Chaque clic arrivera ici.</p>` : ""}
      <section class="entonnoir">${etapes.map(([nom, n]) => `<div><span class="e-n">${n}</span><span class="e-barre"><i style="width:${ps.length ? (n / ps.length) * 100 : 0}%"></i></span><span class="e-nom">${nom}</span></div>`).join("")}</section>
      <table class="table"><thead><tr><th>Programmateur</th><th>Où en est-il</th><th>Dernière activité</th><th>Son lien</th></tr></thead><tbody>
      ${bs.sort((a, b) => b.b.niveau - a.b.niveau || b.b.dernier - a.b.dernier).map(({ p, b }) => `<tr><td><button class="lien-nom" data-voir-prog="${p.cle}"><strong>${esc(p.nom)}</strong><span class="sous">${esc(p.structure)} · ${esc(p.lieu)}</span></button></td><td>${statut(b.niveau)}</td><td>${b.dernier ? DC.ilya(b.dernier) : ""}</td><td class="liens"><button class="icone" data-copier="${esc(lienPour(p, c))}" title="Copier le lien">Copier</button><button class="icone" data-qr="${p.cle}" data-qr-c="${c.id}" title="QR code">QR</button><a class="icone" href="${esc(lienPour(p, c))}" target="_blank" rel="noopener">Ouvrir</a></td></tr>`).join("")}
      </tbody></table>`;
  }
  function nouvelleCampagne() {
    const cats = DC.categories.filter((k) => S.moi === "direction" || DC.programmateurs.some((p) => p.cat === k.id && p.d === S.moi));
    return `
      <button class="lien retour-liste" data-vue="campagnes">← Toutes les campagnes</button>
      <header class="entete"><div><h1>Nouvelle campagne</h1><p class="note">Choisissez vos programmes et vos destinataires. Da Capo fabrique un lien personnel pour chacun.</p></div></header>
      <form id="form-campagne" class="formulaire">
        <label class="champ"><span>Nom de la campagne</span><input name="nom" required value="Festivals d'été 2028"></label>
        <fieldset class="champ"><legend>Programmes à présenter</legend><div class="choix-progs">${DC.programmes.map((p, i) => `<label><input type="checkbox" name="p" value="${p.id}" ${i < 2 ? "checked" : ""}><span><strong>${esc(p.titre)}</strong><em>${esc([p.direction, p.effectif.fr].filter(Boolean).join(" · "))}</em></span></label>`).join("")}</div></fieldset>
        <div class="deux-champs">
          <label class="champ"><span>Destinataires</span><select name="cat">${cats.map((k) => `<option value="${k.id}">${esc(k.nom)} (${DC.programmateurs.filter((p) => p.cat === k.id).length})</option>`).join("")}</select></label>
          <label class="champ"><span>Langue de la page</span><select name="lang"><option value="fr">Français</option><option value="en">Anglais</option><option value="de">Allemand (version 2)</option></select></label>
        </div>
        <p class="note">Les programmateurs viennent de vos listes. En version 2, vous les importez directement depuis Orféo. ${v2}</p>
        <button class="bouton" type="submit">Créer les liens personnels</button>
      </form>`;
  }

  // --- Programmateurs ---
  function vueProgrammateurs() {
    if (S.programmateur) return fichePro(S.programmateur);
    let ps = progsVisibles();
    if (S.filtreCat) ps = ps.filter((p) => p.cat === S.filtreCat);
    if (S.recherche) { const q = S.recherche.toLowerCase(); ps = ps.filter((p) => (p.nom + p.structure + p.lieu).toLowerCase().includes(q)); }
    const bs = ps.map((p) => ({ p, b: bilan(p.cle) })).sort((a, b) => b.b.niveau - a.b.niveau || b.b.dernier - a.b.dernier);
    const cats = DC.categories.filter((k) => progsVisibles().some((p) => p.cat === k.id));
    return `
      <header class="entete"><div><h1>Programmateurs</h1><p class="note">${progsVisibles().length} contacts dans votre périmètre. Données fictives.</p></div><button class="bouton discret" data-orfeo>Importer depuis Orféo ${v2}</button></header>
      <div class="filtres"><input type="search" id="recherche" placeholder="Rechercher un nom, un lieu…" value="${esc(S.recherche)}"><select id="filtre-cat"><option value="">Toutes les catégories</option>${cats.map((k) => `<option value="${k.id}" ${S.filtreCat === k.id ? "selected" : ""}>${esc(k.nom)}</option>`).join("")}</select></div>
      <table class="table"><thead><tr><th>Programmateur</th><th>Catégorie</th><th>Intérêt</th><th>Dernière activité</th>${S.moi === "direction" ? "<th>Suivi par</th>" : ""}</tr></thead><tbody>
      ${bs.map(({ p, b }) => `<tr data-voir-prog="${p.cle}" tabindex="0"><td><strong>${esc(p.nom)}</strong><span class="sous">${esc(p.structure)} · ${esc(p.lieu)}, ${p.pays}</span></td><td>${esc(cat(p.cat))}</td><td>${points(b.niveau)}</td><td>${b.dernier ? DC.ilya(b.dernier) : "jamais"}</td>${S.moi === "direction" ? `<td>${esc(DC.diffuseurs.find((d) => d.id === p.d).nom)}</td>` : ""}</tr>`).join("")}
      </tbody></table>`;
  }
  function fichePro(cle) {
    const p = DC.programmateur(cle), b = bilan(cle), c = campagneDe(p);
    return `
      <button class="lien retour-liste" data-vue="programmateurs">← Tous les programmateurs</button>
      <header class="entete"><div><h1>${esc(p.nom)}</h1><p class="note">${esc(p.structure)} · ${esc(p.lieu)}, ${p.pays} · ${esc(cat(p.cat))}</p><p>${statut(b.niveau)}</p></div>
        <div class="entete-actions"><button class="bouton discret" data-qr="${p.cle}" data-qr-c="${c ? c.id : ""}">QR de son lien</button><a class="bouton" href="${esc(lienPour(p, c))}" target="_blank" rel="noopener">Ouvrir sa page</a></div></header>
      <div class="deux">
        <section class="carte-bloc"><h2>Son parcours</h2><ol class="parcours">${b.evs.slice().reverse().map((e) => `<li class="${e.t === "interet" ? "fort" : ""} ${S.nouveaux.has(e.k) ? "neuf" : ""}"><span class="quand">${DC.ilya(e.at)}</span><span>${phrase(e)}${e.message ? `<blockquote>${esc(e.message)}</blockquote>` : ""}</span></li>`).join("") || "<li>N'a pas encore ouvert son lien.</li>"}</ol></section>
        <section class="carte-bloc"><h2>En résumé</h2><dl class="resume">
          <div><dt>Visites</dt><dd>${b.ouvert}</dd></div>
          <div><dt>Programmes consultés</dt><dd>${[...b.programmes].map(titre).map(esc).join(", ") || "aucun"}</dd></div>
          <div><dt>Vidéo</dt><dd>${b.video ? "oui" : "non"}</dd></div>
          <div><dt>Épisode</dt><dd>${b.episode ? "oui" : "non"}</dd></div>
          <div><dt>Kit téléchargé</dt><dd>${b.kit ? "oui" : "non"}</dd></div>
        </dl><p class="note">Ce suivi repose sur le lien personnel. Le programmateur en est informé en bas de sa page.</p></section>
      </div>`;
  }

  // --- Programmes ---
  function vueProgrammes() {
    const cles = new Set(progsVisibles().map((p) => p.cle));
    const base = location.href.replace(/diffusion\.html.*$/, "");
    return `
      <header class="entete"><div><h1>Programmes</h1><p class="note">Les contenus sont saisis une fois et servent partout : page programmateur, page spectateur, guide des festivals qui vous accueillent.</p></div><button class="bouton discret" data-modifier>Ajouter un programme ${v2}</button></header>
      <div class="programmes">${DC.programmes.map((pr) => {
        const ev = S.evs.filter((e) => cles.has(e.r) && e.p === pr.id);
        const n = (t) => ev.filter((e) => e.t === t).length;
        return `<article class="prog" style="--a:${pr.teinte[0]};--b:${pr.teinte[1]}"><div class="prog-tete"><h2>${esc(pr.titre)}</h2><p>${esc(pr.sous.fr)}</p></div>
          <div class="prog-corps"><p class="sous">${esc([pr.direction, pr.effectif.fr, pr.duree].filter(Boolean).join(" · "))}</p>
          <ul class="prog-stats"><li><strong>${n("programme")}</strong>consultations</li><li><strong>${n("video")}</strong>vidéos vues</li><li><strong>${n("interet")}</strong>contacts</li></ul>
          <p class="prog-etat">${pr.equipe ? `<a class="puce on" href="${base}concert.html" target="_blank" rel="noopener">Page spectateur en ligne</a> <button class="lien" data-qr-concert>QR de salle</button>` : `<span class="puce">Catalogue programmateurs</span>`}${pr.video.inedit ? ` <span class="puce">Vidéo inédite ${v2}</span>` : ""}</p>
          <button class="lien" data-modifier>Modifier ${v2}</button></div></article>`;
      }).join("")}</div>`;
  }

  // --- Fenêtres ---
  function voile(html) { const v = document.getElementById("voile"); v.innerHTML = `<div class="voile-boite"><button class="fermer" data-fermer aria-label="Fermer">✕</button>${html}</div>`; v.hidden = false; }
  function qr(cle, cid) {
    const p = DC.programmateur(cle), c = campagnes().find((x) => x.id === cid) || campagneDe(p), l = lienPour(p, c);
    voile(`<p class="surtitre">Lien personnel</p><h2>${esc(p.nom)}</h2><p class="note">${esc(p.structure)}</p><div class="qr-grand">${DC.qrSvg(l, 260)}</div><p class="petit-lien">${esc(l)}</p><p class="essai-actions"><a class="bouton" href="${esc(l)}" target="_blank" rel="noopener">Ouvrir</a><button class="bouton discret" data-copier="${esc(l)}">Copier</button></p>`);
  }
  function qrConcert() {
    const l = location.href.replace(/diffusion\.html.*$/, "") + "concert.html";
    voile(`<p class="surtitre">QR code de salle</p><h2>Cantus Missae</h2><p class="note">Le même code sert dans toutes les salles de la tournée : à imprimer sur le programme papier ou à projeter avant le concert.</p><div class="qr-grand">${DC.qrSvg(l, 260)}</div><p class="essai-actions"><a class="bouton" href="${esc(l)}" target="_blank" rel="noopener">Ouvrir la page spectateur</a></p>`);
  }
  function relance(cle) {
    const p = DC.programmateur(cle), b = bilan(cle), progs = [...b.programmes].map(titre);
    const texte = `Bonjour ${p.nom.split(" ")[0]},\n\nJe vois que vous avez pris le temps de découvrir ${progs.join(" et ")}. Je serais heureux d'en parler avec vous : avez-vous dix minutes cette semaine pour un appel ?\n\nBien à vous,\n${moi().nom}`;
    voile(`<p class="surtitre">Relance</p><h2>${esc(p.nom)}</h2><p class="note">Un brouillon à partir de ce qu'il a consulté. Vous l'envoyez depuis votre messagerie.</p><textarea class="brouillon" rows="9">${esc(texte).replace(/ /g, " ")}</textarea><p class="essai-actions"><button class="bouton" data-copier-texte>Copier le message</button></p>`);
  }
  function csv(cid) {
    const c = campagnes().find((x) => x.id === cid), ps = DC.programmateurs.filter((p) => p.cat === c.cat);
    const lignes = [["Nom", "Structure", "Lieu", "Pays", "Statut", "Programmes consultés", "Demande", "Saison", "Message", "Lien personnel"]];
    ps.forEach((p) => { const b = bilan(p.cle); lignes.push([p.nom, p.structure, p.lieu, p.pays, NIVEAUX[b.niveau], [...b.programmes].map(titre).join(" / "), b.interet ? b.interet.mode : "", b.interet ? b.interet.saison || "" : "", b.interet ? b.interet.message || "" : "", lienPour(p, c)]); });
    const txt = "﻿" + lignes.map((l) => l.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(";")).join("\r\n");
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([txt], { type: "text/csv;charset=utf-8" })); a.download = `sportelle-${c.id}.csv`; a.click();
    DC.toast("Fichier exporté : il s'ouvre dans un tableur et s'importe dans Orféo.");
  }
  const copier = (txt, msg = "Lien copié.") => navigator.clipboard.writeText(txt).then(() => DC.toast(msg), () => DC.toast("Copie impossible dans ce navigateur."));

  // --- Événements en direct ---
  function recevoir(ev) {
    if (!ev || !DC.programmateur(ev.r) || S.evs.some((e) => e.k === ev.k)) return;
    S.evs.push(ev); S.evs.sort((a, b) => a.at - b.at);
    const p = DC.programmateur(ev.r);
    if (Date.now() - ev.at < 15 * 60e3) {
      S.nouveaux.add(ev.k);
      if (dansPerimetre(p)) {
        if (S.vue !== "tableau") S.nonLus++;
        DC.toast(`<strong>${esc(p.nom)}</strong> ${phrase(ev)}`, ev.t === "interet" ? "fort" : "");
        if (ev.t === "interet") document.title = `● Demande de ${p.nom} · Diffusion`;
      }
    }
    planifier();
  }
  let attente;
  const planifier = () => { clearTimeout(attente); attente = setTimeout(() => { if (!document.querySelector("#principal input:focus, #principal textarea:focus, #principal select:focus")) rendre(); }, 250); };
  function etat(s) {
    const d = document.getElementById("direct");
    d.className = "direct " + s;
    d.lastElementChild.textContent = { connecte: "En direct", reconnexion: "Reconnexion…", "hors-ligne": "Direct indisponible : même navigateur seulement" }[s] || s;
  }

  // --- Interactions ---
  document.addEventListener("click", (e) => {
    const c = (sel) => e.target.closest(sel); let el;
    if ((el = c("[data-vue]"))) { S.vue = el.dataset.vue; DC.ecrire("vue", S.vue); S.campagne = null; S.programmateur = null; if (S.vue === "tableau") { S.nonLus = 0; document.title = "Diffusion · Ensemble la Sportelle · Da Capo Répertoire"; } rendre(); window.scrollTo(0, 0); return; }
    if ((el = c("[data-campagne]"))) { S.campagne = el.dataset.campagne; rendre(); window.scrollTo(0, 0); return; }
    if (c("[data-nouvelle]")) { S.campagne = "nouvelle"; rendre(); return; }
    if ((el = c("[data-voir-prog]"))) { S.vue = "programmateurs"; S.programmateur = el.dataset.voirProg; rendre(); window.scrollTo(0, 0); return; }
    if ((el = c("[data-copier]"))) { copier(el.dataset.copier); return; }
    if ((el = c("[data-copier-tous]"))) { const k = campagnes().find((x) => x.id === el.dataset.copierTous); copier(DC.programmateurs.filter((p) => p.cat === k.cat).map((p) => `${p.nom} (${p.structure}) : ${lienPour(p, k)}`).join("\n"), "Liste des liens copiée."); return; }
    if ((el = c("[data-csv]"))) { csv(el.dataset.csv); return; }
    if ((el = c("[data-qr]"))) { qr(el.dataset.qr, el.dataset.qrC); return; }
    if (c("[data-qr-concert]")) { qrConcert(); return; }
    if ((el = c("[data-relance]"))) { relance(el.dataset.relance); return; }
    if (c("[data-copier-texte]")) { copier(document.querySelector(".brouillon").value, "Message copié."); return; }
    if ((el = c("[data-traiter]"))) { S.traites.has(el.dataset.traiter) ? S.traites.delete(el.dataset.traiter) : S.traites.add(el.dataset.traiter); DC.ecrire("traites", [...S.traites]); rendre(); return; }
    if (c("[data-orfeo]")) { DC.toast("Version 2 : vous déposez l'export de vos contacts Orféo, Da Capo les range par catégorie."); return; }
    if (c("[data-modifier]")) { DC.toast("Version 2 : votre équipe modifie elle-même programmes, vidéos et textes."); return; }
    if (c("[data-fermer]") || e.target.id === "voile") { document.getElementById("voile").hidden = true; return; }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") document.getElementById("voile").hidden = true;
    if (e.key === "Enter" && e.target.matches("tr[data-campagne], tr[data-voir-prog]")) e.target.click();
  });
  document.addEventListener("change", (e) => {
    if (e.target.id === "moi") {
      const d = DC.diffuseurs.find((x) => x.id === e.target.value);
      S.moi = d.id; DC.ecrire("moi", S.moi); S.campagne = null; S.programmateur = null; S.filtreCat = "";
      if (d.v2) DC.toast(`Version 2 : chaque agent a son espace. ${d.id === "direction" ? "La direction voit tout." : "Il ne voit que ses propres contacts."}`);
      rendre();
    }
    if (e.target.id === "filtre-cat") { S.filtreCat = e.target.value; rendre(); }
  });
  document.addEventListener("input", (e) => {
    if (e.target.id === "recherche") { S.recherche = e.target.value; clearTimeout(attente); attente = setTimeout(() => { rendre(); const r = document.getElementById("recherche"); r.focus(); r.setSelectionRange(r.value.length, r.value.length); }, 300); }
  });
  document.addEventListener("submit", (e) => {
    if (e.target.id !== "form-campagne") return;
    e.preventDefault(); const d = new FormData(e.target);
    const progs = d.getAll("p"); if (!progs.length) { DC.toast("Choisissez au moins un programme."); return; }
    if (d.get("lang") === "de") DC.toast("L'allemand arrive avec la version 2 : la page s'ouvrira en anglais.");
    const c = { id: "c-" + DC.id(5), nom: String(d.get("nom") || "Nouvelle campagne").slice(0, 80), d: S.moi === "direction" ? (DC.programmateurs.find((p) => p.cat === d.get("cat")) || {}).d || "vincent" : S.moi, cat: d.get("cat"), programmes: progs, lang: d.get("lang"), j: 0 };
    S.creees.unshift(c); DC.ecrire("campagnes", S.creees); S.campagne = c.id; rendre(); window.scrollTo(0, 0);
  });

  rendre();
  DC.canal(S.session, recevoir, etat);
  setInterval(() => { if (!document.getElementById("voile").hidden) return; planifier(); }, 60e3);
})();

// Vue programmateur : la page qu'un programmateur ouvre depuis son lien personnel.
// Chaque geste (programme ouvert, vidéo, épisode, kit, demande de contact) part en direct vers la vue diffusion.
(function () {
  const E = DC.ensemble, esc = DC.esc;
  const prog = DC.programmateur(DC.params.get("r"));
  const session = DC.params.get("s");
  const relais = session ? DC.canal(session) : null;
  let L = DC.params.get("l") || (prog && prog.lang) || "fr";
  if (!["fr", "en"].includes(L)) L = "fr";

  const T = {
    fr: {
      pour: "Pour", selection: (n, qui) => `${qui} a choisi ${n === 1 ? "ce programme" : "ces programmes"} pour vous.`,
      apercu: "Aperçu programmateur", selectionnes: "Sélectionnés pour vous", repertoire: "Tout le répertoire", repertoireNote: "Neuf des dix-huit programmes de l'ensemble.",
      voir: "Découvrir", ilsEnParlent: "Ils en parlent", equipe: "L'équipe artistique", scenes: "Ils l'ont accueilli",
      contact: "Parlons de votre saison", contactTexte: "Une question sur un programme, des dates, un format ? L'équipe de diffusion vous répond.",
      interesse: "Ce programme m'intéresse", interesseCourt: "Je suis intéressé", rappel: "Rappelez-moi", appeler: "Appeler",
      transparence: "Ce lien vous est personnel. Pour mieux vous répondre, La Sportelle voit quels programmes vous consultez. Aucune autre donnée n'est recueillie.",
      fermer: "Fermer", direction: "Direction", effectif: "Effectif", duree: "Durée", accomp: "Accompagnement",
      video: "Vidéo", inedit: "Inédit · réservé aux professionnels", public: "Extrait", episode: "L'épisode", episodeTexte: (d) => `Le programme raconté en ${d}, avec les passages à guetter.`,
      programme: "Le programme", oeuvres: "Au programme", pratique: "En pratique", deja: "Déjà donné à", kit: "Kit de communication", kitTexte: "Photos haute définition, textes de présentation courts et longs, visuel du programme.",
      telecharger: "Télécharger le kit", fiche: "Fiche technique", spectateur: "Ce que lira votre public", spectateurTexte: "Le soir du concert, votre public ouvre ce programme par QR code : clés d'écoute, textes chantés et traductions.", spectateurVoir: "Voir la page spectateur",
      demoVideo: "Démo : ici se lance la vidéo, hébergée sur YouTube ou Vimeo en accès non répertorié.", demoKit: "Démo : le kit se télécharge ici.", demoFiche: "Démo : la fiche technique PDF s'ouvre ici.", demoAppel: "Démo : le téléphone de l'équipe de diffusion sonnerait. Votre appel est noté dans son tableau de bord.",
      saison: "Pour quelle saison ?", periode: "Période ou dates envisagées", periodePh: "Par exemple : un week-end de juillet", message: "Un mot pour l'équipe de diffusion", messagePh: "Votre lieu, votre jauge, vos contraintes…", envoyer: "Envoyer", plusTard: "Plus tard",
      merci: "Merci", merciTexte: "L'équipe de diffusion a reçu votre demande. Elle vous répond sous deux jours ouvrés.",
      quand: "Quand vous joindre ?", matin: "Ce matin", apresmidi: "Cet après-midi", demain: "Demain", tel: "Votre numéro", rappelOk: "C'est noté : l'équipe de diffusion vous rappelle.",
      nouveau: "Nouveau", disque: "Nouveau disque", ecouter: "Écouter", pause: "Pause", phare: "Le programme qui fait entendre le chant choral français",
      bonjour: "Bonjour",
    },
    en: {
      pour: "For", selection: (n, qui) => `${qui} picked ${n === 1 ? "this programme" : "these programmes"} for you.`,
      apercu: "Presenter preview", selectionnes: "Selected for you", repertoire: "Full repertoire", repertoireNote: "Nine of the ensemble's eighteen programmes.",
      voir: "Discover", ilsEnParlent: "Press", equipe: "Artistic team", scenes: "Where they have sung",
      contact: "Let's talk about your season", contactTexte: "A question about a programme, dates or format? Our booking team will get back to you.",
      interesse: "I'm interested in this programme", interesseCourt: "I'm interested", rappel: "Call me back", appeler: "Call",
      transparence: "This link is personal to you. To answer you better, La Sportelle can see which programmes you view. No other data is collected.",
      fermer: "Close", direction: "Conductor", effectif: "Forces", duree: "Duration", accomp: "Accompaniment",
      video: "Video", inedit: "Unreleased · for presenters only", public: "Excerpt", episode: "The episode", episodeTexte: (d) => `The programme explained in ${d.replace("min", "minutes")}, with what to listen for.`,
      programme: "The programme", oeuvres: "Repertoire", pratique: "Practical details", deja: "Already performed at", kit: "Press kit", kitTexte: "High-resolution photos, short and long descriptions, programme artwork.",
      telecharger: "Download the kit", fiche: "Technical rider", spectateur: "What your audience will read", spectateurTexte: "On the night, your audience opens this programme with a QR code: listening notes, sung texts and translations.", spectateurVoir: "See the audience page",
      demoVideo: "Demo: the video plays here, hosted unlisted on YouTube or Vimeo.", demoKit: "Demo: the kit downloads here.", demoFiche: "Demo: the PDF rider opens here.", demoAppel: "Demo: the booking team's phone would ring. Your call is logged on their dashboard.",
      saison: "Which season?", periode: "Period or possible dates", periodePh: "For example: a weekend in July", message: "A note for our booking team", messagePh: "Your venue, capacity, constraints…", envoyer: "Send", plusTard: "Later",
      merci: "Thank you", merciTexte: "Our booking team has received your request. They will reply within two working days.",
      quand: "When can we reach you?", matin: "This morning", apresmidi: "This afternoon", demain: "Tomorrow", tel: "Your number", rappelOk: "Noted: our booking team will call you back.",
      nouveau: "New", disque: "New album", ecouter: "Listen", pause: "Pause", phare: "The programme that showcases French choral singing",
      bonjour: "Hello",
    },
  };
  const t = () => T[L];
  const tx = (o) => (o && typeof o === "object" ? o[L] || o.fr : o || "");

  // Les programmes mis en avant : ceux du lien, sinon ceux de la campagne du programmateur.
  const choisis = (() => {
    const p = (DC.params.get("p") || "").split(",").filter((id) => DC.programme(id));
    if (p.length) return p;
    const c = DC.campagnes.find((c) => c.id === DC.params.get("c")) || (prog && DC.campagnes.find((c) => c.cat === prog.cat));
    return c ? c.programmes : ["mediavita", "purete"];
  })();
  const campagne = DC.params.get("c") || (prog && (DC.campagnes.find((c) => c.cat === prog.cat) || {}).id) || "";

  const signaler = (ev) => relais && prog && relais.envoyer({ ...ev, r: prog.cle, c: campagne });
  signaler({ t: "ouvre" });

  const icone = {
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg>',
    pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor"/></svg>',
    fleche: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    tel: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z" fill="currentColor"/></svg>',
    bas: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 19h14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    etoile: '<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 4L23 16L36 20L23 24L20 36L17 24L4 20L17 16Z" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>',
  };

  const vignette = (p, grand) => `<div class="vignette${grand ? " grande" : ""}" style="--a:${p.teinte[0]};--b:${p.teinte[1]}" aria-hidden="true"><span class="vignette-titre">${esc(p.titre)}</span>${icone.etoile}</div>`;

  const carte = (p, grand) => `
    <button class="carte${grand ? " carte-grande" : ""}" data-ouvrir="${p.id}">
      ${vignette(p, grand)}
      <span class="carte-corps">
        ${p.badge ? `<span class="pastille">${esc(tx(p.badge))}</span>` : ""}
        <span class="carte-titre">${esc(p.titre)}</span>
        <span class="carte-sous">${esc(tx(p.sous))}</span>
        <span class="carte-meta">${[p.direction, tx(p.effectif), p.duree].filter(Boolean).map(esc).join(" · ")}</span>
        ${grand ? `<span class="carte-pitch">${esc(tx(p.pitch))}</span>` : ""}
        <span class="carte-lien">${t().voir} ${icone.fleche}</span>
      </span>
    </button>`;

  function page() {
    document.documentElement.lang = L;
    const autres = DC.programmes.filter((p) => !choisis.includes(p.id));
    const qui = DC.diffuseurs.find((d) => prog && d.id === prog.d) || DC.diffuseurs[0];
    const quiNom = "La Sportelle";
    document.getElementById("app").innerHTML = `
      <header class="barre">
        <span class="barre-nom">Ensemble la Sportelle</span>
        <span class="langues" role="group" aria-label="Langue">
          ${["fr", "en", "de"].map((l) => `<button data-langue="${l}" class="${l === L ? "actif" : ""}">${l.toUpperCase()}</button>`).join("")}
        </span>
      </header>
      ${prog ? `<div class="perso"><span class="perso-pour">${t().pour} ${esc(prog.nom)} · ${esc(prog.structure)}</span><span>${esc(t().selection(choisis.length, quiNom))}</span></div>` : `<div class="perso"><span class="perso-pour">${t().apercu}</span></div>`}
      <section class="hero">
        <p class="surtitre">${esc(tx(E.ligne))}</p>
        <h1>Ensemble<br>la Sportelle</h1>
        <p class="hero-texte">${esc(tx(E.presentation))}</p>
        <div class="faits">${E.faits[L].map(([n, l]) => `<div><strong>${esc(n)}</strong><span>${esc(l)}</span></div>`).join("")}</div>
        <a class="disque" href="#" data-ouvrir="mediavita"><span class="disque-pochette" aria-hidden="true">MV</span><span><strong>${t().disque} · ${esc(E.disque[L].titre)}</strong><span>${esc(E.disque[L].texte)}</span></span></a>
      </section>
      <section class="bloc">
        <h2>${t().selectionnes}</h2>
        <div class="grille-choix">${choisis.map((id) => carte(DC.programme(id), true)).join("")}</div>
      </section>
      <section class="bloc">
        <h2>${t().repertoire}</h2>
        <p class="note">${t().repertoireNote}</p>
        <div class="grille">${autres.map((p) => carte(p, false)).join("")}</div>
      </section>
      <section class="bloc bloc-presse">
        <h2>${t().ilsEnParlent}</h2>
        <div class="presse">${E.presse.map((q) => `<figure><blockquote>${esc(L === "en" ? q.qen : q.q)}</blockquote><figcaption>${esc(q.s)}</figcaption></figure>`).join("")}</div>
        <p class="scenes"><span>${t().scenes}</span>${esc(E.scenes)}</p>
      </section>
      <section class="bloc">
        <h2>${t().equipe}</h2>
        <div class="equipe">${E.equipe.map((m) => `<div><strong>${esc(m.nom)}</strong><span class="role">${esc(tx(m.role))}</span><span>${esc(tx(m.texte))}</span></div>`).join("")}</div>
      </section>
      <section class="bloc contact">
        <h2>${t().contact}</h2>
        <p>${t().contactTexte}</p>
        <p class="contact-nom"><strong>${esc(E.contact.nom)}</strong> · ${esc(tx(E.contact.role))}</p>
        <div class="actions">
          <button class="bouton plein" data-interet="${choisis[0]}">${t().interesseCourt}</button>
          <button class="bouton" data-rappel="${choisis[0]}">${t().rappel}</button>
          <button class="bouton" data-appel="${choisis[0]}">${icone.tel}${t().appeler}</button>
        </div>
      </section>
      <footer class="pied">
        <p>${t().transparence}</p>
        <p class="pied-dc">${esc(DC.NOM)} · Double Dièse · démonstration, programmateurs fictifs</p>
      </footer>`;
  }

  // --- La fiche d'un programme ---
  let lecture = null;
  function fiche(id) {
    const p = DC.programme(id); if (!p) return;
    signaler({ t: "programme", p: id });
    const f = document.getElementById("feuille");
    const lignes = [[t().direction, p.direction], [t().effectif, tx(p.effectif)], [t().duree, p.duree], [t().accomp, tx(p.accomp)]].filter(([, v]) => v);
    f.innerHTML = `
      <div class="feuille-haut"><button class="fermer" data-fermer aria-label="${t().fermer}">✕</button></div>
      <article class="fiche">
        <header class="fiche-tete" style="--a:${p.teinte[0]};--b:${p.teinte[1]}">
          ${p.badge ? `<span class="pastille claire">${esc(tx(p.badge))}</span>` : ""}
          <h2>${esc(p.titre)}</h2>
          <p class="fiche-sous">${esc(tx(p.sous))}</p>
          ${p.phare ? `<p class="phare">${t().phare}</p>` : ""}
        </header>
        <dl class="fiche-meta">${lignes.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
        <div class="video" data-video="${p.id}" role="button" tabindex="0" style="--a:${p.teinte[0]};--b:${p.teinte[1]}">
          <span class="video-etiquette">${p.video.inedit ? t().inedit : t().public}</span>
          <span class="video-play">${icone.play}</span>
          <span class="video-duree">${t().video} · ${esc(p.video.duree)}</span>
        </div>
        ${p.episode ? `<div class="episode"><button class="episode-bouton" data-episode="${p.id}" aria-label="${t().ecouter}">${icone.play}</button><div class="episode-corps"><strong>${t().episode} · ${esc(p.episode)}</strong><span>${esc(t().episodeTexte(p.episode))}</span><span class="episode-barre"><span></span></span></div></div>` : ""}
        <section><h3>${t().programme}</h3><p>${esc(tx(p.pitch))}</p></section>
        <section><h3>${t().oeuvres}</h3><ul class="oeuvres">${p.oeuvres.map((o) => `<li>${esc(o)}</li>`).join("")}</ul></section>
        <section><h3>${t().pratique}</h3><ul class="pratique">${p.pratique[L].map((o) => `<li>${esc(o)}</li>`).join("")}</ul><button class="lien" data-fiche-tech="${p.id}">${icone.bas}${t().fiche}</button></section>
        ${p.deja.length ? `<section><h3>${t().deja}</h3><p class="deja">${p.deja.map(esc).join(" · ")}</p></section>` : ""}
        <section class="kit"><h3>${t().kit}</h3><p>${t().kitTexte}</p><button class="bouton" data-kit="${p.id}">${icone.bas}${t().telecharger}</button></section>
        ${p.equipe ? `<section class="apercu-public"><h3>${t().spectateur}</h3><p>${t().spectateurTexte}</p><a class="bouton" href="concert.html?l=${L}" target="_blank" rel="noopener" data-spectateur="${p.id}">${t().spectateurVoir} ${icone.fleche}</a></section>` : ""}
      </article>
      <div class="cta">
        <button class="bouton plein" data-interet="${p.id}">${t().interesse}</button>
        <div class="cta-ligne"><button class="bouton" data-rappel="${p.id}">${t().rappel}</button><button class="bouton" data-appel="${p.id}">${icone.tel}${t().appeler}</button></div>
      </div>`;
    f.hidden = false; f.scrollTop = 0; document.body.classList.add("fige");
    history.replaceState(null, "", "#" + id);
  }
  function fermerFiche() {
    const f = document.getElementById("feuille"); f.hidden = true; document.body.classList.remove("fige");
    if (lecture) { clearInterval(lecture.minuteur); lecture = null; }
    history.replaceState(null, "", location.pathname + location.search);
  }

  // --- Les fenêtres de contact ---
  function modale(html) { const m = document.getElementById("modale"); m.innerHTML = `<div class="modale-boite">${html}</div>`; m.hidden = false; const champ = m.querySelector("textarea,input,select,button"); champ && champ.focus(); }
  function fermerModale() { document.getElementById("modale").hidden = true; }
  function interet(id) {
    const p = DC.programme(id);
    modale(`<button class="fermer" data-fermer-modale aria-label="${t().fermer}">✕</button>
      <h3>${esc(p.titre)}</h3><p class="note">${t().interesse}</p>
      <form id="form-interet">
        <fieldset class="choix"><legend>${t().saison}</legend>
          ${["2027-2028", "2028-2029", t().plusTard].map((s, i) => `<label><input type="radio" name="saison" value="${esc(s)}" ${i === 0 ? "checked" : ""}><span>${esc(s)}</span></label>`).join("")}
        </fieldset>
        <label class="champ"><span>${t().periode}</span><input name="periode" placeholder="${esc(t().periodePh)}"></label>
        <label class="champ"><span>${t().message}</span><textarea name="message" rows="3" placeholder="${esc(t().messagePh)}"></textarea></label>
        <button class="bouton plein" type="submit">${t().envoyer}</button>
      </form>`);
    document.getElementById("form-interet").onsubmit = (e) => {
      e.preventDefault(); const d = new FormData(e.target);
      signaler({ t: "interet", p: id, mode: "interesse", saison: d.get("saison"), periode: String(d.get("periode") || "").slice(0, 120), message: String(d.get("message") || "").slice(0, 400) });
      modale(`<button class="fermer" data-fermer-modale aria-label="${t().fermer}">✕</button><div class="merci">${icone.etoile}<h3>${t().merci}</h3><p>${t().merciTexte}</p><button class="bouton" data-fermer-modale>${t().fermer}</button></div>`);
    };
  }
  function rappel(id) {
    modale(`<button class="fermer" data-fermer-modale aria-label="${t().fermer}">✕</button>
      <h3>${t().rappel}</h3>
      <form id="form-rappel">
        <fieldset class="choix"><legend>${t().quand}</legend>
          ${[t().matin, t().apresmidi, t().demain].map((s, i) => `<label><input type="radio" name="quand" value="${esc(s)}" ${i === 1 ? "checked" : ""}><span>${esc(s)}</span></label>`).join("")}
        </fieldset>
        <label class="champ"><span>${t().tel}</span><input name="tel" type="tel" autocomplete="tel" placeholder="06 00 00 00 00"></label>
        <button class="bouton plein" type="submit">${t().envoyer}</button>
      </form>`);
    document.getElementById("form-rappel").onsubmit = (e) => {
      e.preventDefault(); const d = new FormData(e.target);
      signaler({ t: "interet", p: id, mode: "rappel", quand: d.get("quand") });
      fermerModale(); DC.toast(t().rappelOk);
    };
  }

  // --- Lecture simulée de la vidéo et de l'épisode ---
  function video(el) {
    const id = el.dataset.video; signaler({ t: "video", p: id });
    el.classList.add("en-lecture");
    el.innerHTML = `<span class="video-demo">${t().demoVideo}</span><span class="episode-barre clair"><span></span></span>`;
    const b = el.querySelector(".episode-barre span"); let x = 0;
    const m = setInterval(() => { x += 2; b.style.width = Math.min(x, 100) + "%"; if (x >= 100) clearInterval(m); }, 120);
  }
  function episode(btn) {
    const id = btn.dataset.episode, barre = btn.parentElement.querySelector(".episode-barre span");
    if (lecture && lecture.btn === btn) { clearInterval(lecture.minuteur); btn.innerHTML = icone.play; lecture = null; return; }
    if (!btn.dataset.lu) { btn.dataset.lu = "1"; signaler({ t: "episode", p: id }); }
    btn.innerHTML = icone.pause; let x = parseFloat(barre.style.width) || 0;
    lecture = { btn, minuteur: setInterval(() => { x += 0.5; barre.style.width = Math.min(x, 100) + "%"; if (x >= 100) { clearInterval(lecture.minuteur); btn.innerHTML = icone.play; lecture = null; } }, 100) };
  }

  document.addEventListener("click", (e) => {
    const c = (sel) => e.target.closest(sel);
    let el;
    if ((el = c("[data-langue]"))) {
      if (el.dataset.langue === "de") { DC.toast(L === "en" ? "German arrives with version 2." : "L'allemand arrive avec la version 2."); return; }
      L = el.dataset.langue; page(); const ouverte = !document.getElementById("feuille").hidden && location.hash.slice(1); if (ouverte) fiche(ouverte); return;
    }
    if ((el = c("[data-ouvrir]"))) { e.preventDefault(); fiche(el.dataset.ouvrir); return; }
    if (c("[data-fermer]")) { fermerFiche(); return; }
    if (c("[data-fermer-modale]")) { fermerModale(); return; }
    if ((el = c("[data-video]")) && !el.classList.contains("en-lecture")) { video(el); return; }
    if ((el = c("[data-episode]"))) { episode(el); return; }
    if ((el = c("[data-kit]"))) { signaler({ t: "kit", p: el.dataset.kit }); DC.toast(t().demoKit); return; }
    if ((el = c("[data-fiche-tech]"))) { signaler({ t: "fiche", p: el.dataset.ficheTech }); DC.toast(t().demoFiche); return; }
    if ((el = c("[data-spectateur]"))) { signaler({ t: "spectateur", p: el.dataset.spectateur }); return; }
    if ((el = c("[data-interet]"))) { interet(el.dataset.interet); return; }
    if ((el = c("[data-rappel]"))) { rappel(el.dataset.rappel); return; }
    if ((el = c("[data-appel]"))) { signaler({ t: "interet", p: el.dataset.appel, mode: "appel" }); DC.toast(t().demoAppel); return; }
    if (e.target.id === "modale") fermerModale();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { if (!document.getElementById("modale").hidden) fermerModale(); else if (!document.getElementById("feuille").hidden) fermerFiche(); }
    if ((e.key === "Enter" || e.key === " ") && e.target.dataset && e.target.dataset.video) { e.preventDefault(); video(e.target); }
  });

  page();
  if (location.hash && DC.programme(location.hash.slice(1))) fiche(location.hash.slice(1));
})();

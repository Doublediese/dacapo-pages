// Guide du spectateur : Ma saison, Avant le concert, En salle (avec noir et entracte), Après le concert.
(function () {
  const C = DC.contenu, esc = DC.esc;
  const params = new URLSearchParams(location.search);
  const session = (params.get("s") || "").replace(/[^a-z0-9]/gi, "").slice(0, 24);
  const moi = DC.lire("dc-spectateur", null) || DC.id(8); DC.ecrire("dc-spectateur", moi);
  const cleLocale = "dc-guide-" + (session || "seul");

  let etat = DC.etatVide();
  let vue = "saison", bandeau = false, statut = session ? "connexion" : "seul";
  let niveaux = DC.lire("dc-niveaux", {});
  let local = DC.lire(cleLocale, { venue: "", avisEnvoye: false, choisies: [] });
  let noirLecture = false, brouillon = { mot: "", moment: "", reviendrait: "", email: "", c1: false, c2: false };
  const canal = session ? DC.canal(session, recevoir, (s) => { statut = s; if (s === "connecte") canal.envoyer({ t: "hello", id: moi }).catch(() => {}); rendre(); }) : null;

  const app = document.getElementById("app");
  const sauver = () => DC.ecrire(cleLocale, local);

  function envoyer(ev) {
    if (canal && statut !== "hors-ligne") return canal.envoyer(ev).catch(() => DC.toast("Envoi impossible pour l'instant. Réessayez."));
    recevoir(ev); return Promise.resolve();
  }

  function recevoir(ev) {
    const avant = etat.moment;
    etat = DC.appliquer(etat, ev);
    if (etat.moment !== avant) changementDeMoment(avant, etat.moment);
    rendre();
  }

  function changementDeMoment(ancien, m) {
    if (m === "avant") { if (vue !== "saison") vue = "avant"; bandeau = false; }
    else if (m === "portes") { bandeau = vue !== "salle"; }
    else if (m === "apres") { vue = "apres"; bandeau = false; }
    else { vue = "salle"; bandeau = false; noirLecture = false; }
    window.scrollTo(0, 0);
  }

  const mode = () => {
    if (vue === "saison" || vue === "avant") return "jour";
    if (vue === "salle" && (etat.moment === "commence" || etat.moment === "reprise")) return "nuit";
    if (vue === "salle" || vue === "apres") return etat.moment === "avant" ? "jour" : "salle";
    return "jour";
  };

  // ---------- Morceaux ----------
  const entete = () => `<div class="entete">${C.logo ? `<img class="logo-orchestre" src="assets/${esc(C.logo)}" alt="${esc(C.orchestre)}">` : `<span><strong>${esc(C.orchestre)}</strong></span>`}<button class="petit" data-vue="saison" style="background:none;border:0;padding:0;cursor:pointer;text-decoration:underline;text-underline-offset:3px;color:inherit;white-space:nowrap">Ma saison</button></div>`;

  const fil = () => {
    const ecrans = [["avant", "Avant"], ["salle", "En salle"], ["apres", "Après"]];
    const direct = { avant: "avant", salle: ["portes", "commence", "entracte", "reprise"], apres: "apres" };
    return `<div class="haut"><nav class="fil" aria-label="Étapes du guide">${ecrans.map(([k, l]) => {
      const vivant = [].concat(direct[k]).includes(etat.moment) && etat.moment !== "avant";
      return `<button data-vue="${k}" ${vue === k ? 'aria-current="page"' : ""}>${vivant ? '<span class="point" aria-hidden="true"></span>' : ""}${l}</button>`;
    }).join("")}</nav>${bandeauHtml()}</div>`;
  };

  const messageHtml = () => etat.message ? `<div class="message ${etat.niveau === "urgent" ? "urgent" : ""}" role="alert">${esc(etat.message)}</div>` : "";

  const bandeauHtml = () => bandeau && vue !== "salle" ? `<div class="bandeau" role="status"><span>Les portes sont ouvertes.</span><button data-vue="salle" data-ferme-bandeau>Aller en salle</button></div>` : "";

  function ligneSoir(avecIci) {
    const m = etat.moment;
    const position = (o) => {
      if (!avecIci) return "";
      if (m === "apres") return "fait";
      if (m === "entracte") return o.pause ? "ici" : o.partie === 1 ? "fait" : "";
      if (m === "reprise") return o.partie === 2 ? "ici" : o.partie === 1 || o.pause ? "fait" : "";
      if (m === "commence" || m === "portes") return o.id === "weber" ? "ici" : "";
      return "";
    };
    const label = (o) => {
      const p = position(o);
      if (p !== "ici") return "";
      return `<div class="ici-label">${m === "entracte" ? "Vous êtes ici" : m === "portes" ? "Pour commencer" : m === "commence" ? "La première partie est en cours" : "La seconde partie est en cours"}</div>`;
    };
    return `<ol class="soiree">${C.soiree.map((o) => o.pause
      ? `<li class="pause ${position(o)}"><p class="titre">Entracte</p><div class="duree">${o.duree}</div>${label(o)}</li>`
      : `<li class="${position(o)}"><p class="compo">${esc(o.compositeur)}</p><p class="titre">${esc(o.titre)}</p><div class="duree">${o.duree}${o.soliste ? ", avec " + esc(o.soliste) : ""}</div>${label(o)}</li>`).join("")}</ol>`;
  }

  // En salle, le texte long cède la place à ce qu'il faut guetter : on lit assis, juste avant d'écouter.
  function oeuvreHtml(o, enSalle) {
    if (enSalle && o.guetter) {
      const n = niveaux[o.id + "@salle"] || "guetter";
      return `<article class="oeuvre" id="oeuvre-${o.id}">
        <div class="entete-oeuvre"><p class="meta">${esc(o.compositeur)}, ${o.annee}</p><h3>${esc(o.titre)}</h3></div>
        <div class="niveaux" role="group" aria-label="Niveau de lecture">
          <button data-niveau="${o.id}@salle:guetter" aria-pressed="${n === "guetter"}">À l'écoute</button>
          <button data-niveau="${o.id}@salle:bref" aria-pressed="${n === "bref"}">En bref</button>
        </div>
        ${n === "bref" ? `<p>${esc(o.bref)}</p><p class="ecoute">${esc(o.ecoute)}</p>`
          : `<dl class="guetter">${o.guetter.map(([q, t]) => `<dt>${esc(q)}</dt><dd>${esc(t)}</dd>`).join("")}</dl>`}
        <p class="petit">Le texte complet reste dans l'onglet Avant, pour le relire chez vous.</p>
      </article>`;
    }
    const n = niveaux[o.id] || "bref";
    return `<article class="oeuvre" id="oeuvre-${o.id}">
      <div class="entete-oeuvre"><p class="meta">${esc(o.compositeur)}, ${o.annee}</p><h3>${esc(o.titre)}</h3></div>
      <div class="niveaux" role="group" aria-label="Niveau de lecture">
        <button data-niveau="${o.id}:bref" aria-pressed="${n === "bref"}">En bref</button>
        <button data-niveau="${o.id}:long" aria-pressed="${n === "long"}">Pour aller plus loin</button>
      </div>
      ${n === "bref" ? `<p>${esc(o.bref)}</p>` : o.long.map((p) => p.startsWith("§ ") ? `<h4 class="intertitre">${esc(p.slice(2))}</h4>` : `<p>${esc(p)}</p>`).join("")}
      <p class="ecoute">${esc(o.ecoute)}</p>
    </article>`;
  }

  const oeuvres = (filtre, enSalle) => C.soiree.filter((o) => !o.pause && (!filtre || filtre(o))).map((o) => oeuvreHtml(o, enSalle)).join("");

  const questionVenue = () => local.venue ? "" : `<div class="bloc plein">
      <p class="sans" style="font-weight:500;margin-bottom:4px">Une question avant de commencer</p>
      <p class="petit" style="margin-bottom:12px">Vous venez…</p>
      <div class="choix"><button data-venue="billet">avec mon billet</button><button data-venue="invite">invité(e)</button><button data-venue="passer">Passer</button></div>
    </div>`;

  const partenaires = () => `<div class="bloc"><p class="petit" style="margin:0 0 6px">${esc(C.partenaires.soutien)}</p><p class="petit" style="margin:0 0 6px">${esc(C.partenaires.media)}</p><p class="petit" style="margin:0">${esc(C.partenaires.radio)}</p></div>`;

  const pied = () => `<footer class="pied"><img src="assets/logo-dd.png" alt=""><span>Da Capo, guide d'écoute. Démonstration réalisée par Double Dièse, sans lien officiel avec l'orchestre.</span></footer>`;

  // ---------- Écrans ----------
  function ecranSaison() {
    return `${entete()}
      <h1>Ma saison</h1>
      <p class="doux">${esc(C.saison)}. Un seul lien pour tous vos concerts : chaque guide s'ouvre un mois avant la date.</p>
      <ul class="saison">${C.saisonAbonne.map((c, i) => `<li class="${i === 0 ? "actif" : ""}">
        <div class="quand">${esc(c.date)}</div>
        <div class="quoi"><h3>${esc(c.titre)}</h3><p class="petit" style="margin:2px 0 0">${esc(c.oeuvres)}</p>
        ${i === 0 ? `<button class="bouton" style="margin-top:12px" data-vue="avant">Ouvrir le guide</button>` : `<p class="etat doux">Guide disponible un mois avant</p>`}</div>
      </li>`).join("")}</ul>
      ${pied()}`;
  }

  function ecranAvant() {
    const c = C.concert;
    return `${entete()}${fil()}${messageHtml()}
      <p class="meta" style="margin-top:22px">${esc(c.date)}, ${esc(c.heure)}<br>${esc(c.lieu)}</p>
      <h1>${esc(c.titre)}</h1>
      <p class="accroche">${esc(c.accroche)}</p>
      <div class="rangee" style="margin:18px 0 6px">
        <button class="bouton discret" data-action="agenda">Ajouter à mon agenda</button>
        <button class="bouton discret" data-action="partager">Envoyer à mes invités</button>
      </div>
      ${questionVenue()}
      <h2>Le programme raconté par ses interprètes</h2>
      <div class="cadre-vide">À cette place, Alexander Soddy ou Stefan Dohr raconte ce programme, en vidéo ou en audio.</div>
      <div class="episode"><span class="rond" aria-hidden="true"></span><div><p class="sans" style="margin:0;font-weight:500;color:var(--fort)">Le programme raconté en huit minutes</p><p class="petit" style="margin:0">Par Thibault d'Hauthuille. À écouter quand vous voulez d'ici le concert : chez vous, en route, ou en attendant l'ouverture des portes.</p></div></div>
      <h2>La soirée</h2>
      <p class="doux" style="margin:0">${esc(c.duree)}. Le fil : ${esc(c.fil.toLowerCase())}.</p>
      ${ligneSoir(false)}
      ${oeuvres()}
      <h2>À savoir en entrant</h2>
      ${C.aSavoir.map((p) => `<p>${esc(p)}</p>`).join("")}
      <h2>Les interprètes</h2>
      ${C.artistes.map((a) => `<p><strong style="color:var(--fort)">${esc(a.nom)}</strong>, ${esc(a.role)}. ${esc(a.texte)}${a.lien ? `<br><a class="petit" href="${esc(a.lien)}" target="_blank" rel="noopener">Sa biographie complète</a>` : ""}</p>`).join("")}
      ${partenaires()}
      ${pied()}`;
  }

  function ecranSalle() {
    const m = etat.moment;
    if (m === "commence" || m === "reprise") {
      const titre = m === "commence" ? "Le concert commence." : "La seconde partie commence.";
      const suite = m === "commence" ? "Passez votre téléphone en mode avion. Rendez-vous à l'entracte : la suite du programme vous y attend." : "Rendez-vous à la sortie : le bis, les photos et votre mot vous attendent ici.";
      const lecture = noirLecture ? `<div style="margin-top:26px">${oeuvres((o) => (m === "commence" ? o.partie === 1 : o.partie === 2), true)}</div>` : `<button class="bouton discret" style="margin-top:8px" data-action="noir-lecture">Relire le programme sans éclairer la salle</button>`;
      return `${messageHtml()}<div class="noir apparition"><p class="grand">${titre}</p><p>${suite}</p>${lecture}</div>`;
    }
    if (m === "entracte") {
      const s = C.soiree.find((o) => o.id === "schubert");
      return `${entete()}${fil()}${messageHtml()}
        <h1>Entracte</h1>
        <p class="accroche">Vingt minutes. Ensuite, la jeunesse de Schubert.</p>
        ${ligneSoir(true)}
        ${oeuvreHtml(s, true)}
        <h2>Le mot de notre mécène</h2>
        <div class="cadre-vide court">À cette place, votre mécène dit en une minute pourquoi il soutient l'orchestre.</div>
        ${partenaires()}
        ${pied()}`;
    }
    const avantOuverture = m === "avant";
    return `${entete()}${fil()}${messageHtml()}
      <h1>${avantOuverture ? "En salle" : "Installez-vous"}</h1>
      <p class="accroche">${avantOuverture ? "Cet écran prend vie à l'ouverture des portes. Vous y retrouverez le programme, lisible depuis votre fauteuil." : "Il reste quelques minutes avant le début. Voici la soirée, dans l'ordre."}</p>
      ${!avantOuverture ? questionVenue() : ""}
      ${ligneSoir(true)}
      ${oeuvres(null, !avantOuverture)}
      ${pied()}`;
  }

  function ecranApres() {
    if (etat.moment !== "apres") {
      return `${entete()}${fil()}${messageHtml()}<h1>Après le concert</h1><p class="accroche">Le bis, les photos de la soirée et votre avis vous attendent ici, dès la fin du concert.</p>${pied()}`;
    }
    const photos = etat.photos.length
      ? `<div class="photos">${etat.photos.map((u, i) => `<figure><img src="${esc(u)}" alt="Photo de la soirée ${i + 1}" loading="lazy"><input type="checkbox" aria-label="Choisir la photo ${i + 1}" data-photo="${esc(u)}" ${local.choisies.includes(u) ? "checked" : ""}></figure>`).join("")}</div>
         <button class="bouton discret" data-action="partager-photos" ${local.choisies.length ? "" : "disabled"}>Partager ${local.choisies.length > 1 ? "les " + local.choisies.length + " photos" : "la photo"}</button>`
      : `<p class="doux">Les photos de la soirée apparaîtront ici dès que le photographe les publie.</p>`;
    const avis = local.avisEnvoye
      ? `<div class="bloc plein"><p style="margin:0" class="sans">Merci. Votre mot rejoint ceux du public dans l'email de demain matin.</p></div>`
      : `<form id="avis">
          <label class="petit" for="mot">Ce concert, en un mot</label>
          <input id="mot" class="mot" type="text" maxlength="40" autocomplete="off" placeholder="Par exemple : lumineux" value="${esc(brouillon.mot)}">
          <label class="petit" for="moment" style="display:block;margin-top:20px">Le moment qui vous a le plus marqué</label>
          <textarea id="moment" rows="3" maxlength="200">${esc(brouillon.moment)}</textarea>
          <p class="petit" style="margin:20px 0 8px">Reviendriez-vous écouter l'orchestre ?</p>
          <div class="choix">${[["oui", "Oui"], ["peut-etre", "Peut-être"], ["non", "Non"]].map(([k, l]) => `<button type="button" data-reviendrait="${k}" aria-pressed="${brouillon.reviendrait === k}">${l}</button>`).join("")}</div>
          <label class="petit" for="email" style="display:block;margin-top:20px">Votre email, si vous le souhaitez</label>
          <input id="email" type="email" autocomplete="email" value="${esc(brouillon.email)}">
          <label class="case"><input type="checkbox" id="c1" ${brouillon.c1 ? "checked" : ""}> Recevoir demain matin les mots du public et les photos</label>
          <label class="case"><input type="checkbox" id="c2" ${brouillon.c2 ? "checked" : ""}> Être prévenu(e) des concerts de la saison</label>
          <button class="bouton" style="margin-top:14px" type="submit">Envoyer mon avis</button>
        </form>`;
    return `${entete()}${fil()}${messageHtml()}
      <h1>Merci pour cette soirée</h1>
      ${etat.bis ? `<div class="bloc plein"><p class="petit" style="margin:0 0 2px">Le bis de ce soir</p><p style="margin:0;font-size:21px;color:var(--fort)">${esc(etat.bis)}</p></div>` : ""}
      <h2>Les photos de la soirée</h2>${photos}
      <h2>Votre avis</h2>${avis}
      <h2>Prolonger la soirée</h2>
      <div class="episode"><span class="rond" aria-hidden="true"></span><div><p class="sans" style="margin:0;font-weight:500;color:var(--fort)">Réécouter l'épisode</p><p class="petit" style="margin:0">Pour retrouver ce que vous venez d'entendre.</p></div></div>
      <button class="bouton trait" data-action="don">Soutenir l'orchestre</button>
      <p class="doux" style="margin-top:18px">Prochain concert de votre saison : ${esc(C.prochain.date)}, ${esc(C.prochain.titre)}, avec ${esc(C.prochain.oeuvre)}.</p>
      ${partenaires()}
      ${pied()}`;
  }

  // ---------- Secours : sans relais, le téléphone choisit lui-même le moment ----------
  let menuOuvert = false;
  function secoursHtml() {
    if (statut !== "hors-ligne" && statut !== "seul") return "";
    const noms = { avant: "Avant le concert", portes: "Portes ouvertes", commence: "Le concert commence", entracte: "Entracte", reprise: "Reprise", apres: "Le concert est terminé" };
    return `<div class="secours">${menuOuvert ? `<div class="menu">${DC.MOMENTS.map((m) => `<button data-secours="${m}">${etat.moment === m ? "● " : ""}${noms[m]}</button>`).join("")}</div>` : ""}<button data-action="secours" aria-expanded="${menuOuvert}">${statut === "seul" ? "Démo" : "Hors connexion"}</button></div>`;
  }

  // ---------- Rendu ----------
  function rendre() {
    document.body.className = "mode-" + mode();
    const ecran = { saison: ecranSaison, avant: ecranAvant, salle: ecranSalle, apres: ecranApres }[vue]();
    const focus = document.activeElement && document.activeElement.id;
    app.innerHTML = `<div class="colonne">${vue === "saison" ? bandeauHtml() : ""}${ecran}</div>${secoursHtml()}`;
    if (focus && document.getElementById(focus)) { const el = document.getElementById(focus); el.focus(); if (el.setSelectionRange && el.value) el.setSelectionRange(el.value.length, el.value.length); }
  }

  function memoriserBrouillon() {
    const g = (id) => document.getElementById(id);
    if (g("mot")) { brouillon.mot = g("mot").value; brouillon.moment = g("moment").value; brouillon.email = g("email").value; brouillon.c1 = g("c1").checked; brouillon.c2 = g("c2").checked; }
  }
  app.addEventListener("input", memoriserBrouillon);

  app.addEventListener("click", async (e) => {
    const b = e.target.closest("button, input[data-photo]");
    if (!b) return;
    memoriserBrouillon();
    if (b.dataset.photo !== undefined) {
      const u = b.dataset.photo;
      local.choisies = b.checked ? [...new Set([...local.choisies, u])] : local.choisies.filter((x) => x !== u);
      sauver(); return rendre();
    }
    if (b.dataset.vue) { vue = b.dataset.vue; if (b.hasAttribute("data-ferme-bandeau") || vue === "salle") bandeau = false; window.scrollTo(0, 0); return rendre(); }
    if (b.dataset.niveau) { const [id, n] = b.dataset.niveau.split(":"); niveaux[id] = n; DC.ecrire("dc-niveaux", niveaux); return rendre(); }
    if (b.dataset.venue) {
      local.venue = b.dataset.venue; sauver();
      if (local.venue !== "passer") envoyer({ t: "venue", id: moi, v: local.venue });
      return rendre();
    }
    if (b.dataset.reviendrait) { brouillon.reviendrait = brouillon.reviendrait === b.dataset.reviendrait ? "" : b.dataset.reviendrait; return rendre(); }
    if (b.dataset.secours) { recevoir({ t: "moment", v: b.dataset.secours }); menuOuvert = false; return rendre(); }
    const a = b.dataset.action;
    if (a === "secours") { menuOuvert = !menuOuvert; return rendre(); }
    if (a === "noir-lecture") { noirLecture = true; return rendre(); }
    if (a === "agenda") return agenda();
    if (a === "partager") {
      const url = location.origin + location.pathname;
      if (navigator.share) { try { await navigator.share({ title: C.concert.titre, text: "Le guide du concert de samedi.", url }); } catch { /* annulé */ } }
      else { try { await navigator.clipboard.writeText(url); DC.toast("Lien copié. Collez-le dans un message."); } catch { DC.toast(url); } }
      return;
    }
    if (a === "don") return DC.toast("Dans la version finale, ce bouton ouvre la page de don de l'orchestre.");
    if (a === "partager-photos") return partagerPhotos();
  });

  app.addEventListener("submit", (e) => {
    if (e.target.id !== "avis") return;
    e.preventDefault(); memoriserBrouillon();
    if (!brouillon.mot.trim() && !brouillon.moment.trim()) return DC.toast("Écrivez un mot ou le moment qui vous a marqué.");
    if (brouillon.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(brouillon.email)) return DC.toast("Vérifiez le format de l'adresse email.");
    // L'adresse email reste sur le téléphone : le relais ne reçoit que l'indication qu'un contact a été laissé.
    envoyer({ t: "avis", cle: moi + "-" + Date.now(), mot: brouillon.mot.trim(), moment: brouillon.moment.trim(), reviendrait: brouillon.reviendrait, contact: !!brouillon.email && (brouillon.c1 || brouillon.c2), venue: local.venue });
    local.avisEnvoye = true; sauver(); rendre();
  });

  function agenda() {
    const c = C.concert, z = (iso) => new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    const ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Double Diese//Da Capo//FR", "BEGIN:VEVENT", "UID:dacapo-onct-20261114@double-diese.fr", "DTSTAMP:" + z(new Date().toISOString()),
      "DTSTART:" + z(c.debutIso), "DTEND:" + z(c.finIso), "SUMMARY:" + c.titre + " (ONCT)", "LOCATION:" + c.lieu, "DESCRIPTION:Votre guide d'écoute : " + location.origin + location.pathname, "END:VEVENT", "END:VCALENDAR"].join("\r\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" })); a.download = "concert-14-novembre.ics";
    document.body.appendChild(a); a.click(); a.remove();
  }

  async function partagerPhotos() {
    try {
      const fichiers = await Promise.all(local.choisies.map(async (u, i) => new File([await (await fetch(u)).blob()], `soiree-${i + 1}.jpg`, { type: "image/jpeg" })));
      if (navigator.canShare && navigator.canShare({ files: fichiers })) await navigator.share({ files: fichiers, title: "Samedi soir à la Halle aux Grains" });
      else DC.toast("Ce téléphone ne sait pas partager plusieurs photos : enregistrez-les une par une.");
    } catch { /* partage annulé */ }
  }

  rendre();
})();

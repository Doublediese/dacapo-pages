// Espace de l'orchestre : Ce soir (Régie), Public (tableau de bord), Parcours (tâches par rôle), Équipe (accès).
(function () {
  const C = DC.contenu, esc = DC.esc;
  let session = DC.lire("dc-espace-session", null);
  if (!session) { session = DC.id(10); DC.ecrire("dc-espace-session", session); }

  let etat = DC.etatVide(), statut = "connexion";
  let onglet = DC.lire("dc-espace-onglet", "soir");
  let role = "tous", apercu = null, exemples = true, envoiPhoto = "";
  let faits = DC.lire("dc-parcours", null);
  let codes = DC.lire("dc-codes", []);
  let msgBrouillon = "", niveau = "information", bisBrouillon = "", voirQr = false;

  const canal = DC.canal(session, (ev) => { etat = DC.appliquer(etat, ev); rendre(); }, (s) => { statut = s; rendre(); });
  const app = document.getElementById("app");
  const urlGuide = () => location.origin + location.pathname.replace(/espace\.html$/, "") + "?s=" + session + (DC.RELAIS !== "https://ntfy.sh" ? "&relais=" + encodeURIComponent(DC.RELAIS) : "");

  function envoyer(ev, ok) {
    const fait = () => { if (ok) DC.toast(ok); };
    if (statut === "hors-ligne") { etat = DC.appliquer(etat, ev); fait(); return rendre(); }
    canal.envoyer(ev).then(fait).catch(() => DC.toast("Envoi impossible. Vérifiez la connexion du téléphone."));
  }

  // Avis d'exemple, pour que le nuage ait de la matière avant que le public réponde.
  const EXEMPLES = [["lumineux", "Le choral des quatre cors, au tout début"], ["lumineux", "Le deuxième mouvement de Strauss, comme une voix"], ["forêt", ""], ["élégant", "Le menuet de Schubert"], ["cor", "Le finale de Strauss"], ["frissons", "Le silence avant la fin de l'ouverture"], ["lumineux", ""], ["joie", ""], ["élégant", ""], ["virtuose", "Stefan Dohr dans le finale"], ["printemps", "Le premier mouvement de Schubert"], ["chaleureux", ""], ["forêt", ""], ["magique", ""]]
    .map(([mot, moment], i) => ({ cle: "ex" + i, mot, moment, reviendrait: i % 5 === 3 ? "peut-etre" : "oui", contact: i % 3 === 0, venue: i % 4 === 0 ? "invite" : "billet", exemple: true }));
  const tousAvis = () => (exemples ? EXEMPLES : []).concat(etat.avis);

  // ---------- Parcours guidé ----------
  const ROLES = { resp: "Responsable", billet: "Billetterie", comm: "Communication", regie: "Régie du soir", photo: "Photographe", auto: "Automatique" };
  const CONCERT = new Date(C.concert.dateIso + "T12:00:00");
  const PHASES = [
    ["Une fois par saison", -60, [
      ["identite", "Identité de l'orchestre : nom, couleurs, logo", "resp"],
      ["equipe", "Équipe : inviter chaque personne et lui donner son rôle", "resp"],
      ["partenaires", "Partenaires et mécènes : logos, mentions, mot audio du mécène", "comm"],
      ["rgpd", "Textes de consentement et page données personnelles", "resp"],
      ["billetterie", "Lien et QR code du guide dans l'email de confirmation", "billet"],
      ["supports", "Affiche d'accueil et feuillet de salle imprimés", "comm"],
    ]],
    ["J-30", -30, [
      ["programme", "Programme et œuvres du concert", "resp"],
      ["parole", "Parole des interprètes, en vidéo ou en audio", "resp"],
      ["cles", "Clés d'écoute et épisode (Double Dièse)", "resp"],
    ]],
    ["J-21", -21, [
      ["validation", "Relire et valider les contenus", "resp"],
      ["horaires", "Horaires, durée, message du noir", "resp"],
      ["prochain", "Annonce du prochain concert", "comm"],
    ]],
    ["J-7", -7, [["anterieurs", "Envoyer le guide aux spectateurs qui ont acheté avant son ouverture", "billet", "rappel"]]],
    ["J-3", -3, [["rappel", "Rappel pratique aux acheteurs : lieu, heure, lien du guide", "billet", "rappel"]]],
    ["J-1", -1, [["bis", "Demander au soliste et au chef les bis prévus", "regie"]]],
    ["Le jour du concert", 0, [
      ["reseau", "Vérifier le réseau dans la salle", "regie"],
      ["code", "Confier la Régie : générer le code du soir", "resp", "equipe"],
      ["portes", "QR codes aux portes, consignes à l'accueil", "billet"],
      ["intro", "Mot d'accueil : annoncer le bis et les photos à la sortie", "resp", "intro"],
      ["bascules", "Portes, début, entracte, reprise, fin : depuis la Régie", "regie", "soir"],
      ["photos", "Publier quatre à six photos de la soirée", "photo", "soir"],
    ]],
    ["Le lendemain", 1, [
      ["moderation", "Relire les mots du public", "comm", "public"],
      ["lendemain", "Envoyer l'email du lendemain", "comm", "lendemain"],
      ["nuage", "Publier le nuage de mots sur les réseaux", "comm", "public"],
      ["export", "Exporter les nouveaux contacts vers votre fichier", "billet", "public"],
    ]],
    ["J+7", 7, [
      ["bilan", "Bilan du concert", "resp", "bilan"],
      ["mecene", "Rapport de visibilité au mécène", "comm"],
    ]],
    ["J+30", 30, [["fermeture", "Le mot du public se ferme, le guide reste lisible", "auto"]]],
  ];
  const aujourdhui = () => { const d = new Date(); d.setHours(12, 0, 0, 0); return d; };
  const jours = Math.round((CONCERT - aujourdhui()) / 864e5);
  const dateDe = (decalage) => { const d = new Date(CONCERT); d.setDate(d.getDate() + decalage); return d; };
  const fmt = (d) => d.toLocaleDateString("fr-FR", { weekday: "short", day: "numeric", month: "short" });
  if (!faits) {
    faits = {};
    PHASES.forEach(([, dec, taches]) => taches.forEach(([id]) => { if (dateDe(dec) < aujourdhui() && id !== "validation") faits[id] = true; }));
    DC.ecrire("dc-parcours", faits);
  }

  // ---------- Écrans ----------
  const onglets = [["soir", "Ce soir"], ["public", "Public"], ["parcours", "Parcours"], ["equipe", "Équipe"]];
  const entete = () => `<div class="entete">${DC.contenu.logo ? `<img class="logo-orchestre" src="assets/${esc(DC.contenu.logo)}" alt="${esc(DC.contenu.orchestre)}">` : ""}<span style="text-align:right"><strong>Espace de l'orchestre</strong><br>Da Capo</span></div>
    <nav class="fil" aria-label="Rubriques">${onglets.map(([k, l]) => `<button data-onglet="${k}" ${onglet === k ? 'aria-current="page"' : ""}>${l}</button>`).join("")}</nav>`;

  const statutHtml = () => ({
    connexion: "Connexion au relais…",
    connecte: "Relié en direct aux téléphones des spectateurs.",
    reconnexion: "Connexion perdue, reconnexion en cours…",
    "hors-ligne": "Relais injoignable : la démonstration fonctionne sur chaque téléphone séparément.",
  }[statut]);

  function ongletSoir() {
    const presents = Object.keys(etat.presents).length;
    const BOUTONS = [["portes", "Portes ouvertes"], ["commence", "Le concert commence"], ["entracte", "Entracte"], ["reprise", "Reprise"], ["apres", "Le concert est terminé"]];
    const rang = DC.MOMENTS.indexOf(etat.moment);
    return `<h1>Ce soir</h1>
      <p class="meta">${esc(C.concert.date)}, ${esc(C.concert.heure)}, ${esc(C.concert.lieu)}</p>
      ${presents && !voirQr ? `<div class="bloc" style="display:flex;justify-content:space-between;align-items:center;gap:12px"><p class="sans" style="margin:0;color:var(--fort)">${presents} ${presents > 1 ? "spectateurs reliés" : "spectateur relié"}</p><button class="bouton discret" style="width:auto;min-height:40px" data-action="voir-qr">Afficher le QR code</button></div>` : `<div class="bloc">
        <h3>Faire entrer un spectateur</h3>
        <p class="petit" style="margin:6px 0 12px">Faites scanner ce code. Le téléphone qui le scanne devient celui d'un spectateur.</p>
        <div style="max-width:220px;margin:0 auto">${DC.qrSvg(urlGuide(), 220)}</div>
        <p class="sans" style="text-align:center;margin:10px 0 0;font-size:16px;color:var(--fort)">${presents} ${presents > 1 ? "spectateurs reliés" : "spectateur relié"}</p>
        <p class="petit" style="text-align:center;margin:4px 0 0">${statutHtml()}</p>
        ${presents ? `<button class="bouton discret" style="margin-top:10px" data-action="voir-qr">Replier</button>` : ""}
      </div>`}
      <h2>La soirée</h2>
      <p class="petit">Chaque bascule change l'écran de tous les spectateurs. Elles sont toujours déclenchées à la main : c'est vous qui savez quand le chef entre.</p>
      <div style="display:grid;gap:8px;margin-top:12px">${BOUTONS.map(([m, l], i) => {
        const ici = etat.moment === m, passe = DC.MOMENTS.indexOf(m) < rang;
        return `<button class="bouton ${ici ? "" : "trait"}" style="min-height:58px;justify-content:space-between" data-moment="${m}" ${ici ? 'aria-current="true"' : ""}><span>${l}</span><span class="petit" style="color:inherit;opacity:.8">${ici ? "En cours" : passe ? "Fait" : ""}</span></button>`;
      }).join("")}</div>
      <button class="bouton discret" style="margin-top:8px" data-moment="avant">Revenir à « avant le concert »</button>
      <h2>Le bis</h2>
      <input type="text" id="bis" maxlength="120" placeholder="Par exemple : Schubert, Rosamunde, entracte" value="${esc(bisBrouillon || etat.bis)}">
      <div class="rangee" style="margin-top:10px"><button class="bouton" data-action="bis">Afficher aux spectateurs</button><button class="bouton trait" data-action="bis-effacer" ${etat.bis ? "" : "disabled"}>Effacer</button></div>
      <h2>Message à toute la salle</h2>
      ${etat.message ? `<div class="message ${etat.niveau === "urgent" ? "urgent" : ""}">${esc(etat.message)}</div>` : ""}
      <div class="choix" style="margin:12px 0 10px">
        <button data-modele="Le concert commencera avec dix minutes de retard. Merci de votre patience.">Retard</button>
        <button data-modele="Le bar de la Halle est ouvert pendant l'entracte.">Entracte</button>
        <button data-modele="Orage : merci de rester dans la salle à la fin du concert, le temps que la pluie passe." data-urgent>Météo</button>
      </div>
      <textarea id="message" rows="3" maxlength="300" placeholder="Votre message">${esc(msgBrouillon)}</textarea>
      <div class="choix" role="group" aria-label="Niveau" style="margin-top:10px"><button data-niveau-msg="information" aria-pressed="${niveau === "information"}">Information</button><button data-niveau-msg="urgent" aria-pressed="${niveau === "urgent"}">Urgent</button></div>
      <div class="rangee" style="margin-top:10px"><button class="bouton" data-action="message">Afficher</button><button class="bouton trait" data-action="message-retirer" ${etat.message ? "" : "disabled"}>Retirer</button></div>
      <h2>Photos de la soirée</h2>
      <p class="petit">${etat.photos.length ? `${etat.photos.length} photo${etat.photos.length > 1 ? "s" : ""} publiée${etat.photos.length > 1 ? "s" : ""}. ` : ""}Elles apparaissent chez les spectateurs dans « Après le concert ».</p>
      ${envoiPhoto ? `<p class="bouton" style="margin-top:8px" role="status">${envoiPhoto}</p>` : `<label class="bouton" style="margin-top:8px" for="photo-appareil">Prendre une photo</label><label class="bouton discret" style="margin-top:8px" for="photo">Choisir dans l'album</label>`}
      <h2>Démonstration</h2>
      <p class="petit">Remise à zéro de la soirée : moment, bis, message, photos et avis. Les spectateurs reliés restent reliés.</p>
      <button class="bouton discret" data-action="reset">Tout remettre à zéro</button>
      <button class="bouton discret" style="margin-top:8px" data-action="seance">Nouvelle séance avec un nouveau QR code</button>`;
  }

  function ongletPublic() {
    const avis = tousAvis(), reels = etat.avis;
    const freqs = DC.frequences(avis, etat.masques);
    const venues = Object.values(etat.venues), invites = venues.filter((v) => v === "invite").length;
    const rep = { oui: 0, "peut-etre": 0, non: 0 }; avis.forEach((a) => a.reviendrait && rep[a.reviendrait]++);
    const totalRep = rep.oui + rep["peut-etre"] + rep.non || 1;
    const motsDistincts = [...new Set(avis.map((a) => a.mot.trim().toLowerCase()).filter(Boolean))];
    return `<h1>Votre public</h1>
      <p class="meta">Ce soir, en direct</p>
      <div class="bloc plein">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px" class="sans">
          ${[["Spectateurs reliés", Object.keys(etat.presents).length], ["Venus invités", venues.length ? `${invites} sur ${venues.length}` : "0"], ["Avis reçus", reels.length], ["Contacts laissés", reels.filter((a) => a.contact).length]]
            .map(([l, v]) => `<div><div style="font-size:26px;color:var(--fort);font-family:var(--serif)">${v}</div><div class="petit">${l}</div></div>`).join("")}
        </div>
      </div>
      <label class="case"><input type="checkbox" id="exemples" ${exemples ? "checked" : ""}> Inclure ${EXEMPLES.length} avis d'exemple</label>
      <h2>Les mots du public</h2>
      ${freqs.length ? DC.nuageHtml(freqs) : `<p class="doux">Les mots arrivent ici dès que les spectateurs répondent, à la fin du concert.</p>`}
      <button class="bouton discret" data-action="nuage-image" ${freqs.length ? "" : "disabled"}>Télécharger le nuage pour les réseaux</button>
      <h2>Relire avant l'envoi</h2>
      <p class="petit">Un mot retiré ici disparaît du nuage public et de l'email du lendemain. Vous continuez de le voir.</p>
      <div class="choix" style="margin-top:10px">${motsDistincts.map((m) => `<button data-masque="${esc(m)}" aria-pressed="${etat.masques.includes(m)}">${etat.masques.includes(m) ? "Retiré : " : ""}${esc(m)}</button>`).join("") || '<span class="doux">Aucun mot pour l\'instant.</span>'}</div>
      <h2>Reviendraient-ils ?</h2>
      ${[["oui", "Oui"], ["peut-etre", "Peut-être"], ["non", "Non"]].map(([k, l]) => `<div class="sans" style="margin:8px 0"><div style="display:flex;justify-content:space-between;font-size:15px"><span>${l}</span><span class="doux">${Math.round((rep[k] / totalRep) * 100)} %</span></div><div style="height:4px;background:var(--ligne)"><div style="height:4px;width:${(rep[k] / totalRep) * 100}%;background:var(--accent)"></div></div></div>`).join("")}
      <h2>Derniers avis</h2>
      ${avis.filter((a) => a.moment || !a.exemple).slice(-6).reverse().map((a) => `<div style="border-top:1px solid var(--ligne);padding:12px 0"><p style="margin:0;font-style:italic;font-size:20px;color:var(--fort)">${esc(a.mot || "…")}</p>${a.moment ? `<p style="margin:2px 0 0">${esc(a.moment)}</p>` : ""}<p class="petit" style="margin:4px 0 0">${a.exemple ? "Exemple" : "Ce soir"}${a.venue === "invite" ? ", venu invité" : ""}${a.contact ? ", a laissé son email" : ""}</p></div>`).join("")}
      <h2>Le lendemain</h2>
      <div class="rangee"><button class="bouton trait" data-apercu="lendemain">Aperçu de l'email</button><button class="bouton trait" data-action="export">Exporter les avis</button></div>
      <h2>Sur la saison</h2>
      <p class="petit">Chiffres d'exemple : ils se calculent seuls, concert après concert.</p>
      <div class="bloc">${[["Spectateurs qui ouvrent le guide avant de venir", "64 %"], ["Part des spectateurs venus invités", "23 %"], ["Nouveaux contacts, accompagnants compris", "412"], ["Écoutes de l'épisode", "1 870"], ["Spectateurs qui disent vouloir revenir", "81 %"]]
        .map(([l, v]) => `<div class="sans" style="display:flex;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px solid var(--ligne);font-size:15px"><span>${l}</span><strong style="color:var(--fort)">${v}</strong></div>`).join("")}</div>
      <button class="bouton trait" data-apercu="bilan">Aperçu du bilan du concert</button>`;
  }

  function ongletParcours() {
    let total = 0, faitsN = 0, retard = 0;
    PHASES.forEach(([, dec, ts]) => ts.forEach(([id, , r]) => { if (role !== "tous" && r !== role) return; total++; if (faits[id]) faitsN++; else if (dateDe(dec) < aujourdhui() && r !== "auto") retard++; }));
    const phases = PHASES.map(([nom, dec, ts]) => {
      const visibles = ts.filter(([, , r]) => role === "tous" || r === role);
      if (!visibles.length) return "";
      const date = dec === -60 ? "Avant l'ouverture de la saison" : fmt(dateDe(dec));
      return `<section style="margin-top:24px"><h3>${nom}</h3><p class="petit" style="margin:2px 0 8px">${date}</p>
        ${visibles.map(([id, l, r, lien]) => {
          const enRetard = !faits[id] && dateDe(dec) < aujourdhui() && r !== "auto";
          return `<div style="display:flex;gap:12px;align-items:flex-start;border-top:1px solid var(--ligne);padding:12px 0">
            <input type="checkbox" data-tache="${id}" ${faits[id] ? "checked" : ""} ${r === "auto" ? "disabled" : ""} aria-label="${esc(l)}" style="width:22px;height:22px;margin-top:3px;flex:none;accent-color:var(--accent)">
            <div style="flex:1"><p style="margin:0;${faits[id] ? "color:var(--doux);text-decoration:line-through;text-decoration-thickness:1px" : "color:var(--fort)"}">${esc(l)}</p>
            <p class="petit" style="margin:2px 0 0">${ROLES[r]}${enRetard ? ' <span style="color:var(--brique);font-weight:500">en retard</span>' : ""}</p>
            ${lien ? `<button class="petit" style="background:none;border:0;padding:6px 0 0;color:var(--accent);cursor:pointer;text-decoration:underline;text-underline-offset:3px" ${["soir", "public", "equipe"].includes(lien) ? `data-onglet="${lien}"` : `data-apercu="${lien}"`}>${{ soir: "Ouvrir la Régie", public: "Ouvrir le tableau de bord", equipe: "Générer le code", rappel: "Aperçu de l'email", lendemain: "Aperçu de l'email", intro: "Texte proposé", bilan: "Aperçu du bilan" }[lien]}</button>` : ""}</div></div>`;
        }).join("")}</section>`;
    }).join("");
    return `<h1>Parcours</h1>
      <p class="meta">${esc(C.concert.titre)}, ${esc(C.concert.date.toLowerCase())}</p>
      <p class="accroche">${jours > 1 ? `J-${jours}.` : jours === 1 ? "Demain." : jours === 0 ? "C'est ce soir." : `J+${-jours}.`} ${faitsN} tâche${faitsN > 1 ? "s" : ""} sur ${total} faite${faitsN > 1 ? "s" : ""}${retard ? `, <span style="color:var(--brique)">${retard} en retard</span>` : ""}.</p>
      <div style="height:4px;background:var(--ligne);margin:4px 0 16px"><div style="height:4px;width:${total ? (faitsN / total) * 100 : 0}%;background:var(--accent)"></div></div>
      <p class="petit" style="margin-bottom:8px">Chacun ne voit que ses tâches. Dans un petit festival, une seule personne a tous les rôles.</p>
      <div class="choix">${[["tous", "Tous les rôles"], ["resp", "Responsable"], ["billet", "Billetterie"], ["comm", "Communication"], ["regie", "Régie"], ["photo", "Photographe"]].map(([k, l]) => `<button data-role="${k}" aria-pressed="${role === k}">${l}</button>`).join("")}</div>
      ${phases}`;
  }

  function ongletEquipe() {
    const valide = dateDe(1); valide.setHours(6, 0, 0, 0);
    return `<h1>Équipe</h1>
      <p class="accroche">Le responsable du compte se connecte avec son email. Pour la soirée, il confie la Régie avec un code à six chiffres, valable pour ce seul concert.</p>
      <h2>Les rôles</h2>
      ${[["Responsable du compte", "Vous", "Paramétrage, validation des contenus, bilans"], ["Billetterie et relations avec le public", "À inviter", "Emails aux acheteurs, accueil, contacts"], ["Communication", "À inviter", "Partenaires, réseaux, email du lendemain"], ["Régie du soir", "Par code", "Bascules, bis, message à la salle"], ["Photographe", "Par code", "Photos de la soirée"]]
        .map(([r, qui, quoi]) => `<div style="border-top:1px solid var(--ligne);padding:12px 0;display:flex;justify-content:space-between;gap:12px"><div><p style="margin:0;color:var(--fort)">${r}</p><p class="petit" style="margin:2px 0 0">${quoi}</p></div><p class="petit" style="margin:2px 0 0;white-space:nowrap">${qui}</p></div>`).join("")}
      <button class="bouton trait" style="margin-top:10px" data-action="inviter">Inviter une personne</button>
      <h2>Codes de la soirée</h2>
      <p class="petit">Un code par personne. Il ouvre la Régie de ce concert jusqu'au ${fmt(valide)}, 6 h.</p>
      ${codes.map((c, i) => `<div class="bloc" style="display:flex;justify-content:space-between;align-items:center;gap:10px"><div><p style="margin:0;font-family:var(--sans);font-size:26px;letter-spacing:.12em;color:var(--fort)">${c.code}</p><p class="petit" style="margin:0">${esc(c.pour)}</p></div><div style="display:grid;gap:6px"><a class="bouton discret" style="min-height:40px" href="sms:?&body=${encodeURIComponent(`Votre code Régie Da Capo pour le concert du 14 novembre : ${c.code}`)}">Envoyer par SMS</a><button class="bouton discret" style="min-height:40px" data-revoquer="${i}">Révoquer</button></div></div>`).join("")}
      <div class="choix" style="margin-top:12px"><button data-code="Régie du soir">Code pour la Régie</button><button data-code="Photographe">Code pour le photographe</button></div>`;
  }

  // ---------- Aperçus ----------
  function apercuHtml() {
    const lien = urlGuide();
    const nuage = DC.nuageHtml(DC.frequences(tousAvis(), etat.masques).map(([m, n]) => [m, n]));
    const pages = {
      rappel: `<div class="email"><div class="tete">De : Orchestre national du Capitole<br>Objet : Samedi, 20 h, Halle aux Grains : votre guide est prêt</div><div class="corps">${DC.contenu.logo ? `<img src="assets/${esc(DC.contenu.logo)}" alt="" style="height:44px;display:block;margin:0 0 14px">` : ""}
        <h3>À samedi</h3><p>Samedi 14 novembre, 20 h, Halle aux Grains. Le concert dure une heure et demie avec un entracte.</p>
        <p>Votre guide d'écoute est prêt : la parole des interprètes, les clés de chaque œuvre, un épisode de huit minutes à écouter quand vous voulez d'ici le concert.</p>
        <div class="qr">${DC.qrSvg(lien, 140)}</div><p><a href="${esc(lien)}">Ouvrir mon guide</a></p>
        <p style="font-size:13px;color:#545a66">Vous venez accompagné ? Transférez-leur cet email : le guide est pour eux aussi.</p></div></div>`,
      lendemain: `<div class="email"><div class="tete">De : Orchestre national du Capitole<br>Objet : Hier soir, en un mot</div><div class="corps">${DC.contenu.logo ? `<img src="assets/${esc(DC.contenu.logo)}" alt="" style="height:44px;display:block;margin:0 0 14px">` : ""}
        <h3>Merci pour cette soirée</h3><p>Nous avons demandé au public de résumer la soirée en un mot. Voici ceux qui sont revenus le plus souvent.</p>
        <div style="background:#f3f1ec;border-radius:3px">${nuage || '<p style="padding:14px;margin:0">Le nuage de mots s\'affiche ici.</p>'}</div>
        ${etat.bis ? `<p>Le bis d'hier soir : ${esc(etat.bis)}.</p>` : ""}
        ${etat.photos.length ? `<div class="photos">${etat.photos.slice(0, 4).map((u) => `<img src="${esc(u)}" alt="">`).join("")}</div>` : ""}
        <p>Vous n'avez pas eu le temps de laisser un mot hier soir ? <a href="${esc(lien)}">Donner mon avis</a></p>
        <p>Prochain concert de votre saison : ${esc(C.prochain.date)}, ${esc(C.prochain.titre)}, avec ${esc(C.prochain.oeuvre)}.</p></div></div>`,
      intro: `<div class="bloc plein"><p style="margin:0">« Bonsoir. Ce soir, le guide de votre téléphone vous accompagne. Il va passer au noir quand le chef entrera : c'est le moment de le ranger. À l'entracte, il vous présente la seconde partie. Et à la fin du concert, vous y trouverez le bis et les photos de la soirée, et vous pourrez nous dire, en un mot, ce que vous avez ressenti. »</p></div><p class="petit">Texte proposé, à adapter. Lu en trente secondes.</p>`,
      bilan: `<div class="bloc"><h3>Bilan du concert du 14 novembre</h3><p class="petit" style="margin:2px 0 14px">Généré automatiquement à J+7 (exemple)</p>
        ${[["Spectateurs ayant ouvert le guide", "1 106 sur 1 720 billets"], ["Venus invités", "24 %"], ["Avis laissés", "318"], ["Nouveaux contacts", "141, dont 37 accompagnants"], ["Reviendraient", "84 %"], ["Écoutes de l'épisode", "512"], ["Mot du mécène écouté", "389 fois"]]
          .map(([l, v]) => `<div class="sans" style="display:flex;justify-content:space-between;gap:12px;padding:7px 0;border-bottom:1px solid var(--ligne);font-size:15px"><span>${l}</span><strong style="color:var(--fort)">${v}</strong></div>`).join("")}
        <p style="margin-top:14px">À joindre à vos comptes rendus pour la DRAC, la Ville et vos mécènes.</p></div>`,
    };
    const titres = { rappel: "Email de rappel, J-3", lendemain: "Email du lendemain", intro: "Mot d'accueil", bilan: "Bilan du concert" };
    return `<div role="dialog" aria-label="${titres[apercu]}" style="position:fixed;inset:0;z-index:60;background:var(--fond);overflow:auto"><div class="colonne" style="padding-bottom:40px">
      <div class="entete"><strong>${titres[apercu]}</strong><button data-action="fermer" class="sans" style="background:none;border:0;min-height:40px;cursor:pointer;color:var(--accent)">Fermer</button></div>
      ${pages[apercu]}<p class="petit">Aperçu. L'envoi passe par l'outil d'emailing de l'orchestre.</p></div></div>`;
  }

  // ---------- Rendu ----------
  function rendre() {
    document.body.className = (onglet === "soir" ? "mode-salle" : "mode-jour") + " espace";
    const actif = document.activeElement && document.activeElement.id;
    const contenu = { soir: ongletSoir, public: ongletPublic, parcours: ongletParcours, equipe: ongletEquipe }[onglet]();
    app.innerHTML = `<div class="colonne">${entete()}${contenu}<footer class="pied"><img src="assets/logo-dd.png" alt=""><span>Da Capo. Démonstration réalisée par Double Dièse, sans lien officiel avec l'orchestre.</span></footer></div>${apercu ? apercuHtml() : ""}`;
    if (actif && document.getElementById(actif)) document.getElementById(actif).focus();
  }

  app.addEventListener("input", (e) => {
    if (e.target.id === "message") msgBrouillon = e.target.value;
    if (e.target.id === "bis") bisBrouillon = e.target.value;
  });

  app.addEventListener("change", async (e) => {
    if (e.target.id === "exemples") { exemples = e.target.checked; return rendre(); }
    if (e.target.dataset.tache) { faits[e.target.dataset.tache] = e.target.checked; DC.ecrire("dc-parcours", faits); return rendre(); }

  });

  // Le champ photo vit hors de la zone redessinée : un événement reçu pendant la prise de vue ne le détruit pas.
  // Deux champs : l'un ouvre directement l'appareil photo, l'autre l'album (certains téléphones ne proposent pas les deux).
  ["photo", "photo-appareil"].forEach((id) => { const champPhoto = document.getElementById(id);
  champPhoto.addEventListener("change", async () => {
    const f = champPhoto.files[0]; if (!f) return;
    envoiPhoto = "Envoi de la photo…"; rendre();
    try {
      const blob = await DC.compresser(f);
      if (statut === "hors-ligne") { etat = DC.appliquer(etat, { t: "photo", url: URL.createObjectURL(blob) }); }
      else await canal.envoyerPhoto(blob);
      DC.toast("Photo publiée.");
    } catch { DC.toast("La photo n'est pas partie. Réessayez."); }
    champPhoto.value = ""; envoiPhoto = ""; rendre();
  }); });

  app.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    if (b.dataset.onglet) { onglet = b.dataset.onglet; apercu = null; DC.ecrire("dc-espace-onglet", onglet); window.scrollTo(0, 0); return rendre(); }
    if (b.dataset.apercu) { apercu = b.dataset.apercu; return rendre(); }
    if (b.dataset.moment) {
      const noms = { avant: "Retour avant le concert", portes: "Portes ouvertes", commence: "Le concert commence", entracte: "Entracte", reprise: "Reprise", apres: "Le concert est terminé" };
      return envoyer({ t: "moment", v: b.dataset.moment }, noms[b.dataset.moment] + " : envoyé aux spectateurs.");
    }
    if (b.dataset.modele) { msgBrouillon = b.dataset.modele; niveau = b.hasAttribute("data-urgent") ? "urgent" : "information"; return rendre(); }
    if (b.dataset.niveauMsg) { niveau = b.dataset.niveauMsg; return rendre(); }
    if (b.dataset.masque) { const m = b.dataset.masque; return envoyer({ t: "masque", mot: m, on: !etat.masques.includes(m) }); }
    if (b.dataset.role) { role = b.dataset.role; return rendre(); }
    if (b.dataset.code) {
      const code = String(crypto.getRandomValues(new Uint32Array(1))[0] % 900000 + 100000);
      codes.push({ code, pour: b.dataset.code }); DC.ecrire("dc-codes", codes); return rendre();
    }
    if (b.dataset.revoquer) { codes.splice(+b.dataset.revoquer, 1); DC.ecrire("dc-codes", codes); DC.toast("Code révoqué : il n'ouvre plus la Régie."); return rendre(); }
    const a = b.dataset.action;
    if (a === "fermer") { apercu = null; return rendre(); }
    if (a === "voir-qr") { voirQr = !voirQr; return rendre(); }
    if (a === "bis") { const v = (document.getElementById("bis").value || "").trim(); if (!v) return DC.toast("Écrivez le compositeur et l'œuvre."); bisBrouillon = ""; return envoyer({ t: "bis", v }, "Bis affiché aux spectateurs."); }
    if (a === "bis-effacer") { bisBrouillon = ""; return envoyer({ t: "bis", v: "" }, "Bis effacé."); }
    if (a === "message") { const v = msgBrouillon.trim(); if (!v) return DC.toast("Écrivez le message à afficher."); return envoyer({ t: "msg", v, niveau }, "Message affiché à toute la salle."); }
    if (a === "message-retirer") return envoyer({ t: "msg", v: "" }, "Message retiré.");
    if (a === "reset") { if (confirm("Remettre la soirée à zéro ?")) envoyer({ t: "reset" }, "Soirée remise à zéro."); return; }
    if (a === "seance") { if (!confirm("Créer une nouvelle séance ? Les spectateurs actuels devront scanner le nouveau code.")) return; DC.ecrire("dc-espace-session", DC.id(10)); location.reload(); return; }
    if (a === "inviter") return DC.toast("Dans la version finale, la personne reçoit une invitation par email avec son rôle.");
    if (a === "nuage-image") return nuageImage();
    if (a === "export") return exporter();
  });

  function nuageImage() {
    const freqs = DC.frequences(tousAvis(), etat.masques).slice(0, 18);
    const c = document.createElement("canvas"); c.width = c.height = 1080;
    const g = c.getContext("2d");
    g.fillStyle = "#f3f1ec"; g.fillRect(0, 0, 1080, 1080);
    g.fillStyle = "#2f4f86"; g.font = "500 30px 'IBM Plex Sans', sans-serif"; g.textAlign = "center";
    g.fillText("Samedi 14 novembre, Halle aux Grains", 540, 110);
    g.fillStyle = "#545a66"; g.font = "28px 'IBM Plex Sans', sans-serif"; g.fillText("Le concert en un mot, par son public", 540, 156);
    const max = freqs[0][1]; let y = 300, ligne = [], largeur = 0;
    const poser = () => { let x = 540 - largeur / 2; ligne.forEach(([m, t]) => { g.font = `italic 600 ${t}px 'Source Serif 4', serif`; g.fillStyle = "#1c1f26"; g.textAlign = "left"; g.fillText(m, x, y); x += g.measureText(m).width + 34; }); };
    freqs.forEach(([m, n]) => {
      const t = Math.round(44 + 70 * (n / max)); g.font = `italic 600 ${t}px 'Source Serif 4', serif`;
      const w = g.measureText(m).width + 34;
      if (largeur + w > 920 && ligne.length) { poser(); y += 120; ligne = []; largeur = 0; }
      ligne.push([m, t]); largeur += w;
    });
    if (ligne.length) poser();
    g.fillStyle = "#545a66"; g.font = "26px 'IBM Plex Sans', sans-serif"; g.textAlign = "center"; g.fillText("Orchestre national du Capitole de Toulouse", 540, 1010);
    c.toBlob((b) => { const a = document.createElement("a"); a.href = URL.createObjectURL(b); a.download = "nuage-14-novembre.png"; document.body.appendChild(a); a.click(); a.remove(); }, "image/png");
  }

  function exporter() {
    const lignes = [["Mot", "Moment marqué", "Reviendrait", "Venu invité", "Contact laissé", "Origine"]].concat(tousAvis().map((a) => [a.mot, a.moment, a.reviendrait, a.venue === "invite" ? "oui" : "non", a.contact ? "oui" : "non", a.exemple ? "exemple" : "ce soir"]));
    const csv = "﻿" + lignes.map((l) => l.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(";")).join("\r\n");
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" })); a.download = "avis-14-novembre.csv";
    document.body.appendChild(a); a.click(); a.remove();
  }

  rendre();
})();

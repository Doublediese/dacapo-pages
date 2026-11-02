// Outils partagés : relais temps réel entre les téléphones, état de la soirée, petits utilitaires.
// Le relais est un service public de messages (ntfy.sh) : aucune base de données, aucune donnée personnelle.
window.DC = window.DC || {};
(function () {
  const params = new URLSearchParams(location.search);
  DC.RELAIS = (params.get("relais") || "https://ntfy.sh").replace(/\/$/, "");

  // Échappe le texte et pose les espaces insécables de la typographie française (avant : ; ! ? », après «).
  DC.esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])).replace(/ ([:;!?»])/g, "\u00a0$1").replace(/« /g, "«\u00a0");
  DC.id = (n = 10) => Array.from(crypto.getRandomValues(new Uint8Array(n)), (b) => "abcdefghjkmnpqrstuvwxyz23456789"[b % 31]).join("");
  DC.lire = (k, d) => { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch { return d; } };
  DC.ecrire = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* navigation privée */ } };

  let minuteur;
  DC.toast = (texte) => {
    let t = document.querySelector(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.textContent = texte; t.classList.remove("cache");
    clearTimeout(minuteur); minuteur = setTimeout(() => t.classList.add("cache"), 3200);
  };

  DC.qrSvg = (texte, taille = 200) => {
    const qr = qrcode(0, "M"); qr.addData(texte); qr.make();
    const n = qr.getModuleCount(), m = 4, c = taille / (n + 2 * m);
    let d = "";
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (qr.isDark(y, x)) d += `M${(x + m) * c},${(y + m) * c}h${c}v${c}h-${c}z`;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${taille} ${taille}" width="100%" role="img" aria-label="QR code"><rect width="100%" height="100%" fill="#fff"/><path d="${d}" fill="#1c1f26"/></svg>`;
  };

  // --- État de la soirée, reconstruit à partir de la suite des événements ---
  DC.MOMENTS = ["avant", "portes", "commence", "entracte", "reprise", "apres"];
  DC.etatVide = () => ({ moment: "avant", bis: "", message: "", niveau: "information", photos: [], avis: [], venues: {}, presents: {}, masques: [] });
  DC.appliquer = (e, ev) => {
    switch (ev.t) {
      case "reset": { const vide = DC.etatVide(); vide.presents = e.presents; return vide; }
      case "moment": if (DC.MOMENTS.includes(ev.v)) e.moment = ev.v; break;
      case "bis": e.bis = String(ev.v || "").slice(0, 200); break;
      case "msg": e.message = String(ev.v || "").slice(0, 300); e.niveau = ev.niveau === "urgent" ? "urgent" : "information"; break;
      case "photo": if (ev.url && !e.photos.includes(ev.url)) e.photos.push(ev.url); break;
      case "hello": e.presents[ev.id] = ev.at || Date.now(); break;
      case "venue": e.venues[ev.id] = ev.v; break;
      case "avis": if (!e.avis.some((a) => a.cle === ev.cle)) e.avis.push({ cle: ev.cle, mot: String(ev.mot || "").slice(0, 40), moment: String(ev.moment || "").slice(0, 200), reviendrait: ev.reviendrait || "", contact: !!ev.contact, venue: ev.venue || "" }); break;
      case "masque": e.masques = ev.on ? [...new Set([...e.masques, ev.mot])] : e.masques.filter((m) => m !== ev.mot); break;
    }
    return e;
  };

  // --- Relais ---
  // canal(session, onEvenement, onStatut) : écoute, rejoue l'historique, puis suit en direct.
  DC.canal = (session, onEvenement, onStatut) => {
    const sujet = "dacapo-demo-" + session;
    let source, ouvert = false, vus = new Set();
    const brancher = () => {
      source = new EventSource(`${DC.RELAIS}/${sujet}/sse?since=all`);
      source.onopen = () => { ouvert = true; onStatut && onStatut("connecte"); };
      source.onmessage = (m) => {
        let d; try { d = JSON.parse(m.data); } catch { return; }
        if (d.event !== "message" || vus.has(d.id)) return;
        vus.add(d.id);
        if (d.attachment && d.attachment.url) return onEvenement({ t: "photo", url: d.attachment.url });
        try { onEvenement(JSON.parse(d.message)); } catch { /* message étranger, ignoré */ }
      };
      source.onerror = () => { onStatut && onStatut(ouvert ? "reconnexion" : "hors-ligne"); };
    };
    brancher();
    setTimeout(() => { if (!ouvert) onStatut && onStatut("hors-ligne"); }, 8000);
    return {
      envoyer: (ev) => fetch(`${DC.RELAIS}/${sujet}`, { method: "POST", body: JSON.stringify({ ...ev, at: Date.now() }) }).then((r) => { if (!r.ok) throw new Error(r.status); }),
      // POST sans en-tête particulier : le navigateur n'a pas à négocier l'accès (CORS) avec le relais.
      envoyerPhoto: async (blob) => { const r = await fetch(`${DC.RELAIS}/${sujet}?filename=photo-${Date.now()}.jpg`, { method: "POST", body: await blob.arrayBuffer() }); if (!r.ok) throw new Error(r.status); },
      fermer: () => source && source.close(),
    };
  };

  // Réduit une photo avant envoi (côté le plus long : 1280 px).
  DC.compresser = (fichier) => new Promise((ok, ko) => {
    const img = new Image();
    img.onload = () => {
      const k = Math.min(1, 1280 / Math.max(img.width, img.height));
      const c = document.createElement("canvas"); c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
      c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
      c.toBlob((b) => (b ? ok(b) : ko(new Error("compression"))), "image/jpeg", 0.82);
      URL.revokeObjectURL(img.src);
    };
    img.onerror = () => ko(new Error("image"));
    img.src = URL.createObjectURL(fichier);
  });

  // Fréquence des mots, sans les mots masqués par l'équipe.
  DC.frequences = (avis, masques = []) => {
    const f = {};
    avis.forEach((a) => { const m = a.mot.trim().toLowerCase(); if (m && !masques.includes(m)) f[m] = (f[m] || 0) + 1; });
    return Object.entries(f).sort((a, b) => b[1] - a[1]);
  };
  DC.nuageHtml = (freqs) => {
    if (!freqs.length) return "";
    const max = freqs[0][1];
    return `<div class="nuage">${freqs.slice(0, 30).map(([m, n]) => `<span style="font-size:${18 + 18 * (n / max)}px">${DC.esc(m)}</span>`).join("")}</div>`;
  };
})();

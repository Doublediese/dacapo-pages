// Outils partagés des trois vues : relais en direct, stockage local, QR codes, petits utilitaires.
// Le relais est un service public de messages (ntfy.sh) : aucune base de données. Dans le même
// navigateur, un BroadcastChannel prend le relais si le réseau bloque ntfy.
window.DC = window.DC || {};
(function () {
  const params = new URLSearchParams(location.search);
  DC.params = params;
  DC.RELAIS = (params.get("relais") || "https://ntfy.sh").replace(/\/$/, "");

  DC.esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])).replace(/ ([:;!?»])/g, " $1").replace(/« /g, "« ");
  DC.id = (n = 8) => Array.from(crypto.getRandomValues(new Uint8Array(n)), (b) => "abcdefghjkmnpqrstuvwxyz23456789"[b % 31]).join("");

  const P = "sp-";
  DC.lire = (k, d) => { try { const v = localStorage.getItem(P + k); return v === null ? d : JSON.parse(v); } catch { return d; } };
  DC.ecrire = (k, v) => { try { localStorage.setItem(P + k, JSON.stringify(v)); } catch { /* navigation privée */ } };

  let minuteur;
  DC.toast = (texte, classe = "") => {
    let t = document.querySelector(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.className = "toast " + classe; t.innerHTML = texte;
    clearTimeout(minuteur); minuteur = setTimeout(() => t.classList.add("cache"), 4200);
  };

  DC.qrSvg = (texte, taille = 200, encre = "#1c1f26") => {
    const qr = qrcode(0, "M"); qr.addData(texte); qr.make();
    const n = qr.getModuleCount(), m = 3, c = taille / (n + 2 * m);
    let d = "";
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (qr.isDark(y, x)) d += `M${(x + m) * c},${(y + m) * c}h${c}v${c}h-${c}z`;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${taille} ${taille}" width="100%" role="img" aria-label="QR code"><rect width="100%" height="100%" fill="#fff"/><path d="${d}" fill="${encre}"/></svg>`;
  };

  DC.ilya = (t) => {
    const s = Math.max(0, (Date.now() - t) / 1000);
    if (s < 60) return "à l'instant";
    if (s < 3600) return `il y a ${Math.round(s / 60)} min`;
    if (s < 86400) return `il y a ${Math.round(s / 3600)} h`;
    const j = Math.round(s / 86400);
    return j === 1 ? "hier" : `il y a ${j} jours`;
  };

  // canal(session, onEvenement, onStatut) : écoute (si onEvenement), rejoue l'historique, envoie.
  DC.canal = (session, onEvenement, onStatut) => {
    const sujet = "dacapo-demo-sp-" + session;
    const vus = new Set();
    const recevoir = (ev) => { if (!ev || !ev.k || vus.has(ev.k)) return; vus.add(ev.k); onEvenement && onEvenement(ev); };
    let bc = null;
    try { bc = new BroadcastChannel(sujet); bc.onmessage = (m) => recevoir(m.data); } catch { /* ancien navigateur */ }
    let source = null, ouvert = false;
    if (onEvenement) {
      source = new EventSource(`${DC.RELAIS}/${sujet}/sse?since=12h`);
      source.onopen = () => { ouvert = true; onStatut && onStatut("connecte"); };
      source.onmessage = (m) => { let d; try { d = JSON.parse(m.data); } catch { return; } if (d.event !== "message") return; try { recevoir(JSON.parse(d.message)); } catch { /* message étranger */ } };
      source.onerror = () => { onStatut && onStatut(ouvert ? "reconnexion" : "hors-ligne"); };
      setTimeout(() => { if (!ouvert) onStatut && onStatut("hors-ligne"); }, 8000);
    }
    return {
      envoyer: (ev) => {
        const e = { ...ev, k: DC.id(10), at: Date.now() };
        vus.add(e.k);
        try { bc && bc.postMessage(e); } catch { /* rien */ }
        return fetch(`${DC.RELAIS}/${sujet}`, { method: "POST", body: JSON.stringify(e) }).catch(() => {});
      },
      fermer: () => { source && source.close(); bc && bc.close(); },
    };
  };
})();

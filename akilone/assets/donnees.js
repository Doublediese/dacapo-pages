// Données de la démonstration Da Capo Répertoire pour le Quatuor Akilone.
// Programmes, équipe, lieux et disques : sources publiques (festivals, labels, presse), à valider avec le quatuor.
// Presse : citations publiques provisoires, à remplacer par la revue de presse du quatuor.
// Programmateurs, structures, campagnes et statistiques : entièrement fictifs.
// Textes de présentation et clés d'écoute : brouillons de Double Dièse.
window.DC = window.DC || {};
DC.NOM = "Da Capo Répertoire";

DC.ensemble = {
  nom: "Quatuor Akilone",
  ville: "Albi",
  ligne: { fr: "Quatuor à cordes · Albi · fondé en 2011", en: "String quartet · Albi, France · founded 2011" },
  presentation: {
    fr: "Akilone vient de l'italien aquilone, le cerf-volant : les pieds sur terre, la tête dans les nuages. Le quatuor s'est formé en 2011 au Conservatoire de Paris et a reçu à ses débuts les conseils de Vladimir Mendelssohn, puis de Hatto Beyerle. Premier Grand Prix du concours de Bordeaux en 2016, il joue de Haydn à la création d'aujourd'hui, au Wigmore Hall comme en prison ou à l'hôpital. Installé à Albi, il s'est ancré dans le Tarn avec le festival Gresinhòl, en forêt de la Grésigne.",
    en: "Akilone comes from the Italian aquilone, a kite: feet on the ground, head in the clouds. The quartet came together in 2011 at the Paris Conservatoire and, in its early years, received guidance from Vladimir Mendelssohn and then Hatto Beyerle. Winner of the First Grand Prize at the Bordeaux competition in 2016, it plays everything from Haydn to new commissions, at Wigmore Hall as well as in prisons and hospitals. Based in Albi, it has put down roots in the Tarn with the Gresinhòl festival, in the Grésigne forest.",
  },
  faits: {
    fr: [["2011", "fondation au Conservatoire de Paris"], ["2016", "Premier Grand Prix, concours de Bordeaux"], ["Albi", "port d'attache, en Occitanie"], ["2", "disques, chez Mirare et Klarthe"]],
    en: [["2011", "founded at the Paris Conservatoire"], ["2016", "First Grand Prize, Bordeaux competition"], ["Albi", "home base, in Occitanie"], ["2", "albums, on Mirare and Klarthe"]],
  },
  scenes: "Wigmore Hall · Philharmonie de Paris · Muziekgebouw Amsterdam · Académie Liszt de Budapest · Munetsugu Hall, Nagoya · Printemps des Arts de Monte-Carlo · Festival international de Colmar",
  disque: {
    fr: { titre: "Deep in the Forest", texte: "Dvořák, paru chez Klarthe. Des vidéos tournées en forêt de la Grésigne, dont des inédits réservés aux professionnels sur cette page." },
    en: { titre: "Deep in the Forest", texte: "Dvořák, on Klarthe. Films shot in the Grésigne forest, including unreleased footage reserved for professionals on this page." },
  },
  equipe: [
    { nom: "Magdalena Geka", role: { fr: "Premier violon", en: "First violin" }, texte: { fr: "Joue un violon d'Alessandro Gagliano de 1734, prêté par la fondation Anima Music.", en: "Plays a 1734 Alessandro Gagliano violin, on loan from the Anima Music Foundation." } },
    { nom: "Élise De-Bendelac", role: { fr: "Second violon", en: "Second violin" }, texte: { fr: "Membre fondatrice du quatuor, en 2011.", en: "Founding member of the quartet, in 2011." } },
    { nom: "Perrine Guillemot-Munck", role: { fr: "Alto", en: "Viola" }, texte: { fr: "", en: "" } },
    { nom: "Lucie Mercat", role: { fr: "Violoncelle", en: "Cello" }, texte: { fr: "Membre fondatrice du quatuor, en 2011.", en: "Founding member of the quartet, in 2011." } },
  ],
  presse: [
    { q: "Un premier disque superbement joué, intelligent et stimulant.", qen: "A superbly played, intelligent and thought-provoking debut.", s: "Gramophone" },
    { q: "D'une immense classe : élégant, précis et délicat.", qen: "Immensely classy: elegant, precise and dainty.", s: "Gramophone" },
    { q: "Ce quatuor tout terrain au jeu élégant et raffiné touche par son engagement et sa sensibilité.", qen: "An all-terrain quartet whose elegant, refined playing moves through its commitment and sensitivity.", s: "Festival de Wallonie" },
    { q: "Célébré pour l'élégance de sa sonorité, sa poésie et son brio technique.", qen: "Celebrated for its tonal elegance, poetry and technical brilliance.", s: "styriarte, Graz" },
  ],
  contact: { nom: "Quatuor Akilone", role: { fr: "Albi, Occitanie", en: "Albi, France" } },
  don: "https://www.helloasso.com/associations/les-amis-du-quatuor-akilone",
  site: "https://quatuorakilone.com",
};

// Les programmes. « teinte » colore la vignette ; « equipe » : la page spectateur existe.
DC.programmes = [
  {
    id: "deepforest", titre: "Deep in the Forest", sous: { fr: "Dvořák, des Cyprès au dernier quatuor", en: "Dvořák, from Cypresses to the last quartet" },
    direction: "", effectif: { fr: "Quatuor à cordes", en: "String quartet" }, duree: "1 h 10", accomp: { fr: "Deux parties, entracte", en: "Two halves, interval" },
    badge: { fr: "Disque Klarthe · clés d'écoute prêtes", en: "Klarthe album · listening guide ready" }, teinte: ["#14241d", "#5d6b45"], equipe: true, phare: true,
    pitch: {
      fr: "Deux visages de Dvořák. Les Cyprès, chansons d'amour écrites à vingt-trois ans puis transcrites pour quatuor, et son dernier quatuor, l'opus 105, achevé au retour d'Amérique. Le Quatuor Akilone a préparé ce programme en République tchèque, avec le Quatuor Talich, avant de l'enregistrer pour Klarthe. Un podcast de Tristan Labouret et des vidéos tournées en forêt de la Grésigne l'accompagnent.",
      en: "Two faces of Dvořák. The Cypresses, love songs written at twenty-three and later arranged for quartet, and his last quartet, Op. 105, completed after his return from America. Quatuor Akilone prepared this programme in the Czech Republic, with the Talich Quartet, before recording it for Klarthe. A podcast by Tristan Labouret and films shot in the Grésigne forest come with it.",
    },
    oeuvres: ["Antonín Dvořák, Cyprès, B. 152", "Antonín Dvořák, Quatuor n° 14 en la bémol majeur, op. 105"],
    pratique: { fr: ["Salle de concert, église ou grange à l'acoustique généreuse", "4 musiciennes en tournée", "Vidéos et podcast disponibles pour votre communication"], en: ["Concert hall, church or barn with a generous acoustic", "4 musicians on tour", "Films and podcast available for your marketing"] },
    deja: ["Vienne, Ehrbar Saal"],
    video: { inedit: true, duree: "3:20" }, episode: "8 min",
  },
  {
    id: "vienne", titre: "Cent ans à Vienne", sous: { fr: "Beethoven, Berg, Webern", en: "Beethoven, Berg, Webern" },
    direction: "", effectif: { fr: "Quatuor à cordes", en: "String quartet" }, duree: "1 h 40", accomp: { fr: "Deux parties, entracte", en: "Two halves, interval" },
    badge: { fr: "Carte blanche", en: "Carte blanche" }, teinte: ["#1f1d2b", "#6a5a7a"],
    pitch: {
      fr: "Les Six bagatelles de Webern tiennent en quatre minutes. La Suite lyrique de Berg cache dans sa partition un amour secret. En regard, leur modèle à tous deux, le Quatuor op. 130 de Beethoven, couronné par la Grande Fugue. Une carte blanche créée au Printemps des Arts de Monte-Carlo en 2025.",
      en: "Webern's Six Bagatelles last four minutes. Berg's Lyric Suite hides a secret love in its score. Facing them, the model they both looked up to: Beethoven's Quartet Op. 130, crowned by the Grosse Fuge. A carte blanche first given at the Printemps des Arts de Monte-Carlo in 2025.",
    },
    oeuvres: ["Anton Webern, Six bagatelles, op. 9", "Alban Berg, Suite lyrique", "Ludwig van Beethoven, Quatuor n° 13 en si bémol majeur, op. 130, et Grande Fugue, op. 133"],
    pratique: { fr: ["Programme long : 1 h 40 avec entracte", "Rencontre ou table ronde possible avant le concert", "4 musiciennes en tournée"], en: ["Long programme: 1 h 40 with interval", "Pre-concert talk or panel possible", "4 musicians on tour"] },
    deja: ["Printemps des Arts de Monte-Carlo"],
    video: { inedit: true, duree: "2:40" }, episode: null,
  },
  {
    id: "transformations", titre: "Cinq transformations", sous: { fr: "Xu Yi et le dernier Beethoven", en: "Xu Yi and late Beethoven" },
    direction: "", effectif: { fr: "Quatuor à cordes", en: "String quartet" }, duree: "45 min", accomp: { fr: "Sans entracte", en: "No interval" },
    badge: { fr: "Création 2026", en: "Premiere 2026" }, teinte: ["#2a2620", "#8a7346"],
    pitch: {
      fr: "L'ultime quatuor de Beethoven, l'opus 135, et la question griffonnée sur la partition : « Muss es sein? », le faut-il ? En regard, Cinq transformations de Xu Yi, commande de ProQuartet, du Centre Présence Compositrices et du quatuor, donnée à la Biennale de quatuors à cordes de la Philharmonie de Paris en janvier 2026. La compositrice avait déjà écrit pour elles Aquilone lontano, inspiré du nom du quatuor.",
      en: "Beethoven's final quartet, Op. 135, with the question scribbled on its score: “Muss es sein?”, must it be? Alongside it, Xu Yi's Cinq transformations, commissioned by ProQuartet, the Centre Présence Compositrices and the quartet, and performed at the Philharmonie de Paris String Quartet Biennial in January 2026. Xu Yi had already written Aquilone lontano for them, inspired by the quartet's name.",
    },
    oeuvres: ["Xu Yi, Cinq transformations", "Ludwig van Beethoven, Quatuor n° 16 en fa majeur, op. 135"],
    pratique: { fr: ["Format court, idéal en fin d'après-midi ou en concert double", "4 musiciennes en tournée"], en: ["Short format, ideal for an early evening slot or a double bill", "4 musicians on tour"] },
    deja: ["Philharmonie de Paris, Biennale de quatuors à cordes"],
    video: { inedit: true, duree: "1:50" }, episode: null,
  },
  {
    id: "fondateurs", titre: "Haydn, Mozart, Schubert", sous: { fr: "Les fondateurs viennois", en: "The Viennese founders" },
    direction: "", effectif: { fr: "Quatuor à cordes", en: "String quartet" }, duree: "1 h 05", accomp: { fr: "Une ou deux parties", en: "One or two halves" },
    badge: { fr: "Premier disque · Mirare", en: "Debut album · Mirare" }, teinte: ["#2b2420", "#9a7b4f"],
    pitch: {
      fr: "Le programme du premier disque, paru chez Mirare en 2018 : le Quatuor op. 20 n° 2 de Haydn, où le violoncelle ouvre le bal, le Quatuor en sol majeur K. 387 de Mozart, premier des six dédiés à Haydn, et le Quartettsatz de Schubert. Gramophone y a entendu une conversation « vive et intelligente ».",
      en: "The programme of the debut album, released on Mirare in 2018: Haydn's Quartet Op. 20 No. 2, where the cello opens the dance, Mozart's G major Quartet K. 387, the first of the six dedicated to Haydn, and Schubert's Quartettsatz. Gramophone heard “a lively and intelligent conversation”.",
    },
    oeuvres: ["Joseph Haydn, Quatuor en do majeur, op. 20 n° 2", "Wolfgang Amadeus Mozart, Quatuor en sol majeur, K. 387", "Franz Schubert, Quartettsatz en do mineur, D. 703"],
    pratique: { fr: ["Toutes salles, des plus intimes aux plus grandes", "4 musiciennes en tournée"], en: ["Any venue, from the most intimate to the largest", "4 musicians on tour"] },
    deja: [],
    video: { inedit: false, duree: "3:00" }, episode: null,
  },
  {
    id: "kreutzer", titre: "Sonate à Kreutzer", sous: { fr: "Haydn, Janáček, Schubert", en: "Haydn, Janáček, Schubert" },
    direction: "", effectif: { fr: "Quatuor à cordes", en: "String quartet" }, duree: "1 h 10", accomp: { fr: "Deux parties, entracte", en: "Two halves, interval" },
    badge: null, teinte: ["#2c1f24", "#8b5a5a"],
    pitch: {
      fr: "Au centre, le premier quatuor de Janáček, tiré de la nouvelle de Tolstoï : une femme, un violoniste, un mari jaloux, et la sonate de Beethoven qui précipite le drame. Autour, le « Cavalier » de Haydn, au galop, et la « Rosamunde » de Schubert, d'une mélancolie chantante.",
      en: "At its centre, Janáček's First Quartet, drawn from Tolstoy's novella: a wife, a violinist, a jealous husband, and the Beethoven sonata that brings on the tragedy. Around it, Haydn's galloping “Rider” and Schubert's songful, melancholy “Rosamunde”.",
    },
    oeuvres: ["Joseph Haydn, Quatuor op. 74 n° 3 « Le Cavalier »", "Leoš Janáček, Quatuor n° 1 « Sonate à Kreutzer »", "Franz Schubert, Quatuor n° 13 « Rosamunde », D. 804"],
    pratique: { fr: ["Salle de concert ou théâtre", "4 musiciennes en tournée"], en: ["Concert hall or theatre", "4 musicians on tour"] },
    deja: ["Quimper, Théâtre de Cornouaille"],
    video: { inedit: false, duree: "2:30" }, episode: null,
  },
  {
    id: "vents", titre: "Cordes et vents", sous: { fr: "Avec David Walter, hautbois, et Michel Moraguès, flûte", en: "With David Walter, oboe, and Michel Moraguès, flute" },
    direction: "", effectif: { fr: "Quatuor, hautbois et flûte", en: "Quartet, oboe and flute" }, duree: "1 h", accomp: { fr: "Sans entracte", en: "No interval" },
    badge: { fr: "Avec les Concerts de Poche", en: "With Les Concerts de Poche" }, teinte: ["#1d2a33", "#5f7f86"],
    pitch: {
      fr: "Le quatuor s'élargit à deux grandes figures des vents français, David Walter au hautbois et Michel Moraguès à la flûte. Créé avec les Concerts de Poche, le programme se joue aussi bien dans une grande salle que dans une salle des fêtes.",
      en: "The quartet opens up to two leading figures of French wind playing, David Walter on oboe and Michel Moraguès on flute. Created with Les Concerts de Poche, it works as well in a large hall as in a village hall.",
    },
    oeuvres: ["Programme détaillé sur demande"],
    pratique: { fr: ["6 musiciens en tournée", "Ateliers possibles avec les Concerts de Poche"], en: ["6 musicians on tour", "Workshops possible with Les Concerts de Poche"] },
    deja: ["Théâtre de Corbeil-Essonnes"],
    video: { inedit: true, duree: "1:40" }, episode: null,
  },
  {
    id: "mozart", titre: "Soirée Mozart", sous: { fr: "Avec Reed Tetzloff, piano", en: "With Reed Tetzloff, piano" },
    direction: "", effectif: { fr: "Quatuor et piano", en: "Quartet and piano" }, duree: "1 h 15", accomp: { fr: "Sans entracte", en: "No interval" },
    badge: null, teinte: ["#24203a", "#7b6a9a"],
    pitch: {
      fr: "Le pianiste américain Reed Tetzloff, révélé au concours Tchaïkovski, et le Quatuor Akilone réunis autour de Mozart. Programme créé au Théâtre d'Angoulême en octobre 2024.",
      en: "American pianist Reed Tetzloff, who came to international attention at the Tchaikovsky Competition, joins Quatuor Akilone for an evening of Mozart. First given at the Théâtre d'Angoulême in October 2024.",
    },
    oeuvres: ["Programme détaillé sur demande"],
    pratique: { fr: ["Piano de concert accordé le jour même", "5 musiciens en tournée"], en: ["Concert grand tuned on the day", "5 musicians on tour"] },
    deja: ["Théâtre d'Angoulême"],
    video: { inedit: false, duree: "2:10" }, episode: null,
  },
];
DC.programme = (id) => DC.programmes.find((p) => p.id === id);

// Diffuseurs : les quatre musiciennes. Élise (id « direction ») pilote la diffusion et voit tout ;
// les trois autres n'ont pas de zone : chacune a ses propres contacts et peut trouver des concerts.
DC.diffuseurs = [
  { id: "direction", nom: "Élise De-Bendelac", role: "Second violon, pilote la diffusion : voit tout", court: "Élise" },
  { id: "magdalena", nom: "Magdalena Geka", role: "Premier violon · ses contacts et ses pistes de concerts", court: "Magdalena", v2: true },
  { id: "perrine", nom: "Perrine Guillemot-Munck", role: "Alto · ses contacts et ses pistes de concerts", court: "Perrine", v2: true },
  { id: "lucie", nom: "Lucie Mercat", role: "Violoncelle · ses contacts et ses pistes de concerts", court: "Lucie", v2: true },
];

// Une campagne d'Élise part à toute la catégorie ; celle d'une autre musicienne, à ses seuls contacts dans la catégorie.
DC.destinataires = (c) => DC.programmateurs.filter((p) => p.cat === c.cat && (c.d === "direction" || p.d === c.d));

DC.categories = [
  { id: "festivals", nom: "Festivals de musique de chambre" },
  { id: "scenes", nom: "Scènes et saisons" },
  { id: "europe", nom: "Europe centrale et Belgique" },
  { id: "monde", nom: "Royaume-Uni et Japon" },
];

// Programmateurs fictifs. « n » : niveau d'intérêt simulé dans l'historique
// (0 : rien ouvert ; 1 : ouvert ; 2 : programme lu ; 3 : vidéo ou épisode ; 4 : demande de contact).
DC.programmateurs = [
  { cle: "cv7k", nom: "Claire Vasseur", structure: "Festival Quatuors en Gâtinais", lieu: "Centre-Val de Loire", pays: "FR", cat: "festivals", d: "direction", n: 0, demo: true },
  { cle: "lb4t", nom: "Louis Bernier", structure: "Rencontres musicales de Saint-Rémy-des-Bois", lieu: "Bourgogne", pays: "FR", cat: "festivals", d: "direction", n: 4 },
  { cle: "sa9t", nom: "Sophie Arnaud", structure: "Festival Cordes en Corbières", lieu: "Occitanie", pays: "FR", cat: "festivals", d: "magdalena", n: 3 },
  { cle: "ml4r", nom: "Marc Lefort", structure: "Nuits de la Chartreuse", lieu: "Auvergne", pays: "FR", cat: "festivals", d: "direction", n: 3 },
  { cle: "im2c", nom: "Isabelle Morin", structure: "Musique au pays des Lacs", lieu: "Savoie", pays: "FR", cat: "festivals", d: "perrine", n: 2 },
  { cle: "ap8n", nom: "Anne-Laure Pichon", structure: "Festival des Granges", lieu: "Bretagne", pays: "FR", cat: "festivals", d: "lucie", n: 1 },
  { cle: "nf5h", nom: "Nicolas Faure", structure: "Les Heures du quatuor", lieu: "Nouvelle-Aquitaine", pays: "FR", cat: "festivals", d: "direction", n: 0 },
  { cle: "gm6w", nom: "Gilles Martel", structure: "Été musical du Vexin", lieu: "Normandie", pays: "FR", cat: "festivals", d: "magdalena", n: 2 },
  { cle: "jm3p", nom: "Julien Marchetti", structure: "Musique en garrigue", lieu: "Provence", pays: "FR", cat: "festivals", d: "direction", n: 4 },
  { cle: "hd2v", nom: "Hélène Dufresne", structure: "Scène nationale de l'Estuaire", lieu: "Pays de la Loire", pays: "FR", cat: "scenes", d: "perrine", n: 4 },
  { cle: "pg7m", nom: "Paul Gendron", structure: "Saison musicale de Valmont", lieu: "Grand Est", pays: "FR", cat: "scenes", d: "direction", n: 1 },
  { cle: "tb3s", nom: "Thomas Bérard", structure: "Auditorium du Prieuré", lieu: "Touraine", pays: "FR", cat: "scenes", d: "perrine", n: 3 },
  { cle: "cr8d", nom: "Camille Roussel", structure: "Auditorium des Docks", lieu: "Hauts-de-France", pays: "FR", cat: "scenes", d: "magdalena", n: 0 },
  { cle: "ev2n", nom: "Élodie Vernet", structure: "Théâtre de la Halle aux grains", lieu: "Auvergne", pays: "FR", cat: "scenes", d: "direction", n: 2 },
  { cle: "rb6q", nom: "Romain Blanchard", structure: "Scène conventionnée des Causses", lieu: "Occitanie", pays: "FR", cat: "scenes", d: "lucie", n: 0 },
  { cle: "kw4b", nom: "Katharina Weber", structure: "Kammermusiktage Lindenau", lieu: "Sachsen", pays: "DE", cat: "europe", d: "magdalena", n: 4, lang: "en" },
  { cle: "mb9f", nom: "Matthias Brandt", structure: "Quartettfest Kirchberg", lieu: "Bayern", pays: "DE", cat: "europe", d: "direction", n: 3, lang: "en" },
  { cle: "sg2r", nom: "Stefan Gruber", structure: "Konzerthaus Seefeld", lieu: "Tirol", pays: "AT", cat: "europe", d: "lucie", n: 1, lang: "en" },
  { cle: "pn5d", nom: "Petra Nováková", structure: "Letní komorní dny Lipnice", lieu: "Vysočina", pays: "CZ", cat: "europe", d: "magdalena", n: 3, lang: "en" },
  { cle: "lm7q", nom: "Lukas Meier", structure: "Musiktage Albula", lieu: "Graubünden", pays: "CH", cat: "europe", d: "direction", n: 2, lang: "en" },
  { cle: "ad8v", nom: "Anne Dumont", structure: "Midis du quatuor", lieu: "Namur", pays: "BE", cat: "europe", d: "perrine", n: 0 },
  { cle: "oh4e", nom: "Olivia Hart", structure: "Riverside Chamber Series", lieu: "London", pays: "UK", cat: "monde", d: "lucie", n: 3, lang: "en" },
  { cle: "jw9a", nom: "James Whitford", structure: "Lakeland Quartet Weekend", lieu: "Cumbria", pays: "UK", cat: "monde", d: "lucie", n: 1, lang: "en" },
  { cle: "yt3k", nom: "Yuki Tanaka", structure: "Aoba Chamber Series", lieu: "Sendai", pays: "JP", cat: "monde", d: "direction", n: 2, lang: "en" },
  { cle: "hm7s", nom: "Haruto Mori", structure: "Kansai String Quartet Festival", lieu: "Osaka", pays: "JP", cat: "monde", d: "magdalena", n: 0, lang: "en" },
];
DC.programmateur = (cle) => DC.programmateurs.find((p) => p.cle === cle);

// Campagnes déjà envoyées (« j » : envoyée il y a j jours).
DC.campagnes = [
  { id: "c-foret", nom: "Deep in the Forest, saison 2027-2028", d: "direction", cat: "festivals", programmes: ["deepforest", "transformations"], lang: "fr", j: 3 },
  { id: "c-scenes", nom: "Saison 2027-2028 : Vienne et Kreutzer", d: "perrine", cat: "scenes", programmes: ["vienne", "kreutzer"], lang: "fr", j: 9 },
  { id: "c-europe", nom: "Mitteleuropa 2028", d: "direction", cat: "europe", programmes: ["deepforest", "vienne", "fondateurs"], lang: "en", j: 6 },
  { id: "c-monde", nom: "UK & Japan 2028", d: "lucie", cat: "monde", programmes: ["deepforest", "transformations"], lang: "en", j: 12 },
  { id: "c-magda", nom: "Cent ans à Vienne, festivals d'été", d: "magdalena", cat: "festivals", programmes: ["vienne", "fondateurs"], lang: "fr", j: 5 },
];

// Historique simulé, reconstruit de façon déterministe à partir du niveau de chaque programmateur.
DC.historique = () => {
  const evs = [], maintenant = Date.now(), H = 36e5;
  DC.campagnes.forEach((c) => {
    DC.destinataires(c).forEach((p, i) => {
      const t0 = maintenant - c.j * 24 * H + (i * 7 + 3) * H;
      const p1 = c.programmes[i % c.programmes.length], p2 = c.programmes[(i + 1) % c.programmes.length];
      const ev = (t, h, extra) => evs.push({ k: `h-${p.cle}-${t}-${evs.length}`, t, r: p.cle, c: c.id, at: Math.min(t0 + h * H, maintenant - (i + 1) * 9e5), ...extra });
      if (p.n >= 1) ev("ouvre", 0);
      if (p.n >= 2) { ev("programme", 0.1, { p: p1 }); if (i % 2) ev("programme", 0.2, { p: p2 }); }
      if (p.n >= 3) { ev("video", 0.15, { p: p1 }); if (i % 3 === 0) ev("episode", 0.3, { p: p1 }); if (i % 2 === 0) ev("ouvre", 20); }
      if (p.n >= 4) { ev("kit", 20.2, { p: p1 }); ev("interet", 20.4, { p: p1, mode: i % 2 ? "rappel" : "interesse", saison: "2027-2028", message: i % 2 ? "" : "Nous cherchons un quatuor pour notre week-end d'ouverture. Possible en juillet ?" }); }
    });
  });
  return evs.sort((a, b) => a.at - b.at);
};

// Page spectateur : Deep in the Forest, telle que le public la lit dans n'importe quelle salle de la tournée.
// Clés d'écoute : brouillons de Double Dièse, à relire avec le quatuor. Pas de texte chanté : les Cyprès sont des chansons sans paroles.
DC.concert = {
  programme: "deepforest",
  titre: "Deep in the Forest",
  fil: { fr: "Dvořák, du premier amour au retour au pays", en: "Dvořák, from first love to homecoming", de: "Dvořák, von der ersten Liebe bis zur Heimkehr" },
  interpretes: {
    fr: "Quatuor Akilone · Magdalena Geka et Élise De-Bendelac, violons · Perrine Guillemot-Munck, alto · Lucie Mercat, violoncelle",
    en: "Quatuor Akilone · Magdalena Geka and Élise De-Bendelac, violins · Perrine Guillemot-Munck, viola · Lucie Mercat, cello",
    de: "Quatuor Akilone · Magdalena Geka und Élise De-Bendelac, Violine · Perrine Guillemot-Munck, Viola · Lucie Mercat, Violoncello",
  },
  accroche: {
    fr: "Deux Dvořák, à trente ans de distance. En 1865, un altiste de vingt-trois ans écrit des chansons pour une jeune fille qui ne l'aime pas ; vingt-deux ans plus tard, il les confie au quatuor, sans les paroles. En 1895, le compositeur célèbre rentre d'Amérique et achève son dernier quatuor. Le Quatuor Akilone a préparé ce programme en Bohême, sur les pas de Dvořák.",
    en: "Two Dvořáks, thirty years apart. In 1865 a twenty-three-year-old violist writes songs for a young woman who does not love him back; twenty-two years later he gives them to the string quartet, without the words. In 1895 the famous composer comes home from America and completes his last quartet. Quatuor Akilone prepared this programme in Bohemia, in Dvořák's footsteps.",
    de: "Zweimal Dvořák, dreißig Jahre auseinander. 1865 schreibt ein dreiundzwanzigjähriger Bratscher Lieder für eine junge Frau, die seine Liebe nicht erwidert; zweiundzwanzig Jahre später überträgt er sie ohne Worte auf das Streichquartett. 1895 kehrt der berühmte Komponist aus Amerika zurück und vollendet sein letztes Quartett. Das Quatuor Akilone hat dieses Programm in Böhmen erarbeitet, auf Dvořáks Spuren.",
  },
  aSavoir: {
    fr: ["Ce soir, des chansons sans paroles. Les Cyprès étaient d'abord des mélodies pour voix et piano : écoutez le premier violon comme une chanteuse, les trois autres comme son piano.", "Le quatuor op. 105 a été commencé à New York et achevé à Prague. Écoutez, dans les danses du scherzo et du finale, un homme rendu à son pays.", "Le disque Deep in the Forest, où le quatuor a enregistré ces deux œuvres, vous attend à la sortie."],
    en: ["Tonight, songs without words. The Cypresses began as songs for voice and piano: hear the first violin as the singer, the other three as her piano.", "The Op. 105 quartet was begun in New York and completed in Prague. In the dances of the scherzo and finale, listen for a man back in his own country.", "The album Deep in the Forest, on which the quartet recorded both works, is waiting for you at the exit."],
    de: ["Heute Abend Lieder ohne Worte. Die Zypressen waren zuerst Lieder für Gesang und Klavier: Hören Sie die erste Violine als Sängerin, die drei anderen als ihr Klavier.", "Das Quartett op. 105 wurde in New York begonnen und in Prag vollendet. Hören Sie in den Tänzen von Scherzo und Finale einen Mann, der wieder zu Hause ist.", "Das Album Deep in the Forest, auf dem das Quartett beide Werke eingespielt hat, erwartet Sie am Ausgang."],
  },
  textes: {},
  soiree: [
    {
      id: "cypres", partie: 1, compositeur: "Antonín Dvořák", titre: "Cyprès, B. 152", annee: "1865, transcrits en 1887",
      bref: "À l'été 1865, Dvořák a vingt-trois ans. Il joue de l'alto dans l'orchestre du Théâtre provisoire de Prague et donne des leçons de piano pour vivre. Parmi ses élèves, Josefína Čermáková, une jeune actrice. Il en tombe amoureux, elle ne le suit pas. Il écrit pour elle un cycle de dix-huit chansons sur des poèmes de Gustav Pfleger-Moravský, qu'il garde pour lui. Vingt-deux ans plus tard, devenu célèbre, il en reprend douze et les transcrit pour quatuor, sans les paroles. Entre-temps, il a épousé Anna, la sœur de Josefína.",
      long: [
        "§ Un tiroir de jeunesse",
        "Dvořák ne publie pas le cycle de 1865. Il ne l'oublie pas pour autant : il y revient toute sa vie, en tire des chansons qu'il retravaille et publie à part, et en 1887 il en transcrit douze pour quatuor à cordes, sous le titre d'« Écho de chansons ». Le nom de Cyprès, l'arbre des cimetières, vient du recueil de poèmes. Les pièces pour quatuor ne paraîtront qu'après sa mort.",
        "§ Une voix sans paroles",
        "Dvořák transcrit presque note à note. La ligne de chant passe aux cordes, le plus souvent au premier violon, parfois à l'alto ou au violoncelle, et la partie de piano se répartit entre les autres instruments : arpèges, battements doux, pizzicatos. Un récital intime devient une conversation à quatre. Suivez la mélodie quand elle change de main : à chaque fois, un autre timbre prend la parole.",
        "§ Ce que disent les poèmes",
        "Les poèmes de Pfleger-Moravský parlent d'un amour sans retour, d'une nature qui écoute et console, et d'une mort qu'on appelle parfois. Quelques titres du recueil donnent le ton : « Je sais que dans un doux espoir », « Ici, dans la forêt, près du ruisseau », « Dans la douce puissance de tes yeux ». Dvořák garde la forme des chansons : une même mélodie revient, légèrement variée, comme des couplets.",
        "§ Pourquoi le Quatuor Akilone les joue",
        "C'est Vladimir Mendelssohn, qui a conseillé le quatuor à ses débuts, qui lui a fait découvrir les Cyprès ; le disque Deep in the Forest lui est dédié. Pour le préparer, les musiciennes sont parties en République tchèque sur les pas de Dvořák, ont travaillé avec le Quatuor Talich et appris la polka auprès de musiciens traditionnels.",
      ],
      ecoute: "Écoutez le premier violon comme une voix : il chante des mots que personne ne prononce.",
      guetter: [
        ["La chanson", "Une mélodie au premier violon, et autour d'elle un accompagnement léger : le piano d'origine devenu arpèges, battements et pizzicatos."],
        ["Le passage de témoin", "La mélodie glisse soudain à l'alto ou au violoncelle : la même chanson dans une voix plus grave."],
        ["Les couplets", "Une mélodie revient, à peine changée. C'est la forme de la chanson, avec ses strophes."],
      ],
    },
    { id: "entracte", pause: true, titre: "Entracte", duree: "20 min" },
    {
      id: "op105", partie: 2, compositeur: "Antonín Dvořák", titre: "Quatuor n° 14 en la bémol majeur, op. 105", annee: "1895",
      bref: "Avril 1895 : après près de trois ans à New York, Dvořák rentre en Bohême. Il avait commencé ce quatuor en Amérique, quelques pages seulement. En mai, il apprend la mort de Josefína, l'amour de ses vingt ans, celle des Cyprès. À l'automne, il écrit d'un trait un autre quatuor, en sol majeur, puis revient à celui-ci et l'achève à Prague à la fin de décembre. Ce sera son dernier quatuor : un homme rendu à son pays, à ses danses et à ses chants.",
      long: [
        "§ Le dernier quatuor",
        "Dvořák a écrit quatorze quatuors à cordes, du jeune altiste qui imite Beethoven au maître de 1895. Celui-ci porte un numéro d'opus plus petit que le Quatuor en sol majeur, op. 106, mais il est terminé après lui. C'est le dernier mot de Dvořák pour le quatuor ; il se tourne ensuite vers les poèmes symphoniques et l'opéra.",
        "§ I. Adagio ma non troppo, Allegro appassionato",
        "L'œuvre commence dans l'ombre : une introduction lente, en mineur, où un motif monte depuis le grave. Puis l'Allegro appassionato éclate en la bémol majeur. Son thème naît du motif de l'introduction : la même figure, d'abord sombre et hésitante, devient un élan.",
        "§ II. Molto vivace",
        "Un scherzo au rythme de furiant, la danse de Bohême qui fait se heurter les mesures à deux et à trois temps. Les accents tombent à contretemps, l'oreille hésite, et c'est voulu. Le trio central ralentit le pas : une mélodie tendre que les instruments se passent.",
        "§ III. Lento e molto cantabile",
        "Le cœur de l'œuvre. Une longue mélodie, que Dvořák veut « très chantante », se déploie au premier violon sur des accords calmes. La partie centrale s'assombrit et s'agite, puis le chant revient, orné de contrechants. Dvořák y tient la phrase sans jamais la presser.",
        "§ IV. Allegro non tanto",
        "Le finale part d'une figure vive et légère, à laquelle répond une mélodie de ton populaire. Les thèmes se multiplient et se répondent, portés par une énergie qu'on peut entendre comme la joie d'un retour. Les dernières pages accélèrent jusqu'à une conclusion éclatante.",
      ],
      ecoute: "Dans le premier mouvement, retenez le motif sombre de l'introduction : il revient, transformé, au cœur de l'Allegro.",
      guetter: [
        ["Adagio, Allegro appassionato", "Une introduction dans l'ombre, puis l'éclat du majeur. Le motif du début devient l'élan du mouvement."],
        ["Molto vivace", "Une danse de Bohême aux accents déplacés, deux temps contre trois. Au centre, une mélodie tendre."],
        ["Lento e molto cantabile", "Une longue mélodie au premier violon sur des accords calmes. Au milieu, un orage, puis le chant revient."],
        ["Allegro non tanto", "Des thèmes de ton populaire qui se répondent, et une fin éclatante."],
      ],
    },
  ],
};

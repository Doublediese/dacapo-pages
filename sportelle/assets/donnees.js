// Données de la démonstration Da Capo Répertoire pour l'Ensemble la Sportelle.
// Programmes, équipe, presse et lieux : brochure de diffusion 2026 de La Sportelle.
// Programmateurs, structures, campagnes et statistiques : entièrement fictifs.
// Textes de présentation : brouillons de Double Dièse, à valider par l'ensemble.
window.DC = window.DC || {};
DC.NOM = "Da Capo Répertoire";

DC.ensemble = {
  nom: "Ensemble la Sportelle",
  ville: "Rocamadour",
  ligne: { fr: "Chœur de chambre · Rocamadour · de 9 à 24 voix", en: "Chamber choir · Rocamadour, France · 9 to 24 voices" },
  presentation: {
    fr: "Né en 2017 à Rocamadour, l'ensemble porte le nom de la médaille en amande que l'on remettait aux pèlerins. Il chante la musique sacrée de toutes les époques, de la polyphonie de la Renaissance aux créations d'aujourd'hui, avec une prédilection pour l'école française de Poulenc, Duruflé et Messiaen. Ses concerts travaillent l'espace, la lumière et la place du public.",
    en: "Founded in 2017 in Rocamadour, the ensemble takes its name from the almond-shaped medal once given to pilgrims. It sings sacred music from every era, from Renaissance polyphony to new commissions, with a particular love for the French school of Poulenc, Duruflé and Messiaen. Its concerts work with space, light and the place of the audience.",
  },
  faits: {
    fr: [["2017", "fondation à Rocamadour"], ["70", "concerts en 2026"], ["18", "programmes au répertoire"], ["9 à 24", "chanteurs selon les programmes"]],
    en: [["2017", "founded in Rocamadour"], ["70", "concerts in 2026"], ["18", "programmes in repertoire"], ["9 to 24", "singers depending on programme"]],
  },
  scenes: "Théâtre des Champs-Élysées · Musikfest Bremen · Sommets musicaux de Gstaad · La Chaise-Dieu · Via Aeterna · Flâneries musicales de Reims",
  disque: {
    fr: { titre: "Media Vita", texte: "Nouveau disque, le 22 janvier 2027. Dix-huit vidéos tournées, dont des inédits réservés aux professionnels sur cette page." },
    en: { titre: "Media Vita", texte: "New album, 22 January 2027. Eighteen films shot, including unreleased footage reserved for professionals on this page." },
  },
  equipe: [
    { nom: "Emmeran Rollin", role: { fr: "Direction artistique, orgue", en: "Artistic director, organ" }, texte: { fr: "Titulaire de l'orgue Daldosso de la basilique Saint-Sauveur de Rocamadour depuis 2013.", en: "Titular organist of the Daldosso organ at the Basilica of Saint-Sauveur, Rocamadour, since 2013." } },
    { nom: "Owain Park", role: { fr: "Chef invité", en: "Guest conductor" }, texte: { fr: "Chef invité principal des BBC Singers, directeur de The Gesualdo Six, compositeur.", en: "Principal guest conductor of the BBC Singers, director of The Gesualdo Six, composer." } },
    { nom: "Nigel Short", role: { fr: "Chef invité", en: "Guest conductor" }, texte: { fr: "Fondateur de Tenebrae en 2001, ancien membre des King's Singers.", en: "Founder of Tenebrae in 2001, former member of The King's Singers." } },
    { nom: "Loïc Pierre", role: { fr: "Chef invité", en: "Guest conductor" }, texte: { fr: "Fondateur et directeur artistique de Mikrokosmos depuis 1989, metteur en scène.", en: "Founder and artistic director of Mikrokosmos since 1989, stage director." } },
  ],
  presse: [
    { q: "On admire la cohésion, la clarté des quatorze chanteurs de La Sportelle.", qen: "One admires the cohesion and clarity of La Sportelle's fourteen singers.", s: "Jean-Pierre Rousseau, Bachtrack" },
    { q: "Chaque entrée de pupitre est un grand événement.", qen: "Every section entry is an event.", s: "Olivier Delaunay, Olyrix" },
    { q: "Élégance des lignes et sobriété des effets et des nuances.", qen: "Elegant lines, restrained effects and dynamics.", s: "Charlotte Saulneron, Resmusica" },
    { q: "L'Ensemble la Sportelle brille par sa précision.", qen: "Ensemble la Sportelle shines through its precision.", s: "Gerd Klingeberg, Nordsee-Zeitung" },
    { q: "La Sportelle, dont la réputation va grandissant, et pour les meilleures raisons.", qen: "La Sportelle, whose reputation keeps growing, and for the best reasons.", s: "Alain Cochard, Concertclassic" },
  ],
  contact: { nom: "Vincent Lafourcade", role: { fr: "Responsable du développement", en: "Head of development and booking" } },
  don: "https://www.helloasso.com/associations/cantica-sacra-rocamadour/formulaires/4",
  site: "https://ensemblelasportelle.com",
};

// Les programmes. « teinte » colore la vignette ; « equipe » : la page spectateur existe.
DC.programmes = [
  {
    id: "mediavita", titre: "Media Vita", sous: { fr: "Au milieu de la vie", en: "In the midst of life" },
    direction: "Owain Park", effectif: { fr: "9 chanteurs", en: "9 singers" }, duree: "1 h 10", accomp: { fr: "a cappella", en: "a cappella" },
    badge: { fr: "Nouveau disque · 22 janvier", en: "New album · 22 January" }, teinte: ["#1d2438", "#6b5a3c"],
    pitch: {
      fr: "« Media vita in morte sumus » : au milieu de la vie, nous sommes dans la mort. Owain Park part de cette antienne médiévale et traverse six siècles, d'Obrecht et Byrd jusqu'à Górecki, Pärt et la jeune compositrice anglaise Kerensa Briggs. Neuf voix pour un programme sombre et lumineux, qui sort en disque le 22 janvier.",
      en: "“Media vita in morte sumus”: in the midst of life we are in death. Owain Park starts from this medieval antiphon and travels across six centuries, from Obrecht and Byrd to Górecki, Pärt and the young British composer Kerensa Briggs. Nine voices in a programme both dark and luminous, released on disc on 22 January.",
    },
    oeuvres: ["Jacob Obrecht", "Plain-chant", "Philippe de Monte", "Henryk Górecki", "Henry Purcell", "Paweł Łukaszewski", "Owain Park", "William Byrd", "Tomás Luis de Victoria", "Carlo Gesualdo", "Kerensa Briggs, Media Vita", "Arvo Pärt, Nunc dimittis", "Maurice Duruflé, Notre Père"],
    pratique: { fr: ["Église ou salle à l'acoustique généreuse", "Aucun instrument", "10 personnes en tournée : 9 chanteurs et le chef"], en: ["Church or hall with a generous acoustic", "No instruments", "10 people on tour: 9 singers and the conductor"] },
    deja: ["Rocamadour", "Paris, Notre-Dame-des-Blancs-Manteaux", "Tarascon-sur-Ariège"],
    video: { inedit: true, duree: "3:40" }, episode: "8 min",
  },
  {
    id: "purete", titre: "Pureté", sous: { fr: "La grande école chorale française", en: "The great French choral school" },
    direction: "Nigel Short", effectif: { fr: "17 chanteurs", en: "17 singers" }, duree: "1 h 20", accomp: { fr: "a cappella, chœur spatialisé", en: "a cappella, spatialised choir" },
    badge: { fr: "Enregistré par France Musique", en: "Recorded live by France Musique" }, teinte: ["#20303a", "#8a7a55"], phare: true,
    pitch: {
      fr: "Poulenc, Duruflé, Messiaen, Villette : le XXe siècle français a écrit quelques-unes des plus belles pages pour chœur a cappella, et c'est le répertoire où La Sportelle est chez elle. La Messe en sol de Poulenc, les Quatre motets de Duruflé, O sacrum convivium de Messiaen, en regard de Vaughan Williams et Miškinis. Dix-sept voix qui se déplacent dans la salle, sous la direction de Nigel Short.",
      en: "Poulenc, Duruflé, Messiaen, Villette: twentieth-century France produced some of the finest a cappella choral music ever written, and this is where La Sportelle is most at home. Poulenc's Mass in G, Duruflé's Four Motets and Messiaen's O sacrum convivium, set against Vaughan Williams and Miškinis. Seventeen voices moving through the hall, conducted by Nigel Short.",
    },
    oeuvres: ["Maurice Duruflé, Quatre motets", "Vytautas Miškinis", "Francis Poulenc, Messe en sol majeur", "Ralph Vaughan Williams, Messe en sol mineur (extraits)", "Olivier Messiaen, O sacrum convivium", "Pierre Villette"],
    pratique: { fr: ["Salle ou église permettant au chœur de circuler autour du public", "Aucun instrument", "18 personnes en tournée"], en: ["A venue where the choir can move around the audience", "No instruments", "18 people on tour"] },
    deja: ["Froville", "Fribourg (Suisse)", "Festival du Mont-Blanc"],
    video: { inedit: true, duree: "4:15" }, episode: "9 min",
  },
  {
    id: "cantus", titre: "Cantus Missae", sous: { fr: "Du « pourquoi ? » à la louange", en: "From “why?” to praise" },
    direction: "Nigel Short", effectif: { fr: "17 chanteurs, double chœur", en: "17 singers, double choir" }, duree: "1 h 20", accomp: { fr: "a cappella", en: "a cappella" },
    badge: { fr: "Page spectateur prête", en: "Audience page ready" }, teinte: ["#2a1f2a", "#7a5a46"], equipe: true,
    pitch: {
      fr: "Pas un instrument. Au centre, la messe à double chœur de Rheinberger. Autour d'elle, Mendelssohn, Brahms et Mauersberger posent tour à tour la même question, « Warum ? », pourquoi. À la fin de chaque partie, Bach ouvre la porte. Un programme romantique allemand chanté par un chœur français, sous la direction de Nigel Short.",
      en: "Not a single instrument. At its heart, Rheinberger's double-choir mass. Around it, Mendelssohn, Brahms and Mauersberger each ask the same question: “Warum?”, why? And at the end of each half, Bach opens the door. German Romantic repertoire sung by a French choir, conducted by Nigel Short.",
    },
    oeuvres: ["Max Reger, Der Mensch lebt und bestehet ; Nachtlied", "Felix Mendelssohn, Mein Gott, warum hast du mich verlassen ? ; Denn er hat seinen Engeln befohlen", "Josef Rheinberger, Cantus Missae, op. 109", "Johann Sebastian Bach, Komm, Jesu, komm ; Singet dem Herrn", "Johannes Brahms, Warum ist das Licht gegeben ? ; Trois motets op. 110", "Rudolf Mauersberger, Wie liegt die Stadt so wüst"],
    pratique: { fr: ["Église ou salle à l'acoustique généreuse", "Deux chœurs placés en vis-à-vis si l'espace le permet", "18 personnes en tournée"], en: ["Church or hall with a generous acoustic", "Two choirs facing each other where space allows", "18 people on tour"] },
    deja: ["Festival de Rocamadour"],
    video: { inedit: true, duree: "2:55" }, episode: "10 min",
  },
  {
    id: "adastra", titre: "Ad Astra", sous: { fr: "De l'abîme aux étoiles", en: "From the abyss to the stars" },
    direction: "", effectif: { fr: "Effectif sur demande", en: "Forces on request" }, duree: "1 h 20", accomp: { fr: "a cappella, mis en espace", en: "a cappella, staged" },
    badge: { fr: "Création · clés d'écoute prêtes", en: "New · listening guide ready" }, teinte: ["#0e1320", "#4a5578"],
    pitch: {
      fr: "Treize pièces enchaînées en quatre-vingts minutes, d'un seul souffle. Le concert commence dans le noir, le chœur se déplace autour du public, et l'on monte de l'abîme vers la lumière. On applaudit à la fin.",
      en: "Thirteen pieces in eighty minutes, in a single breath. The concert begins in darkness, the choir moves around the audience, and the music rises from the abyss towards the light. Applause comes at the very end.",
    },
    oeuvres: ["Programme détaillé sur demande"],
    pratique: { fr: ["Salle pouvant être plongée dans le noir", "Circulation du chœur autour du public", "Conduite lumière simple, fournie par l'ensemble"], en: ["A venue that can be fully darkened", "Choir moves around the audience", "Simple lighting plot supplied by the ensemble"] },
    deja: [],
    video: { inedit: true, duree: "1:30" }, episode: "8 min",
  },
  {
    id: "hymne", titre: "Hymne à la Vierge", sous: { fr: "Huit siècles de prières à Marie", en: "Eight centuries of prayers to Mary" },
    direction: "Owain Park", effectif: { fr: "9 chanteurs", en: "9 singers" }, duree: "1 h 10", accomp: { fr: "a cappella", en: "a cappella" },
    badge: { fr: "Disque paru en 2025", en: "Album released 2025" }, teinte: ["#23304a", "#9a8460"],
    pitch: {
      fr: "De l'anonyme Pulcherrima rosa jusqu'à l'Hymne à la Vierge de Pierre Villette, en passant par Victoria, Byrd, Stravinsky, Górecki, Tavener et une prière d'Owain Park. Le disque est paru chez Label Rocamadour en octobre 2025.",
      en: "From the anonymous Pulcherrima rosa to Pierre Villette's Hymne à la Vierge, by way of Victoria, Byrd, Stravinsky, Górecki, Tavener and a prayer by Owain Park. The album was released on Label Rocamadour in October 2025.",
    },
    oeuvres: ["Anonyme, Pulcherrima rosa", "Tomás Luis de Victoria, Ave Maria ; Ave Regina caelorum", "Igor Stravinsky, Ave Maria", "William Byrd, Senex puerum portabat", "Henryk Górecki", "Neil Cox", "Joanna Ward", "Owain Park, Prière pour Marie", "Judith Bingham", "Antoine Brumel, Sub tuum praesidium", "Hildegard von Bingen", "John Tavener, Mother of God, here I stand", "Edvard Grieg, Ave maris stella", "Pierre Villette, Hymne à la Vierge"],
    pratique: { fr: ["Église ou chapelle", "Aucun instrument", "10 personnes en tournée"], en: ["Church or chapel", "No instruments", "10 people on tour"] },
    deja: ["Paris, Saint-Étienne-du-Mont", "Troyes", "Semur-en-Auxois"],
    video: { inedit: false, duree: "3:10" }, episode: "8 min",
  },
  {
    id: "bachmendelssohn", titre: "Bach · Mendelssohn", sous: { fr: "Le maître et celui qui l'a ressuscité", en: "The master and the man who revived him" },
    direction: "Emmeran Rollin", effectif: { fr: "9 chanteurs et orgue", en: "9 singers and organ" }, duree: "1 h 20", accomp: { fr: "orgue", en: "organ" },
    badge: null, teinte: ["#2b2420", "#8c6a3f"],
    pitch: {
      fr: "En 1829, Mendelssohn ressuscite la Passion selon saint Matthieu, oubliée depuis la mort de Bach. Ce programme les fait dialoguer : motets et chorals de Bach, psaumes et sixième sonate pour orgue de Mendelssohn. Emmeran Rollin dirige le chœur et tient l'orgue.",
      en: "In 1829 Mendelssohn revived the St Matthew Passion, forgotten since Bach's death. This programme sets the two in dialogue: Bach's motets and chorales, Mendelssohn's psalms and Sixth Organ Sonata. Emmeran Rollin conducts the choir and plays the organ.",
    },
    oeuvres: ["Felix Mendelssohn, Mein Gott, warum hast du mich verlassen ? ; Aus tiefer Not ; Mitten wir im Leben sind ; Sonate pour orgue n° 6", "Johann Sebastian Bach, Christ lag in Todesbanden BWV 4 ; Komm, Jesu, komm BWV 229 ; Actus tragicus BWV 106 ; chorals pour orgue"],
    pratique: { fr: ["Orgue en tribune ou orgue de chœur", "Accès à l'orgue pour une répétition la veille ou le matin", "10 personnes en tournée"], en: ["Gallery or choir organ", "Organ access for a rehearsal the day before or the morning", "10 people on tour"] },
    deja: ["Gstaad", "Abbaye de Lessay", "Guérande, collégiale Saint-Aubin"],
    video: { inedit: true, duree: "2:20" }, episode: null,
  },
  {
    id: "passio", titre: "Passio", sous: { fr: "Arvo Pärt, avec The Gesualdo Six", en: "Arvo Pärt, with The Gesualdo Six" },
    direction: "Owain Park", effectif: { fr: "11 chanteurs et The Gesualdo Six", en: "11 singers and The Gesualdo Six" }, duree: "1 h 10", accomp: { fr: "hautbois, violon, violoncelle, basson, orgue", en: "oboe, violin, cello, bassoon, organ" },
    badge: { fr: "Coproduction", en: "Co-production" }, teinte: ["#1e1e24", "#6d6d78"],
    pitch: {
      fr: "La Passion selon saint Jean d'Arvo Pärt : soixante-dix minutes d'une intensité immobile. Onze chanteurs de La Sportelle et les six de The Gesualdo Six, réunis par Owain Park.",
      en: "Arvo Pärt's St John Passion: seventy minutes of still, unwavering intensity. Eleven singers from La Sportelle and the six of The Gesualdo Six, brought together by Owain Park.",
    },
    oeuvres: ["Arvo Pärt, Passio Domini nostri Jesu Christi secundum Joannem"],
    pratique: { fr: ["Hautbois, violon, violoncelle, basson et orgue", "Coproduction avec The Gesualdo Six"], en: ["Oboe, violin, cello, bassoon and organ", "Co-produced with The Gesualdo Six"] },
    deja: ["Festival de Rocamadour"],
    video: { inedit: true, duree: "2:05" }, episode: null,
  },
  {
    id: "cosmos", titre: "Cosmos", sous: { fr: "Rituel sacré", en: "A sacred ritual" },
    direction: "Loïc Pierre", effectif: { fr: "17 chanteurs et un récitant", en: "17 singers and a narrator" }, duree: "1 h", accomp: { fr: "mise en scène et lumières", en: "staging and lighting" },
    badge: null, teinte: ["#141a2e", "#3f5f78"],
    pitch: {
      fr: "Un rituel choral de la Baltique jusqu'à l'Afrique du Sud : Rautavaara, Tormis, Grigorjeva, Łukaszewski, et pour finir World O World de Jacob Collier. Loïc Pierre, fondateur de Mikrokosmos, met le chœur en scène, avec un récitant et un travail de lumière.",
      en: "A choral ritual from the Baltic to South Africa: Rautavaara, Tormis, Grigorjeva, Łukaszewski, ending with Jacob Collier's World O World. Loïc Pierre, founder of Mikrokosmos, stages the choir with a narrator and a lighting design.",
    },
    oeuvres: ["Cuomo", "Galina Grigorjeva", "Einojuhani Rautavaara", "Matre", "Jennefelt", "Krigul", "Paweł Łukaszewski", "Veljo Tormis", "O'Regan, Swing Low, Sweet Chariot", "Jacob Collier, World O World"],
    pratique: { fr: ["Plateau ou nef libre", "Conduite lumière fournie", "19 personnes en tournée"], en: ["Open stage or nave", "Lighting plot supplied", "19 people on tour"] },
    deja: [],
    video: { inedit: true, duree: "1:50" }, episode: null,
  },
  {
    id: "saintesmaries", titre: "Saintes Maries", sous: { fr: "La Renaissance autour des Marie de l'Évangile", en: "Renaissance polyphony for the Marys of the Gospel" },
    direction: "", effectif: { fr: "9 ou 17 chanteurs", en: "9 or 17 singers" }, duree: "1 h 20", accomp: { fr: "a cappella", en: "a cappella" },
    badge: null, teinte: ["#2c2533", "#8b6b7a"],
    pitch: {
      fr: "Lassus, Lobo, le Crucifixus de Lotti, le Miserere d'Allegri, la Missa Salve et le Magnificat de Victoria. Le programme existe en deux formats, à 9 ou à 17 voix, pour une chapelle comme pour une grande salle.",
      en: "Lassus, Lobo, Lotti's Crucifixus, Allegri's Miserere, Victoria's Missa Salve and Magnificat. Available in two formats, 9 or 17 voices, for a chapel as well as a large hall.",
    },
    oeuvres: ["Orlande de Lassus", "Alonso Lobo", "Antonio Lotti, Crucifixus", "Gregorio Allegri, Miserere", "Tomás Luis de Victoria, Missa Salve ; Ave maris stella ; Magnificat", "Francisco Guerrero", "Antiennes en plain-chant"],
    pratique: { fr: ["Deux formats : 9 ou 17 chanteurs", "Aucun instrument"], en: ["Two formats: 9 or 17 singers", "No instruments"] },
    deja: ["Rocamadour", "Opéra d'Avignon"],
    video: { inedit: false, duree: "4:00" }, episode: null,
  },
];
DC.programme = (id) => DC.programmes.find((p) => p.id === id);

// Diffuseurs : l'équipe et les agents. La direction voit tout.
DC.diffuseurs = [
  { id: "vincent", nom: "Vincent Lafourcade", role: "Développement et diffusion, France", court: "Vincent" },
  { id: "germanophone", nom: "Agence germanophone", role: "Allemagne, Autriche, Suisse", court: "l'agence germanophone", v2: true },
  { id: "oceanie", nom: "Agence Océanie", role: "Australie, Nouvelle-Zélande", court: "l'agence Océanie", v2: true },
  { id: "direction", nom: "Emmeran Rollin", role: "Direction artistique : voit tout", court: "Emmeran", v2: true },
];

DC.categories = [
  { id: "sacree", nom: "Festivals de musique sacrée" },
  { id: "scenes", nom: "Scènes et saisons" },
  { id: "dach", nom: "Festivals et salles germanophones" },
  { id: "oce", nom: "Océanie" },
];

// Programmateurs fictifs. « n » : niveau d'intérêt simulé dans l'historique
// (0 : rien ouvert ; 1 : ouvert ; 2 : programme lu ; 3 : vidéo ou épisode ; 4 : demande de contact).
DC.programmateurs = [
  { cle: "cv7k", nom: "Claire Vasseur", structure: "Festival Voix d'abbayes", lieu: "Normandie", pays: "FR", cat: "sacree", d: "vincent", n: 0, demo: true },
  { cle: "jm3p", nom: "Julien Marchetti", structure: "Heures musicales de Saint-Clair", lieu: "Provence", pays: "FR", cat: "sacree", d: "vincent", n: 4 },
  { cle: "sa9t", nom: "Sophie Arnaud", structure: "Cathédrale en musique", lieu: "Bretagne", pays: "FR", cat: "sacree", d: "vincent", n: 3 },
  { cle: "ml4r", nom: "Marc-Antoine Leroy", structure: "Festival Lumières baroques", lieu: "Bourgogne", pays: "FR", cat: "sacree", d: "vincent", n: 3 },
  { cle: "im2c", nom: "Isabelle Morin", structure: "Festival des Cimes", lieu: "Savoie", pays: "FR", cat: "sacree", d: "vincent", n: 2 },
  { cle: "ap8n", nom: "Anne-Laure Pichon", structure: "Nuits romanes du Lauragais", lieu: "Occitanie", pays: "FR", cat: "sacree", d: "vincent", n: 1 },
  { cle: "nf5h", nom: "Nicolas Faure", structure: "Riches Heures de Sainte-Foy", lieu: "Nouvelle-Aquitaine", pays: "FR", cat: "sacree", d: "vincent", n: 0 },
  { cle: "gm6w", nom: "Gilles Martel", structure: "Orgues et voix du Vexin", lieu: "Île-de-France", pays: "FR", cat: "sacree", d: "vincent", n: 2 },
  { cle: "hd2v", nom: "Hélène Dufresne", structure: "Scène nationale de l'Estuaire", lieu: "Pays de la Loire", pays: "FR", cat: "scenes", d: "vincent", n: 4 },
  { cle: "pg7m", nom: "Paul Gendron", structure: "Opéra de Valmont", lieu: "Grand Est", pays: "FR", cat: "scenes", d: "vincent", n: 1 },
  { cle: "tb3s", nom: "Thomas Bérard", structure: "Saison musicale du Prieuré", lieu: "Touraine", pays: "FR", cat: "scenes", d: "vincent", n: 3 },
  { cle: "cr8d", nom: "Camille Roussel", structure: "Auditorium des Docks", lieu: "Hauts-de-France", pays: "FR", cat: "scenes", d: "vincent", n: 0 },
  { cle: "kw4b", nom: "Katharina Weber", structure: "Kammermusiktage Lindenau", lieu: "Sachsen", pays: "DE", cat: "dach", d: "germanophone", n: 4, lang: "en" },
  { cle: "mb9f", nom: "Matthias Brandt", structure: "Domkonzerte Kirchberg", lieu: "Bayern", pays: "DE", cat: "dach", d: "germanophone", n: 3, lang: "en" },
  { cle: "uh5k", nom: "Ulrike Hoffmann", structure: "Festival Alte Musik Talheim", lieu: "Baden-Württemberg", pays: "DE", cat: "dach", d: "germanophone", n: 2, lang: "en" },
  { cle: "sg2r", nom: "Stefan Gruber", structure: "Konzerthaus Seefeld", lieu: "Tirol", pays: "AT", cat: "dach", d: "germanophone", n: 1, lang: "en" },
  { cle: "lm7q", nom: "Lukas Meier", structure: "Musiktage Albula", lieu: "Graubünden", pays: "CH", cat: "dach", d: "germanophone", n: 3, lang: "en" },
  { cle: "sk3z", nom: "Sabine Kraus", structure: "Kreuzgangkonzerte Waldbach", lieu: "Hessen", pays: "DE", cat: "dach", d: "germanophone", n: 0, lang: "en" },
  { cle: "av6j", nom: "Andreas Vogel", structure: "Abteikonzerte St. Benno", lieu: "Nordrhein-Westfalen", pays: "DE", cat: "dach", d: "germanophone", n: 2, lang: "en" },
  { cle: "jl8u", nom: "Johanna Lenz", structure: "Chorfest Rheinau", lieu: "Zürich", pays: "CH", cat: "dach", d: "germanophone", n: 0, lang: "en" },
  { cle: "oh4e", nom: "Olivia Hart", structure: "Harbour Sacred Music Series", lieu: "Sydney", pays: "AU", cat: "oce", d: "oceanie", n: 3, lang: "en" },
  { cle: "jw9a", nom: "James Whitford", structure: "Southern Cross Choral Festival", lieu: "Melbourne", pays: "AU", cat: "oce", d: "oceanie", n: 1, lang: "en" },
  { cle: "rk5y", nom: "Rachel Kingsley", structure: "Cathedral Concerts", lieu: "Wellington", pays: "NZ", cat: "oce", d: "oceanie", n: 2, lang: "en" },
  { cle: "dp2x", nom: "Daniel Price", structure: "Winter Voices", lieu: "Adelaide", pays: "AU", cat: "oce", d: "oceanie", n: 0, lang: "en" },
  { cle: "el6g", nom: "Emma Lockwood", structure: "Early Music Weekend", lieu: "Brisbane", pays: "AU", cat: "oce", d: "oceanie", n: 0, lang: "en" },
];
DC.programmateur = (cle) => DC.programmateurs.find((p) => p.cle === cle);

// Campagnes déjà envoyées (« j » : envoyée il y a j jours).
DC.campagnes = [
  { id: "c-mediavita", nom: "Media Vita, nouveau disque", d: "vincent", cat: "sacree", programmes: ["mediavita", "hymne"], lang: "fr", j: 3 },
  { id: "c-scenes", nom: "Saison 2027-2028 : Pureté et Cosmos", d: "vincent", cat: "scenes", programmes: ["purete", "cosmos"], lang: "fr", j: 9 },
  { id: "c-dach", nom: "Tournée germanophone 2028", d: "germanophone", cat: "dach", programmes: ["cantus", "purete", "bachmendelssohn"], lang: "en", j: 6 },
  { id: "c-oce", nom: "Oceania 2028", d: "oceanie", cat: "oce", programmes: ["mediavita", "purete"], lang: "en", j: 12 },
];

// Historique simulé, reconstruit de façon déterministe à partir du niveau de chaque programmateur.
DC.historique = () => {
  const evs = [], maintenant = Date.now(), H = 36e5;
  DC.campagnes.forEach((c) => {
    DC.programmateurs.filter((p) => p.cat === c.cat).forEach((p, i) => {
      const t0 = maintenant - c.j * 24 * H + (i * 7 + 3) * H;
      const p1 = c.programmes[i % c.programmes.length], p2 = c.programmes[(i + 1) % c.programmes.length];
      const ev = (t, h, extra) => evs.push({ k: `h-${p.cle}-${t}-${evs.length}`, t, r: p.cle, c: c.id, at: Math.min(t0 + h * H, maintenant - (i + 1) * 9e5), ...extra });
      if (p.n >= 1) ev("ouvre", 0);
      if (p.n >= 2) { ev("programme", 0.1, { p: p1 }); if (i % 2) ev("programme", 0.2, { p: p2 }); }
      if (p.n >= 3) { ev("video", 0.15, { p: p1 }); if (i % 3 === 0) ev("episode", 0.3, { p: p1 }); if (i % 2 === 0) ev("ouvre", 20); }
      if (p.n >= 4) { ev("kit", 20.2, { p: p1 }); ev("interet", 20.4, { p: p1, mode: i % 2 ? "rappel" : "interesse", saison: "2027-2028", message: i % 2 ? "" : "Nous cherchons un programme pour notre week-end de clôture. Possible en septembre ?" }); }
    });
  });
  return evs.sort((a, b) => a.at - b.at);
};

// Page spectateur : Cantus Missae, telle que le public la lit dans n'importe quelle salle de la tournée.
// Commentaires : clés d'écoute rédigées pour le Festival de Rocamadour, adaptées à la tournée.
// Textes chantés : domaine public (Bible de Luther, Claudius, Thymich, Herbert, ordinaire de la messe). Traductions : Double Dièse.
DC.concert = {
  programme: "cantus",
  titre: "Cantus Missae",
  fil: { fr: "Du « pourquoi ? » à la louange", en: "From “why?” to praise", de: "Vom „Warum?“ zum Lob" },
  interpretes: { fr: "Ensemble la Sportelle · 17 voix · direction Nigel Short", en: "Ensemble la Sportelle · 17 voices · conducted by Nigel Short", de: "Ensemble la Sportelle · 17 Stimmen · Leitung Nigel Short" },
  accroche: {
    fr: "Pas un instrument. Au centre, la messe à double chœur de Rheinberger. Autour d'elle, Mendelssohn, Brahms et Mauersberger posent tour à tour la même question, « Warum ? », pourquoi. Et à la fin de chaque partie, Bach ouvre la porte.",
    en: "Not a single instrument. At its heart, Rheinberger's double-choir mass. Around it, Mendelssohn, Brahms and Mauersberger each ask the same question: “Warum?”, why? And at the end of each half, Bach opens the door.",
    de: "Kein einziges Instrument. Im Zentrum Rheinbergers doppelchörige Messe. Um sie herum stellen Mendelssohn, Brahms und Mauersberger nacheinander dieselbe Frage: „Warum?“ Und am Ende jedes Teils öffnet Bach die Tür.",
  },
  aSavoir: {
    fr: ["Ce soir, deux chœurs. La plupart des œuvres sont écrites pour double chœur, à huit voix : quand une phrase passe d'un groupe à l'autre, fermez les yeux et écoutez d'où vient le son.", "On chante en allemand et en latin. Touchez une œuvre : le texte chanté et sa traduction sont dessous.", "Le nouveau disque de La Sportelle, Media Vita, vous attend à la sortie."],
    en: ["Two choirs tonight. Most of the works are written for double choir, in eight parts: when a phrase passes from one group to the other, close your eyes and listen to where the sound comes from.", "The texts are sung in German and Latin. Tap a work: the sung text and its translation are below.", "La Sportelle's new album, Media Vita, is waiting for you at the exit."],
    de: ["Heute Abend zwei Chöre. Die meisten Werke sind achtstimmig für Doppelchor geschrieben: Wenn eine Phrase von einer Gruppe zur anderen wandert, schließen Sie die Augen und hören Sie, woher der Klang kommt.", "Gesungen wird auf Deutsch und Latein. Tippen Sie auf ein Werk: Text und Übersetzung finden Sie darunter.", "Das neue Album von La Sportelle, Media Vita, erwartet Sie am Ausgang."],
  },
  textes: {
    reger1: { o: "Der Mensch lebt und bestehet nur eine kleine Zeit; und alle Welt vergehet mit ihrer Herrlichkeit. Es ist nur Einer ewig und an allen Enden, und wir in seinen Händen.", src: "Matthias Claudius",
      fr: "L'homme vit et demeure un peu de temps seulement ; et le monde entier passe avec sa splendeur. Un seul est éternel, partout et jusqu'au bout, et nous sommes dans ses mains.",
      en: "Man lives and endures only a little while; and all the world passes away with its glory. One alone is eternal, everywhere and to the end, and we are in his hands." },
    mendelssohn22: { o: "Mein Gott, mein Gott, warum hast du mich verlassen? Ich heule, aber meine Hilfe ist ferne.", src: "Psaume 22, début",
      fr: "Mon Dieu, mon Dieu, pourquoi m'as-tu abandonné ? Je crie, mais mon secours est loin.",
      en: "My God, my God, why hast thou forsaken me? I cry out, but my help is far from me." },
    rheinberger: { o: "Kyrie eleison. Christe eleison. Kyrie eleison.\n\nSanctus, sanctus, sanctus Dominus Deus Sabaoth. Pleni sunt caeli et terra gloria tua. Hosanna in excelsis.\n\nAgnus Dei, qui tollis peccata mundi, dona nobis pacem.", src: "Ordinaire de la messe, extraits",
      fr: "Seigneur, prends pitié. Christ, prends pitié. Seigneur, prends pitié.\n\nSaint, saint, saint, le Seigneur, Dieu de l'univers. Le ciel et la terre sont remplis de ta gloire. Hosanna au plus haut des cieux.\n\nAgneau de Dieu, qui enlèves les péchés du monde, donne-nous la paix.",
      en: "Lord, have mercy. Christ, have mercy. Lord, have mercy.\n\nHoly, holy, holy Lord God of hosts. Heaven and earth are full of your glory. Hosanna in the highest.\n\nLamb of God, who takes away the sins of the world, grant us peace.",
      de: "Herr, erbarme dich. Christus, erbarme dich. Herr, erbarme dich.\n\nHeilig, heilig, heilig Gott, Herr aller Mächte und Gewalten. Erfüllt sind Himmel und Erde von deiner Herrlichkeit. Hosanna in der Höhe.\n\nLamm Gottes, du nimmst hinweg die Sünde der Welt: gib uns deinen Frieden." },
    bach229: { o: "Komm, Jesu, komm, mein Leib ist müde, die Kraft verschwindt je mehr und mehr, ich sehne mich nach deinem Friede; der saure Weg wird mir zu schwer! Komm, komm, ich will mich dir ergeben; du bist der rechte Weg, die Wahrheit und das Leben.", src: "Paul Thymich, 1684",
      fr: "Viens, Jésus, viens, mon corps est las, ma force s'en va de plus en plus, j'aspire à ta paix ; le chemin amer m'est trop lourd ! Viens, viens, je veux m'abandonner à toi ; tu es le vrai chemin, la vérité et la vie.",
      en: "Come, Jesus, come, my body is weary, my strength fades more and more, I long for your peace; the bitter road is too hard for me! Come, come, I will give myself to you; you are the true way, the truth and the life." },
    reger3: { o: "Die Nacht ist kommen, drin wir ruhen sollen; Gott walt's, zu Frommen nach sei'm Wohlgefallen, dass wir uns legen in sei'm G'leit und Segen, der Ruh zu pflegen.", src: "Petrus Herbert, 1566, première strophe",
      fr: "La nuit est venue, où nous devons reposer ; que Dieu la conduise pour notre bien, selon sa volonté, afin que nous nous couchions sous sa garde et sa bénédiction, pour goûter le repos.",
      en: "Night has come, in which we are to rest; may God rule it for our good, as pleases him, that we may lie down in his guidance and blessing, and take our rest." },
    brahms74: { o: "Warum ist das Licht gegeben dem Mühseligen, und das Leben den betrübten Herzen?", src: "Job 3, 20",
      fr: "Pourquoi la lumière est-elle donnée au malheureux, et la vie à ceux dont le cœur est affligé ?",
      en: "Wherefore is light given to him that is in misery, and life unto the bitter in soul?" },
    mauersberger: { o: "Wie liegt die Stadt so wüst, die voll Volks war.", src: "Lamentations 1, 1",
      fr: "Comme elle est déserte, la ville qui était pleine de peuple !",
      en: "How doth the city sit solitary, that was full of people!" },
    mendelssohn91: { o: "Denn er hat seinen Engeln befohlen über dir, dass sie dich behüten auf allen deinen Wegen, dass sie dich auf den Händen tragen und du deinen Fuß nicht an einen Stein stoßest.", src: "Psaume 91, 11-12",
      fr: "Car il a donné ordre à ses anges de te garder dans toutes tes voies ; ils te porteront sur leurs mains, pour que ton pied ne heurte pas la pierre.",
      en: "For he shall give his angels charge over thee, to keep thee in all thy ways. They shall bear thee up in their hands, lest thou dash thy foot against a stone." },
    brahms110: { o: "Ich aber bin elend, und mir ist wehe.", src: "Psaume 69, premier motet, début",
      fr: "Mais moi, je suis malheureux et souffrant.",
      en: "But I am poor and sorrowful." },
    bach225: { o: "Singet dem Herrn ein neues Lied; die Gemeine der Heiligen sollen ihn loben.", src: "Psaume 149, 1",
      fr: "Chantez au Seigneur un chant nouveau ; que l'assemblée des fidèles le loue.",
      en: "Sing unto the Lord a new song: let the congregation of saints praise him." },
  },
  soiree: [{"id": "reger1", "partie": 1, "compositeur": "Max Reger", "titre": "Der Mensch lebt und bestehet, op. 138 n° 1", "annee": "1914", "bref": "Le concert s'ouvre sur six vers de Matthias Claudius : l'homme ne vit qu'un peu de temps, le monde passe avec sa splendeur, Dieu seul demeure, « et nous sommes dans ses mains ». Reger écrit ce chœur en 1914, deux ans avant sa mort. Il est d'ordinaire l'homme des partitions touffues ; ici, il tient en trois minutes. Les harmonies glissent sans cesse, comme un sol qui se dérobe, jusqu'à l'accord final, posé et sûr de lui.", "long": ["§ Le dernier Reger", "Max Reger meurt à Leipzig en mai 1916, à quarante-trois ans, épuisé par le travail, l'alcool et des tournées sans fin. Les Huit chants spirituels de l'opus 138 font partie de ses dernières pages chorales. On l'associe d'habitude à l'orgue et à des fugues d'une densité vertigineuse ; ces chœurs montrent l'autre Reger, celui qui sait se taire.", "Reger disait de Bach qu'il était « le commencement et la fin de toute musique ». Ce soir, le programme lui donne raison : il commence par Reger et finit par Bach.", "§ Ce qu'il faut écouter", "Le poème de Claudius oppose deux temps : celui de l'homme, bref, et celui de Dieu, qui ne passe pas. Reger le traduit par l'harmonie. Sur « l'homme » et « le monde », les accords changent de couleur presque à chaque mot, par petits glissements chromatiques : rien ne tient. Sur « Dieu seul est éternel », le mouvement ralentit et se stabilise. Les derniers mots, « und wir in seinen Händen », arrivent tout doucement, sur un accord qui ne bouge plus."], "ecoute": "Les derniers mots, « et nous sommes dans ses mains », arrivent pianissimo : tout le sens du chœur tient dans ce repos.", "guetter": [["Le début", "Des accords qui changent de couleur à chaque mot : la vie de l'homme, qui ne tient pas."], ["La fin", "Tout ralentit sur « und wir in seinen Händen » : un accord immobile, comme une main qui se referme."]]}, {"id": "mendelssohn22", "partie": 1, "compositeur": "Felix Mendelssohn", "titre": "Mein Gott, warum hast du mich verlassen?, op. 78 n° 3", "annee": "1844", "bref": "« Mon Dieu, pourquoi m'as-tu abandonné ? » Ce sont les premiers mots du psaume 22, et ceux que Jésus prononce sur la croix. En 1844, Mendelssohn est chargé de la musique de la cathédrale de Berlin, où le roi de Prusse veut renouveler le chant liturgique. Il y répond par des psaumes pour double chœur. Celui-ci est le plus dramatique : quelques voix presque récitantes exposent la détresse, puis le chœur entier répond. Le texte va de l'abandon à la confiance, et la musique avec lui. Premier « pourquoi ? » de la soirée.", "long": ["§ L'homme qui a ressuscité Bach", "En 1829, à vingt ans, Mendelssohn dirige à Berlin la Passion selon saint Matthieu, qu'on n'avait plus jouée depuis la mort de Bach. Ce concert marque le début de la redécouverte de Bach au XIXe siècle. Tout ce que vous entendrez ce soir descend de ce geste : Brahms, Reger et Rheinberger ont grandi dans le Bach que Mendelssohn a rendu au public.", "§ Berlin, 1844", "Le roi Frédéric-Guillaume IV rêve d'un culte rénové, où le chœur chanterait seul, comme dans l'Église ancienne. Mendelssohn, nommé à la cathédrale, écrit pour ses chanteurs une série de psaumes et de motets a cappella. Ils seront publiés après sa mort, en 1849, sous le numéro d'opus 78.", "§ Une dramaturgie en dialogue", "Mendelssohn ne met pas le psaume en musique d'un seul bloc. Il fait alterner des passages confiés à quelques voix, sobres, proches de la récitation liturgique, et des réponses de tout le chœur, plus amples. On croit entendre un homme seul qui crie, puis une assemblée qui reprend sa plainte. Écoutez comment l'harmonie se resserre sur les mots de la souffrance, puis s'ouvre quand le texte tourne vers la confiance."], "ecoute": "Écoutez le dialogue : une ou deux voix exposent, tout le chœur répond. Un homme seul, puis une foule.", "guetter": [["Le cri", "Quelques voix, presque parlées, posent la question : « Mon Dieu, pourquoi m'as-tu abandonné ? »"], ["La réponse", "Le chœur entier reprend et élargit la plainte. Peu à peu, l'harmonie s'éclaire : le texte va vers la confiance."]]}, {"id": "rheinberger", "partie": 1, "compositeur": "Josef Rheinberger", "titre": "Messe en mi bémol majeur « Cantus Missae », op. 109", "annee": "1878", "bref": "Le cœur du concert. Rheinberger, organiste et professeur à Munich, écrit cette messe en quelques jours, en janvier 1878, pour deux chœurs à quatre voix, sans instrument. Il la dédie au nouveau pape, Léon XIII, qui le fait chevalier de l'ordre de Saint-Grégoire. On l'a surnommée « le Palestrina du XIXe siècle » : des lignes qui chantent comme à la Renaissance, mais des harmonies de son temps, riches, parfois chargées de dissonances soudaines. Dix-sept voix réparties en deux chœurs.", "long": ["§ Un enfant de Vaduz devenu maître à Munich", "Josef Rheinberger naît en 1839 à Vaduz, dans le Liechtenstein. À sept ans, il tient déjà l'orgue de l'église paroissiale. Il fait toute sa carrière à Munich, où il enseigne l'orgue et la composition pendant plus de quarante ans. Engelbert Humperdinck, Ermanno Wolf-Ferrari et Wilhelm Furtwängler figurent parmi ses élèves. En 1877, il devient maître de chapelle de la cour de Bavière ; c'est dans ces années qu'il écrit l'essentiel de ses quatorze messes.", "§ Une messe pour deux chœurs", "Le titre latin complet dit l'ambition : Cantus Missae ex octo modulatione vocum concinnatus, un chant de messe composé pour huit voix. C'est sa seule messe à double chœur. Rheinberger la termine en janvier 1878 et la dédie à Léon XIII, élu le 20 février. Elle est créée le 1er janvier 1879 à la chapelle de la Résidence de Munich, sous sa direction. Son élève Joseph Renner y voyait le sommet de son œuvre a cappella.", "§ Kyrie", "Moderato. Les deux chœurs ne chantent pas l'un contre l'autre : ils se tendent les phrases, puis se rejoignent. Écoutez le moment où les huit voix sonnent ensemble pour la première fois. Sous une voûte, l'effet est saisissant : le son semble venir de partout.", "§ Gloria", "Allegro moderato. Le Gloria s'ouvre à huit voix, dans l'éclat. Rheinberger y alterne les blocs d'accords, déclamés par les deux chœurs à la fois, et les échanges rapides d'un chœur à l'autre, comme deux tribunes d'une même église. Au centre, le « Qui tollis », plus lent et plus sombre, fait entendre l'harmonie romantique sous les lignes renaissance.", "§ Credo", "Moderato. Le Credo commence par les basses, comme une intonation liturgique, puis tout le chœur reprend. C'est le texte le plus long de la messe, et Rheinberger le traite en grand récit. Guettez le « Et incarnatus est » : le tempo se suspend, les voix se resserrent, et le « Crucifixus » descend vers le grave avant que le « Et resurrexit » relance tout.", "§ Sanctus et Benedictus", "Le Sanctus, Lento, s'élève par vagues, d'un chœur à l'autre, jusqu'à l'« Hosanna ». Le Benedictus, Andantino, est le moment le plus intime de la messe : une mélodie souple, presque une berceuse, que Rheinberger confie à des voix plus légères.", "§ Agnus Dei", "Lento. Les dissonances qui avaient traversé la messe se font plus douces. Le « Dona nobis pacem » final retrouve le mi bémol majeur du début, apaisé, et laisse le dernier accord résonner dans les voûtes."], "ecoute": "Dans le Kyrie, guettez le premier moment où les huit voix chantent ensemble : le son vient de partout à la fois.", "guetter": [["Kyrie", "Les deux chœurs se passent les phrases, puis se rejoignent. Le premier tutti à huit voix remplit toute la nef."], ["Gloria", "Des blocs d'accords lancés par les deux chœurs à la fois, puis des échanges rapides de l'un à l'autre. Au milieu, un passage lent et sombre."], ["Credo", "Les basses commencent seules. Plus loin, le tempo se suspend sur « Et incarnatus est », puis tout repart avec la résurrection."], ["Sanctus, Benedictus", "Le Sanctus monte par vagues jusqu'à l'Hosanna. Le Benedictus, lui, est presque une berceuse."], ["Agnus Dei", "Les dissonances s'apaisent. Le dernier accord revient au ton du début : laissez-le résonner avant d'applaudir."]]}, {"id": "bach229", "partie": 1, "compositeur": "Jean-Sébastien Bach", "titre": "Komm, Jesu, komm, BWV 229", "annee": "avant 1732", "bref": "« Viens, Jésus, viens, mon corps est fatigué. » Le poème de Paul Thymich avait été écrit pour les obsèques d'un recteur de Leipzig, en 1684. Bach le met en musique pour deux chœurs, sans doute pour un enterrement lui aussi. La première partie est un dialogue de fatigue et d'appel : les deux chœurs se renvoient le mot « komm ». Puis le rythme se met à danser sur « tu es le vrai chemin, la vérité et la vie ». La fin, très simple, à quatre voix, dit adieu au monde : « Welt, gute Nacht ».", "long": ["§ Un motet de funérailles", "À Leipzig, les motets de Bach servent surtout aux enterrements de notables. On ne connaît pas la date exacte de Komm, Jesu, komm ; la plus ancienne copie remonte au début des années 1730. Le texte, de Paul Thymich, avait déjà été mis en musique par Johann Schelle, un prédécesseur de Bach à Saint-Thomas, pour les obsèques du recteur Jacob Thomasius.", "§ La fatigue et l'appel", "Les deux chœurs commencent par des appels, « komm, komm », lancés de l'un à l'autre. Puis vient la phrase la plus célèbre du motet : « der saure Weg wird mir zu schwer », le chemin amer m'est devenu trop lourd. Sur « saure », amer, Bach tord la ligne par un intervalle douloureux, et la musique ralentit comme un homme qui n'avance plus.", "§ Le chemin qui danse", "Changement complet : sur « du bist der rechte Weg, die Wahrheit und das Leben », la mesure passe à un rythme ternaire, léger, presque une danse. Les voix entrent les unes après les autres, et le chemin trop lourd devient un chemin qu'on parcourt avec joie.", "§ L'aria finale", "Bach termine par une « Aria » à quatre voix, les deux chœurs réunis : une mélodie de choral, harmonisée simplement, sur deux strophes. « Drum schließ ich mich in deine Hände und sage, Welt, zu guter Nacht ! » C'est la fin de la première partie, et c'est une berceuse."], "ecoute": "Sur « der saure Weg », le chemin amer, la mélodie se tord : écoutez ce petit intervalle douloureux, il dit tout.", "guetter": [["L'appel", "Les deux chœurs se renvoient « komm, komm ». Puis « le chemin amer m'est trop lourd » : la ligne se tord et ralentit."], ["La danse", "Sur « tu es le vrai chemin », le rythme change, léger, à trois temps. Les voix entrent l'une après l'autre."], ["L'adieu", "Une mélodie toute simple, à quatre voix : « Monde, bonne nuit ». Fin de la première partie."]]}, {"id": "entracte", "pause": true, "titre": "Entracte", "duree": "20 min"}, {"id": "reger3", "partie": 2, "compositeur": "Max Reger", "titre": "Nachtlied, op. 138 n° 3", "annee": "1914", "bref": "« Die Nacht ist kommen » : la nuit est venue, où nous devons reposer. Le poème est un cantique du XVIe siècle, de Petrus Herbert, une prière du soir. Reger en fait un chant d'une grande douceur, presque immobile. Après l'entracte, c'est une manière de refaire le silence avant d'entrer dans les grandes questions de la seconde partie.", "long": ["§ Une prière du soir", "Le texte de Petrus Herbert, publié en 1566 dans un recueil de cantiques de l'Unité des Frères de Bohême, demande à Dieu de garder le dormeur pendant la nuit, et de le garder aussi dans la nuit plus longue de la mort. Reger le met en musique dans le même recueil que le chœur entendu en ouverture.", "§ Ce qu'il faut écouter", "Les strophes se ressemblent, et c'est voulu : la prière se répète comme on la dit chaque soir. Écoutez comment Reger varie légèrement l'harmonie d'une strophe à l'autre, avec ces glissements qui lui sont propres, sans jamais rompre le calme. Les fins de phrase s'éteignent toutes, comme des lampes."], "ecoute": "Laissez-vous porter : les strophes se répètent comme une prière du soir, et chaque fin de phrase s'éteint.", "guetter": [["Les strophes", "Une même prière, répétée. Chaque fois, l'harmonie change à peine de couleur."], ["Les fins", "Chaque phrase s'éteint doucement, comme une lampe qu'on baisse."]]}, {"id": "brahms74", "partie": 2, "compositeur": "Johannes Brahms", "titre": "Warum ist das Licht gegeben?, op. 74 n° 1", "annee": "1877", "bref": "« Pourquoi la lumière est-elle donnée au malheureux ? » La question vient du livre de Job. Brahms la pose quatre fois, et quatre fois le chœur crie « Warum ? », pourquoi, avant de se perdre dans des lignes qui s'enroulent sans trouver de réponse. Puis le texte change de livre et de ton : on élève son cœur, on loue ceux qui ont tenu bon. Et Brahms termine par un choral de Luther, harmonisé comme le ferait Bach. Il dédie ce motet à Philipp Spitta, le grand biographe de Bach.", "long": ["§ Brahms et Bach", "Brahms a passé sa vie à étudier les maîtres anciens. Il copie des partitions de la Renaissance, souscrit à l'édition complète de Bach et compose, jeune homme, des canons et des fugues pour se former la main. En 1877, il dédie ses deux motets de l'opus 74 à Philipp Spitta, qui publie alors sa monumentale biographie de Bach. L'hommage est explicite : ce motet est construit comme une cantate de Bach, de la plainte au choral.", "§ Les quatre « pourquoi »", "Le texte de Job, chapitre 3, est l'un des plus désespérés de la Bible : pourquoi donner la vie à celui qui attend la mort et ne la trouve pas ? Brahms isole le mot « Warum ? » et le lance en accords, à plusieurs reprises, comme une question qui revient. Entre ces cris, les voix s'enroulent en contrepoint serré, chromatique, sans trouver d'issue.", "Brahms reprend ici une musique écrite vingt ans plus tôt, en 1856, pour une messe en canons qu'il n'avait jamais achevée. Le jeune Brahms apprenait le contrepoint ; le Brahms mûr en fait un cri.", "§ La sortie", "Deux nouveaux textes ouvrent une issue. D'abord les Lamentations : « Lasset uns unser Herz samt den Händen aufheben zu Gott », élevons notre cœur et nos mains vers Dieu, traité en canon serré, les voix se suivant à très court intervalle. Puis l'épître de Jacques : « nous déclarons heureux ceux qui ont tenu bon », plus apaisé.", "§ Le choral", "Pour finir, Brahms harmonise le choral de Luther « Mit Fried und Freud ich fahr dahin », je pars dans la paix et la joie, le cantique de Siméon. Écoutez les dernières mesures : la mélodie descend lentement, et l'harmonie, ancienne et modale, semble venir d'un autre temps. La question du début n'a pas reçu de réponse ; elle a été remplacée par une paix."], "ecoute": "Comptez les « Warum ? » : quatre cris, quatre fois sans réponse. La réponse viendra d'ailleurs, avec le choral final.", "guetter": [["Les cris", "« Warum ? » lancé en accords, plusieurs fois. Entre les cris, des lignes qui s'enroulent sans trouver d'issue."], ["Le canon", "« Élevons notre cœur » : les voix se suivent de très près, en canon, comme une montée."], ["Le choral", "Un cantique de Luther, harmonisé comme chez Bach. La mélodie descend lentement : la paix remplace la question."]]}, {"id": "mauersberger", "partie": 2, "compositeur": "Rudolf Mauersberger", "titre": "Wie liegt die Stadt so wüst", "annee": "1945", "bref": "Dresde, 13 et 14 février 1945 : les bombardements détruisent la ville, la Kreuzkirche brûle, onze garçons du chœur de la Croix sont tués. Rudolf Mauersberger dirige ce chœur depuis quinze ans. Il écrit ce motet sur les Lamentations de Jérémie, qui pleurent Jérusalem en ruine : « Comme la ville est déserte, elle qui était pleine de peuple. » Il le crée le 4 août 1945, dans les ruines de la Kreuzkirche. C'est le seul moment du XXe siècle de la soirée, et le plus nu.", "long": ["§ Le cantor de la Croix", "Rudolf Mauersberger dirige le Kreuzchor de Dresde, l'un des plus anciens chœurs de garçons d'Allemagne, de 1930 à 1971. Il est l'héritier direct de la tradition des cantors luthériens, celle de Bach à Leipzig.", "§ Février 1945", "Dans la nuit du 13 au 14 février 1945, Dresde est détruite. La Kreuzkirche est incendiée, l'internat du chœur aussi, et onze choristes meurent. Mauersberger écrit dans les semaines qui suivent ce motet sur les Lamentations de Jérémie. Le 4 août 1945, le Kreuzchor le chante pour la première fois dans l'église sans toit, lors des premières vêpres d'après-guerre.", "§ Une écriture de ruines", "Mauersberger n'écrit pas une musique spectaculaire. Les lignes sont souvent à l'unisson ou en accords dépouillés, et l'harmonie emprunte aux modes anciens. Le texte avance comme un constat : les portes sont désertes, la ville la plus belle est devenue un objet de moquerie, le feu est descendu dans les os. Puis vient, comme chez Brahms quelques minutes plus tôt, une question : « Warum willst du unser so gar vergessen ? », pourquoi veux-tu nous oublier ? La prière finale, « Herr, siehe an mein Elend », Seigneur, regarde ma misère, ne se résout pas en lumière. Elle reste ouverte.", "Placé après Brahms, ce motet donne au « pourquoi » du XIXe siècle un visage précis : une ville, une date, des enfants."], "ecoute": "Après le dernier accord, ne vous pressez pas d'applaudir : ce motet est fait pour finir dans le silence.", "guetter": [["La ville", "Des lignes nues, souvent à l'unisson : « Comme la ville est déserte ». Un constat, sans effet."], ["La question", "Le troisième « pourquoi ? » de la soirée : « pourquoi veux-tu nous oublier ? »"], ["La fin", "« Seigneur, regarde ma misère. » La prière reste ouverte. Laissez le silence durer."]]}, {"id": "mendelssohn91", "partie": 2, "compositeur": "Felix Mendelssohn", "titre": "Denn er hat seinen Engeln befohlen über dir", "annee": "1844", "bref": "Après la ville en ruine, une promesse de protection : « Il a donné ordre à ses anges de te garder dans toutes tes voies », psaume 91. Mendelssohn écrit ce motet pour double chœur en 1844. Il le reprendra deux ans plus tard dans son oratorio Elias, où il devient l'un des passages les plus aimés. La musique est souple, lumineuse, les deux chœurs se répondent comme des ailes.", "long": ["§ De Berlin à Elias", "Mendelssohn compose ce motet en 1844, la même année que le psaume entendu en première partie. On le rattache souvent à l'attentat manqué contre le roi de Prusse, cet été-là. En 1846, il en reprend la musique dans Elias, son grand oratorio créé à Birmingham : les anges y veillent sur le prophète endormi dans le désert.", "§ Ce qu'il faut écouter", "Écoutez le dialogue entre les deux chœurs : une phrase lancée d'un côté, reprise de l'autre, puis les huit voix ensemble. Sur « dass sie dich auf den Händen tragen », qu'ils te portent sur leurs mains, la musique s'allège encore. C'est la pièce la plus consolante de la soirée, placée exactement après la plus désolée."], "ecoute": "Ce motet vient juste après les ruines de Dresde : écoutez-le comme une réponse.", "guetter": [["La promesse", "« Il a donné ordre à ses anges de te garder. » Un chœur lance, l'autre reprend."], ["Les mains", "« Qu'ils te portent sur leurs mains » : la musique s'allège, presque en apesanteur."]]}, {"id": "brahms110", "partie": 2, "compositeur": "Johannes Brahms", "titre": "Trois motets, op. 110", "annee": "1889", "bref": "Les dernières pages de Brahms pour chœur a cappella. Trois motets courts, écrits en 1889 : « Ich aber bin elend », je suis malheureux, pour double chœur ; « Ach, arme Welt », pauvre monde, tu me trompes, à quatre voix ; et « Wenn wir in höchsten Nöten sein », quand nous sommes dans la plus grande détresse, de nouveau pour double chœur. Brahms a cinquante-six ans. Il ne pose plus la question ; il demande simplement du secours.", "long": ["§ Le dernier mot de Brahms au chœur", "En 1889, Brahms publie ses Fest- und Gedenksprüche, opus 109, et ces trois motets, opus 110. Ce sont ses derniers ouvrages pour chœur sans accompagnement. Douze ans après le motet entendu tout à l'heure, l'écriture s'est encore concentrée : chaque motet dure à peine quelques minutes.", "§ Ich aber bin elend", "Pour double chœur. Le texte mêle un psaume, « je suis malheureux et souffrant », et l'Exode : « Seigneur, Dieu miséricordieux et bienveillant ». Écoutez comment les deux chœurs passent de la plainte à l'invocation : les accords s'élargissent, la lumière entre.", "§ Ach, arme Welt", "À quatre voix seulement. Un adieu au monde trompeur, dans une écriture de choral très simple, presque un cantique populaire. Le contraste avec les deux autres motets, plus amples, est voulu.", "§ Wenn wir in höchsten Nöten sein", "Pour double chœur, sur un cantique de Paul Eber. Les deux chœurs se répondent strophe après strophe, puis se rejoignent. La fin est un acte de confiance : la question de Job, posée par le même Brahms une demi-heure plus tôt, a trouvé sa forme la plus humble."], "ecoute": "Trois motets, trois tailles : double chœur, quatre voix, double chœur. Écoutez le chœur se resserrer au centre, puis s'ouvrir à nouveau.", "guetter": [["Ich aber bin elend", "Double chœur. De la plainte à l'invocation : les accords s'élargissent."], ["Ach, arme Welt", "Quatre voix seulement, comme un cantique. Un adieu au monde, tout simple."], ["Wenn wir in höchsten Nöten sein", "Les deux chœurs se répondent, puis se rejoignent dans la confiance."]]}, {"id": "bach225", "partie": 2, "compositeur": "Jean-Sébastien Bach", "titre": "Singet dem Herrn ein neues Lied, BWV 225", "annee": "1726-1727", "bref": "Après une heure de « pourquoi ? », la réponse de Bach : chantez au Seigneur un chant nouveau. C'est le plus éclatant de ses motets, pour deux chœurs qui se lancent les mots comme des balles. Au centre, un moment suspendu : un chœur chante un choral pendant que l'autre prie librement. Et la fin est une fugue sur « Alles was Odem hat, lobe den Herrn », que tout ce qui respire loue le Seigneur. En 1789, Mozart l'entend à Leipzig et s'écrie : « Voilà enfin quelque chose dont on peut apprendre ! »", "long": ["§ Mozart à Leipzig", "En avril 1789, Mozart passe par Leipzig. À l'école Saint-Thomas, le cantor Doles fait chanter devant lui ce motet de Bach. Selon le récit de Rochlitz, Mozart s'exclame dès les premières mesures, puis demande les parties, qui n'existent qu'en voix séparées : il les étale autour de lui, sur ses genoux et sur les chaises, et ne se relève qu'après les avoir toutes lues.", "§ Premier volet : le chant nouveau", "Psaume 149. Un chœur tient de longues notes sur « singet », chantez, pendant que l'autre fait pétiller le mot en motifs rapides ; puis ils échangent les rôles. Sur « die Kinder Zion sei'n fröhlich », que les enfants de Sion se réjouissent, Bach lance une fugue d'une énergie incroyable, qui monte d'une voix à l'autre.", "§ Deuxième volet : la prière au centre", "Le rythme s'apaise. Un chœur chante, en notes longues, une strophe du choral « Nun lob, mein Seel, den Herren » : comme un père a pitié de ses enfants. L'autre chœur lui répond par une prière libre, « Gott, nimm dich ferner unser an », Dieu, prends soin de nous. Deux textes, deux styles, en même temps : la foi collective et la prière personnelle.", "§ Troisième volet : tout ce qui respire", "Psaume 150. Les deux chœurs reprennent ensemble, « Lobet den Herrn in seinen Taten ». Puis ils fusionnent en un seul chœur à quatre voix pour la fugue finale, « Alles was Odem hat, lobe den Herrn ». Le sujet court sans reprendre souffle, les entrées s'enchaînent, et tout s'achève sur un Halleluja. Le contraire exact de la fin de la première partie : là, une berceuse ; ici, une course."], "ecoute": "Dans la fugue finale, suivez le thème d'une voix à l'autre : il ne s'arrête plus jusqu'au dernier Halleluja.", "guetter": [["Singet", "Un chœur tient des notes longues, l'autre fait pétiller le mot « singet ». Puis une fugue éclate."], ["La prière", "Au centre, deux textes en même temps : un choral en notes longues, et une prière libre qui lui répond."], ["Alles was Odem hat", "Les deux chœurs n'en font plus qu'un. La fugue court jusqu'au dernier Halleluja."]]}],
};

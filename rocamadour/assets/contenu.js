// Contenus de la démonstration Festival de Rocamadour, concert du mercredi 19 août 2026.
// Programme et interprètes : page publique du concert sur rocamadourfestival.com et ensemblelasportelle.com.
// Textes sur les œuvres : brouillons de Double Dièse, à relire par Thibault d'Hauthuille.
// Dans les textes longs, un paragraphe qui commence par « § » devient un intertitre.
window.DC = window.DC || {};
DC.contenu = {
  // Préfixe du stockage local et du canal : cette démo ne partage rien avec celle de l'ONCT.
  prefixe: "roca-",
  orchestre: "Festival de Rocamadour",
  // Logo en version foncée pour les écrans clairs ; la feuille de style l'éclaircit dans les écrans sombres.
  // L'original blanc est conservé à côté (logo-rocamadour-blanc.png).
  logo: "logo-rocamadour.png",
  saison: "Festival de Rocamadour, août 2026",
  concert: {
    titre: "Cantus Missae",
    fil: "Du « pourquoi ? » à la louange",
    accroche: "Deux chœurs et pas un instrument. Au centre, la messe à double chœur de Rheinberger. Autour d'elle, Mendelssohn, Brahms et Mauersberger posent tour à tour la même question, « Warum ? », pourquoi. Et à la fin de chaque partie, Bach ouvre la porte.",
    date: "Mercredi 19 août 2026",
    dateIso: "2026-08-19",
    heure: "21 h",
    debutIso: "2026-08-19T21:00:00+02:00",
    finIso: "2026-08-19T22:30:00+02:00",
    lieu: "Abbatiale Sainte-Marie, Souillac",
    duree: "Environ 1 h 30, avec un entracte",
    entracte: "Vingt minutes. Ensuite, la nuit de Reger, les trois « pourquoi ? » de Brahms et de Mauersberger, les anges de Mendelssohn, et Bach pour finir dans la jubilation.",
    // Le parcours de l'espace du festival se lit comme si l'on était deux jours avant le concert.
    simulerJ: -2,
  },
  artistes: [
    { nom: "Tenebrae", role: "chœur", texte: "Chœur britannique fondé en 2001 par Nigel Short, ancien membre des King's Singers.", lien: "https://www.tenebrae-choir.com" },
    { nom: "Ensemble la Sportelle", role: "chœur de chambre", texte: "Né en 2017 à Rocamadour, ce chœur de dix-sept voix porte le nom de la médaille remise aux pèlerins. Direction artistique : Emmeran Rollin.", lien: "https://ensemblelasportelle.com" },
    { nom: "Nigel Short", role: "direction", texte: "Fondateur et directeur artistique de Tenebrae.", lien: "https://www.tenebrae-choir.com" },
  ],
  // L'ordre de la soirée. La pause est un élément de la ligne, pas une œuvre.
  soiree: [
    {
      id: "reger1", partie: 1, compositeur: "Max Reger", titre: "Der Mensch lebt und bestehet, op. 138 n° 1", annee: "1914", duree: "",
      bref: "Le concert s'ouvre sur six vers de Matthias Claudius : l'homme ne vit qu'un peu de temps, le monde passe avec sa splendeur, Dieu seul demeure, « et nous sommes dans ses mains ». Reger écrit ce chœur en 1914, deux ans avant sa mort. Il est d'ordinaire l'homme des partitions touffues ; ici, il tient en trois minutes. Les harmonies glissent sans cesse, comme un sol qui se dérobe, jusqu'à l'accord final, posé et sûr de lui.",
      long: [
        "§ Le dernier Reger",
        "Max Reger meurt à Leipzig en mai 1916, à quarante-trois ans, épuisé par le travail, l'alcool et des tournées sans fin. Les Huit chants spirituels de l'opus 138 font partie de ses dernières pages chorales. On l'associe d'habitude à l'orgue et à des fugues d'une densité vertigineuse ; ces chœurs montrent l'autre Reger, celui qui sait se taire.",
        "Reger disait de Bach qu'il était « le commencement et la fin de toute musique ». Ce soir, le programme lui donne raison : il commence par Reger et finit par Bach.",
        "§ Ce qu'il faut écouter",
        "Le poème de Claudius oppose deux temps : celui de l'homme, bref, et celui de Dieu, qui ne passe pas. Reger le traduit par l'harmonie. Sur « l'homme » et « le monde », les accords changent de couleur presque à chaque mot, par petits glissements chromatiques : rien ne tient. Sur « Dieu seul est éternel », le mouvement ralentit et se stabilise. Les derniers mots, « und wir in seinen Händen », arrivent tout doucement, sur un accord qui ne bouge plus.",
      ],
      ecoute: "Les derniers mots, « et nous sommes dans ses mains », arrivent pianissimo : tout le sens du chœur tient dans ce repos.",
      guetter: [
        ["Le début", "Des accords qui changent de couleur à chaque mot : la vie de l'homme, qui ne tient pas."],
        ["La fin", "Tout ralentit sur « und wir in seinen Händen » : un accord immobile, comme une main qui se referme."],
      ],
    },
    {
      id: "mendelssohn22", partie: 1, compositeur: "Felix Mendelssohn", titre: "Mein Gott, warum hast du mich verlassen?, op. 78 n° 3", annee: "1844", duree: "",
      bref: "« Mon Dieu, pourquoi m'as-tu abandonné ? » Ce sont les premiers mots du psaume 22, et ceux que Jésus prononce sur la croix. En 1844, Mendelssohn est chargé de la musique de la cathédrale de Berlin, où le roi de Prusse veut renouveler le chant liturgique. Il y répond par des psaumes pour double chœur. Celui-ci est le plus dramatique : quelques voix presque récitantes exposent la détresse, puis le chœur entier répond. Le texte va de l'abandon à la confiance, et la musique avec lui. Premier « pourquoi ? » de la soirée.",
      long: [
        "§ L'homme qui a ressuscité Bach",
        "En 1829, à vingt ans, Mendelssohn dirige à Berlin la Passion selon saint Matthieu, qu'on n'avait plus jouée depuis la mort de Bach. Ce concert marque le début de la redécouverte de Bach au XIXe siècle. Tout ce que vous entendrez ce soir descend de ce geste : Brahms, Reger et Rheinberger ont grandi dans le Bach que Mendelssohn a rendu au public.",
        "§ Berlin, 1844",
        "Le roi Frédéric-Guillaume IV rêve d'un culte rénové, où le chœur chanterait seul, comme dans l'Église ancienne. Mendelssohn, nommé à la cathédrale, écrit pour ses chanteurs une série de psaumes et de motets a cappella. Ils seront publiés après sa mort, en 1849, sous le numéro d'opus 78.",
        "§ Une dramaturgie en dialogue",
        "Mendelssohn ne met pas le psaume en musique d'un seul bloc. Il fait alterner des passages confiés à quelques voix, sobres, proches de la récitation liturgique, et des réponses de tout le chœur, plus amples. On croit entendre un homme seul qui crie, puis une assemblée qui reprend sa plainte. Écoutez comment l'harmonie se resserre sur les mots de la souffrance, puis s'ouvre quand le texte tourne vers la confiance.",
      ],
      ecoute: "Écoutez le dialogue : une ou deux voix exposent, tout le chœur répond. Un homme seul, puis une foule.",
      guetter: [
        ["Le cri", "Quelques voix, presque parlées, posent la question : « Mon Dieu, pourquoi m'as-tu abandonné ? »"],
        ["La réponse", "Le chœur entier reprend et élargit la plainte. Peu à peu, l'harmonie s'éclaire : le texte va vers la confiance."],
      ],
    },
    {
      id: "rheinberger", partie: 1, compositeur: "Josef Rheinberger", titre: "Messe en mi bémol majeur « Cantus Missae », op. 109", annee: "1878", duree: "",
      bref: "Le cœur du concert. Rheinberger, organiste et professeur à Munich, écrit cette messe en quelques jours, en janvier 1878, pour deux chœurs à quatre voix, sans instrument. Il la dédie au nouveau pape, Léon XIII, qui le fait chevalier de l'ordre de Saint-Grégoire. On l'a surnommée « le Palestrina du XIXe siècle » : des lignes qui chantent comme à la Renaissance, mais des harmonies de son temps, riches, parfois chargées de dissonances soudaines. Ce soir, deux ensembles réunis pour une messe à deux chœurs.",
      long: [
        "§ Un enfant de Vaduz devenu maître à Munich",
        "Josef Rheinberger naît en 1839 à Vaduz, dans le Liechtenstein. À sept ans, il tient déjà l'orgue de l'église paroissiale. Il fait toute sa carrière à Munich, où il enseigne l'orgue et la composition pendant plus de quarante ans. Engelbert Humperdinck, Ermanno Wolf-Ferrari et Wilhelm Furtwängler figurent parmi ses élèves. En 1877, il devient maître de chapelle de la cour de Bavière ; c'est dans ces années qu'il écrit l'essentiel de ses quatorze messes.",
        "§ Une messe pour deux chœurs",
        "Le titre latin complet dit l'ambition : Cantus Missae ex octo modulatione vocum concinnatus, un chant de messe composé pour huit voix. C'est sa seule messe à double chœur. Rheinberger la termine en janvier 1878 et la dédie à Léon XIII, élu le 20 février. Elle est créée le 1er janvier 1879 à la chapelle de la Résidence de Munich, sous sa direction. Son élève Joseph Renner y voyait le sommet de son œuvre a cappella.",
        "§ Kyrie",
        "Moderato. Les deux chœurs ne chantent pas l'un contre l'autre : ils se tendent les phrases, puis se rejoignent. Écoutez le moment où les huit voix sonnent ensemble pour la première fois. Dans une abbatiale à coupoles, l'effet est saisissant : le son semble venir de partout.",
        "§ Gloria",
        "Allegro moderato. Le Gloria s'ouvre à huit voix, dans l'éclat. Rheinberger y alterne les blocs d'accords, déclamés par les deux chœurs à la fois, et les échanges rapides d'un chœur à l'autre, comme deux tribunes d'une même église. Au centre, le « Qui tollis », plus lent et plus sombre, fait entendre l'harmonie romantique sous les lignes renaissance.",
        "§ Credo",
        "Moderato. Le Credo commence par les basses, comme une intonation liturgique, puis tout le chœur reprend. C'est le texte le plus long de la messe, et Rheinberger le traite en grand récit. Guettez le « Et incarnatus est » : le tempo se suspend, les voix se resserrent, et le « Crucifixus » descend vers le grave avant que le « Et resurrexit » relance tout.",
        "§ Sanctus et Benedictus",
        "Le Sanctus, Lento, s'élève par vagues, d'un chœur à l'autre, jusqu'à l'« Hosanna ». Le Benedictus, Andantino, est le moment le plus intime de la messe : une mélodie souple, presque une berceuse, que Rheinberger confie à des voix plus légères.",
        "§ Agnus Dei",
        "Lento. Les dissonances qui avaient traversé la messe se font plus douces. Le « Dona nobis pacem » final retrouve le mi bémol majeur du début, apaisé, et laisse le dernier accord résonner dans les voûtes.",
      ],
      ecoute: "Dans le Kyrie, guettez le premier moment où les huit voix chantent ensemble : le son vient de partout à la fois.",
      guetter: [
        ["Kyrie", "Les deux chœurs se passent les phrases, puis se rejoignent. Le premier tutti à huit voix remplit toute l'abbatiale."],
        ["Gloria", "Des blocs d'accords lancés par les deux chœurs à la fois, puis des échanges rapides de l'un à l'autre. Au milieu, un passage lent et sombre."],
        ["Credo", "Les basses commencent seules. Plus loin, le tempo se suspend sur « Et incarnatus est », puis tout repart avec la résurrection."],
        ["Sanctus, Benedictus", "Le Sanctus monte par vagues jusqu'à l'Hosanna. Le Benedictus, lui, est presque une berceuse."],
        ["Agnus Dei", "Les dissonances s'apaisent. Le dernier accord revient au ton du début : laissez-le résonner avant d'applaudir."],
      ],
    },
    {
      id: "bach229", partie: 1, compositeur: "Jean-Sébastien Bach", titre: "Komm, Jesu, komm, BWV 229", annee: "avant 1732", duree: "",
      bref: "« Viens, Jésus, viens, mon corps est fatigué. » Le poème de Paul Thymich avait été écrit pour les obsèques d'un recteur de Leipzig, en 1684. Bach le met en musique pour deux chœurs, sans doute pour un enterrement lui aussi. La première partie est un dialogue de fatigue et d'appel : les deux chœurs se renvoient le mot « komm ». Puis le rythme se met à danser sur « tu es le vrai chemin, la vérité et la vie ». La fin, très simple, à quatre voix, dit adieu au monde : « Welt, gute Nacht ».",
      long: [
        "§ Un motet de funérailles",
        "À Leipzig, les motets de Bach servent surtout aux enterrements de notables. On ne connaît pas la date exacte de Komm, Jesu, komm ; la plus ancienne copie remonte au début des années 1730. Le texte, de Paul Thymich, avait déjà été mis en musique par Johann Schelle, un prédécesseur de Bach à Saint-Thomas, pour les obsèques du recteur Jacob Thomasius.",
        "§ La fatigue et l'appel",
        "Les deux chœurs commencent par des appels, « komm, komm », lancés de l'un à l'autre. Puis vient la phrase la plus célèbre du motet : « der saure Weg wird mir zu schwer », le chemin amer m'est devenu trop lourd. Sur « saure », amer, Bach tord la ligne par un intervalle douloureux, et la musique ralentit comme un homme qui n'avance plus.",
        "§ Le chemin qui danse",
        "Changement complet : sur « du bist der rechte Weg, die Wahrheit und das Leben », la mesure passe à un rythme ternaire, léger, presque une danse. Les voix entrent les unes après les autres, et le chemin trop lourd devient un chemin qu'on parcourt avec joie.",
        "§ L'aria finale",
        "Bach termine par une « Aria » à quatre voix, les deux chœurs réunis : une mélodie de choral, harmonisée simplement, sur deux strophes. « Drum schließ ich mich in deine Hände und sage, Welt, zu guter Nacht ! » C'est la fin de la première partie, et c'est une berceuse.",
      ],
      ecoute: "Sur « der saure Weg », le chemin amer, la mélodie se tord : écoutez ce petit intervalle douloureux, il dit tout.",
      guetter: [
        ["L'appel", "Les deux chœurs se renvoient « komm, komm ». Puis « le chemin amer m'est trop lourd » : la ligne se tord et ralentit."],
        ["La danse", "Sur « tu es le vrai chemin », le rythme change, léger, à trois temps. Les voix entrent l'une après l'autre."],
        ["L'adieu", "Une mélodie toute simple, à quatre voix : « Monde, bonne nuit ». Fin de la première partie."],
      ],
    },
    { id: "entracte", pause: true, titre: "Entracte", duree: "20 min" },
    {
      id: "reger3", partie: 2, compositeur: "Max Reger", titre: "Nachtlied, op. 138 n° 3", annee: "1914", duree: "",
      bref: "« Die Nacht ist kommen » : la nuit est venue, où nous devons reposer. Le poème est un cantique du XVIe siècle, de Petrus Herbert, une prière du soir. Reger en fait un chant d'une grande douceur, presque immobile. Après l'entracte, c'est une manière de refaire le silence avant d'entrer dans les grandes questions de la seconde partie.",
      long: [
        "§ Une prière du soir",
        "Le texte de Petrus Herbert, publié en 1566 dans un recueil de cantiques de l'Unité des Frères de Bohême, demande à Dieu de garder le dormeur pendant la nuit, et de le garder aussi dans la nuit plus longue de la mort. Reger le met en musique dans le même recueil que le chœur entendu en ouverture.",
        "§ Ce qu'il faut écouter",
        "Les strophes se ressemblent, et c'est voulu : la prière se répète comme on la dit chaque soir. Écoutez comment Reger varie légèrement l'harmonie d'une strophe à l'autre, avec ces glissements qui lui sont propres, sans jamais rompre le calme. Les fins de phrase s'éteignent toutes, comme des lampes.",
      ],
      ecoute: "Laissez-vous porter : les strophes se répètent comme une prière du soir, et chaque fin de phrase s'éteint.",
      guetter: [
        ["Les strophes", "Une même prière, répétée. Chaque fois, l'harmonie change à peine de couleur."],
        ["Les fins", "Chaque phrase s'éteint doucement, comme une lampe qu'on baisse."],
      ],
    },
    {
      id: "brahms74", partie: 2, compositeur: "Johannes Brahms", titre: "Warum ist das Licht gegeben?, op. 74 n° 1", annee: "1877", duree: "",
      bref: "« Pourquoi la lumière est-elle donnée au malheureux ? » La question vient du livre de Job. Brahms la pose quatre fois, et quatre fois le chœur crie « Warum ? », pourquoi, avant de se perdre dans des lignes qui s'enroulent sans trouver de réponse. Puis le texte change de livre et de ton : on élève son cœur, on loue ceux qui ont tenu bon. Et Brahms termine par un choral de Luther, harmonisé comme le ferait Bach. Il dédie ce motet à Philipp Spitta, le grand biographe de Bach.",
      long: [
        "§ Brahms et Bach",
        "Brahms a passé sa vie à étudier les maîtres anciens. Il copie des partitions de la Renaissance, souscrit à l'édition complète de Bach et compose, jeune homme, des canons et des fugues pour se former la main. En 1877, il dédie ses deux motets de l'opus 74 à Philipp Spitta, qui publie alors sa monumentale biographie de Bach. L'hommage est explicite : ce motet est construit comme une cantate de Bach, de la plainte au choral.",
        "§ Les quatre « pourquoi »",
        "Le texte de Job, chapitre 3, est l'un des plus désespérés de la Bible : pourquoi donner la vie à celui qui attend la mort et ne la trouve pas ? Brahms isole le mot « Warum ? » et le lance en accords, à plusieurs reprises, comme une question qui revient. Entre ces cris, les voix s'enroulent en contrepoint serré, chromatique, sans trouver d'issue.",
        "Brahms reprend ici une musique écrite vingt ans plus tôt, en 1856, pour une messe en canons qu'il n'avait jamais achevée. Le jeune Brahms apprenait le contrepoint ; le Brahms mûr en fait un cri.",
        "§ La sortie",
        "Deux nouveaux textes ouvrent une issue. D'abord les Lamentations : « Lasset uns unser Herz samt den Händen aufheben zu Gott », élevons notre cœur et nos mains vers Dieu, traité en canon serré, les voix se suivant à très court intervalle. Puis l'épître de Jacques : « nous déclarons heureux ceux qui ont tenu bon », plus apaisé.",
        "§ Le choral",
        "Pour finir, Brahms harmonise le choral de Luther « Mit Fried und Freud ich fahr dahin », je pars dans la paix et la joie, le cantique de Siméon. Écoutez les dernières mesures : la mélodie descend lentement, et l'harmonie, ancienne et modale, semble venir d'un autre temps. La question du début n'a pas reçu de réponse ; elle a été remplacée par une paix.",
      ],
      ecoute: "Comptez les « Warum ? » : quatre cris, quatre fois sans réponse. La réponse viendra d'ailleurs, avec le choral final.",
      guetter: [
        ["Les cris", "« Warum ? » lancé en accords, plusieurs fois. Entre les cris, des lignes qui s'enroulent sans trouver d'issue."],
        ["Le canon", "« Élevons notre cœur » : les voix se suivent de très près, en canon, comme une montée."],
        ["Le choral", "Un cantique de Luther, harmonisé comme chez Bach. La mélodie descend lentement : la paix remplace la question."],
      ],
    },
    {
      id: "mauersberger", partie: 2, compositeur: "Rudolf Mauersberger", titre: "Wie liegt die Stadt so wüst", annee: "1945", duree: "",
      bref: "Dresde, 13 et 14 février 1945 : les bombardements détruisent la ville, la Kreuzkirche brûle, onze garçons du chœur de la Croix sont tués. Rudolf Mauersberger dirige ce chœur depuis quinze ans. Il écrit ce motet sur les Lamentations de Jérémie, qui pleurent Jérusalem en ruine : « Comme la ville est déserte, elle qui était pleine de peuple. » Il le crée le 4 août 1945, dans les ruines de la Kreuzkirche. C'est le seul moment du XXe siècle de la soirée, et le plus nu.",
      long: [
        "§ Le cantor de la Croix",
        "Rudolf Mauersberger dirige le Kreuzchor de Dresde, l'un des plus anciens chœurs de garçons d'Allemagne, de 1930 à 1971. Il est l'héritier direct de la tradition des cantors luthériens, celle de Bach à Leipzig.",
        "§ Février 1945",
        "Dans la nuit du 13 au 14 février 1945, Dresde est détruite. La Kreuzkirche est incendiée, l'internat du chœur aussi, et onze choristes meurent. Mauersberger écrit dans les semaines qui suivent ce motet sur les Lamentations de Jérémie. Le 4 août 1945, le Kreuzchor le chante pour la première fois dans l'église sans toit, lors des premières vêpres d'après-guerre.",
        "§ Une écriture de ruines",
        "Mauersberger n'écrit pas une musique spectaculaire. Les lignes sont souvent à l'unisson ou en accords dépouillés, et l'harmonie emprunte aux modes anciens. Le texte avance comme un constat : les portes sont désertes, la ville la plus belle est devenue un objet de moquerie, le feu est descendu dans les os. Puis vient, comme chez Brahms quelques minutes plus tôt, une question : « Warum willst du unser so gar vergessen ? », pourquoi veux-tu nous oublier ? La prière finale, « Herr, siehe an mein Elend », Seigneur, regarde ma misère, ne se résout pas en lumière. Elle reste ouverte.",
        "Placé après Brahms, ce motet donne au « pourquoi » du XIXe siècle un visage précis : une ville, une date, des enfants.",
      ],
      ecoute: "Après le dernier accord, ne vous pressez pas d'applaudir : ce motet est fait pour finir dans le silence.",
      guetter: [
        ["La ville", "Des lignes nues, souvent à l'unisson : « Comme la ville est déserte ». Un constat, sans effet."],
        ["La question", "Le troisième « pourquoi ? » de la soirée : « pourquoi veux-tu nous oublier ? »"],
        ["La fin", "« Seigneur, regarde ma misère. » La prière reste ouverte. Laissez le silence durer."],
      ],
    },
    {
      id: "mendelssohn91", partie: 2, compositeur: "Felix Mendelssohn", titre: "Denn er hat seinen Engeln befohlen über dir", annee: "1844", duree: "",
      bref: "Après la ville en ruine, une promesse de protection : « Il a donné ordre à ses anges de te garder dans toutes tes voies », psaume 91. Mendelssohn écrit ce motet pour double chœur en 1844. Il le reprendra deux ans plus tard dans son oratorio Elias, où il devient l'un des passages les plus aimés. La musique est souple, lumineuse, les deux chœurs se répondent comme des ailes.",
      long: [
        "§ De Berlin à Elias",
        "Mendelssohn compose ce motet en 1844, la même année que le psaume entendu en première partie. On le rattache souvent à l'attentat manqué contre le roi de Prusse, cet été-là. En 1846, il en reprend la musique dans Elias, son grand oratorio créé à Birmingham : les anges y veillent sur le prophète endormi dans le désert.",
        "§ Ce qu'il faut écouter",
        "Écoutez le dialogue entre les deux chœurs : une phrase lancée d'un côté, reprise de l'autre, puis les huit voix ensemble. Sur « dass sie dich auf den Händen tragen », qu'ils te portent sur leurs mains, la musique s'allège encore. C'est la pièce la plus consolante de la soirée, placée exactement après la plus désolée.",
      ],
      ecoute: "Ce motet vient juste après les ruines de Dresde : écoutez-le comme une réponse.",
      guetter: [
        ["La promesse", "« Il a donné ordre à ses anges de te garder. » Un chœur lance, l'autre reprend."],
        ["Les mains", "« Qu'ils te portent sur leurs mains » : la musique s'allège, presque en apesanteur."],
      ],
    },
    {
      id: "brahms110", partie: 2, compositeur: "Johannes Brahms", titre: "Trois motets, op. 110", annee: "1889", duree: "",
      bref: "Les dernières pages de Brahms pour chœur a cappella. Trois motets courts, écrits en 1889 : « Ich aber bin elend », je suis malheureux, pour double chœur ; « Ach, arme Welt », pauvre monde, tu me trompes, à quatre voix ; et « Wenn wir in höchsten Nöten sein », quand nous sommes dans la plus grande détresse, de nouveau pour double chœur. Brahms a cinquante-six ans. Il ne pose plus la question ; il demande simplement du secours.",
      long: [
        "§ Le dernier mot de Brahms au chœur",
        "En 1889, Brahms publie ses Fest- und Gedenksprüche, opus 109, et ces trois motets, opus 110. Ce sont ses derniers ouvrages pour chœur sans accompagnement. Douze ans après le motet entendu tout à l'heure, l'écriture s'est encore concentrée : chaque motet dure à peine quelques minutes.",
        "§ Ich aber bin elend",
        "Pour double chœur. Le texte mêle un psaume, « je suis malheureux et souffrant », et l'Exode : « Seigneur, Dieu miséricordieux et bienveillant ». Écoutez comment les deux chœurs passent de la plainte à l'invocation : les accords s'élargissent, la lumière entre.",
        "§ Ach, arme Welt",
        "À quatre voix seulement. Un adieu au monde trompeur, dans une écriture de choral très simple, presque un cantique populaire. Le contraste avec les deux autres motets, plus amples, est voulu.",
        "§ Wenn wir in höchsten Nöten sein",
        "Pour double chœur, sur un cantique de Paul Eber. Les deux chœurs se répondent strophe après strophe, puis se rejoignent. La fin est un acte de confiance : la question de Job, posée par le même Brahms une demi-heure plus tôt, a trouvé sa forme la plus humble.",
      ],
      ecoute: "Trois motets, trois tailles : double chœur, quatre voix, double chœur. Écoutez le chœur se resserrer au centre, puis s'ouvrir à nouveau.",
      guetter: [
        ["Ich aber bin elend", "Double chœur. De la plainte à l'invocation : les accords s'élargissent."],
        ["Ach, arme Welt", "Quatre voix seulement, comme un cantique. Un adieu au monde, tout simple."],
        ["Wenn wir in höchsten Nöten sein", "Les deux chœurs se répondent, puis se rejoignent dans la confiance."],
      ],
    },
    {
      id: "bach225", partie: 2, compositeur: "Jean-Sébastien Bach", titre: "Singet dem Herrn ein neues Lied, BWV 225", annee: "1726-1727", duree: "",
      bref: "Après une heure de « pourquoi ? », la réponse de Bach : chantez au Seigneur un chant nouveau. C'est le plus éclatant de ses motets, pour deux chœurs qui se lancent les mots comme des balles. Au centre, un moment suspendu : un chœur chante un choral pendant que l'autre prie librement. Et la fin est une fugue sur « Alles was Odem hat, lobe den Herrn », que tout ce qui respire loue le Seigneur. En 1789, Mozart l'entend à Leipzig et s'écrie : « Voilà enfin quelque chose dont on peut apprendre ! »",
      long: [
        "§ Mozart à Leipzig",
        "En avril 1789, Mozart passe par Leipzig. À l'école Saint-Thomas, le cantor Doles fait chanter devant lui ce motet de Bach. Selon le récit de Rochlitz, Mozart s'exclame dès les premières mesures, puis demande les parties, qui n'existent qu'en voix séparées : il les étale autour de lui, sur ses genoux et sur les chaises, et ne se relève qu'après les avoir toutes lues.",
        "§ Premier volet : le chant nouveau",
        "Psaume 149. Un chœur tient de longues notes sur « singet », chantez, pendant que l'autre fait pétiller le mot en motifs rapides ; puis ils échangent les rôles. Sur « die Kinder Zion sei'n fröhlich », que les enfants de Sion se réjouissent, Bach lance une fugue d'une énergie incroyable, qui monte d'une voix à l'autre.",
        "§ Deuxième volet : la prière au centre",
        "Le rythme s'apaise. Un chœur chante, en notes longues, une strophe du choral « Nun lob, mein Seel, den Herren » : comme un père a pitié de ses enfants. L'autre chœur lui répond par une prière libre, « Gott, nimm dich ferner unser an », Dieu, prends soin de nous. Deux textes, deux styles, en même temps : la foi collective et la prière personnelle.",
        "§ Troisième volet : tout ce qui respire",
        "Psaume 150. Les deux chœurs reprennent ensemble, « Lobet den Herrn in seinen Taten ». Puis ils fusionnent en un seul chœur à quatre voix pour la fugue finale, « Alles was Odem hat, lobe den Herrn ». Le sujet court sans reprendre souffle, les entrées s'enchaînent, et tout s'achève sur un Halleluja. Le contraire exact de la fin de la première partie : là, une berceuse ; ici, une course.",
      ],
      ecoute: "Dans la fugue finale, suivez le thème d'une voix à l'autre : il ne s'arrête plus jusqu'au dernier Halleluja.",
      guetter: [
        ["Singet", "Un chœur tient des notes longues, l'autre fait pétiller le mot « singet ». Puis une fugue éclate."],
        ["La prière", "Au centre, deux textes en même temps : un choral en notes longues, et une prière libre qui lui répond."],
        ["Alles was Odem hat", "Les deux chœurs n'en font plus qu'un. La fugue court jusqu'au dernier Halleluja."],
      ],
    },
  ],
  aSavoir: [
    "L'abbatiale Sainte-Marie de Souillac date du XIIe siècle. Sa nef est couverte d'une file de coupoles, comme les cathédrales de Cahors et de Périgueux. Ces voûtes prolongent chaque accord : les chefs de chœur laissent souvent le son mourir avant de reprendre. Avant de vous asseoir, cherchez au revers de la façade le relief du prophète Isaïe, l'une des sculptures romanes les plus célèbres de France.",
    "Ce soir, deux chœurs. La plupart des œuvres sont écrites pour double chœur, à huit voix : quand une phrase passe d'un groupe à l'autre, fermez les yeux et écoutez d'où vient le son.",
  ],
  partenaires: [
    "Le Festival de Rocamadour est une production de l'association Cantica Sacra Rocamadour.",
    "[À cette place, vos mécènes et partenaires, avec leur logo et leur mention.]",
  ],
  // Les autres concerts du spectateur (page « Mon festival »).
  saisonAbonne: [
    { date: "Mercredi 19 août", titre: "Cantus Missae", oeuvres: "Tenebrae, Ensemble la Sportelle. Abbatiale de Souillac", etat: "guide" },
    { date: "Vendredi 21 août", titre: "Messe de Sainte-Cécile", oeuvres: "Gounod. Basilique Saint-Sauveur, 16 h", etat: "bientot" },
    { date: "Dimanche 23 août", titre: "Magnificat de Bach", oeuvres: "Ensemble la Sportelle. Basilique Saint-Sauveur", etat: "bientot" },
    { date: "Mercredi 26 août", titre: "Passio", oeuvres: "Arvo Pärt. Basilique Saint-Sauveur", etat: "bientot" },
  ],
  prochain: "vendredi 21 août, 16 h, la Messe de Sainte-Cécile de Gounod, à la basilique Saint-Sauveur de Rocamadour",
};

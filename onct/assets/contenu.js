// Contenus de la démonstration ONCT, concert du samedi 14 novembre 2026.
// Programme, artistes et partenaires : page publique du concert sur onct.toulouse.fr.
// Textes sur les œuvres : brouillons de Double Dièse, à relire par Thibault d'Hauthuille.
window.DC = window.DC || {};
DC.contenu = {
  orchestre: "Orchestre national du Capitole de Toulouse",
  saison: "Saison 2026-2027",
  concert: {
    titre: "Alexander Soddy, Stefan Dohr",
    fil: "De la forêt à la clarté",
    accroche: "Trois œuvres, un instrument au centre : le cor. Il sort de la forêt romantique de Weber, chante comme une voix d'opéra chez Strauss, puis s'efface pour laisser entrer la lumière du jeune Schubert.",
    date: "Samedi 14 novembre 2026",
    dateIso: "2026-11-14",
    heure: "20 h",
    debutIso: "2026-11-14T20:00:00+01:00",
    finIso: "2026-11-14T21:30:00+01:00",
    lieu: "Halle aux Grains, Toulouse",
    duree: "1 h 30 avec entracte",
  },
  artistes: [
    { nom: "Alexander Soddy", role: "direction", texte: "Chef britannique, il partage sa carrière entre l'opéra et le concert." },
    { nom: "Stefan Dohr", role: "cor", texte: "Premier cor solo de l'Orchestre philharmonique de Berlin." },
  ],
  // L'ordre de la soirée. La pause est un élément de la ligne, pas une œuvre.
  soiree: [
    {
      id: "weber", partie: 1, compositeur: "Carl Maria von Weber", titre: "Der Freischütz, ouverture", annee: "1821", duree: "10 min",
      bref: "Une forêt, un pacte avec le diable, des balles ensorcelées. Avant que le rideau se lève, Weber raconte tout l'opéra en dix minutes. Au début, quatre cors seuls, comme une clairière au petit matin. Puis l'ombre gagne : trémolos des cordes, timbales sourdes. C'est Samiel, le chasseur noir.",
      long: [
        "Berlin, juin 1821. L'opéra appartient alors aux Italiens et aux Français. Weber veut prouver qu'un opéra allemand peut parler de son propre pays : ses forêts, ses chasseurs, ses superstitions. Le soir de la création, le public lui fait un triomphe, et Der Freischütz devient en quelques mois l'opéra national que l'Allemagne attendait.",
        "L'ouverture n'est pas une simple suite d'airs. C'est un drame en raccourci, qui va de l'ombre vers la lumière. Trois moments à guetter. Le choral des quatre cors, juste après les premières mesures : le cor est l'instrument du chasseur et de la forêt, et Weber lui confie l'image même de son opéra. Ensuite, la nuit : clarinettes graves, cordes qui frémissent, coups de timbale à peine audibles. Enfin, après un grand silence, la mélodie d'Agathe, la fiancée du héros, éclate à tout l'orchestre. La lumière a gagné.",
      ],
      ecoute: "Comptez les cors au début : ils sont quatre, et ce sont eux qui ouvrent la soirée.",
    },
    {
      id: "strauss", partie: 1, compositeur: "Richard Strauss", titre: "Concerto pour cor et orchestre n° 2", annee: "1942", duree: "20 min", soliste: "Stefan Dohr",
      bref: "Soixante ans séparent les deux concertos pour cor de Strauss. Le premier, il l'écrit à dix-huit ans pour son père, cor solo de l'orchestre de la cour de Munich. Le second, à soixante-dix-huit ans, dans une Vienne en guerre. On n'y entend pourtant rien de la guerre : une musique légère, transparente, tournée vers Mozart.",
      long: [
        "Le père de Richard Strauss, Franz, était l'un des meilleurs cornistes de son temps. Le fils a donc grandi avec le son du cor dans la maison, et il lui a réservé toute sa vie des solos parmi les plus célèbres du répertoire. En 1942, alors que l'Europe s'effondre, il revient à cet instrument comme on revient à la maison.",
        "Strauss disait de ses dernières œuvres qu'elles servaient surtout à garder la main. Ne le croyez pas tout à fait. Le premier mouvement s'ouvre par un grand élan du soliste, sans préambule. Le deuxième fait chanter le cor comme une voix d'opéra : on pense à ses héroïnes, la Maréchale ou la Comtesse de Capriccio. Le finale retrouve le cor de chasse, en rythme sautillant, et le relie à la forêt de Weber entendue un quart d'heure plus tôt. Stefan Dohr y passe des notes les plus graves aux plus aiguës avec une facilité qui fait oublier la difficulté de l'instrument.",
        "Le concerto est créé au Festival de Salzbourg à l'été 1943.",
      ],
      ecoute: "Dans le deuxième mouvement, oubliez l'instrument : écoutez une voix.",
    },
    { id: "entracte", pause: true, titre: "Entracte", duree: "20 min" },
    {
      id: "schubert", partie: 2, compositeur: "Franz Schubert", titre: "Symphonie n° 5 en si bémol majeur", annee: "1816", duree: "27 min",
      bref: "Schubert a dix-neuf ans. Il écrit cette symphonie pour un orchestre d'amateurs qui joue chez des amis, à Vienne. Pas de trompettes, pas de timbales, pas de clarinettes : un petit orchestre, presque de la musique de chambre. Il ne l'entendra jamais en concert public.",
      long: [
        "Quelques mois avant d'écrire cette symphonie, Schubert note dans son journal, après avoir entendu un quintette de Mozart : « Ô Mozart, immortel Mozart ». Toute la Cinquième porte la trace de cet éblouissement. L'effectif est celui d'une symphonie de Mozart, et l'esprit aussi : clarté, élégance, aucune emphase.",
        "Le début ressemble à un rideau qui s'ouvre : quatre mesures d'accords aux bois, puis les violons entrent avec un thème qui semble chanté sans effort. Le deuxième mouvement est une mélodie que l'on pourrait fredonner en sortant. Le troisième, en sol mineur, regarde du côté du menuet de la Symphonie n° 40 de Mozart, avec un trio plus campagnard. Le finale court d'une traite, avec la vivacité de Haydn.",
        "La partition reste dans un tiroir. Sa première exécution publique a lieu en 1841, treize ans après la mort de Schubert.",
      ],
      ecoute: "Remarquez ce qui manque : ni trompette ni timbale. Toute la lumière vient des cordes et des bois.",
    },
  ],
  aSavoir: [
    "La Halle aux Grains est une ancienne halle au blé. Les gradins entourent l'orchestre sur trois côtés : selon votre place, vous ne verrez pas les mêmes pupitres. Comparez avec votre voisin à l'entracte.",
    "Le cor est l'un des instruments les plus difficiles de l'orchestre : un tube de près de quatre mètres enroulé sur lui-même, que le musicien contrôle avec ses lèvres.",
  ],
  partenaires: {
    soutien: "Avec le soutien de l'association Aïda",
    media: "Partenaire média : La Dépêche du Midi",
    radio: "Radio Classique diffuse ce concert le samedi 5 décembre à 20 h.",
  },
  // Les autres concerts de l'abonné (page « Ma saison »).
  saisonAbonne: [
    { date: "Samedi 14 novembre", titre: "Alexander Soddy, Stefan Dohr", oeuvres: "Weber, Strauss, Schubert", etat: "guide" },
    { date: "Jeudi 10 décembre", titre: "Riccardo Minasi, Nobuyuki Tsujii", oeuvres: "Beethoven, Concerto pour piano n° 2", etat: "bientot" },
    { date: "Jeudi 17 décembre", titre: "Barbara Hannigan, Bertrand Chamayou", oeuvres: "Ravel, Concerto en sol", etat: "bientot" },
    { date: "Jeudi 14 janvier", titre: "Adam Hickox, Antoine Tamestit", oeuvres: "Berlioz, Harold en Italie", etat: "bientot" },
  ],
  prochain: { date: "jeudi 10 décembre", titre: "Riccardo Minasi et Nobuyuki Tsujii", oeuvre: "le Concerto pour piano n° 2 de Beethoven" },
};

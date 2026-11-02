// Contenus de la démonstration ONCT, concert du samedi 14 novembre 2026.
// Programme, artistes et partenaires : page publique du concert sur onct.toulouse.fr.
// Textes sur les œuvres : brouillons de Double Dièse, à relire par Thibault d'Hauthuille.
// Dans les textes longs, un paragraphe qui commence par « § » devient un intertitre.
window.DC = window.DC || {};
DC.contenu = {
  orchestre: "Orchestre national du Capitole de Toulouse",
  // Fichier du logo dans assets/ (null tant qu'il n'est pas fourni : le nom s'affiche en texte).
  logo: null,
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
    { nom: "Alexander Soddy", role: "direction", texte: "Chef britannique, il partage sa carrière entre l'opéra et le concert.", lien: "https://www.alexandersoddy.com/biography" },
    { nom: "Stefan Dohr", role: "cor", texte: "Premier cor solo de l'Orchestre philharmonique de Berlin.", lien: "https://www.berliner-philharmoniker.de/en/about-us/orchestra/musicians/stefan-dohr/" },
  ],
  // L'ordre de la soirée. La pause est un élément de la ligne, pas une œuvre.
  soiree: [
    {
      id: "weber", partie: 1, compositeur: "Carl Maria von Weber", titre: "Der Freischütz, ouverture", annee: "1821", duree: "10 min",
      bref: "Une forêt de Bohême, un jeune chasseur qui doit gagner un concours de tir pour épouser celle qu'il aime, et un pacte avec le diable pour obtenir des balles qui ne manquent jamais leur cible. Avant que le rideau se lève, Weber raconte tout l'opéra en dix minutes. Au début, quatre cors seuls, comme une clairière au petit matin. Puis l'ombre gagne : trémolos des cordes, clarinettes graves, timbales sourdes. C'est Samiel, le chasseur noir. La suite oppose la nuit de Max, le chasseur tenté, à la lumière d'Agathe, sa fiancée. À la fin, c'est elle qui l'emporte, à pleine voix d'orchestre.",
      long: [
        "§ Un opéra pour l'Allemagne",
        "Berlin, 18 juin 1821. L'opéra appartient alors aux Italiens et aux Français, et la cour de Prusse vient de confier sa musique à Spontini, maître du grand opéra à la française. Weber, lui, met en scène des chasseurs, des paysans, une forêt et un diable sorti des contes populaires. Le soir de la création, au Schauspielhaus, le public lui fait un triomphe. En quelques mois, les airs du Freischütz se chantent dans les rues, et l'Allemagne tient l'opéra national qu'elle attendait.",
        "Cette ouverture est un drame complet en dix minutes. Weber le construit, avec ses personnages, son conflit et son dénouement, à partir de thèmes qu'on réentendra dans l'opéra. Elle a d'ailleurs vite pris son indépendance : on la joue en concert depuis deux siècles.",
        "§ L'introduction : la forêt, puis l'ombre",
        "Tout commence par un unisson de l'orchestre qui monte lentement, enfle et s'éteint, comme une question posée à la salle. Puis les quatre cors chantent seuls un choral paisible, presque un cantique. C'est la forêt telle que la rêvent les romantiques : un lieu sacré et protecteur. Le cor était l'instrument des chasseurs ; Weber en fait la voix même de la nature.",
        "Brusquement, tout se dérobe. Les cordes passent en trémolo, les clarinettes descendent dans leur registre le plus grave, sombre et creux, et sous elles les contrebasses égrènent des notes isolées en pizzicato, doublées de coups de timbale à peine audibles. L'accord qui s'installe, une septième diminuée, est celui de Samiel : chaque fois qu'il reviendra dans l'opéra, il signalera la présence du diable.",
        "§ Le combat",
        "Le Molto vivace éclate en do mineur. Les cordes s'agitent en syncopes fiévreuses : c'est la musique de Max, le héros qui doute, tirée de son grand air du premier acte où il se sent cerné par des puissances obscures. Une longue plainte de clarinette s'élève ensuite au-dessus de l'orchestre. Puis vient le second thème, en mi bémol majeur, lancé par les violons avec un élan irrésistible : c'est la conclusion de l'air d'Agathe au deuxième acte, quand elle voit Max arriver et que son cœur s'emballe.",
        "Le développement mêle tout. Les motifs de Max se brisent, l'accord de Samiel revient, la tension monte jusqu'à un grand accord dissonant, fortissimo, suivi d'un silence complet. Retenez votre souffle à cet instant. Après ce silence, quelques accords très doux ouvrent une porte, la tonalité bascule en do majeur, et le thème d'Agathe revient à tout l'orchestre, en pleine lumière. Weber termine son ouverture comme il terminera son opéra : par la victoire de l'amour sur les forces noires.",
      ],
      ecoute: "Guettez le grand silence, peu avant la fin : tout le drame se joue dans ce qui vient juste après.",
    },
    {
      id: "strauss", partie: 1, compositeur: "Richard Strauss", titre: "Concerto pour cor et orchestre n° 2", annee: "1942", duree: "20 min", soliste: "Stefan Dohr",
      bref: "Soixante ans séparent les deux concertos pour cor de Richard Strauss. Le premier, il l'écrit à dix-huit ans pour son père, Franz, cor solo de l'orchestre de la cour de Munich. Le second, à soixante-dix-huit ans, dans une Vienne en guerre, et il en dédie le manuscrit à la mémoire de ce père. On n'y entend pourtant rien de la guerre. Strauss choisit un orchestre de la taille de celui de Mozart et une écriture transparente, où le cor passe de la fanfare au chant, puis à la chasse. C'est la musique d'un homme qui a tout traversé et qui choisit, à la fin, la grâce.",
      long: [
        "§ Un fils de corniste",
        "Franz Strauss a tenu pendant plus de quarante ans le premier cor de l'orchestre de la cour de Munich. Il détestait Wagner, et c'est pourtant lui qui a joué, lors de leurs créations, les grands solos de cor de Tristan, des Maîtres chanteurs et de Parsifal. Wagner disait de lui : « Ce Strauss est un homme insupportable, mais quand il joue du cor, on ne peut pas lui en vouloir. » Richard a grandi avec le son de cet instrument dans la maison. Il lui a réservé toute sa vie des pages parmi les plus célèbres du répertoire, du thème héroïque de Don Juan aux facéties de Till l'Espiègle.",
        "§ 1942, revenir à la maison",
        "En octobre 1942, Capriccio vient d'être créé à Munich. Strauss a soixante-dix-huit ans et considère que son œuvre est achevée. Ce qu'il écrira désormais, il l'appelle des « travaux d'atelier » : des pièces sans enjeu, pour garder la main. Le Concerto n° 2, terminé à Vienne le 28 novembre 1942, est le premier de ces travaux. Sur le manuscrit, il inscrit : « à la mémoire de mon père ». L'Europe brûle, les théâtres allemands vont bientôt fermer, et Strauss écrit une musique d'une limpidité presque déroutante, pour un orchestre où les bois vont par deux.",
        "Norman Del Mar, son biographe et lui-même ancien corniste, admirait la liberté de forme de ce concerto, comparée à la sagesse du premier. Le vieil homme connaît les règles assez bien pour s'en affranchir sans que l'oreille s'en aperçoive.",
        "§ Premier mouvement, Allegro",
        "Le cor entre presque immédiatement, par un grand geste qui balaie son registre de bas en haut. Inutile de chercher le plan attendu, avec exposition et développement bien rangés : les idées s'enchaînent librement, et le soliste converse avec les bois comme dans une sérénade. Écoutez comment Strauss fait passer le cor de la fanfare héroïque à des phrases tendres et chantées, sans jamais le forcer. À la fin, la musique se détend et glisse, sans interruption, vers le mouvement lent.",
        "§ Deuxième mouvement, Andante con moto",
        "En la bémol majeur, une tonalité chaude et voilée. Del Mar parlait d'une « miniature aux proportions parfaites ». Le cor y chante comme une voix, et l'on pense aux héroïnes de Strauss : la Maréchale du Chevalier à la rose, ou la Comtesse de Capriccio, achevé quelques mois plus tôt. La ligne est longue, le souffle immense. Le soliste doit tenir des phrases entières dans le registre médium, là où le moindre défaut d'intonation s'entend, et l'orchestre se fait tapis de cordes et de bois. C'est le moment où chef et soliste respirent ensemble.",
        "§ Troisième mouvement, Rondo",
        "Allegro molto : le rythme bondissant de la chasse. Le cor retrouve son origine, l'instrument des cavaliers en forêt, et rejoint ainsi la forêt de Weber entendue un quart d'heure plus tôt. Le refrain revient plusieurs fois entre des épisodes où le soliste enchaîne notes répétées, grands sauts et traits rapides. C'est la partie la plus virtuose du concerto, et Strauss la traite avec humour : l'orchestre relance, taquine, laisse le soliste en suspens avant de le rattraper. Ce qui semble léger est redoutable à jouer.",
        "§ La création",
        "Le concerto est créé le 11 août 1943 au Festival de Salzbourg par Gottfried von Freiberg, cor solo de l'Orchestre philharmonique de Vienne, sous la direction de Karl Böhm. Strauss n'assiste pas au concert.",
      ],
      ecoute: "Dans le deuxième mouvement, oubliez l'instrument : écoutez une voix.",
    },
    { id: "entracte", pause: true, titre: "Entracte", duree: "20 min" },
    {
      id: "schubert", partie: 2, compositeur: "Franz Schubert", titre: "Symphonie n° 5 en si bémol majeur", annee: "1816", duree: "27 min",
      bref: "Schubert a dix-neuf ans. Il écrit cette symphonie pour un orchestre d'amateurs, né du quatuor à cordes que formait sa famille et qui se réunit désormais chez un ami violoniste, à Vienne. Ni trompettes ni timbales, pas même de clarinettes : une flûte, deux hautbois, deux bassons, deux cors et les cordes. Presque de la musique de chambre. Quelques mois plus tôt, il a confié à son journal son éblouissement devant Mozart, et toute la symphonie en porte la trace, jusqu'au moment où l'harmonie dérape vers des couleurs que Mozart n'aurait pas osées. Schubert ne l'entendra jamais en concert public.",
      long: [
        "§ « Ô Mozart, immortel Mozart »",
        "En juin 1816, après avoir entendu un quintette de Mozart, Schubert écrit dans son journal : « Ô Mozart, immortel Mozart, combien, oh combien d'empreintes bienfaisantes d'une vie plus claire et meilleure as-tu gravées dans nos âmes ! » En septembre, il commence sa Cinquième Symphonie ; il l'achève le 3 octobre. L'effectif est presque exactement celui de la Symphonie n° 40 de Mozart dans sa première version, sans clarinettes. Schubert y parle la langue de son modèle, avec un accent qui n'appartient qu'à lui.",
        "L'orchestre qui la joue d'abord est celui de la maison. Le quatuor familial, où Franz tenait l'alto, s'est agrandi au fil des soirées jusqu'à devenir un petit orchestre d'amateurs, qui répète chez le violoniste Otto Hatwig. C'est là, à l'automne 1816, que la symphonie est jouée pour la première fois, entre amis.",
        "§ Premier mouvement, Allegro",
        "Quatre mesures seulement d'introduction : les bois tiennent des accords pendant que les premiers violons dessinent une petite figure qui monte et redescend. On croirait un rideau qu'on tire. Le premier thème arrive aussitôt, aux violons, piano : un arpège qui s'élève par paliers, auquel répondent les violoncelles et les contrebasses. Tout le mouvement vit de ces dialogues entre le haut et le bas de l'orchestre. Le second thème, en fa majeur, est plus chantant, et les bois lui font écho.",
        "Guettez la réexposition, le moment où le premier thème revient après le développement. Il revient dans une autre tonalité que prévu : en mi bémol au lieu de si bémol. Mozart ne le faisait presque jamais ; Schubert aime ces décalages qui font entendre la musique familière sous un autre éclairage. L'effet est discret, comme une pièce connue où l'on aurait déplacé un meuble.",
        "§ Deuxième mouvement, Andante con moto",
        "Le cœur de la symphonie. En mi bémol majeur, à six-huit, un thème d'une simplicité désarmante, exposé en deux strophes. Il ressemble de très près au finale d'une sonate pour violon et piano de Mozart, la K. 377 : Schubert ne s'en cache pas.",
        "Puis, sans prévenir, l'harmonie glisse vers do bémol majeur, une tonalité lointaine, voilée, presque étrangère au morceau. Un nuage passe devant le soleil. Le retour se fait par sol mineur, avec une ombre de mélancolie, et le thème reparaît comme si rien ne s'était passé. Le même chemin recommence ensuite, cette fois vers sol bémol majeur, et le retour est plus rapide. Écoutez ces glissements au moment où ils se produisent : c'est là que Schubert cesse de ressembler à Mozart, et qu'on reconnaît déjà l'auteur du Voyage d'hiver.",
        "§ Troisième mouvement, Menuetto",
        "Allegro molto, en sol mineur. La tonalité et le caractère rappellent le menuet de la Symphonie n° 40 de Mozart : même énergie, même chromatisme qui fait grincer l'harmonie. Au milieu, une modulation où les instruments entrent les uns après les autres, comme une marée qui monte.",
        "Le trio, en sol majeur, change tout. Le basson et les cordes commencent seuls, sur des notes tenues aux basses comme le bourdon d'une musette, puis les autres instruments les rejoignent peu à peu. Une danse de village, presque un ländler, avant le retour du menuet.",
        "§ Finale, Allegro vivace",
        "Le finale court d'une traite. Les cordes lancent le thème à mi-voix, puis tout l'orchestre le reprend, forte : un jeu de surprise que Schubert a appris chez Haydn. Deux thèmes, un développement, une réexposition, mais tout va vite, sans pathos, avec un humour qui tient aux brusques changements de nuance. La flûte et le hautbois y ont de petits rôles de solistes. Écoutez comme ce petit orchestre sonne plein : tout tient à l'écriture.",
        "§ Une partition dans un tiroir",
        "Schubert meurt en 1828 sans avoir entendu sa symphonie en concert public. Le manuscrit reste dans les papiers de son frère Ferdinand. La première exécution publique a lieu à Vienne en 1841, et Brahms en prépare l'édition, publiée en 1885.",
      ],
      ecoute: "Dans l'Andante, guettez l'instant où l'harmonie glisse ailleurs : la lumière change d'un coup.",
    },
  ],
  aSavoir: [
    "La Halle aux Grains est une ancienne halle au blé, de plan hexagonal. Le public entoure l'orchestre : cinq côtés de gradins complets, et un sixième, au-dessus de l'arrière-scène, réduit à quelques rangs en hauteur, d'où l'on voit le chef de face. Selon votre place, vous ne verrez pas les mêmes pupitres. Comparez avec votre voisin à l'entracte.",
    "Le cor est l'un des instruments les plus difficiles de l'orchestre : un tube de près de quatre mètres enroulé sur lui-même, que le musicien contrôle avec ses lèvres. Ce soir, cherchez Stefan Dohr à côté du chef, puis les cors de l'orchestre, au fond, dans l'ouverture de Weber.",
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

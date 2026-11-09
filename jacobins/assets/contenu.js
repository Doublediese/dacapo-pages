// Contenus de la démonstration Piano aux Jacobins, récital de Jonathan Biss du mardi 29 septembre 2026.
// Textes sur les œuvres et capsule audio : Thibault d'Hauthuille (Double Dièse), repris de la première démonstration.
// Contenus utilisés avec l'accord du festival Piano aux Jacobins.
// Dans les textes, un paragraphe qui commence par « § » devient un intertitre.
window.DC = window.DC || {};
DC.contenu = {
  // Préfixe du stockage local et du canal : cette démo ne partage rien avec les autres.
  prefixe: "jac-",
  orchestre: "Piano aux Jacobins",
  logo: "logo-jacobins.png",
  concert: {
    titre: "Là où les mots s'arrêtent",
    fil: "De la voix sans paroles à la parole cachée",
    accroche: "Jonathan Biss a construit son récital autour d'une question : que dit la musique quand les mots manquent ? De Mendelssohn à Schumann, cinq réponses, du chant sans paroles à la lettre d'amour codée.",
    date: "Mardi 29 septembre 2026",
    dateIso: "2026-09-29",
    heure: "20 h",
    debutIso: "2026-09-29T20:00:00+02:00",
    finIso: "2026-09-29T21:30:00+02:00",
    lieu: "Cloître des Jacobins, Toulouse",
    duree: "Environ 1 h 10, avec entracte",
    entracte: "Après l'entracte, une seule œuvre : la Fantaisie de Schumann, une lettre d'amour qui cache un message.",
    simulerJ: -2,
  },
  parole: {
    titre: "Le programme raconté par son interprète",
    video: "À cette place, Jonathan Biss présente son programme, en vidéo ou en audio.",
  },
  episode: {
    titre: "Écouter la présentation",
    auteur: "Thibault d'Hauthuille",
    duree: "3 min 58",
    legende: "À écouter quand vous voulez d'ici le concert : chez vous, en route, ou en attendant l'ouverture des portes.",
    fichier: "capsule-biss.mp3",
  },
  artistes: [
    {
      nom: "Jonathan Biss", role: "piano", texte: "Pianiste et écrivain américain. Trois choses à savoir sur lui :",
      photo: "jonathan-biss.jpg",
      points: [
        "Il a grandi parmi les musiciens : ses parents sont tous deux instrumentistes, et sa grand-mère, la violoncelliste Raya Garbousova, a inspiré à Samuel Barber son Concerto pour violoncelle.",
        "Il écrit autant qu'il joue : il a publié plusieurs livres sur Beethoven et sur Schumann, où il parle de musique avec la même franchise que de ses propres doutes.",
        "Il codirige, avec la pianiste Mitsuko Uchida, le festival de Marlboro aux États-Unis, l'un des hauts lieux de la musique de chambre dans le monde.",
      ],
      lien: "https://www.jonathanbiss.com/",
    },
  ],
  // L'ordre de la soirée. La pause est un élément de la ligne, pas une œuvre.
  soiree: [
    {
      id: "mendelssohn", partie: 1, compositeur: "Felix Mendelssohn", titre: "Trois Romances sans paroles", annee: "", duree: "9 min",
      sousTitre: "Op. 38 n° 6 (Duetto), op. 38 n° 3, op. 85 n° 4",
      bref: [
        "§ Mendelssohn amoureux",
        "Francfort, été 1836. Felix Mendelssohn a 27 ans. Il rencontre Cécile Jeanrenaud, la fille d'un pasteur de la ville, en tombe amoureux et l'épouse moins d'un an plus tard.",
        "À cette époque, il écrit une petite pièce pour piano qu'il intitule lui-même Duetto, un duo. On y entend deux voix, l'une aiguë, l'autre grave, qui se répondent puis chantent ensemble. Une conversation amoureuse, sans un seul mot.",
        "C'est tout le principe de ces Romances sans paroles : des chansons dont Mendelssohn a gardé la voix et retiré le texte. Quand on lui demandait ce qu'elles voulaient dire, il répondait que la musique est plus précise que les mots.",
      ],
      ecoute: "Dans le Duetto, qui ouvre le concert, cherchez les deux voix. Vous les reconnaîtrez sans peine.",
      long: [
        "§ Lieder ohne Worte : la voix sans le texte",
        "Le titre allemand dit mieux que sa traduction française le paradoxe du genre. Un Lied est par définition un poème mis en musique : Mendelssohn en conserve tout, la ligne vocale, l'accompagnement, la forme strophique, et retire précisément ce qui le fonde, le texte. Le français a choisi « romances », du nom de la mélodie de salon, ce qui déplace l'accent vers l'intimité plus que vers le paradoxe.",
        "Le recueil compte huit cahiers de six pièces. Six ont paru du vivant du compositeur, entre 1832 et 1845 ; les deux derniers sont posthumes. Les titres évocateurs qui les accompagnent souvent, comme Chant du printemps ou La Fileuse, viennent pour la plupart des éditeurs. Mendelssohn n'en a donné lui-même qu'une poignée : les trois Chants de gondolier vénitien, le Duetto, le Chant populaire. Ailleurs, il laisse l'auditeur sans guide.",
        "L'écriture repose presque toujours sur trois plans : une mélodie chantante dans l'aigu, un accompagnement en arpèges ou en accords répétés dans le médium, une basse qui assure l'harmonie. La difficulté est de faire chanter la ligne supérieure au-dessus d'un accompagnement souvent joué par la même main. Tout l'art du toucher est là.",
        "En 1842, Mendelssohn répond à Marc-André Souchay, qui l'interrogeait sur le sens de ces pièces : ce que lui dit la musique qu'il aime, ce ne sont pas des pensées trop vagues pour les mots, mais au contraire trop précises. C'est le point de départ exact du programme de Jonathan Biss. Ici, la parole est retirée, mais la voix demeure. Les œuvres suivantes iront plus loin : Kurtág fera parler les silences, Kirsten réduira la voix au babil, avant que Schumann ne transforme la musique elle-même en lettre.",
        "Les trois pièces. Le Duetto en la bémol majeur, op. 38 n° 6, est l'une des rares pièces que Mendelssohn a lui-même titrées. Il pousse à l'extrême la logique du chant sans paroles : à la voix unique se substitue un dialogue entre un registre de soprano et un registre de ténor, qui finissent par se rejoindre. La Romance en mi majeur, op. 38 n° 3, issue du même cahier publié en 1837, apporte un contraste d'humeur. La Romance en ré majeur, op. 85 n° 4, appartient au septième cahier, paru après la mort du compositeur en 1847. Le parcours va ainsi des années de bonheur à une page que Mendelssohn n'a pas vue publiée.",
      ],
      ecouteLong: "La manière dont Biss détache la ligne du chant de l'accompagnement, comme une voix qui se tient légèrement devant le piano.",
      guetter: [["À l'écoute", "Deux voix se répondent dans le Duetto."]],
    },
    {
      id: "janacek", partie: 1, compositeur: "Leoš Janáček", titre: "Sur un sentier recouvert", annee: "", duree: "7 min",
      sousTitre: "« La parole manque » et « Anxiété indicible »",
      bref: [
        "§ L'homme qui écoutait parler les gens",
        "Leoš Janáček avait une manie : partout où il allait, il notait dans de petits carnets la mélodie des phrases qu'il entendait, au marché, dans le tramway, chez lui. Il était convaincu que la façon dont on parle en dit plus que les mots eux-mêmes.",
        "En 1903, sa fille Olga meurt à 21 ans. Et cet homme qui écoutait toutes les voix ne trouve plus ses mots. Il les confie au piano, dans un recueil de petites pièces intitulé Sur un sentier recouvert.",
        "Les deux que joue Jonathan Biss portent des titres qui disent tout : La parole manque et Anxiété indicible.",
      ],
      ecoute: "Ces pièces avancent par petites phrases qui se répètent, s'interrompent, reprennent. Comme quelqu'un qui cherche à dire quelque chose et n'y arrive pas.",
      long: [
        "§ Sur un sentier recouvert : la parole brisée",
        "Le cycle compte quinze pièces réparties en deux séries. La première, dix pièces composées entre 1900 et 1911, est publiée en 1911 ; la seconde, cinq pièces, ne paraît qu'après la mort du compositeur. Les premières esquisses étaient destinées à l'harmonium, avant que Janáček ne les reprenne pour le piano.",
        "Ces années sont celles des deuils. Janáček avait déjà perdu son fils Vladimír en bas âge ; la mort de sa fille Olga en 1903 le dévaste. Il lui dédie Jenůfa, l'opéra qu'il achève alors. Le cycle pour piano porte cette douleur sans jamais la nommer : ses titres évoquent des souvenirs, des paysages, des états, jamais un événement.",
        "Le paradoxe tient à l'homme. Toute sa vie, Janáček a recueilli ce qu'il appelait les « mélodies de la parole » : les contours rythmiques et mélodiques du langage parlé, qu'il considérait comme la trace la plus exacte de l'émotion. Son écriture en garde la marque : cellules brèves, répétées avec obstination, ruptures soudaines, silences qui coupent la phrase. Dans La parole manque, cette syntaxe de la parole tourne à vide, comme une phrase qui bute sur le mot qu'elle cherche.",
        "Dans le programme de Jonathan Biss, Janáček marque un seuil. Chez Mendelssohn, la voix chantait sans texte. Ici, c'est la parole elle-même qui se fracture. Kurtág poursuivra en faisant du silence un interlocuteur.",
      ],
      ecouteLong: "Les répétitions. Chaque reprise d'un même motif n'est jamais tout à fait identique : c'est là que passe l'émotion.",
      guetter: [["À l'écoute", "Des phrases qui recommencent, comme quelqu'un qui cherche ses mots."]],
    },
    {
      id: "kurtag", partie: 1, compositeur: "György Kurtág", titre: "Conversation tranquille avec le Diable", annee: "", duree: "2 min",
      sousTitre: "Extrait des Játékok, volume III",
      bref: [
        "§ Un compositeur qui joue comme un enfant",
        "En 1973, le Hongrois György Kurtág commence à écrire de petites pièces pour apprendre le piano aux enfants. Il les appelle Játékok, « Jeux ». Il veut que les enfants touchent l'instrument comme un jouet : le caresser, le frapper, faire glisser leurs doigts dessus, sans peur de mal faire.",
        "Il n'a jamais arrêté. Un demi-siècle plus tard, les Jeux remplissent une dizaine de volumes, et sont devenus son journal intime en musique. Kurtág est né en 1926 : on fête cette année ses cent ans.",
        "La pièce jouée ce soir s'appelle Conversation tranquille avec le Diable. Dans la partition, le titre est écrit entre parenthèses, comme s'il était chuchoté.",
      ],
      ecoute: "Les silences. Ils font partie de la conversation. Pendant qu'ils durent, demandez-vous qui répond.",
      long: [
        "§ Játékok : le journal d'un demi-siècle",
        "Le projet naît en 1973 comme une méthode de piano. Les premiers volumes initient l'enfant aux gestes élémentaires : jouer avec la paume, le poing, les clusters, glisser sur les touches, explorer le son avant la note. La notation y est parfois graphique, laissant à l'interprète une marge d'invention.",
        "Au fil des décennies, le recueil perd son caractère pédagogique et devient l'atelier du compositeur : hommages à des amis, messages personnels, pages d'adieu, véritables entrées d'un journal. La miniature est sa forme naturelle. Héritier de Webern, Kurtág condense une idée en quelques secondes ; une pièce peut tenir en une poignée de notes, et chacune compte.",
        "(quiet talk with the devil) appartient au troisième volume. Les parenthèses du titre ne sont pas anodines : on en trouve d'autres dans le recueil, comme si certains titres devaient être prononcés à mi-voix. La « conversation » annoncée n'a rien d'un dialogue équilibré : de brèves interventions, séparées par des silences dont la durée fait partie de l'œuvre. On ne sait jamais qui parle, ni si l'autre répond.",
        "Dans le programme de Jonathan Biss, Kurtág franchit un nouveau seuil. Chez Janáček, la parole se brisait. Ici, le silence devient l'interlocuteur. Kirsten ira plus loin encore, en réduisant la voix humaine au babil.",
      ],
      ecouteLong: "Pour prolonger : Pierre-Laurent Aimard, l'un des plus proches interprètes du compositeur, a enregistré en 2024 une vaste anthologie des Játékok en sa présence.",
      guetter: [["À l'écoute", "Écoutez les silences. Qui répond ?"]],
    },
    {
      id: "kirsten", partie: 1, compositeur: "Amy Beth Kirsten", titre: "(speak to me)", annee: "", duree: "13 min",
      bref: [
        "§ La nymphe qui ne pouvait plus parler la première",
        "Dans la mythologie grecque, Écho est une nymphe bavarde. Trop bavarde : un jour, elle distrait la déesse Junon par son babillage pendant que Jupiter, son mari, s'éclipse auprès d'autres nymphes. Junon la punit d'une étrange façon. Désormais, Écho ne pourra plus jamais parler la première : elle répétera seulement les derniers mots des autres.",
        "Puis Écho tombe amoureuse du beau Narcisse. Elle voudrait lui dire qu'elle l'aime, mais elle ne peut que répéter ce qu'il dit. Il la repousse. Elle se cache, dépérit, et il ne reste d'elle qu'une voix, celle que l'on entend encore dans les montagnes.",
        "La compositrice américaine Amy Beth Kirsten a fait de cette histoire une pièce pour piano, (speak to me) : « parle-moi ».",
      ],
      ecoute: "Ne soyez pas surpris : pendant cette pièce, Jonathan Biss ne fera pas que jouer. Il utilisera aussi sa voix, avec des sons, des murmures, des bribes qui ne deviennent jamais des mots.",
      long: [
        "§ (speak to me) : la voix sans langage",
        "Le mythe d'Écho et Narcisse, transmis par le troisième livre des Métamorphoses d'Ovide, est un récit en miroir. Narcisse est condamné par l'image, amoureux d'un reflet qu'il ne peut saisir. Écho est condamnée par le son : elle ne peut plus produire de parole propre, seulement renvoyer celle des autres. Le désir existe, la voix existe, mais le langage lui est retiré.",
        "Dans (speak to me), le pianiste devient aussi vocaliste. Il joue et produit simultanément des sons avec sa voix : souffles, babil, syllabes sans signification. L'interprète incarne ainsi la condition d'Écho, puisqu'il dispose d'une voix sans jamais disposer de mots. Cette écriture appartient à une tendance de la création contemporaine qui fait sortir l'instrumentiste de son rôle pour en faire un acteur et un chanteur.",
        "Comme chez Kurtág, le titre est placé entre parenthèses, comme s'il était murmuré, et il prend la forme d'une supplique adressée à quelqu'un qui ne répondra pas.",
        "Dans l'arc du programme, c'est le point le plus radical. Chez Mendelssohn, la voix chantait sans texte. Chez Janáček, la parole se brisait. Chez Kurtág, le silence répondait. Ici, la voix humaine revient sur scène, mais vidée de tout langage. Il ne reste plus à Schumann qu'à faire de la musique elle-même une lettre.",
      ],
      ecouteLong: "Les souffles et les syllabes du pianiste : une voix qui cherche, sans jamais trouver de mot.",
      guetter: [["À l'écoute", "Le pianiste utilisera sa voix. Jamais un mot."]],
    },
    { pause: true, duree: "20 min" },
    {
      id: "schumann", partie: 2, compositeur: "Robert Schumann", titre: "Fantaisie en ut majeur op. 17", annee: "", duree: "30 min",
      bref: [
        "§ Une lettre d'amour codée",
        "1836. Robert Schumann et la pianiste Clara Wieck s'aiment. Le père de Clara s'y oppose avec acharnement : il lui interdit de voir Robert et de lui écrire. Les deux amants mettront quatre ans et un procès à pouvoir se marier.",
        "Pendant cette séparation, Schumann compose sa Fantaisie. Il écrit à Clara que le premier mouvement est « une plainte profonde » pour elle. Et il y cache un message. Vers la fin, il glisse une mélodie de Beethoven, tirée d'un recueil de chansons intitulé À la bien-aimée lointaine. Dans la chanson d'origine, les paroles disent : « Prends-les donc, ces chants que je t'ai chantés. »",
        "Personne dans la salle n'entend ces mots. Clara, elle, les connaissait.",
      ],
      ecoute: "À la fin du premier mouvement, la musique s'apaise et une mélodie simple apparaît, comme une confidence. C'est le message.",
      long: [
        "§ Fantaisie op. 17 : la parole cachée",
        "L'œuvre naît d'un projet public avant de devenir une confidence. En 1836, Schumann envisage une sonate dont les bénéfices iraient au monument que la ville de Bonn veut élever à Beethoven. Les trois mouvements devaient s'intituler Ruines, Trophées et Palmes. Les titres disparaissent, la destination change : la partition paraît en 1839 sous le titre de Fantaisie, dédiée à Liszt, qui lui rendra la politesse en dédiant à Schumann sa Sonate en si mineur.",
        "L'exergue choisi par Schumann est un quatrain de Friedrich Schlegel : « À travers tous les sons / du rêve bariolé de la terre / résonne un son ténu / pour celui qui écoute en secret. » Tout l'esprit de l'œuvre tient dans ces vers. Sous la surface, un message est adressé à une seule personne.",
        "Ce message a une forme précise. Le premier mouvement, que Schumann décrit à Clara comme ce qu'il a écrit de plus passionné, se clôt sur une citation du cycle de Beethoven An die ferne Geliebte, « À la bien-aimée lointaine ». La phrase citée accompagne, dans le lied, les mots « Prends-les donc, ces chants que je t'ai chantés ». Le motif irrigue d'ailleurs tout le mouvement sous des formes transformées, avant d'apparaître en clair à la fin.",
        "La forme est elle-même singulière. Le premier mouvement, libre et rhapsodique, est suivi d'une marche éclatante, puis d'un finale lent et méditatif, au lieu de la conclusion brillante qu'attendait l'époque. L'œuvre s'éteint au lieu de triompher.",
        "Le programme de Jonathan Biss se referme ainsi sur un renversement. Il s'ouvrait sur des chants dont Mendelssohn avait retiré les paroles. Il s'achève sur une musique qui porte des paroles absentes, que seule la destinataire pouvait entendre. La musique ne remplace plus le langage : elle le contient.",
      ],
      ecouteLong: "La dernière page du finale, où la musique ralentit jusqu'au silence. Biss a construit tout le récital pour arriver là.",
      guetter: [["À l'écoute", "À la fin du premier mouvement, la mélodie cachée pour Clara."]],
    },
  ],
  aSavoir: [
    "Les pièces s'enchaînent parfois. Dans le doute, attendez que le pianiste lève les mains du clavier pour applaudir.",
  ],
  partenaires: [
    "[À cette place, vos mécènes et partenaires, avec leur logo et leur mention.]",
  ],
  // Mots d'exemple pour le nuage de l'espace du festival ; ils sont marqués « Exemple » à l'écran.
  exemples: [["intime", "Les deux voix du Duetto"], ["suspendu", "Les silences de Kurtág"], ["troublant", "La voix du pianiste dans (speak to me)"], ["intime", ""], ["confidence", "La mélodie cachée pour Clara"], ["suspendu", ""], ["bouleversant", "La fin de la Fantaisie"], ["poésie", ""], ["intime", ""], ["silence", "Quand le pianiste lève les mains, avant les applaudissements"], ["lumineux", ""], ["bouleversant", ""]],
  textes: {
    jour: "mardi",
    dateCourte: "29 septembre",
    objetRappel: "Mardi, 20 h, cloître des Jacobins : votre guide est prêt",
    rappel: "Mardi 29 septembre, 20 h, cloître des Jacobins à Toulouse. Le récital dure environ une heure et dix minutes, avec un entracte.",
    guidePret: "Votre guide d'écoute est prêt : les clés de chaque œuvre, et une présentation de quatre minutes à écouter quand vous voulez d'ici le concert.",
    sortie: "les photos de la soirée et votre mot vous attendent ici.",
    photosTitre: "Mardi soir au cloître des Jacobins",
    reviendriez: "Reviendriez-vous au festival ?",
    prevenu: "Être prévenu(e) de la programmation de l'an prochain",
    lienOfficiel: "avec le festival",
    soutenir: "Soutenir le festival",
    bisExemple: "Schumann, Des Abends",
    meteo: "Pluie annoncée : merci de garder vos affaires à l'abri sous les galeries du cloître.",
    motAccueil: "« Bonsoir. Ce soir, le guide de votre téléphone vous accompagne. Il va passer au noir quand Jonathan Biss entrera : c'est le moment de le ranger. À l'entracte, il vous présente la seconde partie. Et à la fin du récital, vous y trouverez les photos de la soirée, et vous pourrez nous dire, en un mot, ce que vous avez ressenti. »",
    nuageLigne: "Mardi 29 septembre, cloître des Jacobins",
  },
};

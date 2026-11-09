// Contenus de la démonstration Ensemble la Sportelle, programme Ad Astra.
// Programme et présentation de l'ensemble : ensemblelasportelle.com. Clés d'écoute et capsule audio : Thibault d'Hauthuille (Double Dièse).
// Repris de la première démonstration. Date et lieu : exemple de démonstration.
// Dans les textes, un paragraphe qui commence par « § » devient un intertitre.
window.DC = window.DC || {};
DC.contenu = {
  // Préfixe du stockage local et du canal : cette démo ne partage rien avec les autres.
  prefixe: "astra-",
  orchestre: "Ensemble la Sportelle",
  logo: "logo-sportelle.png",
  concert: {
    titre: "Ad Astra",
    fil: "De l'abîme aux étoiles",
    accroche: "Une ascension immersive pour chœur et orgue, de l'abîme au firmament. Du De Profundis d'Arvo Pärt à Jonathan Dove, d'un seul souffle.",
    date: "Samedi 21 août 2027",
    dateIso: "2027-08-21",
    heure: "21 h 30",
    debutIso: "2027-08-21T21:30:00+02:00",
    finIso: "2027-08-21T22:50:00+02:00",
    lieu: "Basilique Saint-Sauveur, Rocamadour",
    duree: "Environ 1 h 20, sans entracte",
    entracte: "",
    simulerJ: -2,
  },
  parole: {
    titre: "La parole de l'ensemble",
    video: "Pourquoi Ad Astra ? À cette place, la vidéo de l'ensemble.",
    textes: ["À cette place, la note d'intention d'Emmeran Rollin, directeur artistique."],
  },
  episode: {
    titre: "Les clés d'écoute : une analyse à écouter",
    auteur: "Thibault d'Hauthuille",
    duree: "2 min 55",
    legende: "À écouter quand vous voulez d'ici le concert.",
    fichier: "capsule-sportelle.mp3",
  },
  artistes: [
    {
      nom: "Ensemble la Sportelle", role: "17 chanteurs et un chef",
      texte: "Né en 2017 à Rocamadour, où Poulenc retrouva la foi en 1936, l'Ensemble la Sportelle porte le nom de la médaille en forme d'amande remise aux pèlerins. Il change de taille selon les œuvres, de neuf voix à un grand chœur d'oratorio. Emmeran Rollin en assure la direction artistique. Quatre disques sont parus au Label Rocamadour.",
      photo: "ensemble-la-sportelle.jpg",
      lien: "https://ensemblelasportelle.com", lienTexte: "Le site de l'ensemble",
    },
    { nom: "Emmeran Rollin", role: "orgue", texte: "Organiste et directeur artistique de l'ensemble." },
  ],
  // L'ordre de la soirée, d'un seul souffle. Seule l'œuvre de Tavener est rédigée dans cette démonstration.
  soiree: [
    { id: "part-deprofundis", partie: 1, compositeur: "Arvo Pärt", titre: "De Profundis", duree: "" },
    { id: "psaume129", partie: 1, compositeur: "Grégorien", titre: "Psaume 129", duree: "" },
    { id: "purcell", partie: 1, compositeur: "Henry Purcell", titre: "Man that is born of a woman", duree: "" },
    { id: "pott", partie: 1, compositeur: "Francis Pott", titre: "The Souls of the Righteous", duree: "" },
    { id: "brahms-prelude", partie: 1, compositeur: "Johannes Brahms", titre: "Prélude de choral", duree: "" },
    { id: "brahms-lied", partie: 1, compositeur: "Johannes Brahms", titre: "Geistliches Lied", duree: "" },
    {
      id: "tavener-athene", partie: 1, compositeur: "John Tavener", titre: "Song for Athene", annee: "1993", duree: "",
      bref: "Gardez l'oreille sur les basses : elles tiennent une seule note du début à la fin. Tout le chant se construit au-dessus de ce sol qui ne bouge pas.",
      long: "Tavener l'écrit en 1993 pour une jeune amie disparue, Athene Hariades. Cette note tenue vient de la liturgie byzantine, où on l'appelle l'ison. En 1997, la pièce accompagne la sortie du cercueil de Diana à Westminster.",
      ecoute: "",
    },
    { id: "tournemire", partie: 1, compositeur: "Charles Tournemire", titre: "Élévation", duree: "" },
    { id: "salve-gregorien", partie: 1, compositeur: "Grégorien", titre: "Salve Regina", duree: "" },
    { id: "part-salve", partie: 1, compositeur: "Arvo Pärt", titre: "Salve Regina", duree: "" },
    { id: "tavener-mother", partie: 1, compositeur: "John Tavener", titre: "Mother and Child", duree: "" },
    { id: "kalejs", partie: 1, compositeur: "Aivars Kalējs", titre: "Toccata sur « Allein Gott in der Höh sei Ehr »", duree: "" },
    { id: "part-beatitudes", partie: 1, compositeur: "Arvo Pärt", titre: "The Beatitudes", duree: "" },
    { id: "dove", partie: 1, compositeur: "Jonathan Dove", titre: "Seek Him that maketh the seven stars", duree: "" },
  ],
  aSavoir: [
    "Le concert commence dans le noir.",
    "Le chœur va se déplacer autour de vous.",
    "80 minutes d'un seul souffle : on applaudit à la fin.",
  ],
  partenaires: [
    "[À cette place, les partenaires de l'ensemble et du lieu d'accueil, avec leur logo et leur mention.]",
  ],
  // Mots d'exemple pour le nuage de l'espace ; ils sont marqués « Exemple » à l'écran.
  exemples: [["recueillement", "Le chœur qui marche dans le noir"], ["étoiles", "Seek Him that maketh the seven stars, à la fin"], ["silence", ""], ["frissons", "La note tenue de Song for Athene"], ["recueillement", ""], ["élévation", ""], ["immersion", "Les voix qui tournent autour de nous"], ["paix", ""], ["frissons", ""], ["lumière", ""], ["recueillement", ""]],
  textes: {
    jour: "samedi",
    dateCourte: "21 août",
    objetRappel: "Samedi, 21 h 30, basilique Saint-Sauveur : votre guide est prêt",
    rappel: "Samedi 21 août, 21 h 30, basilique Saint-Sauveur de Rocamadour. Le concert dure environ une heure et vingt minutes, sans entracte.",
    guidePret: "Votre guide d'écoute est prêt : la parole de l'ensemble, les clés d'écoute, et une analyse de trois minutes à écouter quand vous voulez d'ici le concert.",
    sortie: "votre mot vous attend ici.",
    photosTitre: "Samedi soir à la basilique Saint-Sauveur",
    reviendriez: "Reviendriez-vous écouter l'Ensemble la Sportelle ?",
    prevenu: "Être prévenu(e) des prochains concerts du lieu d'accueil",
    lienOfficiel: "avec l'ensemble",
    soutenir: "Soutenir l'ensemble",
    bisExemple: "Arvo Pärt, Bogoróditse Djévo",
    meteo: "Orage : merci de rester à l'abri dans la basilique à la fin du concert, le temps que la pluie passe.",
    motAccueil: "« Bonsoir. Ce soir, le concert commence dans le noir, et le chœur va se déplacer autour de vous. Le guide de votre téléphone passera au noir au premier chant : c'est le moment de le ranger. Quatre-vingts minutes d'un seul souffle : on applaudit à la fin. Après le concert, vous pourrez nous dire, en un mot, ce que vous avez ressenti. »",
    nuageLigne: "Samedi 21 août, basilique Saint-Sauveur",
  },
};

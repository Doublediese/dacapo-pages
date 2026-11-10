# dacapo-pages

Démonstrations statiques de Da Capo (Double Dièse), servies par GitHub Pages à l'adresse **demo.double-diese.fr** depuis le 10 novembre 2026. Les anciennes adresses en dacapo.double-diese.fr (QR codes imprimés) y sont renvoyées par l'application Da Capo, qui occupe désormais dacapo.double-diese.fr.

- `/onct/` : démonstration Da Capo sur le concert de l'ONCT du 14 novembre 2026 (Soddy, Dohr). `/onct/espace.html` : l'espace de l'orchestre (Régie, public, parcours, équipe) ; `/onct/?s=…` : le guide du spectateur relié à une séance. Les deux téléphones communiquent par le relais public ntfy.sh ; aucune donnée personnelle n'y passe.
- `/rocamadour/` : démonstration Da Capo sur le concert du Festival de Rocamadour du 19 août 2026 (Cantus Missae, Tenebrae et Ensemble la Sportelle, Nigel Short). `/rocamadour/espace.html` : l'espace du festival ; `/rocamadour/?s=…` : le guide du spectateur. Même mécanique que la démo ONCT, avec un stockage et un canal séparés (préfixe `roca-`).
- `/jacobins/` : démonstration Da Capo sur le récital de Jonathan Biss à Piano aux Jacobins (29 septembre 2026), reprise de la première démonstration Lovable, avec la capsule audio. `/jacobins/espace.html` : l'espace du festival. Contenus utilisés avec l'accord du festival.
- `/sportelle/ad-astra/` : démonstration Da Capo sur le programme Ad Astra de l'Ensemble la Sportelle (date d'exemple), reprise de la première démonstration Lovable, avec l'écoute guidée de Song for Athene. `/sportelle/ad-astra/espace.html` : l'espace du lieu d'accueil.
- `/vezere/` : l'avant-goût du concert du 19 janvier 2027 n'est plus ici. Il a été déplacé dans l'application Da Capo (dépôt `parcours-ecoute`, `apps/public/public/vezere/`), à son adresse imprimée dacapo.double-diese.fr/vezere/.
- `/jacobins/biss-2026/…` et `/sportelle/ad-astra/…` (guide, salle, sortie) : renvois des anciennes adresses de la démonstration Lovable vers les démos ci-dessus.

Règle : les adresses imprimées dans un QR code ne doivent jamais disparaître. Ne supprimer ni renommer un dossier publié ; le remplacer au besoin par une redirection.

Rien de confidentiel dans ce dépôt : il est public.

## Démo Da Capo Répertoire pour l'Ensemble la Sportelle (`sportelle/`)

Trois vues d'un même jeu de contenus, pour la diffusion d'un ensemble en tournée :

- `sportelle/diffusion.html` : le tableau de bord de l'équipe de diffusion et des agents (campagnes, liens personnels, suivi, export CSV pour Orféo).
- `sportelle/programmateur.html?r=<clé>` : la page qu'un programmateur reçoit à son nom. Ses gestes remontent en direct vers la vue diffusion (relais ntfy.sh, ou BroadcastChannel dans le même navigateur).
- `sportelle/concert.html` : la page spectateur de Cantus Missae, en français, anglais ou allemand.

Programmes, équipe et presse : brochure de diffusion 2026 de La Sportelle. Programmateurs, structures et statistiques : fictifs.

# dacapo-pages

Pages publiques statiques de Da Capo (Double Dièse), servies par GitHub Pages.

- `/onct/` : démonstration Da Capo sur le concert de l'ONCT du 14 novembre 2026 (Soddy, Dohr). `/onct/espace.html` : l'espace de l'orchestre (Régie, public, parcours, équipe) ; `/onct/?s=…` : le guide du spectateur relié à une séance. Les deux téléphones communiquent par le relais public ntfy.sh ; aucune donnée personnelle n'y passe.
- `/rocamadour/` : démonstration Da Capo sur le concert du Festival de Rocamadour du 19 août 2026 (Cantus Missae, Tenebrae et Ensemble la Sportelle, Nigel Short). `/rocamadour/espace.html` : l'espace du festival ; `/rocamadour/?s=…` : le guide du spectateur. Même mécanique que la démo ONCT, avec un stockage et un canal séparés (préfixe `roca-`).
- `/vezere/` : page d'avant-goût du concert du Quatuor Magenta (Festival de la Vézère, 19 janvier 2027), atteinte par le QR code imprimé sur la feuille de salle du 13 novembre 2026.

Règle : les adresses imprimées dans un QR code ne doivent jamais disparaître. Ne supprimer ni renommer un dossier publié ; le remplacer au besoin par une redirection.

Rien de confidentiel dans ce dépôt : il est public.

## Démo Da Capo Répertoire pour l'Ensemble la Sportelle (`sportelle/`)

Trois vues d'un même jeu de contenus, pour la diffusion d'un ensemble en tournée :

- `sportelle/diffusion.html` : le tableau de bord de l'équipe de diffusion et des agents (campagnes, liens personnels, suivi, export CSV pour Orféo).
- `sportelle/programmateur.html?r=<clé>` : la page qu'un programmateur reçoit à son nom. Ses gestes remontent en direct vers la vue diffusion (relais ntfy.sh, ou BroadcastChannel dans le même navigateur).
- `sportelle/concert.html` : la page spectateur de Cantus Missae, en français, anglais ou allemand.

Programmes, équipe et presse : brochure de diffusion 2026 de La Sportelle. Programmateurs, structures et statistiques : fictifs.

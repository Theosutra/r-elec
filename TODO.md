# TODO client : informations à récupérer auprès de R-ELEC

Chaque élément est repéré dans le code par `TODO_CLIENT` (recherche : `TODO_CLIENT`).
Tant qu'une information n'est pas confirmée, le site ne l'affiche pas ou affiche une mention neutre.

## Identité et contenus

- [ ] **Logo vectoriel (SVG ou PDF)** : seuls des WebP 510×510 ont été fournis. Un SVG donnerait un logo net à toutes les tailles et un vrai `favicon.svg`.
- [ ] **Prénoms des deux fils** (pour la présentation de l'équipe) : `src/data/company.ts` → `team`. Le flocage des camions affiche « Rouvière Quentin, 06 35 47 35 89 » : confirmer que Quentin est l'un des fils, que le second numéro est le sien, et donner le prénom du second fils.
- [ ] **Bornes de recharge** : le flocage des camions mentionne « borne de recharge ». Confirmer que c'est une prestation à ajouter au site (et les qualifications éventuelles, IRVE).
- [x] Photo principale (les deux utilitaires) : fournie et intégrée au hero.
- [ ] **Photos réelles** : chantiers, tableaux, climatisations posées, l'équipe, le véhicule. Elles remplaceront les photos temporaires d'Unsplash (`src/assets/photos/placeholders/`, sources listées dans `SOURCES.md`). Format conseillé : JPEG, 2000 px de large minimum.
- [ ] **Réalisations** : pour chaque chantier, 1 à 4 photos, la commune, le type de travaux et une phrase de contexte.

## Preuves (ne rien inventer)

- [ ] **Textes des avis clients** Google et Pages Jaunes (prénom + initiale, date, texte), avec l'accord du client → `src/data/reviews.ts`. Le JSON-LD `aggregateRating` s'active automatiquement dès qu'un avis est saisi.
- [ ] **Liens directs** vers la fiche Google et la page Pages Jaunes → `src/data/company.ts` → `ratings.*.url`.
- [ ] **Nombre exact d'avis Google** (environ 15 aujourd'hui) → `ratings.google.count` et `approximate`.
- [ ] **Certifications et qualifications** : RGE, Qualifelec, attestation de capacité pour les fluides frigorigènes, assurance décennale (assureur et zone de couverture, obligatoire dans les mentions légales) → `company.certifications`.

## Pratique

- [ ] **Zone d'intervention** à confirmer : Vendargues, Montpellier, Castries, Mauguio, Lunel, Le Crès, Baillargues, Saint-Aunès, Teyran. D'autres communes ? → `serviceArea`.
- [ ] **Horaires d'accueil** pour les devis, hors dépannage (aujourd'hui en placeholder « lundi au vendredi, 8h – 18h ») → `company.openingHours`.
- [ ] **Dépannage 24h/24** : confirmer que le numéro principal est bien celui à appeler la nuit, et s'il existe un tarif de nuit ou de week-end à mentionner.
- [ ] **Coordonnées GPS** exactes de l'adresse (carte et JSON-LD) → `company.geo`.
- [ ] **Qui décroche la nuit ?** Le site dit « c'est l'un de nous qui décroche ». À confirmer, ainsi que l'usage du second numéro (06 35 47 35 89) comme numéro de secours sur la page Dépannage.
- [ ] **Tarifs de nuit et de week-end** : la FAQ de la page Dépannage dit seulement que le tarif dépend du moment et de la panne. À compléter si le client le souhaite.
- [ ] **Délai d'intervention** habituel en dépannage, si le client souhaite l'afficher (aucun chiffre n'est affiché pour l'instant).

## Technique et légal

- [ ] **Nom de domaine** définitif → variable `PUBLIC_SITE_URL`.
- [ ] **Compte Formspree** (ou équivalent) et adresse de réception des devis → variable `PUBLIC_FORMSPREE_ENDPOINT`. L'envoi de photos par le formulaire de contact demande une offre Formspree payante.
- [ ] **Hébergeur** retenu (Netlify ou Vercel) : son nom et son adresse vont dans les mentions légales.
- [ ] **Directeur de la publication** : Sébastien Rouvière ? À confirmer.
- [ ] **RCS / ville d'immatriculation** (RCS Montpellier ?) pour les mentions légales.
- [ ] **Médiateur de la consommation** auquel R-ELEC adhère (obligatoire pour les particuliers) → `src/pages/mentions-legales.astro`.
- [ ] **Relire les 5 pages villes** (`src/data/cities.ts`) : distances approximatives, chantiers typiques, communes voisines.
- [ ] Les mentions `TODO_CLIENT` des pages légales sont **visibles** sur le site : les remplacer toutes avant la mise en ligne.

# Site R-ELEC

Site vitrine de R-ELEC, électricien et climaticien à Vendargues (34).
Astro 7 + Tailwind CSS 4, 100 % statique, quasiment sans JavaScript : seul le formulaire de devis embarque un petit script, et le site fonctionne aussi sans.

## Installation

Prérequis : Node.js 20 ou plus récent.

```bash
npm install
```

```bash
cp .env.example .env
```

Renseigner ensuite dans `.env` :

- `PUBLIC_FORMSPREE_ENDPOINT` : l'URL du formulaire Formspree (https://formspree.io → *New form*).
- `PUBLIC_SITE_URL` : l'adresse publique du site (sert au sitemap, aux URL canoniques et à Open Graph).

## Commandes

| Commande | Effet |
|---|---|
| `npm run dev` | Serveur de développement sur http://localhost:4321 |
| `npm run build` | Génère le site statique dans `dist/` |
| `npm run preview` | Sert `dist/` en local pour vérifier le build |
| `npm run assets` | Régénère logos, favicons, icônes et image Open Graph depuis `logo/` |

## Où modifier quoi

| Je veux changer… | Fichier |
|---|---|
| Téléphones, adresse, e-mail, SIRET, horaires, note des avis | `src/data/company.ts` |
| Communes desservies | `src/data/company.ts` → `serviceArea` |
| Prestations affichées sur l'accueil | `src/data/services.ts` |
| Choix du champ « Votre besoin » du formulaire | `src/data/services.ts` → `needOptions` |
| Questions fréquentes de l'accueil | `src/data/faq.ts` |
| Pages Électricité et Climatisation (sections, prestations, FAQ) | `src/data/servicePages.ts` |
| Pages villes (`/electricien-vendargues`, etc.) | `src/data/cities.ts` : ajouter une entrée crée une page |
| Galerie des réalisations | `src/data/realisations.ts` + photos dans `src/assets/photos/realisations/` |
| Avis clients | `src/data/reviews.ts` |
| Menu | `src/data/navigation.ts` |
| Couleurs, polices, rayons | `src/styles/global.css` (bloc `@theme`) |

### Ajouter de vrais avis

Copier chaque avis réel dans `src/data/reviews.ts` :

```ts
{ author: 'Marie L.', date: '2026-09', source: 'Google', rating: 5, text: '…', city: 'Castries' },
```

Les cartes d'avis apparaissent alors sur l'accueil, et la note agrégée est ajoutée au JSON-LD. Ne jamais saisir d'avis inventé.

### Remplacer les photos

Les photos actuelles sont temporaires (Unsplash, voir `src/assets/photos/placeholders/SOURCES.md`).

1. Déposer les vraies photos dans `src/assets/photos/realisations/` (JPEG, 2000 px de large minimum, sans les compresser à l'avance).
2. Dans la page concernée (`src/pages/index.astro` pour l'accueil), remplacer l'import, par exemple :
   `import heroPhoto from '../assets/photos/realisations/mon-chantier.jpg';`
3. Astro génère automatiquement les versions AVIF et WebP aux bonnes tailles.

### Changer le logo

Remplacer les fichiers de `logo/` (mêmes noms), puis lancer `npm run assets`.

## Pages du site

| URL | Fichier |
|---|---|
| `/` | `src/pages/index.astro` |
| `/electricite-generale`, `/climatisation-chauffage` | `src/layouts/ServicePageLayout.astro` + `src/data/servicePages.ts` |
| `/depannage-urgent` | `src/pages/depannage-urgent.astro` |
| `/realisations` | `src/pages/realisations.astro` |
| `/contact` | `src/pages/contact.astro` (formulaire complet, photo facultative, carte chargée au clic) |
| `/electricien-vendargues`, `/electricien-castries`, `/electricien-mauguio`, `/electricien-lunel`, `/climatisation-montpellier` | `src/pages/[ville].astro` + `src/data/cities.ts` |
| `/mentions-legales`, `/politique-confidentialite` | `src/pages/*.astro` (à compléter : voir TODO.md) |

### Ajouter une réalisation

1. Créer un dossier `src/assets/photos/realisations/mon-chantier/`, puis y déposer les photos.
2. Ajouter une entrée dans `src/data/realisations.ts`, par exemple `photos: ['mon-chantier/1.jpg']`.
3. Les emplacements « Photo à venir » disparaissent au fur et à mesure.

### Ajouter une ville

Copier une entrée de `src/data/cities.ts`, puis changer le `slug`, la ville et **tous les textes**. Chaque page doit rester différente des autres, sinon Google la considère comme un contenu dupliqué. La page et son entrée dans le sitemap sont générées automatiquement. Pour la faire apparaître aussi dans le footer et dans la rangée des villes de l'accueil, renseigner `page: '/le-slug'` sur la commune dans `serviceArea` (`src/data/company.ts`).

## Déploiement

### En ligne aujourd'hui : GitHub Pages (préproduction)

- Site : https://theosutra.github.io/r-elec/
- Dépôt : https://github.com/Theosutra/r-elec
- Chaque push sur `main` reconstruit et republie le site (`.github/workflows/deploy.yml`, onglet *Actions*).
- Le site est en **noindex** : Google ne l'indexe pas tant que la variable `PUBLIC_ALLOW_INDEXING` ne vaut pas `true`.

Les réglages se font dans *Settings → Secrets and variables → Actions → Variables* du dépôt :

| Variable | Rôle | Valeur actuelle |
|---|---|---|
| `PUBLIC_FORMSPREE_ENDPOINT` | Active l'envoi des formulaires | vide (le formulaire invite à appeler) |
| `PUBLIC_ALLOW_INDEXING` | `true` = Google peut indexer | vide (noindex) |
| `PUBLIC_SITE_URL` | Adresse publique | `https://theosutra.github.io` par défaut |
| `BASE_PATH` | Sous-dossier de publication | `/r-elec` par défaut |

Après un changement de variable, relancer le workflow : *Actions → Déploiement GitHub Pages → Run workflow*.

### Le jour du lancement, avec un nom de domaine

1. Dans *Settings → Pages → Custom domain*, saisir le domaine (ex. `www.r-elec.fr`), puis créer chez le registrar l'enregistrement DNS indiqué par GitHub.
2. Variables : `PUBLIC_SITE_URL` = `https://www.r-elec.fr`, `BASE_PATH` = `/` et `PUBLIC_ALLOW_INDEXING` = `true`.
3. Relancer le workflow.

### Autres hébergeurs (Netlify, Vercel, Cloudflare Pages)

- Commande de build : `npm run build`
- Dossier publié : `dist`
- Variables : celles du tableau ci-dessus. Laisser `BASE_PATH` vide si le site est à la racine du domaine.

### Build local

En local, laisser `BASE_PATH` vide : le site est servi à la racine (http://localhost:4321). Sous Windows avec Git Bash, pour tester un build avec `BASE_PATH=/r-elec`, préfixer la commande par `MSYS_NO_PATHCONV=1`.

## Qualité

- Lighthouse, build de production : 100 / 100 / 100 / 100 sur l'accueil (mobile et desktop) et 99-100 en performance sur les autres pages (mobile).
- JSON-LD `Electrician` + `HVACBusiness`, sitemap (`/sitemap-index.xml`), `robots.txt`, balises Open Graph, favicons et manifest.
- Animations en CSS uniquement, désactivées si l'utilisateur préfère réduire les mouvements.

Les informations à obtenir du client sont listées dans [TODO.md](TODO.md).

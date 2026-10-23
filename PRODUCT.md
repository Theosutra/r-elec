# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro + Tailwind CSS, 100 % statique, JS uniquement en îlots si nécessaire. Formulaire de devis via Formspree (ou équivalent), endpoint en variable d'environnement, honeypot anti-spam. Déploiement Netlify/Vercel. Lighthouse ≥ 95 sur toutes les catégories, mobile-first. Images via `astro:assets` (WebP/AVIF).

## Users

- Particuliers de l'est montpelliérain (Vendargues, Castries, Mauguio, Lunel, Le Crès, Baillargues, Saint-Aunès, Teyran, Montpellier) avec un besoin électrique ou de climatisation : panne, rénovation, mise aux normes, installation ou entretien de clim / pompe à chaleur.
- Petits professionnels locaux (commerces, bureaux) avec les mêmes besoins.
- Situation fréquente : sur mobile, parfois dans l'urgence (panne de courant, clim en panne en plein été, disjoncteur qui saute), souvent après une recherche Google locale. Ils veulent savoir vite si R-ELEC intervient chez eux, si c'est sérieux, et comment joindre quelqu'un.

## Product Purpose

Site vitrine qui génère des appels et des demandes de devis, et qui se positionne en SEO local (« électricien Vendargues », « climatisation Vendargues », « dépannage électrique Castries/Mauguio/Lunel »). La réussite se mesure en appels et en devis reçus.

## Positioning

Une entreprise familiale : Sébastien Rouvière et ses deux fils travaillent ensemble, et R-ELEC ne sous-traite rien. Le client a affaire à la même équipe de l'électricité à la climatisation. Artisan local depuis 2006, dépannage 7j/7 et 24h/24, avec la réactivité comme argument clé.

## Operating Context

- Deux métiers sous le même toit : électricité générale (installation neuf/rénovation, tableau, NF C 15-100, mise en sécurité, dépannage, éclairage, RJ45, interphone, domotique, maintenance) et climatisation/chauffage (split, gainable, réversible, cassette, PAC, ballon thermodynamique, entretien, dépannage, ventilateurs de plafond).
- Le premier contact passe surtout par le téléphone (06 19 91 61 19), puis par le formulaire de devis.

## Capabilities and Constraints

- Données légales et de contact : source de vérité dans `src/data/company.ts`.
- Dépannage 7j/7 et 24h/24, confirmé par l'utilisateur. Aucun délai d'intervention chiffré n'a été fourni : n'en inventer aucun.
- Zone d'intervention à confirmer (TODO_CLIENT).
- Horaires d'ouverture : placeholder.

## Brand Commitments

- Logos : `logo/logoampoule.webp` (icône ampoule/flocon, double métier) et `logo/logotypo.webp` (logotype R-ELEC). WebP uniquement, pas de SVG fourni.
- Couleurs strictes : bleu `#204d9c` (principal), jaune `#fcd93d` (accent rare : CTA, highlights), blanc dominant. Pas de texte jaune sur blanc ; sur jaune, texte bleu/foncé ; sur bleu, texte blanc ou jaune. Nuances dérivées autorisées, aucune autre couleur de marque.
- Ton : français naturel, sérieux, proche, rassurant, orienté bénéfices ; pas de jargon marketing creux.
- Icônes Lucide. Pas de photos stock clichés.
- Registre visuel choisi par l'utilisateur (23/10/2026, troisième itération, « mix R3 + référence Sawlpv ») : page à fond blanc dominant, conforme à la charte, rythmée par de grands blocs arrondis. Hero en carte photo arrondie, voile bleu nuit, titre en bas à gauche avec mots-clés en jaune, formulaire de devis en carte blanche posé dans le hero et pastilles de services. Blocs bleu nuit #0b1630 avec mots-clés jaunes et tuiles de chiffres en mono (repris de R3). Section de cartes sur fond gris bleuté, dont une carte bleu nuit mise en avant, pastilles d'icône jaunes. Sur fond blanc, le mot-clé passe en bleu et le reste du titre en gris (jamais de jaune). AUCUN quadrillage ni filet de grille (demande explicite). Exclus, car inventés : logos clients, chiffres non fournis, faux avis, blog.

## Evidence on Hand

- Activité depuis 2006, SARL créée en 2008.
- Note 5/5 sur environ 15 avis Google et 14 avis Pages Jaunes. Le texte des avis n'est pas fourni : n'en inventer aucun et ne mettre `aggregateRating` dans le JSON-LD que lorsque les vrais avis sont fournis.
- Équipe : Sébastien Rouvière (gérant) et ses deux fils. Les prénoms des fils ne sont pas fournis.
- Le client possède de vraies photos, pas encore transmises. En attendant : photos libres de droits trouvées en ligne, toutes marquées à remplacer.
- Aucune certification confirmée (RGE, Qualifelec, attestation fluides frigorigènes) : TODO_CLIENT, rien d'affiché tant que ce n'est pas confirmé.

## Product Principles

1. Joindre R-ELEC doit toujours être à un pouce : le téléphone avant tout.
2. Prouver avec des faits vérifiables (depuis 2006, l'équipe familiale, zéro sous-traitance, la note), jamais avec des promesses inventées.
3. Être local pour de vrai : chaque page ville parle de cette ville.
4. Deux métiers, une seule équipe : l'électricité et la clim se présentent comme un tout cohérent.

// Pages locales SEO, générées par src/pages/[ville].astro.
// Chaque page a un contenu propre à la commune (pas de texte dupliqué d'une page à l'autre).
// TODO_CLIENT : relire chaque page et ajouter, si possible, une réalisation réelle par commune.
import type { FaqItem } from './faq';

export type LocalNeed = { title: string; text: string };

export type CityPage = {
  slug: string;
  city: string;
  postalCode: string;
  kind: 'electricien' | 'climatisation';
  metaTitle: string;
  metaDescription: string;
  title: string;
  highlight: string;
  lead: string;
  /** Distance approximative depuis Vendargues, par la route. */
  distance: string;
  intro: string[];
  needsTitle: string;
  needs: LocalNeed[];
  services: { label: string; href: string }[];
  neighbours: string[];
  faq: FaqItem[];
};

export const cities: CityPage[] = [
  {
    slug: 'electricien-vendargues',
    city: 'Vendargues',
    postalCode: '34740',
    kind: 'electricien',
    metaTitle: 'Électricien à Vendargues (34740) : dépannage 24h/24, tableau, clim | R-ELEC',
    metaDescription:
      'R-ELEC, électricien et climaticien installé à Vendargues depuis 2006. Dépannage électrique 7j/7 et 24h/24, tableau, mise aux normes, climatisation. Devis gratuit.',
    title: 'Votre électricien',
    highlight: 'à Vendargues.',
    lead: 'Nous sommes installés rue Jean-François Millet. Quand vous appelez depuis Vendargues, nous ne sommes qu’à quelques rues de chez vous.',
    distance: 'Sur place',
    intro: [
      'Vendargues, c’est chez nous : R-ELEC y travaille depuis 2006. Sébastien Rouvière et ses deux fils connaissent bien les maisons de la commune, du centre ancien aux lotissements plus récents, et les installations qu’on y trouve.',
      'Pour un dépannage, cette proximité compte : moins de route, une intervention plus rapide, et une équipe qui peut repasser facilement pour un contrôle ou une finition.',
    ],
    needsTitle: 'Ce que l’on nous demande le plus à Vendargues',
    needs: [
      {
        title: 'Tableaux d’origine à remplacer',
        text: 'Dans les maisons construites il y a trente ou quarante ans, le tableau d’origine manque souvent de protections différentielles. Le remplacer est la première étape d’une mise en sécurité.',
      },
      {
        title: 'Extensions et aménagements',
        text: 'Véranda, garage aménagé, cuisine agrandie : chaque nouvel espace demande ses circuits, dimensionnés et raccordés dans les règles.',
      },
      {
        title: 'Climatisation des chambres',
        text: 'Les étés sont chauds dans l’est montpelliérain. Un split réversible bien placé suffit souvent à rendre une chambre agréable, été comme hiver.',
      },
    ],
    services: [
      { label: 'Dépannage électrique 24h/24', href: '/depannage-urgent' },
      { label: 'Tableau et mise aux normes', href: '/electricite-generale#tableau' },
      { label: 'Installation et rénovation', href: '/electricite-generale#installation' },
      { label: 'Climatisation réversible', href: '/climatisation-chauffage#climatisation' },
    ],
    neighbours: ['Le Crès', 'Saint-Aunès', 'Baillargues', 'Castries'],
    faq: [
      {
        question: 'Où se trouve R-ELEC à Vendargues ?',
        answer: 'Nos locaux sont au Lot Les Platanes, 27 rue Jean-François Millet, 34740 Vendargues. Nous intervenons à domicile ; pour un devis, appelez-nous ou utilisez le formulaire.',
      },
      {
        question: 'Pouvez-vous venir la nuit à Vendargues ?',
        answer: 'Oui, la ligne de dépannage est ouverte 7 jours sur 7 et 24 heures sur 24, nuits et week-ends compris.',
      },
    ],
  },
  {
    slug: 'electricien-castries',
    city: 'Castries',
    postalCode: '34160',
    kind: 'electricien',
    metaTitle: 'Électricien à Castries (34160) : rénovation, dépannage, mise aux normes | R-ELEC',
    metaDescription:
      'Électricien à Castries : rénovation électrique des maisons de village, mise aux normes, dépannage 7j/7 et 24h/24. Équipe familiale de Vendargues, sans sous-traitance.',
    title: 'Électricien',
    highlight: 'à Castries.',
    lead: 'Des maisons de village du centre aux villas des collines, nous rénovons et dépannons les installations électriques de Castries depuis Vendargues, juste à côté.',
    distance: 'Environ 7 km',
    intro: [
      'Castries mêle un centre ancien, autour du château, et des quartiers résidentiels plus récents sur les hauteurs. Deux types de maisons, deux types de chantiers : rénovation délicate d’un côté, installations plus récentes à faire évoluer de l’autre.',
      'Basés à Vendargues, nous sommes à quelques minutes de route. Pour une panne, c’est l’un de nous qui se déplace, pas un intervenant inconnu.',
    ],
    needsTitle: 'Les chantiers typiques à Castries',
    needs: [
      {
        title: 'Rénovation en maison de village',
        text: 'Murs épais, câblages anciens, parfois encore en fils sous baguettes : on rénove proprement en limitant les saignées et en respectant le bâti.',
      },
      {
        title: 'Éclairage extérieur et piscine',
        text: 'Terrasses, allées et abords de piscine : un éclairage extérieur étanche, sur un circuit protégé, pour profiter du jardin le soir.',
      },
      {
        title: 'Mise en sécurité avant une vente',
        text: 'Le diagnostic électrique pointe des anomalies ? On corrige ce qui doit l’être, sans refaire inutilement ce qui est sain.',
      },
    ],
    services: [
      { label: 'Rénovation électrique', href: '/electricite-generale#installation' },
      { label: 'Mise aux normes NF C 15-100', href: '/electricite-generale#tableau' },
      { label: 'Éclairage extérieur et LED', href: '/electricite-generale#eclairage' },
      { label: 'Dépannage 24h/24', href: '/depannage-urgent' },
    ],
    neighbours: ['Vendargues', 'Teyran', 'Saint-Aunès', 'Baillargues'],
    faq: [
      {
        question: 'Intervenez-vous dans le centre ancien de Castries ?',
        answer: 'Oui. Les rues étroites et les maisons de village ne nous posent pas de problème : nous adaptons le matériel et l’organisation du chantier.',
      },
      {
        question: 'Faut-il tout recâbler dans une vieille maison ?',
        answer: 'Pas toujours. Nous faisons d’abord un état des lieux, puis nous vous proposons de traiter en priorité ce qui touche à la sécurité.',
      },
    ],
  },
  {
    slug: 'electricien-mauguio',
    city: 'Mauguio',
    postalCode: '34130',
    kind: 'electricien',
    metaTitle: 'Électricien à Mauguio et Carnon (34130) : dépannage, clim, tableau | R-ELEC',
    metaDescription:
      'Électricien et climaticien à Mauguio et Carnon : dépannage 7j/7 et 24h/24, tableau électrique, climatisation adaptée au bord de mer. Équipe familiale depuis 2006.',
    title: 'Électricien à Mauguio',
    highlight: 'et à Carnon.',
    lead: 'Du centre de Mauguio aux résidences de Carnon, nous intervenons pour l’électricité comme pour la climatisation, avec du matériel adapté à l’air marin.',
    distance: 'Environ 11 km',
    intro: [
      'La commune de Mauguio s’étend du village jusqu’au littoral de Carnon, entre l’étang de l’Or et la mer. Maisons individuelles, appartements de résidence, locations saisonnières : les besoins changent d’un quartier à l’autre.',
      'Près de la mer, l’air salin et l’humidité usent plus vite le matériel extérieur. Nous en tenons compte dans le choix des appareils et des protections.',
    ],
    needsTitle: 'Les besoins propres à Mauguio et Carnon',
    needs: [
      {
        title: 'Matériel extérieur exposé au sel',
        text: 'Unités extérieures de clim, prises et éclairages de terrasse : en bord de mer, on privilégie des équipements protégés et on vérifie régulièrement les raccordements.',
      },
      {
        title: 'Locations saisonnières',
        text: 'Une panne en pleine saison ne peut pas attendre. Dépannage 7j/7 et mise en sécurité des logements avant l’arrivée des locataires.',
      },
      {
        title: 'Climatisation des appartements',
        text: 'Split mural ou multisplit pour les appartements de Carnon, en tenant compte des règles de la copropriété pour l’unité extérieure.',
      },
    ],
    services: [
      { label: 'Dépannage 24h/24', href: '/depannage-urgent' },
      { label: 'Climatisation', href: '/climatisation-chauffage#climatisation' },
      { label: 'Entretien de clim', href: '/climatisation-chauffage#entretien' },
      { label: 'Tableau et mise en sécurité', href: '/electricite-generale#tableau' },
    ],
    neighbours: ['Saint-Aunès', 'Baillargues', 'Vendargues', 'Montpellier'],
    faq: [
      {
        question: 'Intervenez-vous à Carnon ?',
        answer: 'Oui, Carnon fait partie de la commune de Mauguio et de notre zone d’intervention habituelle, pour l’électricité comme pour la climatisation.',
      },
      {
        question: 'Faut-il entretenir plus souvent une clim en bord de mer ?',
        answer: 'L’air salin encrasse et corrode plus vite l’unité extérieure. Un contrôle annuel est conseillé pour garder le rendement et éviter les pannes.',
      },
    ],
  },
  {
    slug: 'electricien-lunel',
    city: 'Lunel',
    postalCode: '34400',
    kind: 'electricien',
    metaTitle: 'Électricien à Lunel (34400) : particuliers et commerces, dépannage 24h/24 | R-ELEC',
    metaDescription:
      'Électricien à Lunel pour les particuliers et les commerces : dépannage 7j/7 et 24h/24, tableau, mise aux normes, éclairage, climatisation. Équipe familiale, sans sous-traitance.',
    title: 'Électricien à Lunel,',
    highlight: 'chez vous comme en boutique.',
    lead: 'Maisons, appartements du centre, commerces et locaux professionnels : nous intervenons à Lunel pour installer, mettre aux normes et dépanner.',
    distance: 'Environ 18 km',
    intro: [
      'Lunel est la ville principale de son bassin, entre Montpellier et Nîmes. On y trouve un centre-ville commerçant, des quartiers pavillonnaires et des zones d’activités : autant de clients différents.',
      'Pour les professionnels, nous organisons les travaux pour limiter la gêne : interventions en dehors des heures d’ouverture et dépannage prioritaire quand l’activité est à l’arrêt.',
    ],
    needsTitle: 'Ce que nous faisons le plus souvent à Lunel',
    needs: [
      {
        title: 'Commerces et locaux pro',
        text: 'Éclairage de vitrine, circuits dédiés, mise en conformité du local : une installation fiable pour que la boutique ouvre tous les jours.',
      },
      {
        title: 'Appartements du centre',
        text: 'Logements anciens remis en location : mise en sécurité, remplacement du tableau et ajout des prises qui manquent.',
      },
      {
        title: 'Climatisation des bureaux',
        text: 'Cassettes ou splits pour garder des bureaux et des salles d’attente à bonne température tout l’été.',
      },
    ],
    services: [
      { label: 'Maintenance pour les professionnels', href: '/electricite-generale#maintenance' },
      { label: 'Mise aux normes', href: '/electricite-generale#tableau' },
      { label: 'Éclairage LED', href: '/electricite-generale#eclairage' },
      { label: 'Climatisation', href: '/climatisation-chauffage#climatisation' },
    ],
    neighbours: ['Baillargues', 'Castries', 'Vendargues', 'Mauguio'],
    faq: [
      {
        question: 'Lunel fait-il partie de votre zone d’intervention ?',
        answer: 'Oui. Lunel est à une vingtaine de kilomètres de nos locaux de Vendargues, et nous y intervenons régulièrement, y compris en dépannage.',
      },
      {
        question: 'Pouvez-vous intervenir en dehors des heures d’ouverture de mon commerce ?',
        answer: 'Oui, nous planifions les travaux pour ne pas gêner votre activité : tôt le matin, en fin de journée ou le jour de fermeture.',
      },
    ],
  },
  {
    slug: 'climatisation-montpellier',
    city: 'Montpellier',
    postalCode: '34000',
    kind: 'climatisation',
    metaTitle: 'Climatisation à Montpellier : installation, entretien, dépannage | R-ELEC',
    metaDescription:
      'Installation de climatisation à Montpellier, en appartement ou en maison : split, multisplit, gainable, réversible. Entretien et dépannage de clim, devis gratuit. Équipe familiale de Vendargues.',
    title: 'Climatisation',
    highlight: 'à Montpellier.',
    lead: 'Appartements, maisons, locaux professionnels : nous installons, entretenons et dépannons votre climatisation à Montpellier, avec une équipe familiale basée à Vendargues.',
    distance: 'Environ 12 km',
    intro: [
      'À Montpellier, les étés sont longs et chauds, et beaucoup de logements sont en appartement. Une climatisation bien pensée doit être efficace, silencieuse pour les voisins, et respecter les règles de l’immeuble.',
      'Nous venons de Vendargues, à l’est de la ville. Nous dimensionnons l’installation sur place, la posons nous-mêmes et restons joignables pour l’entretien et les pannes.',
    ],
    needsTitle: 'Climatiser un logement montpelliérain',
    needs: [
      {
        title: 'Appartement en copropriété',
        text: 'L’unité extérieure se pose sur un balcon, une terrasse ou en façade, souvent avec l’accord de la copropriété. Nous vous aidons à préparer la demande et choisissons un appareil discret et silencieux.',
      },
      {
        title: 'Sous les toits',
        text: 'Les derniers étages chauffent vite. Une puissance bien calculée et un appareil réversible gardent le logement vivable l’été et chauffent à moindre coût l’hiver.',
      },
      {
        title: 'Clim existante qui faiblit',
        text: 'Elle souffle mais ne refroidit plus ? Entretien, recherche de fuite, remplacement de carte : nous diagnostiquons avant de proposer un remplacement.',
      },
    ],
    services: [
      { label: 'Installation de climatisation', href: '/climatisation-chauffage#climatisation' },
      { label: 'Pompe à chaleur', href: '/climatisation-chauffage#pompe-a-chaleur' },
      { label: 'Entretien et nettoyage', href: '/climatisation-chauffage#entretien' },
      { label: 'Dépannage de clim', href: '/climatisation-chauffage#depannage-clim' },
    ],
    neighbours: ['Le Crès', 'Vendargues', 'Saint-Aunès', 'Mauguio'],
    faq: [
      {
        question: 'Faut-il l’accord de la copropriété pour installer une clim ?',
        answer: 'Le plus souvent oui, car l’unité extérieure touche à l’aspect de l’immeuble ou aux parties communes. Le règlement de copropriété le précise ; nous vous aidons à constituer le dossier.',
      },
      {
        question: 'Une clim réversible peut-elle remplacer mon chauffage ?',
        answer: 'Dans beaucoup d’appartements montpelliérains, oui : une climatisation réversible chauffe efficacement l’hiver. Nous vérifions sur place si elle peut suffire.',
      },
    ],
  },
];

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
    metaTitle: 'Électricien à Vendargues (34740), dépannage 24h/24 | R-ELEC',
    metaDescription:
      'Électricien installé à Vendargues depuis 2006 : dépannage 7j/7 et 24h/24, tableau, mise aux normes, climatisation. Équipe familiale, devis gratuit.',
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
    metaTitle: 'Électricien à Castries (34160), dépannage 24h/24 | R-ELEC',
    metaDescription:
      'Électricien à Castries : rénovation des maisons de village, mise aux normes, dépannage 7j/7 et 24h/24. Équipe familiale de Vendargues, sans sous-traitance.',
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
    metaTitle: 'Électricien à Mauguio et Carnon, dépannage 24h/24 | R-ELEC',
    metaDescription:
      'Électricien et climaticien à Mauguio et Carnon : dépannage 7j/7 et 24h/24, tableau électrique, climatisation adaptée au bord de mer.',
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
    metaTitle: 'Électricien à Lunel (34400), particuliers et pros | R-ELEC',
    metaDescription:
      'Électricien à Lunel pour particuliers et commerces : dépannage 7j/7 et 24h/24, tableau, mise aux normes, éclairage, climatisation. Sans sous-traitance.',
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
    metaTitle: 'Climatisation à Montpellier : pose et entretien | R-ELEC',
    metaDescription:
      'Climatisation à Montpellier, en appartement ou en maison : split, multisplit, gainable, réversible. Entretien et dépannage de clim, devis gratuit.',
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
  {
    slug: 'climatisation-vendargues',
    city: 'Vendargues',
    postalCode: '34740',
    kind: 'climatisation',
    metaTitle: 'Climatisation à Vendargues : pose et entretien | R-ELEC',
    metaDescription:
      'Climatisation et pompe à chaleur à Vendargues : installation, entretien et dépannage par une équipe familiale installée dans la commune depuis 2006.',
    title: 'Climatisation',
    highlight: 'à Vendargues.',
    lead: 'Installer, entretenir ou dépanner votre clim : nous sommes installés à Vendargues, rue Jean-François Millet, et intervenons chez vous rapidement.',
    distance: 'Sur place',
    intro: [
      'La climatisation fait partie de notre métier au même titre que l’électricité. Pour une clim, c’est un atout : la même équipe s’occupe de l’unité, de son alimentation électrique et de sa protection au tableau.',
      'Installés à Vendargues, nous pouvons passer voir votre logement pour dimensionner l’appareil, puis revenir facilement pour l’entretien annuel.',
    ],
    needsTitle: 'Les demandes de clim les plus fréquentes à Vendargues',
    needs: [
      {
        title: 'Clim qui ne refroidit plus',
        text: 'Filtres encrassés, manque de gaz, carte électronique : on diagnostique sur place avant de parler de remplacement.',
      },
      {
        title: 'Une clim pour les chambres',
        text: 'Un split réversible par chambre, ou un multisplit pour l’étage : silencieux la nuit, utile aussi en hiver.',
      },
      {
        title: 'Remplacer un vieux chauffage',
        text: 'Une pompe à chaleur air/air ou air/eau peut remplacer des radiateurs électriques anciens. On étudie ce qui convient à votre maison.',
      },
    ],
    services: [
      { label: 'Installation de climatisation', href: '/climatisation-chauffage#climatisation' },
      { label: 'Entretien et nettoyage', href: '/climatisation-chauffage#entretien' },
      { label: 'Dépannage de clim', href: '/climatisation-chauffage#depannage-clim' },
      { label: 'Pompe à chaleur', href: '/climatisation-chauffage#pompe-a-chaleur' },
    ],
    neighbours: ['Le Crès', 'Saint-Aunès', 'Baillargues', 'Castries'],
    faq: [
      {
        question: 'Combien de temps dure la pose d’une climatisation ?',
        answer: 'Pour un split mural, la pose se fait généralement dans la journée. Un gainable ou un multisplit demande plus de préparation : nous vous donnons la durée précise avec le devis.',
      },
      {
        question: 'Réparez-vous les clims que vous n’avez pas installées ?',
        answer: 'Oui, nous dépannons et entretenons les climatisations de toutes marques, même posées par une autre entreprise.',
      },
    ],
  },
  {
    slug: 'electricien-le-cres',
    city: 'Le Crès',
    postalCode: '34920',
    kind: 'electricien',
    metaTitle: 'Électricien au Crès (34920), dépannage 24h/24 | R-ELEC',
    metaDescription:
      'Électricien au Crès, à deux pas de Vendargues : dépannage 7j/7 et 24h/24, tableau, mise aux normes, rénovation et climatisation. Sans sous-traitance.',
    title: 'Électricien',
    highlight: 'au Crès.',
    lead: 'Le Crès est la commune voisine de nos locaux de Vendargues. Pour une panne comme pour un projet, nous sommes à quelques minutes de chez vous.',
    distance: 'Environ 4 km',
    intro: [
      'Entre Montpellier et Vendargues, Le Crès mêle maisons individuelles, quartiers pavillonnaires et résidences plus récentes, autour du lac et du centre.',
      'Nous y intervenons aussi bien pour remettre en état une installation ancienne que pour équiper un logement neuf : prises, éclairage, réseau, climatisation.',
    ],
    needsTitle: 'Ce que nous faisons souvent au Crès',
    needs: [
      {
        title: 'Rénovation avant emménagement',
        text: 'Vous venez d’acheter ? C’est le bon moment pour remplacer le tableau, ajouter des prises et refaire les circuits fatigués, avant de poser les meubles.',
      },
      {
        title: 'Réseau et télétravail',
        text: 'Une prise RJ45 dans le bureau, une box mieux placée : un câblage propre pour une connexion stable, pièce par pièce.',
      },
      {
        title: 'Éclairage du jardin',
        text: 'Allées, terrasse, façade : un éclairage extérieur étanche, sur un circuit protégé, avec détecteur ou minuterie si vous le souhaitez.',
      },
    ],
    services: [
      { label: 'Rénovation électrique', href: '/electricite-generale#installation' },
      { label: 'Réseau, RJ45 et domotique', href: '/electricite-generale#reseau' },
      { label: 'Éclairage extérieur et LED', href: '/electricite-generale#eclairage' },
      { label: 'Dépannage 24h/24', href: '/depannage-urgent' },
    ],
    neighbours: ['Vendargues', 'Montpellier', 'Saint-Aunès', 'Castries'],
    faq: [
      {
        question: 'En combien de temps pouvez-vous venir au Crès ?',
        answer: 'Le Crès touche Vendargues, où sont nos locaux : pour un dépannage, nous partons dès que possible, de jour comme de nuit.',
      },
      {
        question: 'Pouvez-vous ajouter des prises sans tout refaire ?',
        answer: 'Oui, dans la plupart des cas. Nous vérifions d’abord que le circuit et le tableau peuvent supporter l’ajout, puis nous posons les prises proprement.',
      },
    ],
  },
  {
    slug: 'electricien-baillargues',
    city: 'Baillargues',
    postalCode: '34670',
    kind: 'electricien',
    metaTitle: 'Électricien à Baillargues (34670), dépannage 24h/24 | R-ELEC',
    metaDescription:
      'Électricien à Baillargues : installation, mise aux normes, domotique, pompe à chaleur et dépannage 7j/7 et 24h/24. Équipe familiale basée à Vendargues.',
    title: 'Électricien',
    highlight: 'à Baillargues.',
    lead: 'Maisons récentes, extensions, locaux d’activité : nous intervenons à Baillargues pour l’électricité, la domotique et le chauffage.',
    distance: 'Environ 6 km',
    intro: [
      'Baillargues, à l’est de Vendargues, compte beaucoup de maisons individuelles récentes. Les installations y sont souvent jeunes, mais les besoins évoluent : bureau, extension, chauffage plus économe.',
      'Nous venons de Vendargues, juste à côté, avec la même équipe pour l’électricité et la climatisation.',
    ],
    needsTitle: 'Les projets typiques à Baillargues',
    needs: [
      {
        title: 'Maison connectée',
        text: 'Volets motorisés, éclairage et chauffage pilotés : on ajoute la domotique sur une installation existante, sans tout recâbler.',
      },
      {
        title: 'Extension et garage aménagé',
        text: 'Un nouvel espace demande ses propres circuits et, souvent, une mise à jour du tableau. On s’en occupe de bout en bout.',
      },
      {
        title: 'Pompe à chaleur',
        text: 'Pour chauffer une maison récente à moindre coût, une pompe à chaleur bien dimensionnée est souvent la meilleure option.',
      },
    ],
    services: [
      { label: 'Domotique et volets roulants', href: '/electricite-generale#reseau' },
      { label: 'Installation et extension', href: '/electricite-generale#installation' },
      { label: 'Pompe à chaleur', href: '/climatisation-chauffage#pompe-a-chaleur' },
      { label: 'Dépannage 24h/24', href: '/depannage-urgent' },
    ],
    neighbours: ['Vendargues', 'Saint-Aunès', 'Castries', 'Lunel'],
    faq: [
      {
        question: 'Peut-on ajouter de la domotique dans une maison existante ?',
        answer: 'Oui. Selon votre installation, nous utilisons des modules qui se posent derrière les interrupteurs existants ou un câblage complémentaire, sans gros travaux.',
      },
      {
        question: 'Intervenez-vous pour les locaux professionnels de Baillargues ?',
        answer: 'Oui, pour l’installation, la mise en conformité et la maintenance, avec des interventions planifiées pour ne pas gêner votre activité.',
      },
    ],
  },
  {
    slug: 'electricien-saint-aunes',
    city: 'Saint-Aunès',
    postalCode: '34130',
    kind: 'electricien',
    metaTitle: 'Électricien à Saint-Aunès (34130), dépannage 24h/24 | R-ELEC',
    metaDescription:
      'Électricien à Saint-Aunès : dépannage 7j/7 et 24h/24, tableau, éclairage extérieur, climatisation et pompe à chaleur. Équipe familiale de Vendargues.',
    title: 'Électricien',
    highlight: 'à Saint-Aunès.',
    lead: 'Juste au sud de Vendargues, Saint-Aunès fait partie de notre secteur de tous les jours, pour l’électricité comme pour la climatisation.',
    distance: 'Environ 5 km',
    intro: [
      'Saint-Aunès est une commune résidentielle, avec beaucoup de maisons et de jardins. Les besoins y sont ceux d’une maison familiale : sécurité de l’installation, confort l’été, éclairage dehors.',
      'Basés à Vendargues, nous sommes tout près, et c’est la même équipe qui revient pour l’entretien.',
    ],
    needsTitle: 'Ce que l’on nous demande à Saint-Aunès',
    needs: [
      {
        title: 'Piscine et extérieur',
        text: 'Alimentation du local technique, éclairage des abords, prises extérieures protégées : l’électricité du jardin demande des protections adaptées.',
      },
      {
        title: 'Clim réversible',
        text: 'Une climatisation réversible rafraîchit l’été et chauffe l’hiver. Nous la dimensionnons pièce par pièce.',
      },
      {
        title: 'Disjoncteur qui saute',
        text: 'Souvent lié à un appareil ou à un circuit extérieur humide. On cherche la cause plutôt que de remplacer au hasard.',
      },
    ],
    services: [
      { label: 'Éclairage extérieur et LED', href: '/electricite-generale#eclairage' },
      { label: 'Climatisation réversible', href: '/climatisation-chauffage#climatisation' },
      { label: 'Recherche de panne', href: '/electricite-generale#depannage' },
      { label: 'Dépannage 24h/24', href: '/depannage-urgent' },
    ],
    neighbours: ['Vendargues', 'Mauguio', 'Le Crès', 'Baillargues'],
    faq: [
      {
        question: 'Mon disjoncteur saute quand il pleut, est-ce grave ?',
        answer: 'C’est souvent le signe d’une humidité sur un circuit extérieur (prise, éclairage, pompe). Coupez le circuit concerné et appelez-nous : il faut trouver le point faible avant qu’il ne s’aggrave.',
      },
      {
        question: 'Installez-vous l’électricité d’un local de piscine ?',
        answer: 'Oui : alimentation, protections différentielles adaptées et éclairage, dans le respect des règles propres aux zones humides.',
      },
    ],
  },
  {
    slug: 'electricien-teyran',
    city: 'Teyran',
    postalCode: '34820',
    kind: 'electricien',
    metaTitle: 'Électricien à Teyran (34820), dépannage 24h/24 | R-ELEC',
    metaDescription:
      'Électricien à Teyran : rénovation, mise aux normes, pompe à chaleur, éclairage extérieur et dépannage 7j/7 et 24h/24. Équipe familiale de Vendargues.',
    title: 'Électricien',
    highlight: 'à Teyran.',
    lead: 'Au nord de Vendargues, nous intervenons à Teyran pour l’électricité, le chauffage et la climatisation des maisons du village.',
    distance: 'Environ 9 km',
    intro: [
      'Teyran est un village où l’on trouve surtout des maisons individuelles avec terrain. Les installations y sont parfois anciennes, et les jardins demandent un éclairage et des prises extérieures bien protégés.',
      'Depuis Vendargues, nous y sommes rapidement, avec la même équipe du devis jusqu’au dépannage.',
    ],
    needsTitle: 'Les besoins fréquents à Teyran',
    needs: [
      {
        title: 'Changer de chauffage',
        text: 'Radiateurs anciens ou chaudière en fin de vie : une pompe à chaleur peut chauffer la maison en consommant moins. On étudie votre cas.',
      },
      {
        title: 'Installation à remettre aux normes',
        text: 'Tableau d’origine, absence de terre ou de différentiel : on met l’installation en sécurité, en commençant par l’essentiel.',
      },
      {
        title: 'Terrain et dépendances',
        text: 'Garage, atelier, abri de jardin : on amène l’électricité proprement, avec un circuit protégé et dimensionné pour l’usage.',
      },
    ],
    services: [
      { label: 'Pompe à chaleur', href: '/climatisation-chauffage#pompe-a-chaleur' },
      { label: 'Mise aux normes', href: '/electricite-generale#tableau' },
      { label: 'Installation et dépendances', href: '/electricite-generale#installation' },
      { label: 'Dépannage 24h/24', href: '/depannage-urgent' },
    ],
    neighbours: ['Castries', 'Vendargues', 'Le Crès'],
    faq: [
      {
        question: 'Pouvez-vous alimenter un garage ou un atelier éloigné de la maison ?',
        answer: 'Oui. Nous dimensionnons le câble selon la distance et l’usage, et posons une protection dédiée au départ du tableau.',
      },
      {
        question: 'Venez-vous à Teyran pour un dépannage de nuit ?',
        answer: 'Oui, la ligne de dépannage est ouverte 7 jours sur 7 et 24 heures sur 24, et Teyran fait partie de notre zone habituelle.',
      },
    ],
  },
];

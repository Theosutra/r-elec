// Prestations affichées sur l'accueil et les pages de services.
// `icon` correspond au nom d'une icône Lucide (voir src/components/Icon.astro).

export type ServiceHighlight = {
  title: string;
  text: string;
  icon: string;
  href: string;
  /** Carte mise en avant (fond bleu nuit). Une seule par grille. */
  featured?: boolean;
};

export const homeServices: ServiceHighlight[] = [
  {
    title: 'Dépannage électrique',
    text: 'Plus de courant, disjoncteur qui saute, prise qui chauffe : on trouve la panne et on remet en service, de jour comme de nuit.',
    icon: 'zap',
    href: '/depannage-urgent',
    featured: true,
  },
  {
    title: 'Tableau & mise aux normes',
    text: 'Remplacement de tableau, mise en conformité NF C 15-100 et mise en sécurité avant une vente ou une location.',
    icon: 'layout-panel-top',
    href: '/electricite-generale#tableau',
  },
  {
    title: 'Installation, éclairage & domotique',
    text: 'Neuf ou rénovation, éclairage LED intérieur et extérieur, prises RJ45, interphone et domotique.',
    icon: 'cable',
    href: '/electricite-generale#installation',
  },
  {
    title: 'Climatisation',
    text: 'Split, gainable, cassette ou réversible : une installation dimensionnée pour vos pièces, posée proprement.',
    icon: 'snowflake',
    href: '/climatisation-chauffage#climatisation',
  },
  {
    title: 'Pompe à chaleur & ballon',
    text: 'Pompe à chaleur air/air ou air/eau et ballon thermodynamique pour chauffer et produire l’eau chaude à moindre coût.',
    icon: 'heater',
    href: '/climatisation-chauffage#pompe-a-chaleur',
  },
  {
    title: 'Entretien & dépannage clim',
    text: 'Nettoyage, contrôle, recherche de fuite de gaz, carte électronique : votre clim retrouve son rendement.',
    icon: 'wrench',
    href: '/climatisation-chauffage#entretien',
  },
];

/** Pastilles affichées dans le hero. */
export const heroTags = ['Tableau électrique', 'Mise aux normes', 'Climatisation', 'Pompe à chaleur'];

/** Valeurs du champ « Votre besoin » du formulaire de devis. */
export const needOptions = [
  'Dépannage électrique urgent',
  'Tableau électrique / mise aux normes',
  'Installation ou rénovation électrique',
  'Éclairage, prises, RJ45, interphone, domotique',
  'Climatisation (installation)',
  'Pompe à chaleur / ballon thermodynamique',
  'Entretien ou dépannage de climatisation',
  'Autre demande',
];

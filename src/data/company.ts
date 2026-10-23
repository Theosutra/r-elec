// Source de vérité des informations de l'entreprise.
// Toute valeur marquée TODO_CLIENT doit être confirmée par le client (voir TODO.md).

export const company = {
  name: 'R-ELEC',
  legalName: 'R-ELEC',
  legalForm: 'SARL au capital de 5 000 €',
  siren: '507 605 418',
  siret: '507 605 418 00015',
  vat: 'FR74507605418',
  naf: '4321A',
  manager: 'Sébastien Rouvière',
  activitySince: 2006,
  foundedYear: 2008,
  team: {
    // TODO_CLIENT : prénoms des deux fils (pour la section équipe)
    summary: 'Sébastien Rouvière et ses deux fils',
    size: 3,
  },
  address: {
    street: 'Lot Les Platanes, 27 rue Jean-François Millet',
    postalCode: '34740',
    city: 'Vendargues',
    region: 'Occitanie',
    country: 'FR',
  },
  // TODO_CLIENT : coordonnées GPS exactes de l'adresse (pour la carte et le JSON-LD)
  geo: { latitude: 43.6564, longitude: 3.9706 },
  phones: {
    main: { display: '06 19 91 61 19', href: 'tel:+33619916119' },
    secondary: { display: '06 35 47 35 89', href: 'tel:+33635473589' },
  },
  email: 'r-elec@laposte.net',
  emergency: {
    label: 'Dépannage 7j/7 · 24h/24',
    short: '7j/7 · 24h/24',
  },
  // TODO_CLIENT : horaires d'accueil pour les devis (hors dépannage)
  openingHours: {
    office: '', // vide = ligne masquée sur le site
    emergency: '7 jours sur 7, 24 heures sur 24',
  },
  ratings: {
    // Note moyenne communiquée par le client. Les textes des avis ne sont pas fournis :
    // ne jamais publier d'aggregateRating tant que les avis réels ne sont pas dans reviews.ts.
    google: { score: 5, count: 15, approximate: true, url: '' /* TODO_CLIENT : lien fiche Google */ },
    pagesJaunes: { score: 5, count: 14, approximate: false, url: '' /* TODO_CLIENT : lien Pages Jaunes */ },
  },
  // TODO_CLIENT : certifications (RGE, Qualifelec, attestation de capacité fluides frigorigènes…)
  // Ne rien afficher tant que la liste est vide.
  certifications: [] as string[],
} as const;

export type ServiceAreaCity = {
  name: string;
  postalCode: string;
  /** Slug de la page locale, si elle existe. */
  page?: string;
};

// TODO_CLIENT : confirmer la zone d'intervention.
export const serviceArea: ServiceAreaCity[] = [
  { name: 'Vendargues', postalCode: '34740', page: '/electricien-vendargues' },
  { name: 'Castries', postalCode: '34160', page: '/electricien-castries' },
  { name: 'Mauguio', postalCode: '34130', page: '/electricien-mauguio' },
  { name: 'Lunel', postalCode: '34400', page: '/electricien-lunel' },
  { name: 'Montpellier', postalCode: '34000', page: '/climatisation-montpellier' },
  { name: 'Le Crès', postalCode: '34920', page: '/electricien-le-cres' },
  { name: 'Baillargues', postalCode: '34670', page: '/electricien-baillargues' },
  { name: 'Saint-Aunès', postalCode: '34130', page: '/electricien-saint-aunes' },
  { name: 'Teyran', postalCode: '34820', page: '/electricien-teyran' },
];

export const yearsOfActivity = (now = new Date()) => now.getFullYear() - company.activitySince;

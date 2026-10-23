// Galerie des réalisations.
// Pour ajouter un chantier :
//   1. créer un dossier dans src/assets/photos/realisations/ (ex. tableau-castries/)
//   2. y déposer 1 à 4 photos JPEG (2000 px de large minimum)
//   3. ajouter une entrée ci-dessous, avec les chemins des photos relatifs à ce dossier.
// Exemple :
// {
//   id: 'tableau-castries',
//   title: 'Remplacement d’un tableau électrique',
//   category: 'electricite',
//   city: 'Castries',
//   date: '2026-09',
//   description: 'Ancien tableau à fusibles remplacé par un tableau aux normes, avec protections différentielles.',
//   photos: ['tableau-castries/1.jpg', 'tableau-castries/2.jpg'],
// },

export type RealisationCategory = 'electricite' | 'climatisation' | 'depannage';

export type Realisation = {
  id: string;
  title: string;
  category: RealisationCategory;
  city?: string;
  date?: string; // AAAA-MM
  description?: string;
  photos: string[];
};

export const categoryLabels: Record<RealisationCategory, string> = {
  electricite: 'Électricité',
  climatisation: 'Climatisation & chauffage',
  depannage: 'Dépannage',
};

// TODO_CLIENT : ajouter les vrais chantiers (photos + commune + description).
export const realisations: Realisation[] = [];

/** Emplacements affichés tant qu'il y a moins de 6 réalisations réelles. */
export const placeholderSlots: { title: string; category: RealisationCategory; icon: string }[] = [
  { title: 'Remplacement de tableau électrique', category: 'electricite', icon: 'layout-panel-top' },
  { title: 'Pose de climatisation murale', category: 'climatisation', icon: 'snowflake' },
  { title: 'Rénovation électrique complète', category: 'electricite', icon: 'cable' },
  { title: 'Pompe à chaleur', category: 'climatisation', icon: 'heater' },
  { title: 'Éclairage extérieur LED', category: 'electricite', icon: 'zap' },
  { title: 'Dépannage et remise en service', category: 'depannage', icon: 'wrench' },
];

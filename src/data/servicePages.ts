// Contenu des pages de services. Chaque section a un `id` (ancre utilisée par l'accueil et les pages villes).
import type { FaqItem } from './faq';

export type ServiceSection = {
  id: string;
  title: string;
  intro: string;
  items: string[];
  icon: string;
};

export type ServicePage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  crumb: string;
  title: string;
  highlight: string;
  lead: string;
  photoKey: 'electricite' | 'clim';
  photoAlt: string;
  sectionsTitle: [string, string];
  sections: ServiceSection[];
  faq: FaqItem[];
  /** Pages villes mises en avant en bas de page. */
  cityFocus: 'electricien' | 'climatisation';
};

export const electricite: ServicePage = {
  slug: 'electricite-generale',
  metaTitle: 'Électricien à Vendargues : installation, tableau, mise aux normes | R-ELEC',
  metaDescription:
    'Installation électrique neuve et rénovation, tableau, mise aux normes NF C 15-100, dépannage, éclairage LED, RJ45, interphone et domotique. Électricien à Vendargues depuis 2006.',
  crumb: 'Électricité générale',
  title: 'Une installation électrique sûre,',
  highlight: 'posée par la même équipe.',
  lead: 'Du simple ajout de prise à la rénovation complète d’une maison, nous étudions, installons et dépannons nous-mêmes votre électricité. Aucun sous-traitant, et un devis clair avant chaque chantier.',
  photoKey: 'electricite',
  photoAlt: 'Électricien au travail sur un câblage (photo d’illustration)',
  sectionsTitle: ['Toute l’électricité', 'de la maison et du local pro'],
  sections: [
    {
      id: 'installation',
      title: 'Installation neuve et rénovation',
      intro: 'Maison neuve, extension ou installation d’origine fatiguée : on part de vos usages pour dimensionner chaque circuit.',
      icon: 'cable',
      items: [
        'Câblage complet d’une maison neuve ou d’une extension',
        'Rénovation totale ou pièce par pièce d’une installation ancienne',
        'Ajout de circuits, de prises et d’interrupteurs',
        'Circuits spécialisés pour la cuisine, le chauffe-eau et la buanderie',
      ],
    },
    {
      id: 'tableau',
      title: 'Tableau électrique et mise aux normes',
      intro: 'Le tableau protège toute la maison. Un tableau ancien, sans protection différentielle, est la première chose à remplacer.',
      icon: 'layout-panel-top',
      items: [
        'Remplacement et mise à jour du tableau électrique',
        'Mise en conformité selon la norme NF C 15-100',
        'Mise en sécurité d’un logement ancien, avant une vente ou une location',
        'Ajout de protections différentielles 30 mA et de parafoudre',
      ],
    },
    {
      id: 'depannage',
      title: 'Recherche de panne et dépannage',
      intro: 'Un disjoncteur qui saute sans raison apparente a toujours une cause. On la trouve, on la répare, et on vous explique ce qui s’est passé.',
      icon: 'zap',
      items: [
        'Coupure totale ou partielle du courant',
        'Disjoncteur ou différentiel qui saute',
        'Prise, interrupteur ou point lumineux hors service',
        'Odeur de chaud ou trace de brûlé : intervention en priorité',
      ],
    },
    {
      id: 'eclairage',
      title: 'Éclairage intérieur, extérieur et LED',
      intro: 'Un bon éclairage change une pièce et fait baisser la facture. On le pense avec vous, pièce par pièce.',
      icon: 'zap',
      items: [
        'Spots et rubans LED, variateurs',
        'Éclairage de façade, de terrasse et de jardin',
        'Détecteurs de présence et minuteries',
        'Remplacement d’anciens éclairages par des solutions LED',
      ],
    },
    {
      id: 'reseau',
      title: 'Réseau, interphone et domotique',
      intro: 'Internet dans toutes les pièces, un visiophone au portail, des volets qui se ferment seuls : on câble et on règle.',
      icon: 'cable',
      items: [
        'Prises RJ45 et téléphone, baie de brassage',
        'Interphone et visiophone',
        'Volets roulants motorisés et commandes centralisées',
        'Domotique : éclairage, chauffage et volets pilotés',
      ],
    },
    {
      id: 'maintenance',
      title: 'Maintenance pour les professionnels',
      intro: 'Commerces, bureaux, ateliers : une installation suivie tombe moins souvent en panne et reste conforme.',
      icon: 'wrench',
      items: [
        'Contrôle et entretien régulier des installations',
        'Mise en conformité après une visite de contrôle',
        'Interventions planifiées en dehors de vos heures d’ouverture',
        'Dépannage prioritaire',
      ],
    },
  ],
  faq: [
    {
      question: 'Mon installation est ancienne : faut-il tout refaire ?',
      answer:
        'Pas forcément. Nous commençons par un état des lieux : souvent, remplacer le tableau et ajouter les protections différentielles suffit à mettre l’installation en sécurité. Nous vous disons franchement ce qui est urgent et ce qui peut attendre.',
    },
    {
      question: 'Qu’est-ce que la norme NF C 15-100 ?',
      answer:
        'C’est la norme qui encadre les installations électriques basse tension dans les logements : nombre de prises par pièce, protections, sections de câbles, règles pour les pièces d’eau. Toute installation neuve ou rénovée doit la respecter.',
    },
    {
      question: 'Intervenez-vous chez les professionnels ?',
      answer:
        'Oui : commerces, bureaux et petits locaux d’activité de l’est montpelliérain. Nous pouvons intervenir en dehors de vos horaires d’ouverture pour ne pas gêner votre activité.',
    },
  ],
  cityFocus: 'electricien',
};

export const climatisation: ServicePage = {
  slug: 'climatisation-chauffage',
  metaTitle: 'Climatisation et pompe à chaleur à Vendargues : pose, entretien, dépannage | R-ELEC',
  metaDescription:
    'Installation de climatisation (split, gainable, cassette, réversible), pompe à chaleur, ballon thermodynamique, entretien et dépannage de clim autour de Vendargues et Montpellier.',
  crumb: 'Climatisation & chauffage',
  title: 'Le bon confort, été comme hiver,',
  highlight: 'sans surdimensionner.',
  lead: 'Une climatisation bien choisie et bien posée est silencieuse, économe et dure longtemps. Nous dimensionnons chaque appareil pour vos pièces, l’installons nous-mêmes et en assurons l’entretien.',
  photoKey: 'clim',
  photoAlt: 'Climatisation murale installée dans une pièce (photo d’illustration)',
  sectionsTitle: ['Climatiser, chauffer,', 'entretenir et dépanner'],
  sections: [
    {
      id: 'climatisation',
      title: 'Installation de climatisation',
      intro: 'Une pièce ou toute la maison : on choisit avec vous la solution adaptée à la surface, à l’exposition et à l’usage.',
      icon: 'snowflake',
      items: [
        'Split mural, pour une ou plusieurs pièces (multisplit)',
        'Gainable, discret et réparti dans toute la maison',
        'Cassette, adaptée aux commerces et aux bureaux',
        'Climatisation réversible : du froid l’été, du chauffage l’hiver',
      ],
    },
    {
      id: 'pompe-a-chaleur',
      title: 'Pompe à chaleur et ballon thermodynamique',
      intro: 'Pour chauffer la maison et produire l’eau chaude en consommant moins qu’avec un chauffage électrique classique.',
      icon: 'heater',
      items: [
        'Pompe à chaleur air/air',
        'Pompe à chaleur air/eau, raccordée aux radiateurs ou au plancher chauffant',
        'Ballon d’eau chaude thermodynamique',
        'Conseil sur le remplacement d’un chauffage existant',
      ],
    },
    {
      id: 'entretien',
      title: 'Entretien et nettoyage',
      intro: 'Des filtres encrassés font perdre du rendement et dégradent l’air que vous respirez. Un entretien régulier évite la plupart des pannes.',
      icon: 'wrench',
      items: [
        'Nettoyage des filtres, des unités intérieures et extérieures',
        'Contrôle du fonctionnement et des performances',
        'Désinfection des échangeurs et des bacs de condensats',
        'Entretien des pompes à chaleur',
      ],
    },
    {
      id: 'depannage-clim',
      title: 'Dépannage de climatisation',
      intro: 'Une clim qui ne refroidit plus en plein mois d’août, c’est une urgence. On diagnostique et on répare, toutes marques.',
      icon: 'zap',
      items: [
        'Clim qui ne refroidit ou ne chauffe plus',
        'Recherche de fuite de gaz',
        'Remplacement de carte électronique',
        'Fuite d’eau, bruit anormal, code erreur',
      ],
    },
    {
      id: 'ventilateurs',
      title: 'Ventilateurs de plafond',
      intro: 'Silencieux et peu gourmands, ils complètent une climatisation ou suffisent dans une chambre.',
      icon: 'snowflake',
      items: [
        'Pose et raccordement de ventilateurs de plafond',
        'Modèles avec éclairage intégré et télécommande',
        'Remplacement d’un luminaire existant par un ventilateur',
      ],
    },
  ],
  faq: [
    {
      question: 'Quelle puissance de climatisation choisir ?',
      answer:
        'Elle dépend de la surface, mais aussi de l’isolation, de l’exposition et du nombre de fenêtres. Un appareil trop puissant consomme plus et assèche l’air ; nous calculons la puissance sur place avant de vous proposer un modèle.',
    },
    {
      question: 'Peut-on installer une clim en appartement ?',
      answer:
        'Oui, le plus souvent avec un split mural. En copropriété, la pose de l’unité extérieure sur une façade ou un balcon demande généralement l’accord de la copropriété : nous vous aidons à préparer la demande.',
    },
    {
      question: 'L’entretien d’une pompe à chaleur est-il obligatoire ?',
      answer:
        'Pour les pompes à chaleur de 4 à 70 kW, un entretien est obligatoire au moins tous les deux ans. Pour une climatisation, un nettoyage annuel des filtres et un contrôle régulier sont fortement recommandés.',
    },
  ],
  cityFocus: 'climatisation',
};

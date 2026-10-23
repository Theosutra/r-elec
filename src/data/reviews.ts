// Avis clients RÉELS uniquement, copiés depuis Google ou Pages Jaunes avec l'accord du client.
// Tant que cette liste est vide, le site affiche seulement la note moyenne et un lien vers les avis.
// TODO_CLIENT : fournir les textes des avis (prénom + initiale, date, source, texte).

export type Review = {
  author: string;
  date: string; // AAAA-MM
  source: 'Google' | 'Pages Jaunes';
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  city?: string;
};

export const reviews: Review[] = [];

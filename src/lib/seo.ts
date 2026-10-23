export type Crumb = { label: string; href: string };

/** JSON-LD BreadcrumbList à partir du fil d'Ariane (l'accueil est ajouté automatiquement). */
export function breadcrumbJsonLd(crumbs: Crumb[], site: URL | undefined) {
  const all = [{ label: 'Accueil', href: '/' }, ...crumbs];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: new URL(c.href, site).href,
    })),
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function serviceJsonLd(opts: { name: string; description: string; areaServed: string[]; site: URL | undefined }) {
  const site = opts.site?.toString().replace(/\/$/, '') ?? '';
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    provider: { '@id': `${site}/#entreprise` },
    areaServed: opts.areaServed.map((name) => ({ '@type': 'City', name })),
  };
}

import { JsonLd } from '@/components/JsonLd';
import type { Profile, Site } from '@/lib/data';

type StructuredDataProps = {
  site: Site;
  profile: Profile;
};

export function StructuredData({ site, profile }: StructuredDataProps) {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.occupation,
    url: site.siteUrl,
    email: site.email,
    image: `${site.siteUrl}${profile.avatar}`,
    sameAs: [site.github, site.twitter, site.linkedin, site.facebook, site.youtube],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.title,
    url: site.siteUrl,
    description: site.description,
    author: {
      '@type': 'Person',
      name: profile.name,
    },
  };

  return (
    <>
      <JsonLd data={person} />
      <JsonLd data={website} />
    </>
  );
}

import type { MetadataRoute } from 'next';
import { getSite } from '@/lib/data';

export default function robots(): MetadataRoute.Robots {
  const site = getSite();

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${site.siteUrl}/sitemap.xml`,
  };
}

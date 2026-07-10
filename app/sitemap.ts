import type { MetadataRoute } from 'next';
import { getSite } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const site = getSite();

  return [
    {
      url: site.siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      images: [
        `${site.siteUrl}/static/brand/og.png`,
        `${site.siteUrl}/static/brand/banner.png`,
        `${site.siteUrl}/static/brand/logo.png`,
      ],
    },
  ];
}

import type { APIRoute } from 'astro';
import { getSite } from '@/lib/data';

export const GET: APIRoute = () => {
  const site = getSite();
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${site.siteUrl}/sitemap-index.xml`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};

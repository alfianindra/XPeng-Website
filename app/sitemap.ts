import type { MetadataRoute } from 'next'
import { models } from '@/lib/model'

const BASE = 'https://xpengsunter.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const modelUrls = models.map(m => ({
    url: `${BASE}/models/${m.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...modelUrls,
  ]
}

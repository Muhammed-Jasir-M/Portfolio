import type { NextSitemapConfig } from 'next-sitemap'

const config: NextSitemapConfig = {
  siteUrl: 'https://muhammed-jasir-m.vercel.app/',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
}

export default config

import { readFileSync, writeFileSync } from 'fs'

const BASE = 'https://www.afsaan.co.ke' // <-- replace with real domain
const staticRoutes = ['/', '/services', '/products', '/gallery', '/about', '/reviews', '/faq', '/contact', '/quote']
const today = new Date().toISOString().split('T')[0]

const source = readFileSync('src/data/content.js', 'utf8')

// Only pull slugs from the `services` array block, not `products`
const servicesBlockMatch = source.match(/export const services = \[([\s\S]*?)\n\]/)
const servicesBlock = servicesBlockMatch ? servicesBlockMatch[1] : ''
const slugMatches = [...servicesBlock.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1])
const slugs = [...new Set(slugMatches)]

const urls = [
  ...staticRoutes.map(r => `  <url><loc>${BASE}${r}</loc><lastmod>${today}</lastmod></url>`),
  ...slugs.map(s => `  <url><loc>${BASE}/services/${s}</loc><lastmod>${today}</lastmod></url>`),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`

writeFileSync('public/sitemap.xml', xml)
console.log(`Wrote public/sitemap.xml with ${urls.length} URLs (${slugs.length} service slugs found)`)

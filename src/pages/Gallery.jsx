import { useMemo, useState } from 'react'
import { services } from '../data/content'
import SectionHeading from '../components/ui/SectionHeading'

export default function Gallery() {
  const [active, setActive] = useState('all')

  const items = useMemo(() => {
    const all = services.flatMap((s) => [s.img, ...s.gallery].map((src, i) => ({ src, title: s.title, slug: s.slug, key: `${s.slug}-${i}` })))
    const seen = new Set()
    const deduped = all.filter((item) => {
      const k = `${item.slug}:${item.src}`
      if (seen.has(k)) return false
      seen.add(k)
      return true
    })
    return active === 'all' ? deduped : deduped.filter((i) => i.slug === active)
  }, [active])

  return (
    <div className="section-pad">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Gallery" title="Work From the Shop Floor" center={false} />
        <div className="flex flex-wrap gap-2 mb-8">
          <button onClick={() => setActive('all')} className={`border px-3 py-1.5 text-xs rounded-full font-semibold ${active === 'all' ? 'border-brandred text-brandred bg-brandred/5' : 'border-slate/20 text-slate'}`}>All</button>
          {services.map((s) => (
            <button key={s.slug} onClick={() => setActive(s.slug)} className={`border px-3 py-1.5 text-xs rounded-full font-semibold ${active === s.slug ? 'border-brandred text-brandred bg-brandred/5' : 'border-slate/20 text-slate'}`}>{s.title}</button>
          ))}
        </div>
        <div className="columns-2 gap-3 md:columns-3">
          {items.map((item) => (
            <div key={item.key} className="mb-3 break-inside-avoid overflow-hidden rounded-xl">
              <img src={item.src} alt={item.title} className="w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

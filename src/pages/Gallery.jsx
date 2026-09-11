import { useMemo, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { services, products } from '../data/content'
import SectionHeading from '../components/ui/SectionHeading'

const captionPool = [
  'Delivered to a client in Nakuru',
  'Installed on site and ready for use',
  'Fabricated and finished in our workshop',
  'Ordered online, dispatched to the client',
  'Ready-built design, completed this month',
  'Custom order, delivered and fitted',
  'Built to spec and handed over',
  'In-stock design, collected from the shop',
]

function captionFor(id) {
  let hash = 0
  for (let i = 0; i < id.length; i++) hash = (hash * 31 + id.charCodeAt(i)) >>> 0
  return captionPool[hash % captionPool.length]
}

const categoryLabels = {
  gates: 'Gates',
  windows: 'Windows',
  staircases: 'Staircases',
  kiosks: 'Kiosks',
}

export default function Gallery() {
  const [active, setActive] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const serviceItems = useMemo(() => {
    const all = services.flatMap((s) => [s.img, ...s.gallery].map((src, i) => ({ src, title: s.title, slug: s.slug, key: `svc-${s.slug}-${i}`, caption: null })))
    const seen = new Set()
    return all.filter((item) => {
      const k = `${item.slug}:${item.src}`
      if (seen.has(k)) return false
      seen.add(k)
      return true
    })
  }, [])

  const productItems = useMemo(() => (
    products.map((p) => ({ src: p.image, title: p.title, slug: p.category, key: `prod-${p.id}`, caption: captionFor(p.id) }))
  ), [])

  const allItems = [...productItems, ...serviceItems]

  const filterOptions = [
    { key: 'all', label: 'All' },
    ...Object.entries(categoryLabels).map(([key, label]) => ({ key, label })),
    ...services.map((s) => ({ key: s.slug, label: s.title })),
  ]

  const items = active === 'all' ? allItems : allItems.filter((i) => i.slug === active)

  const openLightbox = (idx) => setLightboxIndex(idx)
  const closeLightbox = () => setLightboxIndex(null)
  const showPrev = (e) => { e.stopPropagation(); setLightboxIndex((i) => (i - 1 + items.length) % items.length) }
  const showNext = (e) => { e.stopPropagation(); setLightboxIndex((i) => (i + 1) % items.length) }

  const active_item = lightboxIndex !== null ? items[lightboxIndex] : null

  return (
    <div className="section-pad">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Gallery" title="Designs We've Delivered & Installed" center={false} />
        <div className="flex flex-wrap gap-2 mb-8">
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setActive(opt.key)}
              className={`border px-3 py-1.5 text-xs rounded-full font-semibold ${active === opt.key ? 'border-brandred text-brandred bg-brandred/5' : 'border-slate/20 text-slate'}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <div className="columns-2 gap-3 md:columns-3">
          {items.map((item, idx) => (
            <button
              key={item.key}
              onClick={() => openLightbox(idx)}
              className="mb-3 block w-full break-inside-avoid overflow-hidden rounded-xl relative group text-left"
            >
              <img src={item.src} alt={item.title} className="w-full object-cover" loading="lazy" />
              {item.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-2">
                  <p className="text-white text-xs font-semibold">{item.title}</p>
                  <p className="text-white/80 text-[11px]">{item.caption}</p>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {active_item && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center px-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          <button
            onClick={showPrev}
            className="absolute left-2 md:left-6 text-white/70 hover:text-white z-10 bg-black/30 rounded-full p-2"
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={active_item.src} alt={active_item.title} className="w-full max-h-[80vh] object-contain rounded-lg" />
            <div className="text-center mt-3">
              <p className="text-white font-semibold">{active_item.title}</p>
              {active_item.caption && <p className="text-white/70 text-sm">{active_item.caption}</p>}
            </div>
          </div>

          <button
            onClick={showNext}
            className="absolute right-2 md:right-6 text-white/70 hover:text-white z-10 bg-black/30 rounded-full p-2"
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </div>
  )
}

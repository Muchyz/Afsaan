import { useEffect } from 'react'
import { products, business } from '../data/content'
import { usePageMeta } from '../hooks/usePageMeta'

const categoryLabels = {
  gates: 'Gates',
  windows: 'Windows',
  staircases: 'Staircases',
  kiosks: 'Kiosks',
  pergolas: 'Pergolas',
  containers: 'Container Conversions',
  watertanks: 'Water Tank Stands',
  braai: 'Braai & BBQ Stands',
}

const categoryCopy = {
  "gates": "Whether you need a sliding gate, an ornate wrought-iron design, or a simple panel gate, every gate here is fabricated to order \u2014 not mass-produced. Send us your measurements or visit our workshop in Nakuru, and we'll build a gate that fits your compound exactly.",
  "windows": "Steel window frames and burglar-proofing built for security without sacrificing light. Available ready-made in standard sizes or custom-welded to match your window openings.",
  "staircases": "Straight-run, dog-leg, or spiral \u2014 these staircases are fabricated as complete units, ready for on-site installation in Nakuru, Nairobi, or wherever your project is based.",
  "kiosks": "Compact, lockable steel kiosks built for retail, mobile vending, or site offices. Delivered ready to place, or customised to your business branding on request.",
  "pergolas": "Steel-framed pergolas for patios, driveways, and outdoor living spaces \u2014 built to handle Kenya's sun and rain without warping or rusting through.",
  "containers": "Shipping containers converted into shops, offices, or storage units, with steel reinforcement, insulation, and finishing options built in from the start.",
  "watertanks": "Engineered steel stands sized to your tank's full-load weight, not eyeballed \u2014 because a wobbling tank stand isn't a risk worth taking.",
  "braai": "Outdoor braai and BBQ stands built from solid steel, ready to install in your garden or entertainment area."
}

function ProductCard({ p }) {
  const waMessage = encodeURIComponent(`Hi, I'd like to order the ${p.title} shown on your website.`)
  return (
    <div className="bg-white rounded-2xl shadow-lg shadow-slate/10 overflow-hidden border border-slate/10">
      <div className="w-full bg-offwhite">
        <img src={p.image} alt={p.title} loading="lazy" decoding="async" className="w-full h-auto object-contain" />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-navy">{p.title}</h3>
        <p className="text-sm text-slate mt-1">{p.material}</p>
        <p className="text-xs text-slate/70 mt-1">{p.availability}</p>
        {p.price && <p className="mt-2 font-extrabold text-brandred">{p.price}</p>}
        <a
          href={`https://wa.me/${business.whatsapp}?text=${waMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center gap-2 bg-brandred text-white font-bold rounded-lg py-2.5 text-sm"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
          </svg> Order on WhatsApp
        </a>
      </div>
    </div>
  )
}

export default function Products() {
  usePageMeta(
    'Custom Steel Gates, Windows & Fabrication | Nakuru, Nairobi & Kenya',
    'Ready-built and custom steel gates, windows, staircases, kiosks, pergolas, container conversions and more from Afsaan Welders & Painters. Serving Nakuru, Nairobi and clients across Kenya.'
  )
  const categories = [...new Set(products.map((p) => p.category))]

  useEffect(() => {
    const saved = sessionStorage.getItem('productsScrollY')
    if (saved) {
      window.scrollTo(0, parseInt(saved, 10))
    }

    const handleScroll = () => {
      sessionStorage.setItem('productsScrollY', window.scrollY.toString())
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToCategory = (cat) => {
    const el = document.getElementById(`cat-${cat}`)
    if (el) {
      const offset = 108
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <div className="container-page py-12 md:py-16">
      <p className="font-semibold uppercase tracking-wide text-sm mb-2 text-brandred text-center">Ready-Built Designs</p>
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-navy text-center">Shop Our Work</h1>
      <p className="max-w-xl mx-auto text-center text-slate mb-10">
        In-stock and quick-turnaround designs, ready to order online or view at our shop.
      </p>

      <div className="sticky top-[104px] z-40 bg-offwhite/95 backdrop-blur-sm -mx-4 px-4 py-3 mb-8 border-b border-slate/10 overflow-x-auto">
        <div className="flex gap-2 w-max">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => scrollToCategory(cat)}
              className="border border-slate/20 text-slate px-3 py-1.5 text-xs rounded-full font-semibold whitespace-nowrap hover:border-brandred hover:text-brandred transition"
            >
              {categoryLabels[cat] || cat}
            </button>
          ))}
        </div>
      </div>

      {categories.map((cat) => (
        <div key={cat} id={`cat-${cat}`} className="mb-14 last:mb-0 scroll-mt-20">
          <h2 className="text-xl md:text-2xl font-bold text-navy mb-3 border-l-4 border-brandred pl-3">
            {categoryLabels[cat] || cat}
          </h2>
          <p className="text-sm text-slate mb-5 max-w-2xl">
            {categoryCopy[cat] || ''}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.filter((p) => p.category === cat).sort((a, b) => (a.price ? 0 : 1) - (b.price ? 0 : 1)).map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

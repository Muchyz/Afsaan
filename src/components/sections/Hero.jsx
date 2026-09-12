import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { heroImages, business, services } from '../../data/content'

const stats = [
  { v: `${services.length}`, l: 'Services' },
  { v: '100%', l: 'Custom Work' },
  { v: business.location.split(',')[0], l: 'Based In' },
  { v: 'Mon–Sat', l: 'Open' },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setIndex((p) => (p + 1) % heroImages.length), 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden" style={{ height: 'calc(100svh - 72px)' }}>
      <div className="absolute inset-0">
        {heroImages.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Afsaan Welders & Painters work"
            className="fade-slide absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center 80%', opacity: i === index ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(14,42,71,0.55) 0%, rgba(14,42,71,0.35) 40%, rgba(14,42,71,0.15) 70%, rgba(14,42,71,0.05) 100%)' }} />
      </div>

      <div className="relative z-10 h-full flex flex-col px-4 pt-3 pb-3">
        <div className="flex-shrink-0 flex justify-between">
          {['Skilled Welders', 'Fixed Quotes', 'Rust-Resistant'].map((b) => (
            <span key={b} className="bg-black/50 border border-white/20 text-white font-semibold px-2 py-0.5 rounded-full" style={{ fontSize: '10px' }}>
              ✓ {b}
            </span>
          ))}
        </div>

        <div className="flex-1" />

        <div
          className="flex-shrink-0 flex flex-col gap-2 rounded-2xl"
          style={{
            background: 'linear-gradient(180deg, rgba(14,42,71,0.0) 0%, rgba(14,42,71,0.55) 15%, rgba(14,42,71,0.7) 85%, rgba(14,42,71,0.0) 100%)',
            padding: '14px 10px',
            margin: '-14px -10px',
          }}
        >
          <div className="flex items-center gap-2">
            <span className="w-5 h-[2px] bg-brandred flex-shrink-0" />
            <span className="text-sky font-bold uppercase tracking-widest" style={{ fontSize: '9px' }}>{business.location} · Serving Nairobi &amp; Kenya-Wide</span>
          </div>

          <h1 className="font-extrabold text-white tracking-tight leading-none" style={{ fontSize: 'clamp(1.8rem, 8vw, 2.8rem)' }}>
            Steel work &amp; paint,<br />
            <span className="text-brandred">Built to last.</span>
          </h1>

          <p className="text-gray-300 leading-snug" style={{ fontSize: '11px' }}>
            Gates, staircases, roofing &amp; full house painting — based in {business.location}, serving Nairobi &amp; clients across Kenya. Measured on site, fixed quotes, no surprises.
          </p>

          <div className="flex gap-2">
            <Link to="/quote" className="flex-1 flex items-center justify-center gap-1 bg-brandred text-white font-bold rounded-lg" style={{ padding: '9px 0', fontSize: '12px' }}>
              Free Quote <ArrowRight size={12} />
            </Link>
            <a href={`tel:${business.phone}`} className="flex-1 flex items-center justify-center gap-1 border border-white/30 bg-white/10 text-white font-semibold rounded-lg" style={{ padding: '9px 0', fontSize: '12px' }}>
              <Phone size={12} /> Call Now
            </a>
          </div>

          <div className="grid grid-cols-4 rounded-xl overflow-hidden border border-white/10">
            {stats.map((s, i) => (
              <div key={s.l} className={`text-center ${i % 2 === 0 ? 'bg-white/10' : 'bg-white/5'}`} style={{ padding: '6px 0' }}>
                <p className="font-extrabold text-white leading-none" style={{ fontSize: '14px' }}>{s.v}</p>
                <p className="text-gray-400 uppercase tracking-wide mt-0.5" style={{ fontSize: '8px' }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1" />
      </div>
    </section>
  )
}

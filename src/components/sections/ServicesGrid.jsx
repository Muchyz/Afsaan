import { useState } from 'react'
import { Link } from 'react-router-dom'
import { services } from '../../data/content'
import Card from '../ui/Card'
import Tag from '../ui/Tag'

const categories = [
  { key: 'all', label: 'All Services' },
  { key: 'fabrication', label: 'Fabrication' },
  { key: 'painting', label: 'Painting' },
]

export default function ServicesGrid({ preview = false }) {
  const [active, setActive] = useState('all')

  const base = preview ? services.slice(0, 6) : services
  const list = preview || active === 'all' ? base : base.filter((s) => s.category === active)

  return (
    <div>
      {!preview && (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === c.key
                  ? 'bg-navy text-white shadow-lg shadow-navy/20'
                  : 'bg-white text-slate border border-slate/15 hover:border-navy/30'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      )}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {list.map((s) => (
          <Card key={s.slug}>
            <img src={s.img} alt={s.title} className="w-full h-auto" />
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <h3 className="text-lg font-bold text-navy">{s.title}</h3>
                {s.category === 'painting' && (
                  <span className="text-[10px] uppercase tracking-wide font-bold text-brandred bg-brandred/10 px-2 py-0.5 rounded-full">
                    Paint
                  </span>
                )}
              </div>
              <Tag>{s.turnaround.split(' ').slice(0, 3).join(' ')}</Tag>
              <p className="text-sm text-slate mb-4">{s.short}</p>
              <Link to={`/services/${s.slug}`} className="text-sky font-semibold text-sm hover:underline">
                View details →
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

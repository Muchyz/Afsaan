import { Link } from 'react-router-dom'
import { services } from '../../data/content'
import Card from '../ui/Card'
import Tag from '../ui/Tag'

export default function ServicesGrid({ preview = false }) {
  const list = preview ? services.slice(0, 6) : services

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {list.map((s) => (
        <Card key={s.slug}>
          <img src={s.img} alt={s.title} className="h-48 w-full object-cover" />
          <div className="p-5">
            <h3 className="text-lg font-bold text-navy mb-2">{s.title}</h3>
            <Tag>{s.turnaround.split(' ').slice(0, 3).join(' ')}</Tag>
            <p className="text-sm text-slate mb-4">{s.short}</p>
            <Link to={`/services/${s.slug}`} className="text-sky font-semibold text-sm hover:underline">
              View details →
            </Link>
          </div>
        </Card>
      ))}
    </div>
  )
}

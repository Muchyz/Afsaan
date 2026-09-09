import { Star } from 'lucide-react'
import { testimonials } from '../../data/content'
import Card from '../ui/Card'

export default function TestimonialsSection({ preview = false }) {
  const list = preview ? testimonials.slice(0, 3) : testimonials
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {list.map((t) => (
        <Card key={t.name} className="p-6">
          <div className="flex gap-1 text-brandred">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate">&ldquo;{t.quote}&rdquo;</p>
          <p className="mt-4 text-xs text-navy font-semibold">{t.name} — {t.location}</p>
        </Card>
      ))}
    </div>
  )
}

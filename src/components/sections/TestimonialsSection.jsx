import { Star, BadgeCheck, Quote } from 'lucide-react'
import { testimonials } from '../../data/content'
import Card from '../ui/Card'

const initials = (name) => name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase()

export default function TestimonialsSection({ preview = false }) {
  const list = preview ? testimonials.slice(0, 3) : testimonials
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {list.map((t) => (
        <Card key={t.name} className="p-6 relative overflow-visible">
          <Quote size={36} className="absolute -top-3 -right-1 text-brandred/10" fill="currentColor" strokeWidth={0} />

          <div className="flex gap-1 text-amber-400 relative">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
            ))}
          </div>

          <p className="mt-4 text-sm leading-relaxed text-slate relative">
            &ldquo;{t.quote}&rdquo;
          </p>

          <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate/10">
            <div className="relative shrink-0">
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-navy to-navy-dark text-white text-sm font-bold shadow-md shadow-navy/30">
                {initials(t.name)}
              </span>
              <BadgeCheck
                size={16}
                fill="#2563eb"
                color="white"
                strokeWidth={2.5}
                className="absolute -bottom-0.5 -right-0.5 drop-shadow-sm"
              />
            </div>
            <div>
              <p className="text-sm text-navy font-bold leading-tight">{t.name}</p>
              <p className="text-xs text-slate/60 mt-0.5">{t.location}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

import { Star, Users, ThumbsUp } from 'lucide-react'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import { usePageMeta } from '../hooks/usePageMeta'

const stats = [
  { icon: Star, value: '4.9/5', label: 'Average rating', color: 'text-amber-500', fill: 'currentColor' },
  { icon: Users, value: '10k+', label: 'Happy clients', color: 'text-blue-600', fill: 'currentColor' },
  { icon: ThumbsUp, value: '95%', label: 'Repeat & referred', color: 'text-blue-600', fill: 'currentColor' },
]

export default function Reviews() {
  usePageMeta(
    'Customer Reviews | Afsaan Welders & Painters',
    'See what clients across Nakuru, Nairobi and Kenya say about our steel fabrication and painting work.'
  )

  return (
    <div className="section-pad !pt-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brandred bg-brandred/10 px-3 py-1.5 rounded-full">
            <Star size={12} fill="currentColor" strokeWidth={0} />
            Trusted Across Kenya & Beyond
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-navy text-center leading-tight">
          Real Jobs, Real Feedback,<br className="hidden sm:block" /> No Shortcuts
        </h1>
        <div className="fingerprint-divider mx-auto mt-4 mb-5" />
        <p className="max-w-xl mx-auto text-center text-slate">
          From homeowners to hardware suppliers, from Nakuru to the Gulf, here's what people say after the job is actually done.
        </p>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-6 mb-8 pb-6 border-b border-slate/10">
          {stats.map(({ icon: Icon, value, label, color, fill }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-navy/5">
                <Icon size={18} className={color} fill={fill} strokeWidth={fill ? 0 : 2} />
              </span>
              <div className="text-left">
                <p className="text-navy font-extrabold text-xl leading-none">{value}</p>
                <p className="text-slate/60 text-xs mt-1">{label}</p>
              </div>
            </div>
          ))}
        </div>

        <TestimonialsSection />
      </div>
    </div>
  )
}

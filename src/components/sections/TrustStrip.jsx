import { ShieldCheck, BadgeCheck, Award, Clock } from 'lucide-react'

const badges = [
  { label: 'Fixed Quotes Upfront', icon: ShieldCheck },
  { label: 'Skilled, Experienced Welders', icon: BadgeCheck },
  { label: 'Rust-Resistant Finishes', icon: Award },
  { label: 'On-Time Delivery', icon: Clock },
]

export default function TrustStrip() {
  return (
    <div className="bg-offwhite py-8">
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 gap-3">
        {badges.map((b) => {
          const Icon = b.icon
          return (
            <div key={b.label} className="flex items-center justify-center gap-2 bg-white px-4 py-3 rounded-xl shadow-lg shadow-slate/15 border-0 text-navy font-semibold text-sm text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate/20">
              <div className="w-7 h-7 rounded-full bg-brandred flex items-center justify-center flex-shrink-0">
                <Icon size={14} className="text-white" strokeWidth={2} />
              </div>
              <span>{b.label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

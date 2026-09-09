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
            <div key={b.label} className="flex items-center justify-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm border border-sky/20 text-navy font-semibold text-sm text-center">
              <Icon size={16} className="text-brandred flex-shrink-0" />
              <span>{b.label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

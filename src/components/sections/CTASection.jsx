import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { business } from '../../data/content'

export default function CTASection() {
  return (
    <div
  className="relative text-white text-center py-16 px-6 overflow-hidden"
  style={{
    backgroundImage: "linear-gradient(rgba(15,15,15,0.65), rgba(15,15,15,0.65)), url('/images/welding-bg.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 18px)' }} />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(14,42,71,0.3) 0%, transparent 70%)' }} />
      <div className="relative max-w-xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Have a Job in Mind?</h2>
        <p className="mb-7 text-white/90">Send the details and get a real quote back — no obligation.</p>
        <div className="flex justify-center gap-3 flex-wrap">
          <Link to="/quote" className="flex items-center justify-center gap-2 bg-white text-brandred font-bold rounded-lg px-6 py-3 text-sm hover:bg-gray-100 transition shadow-sm">
            Get a Free Quote <ArrowRight size={16} />
          </Link>
          <a href={`tel:${business.phone}`} className="flex items-center justify-center gap-2 border-2 border-white text-white font-semibold rounded-lg px-6 py-3 text-sm hover:bg-white hover:text-brandred transition">
            <Phone size={16} /> Call Now
          </a>
        </div>
      </div>
    </div>
  )
}

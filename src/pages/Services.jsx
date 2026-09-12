import ServicesGrid from '../components/sections/ServicesGrid'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Services() {
  usePageMeta(
    'Welding & Fabrication Services | Gates, Staircases, Painting — Nakuru, Nairobi & Kenya',
    'Full welding, fabrication and painting services from Afsaan Welders & Painters — gates, staircases, roofing, water tanks and more. Serving Nakuru, Nairobi and clients across Kenya.'
  )
  return (
    <div>
      <div className="relative overflow-hidden text-center py-16 px-6 bg-cover bg-center" style={{ backgroundImage: "url('/images/services-bg.jpg')" }}>
        <div className="absolute inset-0 bg-navy/55" />
        <div className="relative max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.16em] text-white/60 font-semibold mb-3">Services</p>
          <h1 className="text-2xl sm:text-4xl font-bold text-white">Welding & Painting, Covering the Full Compound</h1>
          <div className="mt-5 h-[3px] w-16 bg-gradient-to-r from-brandred to-white/40 rounded-full mx-auto" />
          <p className="max-w-md mx-auto text-sm text-white/70 mt-5">
            Every job is fabricated or painted in-house, measured on site, and quoted before we start.
          </p>
        </div>
      </div>

      <div className="section-pad !pt-8">
        <div className="max-w-6xl mx-auto">
          <ServicesGrid />
        </div>
      </div>
    </div>
  )
}

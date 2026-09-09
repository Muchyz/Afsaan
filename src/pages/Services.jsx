import ServicesGrid from '../components/sections/ServicesGrid'
import SectionHeading from '../components/ui/SectionHeading'

export default function Services() {
  return (
    <div className="section-pad">
      <SectionHeading eyebrow="Services" title="Welding & Painting, Covering the Full Compound" subtitle="Every job is fabricated or painted in-house, measured on site, and quoted before we start." />
      <div className="max-w-6xl mx-auto">
        <ServicesGrid />
      </div>
    </div>
  )
}

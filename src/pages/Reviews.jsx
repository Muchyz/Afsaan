import TestimonialsSection from '../components/sections/TestimonialsSection'
import SectionHeading from '../components/ui/SectionHeading'

export default function Reviews() {
  return (
    <div className="section-pad">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Reviews" title="What Clients Say After the Job Is Done" />
        <TestimonialsSection />
      </div>
    </div>
  )
}

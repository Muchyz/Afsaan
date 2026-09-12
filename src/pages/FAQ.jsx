import FAQSection from '../components/sections/FAQSection'
import SectionHeading from '../components/ui/SectionHeading'
import { usePageMeta } from '../hooks/usePageMeta'

export default function FAQ() {
  usePageMeta(
    'Frequently Asked Questions | Afsaan Welders & Painters',
    'Common questions about custom gates, staircases, fabrication timelines, materials and painting services — Nakuru, Nairobi & Kenya.'
  )

  return (
    <div className="section-pad">
      <SectionHeading eyebrow="FAQ" title="Common Questions Before You Send a Job" />
      <FAQSection />
    </div>
  )
}

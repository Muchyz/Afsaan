import FAQSection from '../components/sections/FAQSection'
import SectionHeading from '../components/ui/SectionHeading'

export default function FAQ() {
  return (
    <div className="section-pad">
      <SectionHeading eyebrow="FAQ" title="Common Questions Before You Send a Job" />
      <FAQSection />
    </div>
  )
}

import Hero from '../components/sections/Hero'
import TrustStrip from '../components/sections/TrustStrip'
import ServicesGrid from '../components/sections/ServicesGrid'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import FAQSection from '../components/sections/FAQSection'
import CTASection from '../components/sections/CTASection'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Home() {
  usePageMeta(
    'Afsaan Welders & Painters — Custom Steel Gates, Fabrication & Welding | Nakuru, Nairobi & Kenya-Wide',
    'Afsaan Welders & Painters — custom steel gates, staircases, fabrication and painting based in Nakuru, serving Nairobi and clients across Kenya. Get a unique work of art.'
  )
  return (
    <>
      <Hero />
      <TrustStrip />

      <section className="section-pad bg-offwhite">
        <SectionHeading eyebrow="What We Do" title="Our Core Services" subtitle="From gates to full house repaints, every job is fabricated or painted in-house." />
        <div className="max-w-6xl mx-auto">
          <ServicesGrid preview />
        </div>
        <div className="text-center mt-8">
          <Button to="/services" variant="outline">View All Services</Button>
        </div>
      </section>

      <WhyChooseUs />

      <section className="section-pad bg-white">
        <SectionHeading eyebrow="Client Feedback" title="What Clients Say" />
        <div className="max-w-6xl mx-auto">
          <TestimonialsSection preview />
        </div>
        <div className="text-center mt-8">
          <Button to="/reviews" variant="outline">Read More Reviews</Button>
        </div>
      </section>

      <section className="section-pad bg-offwhite">
        <SectionHeading title="Frequently Asked Questions" />
        <FAQSection />
      </section>

      <CTASection />
    </>
  )
}

import { Wrench, PaintRoller, ShieldCheck } from 'lucide-react'
import { business, heroImage } from '../data/content'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const values = [
  { icon: Wrench, title: 'Built on Site, Not Guessed At', text: 'Every job is measured in person before fabrication starts — no fitting surprises on install day.' },
  { icon: PaintRoller, title: 'Finish Matters as Much as the Weld', text: 'Primer, paint, and clean edges are part of the job, not an afterthought tacked on at the end.' },
  { icon: ShieldCheck, title: 'Clear Pricing, Upfront', text: 'You get a quote before work begins, and know exactly what the deposit and balance cover.' },
]

export default function About() {
  return (
    <div>
      <section className="relative">
        <div className="absolute inset-0">
          <img src={heroImage} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40" />
        </div>
        <div className="container-page relative py-20 md:py-28">
          <p className="text-sm text-sky font-semibold">About</p>
          <h1 className="mt-2 max-w-xl font-extrabold text-white text-3xl md:text-5xl">{business.name}</h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-200">
            {business.tagline} — a welding and painting outfit based in {business.location}, building gates,
            structures, and finishes that hold up past the first rainy season.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <Card key={v.title} className="p-6">
                <v.icon size={22} className="text-brandred" strokeWidth={1.75} />
                <p className="mt-4 font-bold text-navy">{v.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate">{v.text}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-white border border-slate/10 rounded-xl p-8 text-center md:p-12 shadow-sm">
            <p className="font-bold text-navy text-xl md:text-2xl">Working on a job outside {business.location}?</p>
            <p className="mt-2 text-sm text-slate">We travel for the right job — get in touch with your location and details.</p>
            <div className="mt-6 flex justify-center">
              <Button to="/quote">Request a Quote</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

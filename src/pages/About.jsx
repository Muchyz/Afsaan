import { Wrench, PaintRoller, ShieldCheck, ClipboardList, Ruler, MessageCircle } from 'lucide-react'
import { business, heroImage, services } from '../data/content'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const values = [
  { icon: Wrench, title: 'Built on Site, Not Guessed At', text: 'Every job is measured in person before fabrication starts — no fitting surprises on install day.' },
  { icon: PaintRoller, title: 'Finish Matters as Much as the Weld', text: 'Primer, paint, and clean edges are part of the job, not an afterthought tacked on at the end.' },
  { icon: ShieldCheck, title: 'Clear Pricing, Upfront', text: 'You get a quote before work begins, and know exactly what the deposit and balance cover.' },
]

const process = [
  { icon: MessageCircle, step: '01', title: 'Tell Us the Job', text: 'Reach out on WhatsApp or call with what you need — a gate, a staircase, a full repaint. Send photos or a rough idea if you have one.' },
  { icon: Ruler, step: '02', title: 'We Measure & Quote', text: 'We come to site, take real measurements, and give you a fixed quote — no guesswork, no surprise charges later.' },
  { icon: ClipboardList, step: '03', title: 'We Build & Install', text: 'Fabrication happens in-shop or on site depending on the job, finished with a proper primer and paint job before handover.' },
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
          <p className="max-w-2xl text-slate leading-relaxed">
            {business.name} fabricates and finishes steelwork for homes, farms, and compounds across {business.location} —
            from sliding and swing gates to staircases, pergolas, gazebos, roofing, cow sheds, and water tank stands.
            Every piece is welded, primed, and painted in-house rather than handed off between separate teams, so the
            same people who cut and weld your job are the ones who finish it.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <Card key={v.title} className="p-6 flex flex-col items-center text-center border-0 shadow-lg shadow-slate/10 rounded-2xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate/15">
                <div className="w-14 h-14 rounded-full bg-brandred flex items-center justify-center shadow-md shadow-brandred/30">
                  <v.icon size={24} className="text-white" strokeWidth={1.75} />
                </div>
                <p className="mt-4 font-bold text-navy">{v.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate">{v.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-offwhite">
        <div className="max-w-6xl mx-auto">
          <p className="font-semibold uppercase tracking-wide text-sm mb-2 text-brandred text-center">How We Work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-navy text-center">From First Message to Finished Job</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {process.map((p) => (
              <Card key={p.step} className="p-6 relative overflow-hidden border-0 shadow-lg shadow-slate/10 rounded-2xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate/15">
                <span className="absolute right-3 top-2 font-extrabold text-slate/5" style={{ fontSize: '3.5rem', lineHeight: 1 }}>{p.step}</span>
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center relative z-10">
                  <p.icon size={22} className="text-white" strokeWidth={1.75} />
                </div>
                <p className="mt-4 font-bold text-navy relative z-10">{p.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate relative z-10">{p.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="max-w-6xl mx-auto">
          <p className="font-semibold uppercase tracking-wide text-sm mb-2 text-brandred text-center">What We Cover</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-navy text-center">Every Job We Take On</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((s) => (
              <span key={s.slug} className="border border-slate/20 text-slate px-4 py-2 rounded-full text-sm font-medium">
                {s.title}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-offwhite">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border border-slate/10 rounded-xl p-8 text-center md:p-12 shadow-sm">
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

import { Link } from 'react-router-dom'
import { Wrench, PaintRoller, ShieldCheck, ClipboardList, Ruler, MessageCircle } from 'lucide-react'
import { business, heroImage, services } from '../data/content'
import { iconMap } from '../data/icons'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import { usePageMeta } from '../hooks/usePageMeta'

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
  usePageMeta(
    'Serving Nakuru, Nairobi & Kenya — Afsaan Welders & Painters | About Us',
    'Steel welders and painters based in Nakuru, serving Nairobi and clients across Kenya. Learn about our fabrication and painting workshop.'
  )

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
            {business.tagline} — a welding and painting outfit based in {business.location}, {business.serviceArea.toLowerCase()}, building gates,
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
        <div className="max-w-3xl mx-auto">
          <p className="font-semibold uppercase tracking-wide text-sm mb-2 text-brandred text-center">How We Work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-14 text-navy text-center">From First Message to Finished Job</h2>
          <div className="relative">
            <div className="absolute left-7 top-4 bottom-4 w-0.5 bg-gradient-to-b from-brandred via-sky to-brandred md:left-1/2" />
            {process.map((p, i) => (
              <div key={p.step} className={`relative flex items-start gap-6 pb-12 last:pb-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-10 md:ml-0' : 'md:pl-10 md:ml-auto md:flex-row-reverse md:text-right'}`}>
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-navy border-4 border-offwhite shadow-lg flex items-center justify-center relative z-10">
                  <p.icon size={22} className="text-white" strokeWidth={1.75} />
                </div>
                <div className="flex-1 bg-white rounded-2xl shadow-lg shadow-slate/10 p-5">
                  <span className="text-brandred font-extrabold text-xs uppercase tracking-widest">Step {p.step}</span>
                  <p className="mt-1 font-bold text-navy text-lg">{p.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="max-w-6xl mx-auto">
          <p className="font-semibold uppercase tracking-wide text-sm mb-2 text-brandred text-center">What We Cover</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-navy text-center">Every Job We Take On</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {services.map((s) => {
              const Icon = iconMap[s.icon]
              return (
                <Link key={s.slug} to={`/services/${s.slug}`} className="flex flex-col items-center text-center gap-3 bg-white rounded-2xl shadow-lg shadow-slate/10 p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate/15">
                  <div className="w-12 h-12 rounded-full bg-brandred flex items-center justify-center">
                    {Icon && <Icon size={22} className="text-white" strokeWidth={1.75} />}
                  </div>
                  <p className="font-semibold text-navy text-sm">{s.title}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-offwhite">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl p-8 text-center md:p-14 bg-white border-2 border-black">
            <div className="absolute top-0 left-0 right-0 h-2" style={{ background: 'repeating-linear-gradient(45deg, #FBBF24 0, #FBBF24 14px, #000 14px, #000 28px)' }} />
            <div className="absolute bottom-0 left-0 right-0 h-2" style={{ background: 'repeating-linear-gradient(45deg, #FBBF24 0, #FBBF24 14px, #000 14px, #000 28px)' }} />
            <div className="relative pt-2">
              <p className="font-extrabold text-black text-2xl md:text-3xl">Working on a job outside {business.location}?</p>
              <p className="mt-3 text-slate max-w-md mx-auto">We travel for the right job — get in touch with your location and details.</p>
              <div className="mt-7 flex justify-center">
                <Button to="/quote">Request a Quote</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { useParams, Link } from 'react-router-dom'
import { ArrowUpRight, ArrowLeft, Ruler, Clock, Check, MessageCircle, Hammer, Truck, Search, Wrench, PaintRoller, ClipboardCheck } from 'lucide-react'
import { services, business } from '../data/content'
import { iconMap } from '../data/icons'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import NotFound from './NotFound'

function getIncludedItems(service) {
  const isPainting = service.category === 'painting'
  return [
    `Materials: ${service.material}`,
    `Timeline: ${service.turnaround}`,
    isPainting
      ? 'Rust removal and surface prep before any topcoat goes on'
      : 'Structural fabrication engineered for real-world load, not guesswork',
    'Fixed, written quote before any work begins — no surprise costs',
    'We work across Kenya — ready-built work delivered, or our team on site',
    'Custom designs and contract work available on request',
  ]
}

const fallbackProcessSteps = [
  { title: 'Consultation', text: 'Reach out with your idea, photos, or requirements. We advise on design, materials, and realistic timelines.' },
  { title: 'Fabrication & Prep', text: 'Work is carried out in our workshop or on your site, built and finished to the same standard either way.' },
  { title: 'Installation & Handover', text: 'We deliver and install on site, or hand over a ready piece — either way, the job isn\u2019t done until you\u2019re satisfied.' },
]

function getStepIcon(title = '') {
  const t = title.toLowerCase()
  if (t.includes('inspect') || t.includes('survey') || t.includes('walkthrough') || t.includes('assess')) return Search
  if (t.includes('measur') || t.includes('calculat') || t.includes('load')) return Ruler
  if (t.includes('rust') || t.includes('treat') || t.includes('prime') || t.includes('priming') || t.includes('prep')) return Wrench
  if (t.includes('fabricat') || t.includes('build') || t.includes('weld')) return Hammer
  if (t.includes('paint') || t.includes('coat') || t.includes('topcoat') || t.includes('finish') || t.includes('spray')) return PaintRoller
  if (t.includes('install') || t.includes('delivery') || t.includes('deliver')) return Truck
  if (t.includes('handover') || t.includes('complet')) return ClipboardCheck
  if (t.includes('consult') || t.includes('intake') || t.includes('quote') || t.includes('message')) return MessageCircle
  return Hammer
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  if (!service) return <NotFound />

  const Icon = iconMap[service.icon]
  const related = services.filter((s) => s.slug !== service.slug && s.category === service.category).slice(0, 3)
  const activeSteps = service.process && service.process.length > 0 ? service.process : fallbackProcessSteps

  return (
    <div>
      <section className="relative">
        <div className="absolute inset-0">
          <img src={service.img} alt={service.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/20" />
        </div>
        <div className="container-page relative flex min-h-[320px] flex-col justify-end py-12">
          <Link to="/services" className="inline-flex w-fit items-center gap-1.5 text-xs text-white hover:text-sky">
            <ArrowLeft size={13} /> All services
          </Link>
          <div className="mt-4 flex items-center gap-2">
            <Icon size={22} className="text-brandred" strokeWidth={1.75} />
            <h1 className="font-extrabold text-white text-3xl md:text-5xl">{service.title}</h1>
          </div>
        </div>
      </section>

      <section className="container-page grid gap-12 py-14 md:grid-cols-3 md:py-20">
        <div className="md:col-span-2">
          <p className="max-w-prose text-base leading-relaxed text-slate">{service.description}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {getIncludedItems(service).map((item) => (
              <div key={item} className="flex items-start gap-3 bg-offwhite rounded-xl p-3.5">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brandred flex items-center justify-center mt-0.5">
                  <Check size={12} className="text-white" strokeWidth={3} />
                </span>
                <span className="text-sm text-navy font-medium leading-snug">{item}</span>
              </div>
            ))}
          </div>

          {service.gallery.length > 0 && (
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {service.gallery.map((src, i) => (
                <div key={i} className="aspect-[4/3] overflow-hidden rounded-xl">
                  <img src={src} alt={`${service.title} example ${i + 1}`} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="h-fit lg:sticky lg:top-24 rounded-2xl bg-white shadow-2xl shadow-navy/10 border border-slate/10 overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-brandred to-navy" />
          <div className="p-6 space-y-5">
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-brandred/10 flex items-center justify-center">
                <Ruler size={16} className="text-brandred" strokeWidth={2} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate/60 font-semibold">Materials</p>
                <p className="mt-0.5 text-sm text-navy font-medium leading-snug">{service.material}</p>
              </div>
            </div>

            <div className="h-px bg-slate/10" />

            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-brandred/10 flex items-center justify-center">
                <Clock size={16} className="text-brandred" strokeWidth={2} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate/60 font-semibold">Typical Turnaround</p>
                <p className="mt-0.5 text-sm text-navy font-medium leading-snug">{service.turnaround}</p>
              </div>
            </div>

            <Button to={`/quote?service=${service.slug}`} className="w-full justify-center mt-2 shadow-lg shadow-brandred/20">
              Request a Quote <ArrowUpRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad bg-offwhite">
        <div className="max-w-3xl mx-auto">
          <p className="font-semibold uppercase tracking-wide text-sm mb-2 text-brandred text-center">How It Works</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-navy text-center">From First Message to Finished {service.title}</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {activeSteps.map((p, i) => {
              const StepIcon = getStepIcon(p.title)
              return (
              <div key={p.title} className="bg-white rounded-2xl shadow-lg shadow-slate/10 p-5 text-center">
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center mx-auto">
                  <StepIcon size={20} className="text-white" strokeWidth={1.75} />
                </div>
                <span className="mt-3 block text-brandred font-extrabold text-xs uppercase tracking-widest">Step {i + 1}</span>
                <p className="mt-1 font-bold text-navy">{p.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate">{p.text}</p>
              </div>
              )
            })}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-pad">
          <div className="container-page">
            <p className="text-sm text-brandred font-semibold mb-6">Related services</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {related.map((s) => {
                const RIcon = iconMap[s.icon]
                return (
                  <Link key={s.slug} to={`/services/${s.slug}`} className="group flex items-center gap-3 bg-white border border-slate/10 rounded-xl p-4 hover:border-brandred transition-colors">
                    <RIcon size={18} className="text-brandred" strokeWidth={1.75} />
                    <span className="text-sm text-navy font-medium">{s.title}</span>
                    <ArrowUpRight size={14} className="ml-auto text-slate/40 group-hover:text-brandred" />
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

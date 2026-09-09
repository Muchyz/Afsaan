import { useParams, Link } from 'react-router-dom'
import { ArrowUpRight, ArrowLeft, Ruler, Clock } from 'lucide-react'
import { services } from '../data/content'
import { iconMap } from '../data/icons'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import NotFound from './NotFound'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  if (!service) return <NotFound />

  const Icon = iconMap[service.icon]
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)

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
        <Card className="h-fit p-6 space-y-6">
          <div>
            <p className="flex items-center gap-2 text-xs uppercase tracking-wide text-slate/60"><Ruler size={14} className="text-brandred" /> Materials</p>
            <p className="mt-1 text-sm text-navy font-medium">{service.material}</p>
          </div>
          <div>
            <p className="flex items-center gap-2 text-xs uppercase tracking-wide text-slate/60"><Clock size={14} className="text-brandred" /> Typical turnaround</p>
            <p className="mt-1 text-sm text-navy font-medium">{service.turnaround}</p>
          </div>
          <Button to={`/quote?service=${service.slug}`} className="w-full justify-center">
            Request a Quote <ArrowUpRight size={16} />
          </Button>
        </Card>
      </section>

      <section className="section-pad bg-offwhite">
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
    </div>
  )
}

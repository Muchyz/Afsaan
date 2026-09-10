import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Send, User, Phone, MapPin, Wrench, Ruler, MessageSquare, ShieldCheck, Clock, BadgeCheck } from 'lucide-react'
import { services, business } from '../data/content'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'

const fieldWrap = 'relative mt-2'
const iconClass = 'absolute left-3 top-1/2 -translate-y-1/2 text-brandred'
const inputBase = 'w-full border border-slate/20 rounded-lg pl-10 pr-3 py-2.5 text-sm outline-none focus:border-brandred focus:ring-2 focus:ring-brandred/10 transition-colors'
const labelBase = 'block text-xs font-semibold uppercase tracking-wide text-slate/60'

export default function Quote() {
  const [params] = useSearchParams()
  const [form, setForm] = useState({ name: '', phone: '', location: '', service: params.get('service') || '', dimensions: '', details: '' })
  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const serviceTitle = services.find((s) => s.slug === form.service)?.title || form.service || 'Not specified'
    const text = `Quote request\nName: ${form.name}\nPhone: ${form.phone}\nLocation: ${form.location}\nService: ${serviceTitle}\nDimensions/size: ${form.dimensions}\n\nDetails: ${form.details}`
    window.open(`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="section-pad">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Get a Quote" title="Give Us the Details, Get a Real Price Back" center={false} />

        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] mt-8">
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelBase}>Full name</label>
                  <div className={fieldWrap}>
                    <User size={16} className={iconClass} />
                    <input required value={form.name} onChange={update('name')} className={inputBase} placeholder="Your name" />
                  </div>
                </div>
                <div>
                  <label className={labelBase}>Phone number</label>
                  <div className={fieldWrap}>
                    <Phone size={16} className={iconClass} />
                    <input required value={form.phone} onChange={update('phone')} className={inputBase} placeholder="07xx xxx xxx" />
                  </div>
                </div>
              </div>

              <div>
                <label className={labelBase}>Location / area</label>
                <div className={fieldWrap}>
                  <MapPin size={16} className={iconClass} />
                  <input required value={form.location} onChange={update('location')} placeholder="e.g. Nakuru Town, Section 58" className={inputBase} />
                </div>
              </div>

              <div>
                <label className={labelBase}>Service needed</label>
                <div className={fieldWrap}>
                  <Wrench size={16} className={iconClass} />
                  <select value={form.service} onChange={update('service')} className={`${inputBase} appearance-none bg-white`}>
                    <option value="">Select a service</option>
                    {services.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className={labelBase}>Approximate size / dimensions</label>
                <div className={fieldWrap}>
                  <Ruler size={16} className={iconClass} />
                  <input value={form.dimensions} onChange={update('dimensions')} placeholder="e.g. gate opening 4m wide" className={inputBase} />
                </div>
              </div>

              <div>
                <label className={labelBase}>Other details</label>
                <div className={fieldWrap}>
                  <MessageSquare size={16} className={`${iconClass} top-6`} />
                  <textarea rows={4} value={form.details} onChange={update('details')} placeholder="Design preference, timeline, reference photos, etc." className={`${inputBase} pt-3`} />
                </div>
              </div>

              <button type="submit" className="btn-primary justify-center">
                Send Quote Request <Send size={15} />
              </button>
            </form>
          </Card>

          <div className="grid gap-4 content-start">
            {[
              { icon: ShieldCheck, title: 'No Obligation Quote', text: 'Zero pressure to commit, ever.' },
              { icon: Clock, title: 'Fast Response', text: 'We reply on WhatsApp within hours.' },
              { icon: BadgeCheck, title: 'Quality Guaranteed', text: 'A unique work of art, every time.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-start gap-4 bg-slate/5 border-l-4 border-brandred pl-5 pr-4 py-5">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-brandred shrink-0">
                  <Icon className="text-white" size={18} />
                </span>
                <div>
                  <p className="font-bold text-sm text-slate">{title}</p>
                  <p className="text-sm text-slate/60 mt-1">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

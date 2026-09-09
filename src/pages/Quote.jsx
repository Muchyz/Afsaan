import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Send } from 'lucide-react'
import { services, business } from '../data/content'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'

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
        <Card className="p-6 max-w-2xl">
          <form onSubmit={handleSubmit} className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-xs uppercase tracking-wide text-slate/60">Full name</label>
                <input required value={form.name} onChange={update('name')} className="mt-2 w-full border border-slate/20 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brandred" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide text-slate/60">Phone number</label>
                <input required value={form.phone} onChange={update('phone')} className="mt-2 w-full border border-slate/20 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brandred" />
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wide text-slate/60">Location / area</label>
              <input required value={form.location} onChange={update('location')} placeholder="e.g. Nakuru Town, Section 58" className="mt-2 w-full border border-slate/20 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brandred" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wide text-slate/60">Service needed</label>
              <select value={form.service} onChange={update('service')} className="mt-2 w-full border border-slate/20 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brandred">
                <option value="">Select a service</option>
                {services.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wide text-slate/60">Approximate size / dimensions</label>
              <input value={form.dimensions} onChange={update('dimensions')} placeholder="e.g. gate opening 4m wide" className="mt-2 w-full border border-slate/20 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brandred" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wide text-slate/60">Other details</label>
              <textarea rows={4} value={form.details} onChange={update('details')} placeholder="Design preference, timeline, reference photos, etc." className="mt-2 w-full border border-slate/20 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brandred" />
            </div>
            <button type="submit" className="btn-primary justify-center">Send Quote Request <Send size={15} /></button>
          </form>
        </Card>
      </div>
    </div>
  )
}

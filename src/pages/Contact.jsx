import { useState } from 'react'
import { Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react'
import { business } from '../data/content'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Hi, I'm ${form.name || 'a new client'} (${form.phone || 'no phone given'}).\n\n${form.message}`
    window.open(`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="section-pad">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Contact" title="Tell Us What You Need Built or Painted" center={false} />

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <ul className="space-y-4 text-sm text-navy">
              <li className="flex items-center gap-3"><Phone size={18} className="text-brandred" /> {business.phone}</li>
              <li className="flex items-center gap-3"><MapPin size={18} className="text-brandred" /> {business.location}</li>
              <li className="flex items-center gap-3"><Clock size={18} className="text-brandred" /> {business.hours}</li>
            </ul>
            <a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-outline mt-8">
              <MessageCircle size={16} /> Message us on WhatsApp
            </a>
          </div>

          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-wide text-slate/60">Your name</label>
                <input required value={form.name} onChange={update('name')} className="mt-2 w-full border border-slate/20 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brandred" placeholder="Jane Wanjiku" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide text-slate/60">Phone number</label>
                <input required value={form.phone} onChange={update('phone')} className="mt-2 w-full border border-slate/20 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brandred" placeholder="07xx xxx xxx" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide text-slate/60">Message</label>
                <textarea required rows={4} value={form.message} onChange={update('message')} className="mt-2 w-full border border-slate/20 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-brandred" placeholder="What do you need built or painted?" />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">Send via WhatsApp <Send size={15} /></button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}

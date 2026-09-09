import { useState } from 'react'
import { Phone, MapPin, Clock, MessageCircle, Send, User, MessageSquare } from 'lucide-react'
import { business } from '../data/content'
import SectionHeading from '../components/ui/SectionHeading'

const infoCards = [
  { icon: Phone, label: 'Call or WhatsApp', valueKey: 'phone' },
  { icon: MapPin, label: 'Workshop Location', valueKey: 'location' },
  { icon: Clock, label: 'Working Hours', valueKey: 'hours' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Hi, I'm ${form.name || 'a new client'} (${form.phone || 'no phone given'}).\n\n${form.message}`
    window.open(`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div>
      {/* Steel-style dark hero band */}
      <div className="relative bg-gradient-to-br from-navy to-navy-dark overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.04)_50%,transparent_100%)]" />
        <div className="max-w-6xl mx-auto px-6 py-14 relative">
          <p className="text-xs uppercase tracking-widest text-white/60 font-semibold mb-2">Contact</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Tell Us What You Need Built or Painted</h1>
          <div className="mt-4 h-[3px] w-16 bg-gradient-to-r from-brandred to-white/40 rounded-full" />
          <p className="max-w-xl text-sm text-white/70 mt-4">
            Send us your idea, a photo of the space, or a rough size — we'll come back with honest advice and a fixed quote before any work begins.
          </p>
        </div>
      </div>

      <div className="section-pad">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 sm:grid-cols-3 mb-12 pt-10">
            {infoCards.map(({ icon: Icon, label, valueKey }) => (
              <div key={label} className="rounded-2xl bg-white border-l-4 border-brandred shadow-lg shadow-slate/10 p-5">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-brandred/10 flex items-center justify-center mb-3">
                  <Icon size={18} className="text-brandred" strokeWidth={2} />
                </span>
                <p className="text-xs uppercase tracking-wide text-slate/60 font-semibold">{label}</p>
                <p className="mt-1 text-sm text-navy font-bold leading-snug">{business[valueKey]}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-12 md:grid-cols-2 items-start">
            <div>
              <p className="text-sm text-slate mb-4">
                Prefer to chat directly? WhatsApp is the fastest way to reach us — most messages get a reply within minutes during working hours.
              </p>
              <a
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto justify-center shadow-lg shadow-brandred/20"
              >
                <MessageCircle size={16} /> Message us on WhatsApp
              </a>
            </div>

            <div className="rounded-2xl bg-white shadow-2xl shadow-navy/10 border border-slate/10 overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-brandred to-navy" />
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <div>
                  <label className="block text-xs uppercase tracking-wide text-slate/60 font-semibold">Your name</label>
                  <div className="relative mt-2">
                    <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brandred" />
                    <input
                      required
                      value={form.name}
                      onChange={update('name')}
                      className="w-full border border-slate/20 rounded-lg pl-10 pr-3.5 py-3 text-sm outline-none transition-colors bg-offwhite focus:bg-white focus:border-brandred focus:ring-2 focus:ring-brandred/10"
                      placeholder="Jane Wanjiku"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wide text-slate/60 font-semibold">Phone number</label>
                  <div className="relative mt-2">
                    <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brandred" />
                    <input
                      required
                      value={form.phone}
                      onChange={update('phone')}
                      className="w-full border border-slate/20 rounded-lg pl-10 pr-3.5 py-3 text-sm outline-none transition-colors bg-offwhite focus:bg-white focus:border-brandred focus:ring-2 focus:ring-brandred/10"
                      placeholder="07xx xxx xxx"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wide text-slate/60 font-semibold">Message</label>
                  <div className="relative mt-2">
                    <MessageSquare size={16} className="absolute left-3.5 top-4 text-brandred" />
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={update('message')}
                      className="w-full border border-slate/20 rounded-lg pl-10 pr-3.5 py-3 text-sm outline-none transition-colors bg-offwhite focus:bg-white focus:border-brandred focus:ring-2 focus:ring-brandred/10"
                      placeholder="What do you need built or painted?"
                    />
                  </div>
                </div>
                <button type="submit" className="btn-primary w-full justify-center shadow-lg shadow-brandred/20">
                  Send via WhatsApp <Send size={15} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { Phone, MapPin, Clock, MessageCircle, Send, User, MessageSquare } from 'lucide-react'
import { business } from '../data/content'

const infoItems = [
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
      {/* Page hero band, matching Densco's page-hero--contact */}
      <div className="relative bg-gradient-to-br from-navy via-navy to-navy-dark overflow-hidden text-center py-16 px-6">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)]" />
        <div className="relative max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.16em] text-white/60 font-semibold mb-3">Contact</p>
          <h1 className="text-2xl sm:text-4xl font-bold text-white">Tell Us What You Need Built or Painted</h1>
          <div className="mt-5 h-[3px] w-16 bg-gradient-to-r from-brandred to-white/40 rounded-full mx-auto" />
          <p className="max-w-md mx-auto text-sm text-white/70 mt-5">
            Send us your idea, a photo of the space, or a rough size — we'll come back with honest advice and a fixed quote before any work begins.
          </p>
        </div>
      </div>

      <div className="section-pad">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 items-start">

            {/* Left: contact-info-card equivalent */}
            <div className="rounded-2xl bg-white shadow-2xl shadow-navy/10 border border-slate/10 p-6">
              <h2 className="text-lg font-bold text-navy mb-5">Get in Touch</h2>
              <ul className="flex flex-col gap-3.5">
                {infoItems.map(({ icon: Icon, label, valueKey }) => (
                  <li
                    key={label}
                    className="flex items-start gap-4 bg-white rounded-xl shadow-md shadow-slate/10 border-l-4 border-brandred p-5 transition-transform hover:-translate-y-0.5"
                  >
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-brandred to-red-800 flex items-center justify-center shadow-md shadow-brandred/30">
                      <Icon size={18} className="text-white" strokeWidth={2.2} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-navy font-bold">{label}</p>
                      <p className="mt-0.5 text-sm text-slate leading-snug">{business[valueKey]}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center mt-6 shadow-lg shadow-brandred/20"
              >
                <MessageCircle size={16} /> Message us on WhatsApp
              </a>
            </div>

            {/* Right: contact-form-card, same background/padding/shadow as left */}
            <div className="rounded-2xl bg-white shadow-2xl shadow-navy/10 border border-slate/10 p-6">
              <h2 className="text-lg font-bold text-navy mb-5">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs uppercase tracking-wide text-slate/60 font-semibold">Your name</label>
                  <div className="relative mt-2">
                    <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brandred" />
                    <input
                      required
                      value={form.name}
                      onChange={update('name')}
                      className="w-full border border-slate/20 rounded-lg pl-10 pr-3.5 py-3 text-sm outline-none transition-colors bg-offwhite focus:bg-white focus:border-navy focus:ring-2 focus:ring-navy/10"
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
                      className="w-full border border-slate/20 rounded-lg pl-10 pr-3.5 py-3 text-sm outline-none transition-colors bg-offwhite focus:bg-white focus:border-navy focus:ring-2 focus:ring-navy/10"
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
                      className="w-full border border-slate/20 rounded-lg pl-10 pr-3.5 py-3 text-sm outline-none transition-colors bg-offwhite focus:bg-white focus:border-navy focus:ring-2 focus:ring-navy/10"
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

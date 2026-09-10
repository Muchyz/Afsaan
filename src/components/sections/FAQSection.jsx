import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs, business } from '../../data/content'

const WhatsAppIcon = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
)

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <div className="max-w-3xl mx-auto">
      <div className="grid gap-3">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={item.q}
              className={`bg-white rounded-2xl border overflow-hidden transition-all duration-300 ${
                isOpen ? 'border-brandred/20 shadow-[0_12px_30px_rgba(27,58,92,0.14)]' : 'border-slate/10 shadow-sm'
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="flex w-full items-center gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-extrabold shrink-0 transition-colors ${
                  isOpen ? 'bg-brandred text-white' : 'bg-navy/5 text-navy'
                }`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-bold text-navy text-sm sm:text-base flex-1">{item.q}</span>
                <ChevronDown size={18} className={`shrink-0 text-slate/40 transition-transform ${isOpen ? 'rotate-180 text-brandred' : ''}`} />
              </button>
              {isOpen && (
                <div className="pl-[4.25rem] pr-5 pb-5 -mt-1">
                  <p className="text-sm leading-relaxed text-slate border-l-2 border-brandred/20 pl-4">{item.a}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-10 rounded-2xl bg-brandred p-6 sm:p-8 text-center relative overflow-hidden shadow-lg shadow-brandred/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.12)_0%,transparent_60%)]" />
        <div className="relative">
          <p className="text-white font-bold text-lg">Still have a question?</p>
          <p className="text-white/80 text-sm mt-1 mb-5">Send us a message and we'll reply on WhatsApp within a few hours.</p>
          <a
            href={`https://wa.me/${business.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brandred font-bold px-6 py-3 rounded-lg shadow-md hover:-translate-y-0.5 transition-transform"
          >
            <WhatsAppIcon fill="#25D366" /> Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

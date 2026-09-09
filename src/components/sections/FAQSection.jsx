import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../../data/content'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <div className="divide-y divide-slate/10 border-y border-slate/10 max-w-3xl mx-auto">
      {faqs.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={item.q}>
            <button onClick={() => setOpenIndex(isOpen ? -1 : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left" aria-expanded={isOpen}>
              <span className="font-bold text-navy">{item.q}</span>
              <ChevronDown size={18} className={`flex-shrink-0 text-brandred transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && <p className="pb-5 text-sm leading-relaxed text-slate">{item.a}</p>}
          </div>
        )
      })}
    </div>
  )
}

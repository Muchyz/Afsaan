import SectionHeading from '../ui/SectionHeading'

const items = [
  { n: '01', t: 'Measured On Site', d: 'Every job is measured in person before fabrication starts — no fitting surprises on install day.' },
  { n: '02', t: 'Finish Matters', d: 'Primer, paint, and clean edges are part of the job, not an afterthought tacked on at the end.' },
  { n: '03', t: 'Clear Pricing', d: 'You get a quote before work begins, and know exactly what the deposit and balance cover.' },
  { n: '04', t: 'Fast Turnaround', d: 'Most gates and structures are ready within days, not weeks, without cutting corners.' },
  { n: '05', t: 'We Travel', d: 'Jobs taken across the wider region, with travel factored into the quote upfront.' },
  { n: '06', t: 'Workmanship Warranty', d: 'Structural welds and paint finish are covered against defects for a period after handover.' },
]

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-navy text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 60% 70%, white 1px, transparent 1px)',
          backgroundSize: '40px 40px, 60px 60px',
        }}
      />
      <div className="relative">
        <SectionHeading title="Why Choose Afsaan" subtitle="Clean welds, honest pricing, finishes that hold up." light />
        <div className="max-w-3xl mx-auto px-4 flex flex-col">
          {items.map((item, i) => (
            <div key={item.n} className={`relative flex gap-5 py-7 px-4 rounded-xl transition-colors hover:bg-white/5 ${i !== items.length - 1 ? 'border-b border-white/10' : ''}`}>
              <span className="absolute right-2 top-1/2 -translate-y-1/2 font-extrabold pointer-events-none select-none" style={{ fontSize: '4.5rem', color: 'rgba(255,255,255,0.04)', lineHeight: 1 }}>
                {item.n}
              </span>
              <span className="text-brandred font-extrabold text-2xl leading-none flex-shrink-0 relative z-10" style={{ minWidth: '2.2rem' }}>
                {item.n}
              </span>
              <div className="relative z-10">
                <h3 className="font-bold text-sky mb-1.5">{item.t}</h3>
                <span className="block w-8 h-[2px] bg-brandred/60 mb-2" />
                <p className="text-sm text-gray-300 leading-relaxed">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

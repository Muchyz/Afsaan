import fencepaintingReal from '../assets/images/fencepainting-real.jpg'
import containerpaintingReal from '../assets/images/containerpainting-real.jpg'
import roofpaintingReal from '../assets/images/roofpainting-real.jpg'
import steelstructurepaintingReal from '../assets/images/steelstructurepainting-real.jpg'
import gatepaintingReal from '../assets/images/gatepainting-real.jpg'
import housepaintingReal from '../assets/images/housepainting-real.jpg'
import cowshedReal from '../assets/images/cowshed-real.jpg'
import doorsReal from '../assets/images/doors-real.jpg'
import steelroofingReal from '../assets/images/steelroofing-real.jpg'
import gazeboReal from '../assets/images/gazebo-real.jpg'
import pergolaReal from '../assets/images/pergola-real.jpg'
import watertowerReal from '../assets/images/watertower-real.jpg'
import staircaseReal from '../assets/images/staircase-real.jpg'
import swingGateReal from '../assets/images/swing-gate-real.jpg'
import slidingGateReal from '../assets/images/sliding-gate-real.jpg'
import heroTorchCutting from '../assets/images/hero-torch-cutting.jpg'
import heroBeamWelding from '../assets/images/hero-beam-welding.jpg'
import heroGrinderSparks from '../assets/images/hero-grinder-sparks.jpg'
import heroWelderSparks from '../assets/images/hero-welder-sparks.jpg'
const unsplash = (id) => `https://images.unsplash.com/${id}?w=1400&q=80&auto=format&fit=crop`

export const business = {
  name: 'Afsaan Welders & Painters',
  tagline: 'Get a Unique Work of Art',
  location: 'Nakuru, Kenya',
  phone: '0799515155',
  whatsapp: '254799515155',
  hours: 'Mon – Sat, 8:00 AM – 6:00 PM',
}

export const heroImage = unsplash('photo-1455165814004-1126a7199f9b')
export const heroImages = [
  heroWelderSparks,
  heroGrinderSparks,
  heroBeamWelding,
  heroTorchCutting,
]

export const services = [
  { slug: 'sliding-gates', title: 'Sliding Gates', icon: 'MoveHorizontal', short: `Heavy-duty steel sliding gates that glide smoothly for years — no sagging, no grinding, no rust.`, description: `Your compound deserves a gate that works as hard as you do. We fabricate sliding gates from thick-gauge steel box section, precision-cut and welded by hands that have done this hundreds of times, then finish every panel with a weather-resistant coat that matches your compound's look. Reinforced rollers and track systems mean years of smooth, silent operation — not the grinding, sagging gate you've seen fail elsewhere. Want it automated? We fit motorized openers too, so you never have to step out of the car again.`, material: 'Steel box section, 2mm–3mm gauge, primed and painted', turnaround: '4 – 7 days depending on size', category: 'fabrication', process: [{ title: `Site Measurement`, text: `We visit and measure the opening, checking ground level and space needed for the sliding track.` }, { title: `Fabrication`, text: `Steel box sections are cut, welded, and fitted with rollers in our workshop.` }, { title: `Installation`, text: `Track is laid, gate hung and aligned on site, then tested for smooth daily operation.` }], img: slidingGateReal, gallery: [slidingGateReal] },
  { slug: 'swing-gates', title: 'Swing Gates', icon: 'DoorOpen', short: `Classic swing gates, custom-fitted and finished to a standard that outlasts the weather.`, description: `A swing gate is the first thing people see — make it count. We build traditional swing gates in flat-bar, tube, or sheet-clad designs, each one measured on site so it fits your opening exactly, not close enough. Every gate hangs on heavy-duty rated hinges engineered for years of daily opening and closing without sagging, then gets a clean, durable paint job built to survive Kenya's sun and rain. This is the gate your neighbours will ask about.`, material: 'Mild steel flat bar / box section, welded and painted', turnaround: '3 – 6 days depending on size', category: 'fabrication', process: [{ title: `Site Measurement`, text: `We measure the opening and confirm hinge-post strength before fabrication starts.` }, { title: `Fabrication`, text: `Flat bar or tube sections are cut and welded into your chosen pattern.` }, { title: `Installation`, text: `Gate is hung on rated hinges, aligned, and finished with paint on site or pre-delivery.` }], img: swingGateReal, gallery: [swingGateReal] },
  { slug: 'modern-doors-windows', title: 'Modern Doors & Windows', icon: 'LayoutGrid', short: `Slim, modern steel doors and window grills — real security that doesn't look like a cage.`, description: `Security shouldn't mean bars on your windows that make your home look like a fortress. Our steel doors and burglar-proof grills are custom-fabricated with slim profiles and clean welds, giving you the same protection with a modern look that fits contemporary finishes. Every piece is built by fabricators who understand both structural security and aesthetics, so what you get is a home that's genuinely harder to break into — and better looking for it.`, material: 'Steel tube and flat bar, glass or mesh infill options', turnaround: '3 – 5 days per opening', category: 'fabrication', process: [{ title: `Consultation & Design`, text: `We discuss finish style, security level, and confirm exact opening sizes.` }, { title: `Fabrication`, text: `Steel frames and infill panels are welded to a slim, modern profile.` }, { title: `Fitting`, text: `Doors/grills are fitted to the opening, adjusted, and painted to match your finish.` }], img: doorsReal, gallery: [doorsReal] },
  { slug: 'pergolas', title: 'Pergolas', icon: 'TreePine', short: `Structural steel pergolas built to survive the rains and transform your outdoor space.`, description: `Turn an empty patio into the best part of your home. We design and fabricate steel-framed pergolas engineered to carry climbing plants, shade cloth, or a full slatted roof without flexing or failing. Every frame is fully welded — on site or in our workshop — then primed and painted with a rust-resistant finish that holds up through multiple rainy seasons, not just one. This is outdoor living built to last, not a weekend DIY that needs replacing next year.`, material: 'Steel tube frame, painted or galvanized finish', turnaround: '5 – 10 days depending on span', category: 'fabrication', process: [{ title: `Design & Span Check`, text: `We confirm the span, load (plants/shade cloth/roof), and anchor points.` }, { title: `Fabrication`, text: `Tube frame is welded, either in-shop or built directly on site.` }, { title: `Finishing & Install`, text: `Frame is primed, painted, and anchored in place, ready for planting or shade cloth.` }], img: pergolaReal, gallery: [pergolaReal] },
  { slug: 'gazebos', title: 'Gazebos', icon: 'Tent', short: `Freestanding steel gazebos built as a lasting centrepiece, not a seasonal add-on.`, description: `A gazebo should be the space everyone gathers around — for years, not one season. Our gazebos are fully welded and sized precisely to your outdoor space, finished with a durable steel or iron-sheet roof built to handle real weather. Whether it's a garden seating area, an event space, or shaded parking you're after, you get a solid, professionally fabricated structure — the kind of build that becomes the centrepiece of every gathering, not something you're patching up by next year.`, material: 'Steel frame with iron-sheet or tile roofing', turnaround: '7 – 12 days depending on size', category: 'fabrication', process: [{ title: `Site Planning`, text: `We assess the space and agree on size, roof style, and seating layout.` }, { title: `Fabrication`, text: `Frame is fully welded and roofing material prepared to size.` }, { title: `Assembly On Site`, text: `Structure is assembled, roofed, and finished in place.` }], img: gazeboReal, gallery: [gazeboReal] },
  { slug: 'steel-roofing', title: 'Steel Roofing', icon: 'Warehouse', short: `Engineered roof trusses and roofing — built to hold up the building, not just look finished.`, description: `A roof that only looks complete on handover day isn't a roof you can trust. We fabricate steel roof trusses to your exact span and load specification, install them with proper bracing, then finish with quality iron-sheet or box-profile sheeting. We take the structural engineering as seriously as the finish, because a roof over your family or your business isn't somewhere to cut corners — it's the one thing that has to be right the first time.`, material: 'Steel truss sections, iron sheets (gauge 28–30)', turnaround: 'Quoted per span and roof area', category: 'fabrication', process: [{ title: `Structural Assessment`, text: `We calculate span and load to size trusses correctly. not guesswork.` }, { title: `Truss Fabrication`, text: `Trusses are cut and welded to spec in our workshop.` }, { title: `Installation & Sheeting`, text: `Trusses are installed with proper bracing, then roofing sheets fitted.` }], img: steelroofingReal, gallery: [steelroofingReal] },
  { slug: 'cow-sheds', title: 'Cow Sheds', icon: 'Building2', short: `Steel-framed cow sheds built for real farm conditions — low upkeep, high durability.`, description: `Your herd's shelter shouldn't be the thing that keeps failing on you. We fabricate practical, steel-framed cow sheds sized to your herd count, with drainage-friendly layouts and roofing suited to local conditions. Every structure gets the same attention to structural integrity and finish quality as our residential work — because a farm asset that needs constant repair isn't saving you money, it's costing you. This is a shed built to keep working for you, year after year.`, material: 'Steel frame, iron-sheet roofing, timber or steel slats', turnaround: 'Quoted per structure size', category: 'fabrication', process: [{ title: `Site Assessment`, text: `We look at herd count, drainage, and layout before designing the frame.` }, { title: `Fabrication`, text: `Steel frame sections are welded to size for the structure.` }, { title: `On-Site Build`, text: `Frame is erected on site and roofed/slatted to finish.` }], img: cowshedReal, gallery: [cowshedReal] },
  { slug: 'staircases', title: 'Staircases', icon: 'MoveUp', short: `Steel staircases — straight, dog-leg, or spiral — fabricated to fit your space exactly.`, description: `A staircase is a feature, not an afterthought — we build it that way. Our structural steel staircases, whether straight-run, dog-leg, or spiral, are fabricated to fit your stairwell precisely, with steel or timber treads and a welded balustrade finished to match your interior. From the first measurement to the final polish, we treat every staircase as a centerpiece worth getting exactly right, not just a functional box to tick.`, material: 'Steel stringers, steel or timber treads, painted or galvanized', turnaround: '5 – 9 days depending on design', category: 'fabrication', process: [{ title: `Precise Measurement`, text: `We measure your stairwell exactly. rise, run, and any turns needed.` }, { title: `Fabrication`, text: `Stringers, treads, and balustrade are welded to fit your exact space.` }, { title: `Fitting & Finishing`, text: `Staircase is installed, treads secured, and finish applied to match your interior.` }], img: staircaseReal, gallery: [staircaseReal] },
  { slug: 'water-towers', title: 'Water Towers', icon: 'Droplets', short: `Engineered steel tank stands built to safely carry your full water load, every single day.`, description: `A wobbling tank stand isn't a risk worth taking. We design and fabricate steel tank stands sized to your exact tank capacity, with cross-bracing calculated for full-load stability — not eyeballed, calculated. Every stand gets a rust-resistant coating built for long outdoor life, giving you a structure you can trust to hold thousands of litres safely, day in and day out, through sun and rain alike.`, material: 'Steel angle/tube frame, rust-resistant paint finish', turnaround: 'Quoted per tank size and stand height', category: 'fabrication', process: [{ title: `Load Calculation`, text: `We calculate cross-bracing needed for your tank size at full load.` }, { title: `Fabrication`, text: `Steel angle/tube frame is welded to the engineered design.` }, { title: `Installation & Coating`, text: `Stand is installed on site and finished with rust-resistant paint.` }], img: watertowerReal, gallery: [watertowerReal] },
  { slug: 'gate-painting', title: 'Gate Painting', icon: 'PaintRoller', short: `Full gate respray that brings back the showroom finish — rust gone, colour sharp again.`, description: `A faded, rusting gate says more about your property than you'd like. Whether your gate is freshly fabricated or years old and peeling, our team delivers a full professional respray: rust removal, primer, and a durable topcoat built to resist chipping and weathering, not just look good for a month. We treat every gate with the same care as our own fabrication work — because for a lot of our clients, it originally was.`, material: 'Rust-inhibiting primer, weather-resistant enamel or spray paint', turnaround: '1 – 2 days depending on gate size', category: 'painting', process: [{ title: `Inspection`, text: `We assess rust level and current paint condition on site.` }, { title: `Rust Treatment & Prep`, text: `Rust is removed, surface sanded, and primer applied.` }, { title: `Topcoat & Finish`, text: `Durable topcoat applied for a showroom finish that resists chipping.` }], img: gatepaintingReal, gallery: [gatepaintingReal] },
  { slug: 'house-painting', title: 'House Painting', icon: 'Home', short: `Interior and exterior house painting with the same precision we bring to steel work.`, description: `A rushed paint job shows within a year. Our house painting covers full exteriors, interiors, and trim work, starting with proper surface preparation — crack filling, sanding, and priming — before a clean, even application of quality paint that actually holds. We manage the job from start to finish, one crew, one point of contact, so you get a professional result without juggling multiple contractors or chasing anyone for updates.`, material: 'Weatherguard exterior paint or matte/silk interior emulsion', turnaround: '3 – 10 days depending on house size', category: 'painting', process: [{ title: `Site Walkthrough`, text: `We assess wall condition, agree on colours, and scope the job.` }, { title: `Surface Prep`, text: `Cracks filled, sanding done, and primer applied where needed.` }, { title: `Painting & Handover`, text: `Finish coats applied evenly, with a clean handover on completion.` }], img: housepaintingReal, gallery: [housepaintingReal] },
  { slug: 'container-painting', title: 'Container Painting', icon: 'Package', short: `Rust-proof, industrial-grade repainting that turns any container into a real space.`, description: `A shipping container shouldn't look like one once it's your shop or office. We repaint and rust-treat containers to a professional standard, using epoxy primer and industrial-grade topcoats built to handle sun, rain, and daily wear for years, not months. Custom colours and full branding are available on request, so your container ends up looking as sharp and purpose-built as any structure — inside and out.`, material: 'Rust converter, epoxy primer, industrial enamel', turnaround: '2 – 4 days per container', category: 'painting', process: [{ title: `Inspection`, text: `We check for rust spots and existing coating condition.` }, { title: `Rust Treatment & Priming`, text: `Rust converted, epoxy primer applied for adhesion.` }, { title: `Industrial Topcoat`, text: `Durable industrial-grade coating applied, with branding if requested.` }], img: containerpaintingReal, gallery: [containerpaintingReal] },
  { slug: 'fence-railing-painting', title: 'Fence & Railing Painting', icon: 'Paintbrush', short: `Rust protection and a sharp finish for steel fences, railings, and grills — done right.`, description: `Peeling railings make an entire compound look neglected, even when everything else is spotless. Our team preps every surface with a wire brush and rust-inhibiting primer before applying a clean, durable topcoat to fences, railings, and grills. It's the detail work that keeps a compound looking maintained and professional — not just painted, but properly protected for years to come.`, material: 'Rust-inhibiting primer, enamel paint', turnaround: '1 – 3 days depending on length', category: 'painting', process: [{ title: `Inspection`, text: `We check rust spots and joints along the full length.` }, { title: `Wire Brush & Prime`, text: `Surface is wire-brushed clean and rust-inhibiting primer applied.` }, { title: `Topcoat`, text: `Clean enamel topcoat applied for a lasting, tidy finish.` }], img: fencepaintingReal, gallery: [fencepaintingReal] },
  { slug: 'roof-painting', title: 'Roof Painting', icon: 'SprayCan', short: `Rust treatment and protective repainting that adds years of life to an ageing roof.`, description: `Replacing a roof is expensive — restoring one doesn't have to look like a compromise. We treat rust, prime, and repaint iron-sheet and box-profile roofing with heat-reflective or standard roofing paint, restoring both the look and the protective seal of an ageing roof. It's the cost-effective way to add years of life back to your roof, without the price tag or disruption of a full replacement.`, material: 'Rust converter, roofing primer, heat-reflective or standard roof paint', turnaround: '2 – 5 days depending on roof area', category: 'painting', process: [{ title: `Roof Inspection`, text: `We check sheet condition and identify rust-heavy areas.` }, { title: `Rust Treatment & Priming`, text: `Rust converted and roofing primer applied.` }, { title: `Weatherproof Topcoat`, text: `Heat-reflective or standard roof paint applied for a lasting seal.` }], img: roofpaintingReal, gallery: [roofpaintingReal] },
  { slug: 'steel-structure-painting', title: 'Steel Structure Painting', icon: 'Palette', short: `Industrial-grade painting for warehouses, sheds, and large steel structures — at scale.`, description: `Big structures need the same discipline as small ones, just applied at scale. For warehouses, workshops, and farm buildings, we handle full surface preparation, anti-corrosion priming, and industrial coating application — by hand or spray, whatever the job calls for. It's the same quality standard we apply to a single gate, sized up for structures built to perform for decades, not just pass inspection on day one.`, material: 'Anti-corrosion primer, industrial-grade enamel or spray coating', turnaround: 'Quoted per structure size', category: 'painting', process: [{ title: `Site Survey`, text: `We assess structure size and access requirements for the job.` }, { title: `Surface Prep & Priming`, text: `Full surface prep followed by anti-corrosion primer.` }, { title: `Industrial Coating`, text: `Coating applied by hand or spray, sized to the structure.` }], img: steelstructurepaintingReal, gallery: [steelstructurepaintingReal] },
]

export const process = [
  { title: 'Job Intake', description: 'Send your details, measurements, and reference photos via WhatsApp or the quote form.' },
  { title: 'Quote', description: 'You get a clear price and timeline before any work begins. no surprises.' },
  { title: 'Build', description: 'Fabrication and painting done in-shop or on site, with progress photos sent as we go.' },
  { title: 'Install', description: 'Final delivery and installation, checked with you before we call the job done.' },
]

export const testimonials = [
  {
    name: 'J. Mwangi',
    location: 'Nakuru',
    quote: "The sliding gate they built for our compound has held up perfectly for over a year. clean weld work and the paint hasn't chipped.",
  },
  {
    name: 'S. Wanjiru',
    location: 'Njoro',
    quote: 'Had our whole house repainted and a staircase rebuilt in the same week. Both jobs were done on the timeline we agreed.',
  },
  {
    name: 'Fatima Al-Harthy',
    location: 'Muscat, Oman (built in Nakuru)',
    quote: "I was skeptical about ordering gates and burglar proofing for my parents' house from abroad, but they sent photos at every stage and the final work matched exactly what we discussed on WhatsApp.",
  },
  {
    name: 'David Kiplangat',
    location: 'Eldoret',
    quote: 'We supply our hardware shop with their fabricated window frames and gate hinges. Consistent quality, and they never miss a delivery date.',
  },
  {
    name: 'Amina Yusuf',
    location: 'Dubai, UAE (project in Nakuru)',
    quote: "Building a rental unit back home while working in Dubai was stressful until we found these guys. They handled the welding and painting for the whole compound wall without me setting foot in Kenya.",
  },
  {
    name: 'Peter Ochieng',
    location: 'Molo',
    quote: 'My brother recommended them for our family plot. The workmanship on the security grills is solid. no rattling, no rust after the rains.',
  },
  {
    name: 'Grace Nyambura',
    location: 'Nakuru Town',
    quote: 'As a single woman managing a construction project alone, I appreciated how patiently they explained every cost before starting. No hidden charges, no pressure.',
  },
  {
    name: 'Coastline Hardware Ltd',
    location: 'Nakuru (B2B supplier partner)',
    quote: "We've stocked their welded products. gates, grills, and staircase frames. in our shop for two years now. Our customers keep coming back for that brand specifically.",
  },
  {
    name: 'Hassan Mohamed',
    location: 'Riyadh, Saudi Arabia (project in Molo)',
    quote: "Sent them a rough sketch over WhatsApp for my mother's veranda railings and they turned it into an actual technical drawing before starting. That level of communication is rare from abroad.",
  },
  {
    name: 'Green Acres Farm',
    location: 'Rongai',
    quote: 'They built our cattle crush and farm gates to exact spec, galvanized properly so it survives the rainy season. Been running two years without a single repair.',
  },
  {
    name: 'St. Mark Parish',
    location: 'Nakuru',
    quote: 'The perimeter fencing and pedestrian gate for the church compound were finished ahead of our fundraising deadline, and the pricing was fair for an institution on a budget.',
  },
  {
    name: 'Lakeview Apartments',
    location: 'Nakuru',
    quote: 'As a developer we needed balustrades and staircases across 12 units to match exactly. They kept every unit identical. something smaller fundis struggle with.',
  },
  {
    name: 'Sunrise Academy',
    location: 'Bahati',
    quote: 'Window grills and the main gate for the school were done during the holidays so classes were never disrupted. Parents have commented on how secure the compound feels now.',
  },
  {
    name: 'Miriam Chebet',
    location: 'Nakuru',
    quote: "I run a small salon and needed a shopfront grill and signage frame. They understood I couldn't close for long and had it done in a single weekend.",
  },
  {
    name: 'Valley View Lodge',
    location: 'Naivasha',
    quote: 'Ordered custom gazebo frames and outdoor furniture for the lodge. Guests ask about them constantly. the welding detail really elevated the space.',
  },
  {
    name: 'Ahmed Al-Balushi',
    location: 'Muscat, Oman (build in Nakuru)',
    quote: "Bought land back home and used their quote page to plan the whole perimeter wall gate and carport before I'd even flown in. Landed to find everything exactly as priced.",
  },
  {
    name: 'Nakuru General Clinic',
    location: 'Nakuru',
    quote: 'Needed a wheelchair ramp railing and window security bars that still allowed natural light. They proposed a design we hadn’t even considered and it worked perfectly.',
  },
  {
    name: 'James Kariuki',
    location: 'Naivasha',
    quote: 'My water tank stand was rusting badly from an old fundi’s work. These guys rebuilt it properly with the right gauge steel. no more wobble even when it’s full.',
  },
  {
    name: 'Rift Valley Auto Spares',
    location: 'Nakuru',
    quote: 'We buy their welded display racks and shelving in bulk for our shop. Same product, same finish, every single order. that consistency is why we keep going back.',
  },
  {
    name: 'Halima Noor',
    location: 'Doha, Qatar (project in Nakuru)',
    quote: "Working two time zones away, I needed someone who wouldn't need constant follow-up. They gave a clear timeline for my rental gate and stuck to it without me chasing.",
  },
  {
    name: 'Boma Estate Residents Association',
    location: 'Nakuru',
    quote: 'Contracted them for gate repairs and fresh paint across our whole gated estate’s common areas. Managing 40 households’ expectations is hard, but the finish satisfied everyone.',
  },
]

export const faqs = [
  { q: 'Do you travel outside Nakuru for jobs?', a: 'Yes. We take jobs across the wider region. Travel and accommodation for out-of-town jobs is factored into the quote.' },
  { q: 'How does payment work?', a: 'A deposit secures materials and scheduling, with the balance paid on completion and your approval of the finished work.' },
  { q: 'Can I send a photo of a design I like instead of describing it?', a: 'Yes. Reference photos are the fastest way to get an accurate quote. Send them along with rough measurements.' },
  { q: 'Do you offer any warranty on the welding or paint work?', a: 'Structural welds and paint finish are covered against workmanship defects for a period after handover. Ask us for the specifics for your job type.' },
  { q: 'How long does a typical gate take?', a: 'Most gates are ready within 3-7 days from confirmed measurements and deposit, depending on size and design complexity.' },
  { q: "I'm based outside Kenya. Can I still order a build for my family's property?", a: "Yes, this is common. We work over WhatsApp, agree the design and quote, and send progress photos at each stage so you can approve work remotely before it's installed." },
  { q: 'Is there a minimum job size you accept?', a: "No fixed minimum. We take on anything from a single window grill to full compound fencing, though very small jobs may carry a callout fee depending on location." },
  { q: 'Can you supply gates or grills without installing them, for resale?', a: 'Yes, we supply hardware shops and retailers with fabricated products in bulk. Contact us directly to discuss wholesale pricing and delivery.' },
  { q: 'What steel gauge and paint do you use?', a: 'We size steel gauge to the job (heavier gauge for gates and structural work, lighter for decorative grills) and use rust-resistant primer with weather-grade topcoat as standard.' },
  { q: 'Can you match an existing design already on my property?', a: "Yes. Send photos or measurements of the existing work and we'll match the pattern, spacing, and finish as closely as possible." },
  { q: 'Do you handle both fabrication and painting, or just one?', a: 'Both. Most clients have us design, weld, and paint as one job, but we also take painting-only or welding-only work if that\'s all you need.' },
  { q: 'How quickly do you respond to a quote request?', a: 'We typically reply on WhatsApp within a few hours during business days. Sending your location, rough size, and any reference photos upfront speeds this up.' },
]

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
  { slug: 'sliding-gates', title: 'Sliding Gates', icon: 'MoveHorizontal', short: `Space-saving steel sliding gates engineered for daily use and long-term reliability.`, description: `Our sliding gates are fabricated from heavy-duty steel box sections, precision-cut and welded by an experienced team, then finished with a smooth, weather-resistant paint job that matches your compound. Every gate runs on reinforced rollers and track systems designed for years of smooth, low-maintenance operation, with the option to add an automated opener for extra convenience.`, material: 'Steel box section, 2mm–3mm gauge, primed and painted', turnaround: '4 – 7 days depending on size', category: 'fabrication', process: [{ title: `Site Measurement`, text: `We visit and measure the opening, checking ground level and space needed for the sliding track.` }, { title: `Fabrication`, text: `Steel box sections are cut, welded, and fitted with rollers in our workshop.` }, { title: `Installation`, text: `Track is laid, gate hung and aligned on site, then tested for smooth daily operation.` }], img: slidingGateReal, gallery: [slidingGateReal, unsplash('photo-1580047750144-2c7790adf461')] },
  { slug: 'swing-gates', title: 'Swing Gates', icon: 'DoorOpen', short: `Classic double or single swing gates, custom-built and finished to a professional standard.`, description: `We fabricate traditional swing gates in flat-bar, tube, or sheet-clad designs, each one custom-measured on site for a precise fit. Every gate is hung on heavy-duty, rated hinges built to handle daily opening and closing for years, and finished with a clean, durable paint job that holds up to Kenya's weather.`, material: 'Mild steel flat bar / box section, welded and painted', turnaround: '3 – 6 days depending on size', category: 'fabrication', process: [{ title: `Site Measurement`, text: `We measure the opening and confirm hinge-post strength before fabrication starts.` }, { title: `Fabrication`, text: `Flat bar or tube sections are cut and welded into your chosen pattern.` }, { title: `Installation`, text: `Gate is hung on rated hinges, aligned, and finished with paint on site or pre-delivery.` }], img: swingGateReal, gallery: [swingGateReal, unsplash('photo-1695559557666-d1b86621b5e4')] },
  { slug: 'modern-doors-windows', title: 'Modern Doors & Windows', icon: 'LayoutGrid', short: `Steel-framed doors and window grills that combine strong security with a modern look.`, description: `Our steel doors and burglar-proof window grills are custom-fabricated to match contemporary house finishes — slim profiles, clean welds, and a smooth painted finish instead of the bulky grill look many homes settle for. Every piece is built by skilled fabricators who understand both security requirements and aesthetics, so you get protection that looks as good as it performs.`, material: 'Steel tube and flat bar, glass or mesh infill options', turnaround: '3 – 5 days per opening', category: 'fabrication', process: [{ title: `Consultation & Design`, text: `We discuss finish style, security level, and confirm exact opening sizes.` }, { title: `Fabrication`, text: `Steel frames and infill panels are welded to a slim, modern profile.` }, { title: `Fitting`, text: `Doors/grills are fitted to the opening, adjusted, and painted to match your finish.` }], img: doorsReal, gallery: [doorsReal] },
  { slug: 'pergolas', title: 'Pergolas', icon: 'TreePine', short: `Structural steel pergolas built to handle the elements and elevate your outdoor space.`, description: `We design and fabricate steel-framed pergolas for patios, driveways, and gardens, engineered to carry climbing plants, shade cloth, or a slatted roof without compromise. Every frame is fully welded — on site or in our workshop — then primed and painted with a rust-resistant finish so it stays strong through multiple rainy seasons.`, material: 'Steel tube frame, painted or galvanized finish', turnaround: '5 – 10 days depending on span', category: 'fabrication', process: [{ title: `Design & Span Check`, text: `We confirm the span, load (plants/shade cloth/roof), and anchor points.` }, { title: `Fabrication`, text: `Tube frame is welded, either in-shop or built directly on site.` }, { title: `Finishing & Install`, text: `Frame is primed, painted, and anchored in place, ready for planting or shade cloth.` }], img: pergolaReal, gallery: [pergolaReal] },
  { slug: 'gazebos', title: 'Gazebos', icon: 'Tent', short: `Freestanding steel gazebos built as a lasting centrepiece for outdoor living.`, description: `Our gazebos are fully welded and sized precisely to your outdoor space, then finished with a durable steel or iron-sheet roof. Whether you need a garden seating area, an event space, or shaded parking, we deliver a solid, professionally fabricated structure that's built to be enjoyed for years, not just one season.`, material: 'Steel frame with iron-sheet or tile roofing', turnaround: '7 – 12 days depending on size', category: 'fabrication', process: [{ title: `Site Planning`, text: `We assess the space and agree on size, roof style, and seating layout.` }, { title: `Fabrication`, text: `Frame is fully welded and roofing material prepared to size.` }, { title: `Assembly On Site`, text: `Structure is assembled, roofed, and finished in place.` }], img: gazeboReal, gallery: [gazeboReal] },
  { slug: 'steel-roofing', title: 'Steel Roofing', icon: 'Warehouse', short: `Roof trusses and iron-sheet roofing, engineered and installed to proper structural standards.`, description: `We fabricate steel roof trusses to your exact span and load specification, then install them with proper bracing before finishing with quality iron-sheet or box-profile roofing sheets. Our team handles the structural engineering side as seriously as the finish, so your roof is built to last, not just to look complete on handover day.`, material: 'Steel truss sections, iron sheets (gauge 28–30)', turnaround: 'Quoted per span and roof area', category: 'fabrication', process: [{ title: `Structural Assessment`, text: `We calculate span and load to size trusses correctly — not guesswork.` }, { title: `Truss Fabrication`, text: `Trusses are cut and welded to spec in our workshop.` }, { title: `Installation & Sheeting`, text: `Trusses are installed with proper bracing, then roofing sheets fitted.` }], img: steelroofingReal, gallery: [steelroofingReal] },
  { slug: 'cow-sheds', title: 'Cow Sheds', icon: 'Building2', short: `Steel-framed cow sheds and farm structures built for durability with minimal upkeep.`, description: `We fabricate practical, steel-framed cow sheds sized to your herd count, with a drainage-friendly layout and roofing suited to the local climate. Every structure is built with the same attention to structural integrity and finish quality as our residential work, so you get a farm asset that keeps working for you year after year.`, material: 'Steel frame, iron-sheet roofing, timber or steel slats', turnaround: 'Quoted per structure size', category: 'fabrication', process: [{ title: `Site Assessment`, text: `We look at herd count, drainage, and layout before designing the frame.` }, { title: `Fabrication`, text: `Steel frame sections are welded to size for the structure.` }, { title: `On-Site Build`, text: `Frame is erected on site and roofed/slatted to finish.` }], img: cowshedReal, gallery: [cowshedReal] },
  { slug: 'staircases', title: 'Staircases', icon: 'MoveUp', short: `Steel staircases, spiral or straight-run, fabricated to fit your space precisely.`, description: `Our structural steel staircases — straight-run, dog-leg, or spiral — are fabricated to fit your stairwell exactly, with steel or timber treads and a welded balustrade finished to match your interior. From the first measurement to the final polish, we treat every staircase as a feature piece, not just a functional necessity.`, material: 'Steel stringers, steel or timber treads, painted or galvanized', turnaround: '5 – 9 days depending on design', category: 'fabrication', process: [{ title: `Precise Measurement`, text: `We measure your stairwell exactly — rise, run, and any turns needed.` }, { title: `Fabrication`, text: `Stringers, treads, and balustrade are welded to fit your exact space.` }, { title: `Fitting & Finishing`, text: `Staircase is installed, treads secured, and finish applied to match your interior.` }], img: staircaseReal, gallery: [staircaseReal] },
  { slug: 'water-towers', title: 'Water Towers', icon: 'Droplets', short: `Engineered steel tank stands built to safely carry your water tank at full load.`, description: `We design and fabricate steel tank stands sized to your tank capacity, with cross-bracing calculated for full-load stability, not guesswork. Every stand is finished with a rust-resistant coating for long outdoor life, giving you a structure you can trust to hold thousands of litres safely, day in and day out.`, material: 'Steel angle/tube frame, rust-resistant paint finish', turnaround: 'Quoted per tank size and stand height', category: 'fabrication', process: [{ title: `Load Calculation`, text: `We calculate cross-bracing needed for your tank size at full load.` }, { title: `Fabrication`, text: `Steel angle/tube frame is welded to the engineered design.` }, { title: `Installation & Coating`, text: `Stand is installed on site and finished with rust-resistant paint.` }], img: watertowerReal, gallery: [watertowerReal] },
  { slug: 'gate-painting', title: 'Gate Painting', icon: 'PaintRoller', short: `Full respray and touch-up painting that restores gates to a showroom finish.`, description: `Whether your gate is freshly fabricated or years old and fading, our team delivers a full professional respray — rust removal, primer, and a durable topcoat that resists chipping and weathering. We treat every gate with the same care as our own fabrication work, because for many clients, it originally was.`, material: 'Rust-inhibiting primer, weather-resistant enamel or spray paint', turnaround: '1 – 2 days depending on gate size', category: 'painting', process: [{ title: `Inspection`, text: `We assess rust level and current paint condition on site.` }, { title: `Rust Treatment & Prep`, text: `Rust is removed, surface sanded, and primer applied.` }, { title: `Topcoat & Finish`, text: `Durable topcoat applied for a showroom finish that resists chipping.` }], img: gatepaintingReal, gallery: [gatepaintingReal] },
  { slug: 'house-painting', title: 'House Painting', icon: 'Home', short: `Interior and exterior house painting delivered with the same precision as our steel work.`, description: `Our house painting service covers full exteriors, interiors, and trim work, starting with proper surface preparation — crack filling, sanding, and priming — before a clean, even application of quality paint. We manage the job from start to finish, so you get a professional result without having to coordinate multiple contractors.`, material: 'Weatherguard exterior paint or matte/silk interior emulsion', turnaround: '3 – 10 days depending on house size', category: 'painting', process: [{ title: `Site Walkthrough`, text: `We assess wall condition, agree on colours, and scope the job.` }, { title: `Surface Prep`, text: `Cracks filled, sanding done, and primer applied where needed.` }, { title: `Painting & Handover`, text: `Finish coats applied evenly, with a clean handover on completion.` }], img: housepaintingReal, gallery: [housepaintingReal] },
  { slug: 'container-painting', title: 'Container Painting', icon: 'Package', short: `Rust-proof, industrial-grade repainting for shipping containers turned shops and offices.`, description: `We repaint and rust-treat shipping containers to a professional standard, using epoxy primer and industrial-grade topcoats built to handle sun, rain, and daily wear. Custom colours and branding are available on request, so your container looks as sharp as any built structure, inside and out.`, material: 'Rust converter, epoxy primer, industrial enamel', turnaround: '2 – 4 days per container', category: 'painting', process: [{ title: `Inspection`, text: `We check for rust spots and existing coating condition.` }, { title: `Rust Treatment & Priming`, text: `Rust converted, epoxy primer applied for adhesion.` }, { title: `Industrial Topcoat`, text: `Durable industrial-grade coating applied, with branding if requested.` }], img: containerpaintingReal, gallery: [containerpaintingReal] },
  { slug: 'fence-railing-painting', title: 'Fence & Railing Painting', icon: 'Paintbrush', short: `Rust protection and a sharp finish for steel fences, railings, and grills.`, description: `Our team preps every surface with a wire brush and rust-inhibiting primer before applying a clean, durable topcoat to fences, railings, and grills. It's the kind of detail work that keeps a compound looking maintained and professional, not just painted.`, material: 'Rust-inhibiting primer, enamel paint', turnaround: '1 – 3 days depending on length', category: 'painting', process: [{ title: `Inspection`, text: `We check rust spots and joints along the full length.` }, { title: `Wire Brush & Prime`, text: `Surface is wire-brushed clean and rust-inhibiting primer applied.` }, { title: `Topcoat`, text: `Clean enamel topcoat applied for a lasting, tidy finish.` }], img: fencepaintingReal, gallery: [fencepaintingReal] },
  { slug: 'roof-painting', title: 'Roof Painting', icon: 'SprayCan', short: `Rust treatment and protective repainting that extends the life of ageing iron-sheet roofs.`, description: `We treat rust, prime, and repaint iron-sheet and box-profile roofing with heat-reflective or standard roofing paint, restoring both the look and the protective seal of an ageing roof. It's a cost-effective way to add years of life to your roof without a full replacement.`, material: 'Rust converter, roofing primer, heat-reflective or standard roof paint', turnaround: '2 – 5 days depending on roof area', category: 'painting', process: [{ title: `Roof Inspection`, text: `We check sheet condition and identify rust-heavy areas.` }, { title: `Rust Treatment & Priming`, text: `Rust converted and roofing primer applied.` }, { title: `Weatherproof Topcoat`, text: `Heat-reflective or standard roof paint applied for a lasting seal.` }], img: roofpaintingReal, gallery: [roofpaintingReal] },
  { slug: 'steel-structure-painting', title: 'Steel Structure Painting', icon: 'Palette', short: `Industrial-grade painting for warehouses, sheds, and large steel structures.`, description: `For warehouses, workshops, and farm buildings, we handle full surface preparation, anti-corrosion priming, and industrial coating application, by hand or spray, at scale. It's the same quality standard we apply to a single gate, just sized for structures that need to perform for decades.`, material: 'Anti-corrosion primer, industrial-grade enamel or spray coating', turnaround: 'Quoted per structure size', category: 'painting', process: [{ title: `Site Survey`, text: `We assess structure size and access requirements for the job.` }, { title: `Surface Prep & Priming`, text: `Full surface prep followed by anti-corrosion primer.` }, { title: `Industrial Coating`, text: `Coating applied by hand or spray, sized to the structure.` }], img: steelstructurepaintingReal, gallery: [steelstructurepaintingReal] },
]

export const process = [
  { title: 'Job Intake', description: 'Send your details, measurements, and reference photos via WhatsApp or the quote form.' },
  { title: 'Quote', description: 'You get a clear price and timeline before any work begins — no surprises.' },
  { title: 'Build', description: 'Fabrication and painting done in-shop or on site, with progress photos sent as we go.' },
  { title: 'Install', description: 'Final delivery and installation, checked with you before we call the job done.' },
]

export const testimonials = [
  {
    name: 'J. Mwangi',
    location: 'Nakuru',
    quote: "The sliding gate they built for our compound has held up perfectly for over a year — clean weld work and the paint hasn't chipped.",
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
    quote: 'My brother recommended them for our family plot. The workmanship on the security grills is solid — no rattling, no rust after the rains.',
  },
  {
    name: 'Grace Nyambura',
    location: 'Nakuru Town',
    quote: 'As a single woman managing a construction project alone, I appreciated how patiently they explained every cost before starting. No hidden charges, no pressure.',
  },
  {
    name: 'Coastline Hardware Ltd',
    location: 'Nakuru (B2B supplier partner)',
    quote: "We've stocked their welded products — gates, grills, and staircase frames — in our shop for two years now. Our customers keep coming back for that brand specifically.",
  },
]

export const faqs = [
  { q: 'Do you travel outside Nakuru for jobs?', a: 'Yes. We take jobs across the wider region — travel and accommodation for out-of-town jobs is factored into the quote.' },
  { q: 'How does payment work?', a: 'A deposit secures materials and scheduling, with the balance paid on completion and your approval of the finished work.' },
  { q: 'Can I send a photo of a design I like instead of describing it?', a: 'Yes — reference photos are the fastest way to get an accurate quote. Send them along with rough measurements.' },
  { q: 'Do you offer any warranty on the welding or paint work?', a: 'Structural welds and paint finish are covered against workmanship defects for a period after handover — ask us for the specifics for your job type.' },
  { q: 'How long does a typical gate take?', a: 'Most gates are ready within 3–7 days from confirmed measurements and deposit, depending on size and design complexity.' },
]

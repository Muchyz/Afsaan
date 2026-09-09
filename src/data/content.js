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
  { slug: 'sliding-gates', title: 'Sliding Gates', icon: 'MoveHorizontal', short: 'Space-saving steel sliding gates built for daily use.', description: 'Heavy-duty sliding gates fabricated from steel box sections, finished smooth and painted to match your compound. Built with reinforced rollers and track systems for long-term, low-maintenance operation, with the option to add an automated opener.', material: 'Steel box section, 2mm–3mm gauge, primed and painted', turnaround: '4 – 7 days depending on size', img: slidingGateReal, gallery: [slidingGateReal, unsplash('photo-1580047750144-2c7790adf461')] },
  { slug: 'swing-gates', title: 'Swing Gates', icon: 'DoorOpen', short: 'Classic double or single swing gates with custom patterns.', description: 'Traditional swing gates, built single or double leaf, in flat-bar, tube, or sheet-clad designs. Every gate is custom-measured on site and hung on heavy-duty hinges rated for daily opening and closing.', material: 'Mild steel flat bar / box section, welded and painted', turnaround: '3 – 6 days depending on size', img: swingGateReal, gallery: [swingGateReal, unsplash('photo-1695559557666-d1b86621b5e4')] },
  { slug: 'modern-doors-windows', title: 'Modern Doors & Windows', icon: 'LayoutGrid', short: 'Steel-framed doors and window grills, security and style in one.', description: 'Custom steel doors and burglar-proof window grills designed to match modern house finishes — slim profiles, clean welds, and a powder-smooth painted finish rather than the bulky grill look.', material: 'Steel tube and flat bar, glass or mesh infill options', turnaround: '3 – 5 days per opening', img: unsplash('photo-1767460759175-2a45d945595b'), gallery: [unsplash('photo-1767460759175-2a45d945595b')] },
  { slug: 'pergolas', title: 'Pergolas', icon: 'TreePine', short: 'Steel-framed pergolas for patios, driveways and gardens.', description: 'Structural steel pergolas built to carry climbing plants, shade cloth, or a slatted roof. Frames are fully welded on site or in-shop, then primed and painted to resist rust through the rainy season.', material: 'Steel tube frame, painted or galvanized finish', turnaround: '5 – 10 days depending on span', img: pergolaReal, gallery: [pergolaReal] },
  { slug: 'gazebos', title: 'Gazebos', icon: 'Tent', short: 'Freestanding steel gazebos for outdoor seating areas.', description: 'Fully welded gazebo frames sized to your outdoor space, finished with a steel or iron-sheet roof. A solid option for garden seating areas, event spaces, or shaded parking.', material: 'Steel frame with iron-sheet or tile roofing', turnaround: '7 – 12 days depending on size', img: gazeboReal, gallery: [gazeboReal] },
  { slug: 'steel-roofing', title: 'Steel Roofing', icon: 'Warehouse', short: 'Roof trusses and iron-sheet roofing for homes and sheds.', description: 'Steel roof trusses fabricated to span and load specification, installed with proper bracing and finished with iron-sheet or box-profile roofing sheets.', material: 'Steel truss sections, iron sheets (gauge 28–30)', turnaround: 'Quoted per span and roof area', img: steelroofingReal, gallery: [steelroofingReal] },
  { slug: 'cow-sheds', title: 'Cow Sheds', icon: 'Building2', short: 'Steel-framed cow sheds and farm structures, built to last.', description: 'Practical steel-framed cow sheds sized to herd count, with drainage-friendly layout and roofing suited to the local climate. Built for durability with minimal upkeep.', material: 'Steel frame, iron-sheet roofing, timber or steel slats', turnaround: 'Quoted per structure size', img: unsplash('photo-1526634140919-468dc3ae3870'), gallery: [unsplash('photo-1526634140919-468dc3ae3870')] },
  { slug: 'staircases', title: 'Staircases', icon: 'MoveUp', short: 'Steel staircases, spiral or straight-run, indoor or outdoor.', description: 'Structural steel staircases fabricated to fit your stairwell exactly — straight-run, dog-leg, or spiral — with steel or timber treads and a welded balustrade finished to match your interior.', material: 'Steel stringers, steel or timber treads, painted or galvanized', turnaround: '5 – 9 days depending on design', img: staircaseReal, gallery: [staircaseReal] },
  { slug: 'water-towers', title: 'Water Towers', icon: 'Droplets', short: 'Steel water tank stands built to safely carry full load.', description: 'Engineered steel tank stands sized to your tank capacity, with cross-bracing calculated for full-load stability. Painted with rust-resistant coating for long outdoor life.', material: 'Steel angle/tube frame, rust-resistant paint finish', turnaround: 'Quoted per tank size and stand height', img: watertowerReal, gallery: [watertowerReal] },
  { slug: 'house-painting', title: 'House Painting', icon: 'PaintRoller', short: 'Interior and exterior painting, done clean and on schedule.', description: 'Full-service house painting — surface preparation, priming, and finish coats for interior walls or full exterior repaints. We work with your chosen colour scheme or advise based on your finishes.', material: 'Weatherguard / matte emulsion, primer as required', turnaround: 'Quoted per room / per square metre', img: unsplash('photo-1574359411659-15573a27fd0c'), gallery: [unsplash('photo-1574359411659-15573a27fd0c'), unsplash('photo-1742900280864-bcc27353ceba'), unsplash('photo-1717281234297-3def5ae3eee1')] },
]

export const process = [
  { title: 'Job Intake', description: 'Send your details, measurements, and reference photos via WhatsApp or the quote form.' },
  { title: 'Quote', description: 'You get a clear price and timeline before any work begins — no surprises.' },
  { title: 'Build', description: 'Fabrication and painting done in-shop or on site, with progress photos sent as we go.' },
  { title: 'Install', description: 'Final delivery and installation, checked with you before we call the job done.' },
]

export const testimonials = [
  { name: 'J. Mwangi', location: 'Nakuru', quote: 'The sliding gate they built for our compound has held up perfectly for over a year — clean weld work and the paint hasn\u2019t chipped.' },
  { name: 'S. Wanjiru', location: 'Njoro', quote: 'Had our whole house repainted and a staircase rebuilt in the same week. Both jobs were done on the timeline we agreed.' },
  { name: 'D. Otieno', location: 'Nakuru', quote: 'Ordered a cow shed frame for the farm. Solid steel work, and they were upfront about cost from the first conversation.' },
]

export const faqs = [
  { q: 'Do you travel outside Nakuru for jobs?', a: 'Yes. We take jobs across the wider region — travel and accommodation for out-of-town jobs is factored into the quote.' },
  { q: 'How does payment work?', a: 'A deposit secures materials and scheduling, with the balance paid on completion and your approval of the finished work.' },
  { q: 'Can I send a photo of a design I like instead of describing it?', a: 'Yes — reference photos are the fastest way to get an accurate quote. Send them along with rough measurements.' },
  { q: 'Do you offer any warranty on the welding or paint work?', a: 'Structural welds and paint finish are covered against workmanship defects for a period after handover — ask us for the specifics for your job type.' },
  { q: 'How long does a typical gate take?', a: 'Most gates are ready within 3–7 days from confirmed measurements and deposit, depending on size and design complexity.' },
]

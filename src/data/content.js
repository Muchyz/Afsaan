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
  { slug: 'sliding-gates', title: 'Sliding Gates', icon: 'MoveHorizontal', short: 'Space-saving steel sliding gates built for daily use.', description: 'Heavy-duty sliding gates fabricated from steel box sections, finished smooth and painted to match your compound. Built with reinforced rollers and track systems for long-term, low-maintenance operation, with the option to add an automated opener.', material: 'Steel box section, 2mm–3mm gauge, primed and painted', turnaround: '4 – 7 days depending on size', category: 'fabrication', img: slidingGateReal, gallery: [slidingGateReal, unsplash('photo-1580047750144-2c7790adf461')] },
  { slug: 'swing-gates', title: 'Swing Gates', icon: 'DoorOpen', short: 'Classic double or single swing gates with custom patterns.', description: 'Traditional swing gates, built single or double leaf, in flat-bar, tube, or sheet-clad designs. Every gate is custom-measured on site and hung on heavy-duty hinges rated for daily opening and closing.', material: 'Mild steel flat bar / box section, welded and painted', turnaround: '3 – 6 days depending on size', category: 'fabrication', img: swingGateReal, gallery: [swingGateReal, unsplash('photo-1695559557666-d1b86621b5e4')] },
  { slug: 'modern-doors-windows', title: 'Modern Doors & Windows', icon: 'LayoutGrid', short: 'Steel-framed doors and window grills, security and style in one.', description: 'Custom steel doors and burglar-proof window grills designed to match modern house finishes — slim profiles, clean welds, and a powder-smooth painted finish rather than the bulky grill look.', material: 'Steel tube and flat bar, glass or mesh infill options', turnaround: '3 – 5 days per opening', category: 'fabrication', img: doorsReal, gallery: [doorsReal] },
  { slug: 'pergolas', title: 'Pergolas', icon: 'TreePine', short: 'Steel-framed pergolas for patios, driveways and gardens.', description: 'Structural steel pergolas built to carry climbing plants, shade cloth, or a slatted roof. Frames are fully welded on site or in-shop, then primed and painted to resist rust through the rainy season.', material: 'Steel tube frame, painted or galvanized finish', turnaround: '5 – 10 days depending on span', category: 'fabrication', img: pergolaReal, gallery: [pergolaReal] },
  { slug: 'gazebos', title: 'Gazebos', icon: 'Tent', short: 'Freestanding steel gazebos for outdoor seating areas.', description: 'Fully welded gazebo frames sized to your outdoor space, finished with a steel or iron-sheet roof. A solid option for garden seating areas, event spaces, or shaded parking.', material: 'Steel frame with iron-sheet or tile roofing', turnaround: '7 – 12 days depending on size', category: 'fabrication', img: gazeboReal, gallery: [gazeboReal] },
  { slug: 'steel-roofing', title: 'Steel Roofing', icon: 'Warehouse', short: 'Roof trusses and iron-sheet roofing for homes and sheds.', description: 'Steel roof trusses fabricated to span and load specification, installed with proper bracing and finished with iron-sheet or box-profile roofing sheets.', material: 'Steel truss sections, iron sheets (gauge 28–30)', turnaround: 'Quoted per span and roof area', category: 'fabrication', img: steelroofingReal, gallery: [steelroofingReal] },
  { slug: 'cow-sheds', title: 'Cow Sheds', icon: 'Building2', short: 'Steel-framed cow sheds and farm structures, built to last.', description: 'Practical steel-framed cow sheds sized to herd count, with drainage-friendly layout and roofing suited to the local climate. Built for durability with minimal upkeep.', material: 'Steel frame, iron-sheet roofing, timber or steel slats', turnaround: 'Quoted per structure size', category: 'fabrication', img: cowshedReal, gallery: [cowshedReal] },
  { slug: 'staircases', title: 'Staircases', icon: 'MoveUp', short: 'Steel staircases, spiral or straight-run, indoor or outdoor.', description: 'Structural steel staircases fabricated to fit your stairwell exactly — straight-run, dog-leg, or spiral — with steel or timber treads and a welded balustrade finished to match your interior.', material: 'Steel stringers, steel or timber treads, painted or galvanized', turnaround: '5 – 9 days depending on design', category: 'fabrication', img: staircaseReal, gallery: [staircaseReal] },
  { slug: 'water-towers', title: 'Water Towers', icon: 'Droplets', short: 'Steel water tank stands built to safely carry full load.', description: 'Engineered steel tank stands sized to your tank capacity, with cross-bracing calculated for full-load stability. Painted with rust-resistant coating for long outdoor life.', material: 'Steel angle/tube frame, rust-resistant paint finish', turnaround: 'Quoted per tank size and stand height', category: 'fabrication', img: watertowerReal, gallery: [watertowerReal] },
  { slug: 'gate-painting', title: 'Gate Painting', icon: 'PaintRoller', short: 'Full respray and touch-up painting for steel gates.', description: "Professional gate painting, whether it's a full re-spray on a faded gate or fresh paint on one we just fabricated. Rust treatment, primer, and a durable topcoat that holds up through the rainy season.", material: 'Rust-inhibiting primer, weather-resistant enamel or spray paint', turnaround: '1 – 2 days depending on gate size', category: 'painting', img: gatepaintingReal, gallery: [gatepaintingReal] },
  { slug: 'house-painting', title: 'House Painting', icon: 'Home', short: 'Interior and exterior house painting, full or touch-up.', description: 'Complete house painting covering exterior walls, interior rooms, and trim work. We handle surface prep, crack filling, and priming before applying quality paint for a long-lasting, even finish.', material: 'Weatherguard exterior paint or matte/silk interior emulsion', turnaround: '3 – 10 days depending on house size', category: 'painting', img: housepaintingReal, gallery: [housepaintingReal] },
  { slug: 'container-painting', title: 'Container Painting', icon: 'Package', short: 'Repainting and rust treatment for shipping containers.', description: 'Container painting for shops, offices, and storage units — full rust removal, primer, and a durable industrial-grade topcoat that stands up to sun and rain, plus custom colour and branding on request.', material: 'Rust converter, epoxy primer, industrial enamel', turnaround: '2 – 4 days per container', category: 'painting', img: containerpaintingReal, gallery: [containerpaintingReal] },
  { slug: 'fence-railing-painting', title: 'Fence & Railing Painting', icon: 'Paintbrush', short: 'Fresh paint and rust protection for steel fences and railings.', description: 'Fence and railing painting to stop rust in its tracks and keep your compound looking sharp — wire brush prep, rust primer, and a clean topcoat finish on gates, grills, and boundary fencing.', material: 'Rust-inhibiting primer, enamel paint', turnaround: '1 – 3 days depending on length', category: 'painting', img: fencepaintingReal, gallery: [fencepaintingReal] },
  { slug: 'roof-painting', title: 'Roof Painting', icon: 'SprayCan', short: 'Iron-sheet and box-profile roof painting and rust treatment.', description: 'Roof painting to extend the life of ageing iron sheets — rust treatment, primer, and heat-reflective or standard roofing paint applied for a weatherproof finish that holds colour through the seasons.', material: 'Rust converter, roofing primer, heat-reflective or standard roof paint', turnaround: '2 – 5 days depending on roof area', category: 'painting', img: roofpaintingReal, gallery: [roofpaintingReal] },
  { slug: 'steel-structure-painting', title: 'Steel Structure Painting', icon: 'Palette', short: 'Industrial painting for warehouses, sheds, and steel frames.', description: 'Large-scale steel structure painting for warehouses, workshops, and farm buildings — full surface prep, anti-corrosion primer, and industrial coating applied by hand or spray for long-term protection.', material: 'Anti-corrosion primer, industrial-grade enamel or spray coating', turnaround: 'Quoted per structure size', category: 'painting', img: steelstructurepaintingReal, gallery: [steelstructurepaintingReal] },
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

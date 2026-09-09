import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react'
import logo from '../../assets/images/logo.png'
import { business } from '../../data/content'

const quickLinks = [
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/faq', label: 'FAQ' },
]

const getStartedLinks = [
  { to: '/quote', label: 'Request a Quote' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/about', label: 'About Us' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white relative">
      <div className="h-1 w-full bg-gradient-to-r from-brandred via-sky to-brandred" />

      <div className="max-w-7xl mx-auto px-6 py-10 md:py-16 grid gap-10 md:gap-12 md:grid-cols-4">
        <div className="text-center md:text-left pb-8 md:pb-0 border-b border-white/10 md:border-0">
          <img
            src={logo}
            alt="Afsaan Welders & Painters"
            className="h-24 md:h-28 w-auto mx-auto md:mx-0 mb-3"
          />
          <p className="text-sm text-gray-300 leading-relaxed max-w-xs mx-auto md:max-w-none md:mx-0">
            Steel fabrication and painting for homes, farms, and compounds across {business.location}.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-3 mt-4">
            <a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              className="w-8 h-8 rounded-full flex items-center justify-center transition hover:scale-110" style={{ background: '#25D366' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
            </a>
            <a href="https://www.instagram.com/afsaan_weldersnpainters" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="w-8 h-8 rounded-full flex items-center justify-center transition hover:scale-110" style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
              </svg>
            </a>
            <a href={`tel:${business.phone}`} aria-label="Phone"
              className="w-8 h-8 rounded-full flex items-center justify-center transition hover:scale-110" style={{ background: '#1C8FD6' }}>
              <Phone size={14} color="white" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sky uppercase tracking-wide text-sm">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-gray-300">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all duration-200">
                  <ChevronRight size={14} className="text-brandred" /> {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sky uppercase tracking-wide text-sm">Get Started</h4>
          <ul className="space-y-2.5 text-sm text-gray-300">
            {getStartedLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all duration-200">
                  <ChevronRight size={14} className="text-brandred" /> {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sky uppercase tracking-wide text-sm">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-center gap-3">
              <span className="bg-white/10 p-2 rounded-full"><Phone size={15} className="text-sky" /></span>
              {business.phone}
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-white/10 p-2 rounded-full"><Mail size={15} className="text-sky" /></span>
              @afsaan_weldersnpainters
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-white/10 p-2 rounded-full mt-0.5"><MapPin size={15} className="text-sky" /></span>
              <span>{business.location}<br />{business.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 text-center text-xs text-gray-400 py-5">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </div>
    </footer>
  )
}

import { MessageCircle } from 'lucide-react'
import { business } from '../../data/content'

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${business.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <MessageCircle size={24} strokeWidth={2.2} />
    </a>
  )
}

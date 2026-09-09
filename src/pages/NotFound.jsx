import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-extrabold text-6xl text-brandred">404</p>
      <p className="mt-3 text-base text-navy">This page hasn't been fabricated yet.</p>
      <Link to="/" className="btn-outline mt-6"><ArrowLeft size={15} /> Back to home</Link>
    </div>
  )
}

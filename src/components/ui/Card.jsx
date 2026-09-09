export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-sm border border-slate/10 ${className}`}>
      {children}
    </div>
  )
}

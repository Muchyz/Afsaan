export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-xl overflow-hidden shadow-lg shadow-slate/10 border border-slate/5 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${className}`}>
      {children}
    </div>
  )
}

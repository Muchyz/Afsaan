import { Link } from 'react-router-dom'

export default function Button({ to, href, variant = 'primary', className = '', children, ...props }) {
  const base = variant === 'primary' ? 'btn-primary' : 'btn-outline'
  const cls = [base, className].filter(Boolean).join(' ')
  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>
  if (href) return <a href={href} className={cls} {...props}>{children}</a>
  return <button className={cls} {...props}>{children}</button>
}

export default function SectionHeading({ eyebrow, title, subtitle, center = true, light = false }) {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className={`font-semibold uppercase tracking-wide text-sm mb-2 ${light ? 'text-sky' : 'text-brandred'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl md:text-5xl font-extrabold mb-4 leading-tight ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      <div className={`fingerprint-divider mb-4 ${center ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className={`max-w-2xl mx-auto ${light ? 'text-gray-300' : 'text-slate'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

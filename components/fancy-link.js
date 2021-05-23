import Link from 'next/link'
import LinkSquiggle from '../icons/link-squiggle'

export default function FancyLink( {href, a11yText, label, extraClasses} ) {
  return (
    <Link href={href}>
      <a aria-label={a11yText} className={`relative inline-block text-current font-bold pb-[10px] ring-white ${extraClasses}`}>
        <span className="block">{label ? label : 'Learn More'}</span>
        <LinkSquiggle width="absolute bottom-0 left-0 w-full block"/>
      </a>
    </Link>
  )
}
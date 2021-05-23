import Link from 'next/link'

export default function Button({ href, children, white, opaque, narrow, overrideClasses }) {
  let theme = 'bg-blue text-white ring-blue'
  let spacing = 'px-4 md:px-6 py-2'

  if (white) {
    theme = 'bg-white text-blue ring-white'
  } else if (opaque) {
    theme = 'bg-transparent text-current ring-current'
  }

  if (narrow) {
    spacing = 'px-3 py-2'
  }
  return (
    <Link href={href}>
      <a className={`rounded-full text-center inline-block font-bold ${theme} ${spacing} ${overrideClasses}`}>{children}</a>
    </Link>
  )
}
import Link from 'next/link'

export default function Button({ href, children, white, opaque, narrow, overrideClasses }) {
  let theme = 'bg-blue text-white ring-blue'
  let spacing = 'px-4 md:px-6 py-2'

  if (white) {
    theme = 'bg-white text-blue ring-white hover:text-white'
  } else if (opaque) {
    theme = 'bg-transparent text-current ring-current'
  }

  if (narrow) {
    spacing = 'px-4 md:px-4 py-2'
  }
  return (
    <Link href={href}>
      <a className={`rounded-full text-center inline-block font-bold group relative overflow-hidden transition-colors ease-in-out duration-500 ${theme} ${spacing} ${overrideClasses}`}>
        <span className="block relative z-10">{children}</span>
        <div className="absolute bottom-0 left-0 w-full h-0 bg-black group-hover:h-full group-focus:h-full transition-all ease-in-out duration-500 z-0"></div>
      </a>
    </Link>
  )
}
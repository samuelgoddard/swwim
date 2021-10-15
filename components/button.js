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
    <div className={`inline-block p-px overflow-hidden relative mb-0 pb-0 ${overrideClasses}`}>
      <Link href={href}>
        <a className={`rounded-full text-center inline-block font-bold group transition-colors ease-in-out duration-500 ${theme} ${spacing}`}>
          <span className="block relative z-10">{children}</span>
          <div className="absolute bottom-0 left-0 w-full h-0 bg-blue-dark group-hover:h-full group-focus:h-full transition-all ease-in-out duration-500 z-0 scale-110 rounded-full"></div>
        </a>
      </Link>
    </div>
  )
}
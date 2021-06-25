import { useContext } from 'react'
import { SmoothScrollContext } from '../contexts/SmoothScroll.context'

export default function ScrollToContent() {
  const { scroll } = useContext(SmoothScrollContext)

  const goToContent = event => {
    event.preventDefault()
    scroll && scroll.scrollTo('#intro-area', -100, null, 250)
  }

  return (
    <button onClick={goToContent} className="flex space-x-3 items-center mb-3 ring-white group">
      <svg className="group-hover:scale-125 transition ease-in-out duration-300 w-8 transform rotate-180" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity=".324" cx="17.5" cy="17.5" r="16.5" transform="rotate(-180 17.5 17.5)" stroke="currentColor" strokeWidth="1.12"/><path d="M24 16.57l-6.188-6.232-6.188 6.231M17.812 10.338V25" stroke="currentColor" strokeWidth="1.008"/></svg>

      <span className="block font-medium">Dive right in</span>
    </button>
  )
}
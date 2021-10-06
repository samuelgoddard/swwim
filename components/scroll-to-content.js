import { useContext } from 'react'
import { SmoothScrollContext } from '../contexts/SmoothScroll.context'

export default function ScrollToContent() {
  const { scroll } = useContext(SmoothScrollContext)

  const goToContent = event => {
    event.preventDefault()
    scroll && scroll.scrollTo('#intro-area', -100, null, 250)
  }

  return (
    <button onClick={goToContent} className="flex space-x-3 items-center ring-white group">
      <span className="border border-white border-opacity-50 rounded-full relative overflow-hidden group-hover:border-opacity-100 ease-in-out transition-all duration-500">
        <svg className="absolute top-0 left-0 -translate-y-12 group-hover:translate-y-0 transition ease-in-out duration-500 w-8 transform rotate-180" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 16.57l-6.188-6.232-6.188 6.231M17.812 10.338V25" stroke="currentColor" strokeWidth="1.008"/></svg>

        <svg className="group-hover:translate-y-12 transition ease-in-out duration-500 w-8 transform rotate-180" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 16.57l-6.188-6.232-6.188 6.231M17.812 10.338V25" stroke="currentColor" strokeWidth="1.008"/></svg>
      </span>

      <span className="block font-medium">Dive right in</span>
    </button>
  )
}
import { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './button'
import Container from './container'
import Logo from './logo'
import Socials from './socials'
import { SmoothScrollContext } from '../contexts/SmoothScroll.context'

export default function Footer({ contact }) {
  const { scroll } = useContext(SmoothScrollContext)

  const goToTop = event => {
    event.preventDefault()
    scroll && scroll.scrollTo(0)
  }

  return (
    <footer className="bg-blue-dark bg-noise text-white">
      {contact?.socialLinks.map((item, i) => {
        return (
          <div key={i}>
            {item.title == 'instagram' || item.title == 'Instagram' && (
              <div className="bg-blue-light bg-noise py-6 2xl:py-8">
                <Container>
                  <div className="flex flex-wrap items-center relative z-10">
                    <span className="block flex-1 text-xl md:text-2xl 2xl:text-3xl font-bold pr-6 md:pr-0">Soak up the latest from Swwim <a href={item.url} target="_blank" rel="noopener noreferer" className="w-full md:w-auto text-sm md:text-xl 2xl:text-2xl font-medium block md:hidden mt-2">@weswwim</a></span>
                    
                    
                    <div className="md:flex md:flex-wrap w-auto ml-auto items-center">
                      <a href={item.url} target="_blank" rel="noopener noreferer" className="w-full md:w-auto text-sm md:text-xl 2xl:text-2xl font-medium hidden md:block mr-5">@weswwim</a>

                      <a href={item.url} target="_blank" rel="noopener noreferer" className="bg-blue-dark bg-noise w-20 md:w-24 h-20 md:h-24 flex items-center justify-center mb-1 md:mb-0">
                        <Logo width="w-8/12" />
                      </a>
                    </div>
                  </div>
                </Container>  
              </div>
            )}
          </div>
        )
      })}

      <Container>
        <div className="py-8 md:py-12 2xl:py-16 relative z-10">
          <div className="flex flex-wrap items-center pb-6 md:pb-10 2xl:pb-12">
            <Link href="/">
              <a aria-label="Navigate to the home page" className="block py-2 ring-white">
                <Logo width="w-24 md:w-28 2xl:w-32" />
              </a>
            </Link>

            <button onClick={goToTop} className="block rounded-full ml-auto ring-white transform hover:scale-125 transition ease-in-out duration-300">
              <svg className="w-10" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity=".324" cx="17.5" cy="17.5" r="16.5" transform="rotate(-180 17.5 17.5)" stroke="currentColor" strokeWidth="1.12"/><path d="M24 16.57l-6.188-6.232-6.188 6.231M17.812 10.338V25" stroke="currentColor" strokeWidth="1.008"/></svg>
            </button>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full md:w-7/12 lg:w-5/12 min-h-full flex flex-wrap">
              <span className="block mb-4 md:mb-6 w-full">
                <span className="block text-2xl md:text-3xl 2xl:text-4xl font-bold">Got a project?</span>
                <span className="block text-2xl md:text-3xl 2xl:text-4xl font-medium mb-4 md:mb-6">Start a conversation</span>
                
                <div className="mb-12 md:mb-12 lg:mb-56 2xl:mb-64">
                  <Button white overrideClasses="mb-5 text-blue-dark" href="/contact">Contact Us</Button>
                  {contact && (
                    <>
                      {contact.socialLinks && (
                        <div className="mb-auto">
                          <Socials links={contact.socialLinks} />
                        </div>
                      )}
                    </>
                  )}
                </div>
              </span>

              <div className="hidden md:block lg:flex flex-wrap lg:space-x-6 w-full self-end">
                <span className="block opacity-60">&copy; { new Date().getFullYear() } Swwim</span>              
                <Link href="/legal"><a className="block opacity-60 hover:opacity-100 focus:opacity-100 ring-white">Legal Information</a></Link>
                <span className="block opacity-60">Site by Joel &amp; Sam</span>
              </div>
            </div>
            <div className="w-full md:w-5/12 lg:w-7/12">
              <div className="flex flex-wrap mb-12 md:mb-0 max-w-3xl">
                <div className="w-full lg:w-1/3 mb-5 lg:mb-0">
                  <span className="block text-lg md:text-xl 2xl:text-2xl font-bold mb-3 md:mb-6">Browse</span>
                  <nav>
                    <ul>
                      <li className="block mb-1"><Link href="/about"><a className="inline-block opacity-60 hover:opacity-100 focus:opacity-100 font-medium ring-white">About</a></Link></li>
                      <li className="block mb-1"><Link href="/case-studies"><a className="inline-block opacity-60 hover:opacity-100 focus:opacity-100 font-medium ring-white">Case Studies</a></Link></li>
                      <li className="block mb-1"><Link href="/news"><a className="inline-block opacity-60 hover:opacity-100 focus:opacity-100 font-medium ring-white">News</a></Link></li>
                    </ul>
                  </nav>
                </div>

                <div className="w-full lg:w-1/3 mb-5 lg:mb-0">
                  <span className="block text-lg md:text-xl 2xl:text-2xl font-bold mb-3 md:mb-6">Contact</span>
                  <nav>
                    <ul>
                      {contact?.email && (
                        <li className="block mb-1"><a href={`mailto:${contact.email}`} className="inline-block opacity-60 hover:opacity-100 focus:opacity-100 font-medium ring-white">{contact.email}</a></li>
                      )}
                      {contact?.phoneNumber && (
                        <li className="block mb-1"><a href={`tel:${contact.phoneNumber}`} className="inline-block opacity-60 hover:opacity-100 focus:opacity-100 font-medium ring-white">{contact.phoneNumber}</a></li>
                      )}
                    </ul>
                  </nav>
                </div>

                <div className="w-full lg:w-1/3 mb-5 lg:mb-0">
                  {contact?.address && (
                    <>
                      <span className="block text-lg md:text-xl 2xl:text-2xl font-bold mb-3 md:mb-6">Swwim HQ</span>
                      <span className="block opacity-60">{contact.address}</span>
                    </>
                  )}
                </div>

                
                <div className="hidden md:block max-w-[300px] w-1/2 md:w-8/12 ml-auto md:mt-8 lg:mt-16 2xl:mt-20 2xl:-mr-16 md:-mb-3 2xl:-mb-6">
                  <Image width={1128} height={950} layout="responsive" src="/images/drink.webp" alt="placeholder" className="w-full" />
                </div>
              </div>
              
              <div className="flex md:hidden items-end">
                <div className="">
                  <span className="block text-sm opacity-60 mb-1">&copy; { new Date().getFullYear() } Swwim</span>
                  <Link href="/legal"><a className="block text-sm opacity-60 hover:opacity-100 focus:opacity-100 mb-1 ring-white">Legal Information</a></Link>
                  <span className="block text-sm opacity-60 mb-1">Site by Joel &amp; Sam</span>
                </div>

                <div className="block md:hidden w-5/12 md:w-full ml-auto -mb-3">
                  <Image width={1128} height={950} layout="responsive" src="/images/drink.webp" alt="placeholder" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
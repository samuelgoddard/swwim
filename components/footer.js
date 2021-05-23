import Link from 'next/link'
import Button from './button'
import Container from './container'
import Logo from './logo'

export default function Footer() {
  return (
    <footer className="bg-blue-dark bg-noise text-white">
      <div className="bg-blue-light py-8 md:py-12 2xl:py-16">
        <Container>
          <div className="flex flex-wrap items-center">
            <span className="block w-full md:w-auto text-xl md:text-2xl 2xl:text-3xl font-bold">Soak up the latest from Swwim</span>
            
            <span className="md:ml-auto block w-full md:w-auto text-base md:text-xl 2xl:text-2xl font-medium">@weswwim</span>
          </div>
        </Container>  
      </div>

      <Container>
        <div className="py-8 md:py-12 2xl:py-16">
          <div className="flex flex-wrap items-center pb-6 md:pb-10 2xl:pb-12">
            <Link href="/">
              <a aria-label="Navigate to the home page" className="block py-2 ring-white">
                <Logo width="w-24 md:w-28 2xl:w-32" />
              </a>
            </Link>

            <a href="#" className="block rounded-full ml-auto ring-white">
              <svg className="w-10" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity=".324" cx="17.5" cy="17.5" r="16.5" transform="rotate(-180 17.5 17.5)" stroke="currentColor" strokeWidth="1.12"/><path d="M24 16.57l-6.188-6.232-6.188 6.231M17.812 10.338V25" stroke="currentColor" strokeWidth="1.008"/></svg>
            </a>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full md:w-7/12 lg:w-5/12">
              <span className="block text-2xl md:text-3xl 2xl:text-4xl mb-4 md:mb-6">
                <span className="block font-bold">Got a project?</span>
                <span className="block font-medium">Start a conversation</span>
              </span>

              <Button white overrideClasses="mb-12 md:mb-12 lg:mb-56 2xl:mb-64 text-blue-dark" href="/">Contact Us</Button>

              <div className="hidden md:block lg:flex flex-wrap lg:space-x-6">
                <span className="block opacity-60">&copy; { new Date().getFullYear() } Swwim</span>              
                <Link href="/"><a className="block opacity-60 hover:opacity-100 focus:opacity-100">Legal Information</a></Link>
                <span className="block opacity-60">Site by Joel &amp; Sam</span>
              </div>
            </div>
            <div className="w-full md:w-5/12 lg:w-7/12">
              <div className="flex flex-wrap mb-12 md:mb-0 max-w-3xl">
                <div className="w-full lg:w-1/3 mb-5 lg:mb-0">
                  <span className="block text-lg md:text-xl 2xl:text-2xl font-bold mb-3 md:mb-6">Browse</span>
                  <nav>
                    <ul>
                      <li className="block mb-1"><Link href="/"><a className="inline-block opacity-60 hover:opacity-100 focus:opacity-100 font-medium ring-white">About</a></Link></li>
                      <li className="block mb-1"><Link href="/"><a className="inline-block opacity-60 hover:opacity-100 focus:opacity-100 font-medium ring-white">Case Studies</a></Link></li>
                      <li className="block mb-1"><Link href="/"><a className="inline-block opacity-60 hover:opacity-100 focus:opacity-100 font-medium ring-white">Blog</a></Link></li>
                    </ul>
                  </nav>
                </div>

                <div className="w-full lg:w-1/3 mb-5 lg:mb-0">
                  <span className="block text-lg md:text-xl 2xl:text-2xl font-bold mb-3 md:mb-6">Contact</span>
                  <nav>
                    <ul>
                      <li className="block mb-1"><a href="mailto:hello@weswimm.co.uk" className="inline-block opacity-60 hover:opacity-100 focus:opacity-100 font-medium ring-white">hello@weswwim.co.uk</a></li>
                      <li className="block mb-1"><a href="tel:+4477777777" className="inline-block opacity-60 hover:opacity-100 focus:opacity-100 font-medium ring-white">+44 7777 7777</a></li>
                      <li className="block mb-1"><Link href="/"><a className="inline-block opacity-60 hover:opacity-100 focus:opacity-100 font-medium ring-white">Blog</a></Link></li>
                    </ul>
                  </nav>
                </div>

                <div className="w-full lg:w-1/3 mb-5 lg:mb-0">
                  <span className="block text-lg md:text-xl 2xl:text-2xl font-bold mb-3 md:mb-6">Swwim HQ</span>

                  <span className="block opacity-60">Victory Business Centre</span>
                  <span className="block opacity-60">Portsmouth</span>
                  <span className="block opacity-60">PO30 132</span>
                </div>
              </div>
              
              <div className="block md:hidden">
                <span className="block text-sm opacity-60 mb-1">&copy; { new Date().getFullYear() } Swwim</span>
                <Link href="/"><a className="block text-sm opacity-60 hover:opacity-100 focus:opacity-100 mb-1">Legal Information</a></Link>
                <span className="block text-sm opacity-60 mb-1">Site by Joel &amp; Sam</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
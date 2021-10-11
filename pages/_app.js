import '../styles/main.css'
import Head from 'next/head'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import { Context } from '../contexts/state';
import { useState } from 'react'
import Link from 'next/link'
import Logo from '../components/logo'
import Image from 'next/image'
import LottieTest from '../components/lottie-test'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const popupNavVariant = {
    initial: { opacity: 0 },
    isOpen: { opacity: 1, transition: { type: "easeInOut", duration: 0.35 }},
    exit: { opacity: 0, transition: { type: "easeInOut", duration: 0.35 }}
  };

  const navSlideVariant = {
    initial: { x: "100%" },
    isOpen: { x: "0%", transition: { type: "easeInOut", duration: 0.35 }},
    exit: { x: "100%", transition: { type: "easeInOut", duration: 0.35 }}
  };

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <DefaultSeo
        // REMOVE THIS BEFORE LAUNCH !!!!!!!!!
        // REMOVE THIS BEFORE LAUNCH !!!!!!!!!
        noindex={true}
        // REMOVE THIS BEFORE LAUNCH !!!!!!!!!
        // REMOVE THIS BEFORE LAUNCH !!!!!!!!
        titleTemplate = "%s | Swwim"
        defaultTitle="Social, Digital &amp; Content Creation"
        description="We specialise in influencer marketing, social media, content creation and copywriting. Our experience spans lifestyle, health and beauty and home and interiors."
        openGraph={{
          type: 'website',
          locale: 'en_GB',
          url: 'https://swwim.vercel.app/',
          site_name: 'Swwim',
          images: [
            {
              url: '/images/social-share.jpg',
              width: 800,
              height: 600
            },
          ]
        }}
        twitter={{
          handle: '@weswwim',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      
      { pageProps.preview && <><div className={'fixed bottom-0 w-full p-2 bg-red-500 bg-opacity-100 text-white justify-center flex z-50 uppercase font-medium'}>! Preview Mode Enabled - <a className={'px-1 underline'} href={`/api/exit-preview?currentRoute=${router.route}`}>Click Here To Exit</a> !</div></> }

      <div className="grain fixed inset-0 pointer-events-none z-[10000]"></div>

      <Context.Provider value={[menuIsOpen, setMenuIsOpen]}>
        <AnimatePresence>
          {menuIsOpen && (
            <div className="fixed inset-0 w-full h-full z-40">
              <motion.div 
                initial={"initial"}
                animate={"isOpen"}
                exit={"exit"}
                variants={popupNavVariant}
                className="fixed inset-0 w-full h-full bg-black bg-opacity-80 z-40"
              ></motion.div>

              <div className="flex flex-wrap h-full relative z-50">
                <button
                  className="w-1/12 md:w-4/12 lg:w-1/2 h-full focus:border-none focus:outline-none hover:border-none hover:outline-none"
                  onClick={() => setMenuIsOpen(false)}
                  aria-label="Close Menu"
                >  
                </button>
                
                <motion.div 
                  initial={"initial"}
                  animate={"isOpen"}
                  exit={"exit"}
                  variants={navSlideVariant}
                  className="w-11/12 md:w-8/12 lg:w-1/2 h-full ml-auto"
                >
                  <div className="pt-8 pb-12 md:pt-12 md:pb-16 2xl:pt-16 2xl:pb-20 px-6 md:px-8 2xl:px-20 bg-blue bg-noise text-white h-full flex flex-wrap">

                    <div className="flex flex-wrap items-center relative z-50 w-full mb-auto pb-8 xl:pb-12 max-w-2xl 2xl:pr-8">
                      <Link href="/">
                        <a onClick={() => setMenuIsOpen(false)} aria-label="Navigate to the home page" className="block py-2 ring-white">
                          <Logo width="w-24 md:w-32 2xl:w-40" />
                        </a>
                      </Link>

                      <div className="ml-auto">
                        <div className="flex items-center space-x-1">
                          <Link href="/contact">
                            <a onClick={() => setMenuIsOpen(false)} className={`rounded-full text-center font-bold px-4 md:px-6 py-2 bg-white text-blue hover:text-white ring-blue hidden md:inline-block group relative overflow-hidden transition-colors ease-in-out duration-500`}>
                              <span className="block relative z-10">Contact Us</span>
                              <div className="absolute bottom-0 left-0 w-full h-0 bg-black group-hover:h-full group-focus:h-full transition-all ease-in-out duration-500 z-0"></div>
                            </a>
                          </Link>

                          <button
                            onClick={() => setMenuIsOpen(false)}
                            className="rounded-full text-center block font-bold px-4 md:px-4 py-2 bg-transparent text-white ring-blue group"
                            aria-label="Close Menu"
                          >
                            <div className="flex items-center group-hover:opacity-60 transition-opacity ease-in-out duration-500">
                              <span className="block mr-2">Close</span>
                              <svg className="w-4 transform mt-[3px]" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.305 27.132L26.354 2.084M26.354 27.132L1.306 2.083" stroke="currentColor" strokeWidth="3.24"/></svg>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>

                    <nav className="mb-auto w-full relative z-50 md:pt-20 xl:pt-28">
                      <ul>
                        <li className="block mb-3 md:mb-8 2xl:mb-10">
                          <Link href="/">
                            <a onClick={() => setMenuIsOpen(false)} className={`font-display text-2xl sm:text-3xl md:text-5xl lg:text-5xl 2xl:text-5xl flex items-end text-stroke ${router.asPath === '/' ? 'text-stroke--active' : ''}`}>
                              <span className="block font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold mr-2 sm:mr-4 md:mr-8 mb-[4px] lg:mb-[5px] 2xl:mb-[7px] w-8 md:w-6 lg:w-10">01</span>
                              <span className="block text-stroke__item">Home</span>
                            </a>
                          </Link>
                        </li>
                        <li className="block mb-3 md:mb-8 2xl:mb-10">
                          <Link href="/about">
                            <a onClick={() => setMenuIsOpen(false)} className={`font-display text-2xl sm:text-3xl md:text-5xl lg:text-5xl 2xl:text-5xl flex items-end text-stroke ${router.asPath === '/about' ? 'text-stroke--active' : ''}`}>
                              <span className="block font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold mr-2 sm:mr-4 md:mr-8 mb-[4px] lg:mb-[5px] 2xl:mb-[7px] w-8 md:w-6 lg:w-10">02</span>
                              <span className="block text-stroke__item">About</span>
                            </a>
                          </Link>
                        </li>
                        <li className="block mb-3 md:mb-8 lg:mb-10">
                          <Link href="/case-studies">
                            <a onClick={() => setMenuIsOpen(false)} className={`font-display text-2xl sm:text-3xl md:text-5xl lg:text-5xl 2xl:text-5xl flex items-end text-stroke ${router.asPath.includes('/case-studies') ? 'text-stroke--active' : ''}`}>
                              <span className="block font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold mr-2 sm:mr-4 md:mr-8 mb-[4px] lg:mb-[5px] 2xl:mb-[7px] w-8 md:w-6 lg:w-10">03</span>
                              <span className="block text-stroke__item">Case Studies</span>
                            </a>
                          </Link>
                        </li>
                        <li className="block mb-3 md:mb-8 lg:mb-10">
                          <Link href="/news">
                            <a onClick={() => setMenuIsOpen(false)} className={`font-display text-2xl sm:text-3xl md:text-5xl lg:text-5xl 2xl:text-5xl flex items-end text-stroke ${router.asPath.includes('/news') ? 'text-stroke--active' : ''}`}>
                              <span className="block font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold mr-2 sm:mr-4 md:mr-8 mb-[4px] lg:mb-[5px] 2xl:mb-[7px] w-8 md:w-6 lg:w-10">04</span>
                              <span className="block text-stroke__item">News</span>
                            </a>
                          </Link>
                        </li>
                        <li className="block mb-3 md:mb-8 lg:mb-10">
                          <Link href="/contact">
                            <a onClick={() => setMenuIsOpen(false)} className={`font-display text-2xl sm:text-3xl md:text-5xl lg:text-5xl 2xl:text-5xl flex items-end text-stroke ${router.asPath === '/contact' ? 'text-stroke--active' : ''}`}>
                              <span className="block font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold mr-2 sm:mr-4 md:mr-8 mb-[4px] lg:mb-[5px] 2xl:mb-[7px] w-8 md:w-6 lg:w-10">05</span>
                              <span className="block text-stroke__item">Contact Us</span>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </nav>

                    <div className="flex flex-wrap items-end w-full mt-auto relative z-50 max-w-2xl 2xl:pr-8">
                      <div className="w-auto mt-auto pb-8">

                            <a href="mailto:hello@weswwim.com" className="text-right md:text-left md:text-lg font-medium block w-full md:w-auto order-2 md:order-1 hover:underline focus:underline">hello@weswwim.com</a>
                      </div>

                    </div>
                  </div>

                  <div className="w-full absolute bottom-0 left-0 right-0">
                    <div className="w-full">
                      <LottieTest/>
                      {/* <Image width={741} height={260} layout="responsive" src="/icons/menu-woman.svg" alt="placeholder" className="w-full" /> */}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>
        
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </Context.Provider>
    </>
  )
}
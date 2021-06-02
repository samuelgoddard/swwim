import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from './container'
import Logo from './logo'
import { motion, AnimatePresence } from "framer-motion"
import Socials from './socials'

export default function Header({ theme }) {

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
  
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  let themeColors = 'bg-blue text-white'
  let themeButtonColors = 'bg-white text-blue hover:text-white'

  if (theme == 'white') {
    themeColors = 'bg-white text-blue'
    themeButtonColors = 'bg-blue text-white hover:text-white'
  }

  return (
    <header className={`pt-8 pb-12 md:pt-12 md:pb-16 2xl:pt-16 2xl:pb-20 bg-noise ${themeColors}`}>
      <Container>
        <div className="flex flex-wrap items-center relative z-10">
          <div className="flex flex-wrap items-center">
            <div className={`md:border-r border-opacity-30 mr-5 pr-5 ${ theme == 'white' ? 'border-blue' : 'border-white' }`}>
              <Link href="/">
                <a aria-label="Navigate to the home page" className="block py-2 ring-white">
                  <Logo width="w-24 md:w-32 2xl:w-40" />
                </a>
              </Link>
            </div>

            <span className="text-sm font-medium hidden md:block">Social, Digital &amp; Content Creation</span>
          </div>

          <div className="ml-auto">
            <div className="flex items-center space-x-1">
              {/* <Button white overrideClasses="hidden md:inline-block" href="/">Contact Us</Button> */}

              <Link href="/contact">
                <a className={`rounded-full text-center font-bold px-4 md:px-6 py-2 bg-blue text-white ring-blue hidden md:inline-block group relative overflow-hidden transition-colors ease-in-out duration-500 ${themeButtonColors}`}>
                  <span className="block relative z-10">Contact Us</span>
                  <div className="absolute bottom-0 left-0 w-full h-0 bg-black group-hover:h-full group-focus:h-full transition-all ease-in-out duration-500 z-0"></div>
                </a>
              </Link>
              <button
                onClick={() => setMenuIsOpen(!menuIsOpen)}
                className={`rounded-full text-center inline-block font-bold px-4 md:px-4 py-2 bg-transparent ring-blue ${theme == 'white' ? 'text-blue' : 'text-white'}`}
              >
                <div className="flex items-center">
                  <span className="block mr-2">Menu</span>
                  <svg className="w-6" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.997 10.98c-.52.057-.979-.112-1.288-.476-.323-.386-.42-.934-.272-1.473a.478.478 0 00-.254-.584c-2.135-1.081-3.366.059-4.453 1.064-.755.698-1.467 1.357-2.501 1.47-.521.058-.979-.113-1.286-.477-.324-.386-.427-.936-.271-1.473.114-.394-.221-.567-.256-.584-.533-.27-1.01-.402-1.443-.431-1.299-.09-2.196.74-3.012 1.495-.754.698-1.466 1.357-2.5 1.47-.521.058-.978-.113-1.286-.477-.324-.386-.427-.936-.271-1.473.114-.394-.221-.567-.255-.584-2.134-1.081-3.366.059-4.454 1.064-.754.698-1.466 1.357-2.5 1.47a.5.5 0 00.109.994c1.361-.15 2.269-.989 3.07-1.73.969-.895 1.692-1.558 2.984-1.056-.089.718.103 1.427.552 1.96a2.39 2.39 0 001.857.843 2.8 2.8 0 00.249-.014.516.516 0 00.056-.002c1.361-.15 2.269-.99 3.07-1.73.966-.894 1.688-1.554 2.975-1.06a.067.067 0 00.008.004c-.088.718.104 1.427.553 1.959.459.545 1.124.844 1.857.844.1 0 .2-.006.302-.017 1.363-.15 2.271-.989 3.072-1.73.968-.896 1.692-1.559 2.983-1.056-.088.718.105 1.427.554 1.96a2.391 2.391 0 001.857.843c.1 0 .2-.005.303-.017a.5.5 0 00-.11-.996zM26.997 17.84c-.52.056-.979-.112-1.288-.477-.323-.385-.42-.934-.272-1.473a.478.478 0 00-.254-.584c-2.135-1.081-3.366.059-4.453 1.065-.755.698-1.467 1.356-2.501 1.469-.521.058-.979-.112-1.286-.477-.324-.385-.427-.936-.271-1.473.114-.393-.221-.566-.256-.584-.533-.27-1.01-.401-1.443-.43-1.299-.09-2.196.74-3.012 1.495-.754.698-1.466 1.356-2.5 1.469-.521.058-.978-.112-1.286-.477-.324-.385-.427-.936-.271-1.473.114-.393-.221-.566-.255-.584-2.134-1.08-3.366.059-4.454 1.065-.754.698-1.466 1.356-2.5 1.469a.5.5 0 00.109.994c1.361-.149 2.269-.988 3.07-1.729.969-.896 1.692-1.559 2.984-1.056-.089.718.103 1.427.552 1.959a2.39 2.39 0 001.857.844 2.8 2.8 0 00.249-.014.516.516 0 00.056-.003c1.361-.15 2.269-.989 3.07-1.73.966-.893 1.688-1.553 2.975-1.059a.067.067 0 00.008.003c-.088.718.104 1.428.553 1.96.459.544 1.124.843 1.857.843.1 0 .2-.006.302-.017 1.363-.149 2.271-.989 3.072-1.729.968-.896 1.692-1.559 2.983-1.057-.088.718.105 1.428.554 1.96a2.391 2.391 0 001.857.843c.1 0 .2-.005.303-.016a.5.5 0 00-.11-.996zM26.997 4.121c-.52.056-.979-.112-1.288-.477-.323-.385-.42-.934-.272-1.473a.478.478 0 00-.254-.583c-2.135-1.082-3.366.058-4.453 1.063-.755.699-1.467 1.357-2.501 1.47-.521.058-.979-.112-1.286-.477-.324-.385-.427-.936-.271-1.473.114-.393-.221-.566-.256-.583-.533-.271-1.01-.403-1.443-.431-1.299-.09-2.196.74-3.012 1.494-.754.699-1.466 1.357-2.5 1.47-.521.058-.978-.112-1.286-.477-.324-.385-.427-.936-.271-1.473.114-.393-.221-.566-.255-.583C5.515.506 4.283 1.645 3.195 2.65c-.754.699-1.466 1.357-2.5 1.47a.5.5 0 00.109.994c1.361-.149 2.269-.989 3.07-1.729.969-.896 1.692-1.559 2.984-1.057-.089.718.103 1.427.552 1.96a2.39 2.39 0 001.857.844 2.8 2.8 0 00.249-.014.516.516 0 00.056-.003c1.361-.15 2.269-.989 3.07-1.73.966-.893 1.688-1.554 2.975-1.059a.067.067 0 00.008.003c-.088.719.104 1.427.553 1.96.459.545 1.124.843 1.857.843.1 0 .2-.005.302-.016 1.363-.15 2.271-.99 3.072-1.73.968-.896 1.692-1.559 2.983-1.057-.088.719.105 1.427.554 1.96a2.391 2.391 0 001.857.843c.1 0 .2-.005.303-.016a.5.5 0 00-.11-.996z" fill="currentColor" stroke="currentColor" strokeWidth=".5"/></svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Popup Menu */}
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
                          className="rounded-full text-center block font-bold px-4 md:px-4 py-2 bg-transparent text-white ring-blue"
                          aria-label="Close Menu"
                        >
                          <div className="flex items-center">
                            <span className="block mr-2">Close</span>
                            <svg className="w-4 transform mt-[3px]" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.305 27.132L26.354 2.084M26.354 27.132L1.306 2.083" stroke="currentColor" strokeWidth="3.24"/></svg>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>

                  <nav className="mb-auto w-full relative z-50">
                    <ul>
                      <li className="block mb-3 md:mb-8 2xl:mb-10">
                        <Link href="/">
                          <a onClick={() => setMenuIsOpen(false)} className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-5xl 2xl:text-6xl flex items-end">
                            <span className="block font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold mr-2 sm:mr-4 md:mr-8 mb-[4px] lg:mb-[5px] 2xl:mb-[7px] w-8 md:w-6 lg:w-10">01</span>
                            <span className="block">Home</span>
                          </a>
                        </Link>
                      </li>
                      <li className="block mb-3 md:mb-8 2xl:mb-10">
                        <Link href="/about">
                          <a onClick={() => setMenuIsOpen(false)} className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-5xl 2xl:text-6xl flex items-end">
                            <span className="block font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold mr-2 sm:mr-4 md:mr-8 mb-[4px] lg:mb-[5px] 2xl:mb-[7px] w-8 md:w-6 lg:w-10">02</span>
                            <span className="block">About</span>
                          </a>
                        </Link>
                      </li>
                      <li className="block mb-3 md:mb-8 lg:mb-10">
                        <Link href="/case-studies">
                          <a onClick={() => setMenuIsOpen(false)} className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-5xl 2xl:text-6xl flex items-end">
                            <span className="block font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold mr-2 sm:mr-4 md:mr-8 mb-[4px] lg:mb-[5px] 2xl:mb-[7px] w-8 md:w-6 lg:w-10">03</span>
                            <span className="block">Case Studies</span>
                          </a>
                        </Link>
                      </li>
                      <li className="block mb-3 md:mb-8 lg:mb-10">
                        <Link href="/news">
                          <a onClick={() => setMenuIsOpen(false)} className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-5xl 2xl:text-6xl flex items-end">
                            <span className="block font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold mr-2 sm:mr-4 md:mr-8 mb-[4px] lg:mb-[5px] 2xl:mb-[7px] w-8 md:w-6 lg:w-10">04</span>
                            <span className="block">News</span>
                          </a>
                        </Link>
                      </li>
                      <li className="block md:hidden mb-3 md:mb-8 lg:mb-10">
                        <Link href="/contact">
                          <a onClick={() => setMenuIsOpen(false)} className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-5xl 2xl:text-6xl flex items-end">
                            <span className="block font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold mr-2 sm:mr-4 md:mr-8 mb-[4px] lg:mb-[5px] 2xl:mb-[7px] w-8 md:w-6 lg:w-10">05</span>
                            <span className="block">Contact Us</span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </nav>

                  <div className="flex flex-wrap items-end w-full mt-auto relative z-50 max-w-2xl 2xl:pr-8">
                    <div className="w-auto mt-auto">
                      <div className="md:mb-3">
                        <Socials />
                      </div>

                      <a href="mailto:hello@weswwim.com" className="text-right md:text-left md:text-lg font-medium block w-full md:w-auto order-2 md:order-1">hello@weswwim.com</a>
                    </div>

                    <div className="hidden md:block md:max-w-[280px] w-full md:w-1/2 ml-auto mb-5 md:-mb-3 2xl:-mb-6 order-1 md:order-2">
                      <div className="w-5/12 md:w-9/12 2xl:w-full md:ml-auto">
                        <Image width={1128} height={950} layout="responsive" src="/images/drink.webp" alt="placeholder" className="w-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </header>
  )
}
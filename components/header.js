import { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from './container'
import Logo from './logo'
import { motion, AnimatePresence } from "framer-motion"
import Socials from './socials'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { SmoothScrollContext } from '../contexts/SmoothScroll.context'
import { Context } from "../contexts/state";

gsap.registerPlugin(ScrollTrigger);

export default function Header({ theme, contact, pinned, active }) {

  const { scroll } = useContext(SmoothScrollContext)

  let progressBar = null;
  let [showLogo, setShowLogo] = useState(false)
  
  const [menuIsOpen, setMenuIsOpen] = useContext(Context)

  let themeColors = 'bg-blue text-white'
  let themeButtonColors = 'bg-white text-blue hover:text-white'

  if (theme == 'white') {
    themeColors = 'bg-white text-blue'
    themeButtonColors = 'bg-blue text-white hover:text-white'
  }

  useEffect(() => {
    // progressBar = document.querySelector('.progress-bar__progress')

    if (menuIsOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'auto';
    }

    if (scroll) {
      scroll.on('scroll', ({ limit, scroll }) => {
        const progress = scroll.y / limit.y * 100
        // progressBar.style.width = `${progress}%`

        if (progress > 2) {
          setShowLogo(true)
        } else {
          setShowLogo(false)
        } 
      })
    }
  }, [scroll, showLogo, menuIsOpen])

  // useEffect(() => {    
  //   scroll.on("scroll", ScrollTrigger.update);

  //   ScrollTrigger.scrollerProxy("#scroll-container", {
  //     scrollTop(value) {
  //       return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
  //     },
  //     getBoundingClientRect() {
  //       return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  //     },
  //     pinType: document.querySelector("#scroll-container").style.transform ? "transform" : "fixed"
  //   });

  //   gsap.fromTo('.header', {
  //     autoAlpha: 0
  //   }, {
  //     duration: 0.35, 
  //     autoAlpha: 1,
  //     ease: "power2.easeInOut",
  //     scrollTrigger: {
  //       scroller: "#scroll-container",
  //       start: 'top 0',
  //       scrub: true,
  //       end: 9999,
  //       toggleClass: {className: 'bg-bg-red-500', targets: '.header'}
  //     }
  //   });

  //   ScrollTrigger.addEventListener("refresh", () => scroll.update());
  //   ScrollTrigger.refresh();
  // }, [scroll]);

  return (
    <>
    <header data-scroll data-scroll-sticky data-scroll-position="top" data-scroll-target="#scroll-container" className={`fixed top-0 left-0 right-0 z-30 header ${themeColors} ${pinned ? 'absolute top-0 left-0 right-0 w-full z-20 bg-opacity-0' : 'bg-noise'}`}>
      <div className={`pt-3 pb-3 md:pt-4 md:pb-4 xl:pt-5 xl:pb-5 flex items-center transition-all ease-in-out duration-500 overflow-visible ${showLogo ? 'h-[65px] md:h-[80px] 2xl:h-[90px]' : ' h-[110px] md:h-[140px] 2xl:h-[160px]'}`}>
        <Container>
          <div className="flex flex-wrap items-center relative z-10" id="header-wrap">
            <div className="flex flex-wrap items-center">
              <div className={`md:border-r mr-5 pr-5 transition-all ease-in-out duration-500 ${showLogo ? 'border-opacity-0' : 'border-opacity-30' } ${ theme == 'white' ? 'border-blue' : 'border-white' }`}>
                <Link href="/">
                  <a aria-label="Navigate to the home page" className="block py-2 ring-white">
                    <Logo width={`transition-all ease-in-out duration-500 ${showLogo ? 'w-20 md:w-24 xl:w-32' : 'w-24 md:w-32 xl:w-40' }`} />
                  </a>
                </Link>
              </div>

              <div className="overflow-hidden">
                <span className={`text-sm font-medium hidden md:block transform transition-transform ease-in-out duration-500 ${showLogo ? '-translate-x-full' : 'translate-x-0'}`}>Social, Digital &amp; Content Creation</span>
              </div>
            </div>

            <div className="ml-auto">
              <div className={`flex items-center space-x-1 relative z-10`}>
                {/* <Button white overrideClasses="hidden md:inline-block" href="/">Contact Us</Button> */}

                <Link href="/contact">
                  <a className={`rounded-full text-center font-bold px-4 md:px-6 py-2 bg-blue text-white ring-blue hidden md:inline-block group overflow-hidden transition-colors ease-in-out duration-500 relative z-10 ${themeButtonColors}`}>
                    <span className="block relative z-10">Contact Us</span>
                    <div className="absolute bottom-0 left-0 w-full h-0 bg-black group-hover:h-full group-focus:h-full transition-all ease-in-out duration-500 z-0"></div>
                  </a>
                </Link>
                <button
                  onClick={() => setMenuIsOpen(!menuIsOpen)}
                  className={`rounded-full text-center inline-block font-bold px-4 md:px-4 py-2 bg-transparent ring-blue relative z-10 group ${theme == 'white' ? 'text-blue' : 'text-white'}`}
                >
                  <div className="flex items-center group-hover:opacity-70 transition-opacity ease-in-out duration-500">
                    <span className="block mr-2">Menu</span>
                    <svg className="w-6" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.997 10.98c-.52.057-.979-.112-1.288-.476-.323-.386-.42-.934-.272-1.473a.478.478 0 00-.254-.584c-2.135-1.081-3.366.059-4.453 1.064-.755.698-1.467 1.357-2.501 1.47-.521.058-.979-.113-1.286-.477-.324-.386-.427-.936-.271-1.473.114-.394-.221-.567-.256-.584-.533-.27-1.01-.402-1.443-.431-1.299-.09-2.196.74-3.012 1.495-.754.698-1.466 1.357-2.5 1.47-.521.058-.978-.113-1.286-.477-.324-.386-.427-.936-.271-1.473.114-.394-.221-.567-.255-.584-2.134-1.081-3.366.059-4.454 1.064-.754.698-1.466 1.357-2.5 1.47a.5.5 0 00.109.994c1.361-.15 2.269-.989 3.07-1.73.969-.895 1.692-1.558 2.984-1.056-.089.718.103 1.427.552 1.96a2.39 2.39 0 001.857.843 2.8 2.8 0 00.249-.014.516.516 0 00.056-.002c1.361-.15 2.269-.99 3.07-1.73.966-.894 1.688-1.554 2.975-1.06a.067.067 0 00.008.004c-.088.718.104 1.427.553 1.959.459.545 1.124.844 1.857.844.1 0 .2-.006.302-.017 1.363-.15 2.271-.989 3.072-1.73.968-.896 1.692-1.559 2.983-1.056-.088.718.105 1.427.554 1.96a2.391 2.391 0 001.857.843c.1 0 .2-.005.303-.017a.5.5 0 00-.11-.996zM26.997 17.84c-.52.056-.979-.112-1.288-.477-.323-.385-.42-.934-.272-1.473a.478.478 0 00-.254-.584c-2.135-1.081-3.366.059-4.453 1.065-.755.698-1.467 1.356-2.501 1.469-.521.058-.979-.112-1.286-.477-.324-.385-.427-.936-.271-1.473.114-.393-.221-.566-.256-.584-.533-.27-1.01-.401-1.443-.43-1.299-.09-2.196.74-3.012 1.495-.754.698-1.466 1.356-2.5 1.469-.521.058-.978-.112-1.286-.477-.324-.385-.427-.936-.271-1.473.114-.393-.221-.566-.255-.584-2.134-1.08-3.366.059-4.454 1.065-.754.698-1.466 1.356-2.5 1.469a.5.5 0 00.109.994c1.361-.149 2.269-.988 3.07-1.729.969-.896 1.692-1.559 2.984-1.056-.089.718.103 1.427.552 1.959a2.39 2.39 0 001.857.844 2.8 2.8 0 00.249-.014.516.516 0 00.056-.003c1.361-.15 2.269-.989 3.07-1.73.966-.893 1.688-1.553 2.975-1.059a.067.067 0 00.008.003c-.088.718.104 1.428.553 1.96.459.544 1.124.843 1.857.843.1 0 .2-.006.302-.017 1.363-.149 2.271-.989 3.072-1.729.968-.896 1.692-1.559 2.983-1.057-.088.718.105 1.428.554 1.96a2.391 2.391 0 001.857.843c.1 0 .2-.005.303-.016a.5.5 0 00-.11-.996zM26.997 4.121c-.52.056-.979-.112-1.288-.477-.323-.385-.42-.934-.272-1.473a.478.478 0 00-.254-.583c-2.135-1.082-3.366.058-4.453 1.063-.755.699-1.467 1.357-2.501 1.47-.521.058-.979-.112-1.286-.477-.324-.385-.427-.936-.271-1.473.114-.393-.221-.566-.256-.583-.533-.271-1.01-.403-1.443-.431-1.299-.09-2.196.74-3.012 1.494-.754.699-1.466 1.357-2.5 1.47-.521.058-.978-.112-1.286-.477-.324-.385-.427-.936-.271-1.473.114-.393-.221-.566-.255-.583C5.515.506 4.283 1.645 3.195 2.65c-.754.699-1.466 1.357-2.5 1.47a.5.5 0 00.109.994c1.361-.149 2.269-.989 3.07-1.729.969-.896 1.692-1.559 2.984-1.057-.089.718.103 1.427.552 1.96a2.39 2.39 0 001.857.844 2.8 2.8 0 00.249-.014.516.516 0 00.056-.003c1.361-.15 2.269-.989 3.07-1.73.966-.893 1.688-1.554 2.975-1.059a.067.067 0 00.008.003c-.088.719.104 1.427.553 1.96.459.545 1.124.843 1.857.843.1 0 .2-.005.302-.016 1.363-.15 2.271-.99 3.072-1.73.968-.896 1.692-1.559 2.983-1.057-.088.719.105 1.427.554 1.96a2.391 2.391 0 001.857.843c.1 0 .2-.005.303-.016a.5.5 0 00-.11-.996z" fill="currentColor" stroke="currentColor" strokeWidth=".5"/></svg>
                  </div>
                </button>

                { pinned && (
                  <div className="absolute inset-0 inset-x-[0px] md:inset-x-[40px]">
                    <div className="w-full h-full bg-white z-0 rounded-full transform md:scale-x-[1.75] md:scale-y-[1.75]"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
    {/* Popup Menu */}
  </>
  )
}
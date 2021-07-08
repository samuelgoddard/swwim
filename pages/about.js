import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Container from '../components/container'
import { fade, fadeSmallDelay, revealInNoDelay, revealInLogoNoDelay, revealInLogoMoveNoDelay, textRevealSmallDelay } from "../helpers/transitions"
import { motion } from 'framer-motion'
import AboutCarousel from '../components/about-carousel'
import { NextSeo } from 'next-seo';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SanityPageService from '../services/sanityPageService'
import Logo from '../components/logo'
import ImageWrapper from '../helpers/image-wrapper'
import { SmoothScrollProvider } from '../contexts/SmoothScroll.context'

gsap.registerPlugin(ScrollTrigger);

const query = `{
  "about": *[_type == "about"][0]{
    seo {
      ...,
      shareGraphic {
        asset->
      }
    },
    title,
    introText,
    values,
    heroImageCarousel[] {
      asset->
    },
    inPageImage {
      asset->
    },
    instagramImages[] {
      asset->
    },
  },
  "team": *[_type == "team"] | order(order asc) {
    firstName,
    secondName,
    jobTitle,
    image {
      asset->
    }
  },
  "contact": *[_type == "contact"][0] {
    title,
    email,
    phoneNumber,
    address,
    socialLinks[] {
      title,
      url
    }
  }
}`

const pageService = new SanityPageService(query)

export default function About(initialData) {
  const { data: { about, team, contact }  } = pageService.getPreviewHook(initialData)()

  const revealRefs = useRef(null);

  revealRefs.current = [];

  // useEffect(() => {
  //   revealRefs.current.forEach((el, index) => {
  //     gsap.fromTo(el, {
  //       autoAlpha: 0
  //     }, {
  //       duration: 0.35, 
  //       autoAlpha: 1,
  //       ease: "power2.easeInOut",
  //       scrollTrigger: {
  //         trigger: el,
  //         start: 'top center+=400',
  //         toggleActions: 'play none none reverse'
  //       }
  //     });
  //   });
  // }, []);

  const fadeRevealRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <Layout>
      <NextSeo
        title="About"
      />

      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        className="fixed inset-0 z-[100] pointer-events-none"
      >
        <motion.div variants={revealInLogoNoDelay} className="absolute inset-0 w-full h-full text-white flex items-center justify-center pointer-events-none z-[110]">
          <div className="overflow-hidden">
            <motion.div variants={revealInLogoMoveNoDelay}>
              <Logo width="w-32 md:w-48 xl:w-56" />
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div variants={revealInNoDelay} className="absolute inset-0 w-full h-full bg-blue-dark text-white overflow-visible">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full text-blue-dark absolute top-0 left-0 right-0 mt-[-20vw] will-change">
          <path fill="currentColor" fill-opacity="1" d="M0,224L48,192C96,160,192,96,288,106.7C384,117,480,203,576,224C672,245,768,203,864,170.7C960,139,1056,117,1152,117.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        </motion.div>
      </motion.div>

      <Header contact={contact} active="about" />

      <div data-scroll-container id="scroll-container">
      <SmoothScrollProvider options={{ smooth: true, lerp: 0.07 }}>

      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        className="bg-blue bg-noise text-white overflow-hidden pt-24 md:pt-32 xl:pt-40"
      >
        <motion.div variants={fadeSmallDelay} className="relative z-10">
          <Container>
            <div className="relative mb-16 md:mb-20 2xl:mb-28 mx-[3%] md:mx-[5%] lg:mx-24 2xl:mx-32">
              <div className="block overflow-hidden mb-4 md:mb-6 2xl:mb-8">
                <motion.div variants={textRevealSmallDelay} className="block">
                  <span className="text-xl md:text-2xl 2xl:text-3xl font-display uppercase flex justify-center">
                    <span className="block mx-px animate--letter-float--delay">A</span>
                    <span className="block mx-px animate--letter-float">b</span>
                    <span className="block mx-px animate--letter-float--delay">o</span>
                    <span className="block mx-px animate--letter-float">u</span>
                    <span className="block mx-px animate--letter-float--delay">t</span>
                  </span>
                </motion.div>
              </div>

              <div className="relative">
                <h1 className="font-display uppercase text-[9.7vw] md:text-[6.45vw] lg:text-[5.75vw] 2xl:text-[80px] leading-none relative z-10 text-center block md:hidden">the team behind making communicating your brand a balmy breeze.</h1>

                <h1 className="hidden font-display uppercase text-[9.7vw] md:text-[6.45vw] lg:text-[5.75vw] 2xl:text-[80px] leading-none relative z-10 text-center md:block">
                  <span className="block overflow-hidden">
                    <motion.span variants={textRevealSmallDelay} className="block">the team behind making</motion.span>
                  </span>
                  <span className="block overflow-hidden">
                  <motion.span variants={textRevealSmallDelay} className="block">communicating your</motion.span>
                  </span>
                  <span className="block overflow-hidden">
                  <motion.span variants={textRevealSmallDelay} className="block">brand a balmy breeze.</motion.span>
                  </span>
                </h1>
                
                <div className="absolute bottom-0 right-0 w-[49%] md:w-[32%] mr-[6%] md:mr-[4%] lg:mr-[6%] 2xl:mr-[7%] mb-[-4%] md:mb-[-2%] 2xl:mb-[-3%]">
                  <Image width={369} height={150} layout="responsive" src="/icons/about-header-squiggle.svg" alt="Squiggle Underline" className="w-full" priority />
                </div>
              </div>
            </div>
          </Container>

          <div className="mb-5 md:mb-12 2xl:mb-16">
            <AboutCarousel images={about.heroImageCarousel} />
          </div>

          <Container>
            <div className="relative z-10 overflow-visible pb-24 md:pb-32 lg:pb-36 xl:pb-48 2xl:pb-56">
              <div className="md:mx-[10%] lg:mx-32 xl:mx-40 2xl:mx-56">
                <h2 className="block font-bold text-xl md:text-[2.75vw] 2xl:text-[38px] leading-snug relative mb-5 md:mb-8 2xl:mb-10">{about.introText}</h2>

                <div className="w-full mb-8 md:mb-10 2xl:mb-16">
                  <div className="relative flex overflow-x-hidden">
                    <div className="animate-marquee whitespace-nowrap w-full">
                      <Image width={935} height={8} layout="responsive" src="/icons/about-underline-squiggle.svg" alt="Squiggle Underline" className="w-full ml-[3px]" />
                    </div>

                    <div className="absolute top-0 animate-marquee2 whitespace-nowrap w-full">
                      <Image width={935} height={8} layout="responsive" src="/icons/about-underline-squiggle.svg" alt="Squiggle Underline" className="w-full" />
                    </div>
                  </div>


                </div>

                <div className="flex flex-wrap md:-mx-6">
                  {about.values?.map((value, i) => {
                    return (
                      <div key={i} className="w-10/12 md:w-1/3 pb-6 md:px-6">
                        <span className="text-lg md:text-xl 2xl:text-2xl font-display uppercase block mb-2 md:mb-4 pb-0">{value.heading}</span>
                        <p className="text-sm leading-relaxed block font-medium opacity-90">{value.text}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="w-[55%] md:w-[35%] lg:w-[30%] 2xl:w-[33%] absolute bottom-0 right-0 mr-[-16%] md:mr-[-10%] lg:mr-[-8%] mb-[-18%] md:mb-[-13%] lg:mb-[-12%] 2xl:mr-[-13%] z-0 transform -rotate-12">
                <div className="animate--wave--slow origin-bottom-left" ref={fadeRevealRefs}>
                  <Image width={551} height={555} layout="responsive" src="/icons/plant-3.svg" alt="Plant Illustration" className="w-full transform" />
                </div>
              </div>
            </div>
          </Container>
        </motion.div>
      </motion.section>

      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        className="bg-white bg-noise bg-noise--white text-blue overflow-hidden"
      >
        <Container>
          <motion.div variants={fadeSmallDelay} className="relative z-10 pt-12 md:pt-24 2xl:pt-28">
            <div className="flex flex-wrap justify-center">
              <div className="inline-block mb-8 md:mb-12 2xl:mb-16 relative z-10 max-w-xs md:max-w-xl 2xl:max-w-2xl mx-auto">
                <span className="text-base font-display uppercase flex mb-1 md:mb-2 justify-center">
                  <span className="block animate--letter-float--delay">T</span>
                  <span className="block animate--letter-float">h</span>
                  <span className="block animate--letter-float--delay">e</span>
                  <span className="block animate--letter-float">&nbsp;</span>
                  <span className="block animate--letter-float--delay">T</span>
                  <span className="block animate--letter-float">e</span>
                  <span className="block animate--letter-float--delay">a</span>
                  <span className="block animate--letter-float">m</span>
                </span>
                <h3 className="text-3xl md:text-5xl 2xl:text-6xl font-display uppercase mb-0 pb-0 text-center">A Group Of Like Minded Individuals</h3>
                
                <div className="w-7/12 mr-5 ml-auto">
                  <Image width={400} height={34} layout="responsive" src="/icons/title-swipe.svg" alt="Swipe Underline" className="w-full" />
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 mb-16 md:mb-24 2xl:mb-32 relative z-20 md:mx-16 2xl:mx-24">
              {team?.map((person, i) => {
                return (
                  <div className="w-full mb-3 md:mb-5 2xl:mb-8" key={i}>
                    <div className="border-blue border-2 mb-3 md:mb-4 bg-pink">
                      {person.image && (
                        <div ref={fadeRevealRefs}>
                          <ImageWrapper
                            image={person.image.asset}
                            className="w-full"
                            baseWidth={520}
                            baseHeight={660}
                            alt={`${person.firstName} ${person.secondName}`}
                          />
                        </div>
                      )}
                    </div>

                    <span className="text-lg md:text-xl 2xl:text-2xl font-display block mb-0 pb-0 leading-tight">{person.firstName } { person.secondName }</span>
                    {person.jobTitle && (
                      <span className="text-base font-medium block leading-tight">{person.jobTitle}</span>
                    )}
                  </div>
                )
              })}

              <div className="w-full mb-3 md:mb-5 2xl:mb-8">
                <div className="border-blue border-2 mb-3 md:mb-4 bg-pink">
                  <div ref={fadeRevealRefs}>
                    <Image
                      src={'/images/person-fallback.jpg'}
                      className="w-full"
                      width={520}
                      height={660}
                      layout="responsive"
                      alt="Think you're fit?"
                    />
                  </div>
                </div>

                <span className="text-lg md:text-xl 2xl:text-2xl font-display block mb-0 pb-0 leading-tight">Think you're fit?</span>
                <span className="text-base font-medium block leading-tight">Email us at <a className="underline" href="mailto:careers@weswwim.com">careers@weswwim.com</a></span>
              </div>
            </div>

            <div className="w-[80%] md:w-[60%] 2xl:w-[50%] absolute top-0 md:bottom-0 left-0 ml-[-28%] md:ml-[-20%] mt-[4%] md:mt-[6%] 2xl:mt-[4%] z-0">
              <div className="animate--wave--slow" ref={fadeRevealRefs}>
                <Image width={775} height={1092} layout="responsive" src="/icons/palm-tree.svg" alt="Plant Illustration" className="w-full" />
              </div>
            </div>
          </motion.div>
        </Container>

        <motion.div variants={fadeSmallDelay} className="relative z-10">
          <div className="mb-6 md:mb-12 2xl:mb-16 relative z-10 overflow-hidden">
            <div className="relative flex overflow-x-hidden font-display uppercase text-5xl md:text-[5.5vw] xl:text-[4.5vw] 2xl:text-[80px]">
              <div className="animate-marquee whitespace-nowrap">
                <span className="mx-1">Communicating Your Brand</span>
                <span className="mx-1">&bull;</span>
                <span className="mx-1">Communicating Your Brand</span>
                <span className="mx-1">&bull;</span>
                <span className="mx-1">Communicating Your Brand</span>
                <span className="mx-1">&bull;</span>
              </div>

              <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
              <span className="mx-1">Communicating Your Brand</span>
                <span className="mx-1">&bull;</span>
                <span className="mx-1">Communicating Your Brand</span>
                <span className="mx-1">&bull;</span>
                <span className="mx-1">Communicating Your Brand</span>
                <span className="mx-1">&bull;</span>
              </div>
            </div>
          </div>
          
          {about.inPageImage && (
            <div className="w-full bg-blue">
              <div ref={fadeRevealRefs}>
                <ImageWrapper
                  image={about.inPageImage.asset}
                  className="w-full"
                  baseWidth={1200}
                  baseHeight={600}
                />
              </div>
            </div>
          )}

          <div className="w-full relative">

          <div className="w-[24%] md:w-[20%] absolute top-0 right-0 mr-[-14%] md:mr-[-10%] 2xl:mr-[-9%] mt-[1%] z-0 animate--float" ref={fadeRevealRefs}>
            <Image width={278} height={276} layout="responsive" src="/icons/plant-2.svg" alt="Plant Illustration" className="w-full" />
          </div>

          <div className="w-[65%] md:w-[40%] 2xl:w-[35%] absolute top-0 left-0 ml-[-32%] md:ml-[-18%] 2xl:ml-[-13%] mt-[5%] md:mt-[0%] xl:mt-[0%] z-0 animate--float" ref={fadeRevealRefs}>
            <Image width={551} height={555} layout="responsive" src="/icons/plant-3.svg" alt="Plant Illustration" className="w-full transform rotate-90" />
          </div>
            <Container>
              <div className="relative pt-40 pb-32 md:pb-48 md:pt-56 xl:pb-64 xl:pt-80">
                {/* Top Left */}
                <div className="w-[22vw] md:w-[15vw] h-[22vw] md:h-[15vw] 2xl:w-[270px] 2xl:h-[270px] absolute top-0 top-[10%] left-0 bg-pink border-2 border-blue" ref={fadeRevealRefs}>
                  <ImageWrapper
                    image={about.instagramImages[0].asset}
                    className="w-full h-full"
                    baseWidth={650}
                    baseHeight={650}
                    fill="cover"
                  />
                </div>

                {/* Bottom Left */}
                <div className="w-[15vw] md:w-[12vw] h-[15vw] md:h-[12vw] 2xl:w-[155px] 2xl:h-[155px] absolute bottom-0 bottom-[10%] left-[15%] border-2 border-blue bg-pink" ref={fadeRevealRefs}>
                  <ImageWrapper
                    image={about.instagramImages[1].asset}
                    className="w-full h-full"
                    baseWidth={650}
                    baseHeight={650}
                    fill="cover"
                  />
                </div>

                {/* Bottom Right */}
                <div className="w-[22vw] md:w-[15vw] h-[22vw] md:h-[15vw] 2xl:w-[270px] 2xl:h-[270px] absolute bottom-0 bottom-[10%] right-0 border-2 border-blue bg-pink" ref={fadeRevealRefs}>
                  <ImageWrapper
                    image={about.instagramImages[2].asset}
                    className="w-full h-full"
                    baseWidth={650}
                    baseHeight={650}
                    fill="cover"
                  />
                </div>

                {/* Top Right */}
                <div className="w-[16vw] md:w-[14vw] h-[16vw] md:h-[14vw] 2xl:w-[190px] 2xl:h-[190px] absolute top-0 top-[10%] right-[15%] border-2 border-blue bg-pink" ref={fadeRevealRefs}>
                  <ImageWrapper
                    image={about.instagramImages[3].asset}
                    className="w-full h-full"
                    baseWidth={650}
                    baseHeight={650}
                    fill="cover"
                  />
                </div>

                {/* Just keep swimming */}
                <div className="absolute bottom-0 mb-6 left-0 w-[28vw] h-[28vw] ml-[-20vw] lg:-ml-40 flex flex-wrap items-center justify-center max-w-xs max-h-[20rem]">
                  <div className="absolute bottom-0 left-0 w-full animate-spin-slow" ref={fadeRevealRefs}>
                    <Image width={301} height={304} layout="responsive" src="/icons/just-keep-swimming-dark.svg" alt="Just Keep Swimming" className="w-full" />
                  </div>

                  <div className="w-4/12" ref={fadeRevealRefs}>
                    <Image width={112} height={96} layout="responsive" src="/icons/camera.svg" alt="Camera Illustration" className="w-full" />
                  </div>
                </div>

                <div className="transform -rotate-2 mb-4 md:mb-6 xl:mb-8">
                  <span className="text-base font-display uppercase flex mb-1 md:mb-2 items-center justify-center">
                    <span className="block text-lg md:text-xl xl:text-2xl transform animate--letter-float--delay">I</span>
                    <span className="block text-lg md:text-xl xl:text-2xl transform mx-px animate--letter-float">n</span>
                    <span className="block text-lg md:text-xl xl:text-2xl transform animate--letter-float--delay">s</span>
                    <span className="block text-lg md:text-xl xl:text-2xl transform mx-px animate--letter-float">t</span>
                    <span className="block text-lg md:text-xl xl:text-2xl transform animate--letter-float--delay">a</span>
                    <span className="block text-lg md:text-xl xl:text-2xl transform mx-px animate--letter-float">g</span>
                    <span className="block text-lg md:text-xl xl:text-2xl transform animate--letter-float--delay">r</span>
                    <span className="block text-lg md:text-xl xl:text-2xl transform mx-px animate--letter-float">a</span>
                    <span className="block text-lg md:text-xl xl:text-2xl transform animate--letter-float--delay">m</span>
                  </span>
                </div>

                <span className="text-center block uppercase text-4xl md:text-5xl xl:text-6xl font-display mb-4 md:mb-6">Soak up the latest</span>

                <div className="mx-auto flex justify-center">
                  <a href="https://www.instagram.com/weswwim" target="_blank" rel="noopener noreferrer" className={`rounded-full text-center inline-block font-bold group relative overflow-hidden transition-colors ease-in-out duration-500 bg-blue text-white px-5 md:px-8 py-3 md:py-4 font-display text-lg`}>
                    <span className="block relative z-10">@weswwim</span>
                    <div className="absolute bottom-0 left-0 w-full h-0 bg-black group-hover:h-full group-focus:h-full transition-all ease-in-out duration-500 z-0"></div>
                  </a>
                </div>

                <div className="flex justify-center">
                  <div className="w-32 md:w-40 -mr-20 md:-mr-24 xl:-mr-32">
                    <Image width={167} height={102} layout="responsive" src="/icons/dive-in.svg" alt="Dive In in handwritten text" className="w-full" />
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </motion.div>

        <motion.div variants={fadeSmallDelay} className="relative z-10">
          <Footer contact={contact} />
        </motion.div>
      </motion.section>
      </SmoothScrollProvider>
      </div>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props
  };
}
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Container from '../components/container'
import { fade } from "../helpers/transitions"
import { motion } from 'framer-motion'
import AboutCarousel from '../components/about-carousel'
import { NextSeo } from 'next-seo';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SanityPageService from '../services/sanityPageService'
import ImageWrapper from '../helpers/image-wrapper'

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
    }
  },
  "team": *[_type == "team"] | order(order asc) {
    firstName,
    secondName,
    jobTitle,
    image {
      asset->
    }
  }
}`

const pageService = new SanityPageService(query)

export default function About(initialData) {
  const { data: { about, team }  } = pageService.getPreviewHook(initialData)()

  const revealRefs = useRef(null);

  revealRefs.current = [];

  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(el, {
        autoAlpha: 0
      }, {
        duration: 0.35, 
        autoAlpha: 1,
        ease: "power2.easeInOut",
        scrollTrigger: {
          trigger: el,
          start: 'top center+=400',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }, []);

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

      <Header />

      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        className="bg-blue bg-noise text-white overflow-hidden"
      >
        <motion.div variants={fade} className="relative z-10">
          <Container>
            <div className="relative mb-16 md:mb-20 2xl:mb-28 mx-[3%] md:mx-[5%] lg:mx-24 2xl:mx-32">
              <span className="text-xl md:text-2xl 2xl:text-3xl font-display uppercase flex mb-4 md:mb-6 2xl:mb-8 justify-center">
                <span className="block mx-px">A</span>
                <span className="block mx-px animate--letter-float">b</span>
                <span className="block mx-px">o</span>
                <span className="block mx-px animate--letter-float">u</span>
                <span className="block mx-px">t</span>
              </span>

              <div className="relative">
                <h1 className="block font-display uppercase text-[9.7vw] md:text-[6.45vw] lg:text-[5.75vw] 2xl:text-[80px] leading-none relative z-10 text-center">the team behind making communicating your brand a balmy breeze.</h1>
                
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
          <motion.div variants={fade} className="relative z-10 pt-12 md:pt-24 2xl:pt-28">
            <div className="flex flex-wrap justify-center">
              <div className="inline-block mb-8 md:mb-12 2xl:mb-16 relative z-10 max-w-xs md:max-w-xl 2xl:max-w-2xl mx-auto">
                <span className="text-base font-display uppercase flex mb-1 md:mb-2 justify-center">
                  <span className="block mx-px">T</span>
                  <span className="block mx-px mt-[-3px]">h</span>
                  <span className="block mx-px">e</span>
                  <span className="block mx-px mt-[-3px]">&nbsp;</span>
                  <span className="block mx-px">T</span>
                  <span className="block mx-px mt-[-3px]">e</span>
                  <span className="block mx-px">a</span>
                  <span className="block mx-px mt-[-3px]">m</span>
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
            </div>

            <div className="w-[80%] md:w-[60%] 2xl:w-[50%] absolute top-0 md:bottom-0 left-0 ml-[-28%] md:ml-[-20%] mt-[4%] md:mt-[6%] 2xl:mt-[4%] z-0">
              <div className="animate--wave--slow" ref={fadeRevealRefs}>
                <Image width={775} height={1092} layout="responsive" src="/icons/palm-tree.svg" alt="Plant Illustration" className="w-full" />
              </div>
            </div>
          </motion.div>
        </Container>

        <motion.div variants={fade} className="relative z-10">
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
        </motion.div>

        <motion.div variants={fade} className="relative z-10">
          <Footer />
        </motion.div>
      </motion.section>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props
  };
}
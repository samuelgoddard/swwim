import Head from 'next/head'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Container from '../components/container'
import { fade } from "../helpers/transitions"
import { motion } from 'framer-motion'
import Megaphone from '../icons/megaphone'
import TitleSwipe from '../icons/title-swipe'
import TitleSquiggle from '../icons/title-squiggle'
import UnicornLeft from '../icons/unicorn-left'
import BottleRight from '../icons/bottle-right'
import JustKeepSwimming from '../icons/just-keep-swimming'
import Camera from '../icons/camera'
import CircleSquiggle from '../icons/circle-squiggle'
import Plant2 from '../icons/plant-2'
import Plant3 from '../icons/plant-3'
import PalmTree from '../icons/palm-tree'
import FancyLink from '../components/fancy-link'
import Accordion from '../components/accordion'
import NewsTeaser from '../components/news-teaser'

export default function Home() {
  return (
    <Layout>
      <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>Nextjs boilerplate - Home</title>
          <meta
          name="description"
          content="nextJS boilerplate"
          />
          <meta name="og:title" content="Website Title" />
          <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />

      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        className="bg-blue bg-noise text-white pb-8 md:pb-12 2xl:pb-16"
      >
        <motion.div variants={fade} className="relative z-10">
          <Container>
            <div className="flex space-x-3 items-center mb-3">
              <svg className="w-8 transform rotate-180" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity=".324" cx="17.5" cy="17.5" r="16.5" transform="rotate(-180 17.5 17.5)" stroke="currentColor" strokeWidth="1.12"/><path d="M24 16.57l-6.188-6.232-6.188 6.231M17.812 10.338V25" stroke="currentColor" strokeWidth="1.008"/></svg>
              <span className="block font-medium">Dive right in</span>
            </div>

            <div className="relative mb-8 md:mb-6 2xl:mb-8">
              <Megaphone width="w-[30%] md:w-[20%]" extraClasses="absolute z-10 top-0 left-0 mt-[6%] ml-[65%] md:mt-[10%] md:ml-[46%] z-20" />

              <div className="hidden md:block md:w-[31vw] lg:w-[32vw] 2xl:w-[30%] md:h-[18.5vw] 2xl:h-[44%] md:mb-[1.75vw] 2xl:mb-7 absolute bottom-0 left-0 z-10">
                <img src="https://placedog.net/500/280" alt="placeholder" className="absolute inset-0 w-full h-full object-cover object-center" />
              </div>
              
              <span className="block font-display uppercase text-[13vw] md:text-[10.5vw] 2xl:text-[170px] leading-none relative z-10">Delivering</span>
              <span className="block font-display uppercase text-[13vw] md:text-[10.5vw] 2xl:text-[170px] leading-none relative z-10">Creative</span>
              <span className="block md:text-right font-display uppercase text-[13vw] md:text-[10.5vw] 2xl:text-[170px] leading-none relative z-10">Campaigns</span>
              <span className="block md:text-right font-display uppercase text-[13vw] md:text-[10.5vw] 2xl:text-[170px] leading-none relative z-10">That Float</span>

              <svg className="w-1/2 md:w-4/12 absolute top-0 right-0 mt-[32vw] mr-[4vw] md:mr-0 md:mt-[28vw] 2xl:mt-[28%] z-0" viewBox="0 0 447 258" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity=".447"><mask id="mask-a" maskUnits="userSpaceOnUse" x="0" y="0" width="447" height="258"><path fillRule="evenodd" clipRule="evenodd" d="M0 0h447v258H0V0z" fill="#fff"/></mask><g mask="url(#mask-a)"><path fillRule="evenodd" clipRule="evenodd" d="M53.828 230.687c-10.89-6.159-20.862-14.418-28.037-24.655-7.078-10.098-11.515-22.131-12.372-34.027a73.814 73.814 0 01-.172-5.233c9.767 16.713 23.923 31.084 39.348 42.517 24.188 17.925 53.103 29.06 82.627 34.699 3.62.69 7.25 1.3 10.891 1.849-1.72.121-3.441.232-5.166.321-29.476 1.522-60.958-.681-87.12-15.471zm-38.8-130.357c8.148-23.03 29.039-40.3 50.082-52.253 26.129-14.84 55.343-24.157 84.81-29.832 30.327-5.84 61.61-8.004 92.464-6.43 28.104 1.435 56.265 6.358 82.558 16.506 18.94 7.308 39.338 18.807 49.708 36.502 2.744 4.677 4.25 8.368 5.542 13.817 1.383 5.82 1.63 11.91.998 18.431-1.378 14.208-7.725 27.581-15.776 39.23-15.112 21.862-35.783 39.678-58.002 54.179-23.274 15.193-48.672 27.354-74.877 36.695-11.839 4.219-23.909 7.839-36.142 10.782-2.137.004-4.274.027-6.412-.003-31.201-.445-62.576-4.828-91.691-16.335-25.07-9.908-48.21-25.476-65.286-46.312-7.17-8.746-13.125-18.779-16.934-29.416 3.937-14.63 11.717-28.368 21.676-39.878 17.88-20.659 42.67-33.85 68.918-41.476 30.031-8.724 61.589-10.138 92.695-8.841 16.243.678 32.443 2.126 48.609 3.817 3.082.323 5.725-2.836 5.725-5.672 0-3.334-2.636-5.348-5.725-5.671-34.274-3.582-68.954-6.115-103.336-2.416-30.385 3.269-60.75 11.556-86.644 28.061-19.82 12.636-36.243 30.36-46.323 51.436-.536-8.297.453-16.694 3.363-24.921zm431.207 63.482c-1.465-2.48-5.29-3.8-7.835-2.034a429.465 429.465 0 01-77.083 42.449c-26.732 11.329-54.754 19.834-83.242 25.549a423.547 423.547 0 01-34.641 5.446 404.608 404.608 0 0033.575-14.547c25.653-12.51 50.162-27.985 71.071-47.409 21.628-20.095 41.423-45.688 44.52-75.785 1.307-12.71-1.046-25.588-7.191-36.847-5.545-10.158-13.889-18.415-23.165-25.264-19.627-14.492-44.136-22.736-67.791-28.016C262.398.201 229.157-1.277 196.445.967c-31.951 2.19-63.885 7.67-94.157 18.2C74.9 28.695 47.45 41.937 26.751 62.543 17.217 72.03 9.38 83.129 4.585 95.687c-5.194 13.611-5.805 28.477-2.692 42.638.61 2.789 1.395 5.52 2.26 8.22-5.062 22.418-1.606 46.334 11.959 65.51 17.163 24.263 45.16 37.95 74.085 42.916 32.283 5.541 66.037 2.964 97.969-3.56 3.065-.625 6.115-1.329 9.159-2.039 11.665-.057 23.323-.637 34.901-1.649 30.533-2.667 60.794-8.471 90.096-17.384 29.268-8.904 57.66-20.834 84.426-35.562a427.403 427.403 0 0037.434-23.205c2.528-1.754 3.704-4.962 2.053-7.76z" fill="#01295F"/></g></g></svg>

              <span className="relative md:absolute z-10 top-0 right-0 block text-lg md:text-[2vw] lg:text-[1.4vw] 2xl:text-lg w-10/12 md:w-[33%] 2xl:w-[35%] leading-tight 2xl:leading-snug font-medium mt-2 md:mt-[6vw] lg:mt-[13vw] 2xl:mt-[15%]">
                <span className="2xl:max-w-md block ">
                  Collaborating with content specialists, influencers and all-round creative types, to make communicating your brand a balmy breeze.
                </span>
              </span>
            </div>

            <div className="border-t border-b border-white py-4 md:py-6 mb-12 md:mb-16 2xl:mb-24 relative z-10 overflow-hidden">
              <div className="relative flex overflow-x-hidden font-display uppercase md:text-[2vw] 2xl:text-3xl">
                <div className="animate-marquee whitespace-nowrap">
                  <span className="mx-1">Brand Strategy</span>
                  <span className="mx-1">&bull;</span>
                  <span className="mx-1">Events</span>
                  <span className="mx-1">&bull;</span>
                  <span className="mx-1">Influencer Marketing</span>
                  <span className="mx-1">&bull;</span>
                  <span className="mx-1">Content Creation</span>
                  <span className="mx-1">&bull;</span>
                  <span className="mx-1">Copy Writing</span>
                  <span className="mx-1">&bull;</span>
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
                  <span className="mx-1">Brand Strategy</span>
                  <span className="mx-1">&bull;</span>
                  <span className="mx-1">Events</span>
                  <span className="mx-1">&bull;</span>
                  <span className="mx-1">Influencer Marketing</span>
                  <span className="mx-1">&bull;</span>
                  <span className="mx-1">Content Creation</span>
                  <span className="mx-1">&bull;</span>
                  <span className="mx-1">Copy Writing</span>
                  <span className="mx-1">&bull;</span>
                </div>
              </div>
            </div>
          </Container>
          
          <Container overflowHidden>
            <div className="relative mb-16 md:mb-32 2xl:mb-40">
              <UnicornLeft extraClasses="w-[38%] md:w-[25%] absolute top-auto md:top-0 bottom-0 z-20 md:bottom-auto right-0 mb-28 md:mb-0 md:mt-[25%] max-w-xs -mr-16 md:-mr-28 2xl:-mr-6" />

              <BottleRight extraClasses="hidden md:block md:w-[14%] absolute top-auto md:top-0 bottom-0 z-20 md:bottom-auto left-0 mb-28 md:mb-0 md:mt-[50%] 2xl:mt-[42%] max-w-[170px] -ml-16 md:ml-[-8%] 2xl:-ml-6" />
              
              <div className="md:mx-12 2xl:mx-16">
                <div className="flex flex-wrap md:-mx-6">
                  <div className="w-full md:w-7/12 xl:w-1/2 md:px-6 mb-12 md:mb-0">
                    <div className="max-w-xl">
                      <div className="inline-block mb-2 md:mb-4">
                        <h1 className="font-display uppercase block text-3xl md:text-5xl 2xl:text-6xl mb-0 pb-0 pr-8 md:pr-12 2xl:pr-16 relative z-10">We Rise By<br/>Lifting Overs</h1>
                        <TitleSquiggle width="w-full" extraClasses="text-blue-dark -ml-4 -mt-6 md:-mt-8 2xl:-mt-10 relative z-0" />
                      </div>
                      
                      <p className="text-lg opacity-70 mb-4 md:mb-6">Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus.</p>

                      <FancyLink href="#" />
                      
                      <img src="https://placedog.net/540/580" alt="placeholder" className="w-8/12 max-w-md mx-auto mt-0 md:mt-24 xl:mt-32 hidden md:block" />
                    </div>
                  </div>
                  <div className="w-full md:w-5/12 xl:w-1/2 md:px-6 ml-auto">
                    <div className="flex flex-wrap -mx-4 md:mx-0">
                      <div className="w-1/2 md:w-full px-4 md:px-0">
                        <img src="https://placedog.net/540/680" alt="placeholder" className="w-full max-w-md ml-auto" />
                      </div>

                      <div className="w-1/2 md:w-full px-4 md:px-0 mt-16 md:mt-24 lg:mt-32 relative">
                        <img src="https://placedog.net/540/690" alt="placeholder" className="w-full max-w-md mr-auto" />

                        <div className="absolute bottom-0 mb-6 left-0 w-[30vw] h-[30vw] ml-[-15vw] lg:-ml-40 flex flex-wrap items-center justify-center max-w-xs max-h-[20rem]">
                          <JustKeepSwimming extraClasses="absolute bottom-0 left-0 w-full animate-spin-slow" />
                          <Camera extraClasses="w-4/12" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>

          <div className="mb-8 md:mb-12 2xl:mb-16">
            <Container>
              <div className="flex flex-wrap mb-3 md:mb-16 2xl:mb-24">
                <div className="w-10/12 md:ml-auto">
                  <div className="relative">
                    <h2 className="relative z-10 block font-display uppercase text-[13vw] md:text-[10.5vw] 2xl:text-[170px] leading-none md:text-right">Just getting on <span className="stroke">with it</span></h2>
                    <CircleSquiggle width="w-5/12 md:w-4/12" extraClasses="absolute bottom-0 right-0 mr-[73%] md:mr-[49%] -mb-2 xl:-mb-5 z-0" />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full md:w-7/12 mb-6 md:mb-0 md:-mt-16 2xl:-mt-24">
                  <img src="/images/drink.webp" alt="placeholder" className="w-8/12 md:w-10/12 max-w-2xl" />
                </div>
                <div className="w-full md:w-5/12">
                  <div className="w-11/12">
                    <h3 className="text-lg md:text-xl 2xl:text-2xl font-bold">Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in. Lorem ipsum dolor sit amet consect.</h3>

                    <p className="text-lg opacity-70 mb-4 md:mb-6">Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus.</p>

                    <FancyLink href="#" />
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        className="bg-white text-blue py-10 md:py-16 2xl:py-20 overflow-hidden"
      >
        <Container>
          <motion.div variants={fade} className="relative z-10">
            <Plant2 width="w-[24%] md:w-[20%]" extraClasses="text-pink absolute top-0 right-0 mr-[-14%]  md:mr-[-10%] 2xl:mr-[-9%] mt-[1%] z-0" />

            <Plant3 width="w-[65%] md:w-[40%] 2xl:w-[35%]" extraClasses="text-pink absolute top-0 left-0 ml-[-32%] md:ml-[-18%] 2xl:ml-[-13%] mt-[50%] md:mt-[25%] xl:mt-[20%] z-0" />
            
            <div className="inline-block mb-8 md:mb-16 2xl:mb-24 relative z-10">
              <span className="text-base font-display uppercase block mb-1 md:mb-2">What We Offer</span>
              <h2 className="text-3xl md:text-5xl 2xl:text-6xl font-display uppercase mb-0 pb-0">Our Services</h2>
              <TitleSwipe width="w-9/12 md:w-full" extraClasses="-mt-1 md:-mt-2" />
            </div>

            <div className="relative z-10">
              <Accordion heading="Content Strategy" index="01" open>
                <p>Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus.</p>

                <ol>
                  <li>Nullam id dolor id nibh ultricies vehicula ut id elit.</li>
                  <li>Tristique Magna Ultricies Parturient.</li>
                  <li>Aenean Amet Condimentum Magna</li>
                </ol>
              </Accordion>
              <Accordion heading="Social Media Management" index="02">
                <p>Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus.</p>

                <ol>
                  <li>Nullam id dolor id nibh ultricies vehicula ut id elit.</li>
                  <li>Tristique Magna Ultricies Parturient.</li>
                  <li>Aenean Amet Condimentum Magna</li>
                </ol>
              </Accordion>
              <Accordion heading="Social Advertising" index="03">
                <p>Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus.</p>

                <ol>
                  <li>Nullam id dolor id nibh ultricies vehicula ut id elit.</li>
                  <li>Tristique Magna Ultricies Parturient.</li>
                  <li>Aenean Amet Condimentum Magna</li>
                </ol>
              </Accordion>
              <Accordion heading="Influencer Marketing" index="04">
                <p>Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus.</p>

                <ol>
                  <li>Nullam id dolor id nibh ultricies vehicula ut id elit.</li>
                  <li>Tristique Magna Ultricies Parturient.</li>
                  <li>Aenean Amet Condimentum Magna</li>
                </ol>
              </Accordion>
              <Accordion heading="Content Creation" index="05">
                <p>Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus.</p>

                <ol>
                  <li>Nullam id dolor id nibh ultricies vehicula ut id elit.</li>
                  <li>Tristique Magna Ultricies Parturient.</li>
                  <li>Aenean Amet Condimentum Magna</li>
                </ol>
              </Accordion>
              <Accordion heading="Copywriting" index="06">
                <p>Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus.</p>

                <ol>
                  <li>Nullam id dolor id nibh ultricies vehicula ut id elit.</li>
                  <li>Tristique Magna Ultricies Parturient.</li>
                  <li>Aenean Amet Condimentum Magna</li>
                </ol>
              </Accordion>
            </div>
          </motion.div>
        </Container>
      </motion.section>

      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        className="bg-blue bg-noise text-white py-10 md:py-16 2xl:py-20"
      >
        <motion.div variants={fade} className="relative z-10">
          <Container>

            <div className="flex flex-wrap items-center mb-3 md:mb-5 relative z-10">
              <div className="w-auto">
                <span className="text-base font-display uppercase block mb-1 md:mb-2">News</span>
                <h2 className="text-3xl md:text-5xl 2xl:text-6xl font-display uppercase mb-0 pb-0">Latest<span className="block">Poolside</span></h2>
              </div>
              <div className="ml-auto w-auto">
                <FancyLink href="#" label="View all news" />
              </div>
            </div>

            <NewsTeaser heading="How Alcohol Brands Can Get Seen on TikTok #TheLowdown" />
            <NewsTeaser heading="Why Audio Social Has The Best Chat #Clubhouse" />
            <NewsTeaser heading="4 Truffle Tips To Up Your TikTok Game #BizGuide" />
          </Container>
        </motion.div>
      </motion.section>

      <Footer />
    </Layout>
  )
}

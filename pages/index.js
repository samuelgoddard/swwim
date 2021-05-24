import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Container from '../components/container'
import { fade } from "../helpers/transitions"
import { motion } from 'framer-motion'
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

            <div className="block md:hidden md:w-[31vw] lg:w-[32vw] 2xl:w-[30%] md:h-[18.5vw] 2xl:h-[44%] md:mb-[1.75vw] 2xl:mb-7 md:absolute bottom-0 left-0 z-10 mb-5">
              <Image height={280} width={500} src="https://placedog.net/500/280" alt="Placeholder Dog" layout="responsive" className="md:absolute md:inset-0 w-full md:h-full md:object-cover md:object-center" />
            </div>

            <div className="relative mb-8 md:mb-6 2xl:mb-8">
              <div className="w-[30%] md:w-[20%] absolute top-0 left-0 mt-[6%] ml-[65%] md:mt-[10%] md:ml-[46%] z-20">
                <Image height={242} width={250} src="/icons/megaphone.svg" alt="Megaphone Icon" layout="responsive" />
              </div>

              <div className="hidden md:block md:w-[31vw] lg:w-[32vw] 2xl:w-[30%] md:h-[18.5vw] 2xl:h-[44%] md:mb-[1.75vw] 2xl:mb-7 absolute bottom-0 left-0 z-10">
                <Image src="https://placedog.net/500/280" alt="Placeholder Dog" layout="fill" className="absolute inset-0 w-full h-full object-cover object-center" />
              </div>
              
              <span className="block font-display uppercase text-[13vw] md:text-[10.5vw] 2xl:text-[170px] leading-none relative z-10">Delivering</span>
              <span className="block font-display uppercase text-[13vw] md:text-[10.5vw] 2xl:text-[170px] leading-none relative z-10">Creative</span>
              <span className="block md:text-right font-display uppercase text-[13vw] md:text-[10.5vw] 2xl:text-[170px] leading-none relative z-10">Campaigns</span>
              <span className="block md:text-right font-display uppercase text-[13vw] md:text-[10.5vw] 2xl:text-[170px] leading-none relative z-10">That Float</span>

              <svg className="w-1/2 md:w-4/12 absolute top-0 right-0 mt-[32vw] mr-[4vw] md:mr-0 md:mt-[28vw] 2xl:mt-[32%] z-0" viewBox="0 0 447 258" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity=".447"><mask id="mask-a" maskUnits="userSpaceOnUse" x="0" y="0" width="447" height="258"><path fillRule="evenodd" clipRule="evenodd" d="M0 0h447v258H0V0z" fill="#fff"/></mask><g mask="url(#mask-a)"><path fillRule="evenodd" clipRule="evenodd" d="M53.828 230.687c-10.89-6.159-20.862-14.418-28.037-24.655-7.078-10.098-11.515-22.131-12.372-34.027a73.814 73.814 0 01-.172-5.233c9.767 16.713 23.923 31.084 39.348 42.517 24.188 17.925 53.103 29.06 82.627 34.699 3.62.69 7.25 1.3 10.891 1.849-1.72.121-3.441.232-5.166.321-29.476 1.522-60.958-.681-87.12-15.471zm-38.8-130.357c8.148-23.03 29.039-40.3 50.082-52.253 26.129-14.84 55.343-24.157 84.81-29.832 30.327-5.84 61.61-8.004 92.464-6.43 28.104 1.435 56.265 6.358 82.558 16.506 18.94 7.308 39.338 18.807 49.708 36.502 2.744 4.677 4.25 8.368 5.542 13.817 1.383 5.82 1.63 11.91.998 18.431-1.378 14.208-7.725 27.581-15.776 39.23-15.112 21.862-35.783 39.678-58.002 54.179-23.274 15.193-48.672 27.354-74.877 36.695-11.839 4.219-23.909 7.839-36.142 10.782-2.137.004-4.274.027-6.412-.003-31.201-.445-62.576-4.828-91.691-16.335-25.07-9.908-48.21-25.476-65.286-46.312-7.17-8.746-13.125-18.779-16.934-29.416 3.937-14.63 11.717-28.368 21.676-39.878 17.88-20.659 42.67-33.85 68.918-41.476 30.031-8.724 61.589-10.138 92.695-8.841 16.243.678 32.443 2.126 48.609 3.817 3.082.323 5.725-2.836 5.725-5.672 0-3.334-2.636-5.348-5.725-5.671-34.274-3.582-68.954-6.115-103.336-2.416-30.385 3.269-60.75 11.556-86.644 28.061-19.82 12.636-36.243 30.36-46.323 51.436-.536-8.297.453-16.694 3.363-24.921zm431.207 63.482c-1.465-2.48-5.29-3.8-7.835-2.034a429.465 429.465 0 01-77.083 42.449c-26.732 11.329-54.754 19.834-83.242 25.549a423.547 423.547 0 01-34.641 5.446 404.608 404.608 0 0033.575-14.547c25.653-12.51 50.162-27.985 71.071-47.409 21.628-20.095 41.423-45.688 44.52-75.785 1.307-12.71-1.046-25.588-7.191-36.847-5.545-10.158-13.889-18.415-23.165-25.264-19.627-14.492-44.136-22.736-67.791-28.016C262.398.201 229.157-1.277 196.445.967c-31.951 2.19-63.885 7.67-94.157 18.2C74.9 28.695 47.45 41.937 26.751 62.543 17.217 72.03 9.38 83.129 4.585 95.687c-5.194 13.611-5.805 28.477-2.692 42.638.61 2.789 1.395 5.52 2.26 8.22-5.062 22.418-1.606 46.334 11.959 65.51 17.163 24.263 45.16 37.95 74.085 42.916 32.283 5.541 66.037 2.964 97.969-3.56 3.065-.625 6.115-1.329 9.159-2.039 11.665-.057 23.323-.637 34.901-1.649 30.533-2.667 60.794-8.471 90.096-17.384 29.268-8.904 57.66-20.834 84.426-35.562a427.403 427.403 0 0037.434-23.205c2.528-1.754 3.704-4.962 2.053-7.76z" fill="#01295F"/></g></g></svg>

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
              <div className="w-[38%] md:w-[40%] absolute top-auto md:top-0 bottom-0 z-20 md:bottom-auto right-0 mb-28 md:mb-0 md:mt-[25%] max-w-xs -mr-16 md:-mr-28 2xl:-mr-6 hidden md:block">
                <Image width={279} height={418} layout="responsive" src="/icons/unicorn-left.svg" alt="Unicorn Illustration" className="w-full" />
              </div>

              <div className="hidden md:block md:w-[14%] absolute top-auto md:top-0 bottom-0 z-20 md:bottom-auto left-0 mb-28 md:mb-0 md:mt-[50%] 2xl:mt-[42%] max-w-[170px] -ml-16 md:ml-[-8%] 2xl:ml-20">
                <Image width={151} height={230} layout="responsive" src="/icons/bottle-right.svg" alt="Bottle Illustration" className="w-full" />
              </div>
              
              <div className="md:mx-12 2xl:mx-16">
                <div className="flex flex-wrap md:-mx-6">
                  <div className="w-full md:w-7/12 xl:w-1/2 md:px-6 mb-12 md:mb-0">
                    <div className="max-w-xl">
                      <div className="inline-block mb-2 md:mb-4">
                      <span className="text-base md:text-lg font-display uppercase mb-2 md:mb-3 flex">
                        <span className="block transform skew-x-6">W</span>
                        <span className="block transform skew-x-6 mt-[3px]">e</span>
                        <span className="block transform skew-x-6 mt-[6px]">l</span>
                        <span className="block transform skew-x-6 mt-px">c</span>
                        <span className="block transform skew-x-6 mt-[3px]">o</span>
                        <span className="block transform skew-x-6 mt-[-3px]">m</span>
                        <span className="block transform skew-x-6">e</span>
                      </span>
                        <h1 className="font-display uppercase block text-3xl md:text-5xl 2xl:text-6xl mb-0 pb-0 pr-8 md:pr-12 2xl:pr-16 relative z-10">We Rise By<br/>Lifting Overs</h1>

                        <div className="opacity-30 -ml-4 -mt-6 md:-mt-8 2xl:-mt-10 relative z-0">
                          <Image width={531} height={66} layout="responsive" src="/icons/title-squiggle.svg" alt="Squiggle Underline" className="w-full" />
                        </div>
                      </div>
                      
                      <p className="text-lg opacity-70 mb-4 md:mb-6">Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod. Morbi leo risus.</p>

                      <FancyLink href="#" />

                      <div className="w-8/12 max-w-md mx-auto mt-0 md:mt-24 xl:mt-32 hidden md:block">
                        <Image width={540} height={580} layout="responsive" src="https://placedog.net/540/580" alt="Placeholder Dog" className="w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-5/12 xl:w-1/2 md:px-6 ml-auto">
                    <div className="flex flex-wrap -mx-4 md:mx-0">
                      <div className="w-1/2 md:w-full px-4 md:px-0">
                        <div className="w-full max-w-md ml-auto">
                          <Image width={540} height={680} layout="responsive" src="https://placedog.net/540/680" alt="Placeholder Dog" className="w-full" />
                        </div>
                      </div>

                      <div className="w-1/2 md:w-full px-4 md:px-0 mt-16 md:mt-24 lg:mt-32 relative">
                        <div className="w-full max-w-md mr-auto">
                          <Image width={540} height={690} layout="responsive" src="https://placedog.net/540/690" alt="Placeholder Dog" className="w-full" />
                        </div>

                        <div className="absolute bottom-0 mb-6 left-0 w-[30vw] h-[30vw] ml-[-15vw] lg:-ml-40 flex flex-wrap items-center justify-center max-w-xs max-h-[20rem]">
                          <div className="absolute bottom-0 left-0 w-full animate-spin-slow">
                            <Image width={301} height={304} layout="responsive" src="/icons/just-keep-swimming.svg" alt="Just Keep Swimming" className="w-full" />
                          </div>

                          <div className="w-4/12">
                            <Image width={112} height={96} layout="responsive" src="/icons/camera.svg" alt="Camera Illustration" className="w-full" />
                          </div>
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

                    <div className="w-5/12 md:w-4/12 absolute bottom-0 right-0 mr-[73%] md:mr-[49%] 2xl:mr-[53%] -mb-2 xl:-mb-5 z-0">
                      <Image width={417} height={220} layout="responsive" src="/icons/circle-squiggle.svg" alt="Circle Illustration" className="w-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full md:w-7/12 mb-6 md:mb-0 md:-mt-16 2xl:-mt-24">
                  <div className="w-8/12 md:w-10/12 max-w-2xl">
                    <Image width={1128} height={950} layout="responsive" src="/images/drink.webp" alt="placeholder" className="w-full" />
                  </div>
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
        className="bg-white bg-noise bg-noise--white text-blue py-10 md:py-16 2xl:py-20 overflow-hidden"
      >
        <Container>
          <motion.div variants={fade} className="relative z-10">
            <div className="w-[24%] md:w-[20%] absolute top-0 right-0 mr-[-14%] md:mr-[-10%] 2xl:mr-[-9%] mt-[1%] z-0">
              <Image width={278} height={276} layout="responsive" src="/icons/plant-2.svg" alt="Plant Illustration" className="w-full" />
            </div>

            <div className="w-[65%] md:w-[40%] 2xl:w-[35%] absolute top-0 left-0 ml-[-32%] md:ml-[-18%] 2xl:ml-[-13%] mt-[50%] md:mt-[25%] xl:mt-[20%] z-0">
              <Image width={551} height={555} layout="responsive" src="/icons/plant-3.svg" alt="Plant Illustration" className="w-full" />
            </div>
            
            <div className="inline-block mb-8 md:mb-16 2xl:mb-24 relative z-10">
              <span className="text-base font-display uppercase flex mb-1 md:mb-2">
                <span className="block mx-px">W</span>
                <span className="block mx-px mt-[-3px]">h</span>
                <span className="block mx-px">a</span>
                <span className="block mx-px mt-[-3px]">t</span>
                <span className="block mx-px">&nbsp;</span>
                <span className="block mx-px mt-[-3px]">w</span>
                <span className="block mx-px">e</span>
                <span className="block mx-px mt-[-3px]">&nbsp;</span>
                <span className="block mx-px">O</span>
                <span className="block mx-px mt-[-3px]">f</span>
                <span className="block mx-px">f</span>
                <span className="block mx-px mt-[-3px]">e</span>
                <span className="block mx-px">r</span>

              </span>
              <h2 className="text-3xl md:text-5xl 2xl:text-6xl font-display uppercase mb-0 pb-0">Our Services</h2>
              
              <div className="w-9/12 md:w-full -mt-1 md:-mt-2">
                <Image width={400} height={34} layout="responsive" src="/icons/title-swipe.svg" alt="Swipe Underline" className="w-full" />
              </div>
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

        <Container>
          <motion.div variants={fade} className="relative z-10 overflow-visible">
            <div className="relative overflow-visible pt-24 md:pt-40 2xl:pt-48">
              <div className="text-center mb-6 md:mb-12 relative z-10">
                <span className="text-base font-display uppercase mb-1 md:mb-2 flex flex-wrap justify-center">
                  <span className="block mx-px">C</span>
                  <span className="block mx-px mt-[-3px]">l</span>
                  <span className="block mx-px">i</span>
                  <span className="block mx-px mt-[-3px]">e</span>
                  <span className="block mx-px">n</span>
                  <span className="block mx-px mt-[-3px]">t</span>
                  <span className="block mx-px">s</span>
                </span>

                <h2 className="text-3xl md:text-5xl 2xl:text-6xl font-display uppercase mb-0 pb-0">Working With The Best</h2>
              </div>

              <div className="w-[80%] md:w-[60%] 2xl:w-[45%] absolute top-0 md:bottom-0 left-0 ml-[-28%] md:ml-[-20%] md:mt-[0] z-0">
                <Image width={775} height={1092} layout="responsive" src="/icons/palm-tree.svg" alt="Plant Illustration" className="w-full" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 border-r border-b border-blue mb-16 md:mb-24 2xl:mb-32 relative z-20">
                {Array.from(Array(8), (e, i) => {
                  return (
                    <div className="bg-white border-l border-t border-blue flex items-center justify-center py-16 md:py-[4.35rem] lg:py-[5.25rem]" key={i}>
                      <svg className="w-16 lg:w-24" viewBox="0 0 115 118" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M100.401 48.003c-4 .025-6.494.173-10.173 1.012 2.888 2.115 5.786 4.217 8.684 6.318 5.325 3.863 10.648 7.725 15.91 11.659-5.704 8.568-16.668 14.396-25.582 15.73-2.716-3.902-4.642-8.57-6-13.804-2.716 3.901-11.878 12.741-25.83 12.741-15.111 0-23.136-8.84-25.828-12.741-1.358 5.235-3.284 9.902-6 13.803C16.668 81.388 5.679 75.585 0 66.991c5.803-4.369 11.694-8.637 17.583-12.904 2.331-1.689 4.662-3.377 6.986-5.072-3.703-.84-6.173-.987-10.198-1.012.184-1.338.427-2.705.666-4.051.34-1.91.671-3.776.816-5.456l.574.056c1.28.128 2.248.225 3.5-.056.447-.093 4.497-2.962 9.572-6.558 1.66-1.176 3.43-2.43 5.22-3.69-9.903-18.939-21.385-7.284-21.385-7.284C10.371 8.47 23.83 0 23.83 0c9.111 6.568 15.013 18.15 17.457 23.656 3.803-2.618 7.137-4.79 8.989-5.778l.372-.196c1.877-.99 3.935-2.073 5.95-2.397.246-.025.493-.05.764-.05 0 0 .593 0 .84.05 2.07.333 4.161 1.445 6.1 2.475l.221.118c1.852.987 5.186 3.185 8.989 5.778C75.955 18.149 81.857 6.593 90.969 0c0 0 13.482 8.47 10.494 20.964 0 0-11.482-11.655-21.384 7.285 1.79 1.26 3.559 2.513 5.22 3.69 5.075 3.595 9.124 6.464 9.571 6.557 1.26.283 2.253.183 3.534.054l.54-.054c.147 1.699.476 3.589.812 5.52.23 1.326.464 2.67.645 3.987zM57.337 77.239h.074c14.569-.024 26.446-12.1 27.335-27.36H45.583l-6.568-15.926-1.507.642 6.618 15.285h-1.901l-8.593-10.248-1.235 1.062 8 9.186h-10.37c.864 15.26 12.766 27.36 27.31 27.36z" fill="#1658B3"/><path d="M30.002 107.143h2.667l1.901 6.395h.025v-6.395h2.148v9.852h-2.617l-2.025-6.791h-.025v6.791h-2.074v-9.852z" fill="#1658B3"/><path fillRule="evenodd" clipRule="evenodd" d="M38.52 112.081c0 3.136.42 5.112 3.457 5.112 3.285 0 3.458-2.396 3.458-5.112s-.173-5.111-3.458-5.111c-3.037 0-3.456 1.975-3.456 5.111zm4.52 0c0 2.692-.149 3.556-1.087 3.556-.914 0-1.037-.864-1.037-3.556 0-2.716.123-3.58 1.037-3.58.938 0 1.086.889 1.086 3.58zM46.966 112.081c0 3.136.42 5.112 3.457 5.112 3.284 0 3.457-2.396 3.457-5.112s-.173-5.111-3.457-5.111c-3.037 0-3.457 1.975-3.457 5.111zm4.543 0c0 2.692-.148 3.556-1.086 3.556-.914 0-1.062-.864-1.037-3.556 0-2.716.123-3.58 1.037-3.58.938 0 1.086.889 1.086 3.58zM59.09 107.143h-3.432v9.827h3.186c3.062 0 3.506-1.654 3.506-5.235 0-3.407-.963-4.592-3.26-4.592zm-.518 8.148h-.593v-6.42h.642c1.21 0 1.408.642 1.408 3.037 0 2.963-.395 3.383-1.457 3.383z" fill="#1658B3"/><path d="M64.103 107.143h2.32v7.975h3.359v1.877h-5.68v-9.852zM71.042 107.143h5.68v1.876h-3.359v1.976h3.16v1.876h-3.16v2.247h3.531v1.877h-5.852v-9.852zM80.4 113.983v.345c0 .741.197 1.309 1.012 1.309s1.037-.617 1.037-1.161c0-2.123-4.222-.938-4.222-4.617 0-1.581.84-2.889 3.235-2.889 2.32 0 3.136 1.16 3.136 2.691v.222h-2.223c0-.469-.05-.814-.197-1.037-.148-.247-.37-.345-.692-.345-.568 0-.913.345-.913 1.061 0 2.05 4.222 1.013 4.222 4.495 0 2.222-1.234 3.136-3.358 3.136-1.68 0-3.235-.519-3.235-2.568v-.642H80.4zM18.644 87.215h3.802v6.37h.025l3.556-6.37h4.099l-4.223 6.963 4.741 9.186h-4.272l-2.913-6.1-1.013 1.581v4.519h-3.802v-16.15z" fill="#1658B3"/><path fillRule="evenodd" clipRule="evenodd" d="M40.25 87.215h-4.74l-4.1 16.149h3.926l.568-3.087h3.852l.593 3.087h3.926l-4.025-16.15zm-2.47 2.938h.05l1.383 7.186h-2.766l1.334-7.186zM46.423 87.215h5.901c2.766 0 4.593 1.284 4.593 3.975 0 1.877-.987 3.359-2.543 3.63v.05c1.21.172 2.988.691 2.988 4 0 1.901-.84 4.469-5.334 4.469h-5.605V87.215zm3.803 6.445h1.037c1.308 0 1.852-.741 1.852-1.902 0-.84-.445-1.753-1.828-1.753h-1.061v3.655zm1.16 6.889H50.201v-4.37h1.234c1.186 0 2 .69 2 2.271 0 1.136-.518 2.099-2.049 2.099z" fill="#1658B3"/><path d="M70.746 98.03c0 3.161-.914 5.655-5.31 5.655-4.42 0-5.308-2.494-5.308-5.655V87.215h3.803V99.14c0 1.26.493 2.025 1.506 2.025 1.012 0 1.506-.74 1.506-2.025V87.215h3.803V98.03zM76.129 90.277h-3.383v-3.062H83.34v3.062h-3.407v13.087h-3.803V90.277z" fill="#1658B3"/><path fillRule="evenodd" clipRule="evenodd" d="M84.772 95.29c0 5.136.69 8.395 5.679 8.395 5.383 0 5.68-3.926 5.68-8.395 0-4.47-.297-8.396-5.68-8.396-5.013 0-5.68 3.26-5.68 8.396zm7.432 0c0 4.42-.247 5.852-1.778 5.852-1.481 0-1.704-1.432-1.728-5.852 0-4.42.247-5.853 1.728-5.853 1.556 0 1.778 1.408 1.778 5.853z" fill="#1658B3"/></svg>
                    </div>
                  )
                })}
              </div>
            </div>
            
            <div className="relative md:mx-16 2xl:mx-20 mb-5 md:mb-16 2xl:mb-20">
              <svg className="w-1/2 md:w-4/12 absolute top-0 right-0 mt-[15%] mr-0 md:mr-[20%] md:mt-[17%] 2xl:mt-[14%] 2xl:mr-[25%] z-0" viewBox="0 0 447 258" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity=".447"><mask id="squiggleMaskA" maskUnits="userSpaceOnUse" x="0" y="0" width="447" height="258"><path fillRule="evenodd" clipRule="evenodd" d="M0 0h447v258H0V0z" fill="#fff"/></mask><g mask="url(#squiggleMaskA)"><path fillRule="evenodd" clipRule="evenodd" d="M53.828 230.687c-10.89-6.159-20.862-14.418-28.037-24.655-7.078-10.098-11.515-22.131-12.372-34.027a73.814 73.814 0 01-.172-5.233c9.767 16.713 23.923 31.084 39.348 42.517 24.188 17.925 53.103 29.06 82.627 34.699 3.62.69 7.25 1.3 10.891 1.849-1.72.121-3.441.232-5.166.321-29.476 1.522-60.958-.681-87.12-15.471zm-38.8-130.357c8.148-23.03 29.039-40.3 50.082-52.253 26.129-14.84 55.343-24.157 84.81-29.832 30.327-5.84 61.61-8.004 92.464-6.43 28.104 1.435 56.265 6.358 82.558 16.506 18.94 7.308 39.338 18.807 49.708 36.502 2.744 4.677 4.25 8.368 5.542 13.817 1.383 5.82 1.63 11.91.998 18.431-1.378 14.208-7.725 27.581-15.776 39.23-15.112 21.862-35.783 39.678-58.002 54.179-23.274 15.193-48.672 27.354-74.877 36.695-11.839 4.219-23.909 7.839-36.142 10.782-2.137.004-4.274.027-6.412-.003-31.201-.445-62.576-4.828-91.691-16.335-25.07-9.908-48.21-25.476-65.286-46.312-7.17-8.746-13.125-18.779-16.934-29.416 3.937-14.63 11.717-28.368 21.676-39.878 17.88-20.659 42.67-33.85 68.918-41.476 30.031-8.724 61.589-10.138 92.695-8.841 16.243.678 32.443 2.126 48.609 3.817 3.082.323 5.725-2.836 5.725-5.672 0-3.334-2.636-5.348-5.725-5.671-34.274-3.582-68.954-6.115-103.336-2.416-30.385 3.269-60.75 11.556-86.644 28.061-19.82 12.636-36.243 30.36-46.323 51.436-.536-8.297.453-16.694 3.363-24.921zm431.207 63.482c-1.465-2.48-5.29-3.8-7.835-2.034a429.465 429.465 0 01-77.083 42.449c-26.732 11.329-54.754 19.834-83.242 25.549a423.547 423.547 0 01-34.641 5.446 404.608 404.608 0 0033.575-14.547c25.653-12.51 50.162-27.985 71.071-47.409 21.628-20.095 41.423-45.688 44.52-75.785 1.307-12.71-1.046-25.588-7.191-36.847-5.545-10.158-13.889-18.415-23.165-25.264-19.627-14.492-44.136-22.736-67.791-28.016C262.398.201 229.157-1.277 196.445.967c-31.951 2.19-63.885 7.67-94.157 18.2C74.9 28.695 47.45 41.937 26.751 62.543 17.217 72.03 9.38 83.129 4.585 95.687c-5.194 13.611-5.805 28.477-2.692 42.638.61 2.789 1.395 5.52 2.26 8.22-5.062 22.418-1.606 46.334 11.959 65.51 17.163 24.263 45.16 37.95 74.085 42.916 32.283 5.541 66.037 2.964 97.969-3.56 3.065-.625 6.115-1.329 9.159-2.039 11.665-.057 23.323-.637 34.901-1.649 30.533-2.667 60.794-8.471 90.096-17.384 29.268-8.904 57.66-20.834 84.426-35.562a427.403 427.403 0 0037.434-23.205c2.528-1.754 3.704-4.962 2.053-7.76z" fill="#EEE1D9"/></g></g></svg>
              
              <div className="w-[32%] md:w-[30%] lg:w-[20%] absolute top-0 left-0 ml-[-16%] md:ml-[-24%]  lg:ml-[-16%] 2xl:ml-[-9%] mt-[-8%] md:mt-[10%] z-0 transform rotate-45">
                <Image width={278} height={276} layout="responsive" src="/icons/plant-2.svg" alt="Plant Illustration" className="w-full transform rotate-90" />
              </div>

              <div className="w-[65%] md:w-[65%] lg:w-[50%] 2xl:w-[45%] absolute top-0 right-0 mr-[-30%] md:mr-[-32%] lg:mr-[-22%] 2xl:mr-[-25%] mt-[-35%] md:mt-[-35%] lg:mt-[-25%] xl:mt-[-25%] z-0 transform rotate-6">
                <Image width={551} height={555} layout="responsive" src="/icons/plant-3.svg" alt="Plant Illustration" className="w-full transform -rotate-90" />
              </div>

              <span className="font-display uppercase text-[11.5vw] md:text-[8.5vw] 2xl:text-[125px] leading-none relative z-10 flex items-center">
                <span className="block">
                  “The Digital
                </span>
                <div className="w-[13%] xl:w-[11%] mr-l md:ml-[2%] 2xl:ml-[4%] xl:mb-[-2%] hidden md:block">
                  <Image width={130} height={115} layout="responsive" src="/icons/speech.svg" alt="Speech Bubble Illustration" className="w-full" />
                </div>
              </span>

              <span className="md:text-right font-display uppercase text-[11.5vw] md:text-[8.5vw] 2xl:text-[125px] leading-none relative z-10 flex items-center justify-end">
                <div className="w-[11%] mr-3 md:mr-[4%] 2xl:mr-12 hidden md:block">
                  <Image width={157} height={134} layout="responsive" src="/icons/camera-coloured.svg" alt="Camera Illustration" className="w-full" />
                </div>
                <span className="block">
                  Agency That
                </span>
              </span>
              <span className="block font-display uppercase text-[11.5vw] md:text-[8.5vw] 2xl:text-[125px] leading-none relative z-10">Doesn't Mess</span>
              <span className="block font-display uppercase text-[11.5vw] md:text-[8.5vw] 2xl:text-[125px] leading-none relative z-10">About”</span>

              <div className="absolute bottom-0 right-0 w-[12%] md:mr-[12%] xl:mr-[5%] md:mb-[5%] xl:mb-[-3%] 2xl:mb-[0%] 2xl:mr-[12%] hidden md:block">
                <Image width={133} height={202} layout="responsive" src="/icons/bottle-coloured.svg" alt="Bottle Illustration" className="w-full" />
              </div>
              
              <div className="flex flex-wrap items-center xl:absolute bottom-0 left-0 mt-4 xl:mt-0 xl:ml-[39%] xl:mb-[2.3%]">
                <div className="w-12 md:w-16 h-12 md:h-16 rounded-full border-blue border-2">
                  <Image width={320} height={320} layout="responsive" src="https://placedog.net/320/320" alt="Placeholder Dog" className="w-full rounded-full" />
                </div>

                <div className="ml-3 md:ml-5 pl-3 md:pl-5 border-l-2 border-blue flex-1">
                  <span className="block md:text-lg leading-snug"><span className="font-bold">Laura Farrand</span>, Head of PR</span>
                  <span className="block leading-snug text-sm md:text-base">Givenchy Perfumes</span>
                </div>
              </div>
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
                <span className="text-base font-display uppercase mb-1 md:mb-2 flex">
                  <span className="block mx-px">N</span>
                  <span className="block mx-px mt-[-3px]">e</span>
                  <span className="block mx-px">w</span>
                  <span className="block mx-px mt-[-3px]">s</span>
                </span>
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

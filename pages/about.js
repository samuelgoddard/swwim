import Image from 'next/image'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Container from '../components/container'
import { fade } from "../helpers/transitions"
import { motion } from 'framer-motion'
import AboutCarousel from '../components/about-carousel'
import { NextSeo } from 'next-seo';

export default function About() {
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
                <span className="block mx-px mt-[-3px]">b</span>
                <span className="block mx-px">o</span>
                <span className="block mx-px mt-[-3px]">u</span>
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

          <div className="mb-3 md:mb-6">
            <AboutCarousel />
          </div>

          <Container>
            <div className="relative z-10 overflow-visible pb-24 md:pb-32 lg:pb-36 xl:pb-48 2xl:pb-56">
              <div className="md:mx-[10%] lg:mx-32 xl:mx-40 2xl:mx-56">
                <h2 className="block font-bold text-xl md:text-[2.75vw] 2xl:text-[38px] leading-snug relative mb-5 md:mb-8 2xl:mb-10">Nullam quis risus eget urna mollis ornare vel eu leo. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies.</h2>

                <div className="w-full mb-8 md:mb-10 2xl:mb-16">
                  <Image width={935} height={8} layout="responsive" src="/icons/about-underline-squiggle.svg" alt="Squiggle Underline" className="w-full" />
                </div>

                <div className="flex flex-wrap md:-mx-6">
                  <div className="w-10/12 md:w-1/3 pb-6 md:pb-0 md:px-6">
                    <span className="text-lg md:text-xl 2xl:text-2xl font-display uppercase block mb-2 md:mb-4 pb-0">Stay True</span>
                    <p className="text-sm leading-relaxed block font-medium">Maecenas sed diam eget risus varius blandit sit amet non magna. Fringilla Sollicitudin Nullam</p>
                  </div>

                  <div className="w-10/12 md:w-1/3 pb-6 md:pb-0 md:px-6">
                    <span className="text-lg md:text-xl 2xl:text-2xl font-display uppercase block mb-2 md:mb-4 pb-0">Be Passionate</span>
                    <p className="text-sm leading-relaxed block font-medium">Maecenas sed diam eget risus varius blandit sit amet non magna. Fringilla Sollicitudin Nullam</p>
                  </div>

                  <div className="w-10/12 md:w-1/3 pb-6 md:pb-0 md:px-6">
                    <span className="text-lg md:text-xl 2xl:text-2xl font-display uppercase block mb-2 md:mb-4 pb-0">Work Hard</span>
                    <p className="text-sm leading-relaxed block font-medium">Maecenas sed diam eget risus varius blandit sit amet non magna. Fringilla Sollicitudin Nullam</p>
                  </div>
                </div>
              </div>

              <div className="w-[55%] md:w-[35%] lg:w-[30%] 2xl:w-[33%] absolute bottom-0 right-0 mr-[-16%] md:mr-[-10%] lg:mr-[-8%] mb-[-18%] md:mb-[-13%] lg:mb-[-12%] 2xl:mr-[-13%] z-0 transform -rotate-12">
                <Image width={551} height={555} layout="responsive" src="/icons/plant-3.svg" alt="Plant Illustration" className="w-full transform" />
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
              {Array.from(Array(5), (e, i) => {
                return (
                  <div className="w-full mb-3 md:mb-5 2xl:mb-8" key={i}>
                    <div className="border-blue border-2 mb-3 md:mb-4 bg-pink">
                      <Image width={520} height={660} layout="responsive" src="https://placedog.net/520/660" alt="Placeholder Dog" className="w-full" />
                    </div>

                    <span className="text-lg md:text-xl 2xl:text-2xl font-display block mb-0 pb-0 leading-tight">Becky Shepherd</span>
                    <span className="text-base font-medium block leading-tight">Director</span>
                  </div>
                )
              })}
            </div>

            <div className="w-[80%] md:w-[60%] 2xl:w-[50%] absolute top-0 md:bottom-0 left-0 ml-[-28%] md:ml-[-20%] mt-[4%] md:mt-[6%] 2xl:mt-[4%] z-0">
              <Image width={775} height={1092} layout="responsive" src="/icons/palm-tree.svg" alt="Plant Illustration" className="w-full" />
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

          <div className="w-full bg-blue">
            <Image width={1000} height={600} layout="responsive" src="https://placedog.net/1000/600" alt="Placeholder Dog" className="w-full" />
          </div>
        </motion.div>

        <motion.div variants={fade} className="relative z-10">
          <Footer />
        </motion.div>
      </motion.section>
    </Layout>
  )
}

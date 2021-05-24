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
import AboutCarousel from '../components/about-carousel'

export default function About() {
  return (
    <Layout>
      <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>About Us - Swwim</title>
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
        className="bg-blue bg-noise text-white"
      >
        <motion.div variants={fade} className="relative z-10 pb-8 md:pb-12 2xl:pb-16">
          <Container>
            <div className="relative mb-16 md:mb-20 2xl:mb-28 mx-[5%] md:mx-[10%] lg:mx-24 2xl:mx-32">
              <span className="text-xl md:text-2xl 2xl:text-3xl font-display uppercase flex mb-5 md:mb-8 2xl:mb-10 justify-center">
                <span className="block mx-px">A</span>
                <span className="block mx-px mt-[-3px]">b</span>
                <span className="block mx-px">o</span>
                <span className="block mx-px mt-[-3px]">u</span>
                <span className="block mx-px">t</span>
              </span>

              <div className="relative">
                <h1 className="block font-display uppercase text-[8.5vw] md:text-[5.75vw] 2xl:text-[80px] leading-none relative z-10 text-center">the team behind making communicating your brand a balmy breeze.</h1>
                
                <div className="absolute bottom-0 right-0 w-[40%] md:w-[32%] mr-[13%] md:mr-[4%] lg:mr-[6%] 2xl:mr-[7%] mb-[-3%] md:mb-[-2%] 2xl:mb-[-3%]">
                  <Image width={369} height={150} layout="responsive" src="/icons/about-header-squiggle.svg" alt="Squiggle Underline" className="w-full" />
                </div>
              </div>
            </div>
          </Container>

          <div className="mb-3 md:mb-6">
            <AboutCarousel />
          </div>

          <Container>
            <div className="md:mx-[10%] lg:mx-32 xl:mx-40 2xl:mx-56 mb-8 md:mb-16 2xl:mb-20">
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
          </Container>
        </motion.div>

        <motion.div variants={fade} className="relative z-10">
          <Footer />
        </motion.div>
      </motion.section>
    </Layout>
  )
}

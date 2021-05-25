import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/layout'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Container from '../../components/container'
import { fade } from "../../helpers/transitions"
import { motion } from 'framer-motion'
import NewsTeaser from '../../components/news-teaser'

import { caseStudies } from '../../helpers/fake-data'

export default function NewsLanding() {
  return (
    <Layout>
      <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>Latest Poolside - Swwim</title>
          <meta
          name="description"
          content="nextJS boilerplate"
          />
          <meta name="og:title" content="Website Title" />
          <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header theme="white" />
      
      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        className="bg-white bg-noise text-blue"
      >
        <motion.div variants={fade} className="w-[260px] md:w-[420px] xl:w-[500px] 2xl:w-[580px] absolute top-0 left-0 ml-[15%] md:ml-[35%] xl:ml-[40%] 2xl:ml-[45%] mt-[-200px] md:mt-[-300px] 2xl:mt-[-400px] z-0 transform rotate-6">
          <Image width={551} height={555} layout="responsive" src="/icons/plant-3.svg" alt="Plant Illustration" className="w-full transform rotate-90" />
        </motion.div>

        <motion.div variants={fade} className="relative z-10 overflow-hidden">
          <Container>
            <div className="relative overflow-visible">
              <div className="relative mb-12 md:mb-20 lg:mb-24 2xl:mb-24 mx-[3%] md:mx-[10%] lg:mx-48 2xl:mx-64">
                <h1 className="block font-display uppercase text-[9.7vw] md:text-[6.45vw] lg:text-[5.75vw] 2xl:text-[80px] leading-none relative z-10 text-center">Latest Poolside</h1>
              </div>
            </div>

            <div className="border-t border-b border-blue py-4 md:py-6 relative z-10 overflow-hidden">
              <div className="relative flex overflow-x-hidden font-display uppercase md:text-[2vw] 2xl:text-3xl">
                <div className="animate-marquee whitespace-nowrap">
                  <span className="mx-1">Swwim News</span>
                  <span className="mx-1">&bull;</span>
                  <span className="mx-1">Swwim News</span>
                  <span className="mx-1">&bull;</span>
                  <span className="mx-1">Swwim News</span>
                  <span className="mx-1">&bull;</span>
                  <span className="mx-1">Swwim News</span>
                  <span className="mx-1">&bull;</span>
                  <span className="mx-1">Swwim News</span>
                  <span className="mx-1">&bull;</span>
                  <span className="mx-1">Swwim News</span>
                  <span className="mx-1">&bull;</span>
                  <span className="mx-1">Swwim News</span>
                  <span className="mx-1">&bull;</span>
                  <span className="mx-1">Swwim News</span>
                  <span className="mx-1">&bull;</span>
                  
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
                  <span className="mx-1">Swwim News</span>
                  <span className="mx-1">&bull;</span>
                  <span className="mx-1">Swwim News</span>
                  <span className="mx-1">&bull;</span>
                  <span className="mx-1">Swwim News</span>
                  <span className="mx-1">&bull;</span>
                  <span className="mx-1">Swwim News</span>
                  <span className="mx-1">&bull;</span>
                  <span className="mx-1">Swwim News</span>
                  <span className="mx-1">&bull;</span>
                  <span className="mx-1">Swwim News</span>
                  <span className="mx-1">&bull;</span>
                  <span className="mx-1">Swwim News</span>
                  <span className="mx-1">&bull;</span>
                  <span className="mx-1">Swwim News</span>
                  <span className="mx-1">&bull;</span>
                </div>
              </div>
            </div>
          
            <div className="mb-12 md:mb-16 2xl:mb-24 relative z-10 overflow-x-hidden">
              {caseStudies.map((item, i) => {
                return (
                  <NewsTeaser key={i} heading="How Alcohol Brands Can Get Seen on TikTok #TheLowdown" />
                )
              })}
            </div>
            
            <ul className="flex flex-wrap items-center justify-center mb-12 md:mb-16 2xl:mb-24">
              <li>
                <svg className="w-8 mt-2 transform rotate-180 mr-5 md:mr-8" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="21" cy="21.5" r="21" fill="#1658B3"/><path d="M12.227 20.603H27.86v2.017H12.227v-2.017z" fill="#FFF"/><path d="M23.523 28.37l-1.413-1.413 5.346-5.345-5.346-5.345 1.413-1.412 6.757 6.757-6.757 6.758z" fill="#FFF" /></svg>
              </li>
              <li className="block border-b border-blue p-2 mx-1 md:mx-3 md:text-lg">1</li>
              <li className="block border-b border-blue border-opacity-20 p-2 mx-1 md:mx-3 md:text-lg">2</li>
              <li className="block border-b border-blue border-opacity-20 p-2 mx-1 md:mx-3 md:text-lg">3</li>
              <li className="block border-b border-blue border-opacity-20 p-2 mx-1 md:mx-3 md:text-lg">...</li>
              <li className="block border-b border-blue border-opacity-20 p-2 mx-1 md:mx-3 md:text-lg">16</li>
              <li>
                <svg className="w-8 mt-2 ml-5 md:ml-8" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="21" cy="21.5" r="21" fill="#1658B3"/><path d="M12.227 20.603H27.86v2.017H12.227v-2.017z" fill="#FFF"/><path d="M23.523 28.37l-1.413-1.413 5.346-5.345-5.346-5.345 1.413-1.412 6.757 6.757-6.757 6.758z" fill="#FFF" /></svg>
              </li>
            </ul>
          </Container>
        </motion.div>

        <motion.div variants={fade} className="relative z-10 overflow-hidden">
          <Footer />
        </motion.div>
      </motion.section>
    </Layout>
  )
}

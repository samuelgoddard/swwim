import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/layout'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Container from '../../components/container'
import { fade } from "../../helpers/transitions"
import { motion } from 'framer-motion'
import NewsTeaser from '../../components/news-teaser'
import NewsTeaserStacked from '../../components/news-teaser-stacked'

import { caseStudies } from '../../helpers/fake-data'
import Button from '../../components/button'
import Logo from '../../components/logo'

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
          
            <div className="mb-8 md:mb-12 2xl:mb-16 relative z-10 overflow-x-hidden">
              {caseStudies.map((item, i) => {
                return (
                  <NewsTeaser key={i} heading="How Alcohol Brands Can Get Seen on TikTok #TheLowdown" />
                )
              })}
            </div>

            <div className="flex flex-wrap w-full mb-3 md:mb-16 2xl:mb-20">
              <div className="w-full md:w-8/12 lg:w-9/12">
                <div className="flex flex-wrap -mx-3 md:-mx-6">
                  <div className="w-1/2 md:w-1/2 px-3 md:px-6 mb-5 md:mb-0">
                    <NewsTeaserStacked heading="How Alcohol Brands Can Get Seen on TikTok #TheLowdown" />
                  </div>
                  <div className="w-1/2 md:w-1/2 px-3 md:px-6 mb-5 md:mb-0">
                    <NewsTeaserStacked heading="How Alcohol Brands Can Get Seen on TikTok #TheLowdown" />
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-4/12 lg:w-3/12">
                <div className="md:pl-12 w-full">
                  <div className="w-full bg-blue-dark text-white p-5 md:p-6 2xl:p-10 mb-5 md:mb-8 2xl:mb-12">
                    <div className="bg-blue bg-noise mx-auto w-24 md:w-32 h-24 md:h-32 flex items-center justify-center mb-3 md:mb-5">
                      <Logo width="w-8/12" />
                    </div>

                    <span className="w-full md:w-auto text-sm md:text-lg 2xl:text-xl font-medium block text-center">@weswwim</span>
                  </div>

                  <div className="w-full hidden md:block">
                    <div className="w-10/12 mx-auto">
                      <Image width={210} height={105} layout="responsive" src="/icons/soak-up.svg" alt="Soak Up The Latest handwritten text" className="w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>

          <div className="mt-4 2xl:mt-8 relative z-10 overflow-hidden">
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

          <Container>
            <div className="flex flex-wrap w-full mb-12 md:mb-16 2xl:mb-20 relative overflow-visible pt-8 md:pt-16 2xl:pt-24">
              <div className="w-[80%] md:w-[45%] 2xl:w-[45%] absolute top-0 left-0 ml-[-28%] md:ml-[-20%] md:mt-[-0%] 2xl:mt-[-5%] z-0">
                <Image width={775} height={1092} layout="responsive" src="/icons/palm-tree.svg" alt="Plant Illustration" className="w-full" />
              </div>

              <div className="w-[24%] md:w-[20%] absolute top-0 right-0 mr-[-14%] md:mr-[-10%] 2xl:mr-[-9%] mt-[100%] md:mt-[30%] z-0">
                <Image width={278} height={276} layout="responsive" src="/icons/plant-2.svg" alt="Plant Illustration" className="w-full transform rotate-12" />
              </div>

              <div className="w-full md:w-4/12 lg:w-3/12 mb-8 md:mb-0 relative z-10">
                <div className="md:pr-12 w-full">
                  <div className="w-full bg-brown text-white p-5 md:p-6 2xl:p-10">
                    <span className="block font-display uppercase text-xl md:text-2xl 2xl:text-3xl text-center mb-5 md:mb-8">See how we can help your business grow today</span>

                    <div className="flex items-center justify-center">
                      <Button white overrideClasses="text-black" href="/contact">Contact Us</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-8/12 lg:w-9/12 relative z-10">
                <div className="flex flex-wrap -mx-3 md:-mx-6">
                  <div className="w-1/2 md:w-1/2 px-3 md:px-6 mb-5 md:mb-0">
                    <NewsTeaserStacked heading="How Alcohol Brands Can Get Seen on TikTok #TheLowdown" />
                  </div>
                  <div className="w-1/2 md:w-1/2 px-3 md:px-6 mb-5 md:mb-0">
                    <NewsTeaserStacked heading="How Alcohol Brands Can Get Seen on TikTok #TheLowdown" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full mb-12 md:mb-24 2xl:mb-32">
              <div className="flex flex-wrap -mx-3 md:-mx-6">
                <div className="w-1/2 md:w-1/3 px-3 md:px-6 mb-5 md:mb-0">
                  <NewsTeaserStacked supporting heading="How Alcohol Brands Can Get Seen on TikTok #TheLowdown" />
                </div>
                <div className="w-1/2 md:w-1/3 px-3 md:px-6 mb-5 md:mb-0">
                  <NewsTeaserStacked supporting heading="How Alcohol Brands Can Get Seen on TikTok #TheLowdown" />
                </div>
                <div className="w-1/2 md:w-1/3 px-3 md:px-6 mb-5 md:mb-0">
                  <NewsTeaserStacked supporting heading="How Alcohol Brands Can Get Seen on TikTok #TheLowdown" />
                </div>
              </div>
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

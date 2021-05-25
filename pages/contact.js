import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Container from '../components/container'
import { fade } from "../helpers/transitions"
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Contact() {
  return (
    <Layout>
      <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>Contact - Swwim</title>
          <meta
          name="description"
          content="nextJS boilerplate"
          />
          <meta name="og:title" content="Website Title" />
          <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        className="bg-blue-dark bg-noise text-white overflow-hidden min-h-screen flex flex-wrap py-12 md:pt-24 md:pb-[14vh] 2xl:pt-32 2xl:pb-[17vh]"
      >
        {/* Lady With Megaphone */}
        <motion.div variants={fade} className="w-[44%] md:w-[38%] lg:w-[34%] xl:w-[30%] 2xl:w-[480px] absolute bottom-0 right-0 z-10 mr-[-18%] mb-[-5%] md:mr-[-10%] 2xl:mr-[-150px]">
          <Image height={800} width={415} src="/icons/woman-megaphone.svg" alt="Woman With Megaphone Illustration" layout="responsive" priority />
        </motion.div>

        {/* Bottom Middle Bigger Leaf */}
        <motion.div variants={fade} className="w-[45%] md:w-[40%] xl:w-[35%] 2xl:w-[35%] absolute bottom-0 right-0 ml-[-39%] md:mr-[10%] xl:mr-[2%] 2xl:ml-[-19%] mb-[-26%] md:mb-[-24%] xl:mb-[-21%] 2xl:mb-[-20%] z-0 transform -rotate-45">
          <Image width={551} height={555} layout="responsive" src="/icons/plant-3.svg" alt="Plant Illustration" className="w-full transform -rotate-90" priority />
        </motion.div>

        {/* Middle Right Monsterra */}
        <motion.div variants={fade} className="w-[33%] md:w-[24%] xl:w-[20%] 2xl:w-[320px] absolute top-0 right-0 mr-[-14%] md:mr-[-10%] 2xl:mr-[-140px] mt-[35vh] md:mt-[16vh] xl:mt-[0%] z-0">
          <Image width={278} height={276} layout="responsive" src="/icons/plant-2.svg" alt="Plant Illustration" className="w-full transform -rotate-45" priority />
        </motion.div>

        {/* Middle Leaf Monsterra */}
        <motion.div variants={fade} className="w-[35%] md:w-[38%] xl:w-[25%] 2xl:w-[22%] absolute bottom-0 left-0 ml-[-18%] md:ml-[-25%] xl:ml-[-18%] 2xl:ml-[-12%] mb-[70%] md:mb-[40%] xl:mb-[35%] 2xl:mb-[35%] z-0">
          <Image width={278} height={276} layout="responsive" src="/icons/plant-2.svg" alt="Plant Illustration" className="w-full transform -rotate-180" priority />
        </motion.div>

        {/* Bottom Left Bigger Leaf */}
        <motion.div variants={fade} className="w-[65%] md:w-[44%] xl:w-[38%] 2xl:w-[35%] absolute bottom-0 left-0 ml-[-39%] md:ml-[-25%] xl:ml-[-20%] 2xl:ml-[-19%] mb-[0%] md:mb-[3%] xl:mb-[4%] 2xl:mb-[2%] z-0">
          <Image width={551} height={555} layout="responsive" src="/icons/plant-3.svg" alt="Plant Illustration" className="w-full transform -rotate-12" priority />
        </motion.div>

        {/* Bottom Left Leaf */}
        <motion.div variants={fade} className="w-[45%] md:w-[30%] xl:w-[28%] 2xl:w-[28%] absolute bottom-0 left-0 ml-[-20%] md:ml-[-15%] xl:ml-[-13%] 2xl:ml-[-12%] mb-[-10%] md:mb-[-7%] xl:mb-[-8%] 2xl:mb-[-10%] z-0">
          <Image width={267} height={253} layout="responsive" src="/icons/plant-4.svg" alt="Plant Illustration" className="w-full transform" priority />
        </motion.div>

        <motion.div variants={fade} className="relative z-30 flex flex-wrap w-full">
          <div className="mb-auto w-full">
            <Container>
              <div className="flex mb-8 md:mb-12 2xl:mb-20">
                <Link href="/">
                  <a className="flex flex-wrap space-x-3 items-center ring-white">
                    <svg className="w-8 transform" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity=".324" cx="17.5" cy="17.5" r="16.5" transform="rotate(-180 17.5 17.5)" stroke="currentColor" strokeWidth="1.12"/><path d="M24 16.57l-6.188-6.232-6.188 6.231M17.812 10.338V25" stroke="currentColor" strokeWidth="1.008"/></svg>
                    <span className="block font-bold">Back to site</span>
                  </a>
                </Link>
              </div>
            </Container>
          </div>

          <div className="mt-auto w-full">
            <Container>
              <div className="mx-8 mb-8 md:mb-0 md:mx-20 xl:mx-32 2xl:mx-40">
                <span className="block font-bold uppercase mb-6 2xl:mb-8 text-lg tracking-widest">Dear swwim...</span>
                <form>
                  <textarea
                    className="bg-transparent text-white font-sans text-xl md:text-2xl 2xl:text-3xl w-full ring-white mb-0 md:mb-12 2xl:mb-20"
                    placeholder="What can we do for you...?"
                    rows="7"
                  />

                  <div className="border border-white w-full flex flex-wrap">
                    <input
                      className="flex-1 p-5 md:p-8 bg-transparent text-white font-sans font-bold w-full focus:outline-none ring-white"
                      placeholder="Your email address.."
                    />
                    <div className="w-auto border-l border-white">
                      <button
                        className="text-center font-bold w-full h-full flex items-center justify-center ring-white md:text-lg px-5 md:px-8 hover:bg-black hover:bg-opacity-10 transition ease-in-out duration-300"
                        type="submit"
                      >Send <span className="hidden md:inline-block">&nbsp;your message</span></button>
                    </div>
                  </div>
                </form>
              </div>
            </Container>
          </div>
        </motion.div>
      </motion.section>
    </Layout>
  )
}

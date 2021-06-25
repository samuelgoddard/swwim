import { useContext } from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Container from '../components/container'
import { fade } from "../helpers/transitions"
import { motion } from 'framer-motion'
import SanityPageService from '../services/sanityPageService'
import { NextSeo } from 'next-seo'
import { SmoothScrollProvider } from '../contexts/SmoothScroll.context'
import LegalTabs from '../components/legal-tabs'

const query = `{
  "legal": *[_type == "legal"] {
    title,
    content
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

export default function Legal(initialData) {
  const { data: { legal, contact }  } = pageService.getPreviewHook(initialData)()

  return (
    <Layout>
      <NextSeo title="Legal" />

      <Header contact={contact} />

      <div data-scroll-container id="scroll-container">
      <SmoothScrollProvider options={{ smooth: true, lerp: 0.07 }}>

      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        className="bg-blue bg-noise text-white overflow-hidden pt-24 md:pt-32 xl:pt-40"
      >
        <motion.div variants={fade} className="relative z-10">
          <Container>
            <div className="relative mb-16 md:mb-20 2xl:mb-28 mx-[3%] md:mx-[5%] lg:mx-24 2xl:mx-32">
              <span className="text-xl md:text-2xl 2xl:text-3xl font-display uppercase flex mb-4 md:mb-6 2xl:mb-8 justify-center">
                <span className="block mx-px animate--letter-float delay-75">L</span>
                <span className="block mx-px animate--letter-float">e</span>
                <span className="block mx-px animate--letter-float delay-75">g</span>
                <span className="block mx-px animate--letter-float">a</span>
                <span className="block mx-px animate--letter-float delay-75">l</span>
              </span>

              <div className="relative">
                <h1 className="block font-display uppercase text-[9.7vw] md:text-[6.45vw] lg:text-[5.75vw] 2xl:text-[80px] leading-none relative z-10 text-center">Terms &amp; Conditions</h1>
              </div>
            </div>
          </Container>

          <Container>
            <div className="relative z-10 overflow-visible pb-12 md:pb-32 2xl:pb-40">
              <LegalTabs items={legal}></LegalTabs>
            </div>
          </Container>
        </motion.div>
      
        <motion.div variants={fade} className="relative z-10">
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